import React, { Component } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import Card from "../components/Card";
import Button from "../components/Button";

export class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: false,
      page: this.props.page,
    };
  }

  async getTopHeadlines() {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    );

    if (response.data.status === "ok") {
      this.setState({
        loading: false,
        data: response.data.articles,
        error: false,
      });
    } else {
      this.setState({
        loading: false,
        data: [],
        error: true,
      });
    }
  }

  componentDidMount() {
    this.getTopHeadlines();
    document.title = `Taaza Khabare - ${this.props.category} `;
  }

  componentDidUpdate(prevProps, prevState){

      if(prevProps && prevProps.category !== this.props.category){
          this.getTopHeadlines();
      }

      if(prevState.page !== this.state.page){
          this.getTopHeadlines();
      }
  }

  render() {
    const { loading, data, error, page } = this.state;
    // console.log(page);
    if (error) {
      return <h2>Error! Something went wrong...</h2>;
    }
    return (
      <Layout>
        <h1 style={{ textAlign: "center", padding: "10px 0" }}>
          News for {this.props.category}
        </h1>
        {loading && data.length <= 0 && <h4>Loading...</h4>}
        
        <div className="button_nav">
          <Button buttonText="Previous" 
                onClick={() => {
                    this.setState({ page: page - 1});
                  }}
            />
          <Button buttonText="Next" 
                onClick={() => {
                    this.setState({ page: page + 1});
                  }}
          />
        </div>
          {!loading && data.length === 0 && <h1>No Data Found....</h1>}
        <section className="card_container">
          {data.map((n) => (
            <Card
              imgUrl={n.urlToImage}
              title={n.title}
              description={n.description}
              url={n.url}
              key={n.publishedAt}
            />
          ))}
        </section>
      </Layout>
    );
  }
}

export default NewsPage;
