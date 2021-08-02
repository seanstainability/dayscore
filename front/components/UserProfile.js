import React, { useCallback } from "react";
import { Card, Button, Avatar } from "antd";
import gravatar from "gravatar";

const UserProfile = ({ setIsLoggedIn }) => {
  const email = "seanstainability@gmail.com";
  const nickname = "sean";
  const bio = "Simple is the Best";

  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <>
      <Card
        style={{ width: 300, border: 0 }}
        actions={[
          <div>
            점수
            <br />0
          </div>,
          <div>
            팔로잉
            <br />0
          </div>,
          <div>
            팔로워
            <br />0
          </div>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar src={gravatar.url(email, { d: "retro" })} />}
          title={nickname}
          description={bio}
        />
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
        >
          <Button onClick={onLogOut}>로그아웃</Button>
        </div>
      </Card>
    </>
  );
};

export default UserProfile;
