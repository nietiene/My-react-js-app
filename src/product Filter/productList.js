const products = [
    {id: 1, name: "T shirt", category: "clothing"},
    {id: 2, name: "Tv", category: "electrinics"},
    {id: 3, name: "Laptop", category: "electronics"},
    {id: 4, name: "Jeans", category: "clothing"},
]

const ProductList = ({ category }) => {
       const filtred = category === "all"
       ? products : products.filter((p) => p.category === category);

       return (
         <ul>
            {filtred.map((product) => {
               return <li key={product.id}>{product.name}</li>
            })}
         </ul>
       )
}

export default ProductList;