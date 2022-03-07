import MainLayout from 'layout/MainLayout'
import SectionCategory from './sections/SectionCategory'
import SectionCollection from './sections/SectionCollection'
import SectionCommunity from './sections/SectionCommunity'
import SectionHero from './sections/SectionHero'
import SectionIntro from './sections/SectionIntro'
import SectionNews from './sections/SectionNews'
import SectionNFTs from './sections/SectionNFTs'

const Homepage = () => {
  return (
    <MainLayout>
      <SectionHero />
      <SectionCategory />
      <SectionCollection />
      <SectionNFTs />
      <SectionIntro />
      <SectionCommunity />
      <SectionNews />
    </MainLayout>
  )
}

export default Homepage