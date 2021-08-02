import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Head from "next/head";

const App = ({ Component }) => {
  // 페이지들의 부모 컴포넌트
  return (
    <>
      <Head>
        <title>DayScore</title>
      </Head>
      <Component />
    </>
  );
};

export default App;
