import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const HomeFun = () => {
  const [postList, setPostList] = useState([]);
  const [page, setPage] = useState(1);
  const [news, setNews] = useState([])

  useEffect(() => {
    fetchPosts();
    fetchNews();
  }, [])

  const fetchPosts = async () => {
    fetch("https://tranquil-meadow-31122.herokuapp.com/feed/blogs", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      params: {
        page: page,
      },
    })
      .then((res) => res.json())
      .then((blogs) => {
        setPostList(blogs.blogs);
        setPage(page + 1);
      });
  };

  const fetchNews = async () => {
    //my blogs
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2021-02-26&sortBy=publishedAt&apiKey=eb76b7f40b8c4633b1b123f7bff7dc12", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
          console.log(result)
        setNews(result.articles)
      });
  };

  return { postList, news };
};

export default HomeFun;
