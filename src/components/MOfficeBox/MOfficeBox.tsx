import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaRegFilePdf,
} from 'react-icons/fa'

import './MOfficeBox.scss'

type Props = {
  title: string
  address: string
  phone: string
  email: string
  backgroundColor: string
  color: string
}

const MOffcieBox = (props: Props) => {
  const { title, address, phone, email, backgroundColor, color } = props

  return (
    <div className='office-box' style={{background: backgroundColor, color: color}}>
      <h3 style={{color: color}}>{title}</h3>
      <span>
        <FaMapMarkerAlt />
        {address}
      </span>
      <span>
        <FaPhoneAlt />
        {phone}
      </span>
      <span>
        <FaRegEnvelope />
        {email}
      </span>
      <span>
        <FaRegFilePdf />
        Download Brochure
      </span>
    </div>
  )
}

export default MOffcieBox
