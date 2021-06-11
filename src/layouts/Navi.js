import React from "react";
import CartSummary from "./CartSummary";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SingnedIn from "./SingnedIn";
import { useState } from "react";

export default function Navi() {
  const [isAuthentication, setAuthenticaded] = useState(false);
  function handleSignOut(params) {
    setAuthenticaded(false);
  }
  function handleSignIn(params) {
    setAuthenticaded(true);
  }
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />
            {/* if ve else aşağıda verdik  birde props verdik singOutu kaydeddik*/}
            {isAuthentication ? (
              <SingnedIn singOut={handleSignOut} />
            ) : (
              <SignedOut singIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
