/* eslint-disable react/prop-types */
import Axios from 'axios';
import React, { useState } from 'react';
import './TweetData.css';

function TweetData({ post }) {
  const [tweets, setTweets] = useState([]);
  const [display, setDisplay] = useState(false);

  const getRequestQuery = (tweet) => {
    const updatedQuery = tweet.split(' ').join('%20');
    Axios.get(`https://www.tronalddump.io/search/quote?query=${updatedQuery}`)
      .then((res) => {
        setTweets(res.data._embedded.quotes);
      }).catch(() => {

      });
  };

  return (
            <>
                <div className='tweet__select' onClick={() => getRequestQuery(post.value)}>
                    <div key={post.value}
                    onClick={() => setDisplay((pre) => !pre)}>
                    {post.value}
                    </div>
                    { display && <div className='tweet__content'>
                            {
                              tweets.length > 0
                                ? tweets.map((posts) => (
                            <div key={posts.tag} className='tweet__options'>
                              <div className="post"> {posts.value} </div>
                            </div>
                                ))
                                : (<div>No Posts Yet!!</div>)
                            }
                        </div>}
                </div>
            </>
  );
}

export default TweetData;
