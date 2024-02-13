import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeFavAction, resetFavAction } from '../store/actions/favorites.action'

function Favorites() {

  const favorites = useSelector(state => state.favorites)

  const dispatch = useDispatch()

  const empty = () => {
    dispatch(resetFavAction())
  }

  const removeFav = (favorite) => {

    let isConfirm = window.confirm('Are you sure?')

    if (!isConfirm) return

    dispatch(removeFavAction(favorite))
  }

  return (<>
    <h1>Favorites Length: {favorites.length}</h1>
    <button onClick={empty}>Empty</button>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Unit Price</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {favorites.map(favorite => (
          <tr key={favorite.id}>
            <td>{favorite.id}</td>
            <td>{favorite.name}</td>
            <td>{favorite.unitPrice}</td>
            <td>
              <button
                onClick={() => removeFav(favorite)}>
                Remove
              </button>
            </td>

          </tr>
        ))}
      </tbody>
    </table>

  </>
  )
}

export default Favorites