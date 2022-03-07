import { Carousel } from '@trendyol-js/react-carousel';
import MCarouselItem from 'components/MCarouselItem/MCarouselItem';

import './SectionCollection.scss'

const nftColList = [
  {
    nftUrl: 'images/collections/coll-1.jpg',
    authorUrl: 'images/author/author-1.jpg',
    nftName: "Papercut",
    nftInfo: "ERC-42",
  },{
    nftUrl: 'images/collections/coll-2.jpg',
    authorUrl: 'images/author/author-2.jpg',
    nftName: "Abstraction",
    nftInfo: "ERC-192",
  },{
    nftUrl: 'images/collections/coll-3.jpg',
    authorUrl: 'images/author/author-3.jpg',
    nftName: "Patternlicious",
    nftInfo: "ERC-61",
  },{
    nftUrl: 'images/collections/coll-4.jpg',
    authorUrl: 'images/author/author-4.jpg',
    nftName: "Skecthify",
    nftInfo: "ERC-126",
  },{
    nftUrl: 'images/collections/coll-5.jpg',
    authorUrl: 'images/author/author-5.jpg',
    nftName: "Cartoonism",
    nftInfo: "ERC-73",
  },{
    nftUrl: 'images/collections/coll-6.jpg',
    authorUrl: 'images/author/author-6.jpg',
    nftName: "Vertuland",
    nftInfo: "ERC-85",
  },
]

const SectionCollection = () => {
  /*
  const [viewCount, setViewCount] = useState(4);

  window.onresize = () => {
    const width = window.innerWidth;
    console.log(width + " : " + viewCount);
    if(width > 1000 && viewCount != 4) {
      setViewCount(4);
    }
    if(width <= 1000 && width > 800 && viewCount != 3) {
      setViewCount(3);
    }
    if(width <= 800 && viewCount != 2) {
      setViewCount(2);
    }
  }*/

  return (
    <section id='section-collection'>
      <div className='container'>
        <h2>Hot Collections</h2>
        <span className='small-border'></span>

        <div className='carousel-list'>
          <Carousel show={4} slide={1} swiping={true}>
            {
              nftColList.map( nft => <MCarouselItem key={nft.nftUrl} {...nft}/> )
            }
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default SectionCollection