import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtoFavAction } from '../store/actions/favorites.action'

function Products() {

    const [products, setproducts] = useState([])

    useEffect(() => {
        fetch('https://northwind.vercel.app/api/products')
            .then(response => response.json())
            .then(data => {
                setproducts(data)
            })
    }, [])

    const dispatch = useDispatch()


    const add = (product) => {
        dispatch(addtoFavAction(product))
    }



    return (<>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>Add to fav</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.unitPrice}</td>
                        <td>
                            <button
                                onClick={() => add(product)}>
                                Add to fav
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
    )
}

export default Products