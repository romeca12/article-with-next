"use client"

import { useState } from "react"

function CreateArticle() {

    const [title, setTitle] = useState<string>();
    const [description, setDescription] = useState<string>();

    const handleCreateArticle = () => {

        fetch("http://localhost:8000/articles", {
            method: "POST",
            body: JSON.stringify({
                id: (Math.floor(Math.random() * 1000)).toString(), // Simulating an ID for the article
                title: title,
                content: description,
                author: "John Doe", // Static author for simplicity
                date: new Date().toLocaleDateString("fa-IR"),
            })
        })
    }

    return (
        <>
            <h1 className="">Create Blog</h1>
            <div className="flex flex-col gap-4 mt-4 w-150 border border-gray-200 p-7 rounded-2xl">
                <label className="pl-4">title</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="border border-gray-200 rounded-2xl h-12 pl-3.5" />

                <label className="pl-4 mt-3">description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="border border-gray-200 rounded-2xl h-32 pl-3.5 pt-4"></textarea>
                <button onClick={handleCreateArticle} className="mt-4 border border-gray-200 rounded-sm p-2 w-20">submit</button>
            </div>
        </>
    )
}

export default CreateArticle