import React, { Component } from "react";
import "./style.css";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import NewsPage from "./pages/NewsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Routes>
          {/* Version 6 code  */}
          <Route path="/" element={<HomePage />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route
            exact
            path="/general"
            element={
              <NewsPage
                key="general"
                category="General"
                country="us"
                page={1}
                pageSize={10}
              />
            }
          />

          <Route
            exact
            path="/entertainment"
            element={
              <NewsPage
                key="entertainment"
                category="entertainment"
                country="us"
                page={1}
                pageSize={10}
              />
            }
          />

          <Route
            exact
            path="/health"
            element={
              <NewsPage
                key="health"
                category="health"
                country="us"
                page={1}
                pageSize={10}
              />
            }
          />

          <Route
            exact
            path="/sports"
            element={
              <NewsPage
                key="sports"
                category="sports"
                country="us"
                page={1}
                pageSize={10}
              />
            }
          />

          <Route
            exact
            path="/technology"
            element={
              <NewsPage
                key="technology"
                category="technology"
                country="us"
                page={1}
                pageSize={10}
              />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
