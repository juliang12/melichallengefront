import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

const useProductProvider = () => {
    const context = useContext(ProductContext)
    console.log(context?.searchResults)
    if (!context) {
        throw new Error('useProductProvider must be used within a ProductProvider');
    }

  return {context}
}

export default useProductProvider