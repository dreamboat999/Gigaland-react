import MNewsItem from 'components/MNewsItem/MNewsItem'

import './SectionNews.scss'

const news = [
  {
    title: 'How to create music NFT',
    content:
      'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...',
    date: 'OCTOBER 28, 2020',
    imgUrl: '/images/news/news-a1.jpg',
  },
  {
    title: 'How to sell music NFT',
    content:
      'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...',
    date: 'OCTOBER 28, 2020',
    imgUrl: '/images/news/news-a2.jpg',
  },
  {
    title: 'Where to sell music NFT',
    content:
      'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...',
    date: 'OCTOBER 28, 2020',
    imgUrl: '/images/news/news-a3.jpg',
  },
]
const SectionNews = () => {
  return (
    <section id='section-news'>
      <div className='container'>
        <h2>Latest News</h2>
        <span className='small-border'></span>
        <div className='news-list'>
          {news?.map((item) => {
            return (
              <MNewsItem
                key={item.title}
                date={item.date}
                title={item.title}
                content={item.content}
                imgUrl={item.imgUrl}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SectionNews
