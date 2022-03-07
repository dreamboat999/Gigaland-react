import React, { useState } from 'react'
import { FaCheck, FaEllipsisH, FaHeart } from 'react-icons/fa'

import './MNFTItem.scss'

type Props = {
  imgUrl: string
  authorImgUrl: string
  name: string
  price: number
  soldCount: number
  totalCount: number
  voteCount: number
  timeleft: string
}

const MNFTItem = (props: Props) => {
  const { imgUrl, authorImgUrl, name, price, soldCount, totalCount, voteCount, timeleft } =
    props
  const [voteStatus, setVoteStatus] = useState<boolean>(false)

  const onClickVote = () => {
    setVoteStatus(prev => !prev)
  }

  return (
    <div className='nft-item-wrapper'>
      <div className='nft-item'>
        <div className='nft-status'>
          <div className='nft-author'>
            <img src={authorImgUrl} alt='nft-author' />
            <div className='check-box'>
              <FaCheck />
            </div>
          </div>

          <div className='nft-time'>{timeleft}</div>
        </div>

        <div className='nft-image'>
          <img src={imgUrl} alt='nft-img' />
        </div>

        <div className='nft-title'>
          <span>{name}</span>
          <div className='nft-item-click'>
          <FaEllipsisH />
          </div>
        </div>

        <div className='nft-info'>
          <span>{price} ETH</span>
          <span>
            {soldCount}/{totalCount}
          </span>
        </div>

        <div className='nft-vote'>
          <a href='/'>Place a bid</a>
          <div onClick={onClickVote} className={`${voteStatus && 'voted'}`}>
            <FaHeart />
            {voteCount}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MNFTItem
