import React from "react";
import { Modal, List, Checkbox } from "antd";

const ActionForm = ({ handleCancel, visible, setVisible }) => {
  const actionList = [
    { id: 1, title: "커피 하루 1잔만 마시기", score: 1 },
    { id: 2, title: "커피 하루 1잔만 마시기", score: 1 },
  ];

  const onChange = (values) => {
    console.log(values);
  };

  const handleOk = () => {
    setVisible(false);
  };
  return (
    <Modal
      width={500}
      title="완료한 액션 등록하기"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="완료"
      cancelText="취소"
    >
      <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
        <List
          className="demo-loadmore-list"
          style={{
            margin: 20,
          }}
          itemLayout="horizontal"
          dataSource={actionList}
          renderItem={(item) => (
            <>
              <List.Item actions={[<Checkbox value={item.id}></Checkbox>]}>
                <List.Item.Meta title={item.title} />
                <div>{item.score}</div>
              </List.Item>
            </>
          )}
        />
      </Checkbox.Group>
    </Modal>
  );
};

export default ActionForm;
