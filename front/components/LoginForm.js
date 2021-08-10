import React, { useState, useCallback } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { loginRequestAction } from "../reducers/user";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = (e) => {
    // setIsLoggedIn(true);
    dispatch(loginRequestAction({ email, password }));
  };

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  return (
    <>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 17 }}
        onFinish={onFinish}
        style={{ margin: 20 }}
      >
        <Form.Item label="이메일" name="user-email">
          <Input value={email} onChange={onChangeEmail} />
        </Form.Item>

        <Form.Item label="비밀번호" name="user-password">
          <Input.Password value={password} onChange={onChangePassword} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 10 }}>
          <Button type="primary" htmlType="submit" style={{ marginRight: 20 }}>
            로그인
          </Button>
          <Link href="/signup">회원가입</Link>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
