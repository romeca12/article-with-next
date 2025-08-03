import Container from "@/components/Container"
import axios from "axios";
// import { IBlogProps } from "../page";

interface IArticleProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{}>;
}

async function page(props: IArticleProps) {
  const {id} = await props.params;
  // console.log(id);

  const { data } = await axios(`http://localhost:8000/articles/${id}`);

  return (
    <Container>
      <h1>single post</h1>
      <div className="mt-4">
        <h2>{data.title}</h2>
        <p>{data.content}</p>
        <p>{data.author}</p>
        <p>{data.date}</p>
      </div>
    </Container>
  )
}

export default page