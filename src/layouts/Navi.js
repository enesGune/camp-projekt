import React from "react";
import CartSummary from "./CartSummary";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SingnedIn from "./SingnedIn";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />

            <SignedOut />
            <SingnedIn />
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
