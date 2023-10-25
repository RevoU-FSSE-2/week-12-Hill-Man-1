import React, { useState } from 'react';
import { Form, Input, Select, FormInstance } from 'antd';

const AddressSection: React.FC<{ form: FormInstance }> = ({ form })  => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };
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

    return (
        <Form
            name="Address Information"
            form={form}
            labelCol={{ span: 8 }}
            onFinish={onFinish}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 500, marginTop: 40 }}
        >
            <Form.Item label="Province" name="province" rules={[{ required: true, message: 'Province is required' }]}>
                <Select
                    placeholder="Select Province"
                    value={selectedProvince}
                    onChange={(value) => handleProvinceChange(value)}
                >
                    {provincesSelect.map((province, index) => (
                        <Select.Option key={index} value={province}>
                            {province}
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>
        
            <Form.Item label="City" name="city" rules={[{ required: true, message: 'City is required' }]}>
                <Select
                    placeholder="Select City"
                    value={selectedCity}
                    onChange={(value) => setSelectedCity(value)}
                >
                    {(citiesByProvince[selectedProvince] || []).map((city, index) => (
                        <Select.Option key={index} value={city}>
                            {city}
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>
        
            <Form.Item label="Street Address" name="streetAddress" rules={[{ required: true, message: 'Street Address is required' }]}>
                <Input placeholder="Please input Street Address" />
            </Form.Item>

            <Form.Item label="Zip Code" name="zipCode" rules={[
                { required: true, message: 'Zip Code is required' },
                { max: 5, message: 'Zip Code must not exceed 5 characters' }
            ]}>
                <Input type='number' placeholder="Please input Zip Code" />
            </Form.Item>
        </Form>
    );
};

export default AddressSection;
