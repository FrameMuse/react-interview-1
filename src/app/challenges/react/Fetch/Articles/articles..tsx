import "./Atricels.scss"

import { useEffect, useState } from "react"

type TArticle = {
  id: number
  title: string
  description: string
  preview: string
}

const Article = (props: Omit<TArticle, "id">) => {
  const { title, description, preview } = props

  return (
    <div className="article-wrapper">
      <img src={preview}></img>
      <div className="article-description">
        <h2 className="article-title">{title}</h2>
        <span className="article-description">{description}</span>
      </div>
    </div>
  )
}

function Articles() {
  const [articles, setArticles] = useState<TArticle[]>([])

  useEffect(() => {
    const getArticles = async (): Promise<TArticle[]> => {
      const response = await fetch("/api.json")
      const data = await response.json()

      return data.articles
    }

    const articles = getArticles().then(result => setArticles(result))
  }, [])

  return (
    <ul className="atricels">{
      articles.map(article => {
        return <li className="item" key={article.id}><Article title={article.title} description={article.description} preview={article.preview}/></li>
      })
    }</ul>
  )
}

export default Articles
