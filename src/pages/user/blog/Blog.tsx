// import React, { useEffect, useState } from 'react'
// import BlogCard from '../../../components/dashboard/blog/BlogCard'
// import SearchBar from '../../../components/dashboard/common/SearchBar'
// import useAxiosPrivate from '../../../axios/useAxiosPrivate'
// import CardSkeleton from  '../../../components/dashboard/common/CardSkeleton'
// import Pagination from '../../../components/dashboard/common/Pagination'
// import usePagination from '../../../hooks/usePagination'


// type Props = {}

// export interface BlogData {
//   _id:string
//   title:string,
//   content:string[],
//   author:string,
//   category:string,
//   coverImg:string,
//   readtime:number
//   subtitle:string

// }
// const Blog = (props: Props) => {
//   const [blogs, setBlogs] = useState<BlogData[]>([])
//   const axiosPrivate = useAxiosPrivate()
//   const [loading, setLoading] = useState(true);
  
//   const perPage = 3

//   const { currentPage, totalPages, handlePageChange, updateTotalPages } = usePagination();


//   const getblog = async () => {
//     try {
//       const response = await axiosPrivate.get(`/blog/getblog?page=${currentPage}&perPage=${perPage}`);
//       console.log(response)
//       setBlogs(response.data.data.blogs);
//       updateTotalPages(response.data.data.totalPages);
//       setLoading(false)

//     } catch (error) {
//       console.error('Error fetching workouts:', error);
//     }
//   };

//   useEffect(() => {
//     getblog();
//   }, [currentPage]);
//   console.log(totalPages)

//   // const handlePageChange = (page: number) => {
//   //   setCurrentPage(page);
//   // };

//   console.log(blogs)
//   return (
//     <>
   
//         {/* <SearchBar /> */}
       
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
//                 {loading ? (
               
//                     <>
//                         <CardSkeleton />
//                         <CardSkeleton />
//                         <CardSkeleton />
//                         <CardSkeleton />
//                         <CardSkeleton />
//                         <CardSkeleton />
//                     </>
//                 ) : (
               
//                     blogs.map((blog) => (
//                         <BlogCard
//                             key={blog._id}
//                             id={blog._id}
//                             coverImg={`http://localhost:5000/${blog.coverImg}`}
//                             title={blog.title}
//                             subtitle={blog.subtitle}
//                             readtime={blog.readtime}
//                             category={blog.category}
//                         />
//                     ))
//                 )}
//         </div>
       
//        <div className='mt-8'> 
//       <Pagination  currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
//        </div>
//     </>
//   )
// }

// export default Blog



import React, { useEffect, useState } from 'react';
import BlogCard from '../../../components/dashboard/blog/BlogCard';
import SearchBar from '../../../components/dashboard/common/SearchBar';
import useAxiosPrivate from '../../../axios/useAxiosPrivate';
import CardSkeleton from  '../../../components/dashboard/common/CardSkeleton';
import Pagination from '../../../components/dashboard/common/Pagination';
import usePagination from '../../../hooks/usePagination';

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
  const [searchResults, setSearchResults] = useState<BlogData[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const perPage = 3;
  const { currentPage, totalPages, handlePageChange, updateTotalPages } = usePagination();

  const axiosPrivate = useAxiosPrivate();

  const getBlogData = async (page: number) => {
    try {
      const response = await axiosPrivate.get(`/blog/getblog?page=${page}&perPage=${perPage}`);
      setBlogs(response.data.data.blogs);
      updateTotalPages(response.data.data.totalPages);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching blog data:', error);
    }
  };

  const searchBlogs = async () => {
    try {
      const response = await axiosPrivate.get(`/blog/searchblog?page=${currentPage}&perPage=${perPage}&query=${searchQuery}`);
      setSearchResults(response.data.data.blogs);
      updateTotalPages(response.data.data.totalPages);
      setLoading(false);
    } catch (error) {
      console.error('Error searching blogs:', error);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      searchBlogs();
    } else {
      getBlogData(currentPage);
    }
  }, [currentPage, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {loading ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : (
          (searchQuery ? searchResults : blogs).map((blog) => (
            <BlogCard
              key={blog._id}
              id={blog._id}
              coverImg={`http://localhost:5000/${blog.coverImg}`}
              title={blog.title}
              subtitle={blog.subtitle}
              readtime={blog.readtime}
              category={blog.category}
            />
          ))
        )}
      </div>
      <div className="mt-8">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </>
  );
};

export default Blog;
