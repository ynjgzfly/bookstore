import React from "react";
import { Card } from "antd";
import { Link, useHistory } from "react-router-dom";
const { Meta } = Card;

function BookGrids(props) {
  const book = props.book;
  const history = useHistory();
  return (
    <Link to={`/bookDetail/${book.id}`}>
      <Card
        hoverable
        style={{ width: 181 }}
        cover={<img alt={"image"} src={book.image} className={"bookImg"} />}
      >
        <Meta title={book.name} description={"$" + book.price} />
      </Card>
    </Link>
  );
}

export default BookGrids;
