import React, { useState, useEffect } from 'react'
import Button from '../components/Button';
import Layout from '../components/Layout';
import Card from '../components/Card';
import axios from 'axios';
const NewsPage = (props) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState([]);
    const [page, setPage] = useState(false);

   async function getTopHeadlines(){
       setLoading(true);
      //  const response = await axios.get(
      //   `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${page}&pageSize=${props.pageSize}`
      //  );
       const response = await axios.get(
        `https://newsdata.io/api/top-headlines?country=${props.country}&category=${props.category}&apiKey="pub_7743ae52a829c18e54592c19d72ce6df1484"&page=${page}&pageSize=${props.pageSize}`
       );
       https://newsdata.io/api/1/news?apikey=pub_7743ae52a829c18e54592c19d72ce6df1484&language=en


       if (response.data.status === "ok") {
        // this.setState({
        //   loading: false,
        //   data: response.data.articles,
        //   error: false,
        // });
        setLoading(false);
        setData( response.data.articles)
        setError(false);
      } else {
          setLoading(false);
          setError(true);
        // this.setState({
        //   loading: false,
        //   data: [],
        //   error: true,
        // });
      }
   }
   useEffect(() => {
    getTopHeadlines();
   
   }, [])

   useEffect(() => {
     if (page) getTopHeadlines();
   }, [page])
   
   

  return (
    <>
        <Layout>
        <h1 style={{ textAlign: "center", padding: "10px 0" }}>
          News for {props.category}
        </h1>
        {loading && data.length <= 0 && <h4>Loading...</h4>}
        {!loading && error && <h4>Something went wrong...</h4>}
        
        <div className="button_nav">
          <Button buttonText="Previous" 
                onClick={() => {
                    
                    setPage(page - 1);
                  }}
            />
          <Button buttonText="Next" 
                onClick={() => {
                   
                    setPage(page + 1);
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
    </>
  )
}

export default NewsPage