"use client"
import {React,useEffect, useState} from 'react'
import { Avatar, List,Spin } from 'antd';
import { GeneratorOfFormValues } from '../utilities/data';








function page() {
    const [formValuesArray, setFormValuesArray] = useState([]);

    useEffect(() => {
        const values = GeneratorOfFormValues();
        setFormValuesArray(values);
    }, []);
    if(formValuesArray.length==0){
        return (
            <div className="text-center ">
                <Spin tip="Loading" size="large" ></Spin>
            </div>
        )
    }
   
  return (
      <List
          itemLayout="horizontal"
          dataSource={formValuesArray}
          renderItem={(item) => (
              <List.Item>
                  <List.Item.Meta
                      avatar={<Avatar src={item.personalInformation.cvFile} />}
                      title={<a href="">{item.personalInformation.firstName} {item.personalInformation.lastName}</a>}
                      description={item.personalInformation.desc}
                      
                      />
              </List.Item>
          )}
      />
  )
}

export default page;