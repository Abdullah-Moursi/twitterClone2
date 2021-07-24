import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Trends from "./components/Trends";
import Twittes from "./components/Twittes";

function App() {
  const api = `https://newsapi.org/v2/everything?q=tesla&from=2021-06-19&sortBy=publishedAt&apiKey=e8512624ba514cd8bcfdf139be0124e9`;

  return (
    <BrowserRouter>
    <div className="Twitter">
      <Sidebar />
      <Switch>
        <Route path='/' exact>Home</Route>
        <Route path='/explore' exact>Explore</Route>
        <Route path='/notifications' exact>Notifications</Route>
        <Route path='/messages' exact>Messages</Route>
        <Route path='/bookmarks' exact>Bookmarks</Route>
        <Route path='/lists' exact>Lists</Route>
        <Route path='/profile' exact>profile</Route>
      </Switch>
      <Twittes />
      <Trends />
    </div>
    </BrowserRouter>
  );
}

export default App;
