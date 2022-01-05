/* eslint-disable react/prop-types */
// import React from 'react';
// import { Link } from 'gatsby';
// import Title from './title';
// import Blog from './blog';
// import styles from '../css/blogs.module.css';

// export const Blogs = ({ blogs, title, subTitle, showLink }) => {
//   console.log(blogs);
//   return (
//     <section className={styles.section}>
//       <div className={styles.underline}></div>
//       <Title title={title} />
//       {subTitle && <h4 className={styles.subtitle}>Latest Articles</h4>}
//       <div className={`${styles.sectionCenter} ${styles.blogsCenter}`}>
//         {blogs.map((blog) => {
//           return <Blog key={blog.id} {...blog} />;
//         })}
//       </div>
//       {showLink && (
//         <Link to="/blog/" className={`${styles.btn} ${styles.centerBtn}`}>
//           blog
//         </Link>
//       )}
//     </section>
//   );
// };

// export default Blogs;
