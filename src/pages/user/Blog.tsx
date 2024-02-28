import React from 'react'
import BlogCard from '../../components/dashboard/BlogCard'
import SearchBar from '../../components/dashboard/SearchBar'

type Props = {}

const Blog = (props: Props) => {
  return (
    <>
    <div className='flex flex-col justify-center items-center gap-4'>
    <SearchBar/>

    <BlogCard/>
    <BlogCard/>
    <BlogCard/>
    

    </div>
    </>
  )
}

export default Blog