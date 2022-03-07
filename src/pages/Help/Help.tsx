import MHelpItem from 'components/MHelpItem/MHelpItem'
import MainLayout from 'layout/MainLayout'

import './Help.scss'

const helpData = [
  {
    title: 'Getting Started',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam.',
  },
  {
    title: 'Buying',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam.',
  },
  {
    title: 'Selling',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam.',
  },
  {
    title: 'Creating',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam.',
  },
  {
    title: 'Partners',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam.',
  },
  {
    title: 'Developers',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam.',
  },
]
const Help = () => {
  return (
    <MainLayout headerType='light'>
      <div className='help-page'>
        <section
          id='subheader'
          style={{
            background:
              'url("images/background/subheader.jpg") center top / cover',
          }}
        >
          <div className='container'>
            <h1>Help Center</h1>
            <span>eg. create item, create wallet.</span>
          </div>
        </section>

        <section className='section-main-help'>
          <div className='container'>
            {helpData?.map((item) => {
              return <MHelpItem key={item.title} {...item} />
            })}
          </div>
        </section>
      </div>
    </MainLayout>
  )
}

export default Help
