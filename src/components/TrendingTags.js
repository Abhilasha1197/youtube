import React from 'react'
import TrendingTagButton from './TrendingTagButton'

const TrendingTags = () => {

  const tagList = ["All","music", "news" , "sports" ,"Live" , "programming", "comedy", "jobs" ,"Recently uploaded"];
  
  return (
    <div className='flex'>
      {
         tagList.map((tag,index)=> (
          <TrendingTagButton key={index} name={tag}/>
           )  )
      } 
       </div>
  )
}

export default TrendingTags
