import { useCounter } from '../../context/Provider'

const Welcome = () => {
  const {count,name} = useCounter();
  return (
   <>   
      
    <div class="hero-content">
      <div class="overlay">
        <h1>{name}</h1>
        <h1>{count}</h1>
      <h1>Transform Ideas Into <span>Digital Reality</span></h1>
      <p>Our team blends creative design and clean code to deliver impactful digital experiences.</p>
      <div class="buttons">
        <a href="" class="btn primary">View Our Work</a>
        <a href="" class="btn secondary">Contact Us</a>
      </div>
      </div>
    </div>
   </>
  )
}

export default Welcome