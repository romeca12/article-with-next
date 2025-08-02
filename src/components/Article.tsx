import { IBlogProps } from "@/app/blogs/page"

function Article({title, content, author, date}: IBlogProps) {
    return (
        <div className="shadow dark:shadow-emerald-300 p-4 rounded-2xl cursor-pointer">
            <h2 className="mb-4">{title}</h2>
            <p className="text-justify">{content}</p>
            <p className="text-gray-500">{author}</p>
            <p className="text-gray-500">{date}</p>
        </div>
    )
}

export default Article