import React from "react";
import styled from "styled-components";
import { Card } from "antd";

const ActionCard = ({ act }) => {
  return (
    <CardWrapper key={act.id}>
      <Card
        size="small"
        title={act.title}
        extra={<a href="#">삭제</a>}
        style={{ width: "100%" }}
      >
        <p>
          12:00<ScoreWrapper>{act.score}</ScoreWrapper>
        </p>
      </Card>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  margin-top: 20px;
`;

const ScoreWrapper = styled.span`
  float: right;
`;

export default ActionCard;
