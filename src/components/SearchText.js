import './SearchText.css'

function SearchText(props) {
  const { value, onChange } = props
  return (
    <div className="app-search">
      <input
        className="app-search-input"
        type="text"
        placeholder="Search tattoo"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default SearchText
