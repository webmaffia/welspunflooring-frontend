export const getServerSideProps = async () => {
    const res = await fetch('https://welspun-cms.webmaffia.com//api/blogs');
    const data = await res.json();

  
    return {
      props: {
        blogData: data
      },
    };

    
  };
  
  const BlogPost = ({  }) => {

    return (
      <div>
        hi
      </div>
    );
  };
  
  export default BlogPost;
  