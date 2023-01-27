import Resume from '../../assets/Software Engineer - Brad Vidal.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} download className='btn'>Download Resume</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}
export default CTA