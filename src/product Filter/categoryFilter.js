
const ProductFilter = ({ category, setCategory}) => {

    return (
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="clothing">Clothing</option>
          <option value="electronics">Electronics</option>
        </select>
    )
}

export default ProductFilter;