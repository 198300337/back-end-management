import React, { useState } from "react";
import { Form, Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { delImg, UplodURL } from "./../utils/tools";

function UplodaImg({ imageUrl, setImgageUrl }) {

  // 用于设置上传组件的内容
  const [loading, setLoading] = useState(false); // 上传状态
  // const [imageUrl, setImageUrl] = useState(""); // 上传之后的数据
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return
    }
    if (info.file.status === "done") {
      // console.log(info);
      setLoading(false);
      setImgageUrl(info.file.response.info);
    }
    console.log(delImg(imageUrl))
  };
  return (
    <Form.Item
      label="图片"
      name='imgage'
      rules={[{ required: true, message: "图片不能为空" }]}
      
    >
      <Upload
        name="file"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action={UplodURL}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img src={delImg(imageUrl)} alt="avatar" style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload>
    </Form.Item>
  );
}

export default UplodaImg;
