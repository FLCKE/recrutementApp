
import React from "react"
import { Data } from "@/app/utilities/data";
import { Row, Col, Card,Collapse, Image ,Descriptions,Tag} from "antd"
import {  CheckCircleOutlined } from '@ant-design/icons';
import { useTranslations } from 'next-intl';

export default function Page({ params }) {
    const t = useTranslations('Page'); // récupérer la section page pour la traduction 
    //initialiser les valeur à mettre dans la balise description  
    const items = [
        {
            key: '1',
            label: t("firstname"),
            children: Data[params.id].personalInformation.firstName,
        },
        {
            key: '2',
            label: t("lastname"),
            children: Data[params.id].personalInformation.lastName,
        },
        {
            key: '3',
            label: t("email"),
            children: Data[params.id].personalInformation.email,
        },
        {
            key: '4',
            label: t("number"),
            children: Data[params.id].personalInformation.phoneNumber,
        },
        {
            key: '5',
            label: 'Bio',
            children: Data[params.id].personalInformation.desc,
            
        },
        {
            key: '6',
            label: t("birthday"),
            children: Data[params.id].personalInformation.birthday,
        },
    ];
    return (
        <section>
            <div >
                <h1 className="font-bold text-2xl my-3">
                  {t("personalInfoTitle")} 
                </h1>
                <div className="m-5">
                    {/* affichage du cv sous forme d'image et des information du candidats insérer dans la description  */}
                    <Row >
                        <Col span={18} push={5}>
                            <Descriptions  bordered items={items} />

                        </Col>
                        <Col span={6} pull={18}>
                            <Image
                                width={150}
                                src={Data[params.id].cvFile.url}
                            />
                            

                        </Col>
                    </Row>
                </div>
               
            </div>
            <div className="my-5">
                <h1 className="font-bold text-2xl my-3">
                    {t("experienceTitle")}
                </h1>
                <div className="m-5">
                    {/* affichage des expérience sous forme de collaspe  */}
                    {Data[params.id].experience.map((experience, index) => (
                        <Collapse
                            collapsible="header"
                            defaultActiveKey={['0']}
                            items={[
                                {
                                    key: index,
                                    label: experience.jobTitle,
                                    children: <div>
                                        <Row>
                                            <Col span={8} offset={2}>
                                                <h1 className="my-2"><span className="font-bold">{t("jobTitle")}:</span> {experience.jobTitle}</h1>
                                                <h1 className="my-2"><span className="font-bold">{t("location")}:</span> {experience.location}</h1>
                                                <h1 className="my-2"><span className="font-bold">{t("startDate")} :</span> {experience.startDay}</h1>
                                            </Col>
                                            <Col span={8} offset={6}>
                                                <h1 className="my-2"><span className="font-bold">{t("client")}:</span> {experience.businessOrClient}</h1>
                                                <h1 className="my-2"><span className="font-bold">{t("typeContract")}:</span> {experience.typeOfContract}</h1>
                                                <h1 className="my-2"><span className="font-bold">{t("endDate")} :</span> {experience.endDay}</h1>

                                            </Col>
                                        </Row>
                                    </div>,
                                },
                            ]}
                        />
                    ))}
                </div>
                
            </div>
            <div>
                <div className="my-5">
                    <h1 className="font-bold text-2xl my-3">
                        {t("skillsTitle")}
                    </h1>
                    {/* affichage des compétence sous forme de tag */}
                    <div className="m-5">
                        {Data[params.id].skills.map((skill, index) => (
                            <Tag bordered={false} icon={<CheckCircleOutlined />} color="processing">
                                {skill.skillName}
                            </Tag>
                            
                        ))}
                    </div>

                </div>
                
            </div>
        </section>
    )
}