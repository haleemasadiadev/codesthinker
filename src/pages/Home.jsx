
import AboutCT from '../components/home/AboutCT'
import KeyFeatures from '../components/home/KeyFeatures'
import OurValues from '../components/home/OurValues'
import ServicesOffer from '../components/home/ServicesOffer'
import Standout from '../components/home/Standout'
import Welcome from '../components/home/Welcome'
import Progress from '../components/home/Progress'
import OurClient from '../components/home/OurClient'
const Home = () => {
  return (
    <>
      <Welcome />
      <Standout/>
      <AboutCT/>
      <ServicesOffer/>
      <KeyFeatures/>
      <OurValues/>
      <Progress/>
      <OurClient/>
    </>

  )
}

export default Home