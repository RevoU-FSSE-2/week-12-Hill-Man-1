import { Form, Input, DatePicker, FormInstance } from 'antd';


const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const PersonalSection: React.FC<{ form: FormInstance }> = ({ form })  => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        };
    const config = {
        rules: [{ type: 'object' as const, required: true, message: 'Please Input Date of Birth!' }],
    };

    return (
        <Form
        {...formItemLayout}
        form={form}
        name="Personal Information"
        onFinish={onFinish}
        style={{ maxWidth: 600, marginTop: 40 }}
        scrollToFirstError
        >
        <Form.Item
            name="Username"
            label="Username"
            rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}
        >
            <Input />
        </Form.Item>

        <Form.Item name="Date of Birth" label="Date of Birth" {...config}{...formItemLayout} style={{ maxWidth: 600 }}>
            <DatePicker style={{ display: 'flex' }} />
        </Form.Item>

        <Form.Item
            name="email"
            label="E-mail"
            rules={[
            {
                type: 'email',
                message: 'The input is not valid E-mail!',
            },
            {
                required: true,
                message: 'Please input your E-mail!',
            },
            ]}
        >
        
        <Input />
        </Form.Item>
    </Form>
    );
};


export default PersonalSection