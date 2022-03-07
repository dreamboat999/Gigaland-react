import MainLayout from 'layout/MainLayout'

import './Counters.scss'

const counterData = [
  { value: 4500, text: 'Lorem ipsum elit reprehenderit.', suffix: 'k' },
  { value: 4, text: 'Irure in sed.', suffix: 'k' },
  { value: 16, text: 'In sint aliquip.', suffix: 'k' },
  { value: 4, text: 'Eu ea anim.', suffix: 'k' },
  { value: 15, text: 'Excepteur duis ad nostrud et.', suffix: 'k' },
  { value: 100, text: 'Tempor in quis.', suffix: 'k' },
]
const Counters = () => {
  return (
    <MainLayout headerType='light'>
      <div className='counter-page'>
        <section
          id='subheader'
          style={{
            background:
              'url("images/background/subheader.jpg") center top / cover',
          }}
        >
          <div className='container'>
            <h1>Counters</h1>
          </div>
        </section>

        <section className='section-main-counter'>
          <div className='container'>
            <div className='counter-description'>
              <span className='p-title'>fun facts</span>
              <h2>What we did?</h2>
              <span className='small-border' />
              <p>
                Consequat occaecat ullamco amet non eiusmod nostrud dolore irure
                incididunt est duis anim sunt.
              </p>
            </div>

            <div className='counter-data-list'>
              {counterData.map((item) => {
                return <div key={item.text} className='counter-data-item'>
                  <h2>{item.value}</h2>
                  <p>{item.text}</p>
                </div>
              })}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}

export default Counters
