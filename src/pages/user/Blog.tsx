import React, { useEffect, useState } from 'react'
import BlogCard from '../../components/dashboard/BlogCard'
import SearchBar from '../../components/dashboard/SearchBar'
import useAxiosPrivate from '../../axios/useAxiosPrivate'


type Props = {}

interface BlogData {
  _id:string
  title:string,
  coverImg:string,
  subtitle:string
  readtime:number

}
const Blog = (props: Props) => {
  const [blogs, setBlogs] = useState<BlogData[]>([])
  const axiosPrivate = useAxiosPrivate()

  useEffect(() => {
    const getblog = async () => {
      try {
        const response = await axiosPrivate.get('/blog/getblog');
        console.log(response)
        setBlogs(response.data.data);

      } catch (error) {
        console.error('Error fetching workouts:', error);
      }
    };

    getblog();
  }, []);

  console.log(blogs)
  return (
    <>
      {/* <div className='flex flex-col justify-center items-center gap-4'> */}
        <SearchBar />
<div className='grid grid-col-1 gap-4'>


        {blogs.map(blog => (
          <BlogCard
            key={blog._id}
            id={blog._id}
            coverImg={`http://localhost:5000/${blog.coverImg}`}
            title={blog.title}
            subtitle={blog.subtitle}
           readtime={blog.readtime} />
        ))}
</div>

       

      {/* </div> */}
    </>
  )
}

export default Blog