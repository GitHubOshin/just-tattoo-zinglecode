import './TattooPost.css'

function TattooPost(props) {
  const { tattoo, onBgClick } = props
  return (
    <div className="tattoo-post">
      <div className="tattoo-post-bg" onClick={onBgClick} />
      <div className="tattoo-post-content">
        <img alt="" src={tattoo.img} />
        <h4>{tattoo.name}</h4>
      </div>
    </div>
  )
}

export default TattooPost

