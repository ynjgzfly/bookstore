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
import { initBooks } from "./bookLists";
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

function EditText(value) {
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState(value);
  return edit ? (
    <Input
      autoFocus
      style={{ width: 120 }}
      value={editValue}
      onChange={(event) => setEditValue(event)}
      onBlur={() => {
        setEdit(false);
      }}
    />
  ) : (
    <div style={{ width: 100 }} onDoubleClick={() => setEdit(true)}>
      {value || <span>&nbsp;</span>}
    </div>
  );
}

function ManageBooks() {
  const [books, setBooks] = useState(initBooks);
  const [search, setSearch] = useState("");

  return (
    <Card>
      <Table
        rowKey="id"
        columns={[
          ...columns,
          {
            title: "删除",
            dataIndex: "delete",
            render: (text, record) => (
              <Button
                onClick={() => {
                  const newBooks = books.filter((item) => {
                    return item.id != record.id;
                  });
                  setBooks(newBooks);
                }}
              >
                删除
              </Button>
            ),
          },
        ]}
        dataSource={books}
      />
    </Card>
  );
}

export default ManageBooks;
