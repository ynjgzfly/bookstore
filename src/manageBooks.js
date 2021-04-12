/* eslint-disable */
import React, { Component, createRef } from "react";
import {
  Button,
  Card,
  Input,
  Table,
  Row,
  Col,
  Dropdown,
  Menu,
  Upload,
  Form,
  Drawer,
  message,
} from "antd";
import styles from "./index.css";
import { Router } from "react-router-dom";
import { PlusOutlined, UserOutlined } from "@ant-design/icons";
import initBooks from "./bookLists";
import { useState } from "react";
import { render } from "@testing-library/react";

const columns = [
  { title: "id", dataIndex: "id" },
  { title: "ISBN", dataIndex: "isbn" },
  { title: "书名", dataIndex: "name" },
  { title: "类型", dataIndex: "type" },
  { title: "作者", dataIndex: "author" },
  { title: "价格", dataIndex: "price" },
  { title: "简介", dataIndex: "description" },
  { title: "库存", dataIndex: "inventory" },
  { title: "图片", dataIndex: "image" },
];

columns.map((item) => {
  item.sorter = (a, b) => {
    if (!isNaN(a[item.dataIndex]) && !isNaN(b[item.dataIndex])) {
      return a[item.dataIndex] - b[item.dataIndex];
    }
    const aa = a[item.dataIndex] || "";
    const bb = b[item.dataIndex] || "";
    return String(aa).localeCompare(String(bb));
  };
});

function ManageBooks() {
  const [books, setBooks] = useState(initBooks);
  const [search, setSearch] = useState("");

  columns.forEach((item) => {
    const { dataIndex, title } = item;
    item.filterDropdown = ({ setSelectedKeys, selectedKeys, confirm }) => (
      <div style={{ padding: 8 }}>
        <Input
          allowClear
          ref={this.searchInput}
          placeholder={`搜索 ${title}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={confirm}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={confirm}
          size="small"
          style={{ width: 90 }}
        >
          搜索
        </Button>
      </div>
    );
    item.onFilter = (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "";
    item.onFilterDropdownVisibleChange = (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.current.select(), 100);
      }
    };
  });

  
  return (
    <Table
      rowKey={"id"}
      columns={[
        ...columns.map((item) => ({
          ...item,
          render: (text, record) => (
            <EditText
              onChange={(value) => {
                // const newData = [...books];
                // // newData.find(col => col.id === record.id)[item.dataIndex] = value;
                //
                // record[item.dataIndex] = value;
                // this.setState({orData: initBooks, renderData: initBooks});
                //
                // console.log(record);
                // this.setState({record: record});
              }}
              // onBlur={this.updateUser}
            >
              {text}
            </EditText>
          ),
        })),
        {
          name: "操作",
          key: "del",
          render: (record) => (
            <Button
              onClick={() => {
                // let newOrData = initBooks.filter(item => item.username !== record.username);
                // console.log(record);
                // let newRenderData = initBooks.filter(item => item.username !== record.username);
                // record["theClass"]="";
                // let newAddData=[record,...this.state.books];
                // let newAddDataRender=[record,...this.state.books];
                // console.log(newOrData);
                // console.log(newRenderData);
                // console.log(this.state.record);
                // this.setState({
                //     renderData: newRenderData,
                //     orData: newOrData,
                //     addData:newAddData,
                //     addDataRender:newAddDataRender,
                // }, () => {
                //     this.deleteStudent();
                //     this.handleSearch();
                // });
              }}
            >
              删除
            </Button>
          ),
        },
      ]}
      dataSource={books}
    />
  );
}

export default ManageBooks;
