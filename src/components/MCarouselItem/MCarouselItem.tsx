import { Link } from 'react-router-dom'
import { IoIosCheckmark } from "react-icons/io";

import './MCarouselItem.scss'

type Props = {
  nftUrl: string
  authorUrl: string
  nftName: string
  nftInfo: string
}
const MCarouselItem = (props: Props) => {
  const { nftUrl, authorUrl, nftName, nftInfo} = props
  return (
    <div className="carousel-item">
      <div className='nft-image'>
        <Link to="/">
          <img src={nftUrl} alt="nft" />
        </Link>
      </div>
      <div className='author'>
        <Link to="/">
          <img src={authorUrl} alt="author" />
        </Link>
        <div className='check'>
          <IoIosCheckmark />
        </div>
      </div>
      <div className='nft-name'>
        { nftName }
      </div>
      <div className='nft-info'>
        { nftInfo }
      </div>
    </div>
  )
}

export default MCarouselItem