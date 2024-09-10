import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;

// // Step 1: Import React
// import * as React from "react";
// import Map from "./map";

// // Step 2: Define your component
// const IndexPage = () => {
//   return (
//     <main>
//       <h1>Welcome to my Gatsby site!</h1>
//       <p>I'm making this by following the Gatsby Tutorial.</p>
//     </main>
//   );
// };

// // You'll learn about this in the next task, just copy it for now
// export const Head = () => <title>Home Page</title>;

// // Step 3: Export your component
// export default IndexPage;
