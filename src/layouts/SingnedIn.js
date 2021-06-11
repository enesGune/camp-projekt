import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SingnedIn(singOut) {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right" src="../image/p.png" />
        <Dropdown pointing="top left" text="Enes">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={singOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
