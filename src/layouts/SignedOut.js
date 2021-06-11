import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut(props) {
  return (
    <div>
      <Menu.Item>
        <Button onClick={props.singIn} dark>
          Giriş Yap
        </Button>
        <Button dark style={{ marginLeft: "0.5em" }}>
          Kayıtol
        </Button>
      </Menu.Item>
    </div>
  );
}
