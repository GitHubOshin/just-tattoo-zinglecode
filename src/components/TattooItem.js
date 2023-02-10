import './TattooItem.css'

function TattooItem(props) {
  const { tattoo, onShowTattoo } = props
  return (
    <div className="tattoo-item">
      <img
        alt={tattoo.name}
        src={tattoo.img}
        onClick={() => onShowTattoo(tattoo)}
      />
      <h4>{tattoo.name}</h4>
    </div>
  )
}

export default TattooItem
