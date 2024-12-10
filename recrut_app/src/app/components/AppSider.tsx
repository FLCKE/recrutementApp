import React from "react";
import {Menu } from "antd"
import Link  from "next/link";
function AppSider(){
    const menuItems =[
        { label: <Link href="/candidatProfilView">Profil</Link>,key:1},
        { label: <Link href="/listCandidatView">Candidats</Link>,key:2}
    ]
    return(
           <Menu mode="inline" items={menuItems}>

           </Menu>
        
    )
}
export default AppSider;