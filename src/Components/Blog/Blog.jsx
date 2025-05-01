import React from 'react';
import bookMarkImg from '../../assets/book (1).png'
import PropTypes from 'prop-types';
const Blog = ({blog}) => {
          console.log("Blog Component", blog);
          const {title,cover, author_img, reading_time,hashtag, author_name,posted_date}=blog;
          return (
                    <div>
                           <div className='cover px-4 justify-center'>
                              <img className='rounded-lg' src={cover} alt={`Cover photo of ${title}`} />
                            </div>
                              <div className='author-container flex gap-4 my-4 px-4 justify-between items-center mx-auto'>
                                        <div className='author  flex'>
                                                  <img className='rounded-full w-16 h-16 ' src={author_img} alt="" />
                                        <div className='author-info flex mx-auto my-auto'>
                                                  <div className='justify-start px-4'>
                                                            <h4 className='text-xl font-bold'>{author_name}</h4>
                                                            <p className='text-[#7f8c8d]'>{posted_date}</p>
                                                  </div>
                                                  
                                        </div>
                                        </div>
                                        
                                        <p className='text-[#7f8c8d] flex gap-3'>{reading_time} minutes <img className='w-6 h-6' src={bookMarkImg} alt="" /> </p>
                              </div>
                              <div className='details-container px-4 pb-4 flex flex-col gap-6'>
                                        <p className='text-4xl font-bold justify-start'>{title}</p>
                                        <p className='text-[#7f8c8d]'>
                                                  {
                                                            hashtag.map((hash,index) => <span><a href="" key={index} className='text-blue-600'>{hash}</a></span>)
                                                  }
                                        </p>
                                        <a className='text-blue-600' href="#">Mark as Read</a>
                              </div>   
                    </div>
          );
};
Blog.PropTypes ={
          blog: PropTypes.object.isRequired

}
export default Blog;
