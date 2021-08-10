import React, { useCallback, useState } from "react";
import Link from "next/link";
import { Layout, Menu, Input } from "antd";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";
import styled from "styled-components";

const AppLayout = ({ children }) => {
  // 특정 컴포넌트들의 부모 컴포넌트
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { me } = useSelector((state) => state.user);

  const onSearch = useCallback((keyword) => {
    console.log(keyword);
  }, []);

  return (
    <>
      <Layout style={{ position: "relative", minHeight: "100vh" }}>
        <Layout.Header className="header" style={{ padding: 0 }}>
          <Menu mode="horizontal">
            <Menu.Item>
              <Link href="/">홈</Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/profile">프로필</Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/score">스코어</Link>
            </Menu.Item>
            <Menu.Item style={{ marginLeft: "auto" }}>
              <Input.Search
                placeholder="검색어를 입력하세요."
                onSearch={onSearch}
                style={{ width: 200, verticalAlign: "middle" }}
              />
            </Menu.Item>
            <Menu.Item>
              <Link href="/signup">회원가입</Link>
            </Menu.Item>
          </Menu>
        </Layout.Header>
        <Layout style={{ paddingBottom: 70 }}>
          <Layout.Sider width="300" theme="light">
            {me ? <UserProfile /> : <LoginForm />}
          </Layout.Sider>
          <Layout.Content>{children}</Layout.Content>
        </Layout>
        <Layout.Footer
          className="footer"
          style={{
            width: "100%",
            position: "absolute",
            bottom: 0,
            textAlign: "center",
          }}
        >
          <a
            href="https://github.com/seanstainability"
            target="_blank"
            rel="noreferrer noopener"
          >
            seanstainability
          </a>
        </Layout.Footer>
      </Layout>
    </>
  );
};

export default AppLayout;
