import { Data } from "@/app/utilities/data";
import { Row, Col, Card,Collapse, Image ,Descriptions} from "antd"
import Meta from "antd/es/card/Meta";
import {EyeOutlined, FontSizeOutlined } from '@ant-design/icons';


export default function Page({ params }) {
    const items = [
        {
            key: '1',
            label: 'Firstname',
            children: Data[params.id].personalInformation.firstName,
        },
        {
            key: '2',
            label: 'Lastname',
            children: Data[params.id].personalInformation.lastName,
        },
        {
            key: '3',
            label: 'Email',
            children: Data[params.id].personalInformation.email,
        },
        {
            key: '4',
            label: 'Phone',
            children: Data[params.id].personalInformation.phoneNumber,
        },
        {
            key: '5',
            label: 'Bio',
            children: Data[params.id].personalInformation.desc,
            
        },
        {
            key: '6',
            label: 'Birthday',
            children: Data[params.id].personalInformation.birthday,
        },
    ];
    return (
        <section>
            <div >
                <h1 className="font-bold text-2xl my-3">
                   Personal Information 
                </h1>
                <div className="m-5">
                    <Row >
                        <Col span={18} push={5}>
                            <Descriptions title="" bordered items={items} />

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
                    Expérience
                </h1>
                <div className="m-5">
                    {Data[params.id].experience.map((experience, index) => (
                        <Collapse
                            collapsible="header"
                            defaultActiveKey={['1']}
                            items={[
                                {
                                    key: index,
                                    label: experience.jobTitle,
                                    children: <div>
                                        <Row>
                                            <Col span={8} offset={2}>
                                                <h1 className="my-2"><span className="font-bold">Job Title :</span> {experience.jobTitle}</h1>
                                                <h1 className="my-2"><span className="font-bold">Location:</span> {experience.location}</h1>
                                                <h1 className="my-2"><span className="font-bold">Start Day :</span> {experience.startDay}</h1>
                                            </Col>
                                            <Col span={8} offset={6}>
                                                <h1 className="my-2"><span className="font-bold">Business or Client:</span> {experience.businessOrClient}</h1>
                                                <h1 className="my-2"><span className="font-bold">Type of contract:</span> {experience.typeOfContract}</h1>
                                                <h1 className="my-2"><span className="font-bold">End Day :</span> {experience.endDay}</h1>

                                            </Col>
                                        </Row>
                                    </div>,
                                },
                            ]}
                        />
                    ))}
                </div>
                
            </div>
        </section>
    )
}