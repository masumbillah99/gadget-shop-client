import ProductCard from '../Card/ProductCard'

const FeatureProducts = () => {
  return (
    <div className='flex items-center justify-between gap-4'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>
  )
}

export default FeatureProducts