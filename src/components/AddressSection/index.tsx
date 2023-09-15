import React, { useState } from 'react';
import { Button, Form, Input, Select, Space } from 'antd';

const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
};

const PersonalSection: React.FC = () => {
    const [selectedProvince, setSelectedProvince] = useState<string>('');
    const [selectedCity, setSelectedCity] = useState<string>('');

    const handleProvinceChange = (value: string) => {
        setSelectedProvince(value);
        setSelectedCity('');
    };

    const provincesSelect = ['DKI Jakarta', 'Jawa Barat'];
    const citiesByProvince: Record<string, string[]> = {
        'DKI Jakarta': ['Jakarta Pusat', 'Jakarta Barat', 'Jakarta Utara', 'Jakarta Timur', 'Jakarta Selatan'],
        'Jawa Barat': ['Kota Bandung', 'Kota Cimahi', 'Kota Bogor', 'Kota Cirebon'],
    };

    const provinceOptions = provincesSelect.map((province, index) => (
        <option key={index} value={province}>
        {province}
        </option>
    ));

    const cityOptions = (citiesByProvince[selectedProvince] || []).map((city, index) => (
        <option key={index} value={city}>
        {city}
        </option>
    ));

    return (
        <Form
        name="Address Information"
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 500, marginTop: 40 }}
        >
        <Form.Item label="Province" rules={[{ required: true, message: 'Provience  is required' }]}>
            <Select
            placeholder="Select Province"
            value={selectedProvince}
            onChange={(value) => handleProvinceChange(value)}
            >
            {provinceOptions}
            </Select>
        </Form.Item>
    
        <Form.Item label="City" rules={[{ required: true, message: 'City is required' }]}>
            <Select
            placeholder="Select City"
            value={selectedCity}
            onChange={(value) => setSelectedCity(value)}
            
            >
            {cityOptions}
            </Select>
        </Form.Item>
    
        <Form.Item label="Street Address">
            <Space>
            <Form.Item
                name="street address"
                noStyle
                rules={[{ required: true, message: 'Street Address is required' }]}
            >
                <Input style={{ width: 334 }} placeholder="Please input Street Address" />
            </Form.Item>
            </Space>
        </Form.Item>

        <Form.Item label="Zip Code">
        <Space>
            <Form.Item
                name="zipCode" // Corrected the name to "zipCode"
                noStyle
                rules={[
            { required: true, message: 'Zip Code is required' },
              { max: 5, message: 'Zip Code must not exceed 5 characters' }, // Added max length validation
            ]}
            >
            <Input style={{ width: 334 }} type='number' placeholder="Please input Zip Code" />
            </Form.Item>
        </Space>
        </Form.Item>

        <Form.Item label=" " colon={false}>
            <Button type="primary" htmlType="submit">
                Validate
            </Button>
        </Form.Item>
        </Form>
    );
};

export default PersonalSection;
