import React from "react";
import { useParams } from "react-router";

export default function ProductDeatail() {
  let { id } = useParams();
  return <div>ürün: {id}</div>;
}
