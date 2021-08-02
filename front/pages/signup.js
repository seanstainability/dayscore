import React, { useState, useCallback } from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { Form, Input, Button, PageHeader } from "antd";
import useInput from "../hooks/useInput";
import styled from "styled-components";

const ErrorMessage = styled.div`
  color: red;
  margin-top: 5px;
`;

const signup = () => {
  const [email, onChangeEmail] = useInput();
  const [password, onChangePassword] = useInput();
  const [nickname, onChangeNickname] = useInput();
  const [passwordCheck, setPasswordCheck] = useState();
  const [passwordError, setPasswordError] = useState(false);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const onFinish = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
  }, [password, passwordCheck]);

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 8,
    },
  };

  const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
  };

  return (
    <>
      <Head>
        <title>회원가입 | DayScore</title>
      </Head>
      <AppLayout>
        <PageHeader
          title="회원가입"
          subTitle="내 일상에 점수를 매겨보세요 😎"
        />
        <Form {...layout} onFinish={onFinish} style={{ margin: 20 }}>
          <Form.Item label="이메일">
            <Input value={email} onChange={onChangeEmail} />
          </Form.Item>
          <Form.Item label="비밀번호">
            <Input.Password value={password} onChange={onChangePassword} />
          </Form.Item>
          <Form.Item label="비밀번호 확인">
            <Input.Password
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
            {passwordError && (
              <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
            )}
          </Form.Item>
          <Form.Item label="닉네임">
            <Input value={nickname} onChange={onChangeNickname} />
          </Form.Item>
          <Form.Item {...formTailLayout}>
            <Button type="primary" htmlType="submit">
              회원가입
            </Button>
          </Form.Item>
        </Form>
      </AppLayout>
    </>
  );
};

export default signup;
