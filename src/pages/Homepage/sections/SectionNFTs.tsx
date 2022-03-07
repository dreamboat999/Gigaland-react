import MNFTItem from 'components/MNFTItem/MNFTItem'

import './SectionNFTs.scss'

const nfts = [
  {
    imgUrl: '/images/items/anim-1.webp',
    authorImgUrl: '/images/author/author-10.jpg',
    name: 'Pinky Ocean',
    price: 0.08,
    soldCount: 1,
    totalCount: 20,
    voteCount: 50,
    timeleft: '20d 21h 38m 21s',
  },
  {
    imgUrl: '/images/items/anim-2.webp',
    authorImgUrl: '/images/author/author-10.jpg',
    name: 'Pinky Ocean',
    price: 0.08,
    soldCount: 1,
    totalCount: 20,
    voteCount: 50,
    timeleft: '20d 21h 38m 21s',
  },
  {
    imgUrl: '/images/items/anim-3.webp',
    authorImgUrl: '/images/author/author-10.jpg',
    name: 'Pinky Ocean',
    price: 0.08,
    soldCount: 1,
    totalCount: 20,
    voteCount: 50,
    timeleft: '20d 21h 38m 21s',
  },
  {
    imgUrl: '/images/items/anim-4.webp',
    authorImgUrl: '/images/author/author-10.jpg',
    name: 'Pinky Ocean',
    price: 0.08,
    soldCount: 1,
    totalCount: 20,
    voteCount: 50,
    timeleft: '20d 21h 38m 21s',
  },
  {
    imgUrl: '/images/items/anim-5.webp',
    authorImgUrl: '/images/author/author-10.jpg',
    name: 'Pinky Ocean',
    price: 0.08,
    soldCount: 1,
    totalCount: 20,
    voteCount: 50,
    timeleft: '20d 21h 38m 21s',
  },
  {
    imgUrl: '/images/items/anim-6.webp',
    authorImgUrl: '/images/author/author-10.jpg',
    name: 'Pinky Ocean',
    price: 0.08,
    soldCount: 1,
    totalCount: 20,
    voteCount: 50,
    timeleft: '20d 21h 38m 21s',
  },
  {
    imgUrl: '/images/items/anim-7.webp',
    authorImgUrl: '/images/author/author-10.jpg',
    name: 'Pinky Ocean',
    price: 0.08,
    soldCount: 1,
    totalCount: 20,
    voteCount: 50,
    timeleft: '20d 21h 38m 21s',
  },
  {
    imgUrl: '/images/items/anim-8.webp',
    authorImgUrl: '/images/author/author-10.jpg',
    name: 'Pinky Ocean',
    price: 0.08,
    soldCount: 1,
    totalCount: 20,
    voteCount: 50,
    timeleft: '20d 21h 38m 21s',
  },
]

const SectionNFTs = () => {
  return (
    <section id='section-nfts'>
      <div className='container'>
        <h2>Popular Items</h2>
        <span className='small-border' />
        <div className='nft-list'>
          {nfts?.map((item) => {
            return <MNFTItem key={item.imgUrl} {...item} />
          })}
        </div>
      </div>
    </section>
  )
}

export default SectionNFTs
