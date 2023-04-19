import { useEffect, useState } from 'react'
import { fetchGames } from '../utils/fetchGames'
import Card from '../Components/Card'
import { useContext } from 'react'
import { CartContext } from '../Contexts/CartContext'
import { useParams } from 'react-router-dom'
import { SearchContext } from '../Contexts/SearchContext'
import {default as jocuri} from '../utils/games'
import Genres from '../Components/Genres'


function Home({url}) {
  const initialGames = jocuri.slice(0, 17)
  const { cart } = useContext(CartContext)
  const [ games, setGames ] = useState(initialGames)
  const [ selectedCategory, setSelectedCategory ] = useState('')
  const { searchArray } = useContext(SearchContext)
  const { value } = useParams()

  useEffect(() => {
    if(url === '/search'){
      setGames(searchArray)
    } else if(url === '/cart'){
      setGames(cart)
    } else {  
      setGames(initialGames)
    }
  },[url, value])

  useEffect(() => {
    if(selectedCategory){
        fetchGames(`games?category=${selectedCategory}`)
        .then(data => setGames(data))
    }
  }, [selectedCategory])

  const changeCategory = (category) => {
     setSelectedCategory(category)
  }

  return (
    <div className='mt-10 sm:mt-16'>
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-80 pt-2"> 
          <Genres changeCategory={changeCategory} />
        </div>
        <div class="w-full pr-0 sm:pr-10">
          <div className='px-10 sm:px-0'>
            <div className='flex flex-col'>
              <h1 className='text-5xl font-bold pt-7 text-center sm:text-6xl sm:text-start'>Discover the best {selectedCategory || 'free'} games!</h1>
              <p className='font-thin text-base py-2 text-gray-300 text-center sm:text-start mb-4'>
                {games.length} free-to-play games found!
              </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              { games.map(game => (<Card game={game} key={game.id}/>)) }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home