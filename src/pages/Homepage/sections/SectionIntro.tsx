import MFeatureBox from 'components/MFeatureBox/MFeatureBox'

import { FaCloudUploadAlt, FaWallet, FaTags } from 'react-icons/fa'

import './SectionIntro.scss'

const SectionIntro = () => {
  return (
    <section id='section-intro'>
      <div className='container'>
        <h2>Create and sell your NFTs</h2>
        <span className='small-border'></span>
        <div className='feature-list'>
          <MFeatureBox
            title='Set up your wallet'
            content='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.'
            Icon={FaWallet}
            BackIcon={FaWallet}
          />
          <MFeatureBox
            title='Set up your wallet'
            content='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.'
            Icon={FaCloudUploadAlt}
            BackIcon={FaCloudUploadAlt}
          />
          <MFeatureBox
            title='Set up your wallet'
            content='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.'
            Icon={FaTags}
            BackIcon={FaTags}
          />
        </div>
      </div>
    </section>
  )
}

export default SectionIntro
