import { Button, Form, Input } from "antd";
import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

const CommentForm = ({ post }) => {
  const [commentText, setCommentText] = useState("");

  const onSubmitComment = useCallback(() => {
    console.log(commentText);
  }, [commentText]);

  const onChangeCommentText = useCallback((e) => {
    setCommentText(e.target.value);
  }, []);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: "relative", margin: 0 }}>
        <Input.TextArea
          rows={4}
          value={commentText}
          onChange={onChangeCommentText}
          style={{ marginTop: 10 }}
        />
        <Button
          style={{ position: "absolute", right: 0, bottom: -32 }}
          type="primary"
          htmlType="submit"
        >
          댓글달기
        </Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;
