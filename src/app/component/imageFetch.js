export const getServerSideProps = async () => {
    const res = await fetch('https://staging-cms.welspunflooring.com/api/blogs');
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
  