// import React from "react";
// import styles from "../css/skills.module.css";
// import Title from "../components/title";
// import { useStaticQuery, graphql } from "gatsby";
// import Image from "gatsby-image";

// const Skills = () => {
//   const data = useStaticQuery(graphql`
//     {
//       allFile(
//         filter: { relativeDirectory: { eq: "skills" } }
//         sort: { fields: name }
//       ) {
//         edges {
//           node {
//             id
//             name
//             childImageSharp {
//               fluid {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//       }
//     }
//   `);
//   return (
//     <div className={styles.section}>
//       <div className={styles.underline}></div>
//       <Title title="skills" />
//       <section className={styles.sectionCenter}>
//         {data.allFile.edges.map((images) => {
//           return (
//             <div className={styles.logo}>
//               <span className={styles.text}>{images.node.name}</span>
//               <Image fluid={images.node.childImageSharp.fluid} />
//             </div>
//           );
//         })}
//       </section>
//     </div>
//   );
// };
// export default Skills;
