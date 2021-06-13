import React from "react";
import CartSummary from "./CartSummary";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SingnedIn from "./SingnedIn";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Navi() {
  const [isAuthentication, setAuthenticaded] = useState(false);
  const history = useHistory();
  function handleSignOut(params) {
    setAuthenticaded(false);
    history.push("/") // bu şekilde biz herhangi bir yerde iken çıkış yaparsak oto olarak anasayfaya yönlendiriyor
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
