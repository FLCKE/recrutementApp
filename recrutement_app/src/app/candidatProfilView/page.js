"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { useDispatch } from 'react-redux';
import { setPersonalInfo, addExperience, addSkills,setCvFile } from '../../lib/slices/dataSlice';
import { MinusCircleOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, message, Form, Input, DatePicker, InputNumber, Upload, Select, Space } from 'antd';

const { TextArea } = Input;
function Page()  {
    const t = useTranslations('Page');// Hook pour la gestion des traductions.
    const dispatch = useDispatch(); //Hook Redux pour dispatcher des actions.
    // Fonction appelée lors de la validation du formulaire.
    const onFinish = (values) => {
        console.log('Success:', values);

        // Envoi des informations personnelles au store Redux.
         dispatch(setPersonalInfo({
            FirstName: values.FirstName,
            LastName: values.LastName,
            email: values.email,
            phoneNumber: values.phoneNumber,
            birthday: values.birthday,
        }));

        // Vérification et ajout des expériences dans le store
        if (values.experience) {
            dispatch(addExperience(values.experience));
        }

        // Vérification et ajout des compétences dans le store.
        if (values.skills) {
            dispatch(addSkills(values.skills));
        }

        // Ajout du fichier CV dans le store.
        if (values.cvFile) {
            dispatch(setCvFile(values.cvFile));
        }
    };
     // Fonction appelée en cas d'erreur de validation du formulaire.
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Form
                name="dynamic_form_candidat"
                autoComplete="off"
                initialValues={{ remember: true }}// Valeurs initiales.
                onFinish={onFinish}// Gestion de la soumission réussie.
                onFinishFailed={onFinishFailed}// Gestion des erreurs de validation.
            >
                {/* Section des informations personnelles */}
                <div>
                    <h1>{t("personalInfoTitle")}</h1>
                    <Form.Item
                        label={t("firstname")}
                        name="FirstName"
                        rules={[{ required: true, message: 'Please input your Firstname!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={t("lastname")}
                        name="LastName"
                        rules={[{ required: true, message: 'Please input your Lastname!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={t("email")}
                        name="email"
                        rules={[
                            { type: 'email', message: 'The input is not valid E-mail!' },
                            { required: true, message: 'Please input your email!' },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={t("number")}
                        name="phoneNumber"
                        rules={[
                            { type: 'number', message: 'The input is not valid number!' },
                            { required: true, message: 'Please input your number!' },
                        ]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        label={t("birthday")}
                        name="birthday"
                        rules={[
                            { type: 'date', message: 'The input is not valid birthday!' },
                            { required: true, message: 'Please input your birthday!' },
                        ]}
                    >
                        <DatePicker placeholder={t("selectDate")} />
                    </Form.Item>
                </div>
                {/* Section Expérience */}
                <div>
                    <h1>{t("experienceTitle")}</h1>
                    <Form.List name="experience">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, ...restField }) => (
                                    <div>
                                        <Space key={key} style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'JobTitle']}
                                                rules={[
                                                    { required: true, message: 'Missing Job title' },
                                                ]}
                                            >
                                                <Input placeholder={t("jobTitle")} />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'BusinessOrClient']}
                                                rules={[
                                                    { required: true, message: 'Missing Business or Client' },
                                                ]}
                                            >
                                                <Input placeholder={t("client")} />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'Location']}
                                                rules={[
                                                    { required: true, message: 'Missing location' },
                                                ]}
                                            >
                                                <Input placeholder={t("location")} />
                                            </Form.Item>
                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                        </Space>
                                        <Space key={key} style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }} align="baseline">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'typeOfContract']}
                                            rules={[{
                                                type: 'string',
                                                message: 'The input is not valid type of contract!',
                                            }, { required: true, message: 'Missing Type of contract' }]}
                                        >
                                            <Select

                                                style={{width:120 }}
                                                allowClear
                                                options={[{ value: 'Stage', label: 'Stage' }, { value: 'Alternance', label: 'Alternance' }, { value: 'CDI', label: 'CDI' }, { value: 'CDD', label: 'CDD' }]}
                                                    placeholder={t("typeContract")}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                                 {...restField}
                                                name={[name,"startDay"]}
                                                rules={[{ required: true, message: 'Please input your startDay!' }]}>
                                                        <DatePicker placeholder={t("startDate")} />
                                        </Form.Item>
                                        <Form.Item
                                            {...restField}
                                            name={[name,"endDay"]}
                                            dependencies={['startDay']}
                                            rules={[ { required: true, message: 'Please input your endDay!' }]}>
                                                <DatePicker placeholder={t("endDate")} />
                                        </Form.Item>
                                        
                                        </Space>
                                        <Space key={key} style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'descPost']}
                                                
                                            >
                                                <TextArea
                                                    showCount
                                                    maxLength={100}
                                                    
                                                    placeholder={t("descPost")}
                                                    style={{ height: 120 , width: "40rem" }}
                                                />
                                            </Form.Item>
                                            
                                            
                                        </Space>
                                    </div>
                                ))}
                                <Form.Item>
                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                        {t("btnExperience")}
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                </div>
                 {/* Section Compétences */}
                <div>
                    <h1>{t("skillsTitle")}</h1>
                    <Form.List name="skills">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, ...restField }) => (
                                    <Space key={key} style={{ display: 'flex', marginBottom: 8 }}>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'SkillName']}
                                            rules={[
                                                { required: true, message: 'Missing skills name' },
                                            ]}
                                        >
                                            <Input placeholder={t("skill")} />
                                        </Form.Item>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'SkillLevel']}
                                            rules={[
                                                { required: true, message: 'Missing Skill level' },
                                            ]}
                                        >
                                            <Select
                                                placeholder={t("debutant")}
                                                style={{ width: 120 }}
                                                options={[
                                                    { value: 'Débutant', label: t("debutant") },
                                                    { value: 'Intermédiaire', label: t("intermediaire") },
                                                    { value: 'Pro', label: t("professional")},
                                                ]}
                                            />
                                        </Form.Item>
                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Space>
                                ))}
                                <Form.Item>
                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                       {t("btnSkill")}
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                </div>
                {/* Upload du fichier CV */}
                <div>
                    <h1>{t("cvTitle")}</h1>
                    <Form.Item
                         name='cvFile'
                    >

                    <Upload
                       
                        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                        listType="picture"
                        >
                        <Button type="primary" icon={<UploadOutlined />}>
                            {t("uploadText")}
                        </Button>
                    </Upload>
                 </Form.Item>
                </div>
                {/* Bouton de validation */}
                <Form.Item style={{ marginTop: '20px' }} className="flex justify-center">
                    <Button type="primary" htmlType="submit" className="w-60" >
                       {t("btnValidate")}
                    </Button>
                </Form.Item>
            </Form>
            <h1></h1>
        </>
    );
};

export default Page;
