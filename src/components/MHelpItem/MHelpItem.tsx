import './MHelpItem.scss'

type Props = {
  title: string
  content: string
}

const MHelpItem = (props: Props) => {
  const { title, content } = props
  return (
    <div className='help-item'>
        <h4>{title}</h4>
        <p>{content}</p>
        <button className='btn-main'>Read more</button>
    </div>
  )
}

export default MHelpItem
