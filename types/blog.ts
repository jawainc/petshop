interface Blog {
  uuid: string,
  title: string,
  slug: string,
  content: string,
  metadata: {
    image: string,
    author: string
  },
  created_at: string,
  updated_at: string
}

export default Blog;
