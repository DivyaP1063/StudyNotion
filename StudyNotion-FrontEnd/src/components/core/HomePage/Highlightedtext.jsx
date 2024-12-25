import React from 'react'
function Highlightedtext ({text}){
  return (
    <span className='font-bold bg-gradient-to-br from-pink-300 to-caribbeangreen-300 to-indigo-400 bg-clip-text text-transparent'>
        {" "}{text}
    </span>
  )
}

export default Highlightedtext;
