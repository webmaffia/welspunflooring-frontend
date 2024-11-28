export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`);
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
  