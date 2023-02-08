function TattooItem(props) {
  const { img, name } = props
  return (
    <div className="tattoo-item">
      <img alt={name} src={img} />
      <h4>{name}</h4>
    </div>
  )
}

export default TattooItem
