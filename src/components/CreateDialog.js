import { Button, Image, Input, Modal } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import "./main.css";

const CreateDialog = ({
  show,
  closeDialog,
  createPost,
  inputChange,
  image,
  content,
  title,
}) => {
  return (
    <div>
      <Modal
        title="Title"
        visible={show}
        width="40vw"
        onCancel={closeDialog}
        footer={[
          <Button>Cancel</Button>,
          <Button onClick={createPost}>Create</Button>,
        ]}
      >
        <div className="dialogbox">
          <Image
            width="100%"
            height="300px"
            src={
              image === ""
                ? "https://apps4rent.com/support/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png"
                : image
            }
          />
          <Input
            onChange={inputChange}
            value={image}
            name="url"
            style={{ marginTop: "8px" }}
            size="large"
            placeholder="Url for image"
          />
          <Input
            onChange={inputChange}
            value={title}
            name="title"
            style={{ margin: "8px 0" }}
            size="large"
            placeholder="Title"
          />
          <TextArea
            onChange={inputChange}
            value={content}
            name="content"
            placeholder="Content..."
            allowClear
          />
        </div>
      </Modal>
    </div>
  );
};

export default CreateDialog;
