import './MFeatureBox.scss'

type Props = {
  Icon: any
  title: string
  content: string
  BackIcon: any
}

const MFeatureBox = (props: Props) => {
  const { Icon, title, content, BackIcon } = props
  return (
    <div className='feature-box'>
      <div className='icon'>
        <Icon />
      </div>
      <h3>{title}</h3>
      <p>{content}</p>
      <div className='back-icon'>
        <BackIcon />
      </div>
    </div>
  )
}

export default MFeatureBox
