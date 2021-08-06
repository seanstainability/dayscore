import React, { useState, useCallback } from "react";
import { Form, Input, Select, Button, PageHeader } from "antd";
import styled from "styled-components";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 12,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 2,
    span: 12,
  },
};

const ScoreForm = () => {
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = useCallback((value) => {
    console.log(value.title, value.score);
  }, []);

  return (
    <>
      <PageHeader title="액션" />
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="title"
          label="액션명"
          rules={[
            {
              required: true,
              message: "액션명을 입력해주세요.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="score"
          label="스코어"
          wrapperCol={{ span: 6 }}
          rules={[
            {
              required: true,
              message: "스코어를 입력해주세요.",
            },
          ]}
        >
          <Select allowClear>
            <Option value="0">0</Option>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <ButtonWrapper type="primary" htmlType="submit">
            추가하기
          </ButtonWrapper>
          <ButtonWrapper htmlType="button" onClick={onReset}>
            Reset
          </ButtonWrapper>
        </Form.Item>
      </Form>
    </>
  );
};

const ButtonWrapper = styled(Button)`
  margin-right: 10px;
`;

export default ScoreForm;
