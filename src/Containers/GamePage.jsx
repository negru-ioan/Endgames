import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Carousel from '../Components/Carousel'
import {fetchGames} from '../utils/fetchGames'
import Info from '../Components/Info'
import demoGame from '../utils/demoGame'

function GamePage() { 
  const {id} = useParams()
  const [game, setGame] = useState(demoGame)
  
  useEffect(() => {
    fetchGames(`game?id=${id}`)
    .then(data => {
      setGame(data)
      return data
    })
    .then(data => {
      setImages(data.screenshots.map(screenshot => {
        return screenshot.image;
      }).concat(data.thumbnail))
    })
  }, [id])

    const [images, setImages] = useState(
      game?.screenshots.map(screenshot => {
      return screenshot.image;
    }).concat(game?.thumbnail)
    )

  return (
    <div>
      <header className='my-7 sm:my-10'>
        <h1 className='text-center text-4xl sm:text-6xl font-black'>{game?.title}</h1>
      </header>
      <section className='px-4 sm:px-5 lg:px-6'>
        <div className='game_lg_block'>
          <Carousel  images={images} />
          <Info game={game} />
        </div>

        <div className='mt-10 bg-base-semilight p-9 block sm:flex pb-5 mb-5'>

          <div className='w-full max-h-[395px] sm:max-h-full overflow-y-auto scroll-m-2 mb-5 shadowwwww'> 
            <h2 className='text-xl sm:text-3xl font-black mb-4'>Description</h2>
            <p className='text-lg sm:text-xl pr-0 sm:pr-8'>
              {game?.description}
            </p>
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default GamePage
