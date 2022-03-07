import MNFTItem from 'components/MNFTItem/MNFTItem'
import MainLayout from 'layout/MainLayout'

import './MusicNFT.scss'

const nfts = [
  {
    imgUrl: '/images/items/anim-1.webp',
    authorImgUrl: '/images/author/author-8.jpg',
    name: 'Pinky Ocean',
    price: 0.08,
    soldCount: 1,
    totalCount: 20,
    voteCount: 50,
    timeleft: '20d 21h 38m 21s',
  },
  {
    imgUrl: '/images/items/anim-2.webp',
    authorImgUrl: '/images/author/author-8.jpg',
    name: 'Pinky Ocean',
    price: 0.08,
    soldCount: 1,
    totalCount: 20,
    voteCount: 50,
    timeleft: '20d 21h 38m 21s',
  },
  {
    imgUrl: '/images/items/anim-3.webp',
    authorImgUrl: '/images/author/author-8.jpg',
    name: 'Pinky Ocean',
    price: 0.08,
    soldCount: 1,
    totalCount: 20,
    voteCount: 50,
    timeleft: '20d 21h 38m 21s',
  },
  {
    imgUrl: '/images/items/anim-4.webp',
    authorImgUrl: '/images/author/author-8.jpg',
    name: 'Pinky Ocean',
    price: 0.08,
    soldCount: 1,
    totalCount: 20,
    voteCount: 50,
    timeleft: '20d 21h 38m 21s',
  },
  {
    imgUrl: '/images/items/anim-5.webp',
    authorImgUrl: '/images/author/author-8.jpg',
    name: 'Pinky Ocean',
    price: 0.08,
    soldCount: 1,
    totalCount: 20,
    voteCount: 50,
    timeleft: '20d 21h 38m 21s',
  },
  {
    imgUrl: '/images/items/anim-6.webp',
    authorImgUrl: '/images/author/author-8.jpg',
    name: 'Pinky Ocean',
    price: 0.08,
    soldCount: 1,
    totalCount: 20,
    voteCount: 50,
    timeleft: '20d 21h 38m 21s',
  },
  {
    imgUrl: '/images/items/anim-7.webp',
    authorImgUrl: '/images/author/author-8.jpg',
    name: 'Pinky Ocean',
    price: 0.08,
    soldCount: 1,
    totalCount: 20,
    voteCount: 50,
    timeleft: '20d 21h 38m 21s',
  },
  {
    imgUrl: '/images/items/anim-8.webp',
    authorImgUrl: '/images/author/author-5.jpg',
    name: 'Pinky Ocean',
    price: 0.08,
    soldCount: 1,
    totalCount: 20,
    voteCount: 50,
    timeleft: '20d 21h 38m 21s',
  },
]

const MusicNFT = () => {
  return (
    <MainLayout headerType='light'>
      <div className='music-nft-page'>
        <section
          id='subheader'
          style={{
            background:
              'url("images/background/subheader.jpg") center top / cover',
          }}
        >
          <div className='container'>
            <h1>Music NFT</h1>
          </div>
        </section>

        <section>
          <div className='container'>
            <div className='nft-list'>
              {nfts?.map((item) => {
                return <MNFTItem key={item.name} {...item} />
              })}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}

export default MusicNFT
