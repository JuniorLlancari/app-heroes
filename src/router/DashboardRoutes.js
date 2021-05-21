import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { DcScreen } from "../components/dc/DcScreen";
import { HeroesScreen } from "../components/heroes/HeroesScreen";
import { LoginScreen } from "../components/login/LoginScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";
 
export const DashboardRoutes = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <Switch>
          <Route path="/marvel" component={MarvelScreen} />
          <Route path="/hero/:heroId" component={HeroesScreen} />

          <Route path="/dc" component={DcScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/search" component={SearchScreen} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </div>
  );
};
