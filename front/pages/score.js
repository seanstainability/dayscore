import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import ScoreForm from "../components/ScoreForm";
import { PageHeader, List } from "antd";

const Score = () => {
  const actionList = [
    { id: 1, title: "커피 하루 1잔만 마시기", score: 1 },
    { id: 2, title: "커피 하루 1잔만 마시기", score: 1 },
  ];
  return (
    <>
      <Head>
        <title>스코어 | DayScore</title>
      </Head>
      <AppLayout>
        <ScoreForm />
        <PageHeader title="액션 목록" />
        <List
          className="demo-loadmore-list"
          style={{
            minHeight: 300,
            maxWidth: 600,
            margin: "0 0 50px 50px",
            overflowY: scroll,
          }}
          itemLayout="horizontal"
          dataSource={actionList}
          renderItem={(item) => (
            <>
              <List.Item actions={[<a key="list-loadmore-delete">삭제</a>]}>
                <List.Item.Meta title={item.title} />
                <div>{item.score}</div>
              </List.Item>
              <hr />
            </>
          )}
        />
      </AppLayout>
    </>
  );
};

export default Score;
