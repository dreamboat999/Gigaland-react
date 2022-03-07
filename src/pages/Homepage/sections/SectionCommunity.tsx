import MCard from 'components/MCard/MCard'

import {
  FaTwitter,
  FaEnvelope,
  FaUsers,
  FaGithub,
  FaRedditAlien,
  FaFileAlt,
} from 'react-icons/fa'

import './SectionCategory.scss'

const SectionCommunity = () => {
  return (
    <section id='section-community'>
      <div className='container'>
        <h2>Join Community</h2>
        <span className='small-border'></span>
        <div className='card-list'>
          <MCard linkUrl='/explore' Icon={<FaTwitter />} text='Twitter' />
          <MCard
            linkUrl='/explore'
            Icon={<FaEnvelope />}
            text='Mailing List'
          />
          <MCard linkUrl='/explore' Icon={<FaUsers />} text='Forum' />
          <MCard linkUrl='/explore' Icon={<FaGithub />} text='GitHub' />
          <MCard linkUrl='/explore' Icon={<FaRedditAlien />} text='Reddit' />
          <MCard
            linkUrl='/explore'
            Icon={<FaFileAlt />}
            text='Documentation'
          />
        </div>
      </div>
    </section>
  )
}

export default SectionCommunity
