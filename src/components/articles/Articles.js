import { getByTitle } from '@testing-library/react'
import React from 'react'

const Articles = ({articles}) => {
    return (
        <div>
            {articles.map((article) => {
                const {title, author, thumbnail, ups} = article.data;
                return (
                    <article>

                    </article>
                )
            })}
        </div>
    )
}

export default Articles
