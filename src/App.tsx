import React, { useState } from 'react';
import { Button, Steps as AntSteps } from 'antd';
import { Form } from 'antd';
import { PersonalSection, AccountSection, AddressSection } from './components';


interface StepType {
  title: string;
  content: any;
}

const steps: StepType[] = [
  {
    title: 'Personal Information',
    content: PersonalSection,
  },
  {
    title: 'Address Information',
    content: AddressSection,
  },
  {
    title: 'Account Information',
    content: AccountSection,
  },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();

  const next = async () => {
    try {
      await form.validateFields();
      setCurrent(current + 1);
    } catch (error) {
      console.error('Form validation failed:', error);
    }
  };  

  const prev = () => {
    setCurrent(current - 1);
  };

  const contentStyle: React.CSSProperties = {
    lineHeight: '260px',
    textAlign: 'center',
    marginTop: 16,
  };

  return (
    <>
      <AntSteps current={current} items={steps.map((item) => ({ key: item.title, title: item.title }))} />
      <div style={contentStyle}>
        {React.createElement(steps[current].content, { form })}
      </div>
        <div style={{ marginTop: 24 }}>
            {current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
            type="primary"
            onClick={() => {
            form.submit();
          }}
  htmlType="submit"
>
  Done
</Button>

          )}
        </div>
    </>
  );
};

export default App;