import React from "react";
import { Card, Form, Input, Button, message } from "antd";
import { useHistory } from "react-router-dom";
import { loginAPI } from "../api/auth.js";
import { setToken} from "../utils/tools"

function Login() {
  const { push } = useHistory();
  const submitHanld = async(v)=>{
    const res = await loginAPI(v);
    // console.log(res)
    // console.log(res.token)
    // console.log(loginAPI)
    // console.log(push)
    if(res.code === 'success'){
      setToken(res.token)
      message.success('登录成功')
      push('/admin/categories/list');
    }else{
      message.error(res.message)
    }
  }
  return (
    <div>
      <Card style={{ width: "480px", margin: "3rem auto" }}>
        <div className="login-log"></div>
        <Form labelCol={{ span: 3 }} onFinish={submitHanld}>
          <Form.Item
            label="用户名"
            name="userName"
            rules={[{ required: true,message:'请输入用户名' }]}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true,message:'请输入密码'}]}
          >
            <Input placeholder="请输入密码" type="password" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
