import React from 'react';
import { Form, Input, Button } from 'antd';

const ProductForm = () => {
  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  return (
    <div>
      <Form onFinish={onFinish}>
        <Form.Item label="Product Name" name="productName" rules={[{ required: true, message: 'Please enter the product name' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please enter the description' }]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProductForm;