import React from "react";
import { List, Avatar, Divider } from "antd";
import gravatar from "gravatar";

const FollowList = ({ header, data }) => {
  return (
    <div className="followList" style={{ margin: 20 }}>
      <Divider orientation="left">{header}</Divider>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item actions={[<a key="item-delete">언팔로우</a>]}>
            <List.Item.Meta
              avatar={<Avatar src={gravatar.url(item.email, { d: "retro" })} />}
              title={<a href="#">{item.nickname}</a>}
              description={item.bio}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default FollowList;
