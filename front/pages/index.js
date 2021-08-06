import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Button } from "antd";

import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import AppLayout from "../components/AppLayout";
import ActionForm from "../components/ActionForm";
import ActionCard from "../components/ActionCard";

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  const [visible, setVisible] = useState(false);
  const mainActions = [
    { id: 1, title: "커피 하루 1잔만 마시기", score: 1 },
    { id: 2, title: "커피 하루 1잔만 마시기", score: 1 },
  ];

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <AppLayout>
      <div
        style={{ margin: 10, display: "flex", justifyContent: "space-between" }}
      >
        <Half>
          {isLoggedIn && <PostForm />}
          {mainPosts.map((c) => {
            return <PostCard key={c.id} post={c} />;
          })}
        </Half>
        <Half>
          <Button type="primary" onClick={showModal}>
            액션추가하기
          </Button>
          <ActionForm
            handleCancel={handleCancel}
            visible={visible}
            setVisible={setVisible}
          />
          {mainActions.map((a) => {
            return <ActionCard key={a.id} act={a} />;
          })}
        </Half>
      </div>
    </AppLayout>
  );
};

const Half = styled.div`
  padding: 10px;
  width: 100%;
`;

export default Home;
