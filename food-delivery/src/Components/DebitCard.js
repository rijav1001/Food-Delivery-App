import React from 'react'

function DebitCard() {
  return (
    <div className='cardGroup'>
        <img src='/images/visa-logo.png' alt='' className='cardLogo' />
        <img src='/images/chip-logo.png' alt='' className='cardChip' />

        <div className='cardNumber'>1234 5678 9108 1527</div>  
        <div className='cardName'>Rijav Umrania</div>  
        <div className='cardFrom'>10/22</div>
        <div className='cardTo'>10/27</div>
        <div className='cardRing'></div>
    </div>
  )
}

export default DebitCard