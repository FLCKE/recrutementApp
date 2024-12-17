"use client"
import {React,useEffect, useState} from 'react'
import { Avatar, List,Spin } from 'antd';
import { Data   } from '../utilities/data';
import { useTranslations } from 'next-intl';








function page() {
    const [formValuesArray, setFormValuesArray] = useState([]);

    useEffect(() => {
        const values = Data;
        
        setFormValuesArray(values);
    }, []);
    const t = useTranslations('Page');
    if(formValuesArray.length==0){
        return (
            <div className="text-center ">
                <Spin tip="Loading" size="large" ></Spin>
            </div>
        )
    }
   
  return (
    <section>
        <h1 className="font-bold text-2xl my-3">{t("titlePageList")}</h1>
        <List
          itemLayout="horizontal"
          dataSource={formValuesArray}
          renderItem={(item,index) => (
              <List.Item>
                  <List.Item.Meta
                      avatar={<Avatar shape="square" src={item.cvFile.url} />}
                      title={<a href={ "/candidatInfoView/"+index }>{item.personalInformation.firstName} {item.personalInformation.lastName}</a>}
                      description={item.personalInformation.desc}
                      
                      />
              </List.Item>
          )}
      />
    </section>
  )
}

export default page;