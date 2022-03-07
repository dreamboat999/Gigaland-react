import MCard from 'components/MCard/MCard'

import {ReactComponent as FKing} from 'icons/icon-king.svg'
import {ReactComponent as FQueen} from 'icons/icon-queen.svg'
import {ReactComponent as FKnight} from 'icons/icon-knight.svg'
import {ReactComponent as FBishop} from 'icons/icon-bishop.svg'
import {ReactComponent as FRook} from 'icons/icon-rook.svg'
import {ReactComponent as FPawn} from 'icons/icon-pawn.svg'

import './SectionCategory.scss'

const SectionCategory = () => {
  return (
    <section id='section-category'>
      <div className='container'>
        <h2>Browse by category</h2>
        <span className='small-border'></span>
        <div className='card-list'>
          <MCard linkUrl='/explore' Icon={<FKing />} text='King' />
          <MCard linkUrl='/explore' Icon={<FQueen />} text='Queen' />
          <MCard linkUrl='/explore' Icon={<FKnight />} text='Knight' />
          <MCard linkUrl='/explore' Icon={<FBishop />} text='Bishop' />
          <MCard
            linkUrl='/explore'
            Icon={<FRook />}
            text='Rook'
          />
          <MCard linkUrl='/explore' Icon={<FPawn />} text='Pawn' />
        </div>
      </div>
    </section>
  )
}

export default SectionCategory
