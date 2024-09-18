import { gql, useQuery } from "@apollo/client";

const { error, loading, data } = useQuery(SLIDER_HOME);

const SLIDER_HOME = gql`
  query Sliderhome {
    page(idType: URI, id: "slider-home") {
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;

const CLIENTS = gql`
  query clients {
    posts(where: { categoryName: "client-data" }) {
      edges {
        node {
          title
          featuredImage {
            node {
              title
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

const WHY_CHOOSE_US_HOME = gql`
  query whyChooseUsHome {
    page(idType: URI, id: "why-choose-us-home") {
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;

const SERVICES_HOME = gql`
  query servicesHome {
    posts(where: { categoryName: "services" }, last: 2) {
      edges {
        node {
          title
          content
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

const GET_PORTFOLIOS = gql`
  query GetPortfolios {
    posts(where: { categoryName: "Portfolio" }) {
      edges {
        node {
          title
          content
          image: featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

const GET_TESTIMONIALS = gql`
  query GetTestimonials {
    posts(where: { categoryName: "Testimonials" }) {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`;

const SERVICE_QUOTE = gql`
  query serviceQuote {
    post(idType: URI, id: "2024/07/08/amazing-digital-service") {
      title
      content
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
    }
  }
`;

const BOTTOM_QUOTE = gql`
  query bottomQuote {
    post(idType: URI, id: "2024/07/08/work-with-us") {
      title
      content
    }
  }
`;


{/* <div>
        {loading && <h3> Data is loading...</h3>}
        {error && <h3> {error.message} </h3>}
        {data && parse(data.page.content)}
      </div> */}

      {/* <motion.div
        className="text-end font-bold text-[9vw] text-[#2B00AC] mb-4 mt-4 flex max-[450px]:text-[15vw]"
        initial={{ x: "100%" }}
        animate={{ x: ["-98%", "3%", "-98%"] }}
        transition={{
          repeat: Infinity,
          type: "tween",
          duration: 20,
          repeatType: "loop",
          ease: "linear",
        }}>
        Digital<span className="text-[#FF9900]"> - </span>Design
        <span className="text-[#FF9900]"> - </span>Development
        <span className="text-[#FF9900]"> - </span>Technology
      </motion.div> */}