import React, { useEffect } from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import Router from "next/router";
import ProfileEditForm from "../components/ProfileEditForm";
import FollowList from "../components/FollowList";
import { useSelector } from "react-redux";

const Profile = () => {
  const { me } = useSelector((state) => state.user);
  useEffect(() => {
    if (!(me && me.id)) {
      Router.push("/");
    }
  }, [me && me.id]);
  if (!me) {
    return null;
  }

  const followingList = [
    { nickname: "김첨지", email: "SOULIKK@gmail.com", bio: "항해99" },
    { nickname: "엠마오", email: "dev.og.eun@gmail.com", bio: "여신티켓" },
    { nickname: "제로초", email: "zerocho@gmail.com", bio: "오늘의 픽업 CTO" },
  ];

  const followerList = [
    { nickname: "김첨지", email: "SOULIKK@gmail.com", bio: "항해99" },
    { nickname: "엠마오", email: "dev.og.eun@gmail.com", bio: "여신티켓" },
  ];

  return (
    <>
      <Head>
        <title>프로필 | DayScore</title>
      </Head>
      <AppLayout>
        <ProfileEditForm />
        <div style={{ display: "flex" }}>
          <FollowList header="팔로잉 목록" data={followingList} />
          <FollowList header="팔로워 목록" data={followerList} />
        </div>
      </AppLayout>
    </>
  );
};

export default Profile;
