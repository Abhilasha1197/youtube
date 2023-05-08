import React from 'react'

const Card = ({  url, publishedAt, likeCount, channelTitle,title}) => {
  return (
    <div className='h-48 w-80 p-5 m-2 rounded-lg'>
      <img src={url} alt='thumbnail'/>
      <h1>{title}</h1>
      <h1>{channelTitle}</h1>
      <h1>{publishedAt}</h1>
      <h1>{likeCount}</h1>
    </div>
  )
}

export default Card
