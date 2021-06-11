import React from "react";

import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import ProductDeatail from "../pages/ProductDeatail";
import CartDetail from "../pages/CartDetail";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            {/* asağıda route işlemi yaptık yani ana sayfada ddidkki bizim companetimizi aça dedik bu saydeişlem tamamaldı tabi önce index js de browswer rota atadık */}
            <Route exact path="/" component={ProductList}></Route>
            <Route exact path="/product" component={ProductList}></Route>
            {/* exact bu linkin aynı olamsı gerektiğini söyler */}
            {/* bu ise :id geçerli bir param demel */}
            <Route path="/product/:id" component={ProductDeatail}></Route>
            <Route exact path="/cart" component={CartDetail}></Route>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
