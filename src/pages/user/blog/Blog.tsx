import React, { useEffect, useState } from 'react'
import BlogCard from '../../../components/dashboard/blog/BlogCard'
import SearchBar from '../../../components/dashboard/common/SearchBar'
import useAxiosPrivate from '../../../axios/useAxiosPrivate'


type Props = {}

export interface BlogData {
  _id:string
  title:string,
  content:string[],
  author:string,
  category:string,
  coverImg:string,
  readtime:number
  subtitle:string

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
   
        {/* <SearchBar /> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 ">
    


        {blogs.map(blog => (
          <BlogCard
            key={blog._id}
            id={blog._id}
            coverImg={`http://localhost:5000/${blog.coverImg}`}
            title={blog.title}
            subtitle={blog.subtitle}
           readtime={blog.readtime}
           category={blog.category} />
        ))}
        </div>

    </>
  )
}

export default Blog