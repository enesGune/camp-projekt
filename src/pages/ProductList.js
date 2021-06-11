import React, { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import ProductSevice from "../services/ProductService";

export default function ProductList() {
  // şimdi aşağıdaki kodu useStatte snipitından çağırdık posts bizim postalar set posts ise bizim fonksyonumuz default değeri boş arrar
  const [posts, setPosts] = useState([]);
  // alt ksımda gelen resultu set ettik
  useEffect(() => {
    let productSevice = new ProductSevice();
    productSevice.getProducts().then((result) => setPosts(result.data));
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Body</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {/* aşağıda javascript kodu yazdık ve bu kısmı veri tabanı ile çağrışıtrdık */}
        <Table.Body>
          {posts.map((post) => (
            <Table.Row key={post.userId}>
              <Table.Cell>{post.id}</Table.Cell>
              <Table.Cell>{post.title}</Table.Cell>
              <Table.Cell>{post.body}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
