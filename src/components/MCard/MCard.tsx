import { Link } from 'react-router-dom'

import './MCard.scss'

type Props = {
  linkUrl: string
  Icon: any
  text: string
}

const MCard = (props: Props) => {
  const { linkUrl, Icon, text } = props

  return (
    <div className='card'>
      <Link to={linkUrl}>
        {Icon}
        <span>{text}</span>
      </Link>
    </div>
  )
}

export default MCard
