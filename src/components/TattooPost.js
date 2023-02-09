import './TattooPost.css'

function TattooPost(props) {
  const { tattoo } = props
  return (
    <div className="tattoo-post">
      <div className="tattoo-post-bg" />
      <div className="tattoo-post-content">
        <img alt="" src={tattoo.img} />
        <h4>{tattoo.name}</h4>
      </div>
    </div>
  )
}

export default TattooPost
