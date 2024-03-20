

import React, { useEffect, useState } from 'react';
import BlogCard from '../../../components/dashboard/blog/BlogCard';
import SearchBar from '../../../components/dashboard/common/SearchBar';
import useAxiosPrivate from '../../../axios/useAxiosPrivate';
import CardSkeleton from '../../../components/dashboard/common/CardSkeleton';
import Pagination from '../../../components/dashboard/common/Pagination';
import usePagination from '../../../hooks/usePagination';
import { useSearchParams } from 'react-router-dom';

export interface BlogData {
  _id: string;
  title: string;
  content: string[];
  author: string;
  category: string;
  coverImg: string;
  readtime: number;
  subtitle: string;
}

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const { currentPage, totalPages, handlePageChange, updateTotalPages } = usePagination();
  const axiosPrivate = useAxiosPrivate();
  const perPage = 3;


  const getBlogData = async () => {
    try {
      const queryParamValue = searchParams.get('q');
      const response = await axiosPrivate.get('/blog/getblog' , {
        params: {
          page: currentPage,
          perPage: perPage,
          query: queryParamValue || '',
        }
      });
   
      
      setBlogs(response.data.data.blogs);
      updateTotalPages(response.data.data.totalPages);
     setLoading(false)
    } 
    catch (error) {
      console.error('Error fetching blogs:', error);
      setBlogs([])
     
    }
  };
  
  useEffect(() => {
    getBlogData()
  }, [currentPage, searchParams]);

console.log(blogs);


  return (
    <>
    
      {loading ? (
        <>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
       

          </div>
        </>
      ) : blogs.length !== 0 ? (
        <>
        <div className=''>
      <SearchBar />

    </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {blogs.map((blog) => (
              <BlogCard
                key={blog._id}
                data={blog}
              />
            ))}
          </div>
          <div className="mt-8">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          </div>
        </>
      ) : (
        <div className="mt-8 text-center text-white text-3xl">Oops! No blogs found.</div>
      )}

    </>
  );
};

export default Blog;
