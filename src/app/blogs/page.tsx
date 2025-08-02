import Article from "@/components/Article"
import Container from "@/components/Container"
import axios from "axios"
import Link from "next/link";

export type IBlogProps = {
  id?: string;
  title: string;
  content: string;
  author: string;
  date: string;
}

async function Blogs() {
  const { data } = await axios("http://localhost:8000/articles");
  console.log(data[0])

  return (
    <Container>
      Blogs Page
      <p className="text-gray-500">This is the blogs page.</p>

      <div className="grid grid-cols-4 grid-row-2 gap-4 my-6">
        {data.map((article: IBlogProps) => (
          <Link key={article.id} href={`/blogs/${article.id}`}>
            <Article key={article.id} {...article} />
          </Link>
          // <Article
          //   key={article.id}
          //   title={article.title}
          //   content={article.content}
          //   author={article.author}
          //   date={article.date}
          // />
        ))}
      </div>
    </Container>
  )
}

export default Blogs