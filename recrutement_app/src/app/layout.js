

import { AntdRegistry } from '@ant-design/nextjs-registry';
import Layout from 'antd/es/layout/layout';
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import AppSider from "./components/AppSider";
import AppHeader from "./components/AppHeader";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { setUserLocale } from "./services/locale";
import { getLocale, getMessages } from 'next-intl/server';
import StoreProvider from '../lib/StoreProvider'
import theme from '../theme/themeConfig';
import { ConfigProvider } from 'antd';



export  const metadata = {
  title: "Create recrutment App",
  description: "Generated by FLCEK",
};

export default async function RootLayout({ children }) {
  //recupération de la valeur de langue actuelle
  const locale = await getLocale();
  //mettre en francais 
  setUserLocale("fr");
 

  const messages = await getMessages();
  return (
      <html lang={locale}>
        <body>
          {/* relier le theme créer avec le projet */}
          <ConfigProvider theme={theme}>
            {/* relier la traduction next-intl avec le projet */}
            <NextIntlClientProvider messages={messages}>
              {/* relier ant design a notre proejt */}
              <AntdRegistry>
                <Layout>
                  <AppHeader />
                  <Layout hasSider >
                    <Sider theme="light" className="fixed "  >
                      <AppSider />
                    </Sider>
                    <Layout >
                      <Content style={{ margin: 50 }} >
                        {/* relier le store créer grace au redux au projet afin de l'utiliser dans tout le projet */}
                        <StoreProvider>
                            {children}
                        </StoreProvider>
                      </Content>
                    </Layout>
                  </Layout>
                </Layout>
              </AntdRegistry>
            </NextIntlClientProvider>
          </ConfigProvider>
        </body>
      </html>
    
  );
}
