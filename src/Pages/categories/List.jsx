import React, { useState, useEffect } from "react";
import { loadCategoreies, increaseOne } from "../../api/categoreies.js";
import {
  Button,
  Table,
  Card,
  Modal,
  Form,
  Input,
  Popconfirm,
  message,
  Upload,
} from "antd";
import { delImg } from "../../utils/tools";
import UplodaImg from "../../Components/UplodaImg.jsx";
import { DelOne,loadCategory,amendOne } from "../../api/categoreies";

function List() {
     //列表数据
  const loadCates = async() =>{
   const res = await loadCategoreies()
   setList(res.categories)

  }
  //获取分类单条信息
  const delData = async (id) => {
    await DelOne(id);
    message.success("删除成功");
    loadCates();
  };
  
  const [coruent,setCoruent] = useState('')


  const amends = async(id)=>{
    setCoruent(id)
    const data = await loadCategory(id);
    form.setFieldsValue({
      name:data.name,
    })
    setImgageUrl(data.coverImg)
    setIsshow(true)
  }
  const columns = [
    {
      title: "序号",
      width: 100,
      render(c, r, i) {
        return <span>{i + 1}</span>;
      },
    },
    {
      title: "图片",
      render(colData) {
        return (
          <img
            src={delImg(colData.coverImg)}
            style={{ maxWidth: "100px", maxHeight: "100px" }}
          />
        );
      },
    },
    {
      title: "名字",
      dataIndex: "name",
    },
    {
      title: "操作",
      render(c) {
        return (
          <>
            <Button onClick={()=>amends(c._id)} type="dashed">修改</Button>
            <Popconfirm
              okText="是"
              cancelText="否"
              onConfirm={() => {
                delData(c._id)
              }}
            >
              <Button type="primary" style={{ marginLeft: "1rem" }}>
                删除
              </Button>
            </Popconfirm>
          </>
        );
      },
    },
  ];

  const [isshow, setIsshow] = useState(false);
  const [list, setList] = useState([]);
  const [form] = Form.useForm();
  const submieHanld = async(v) => {
    console.log(v)
    let datas = {
      name: v.name,
      coverImg: v.imgage.fileList[0].response.info,
    };
    if(coruent){
      // console.log(datas)
      const res = await amendOne(coruent,datas)
      setCoruent('')
    }else{
     const res = await increaseOne(datas);
    }
     setIsshow(false);
      loadCates()
  };

  //获取商品分类
  useEffect(() => {
    loadCates()
  }, []);
  
  const [imageUrl, setImgageUrl] = useState(""); //上传之后的数据
  const showModal = () => {
    form.resetFields();
    setImgageUrl("");
    setIsshow(true);
  };
  return (
    <>
      <Card
        title="商品"
        extra={
          <Button type="primary" onClick={showModal}>
            新增
          </Button>
        }
      >
        <Table
          columns={columns}
          dataSource={list}
          rowKey={(record) => record._id}
        ></Table>
      </Card>
      {/* 新增商品分类 */}
      <Modal
        onCancel={() => {
          setIsshow(false);
        }}
        onOk={() => {
          form.submit();
        }}
        title="分类商品信息"
        visible={isshow}
        okText="保存"
        cancelText="取消"
      >
        <Form form={form} onFinish={submieHanld}>
          <Form.Item
            label="名字"
            name="name"
            rules={[
              {
                required: true,
                message: "请输入名字!",
              },
            ]}
          >
            <Input placeholder="请输入分类名字" />
          </Form.Item>
          <UplodaImg imageUrl={imageUrl} setImgageUrl={setImgageUrl} />
        </Form>
      </Modal>
    </>
  );
}

export default List;
