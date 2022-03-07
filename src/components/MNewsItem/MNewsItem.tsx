import './MNewsItem.scss'

type Props = {
  imgUrl: string
  date: string
  title: string
  content: string
}

const MNewsItem = (props: Props) => {
  const { imgUrl, date, title, content } = props
  return (
    <div className='news-item'>
      <div className='img-box'>
        <span className='img-span'>Tips & Tricks </span>
        <img src={imgUrl} alt='news-img' />
      </div>
      <span className='date'>{date}</span>
      <h3>{title}</h3>
      <p>{content}</p>
      <button className='btn-main'>Read more</button>
    </div>
  )
}

export default MNewsItem
