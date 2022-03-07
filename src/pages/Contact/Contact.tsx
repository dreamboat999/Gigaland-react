import MOffcieBox from 'components/MOfficeBox/MOfficeBox'
import MainLayout from 'layout/MainLayout'

import './Contact.scss'

const Contact = () => {
  return (
    <MainLayout headerType='light'>
      <div className='contact-page'>
        <section
          id='subheader'
          style={{
            background:
              'url("images/background/subheader.jpg") center top / cover',
          }}
        >
          <div className='container'>
            <h1>Contact Us</h1>
            <span>Anim paiatur cliche reprehenderit</span>
          </div>
        </section>

        <section id='main-contact'>
          <div className='container'>
            <div>
              <form className='form-container'>
                <h3>Do you have any queston?</h3>
                <input
                  type='text'
                  name='name'
                  id='name'
                  className='form-control'
                  placeholder='Your Name'
                />
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='form-control'
                  placeholder='Your Email'
                />
                <input
                  type='text'
                  name='phone'
                  id='phone'
                  className='form-control'
                  placeholder='Your Phone'
                />
                <textarea placeholder='Your Message' className='form-control'/>
                <button type='submit' className='btn-main'>Submit Form</button>
              </form>
            </div>

            <div>
              <MOffcieBox
                title='US Office'
                address='08 W 36th St, New York, NY 10001'
                phone='+1 333 9296'
                email='contact@example.com'
                backgroundColor='rgb(242, 246, 254)'
                color=''
              />
              <MOffcieBox
                title='AU Office'
                address='100 Mainstreet Center, Sydney'
                phone='+61 333 9296'
                email='contact@example.com'
                backgroundColor='var(--primary-color)'
                color='white'
              />
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}

export default Contact
