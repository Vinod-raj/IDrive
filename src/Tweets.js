import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TweetData from './TweetData';
import './Tweets.css';

function Tweets() {
  const [tweet, setTweet] = useState([]);

  useEffect(() => {
    axios.get('https://www.tronalddump.io/tag')
      .then((response) => {
        setTweet(response.data._embedded.tag);
      }).catch(() => {
        // console.log(error);
      });
    return (setTweet([]));
  }, []);

  return (
        <div className='tweet'>
            {
              tweet.map((post) => (
                <TweetData key ={post.value} post={post} />
              ))
            }
        </div>
  );
}

export default Tweets;
