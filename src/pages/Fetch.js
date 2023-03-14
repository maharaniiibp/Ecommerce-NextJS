function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums')
    const posts = await res.json()

    return {
      props: {
        posts,
      },
    }
  } catch (error) {
    console.log('error')
  }
}

export default Blog
