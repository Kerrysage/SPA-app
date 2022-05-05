import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import UserPage from "./UserPage";

export default function App() {
    return(
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/:id" component={UserPage} />
        </Switch>
    )
}