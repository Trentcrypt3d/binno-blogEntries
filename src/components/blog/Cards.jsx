import React from 'react'
import './blog.css'
import { blog } from '../../assets/data'

const Cards = () => {
  return (
    <>
        <section className='content'>
            <div className="grid2">
                {blog.map((item)=> (
                <div className='box boxItems' key={item.id}> 
                        <div className='img'>
                            <img src={item.cover} alt='' />
                        </div>
                        <div className="contentUserInfoContainer">
                            <h2>{item.user}</h2>
                            <h4>{item.userType}</h4>
                        </div>
                    <div className="details">
                        {/* <div className="tag">
                            <p>{item.category}</p>     //optional tag category
                        </div> */}
                        <h3>{item.title}</h3>
                            <p>{item.desc.slice(0,250)}...</p>
                            <div className='date'>
                            <h4>{item.date}</h4>
                        </div>
                    </div>
                </div>
                ))} 
            </div>
        </section>
    </>
  ) 
}

export default Cards;