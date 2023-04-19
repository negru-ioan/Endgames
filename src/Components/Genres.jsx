import React from 'react'
import { GiPistolGun } from 'react-icons/gi'
import Genre from './Genre'
import { RiAliensLine, RiSwordFill, RiTeamFill, RiBoxingLine,RiVipCrownFill } from 'react-icons/ri'
import { FaVolleyballBall, FaFlagCheckered, FaDragon } from  'react-icons/fa'
import { TbCards } from  'react-icons/tb'
import { IoExtensionPuzzle } from  'react-icons/io5'

function Genres({changeCategory}) {
  return (
    <div className='flex md:block overflow-y-scroll -mx-2 sm:mx-2 pr-0 sm:pr-6'>
      <h1 className='text-3xl hidden md:block ml-5 my-5'>Genres</h1>
        <Genre name="Shooter"   icon={ <GiPistolGun size={35}/> }        changeCategory={changeCategory} /> 
        <Genre name="Sci-fi"    icon={ <RiAliensLine size={35}/> }       changeCategory={changeCategory} />
        <Genre name="MMORPG"    icon={ <RiSwordFill size={35}/> }        changeCategory={changeCategory} />
        <Genre name="Battle Royale" icon={ <RiVipCrownFill size={35}/> } changeCategory={changeCategory} />
        <Genre name="MOBA"      icon={ <RiTeamFill size={35}/>}          changeCategory={changeCategory} />
        <Genre name="Sports"    icon={ <FaVolleyballBall size={35}/> }   changeCategory={changeCategory} />
        <Genre name="Racing"    icon={ <FaFlagCheckered size={35}/> }    changeCategory={changeCategory}  />
        <Genre name="Fighting"  icon={ <RiBoxingLine size={35}/> }       changeCategory={changeCategory}  />
        <Genre name="Fantasy"   icon={ <FaDragon size={35}/> }           changeCategory={changeCategory}  />
        <Genre name="Card Games" specialCase='card' icon={ <TbCards size={35}/> } changeCategory={changeCategory}  />
        <Genre name="Strategy"  icon={ <IoExtensionPuzzle size={35}/>}   changeCategory={changeCategory}  />
    </div>
  )
}




export default Genres