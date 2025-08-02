import Article from "@/components/Article"
import Container from "@/components/Container"
import axios from "axios"

async function Blogs() {
  


  return (
    <Container>
      Blogs Page
      <p className="text-gray-500">This is the blogs page.</p>

      <div className="grid grid-cols-4 grid-row-2 gap-4 my-6">
        <Article/>
      </div>
    </Container>
  )
}

export default Blogs