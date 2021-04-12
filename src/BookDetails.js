import { React } from "react";
import { Descriptions, Button, Layout } from "antd";
import { initBooks } from "./bookLists";
import { useParams } from "react-router-dom";
import SideBar from "./sideBar";

function BookDetails() {
  const { id } = useParams();
  console.log(id);
  const book = initBooks[id - 1];
  console.log(book);
  // console.log(initBooks[id]);
  return (
    <Layout className={"layout"}>
      <SideBar />
      <div className={"content"}>
        <div className={"book-detail"}>
          <div className={"book-image"}>
            <img
              alt={"image"}
              src={book.image}
              style={{ width: "350px", height: "350px" }}
            />
          </div>
          <div className={"descriptions"}>
            <Descriptions>
              <Descriptions.Item className={"title"} span={3}>
                {book.name}
              </Descriptions.Item>
              <Descriptions.Item label={"作者"} span={3}>
                {book.info}
              </Descriptions.Item>
              <Descriptions.Item label={"分类"} span={3}>
                {book.type}
              </Descriptions.Item>
              <Descriptions.Item label={"定价"} span={3}>
                {book.price}
              </Descriptions.Item>
              <Descriptions.Item label={"状态"} span={3}>
                {book.inventory}
              </Descriptions.Item>
              <Descriptions.Item label={"作品简介"} span={3}>
                {book.description}
              </Descriptions.Item>
            </Descriptions>
          </div>
        </div>

        <div className={"button-groups"}>
          <Button type={"danger"} size={"large"}>
            加入购物车
          </Button>
          <Button type={"danger"} size={"large"} style={{ marginRight: "15%" }}>
            立即购买
          </Button>
        </div>
      </div>
    </Layout>
  );
}
export default BookDetails;
