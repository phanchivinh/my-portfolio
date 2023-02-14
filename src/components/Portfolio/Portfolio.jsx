import projects from '../../assets/projects'



import './Portfolio.css'

const Portfolio = () => {
  return (
    <section className='portfolio section'>
        <div className='page-header'>
          <h1><span>My</span> Portfolio</h1>
          <span>works</span>
        </div>
      <div className='portfolio__wrapper'>
        {projects.map((item, index) => (
          <div className='portfolio__card' key={`portfolio-${index}`}>
            <div className='portfolio__card-img'>
              <img src={item.thumnail} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio