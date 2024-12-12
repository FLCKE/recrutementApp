"use client"
import React from "react";
import { Header } from "antd/es/layout/layout";
import { CodeSandboxSquareFilled, DownOutlined } from '@ant-design/icons'
import { useLocale, useTranslations } from "next-intl";
import { locale } from "@/i18n/request"
import { Form, Select, Dropdown, Space, Button } from "antd"
import { setUserLocale } from "../services/locale";



function AppHeader() {
    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" onClick={() => setUserLocale("en")}>
                    English
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" onClick={() => setUserLocale("fr")}>
                    French
                </a>
            )
        }
    ];
  
    return (
        <Header className="flex item-center justify-between">
            <div className="flex item-cneter gap-2 text-white">
                <CodeSandboxSquareFilled className="text-white text-3xl" />
                <div>
                    Logo
                </div>
            </div>
            <div>
                
                <Dropdown
                   
                    menu={{
                        items,
                    }}
                    
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            Hover me
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
                {/* <Select
                    defaultValue={useLocale()}
                    onChange={handleChange}
                    options={[{ value: 'en', label: (<button >English</button>) }, { value: 'fr', label: 'French' }]}
                    placeholder="Langage"
                /> */}
            </div>
        </Header>
    )
}
export default AppHeader;