"use client";

import React from 'react';
import { MinusCircleOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, message, Form, Input, DatePicker, InputNumber, Upload, Select, Space } from 'antd';

const { TextArea } = Input;
function Page()  {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Form
                name="dynamic_form_nest_item"
                autoComplete="off"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <div>
                    <h1>Personal information</h1>
                    <Form.Item
                        label="FirstName"
                        name="FirstName"
                        rules={[{ required: true, message: 'Please input your Firstname!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="LastName"
                        name="LastName"
                        rules={[{ required: true, message: 'Please input your Lastname!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { type: 'email', message: 'The input is not valid E-mail!' },
                            { required: true, message: 'Please input your email!' },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="InputNumber"
                        name="phoneNumber"
                        rules={[
                            { type: 'number', message: 'The input is not valid number!' },
                            { required: true, message: 'Please input your number!' },
                        ]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        label="Birthday"
                        name="birthday"
                        rules={[
                            { type: 'date', message: 'The input is not valid birthday!' },
                            { required: true, message: 'Please input your birthday!' },
                        ]}
                    >
                        <DatePicker />
                    </Form.Item>
                </div>
                <div>
                    <h1>Experience</h1>
                    <Form.List name="users">
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
                                                <Input placeholder="Job title" />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'BusinessOrClient']}
                                                rules={[
                                                    { required: true, message: 'Missing Business or Client' },
                                                ]}
                                            >
                                                <Input placeholder="Business or Client" />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'Location']}
                                                rules={[
                                                    { required: true, message: 'Missing location' },
                                                ]}
                                            >
                                                <Input placeholder="Location" />
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
                                                defaultValue="Stage"
                                                style={{width:120 }}
                                                allowClear
                                                options={[{ value: 'Stage', label: 'Stage' }, { value: 'Alternance', label: 'Alternance' }, { value: 'CDI', label: 'CDI' }, { value: 'CDD', label: 'CDD' }]}
                                                placeholder="Type of contract"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                        
                                        name="startDay"
                                        rules={[{
                                            type: 'date',
                                                message: 'The input is not valid startDay!',
                                            }, { required: true, message: 'Please input your startDay!' }]}>
                                            <DatePicker placeholder='Start date' />
                                        </Form.Item>
                                        <Form.Item
                                            name="endDay"
                                            rules={[{
                                                type: 'date',
                                                message: 'The input is not valid endDay!',
                                            }, { required: true, message: 'Please input your endDay!' }]}>
                                            <DatePicker placeholder=' End date ' />
                                        </Form.Item>
                                        
                                        </Space>
                                        <Space key={key} style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'typeOfContract']}
                                                
                                            >
                                                <TextArea
                                                    showCount
                                                    maxLength={100}
                                                    
                                                    placeholder="disable resize"
                                                    style={{ height: 120 , width: "40rem" }}
                                                />
                                            </Form.Item>
                                            
                                            
                                        </Space>
                                    </div>
                                ))}
                                <Form.Item>
                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                        Add experience
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                </div>
                <div>
                    <h1>Skills</h1>
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
                                            <Input placeholder="Skill Name" />
                                        </Form.Item>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'SkillLevel']}
                                            rules={[
                                                { required: true, message: 'Missing Skill level' },
                                            ]}
                                        >
                                            <Select
                                                defaultValue="Débutant"
                                                style={{ width: 120 }}
                                                options={[
                                                    { value: 'Débutant', label: 'Débutant' },
                                                    { value: 'Intermédiaire', label: 'Intermédiaire' },
                                                    { value: 'Pro', label: 'Pro' },
                                                ]}
                                            />
                                        </Form.Item>
                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Space>
                                ))}
                                <Form.Item>
                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                        Add skill
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                </div>
                <div>
                    <h1>Add your CV</h1>
                    <Upload
                        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                        listType="picture"
                    >
                        <Button type="primary" icon={<UploadOutlined />}>
                            Upload
                        </Button>
                    </Upload>
                </div>
                <Form.Item style={{ marginTop: '20px' }}>
                    <Button type="primary" htmlType="submit">
                        Validate
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default Page;
