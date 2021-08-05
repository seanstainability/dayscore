import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import AppLayout from "../components/AppLayout";

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <AppLayout>
      <div style={{ margin: 10, display: "flex" }}>
        <Half>
          {isLoggedIn && <PostForm />}
          {mainPosts.map((c) => {
            return <PostCard key={c.id} post={c} />;
          })}
        </Half>
        <Half>another half</Half>
      </div>
    </AppLayout>
  );
};

const Half = styled.div`
  width: 50%;
  padding: 10px;
  overflow-y: scroll;
`;

export default Home;
