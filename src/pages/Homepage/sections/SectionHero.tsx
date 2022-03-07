import './SectionHero.scss'

const SectionHero = () => {
  return (
    <section id='section-hero'>
      <div className='container'>
        <div 
          className='bg-shape'     
          style={{
            background:
              "rgba(0, 0, 0, 0) url('./images/background/bg-shape-1.jpg') repeat scroll center bottom / cover",
          }}
        >
        </div>
        <div>
          <h4>AlgoChess Market</h4>
          <h1>Create, sell or collect digital items.</h1>
          <p>
            Unit of data stored on a digital ledger, called a blockchain, that
            certifies a digital asset to be unique and therefore not
            interchangeable
          </p>
          <button className='btn-main'>Explore</button>
        </div>
        <div className='hero-nft-container'>
          <img src='/images/misc/home asset.png' alt='nft' />
        </div>
      </div>
    </section>
  )
}
export default SectionHero
