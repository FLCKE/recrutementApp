import React from "react";
import { Header} from "antd/es/layout/layout";
import { CodeSandboxSquareFilled } from '@ant-design/icons'  
import {Form , Select } from "antd"
function AppHeader(){
    return(
        <Header className="flex item-center justify-between">
            <div className="flex item-cneter gap-2 text-white">
                <CodeSandboxSquareFilled className="text-white text-3xl"/>
                <div>
                    Logo
                </div>
            </div>
            <div>
               
                <Select
                    defaultValue="English"
                    
                    allowClear
                    options={[{ value: 'English', label: 'English' }, { value: 'French', label: 'French' }]}
                    placeholder="Langage"
                />
                </div>
        </Header>
    )
}
export default AppHeader;