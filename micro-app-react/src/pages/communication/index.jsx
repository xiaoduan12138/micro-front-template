import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Descriptions, Avatar, message } from "antd";

// 确保actions模块正确导入，这里假设actions模块已经正确导出了onGlobalStateChange函数
import actions from "@/shared/actions";

const FIXED_USER_INFO = {
  nickname: "react用户",
  avatarUrl: "null", // 替换为实际的图片URL
  gender: true, // true 表示男性
  country: "固定国家",
  province: "固定省份",
  city: "固定城市",
};

const Communication = () => {
  const history = useHistory();
  
  useEffect(() => {
    actions.onGlobalStateChange((state) => {
      const { token } = state;
      // 未登录 - 返回主页
      if (!token) {
        message.error("未检测到登录信息！");
        history.push("/");
      }
    }, true);
  }, [history]);

  // 直接使用固定的userInfo对象
  const userInfo = FIXED_USER_INFO;

  return (
    <section>
      <Descriptions title={`欢迎你，${userInfo.nickname}`}>
        <Descriptions.Item label="头像">
          <Avatar src={userInfo.avatarUrl} />
        </Descriptions.Item>
        <Descriptions.Item label="用户名">
          {userInfo.nickname}
        </Descriptions.Item>
        <Descriptions.Item label="性别">
          {userInfo.gender ? "男" : "女"}
        </Descriptions.Item>
        <Descriptions.Item label="居住地">
          {`${userInfo.country} ${userInfo.province} ${userInfo.city}`}
        </Descriptions.Item>
      </Descriptions>
      {/* 确保您已经安装并配置了react-jsx-style插件，如果不需要该样式，可以移除以下代码 */}
      <style jsx>{`
        section {
          padding: 10px;
        }
      `}</style>
    </section>
  );
};

export default Communication;