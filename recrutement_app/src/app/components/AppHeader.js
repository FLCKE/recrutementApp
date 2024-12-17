"use client"
import React from "react";
import { Header } from "antd/es/layout/layout";
import { CodeSandboxSquareFilled, DownOutlined } from '@ant-design/icons'
import { locale } from "@/i18n/request"
import { Form, Select, Dropdown, Space, Button } from "antd"
import { setUserLocale } from "../services/locale";



function AppHeader() {
    //initialisation des valeur du selecte pour changer de langue 
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
            <a href="/">
                <div className="flex item-cneter gap-2 text-white">
                    <CodeSandboxSquareFilled className="text-white text-3xl" />
                    <div>
                        Logo
                    </div>
                </div>
            </a>
            <div>
                
                <Dropdown
                    className="border-1"
                    menu={{
                        items,
                    }}
                    
                >
                    <a onClick={(e) => e.preventDefault()} className="text-white">
                        <Space>
                            Language
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
                
            </div>
        </Header>
    )
}
export default AppHeader;