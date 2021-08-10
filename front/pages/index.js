import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Button } from "antd";

import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import AppLayout from "../components/AppLayout";
import ActionForm from "../components/ActionForm";
import ActionCard from "../components/ActionCard";

import { LOAD_POSTS_REQUEST } from "../reducers/post";
import { LOAD_ACTIONS_REQUEST } from "../reducers/actions";

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePost, loadPostsLoading } = useSelector(
    (state) => state.post
  );
  const { mainActions, hasMoreAction, loadActionsLoading } = useSelector(
    (state) => state.actions
  );
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
    dispatch({
      type: LOAD_ACTIONS_REQUEST,
    });
  }, []);

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
          {me && <PostForm />}
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
          {mainActions?.map((a) => {
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
