import { Flex, Spin } from "antd";
import React from "react";

const Spinner = () => {
  return (
    <div>
      <Flex
        align="center"
        gap="middle"
        style={{ display: "flex", justifyContent: "center", height: "87vh" }}
      >
        <Spin size="small" />
        <Spin />
        <Spin size="large" />
      </Flex>
    </div>
  );
};

export default Spinner;
