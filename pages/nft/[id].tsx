import React from 'react'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

function NFTDropPage() {

  //Auth
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();
  // ---

  console.log("address-->",address);
  return (
    <div className='flex flex-col h-screen lg:grid lg:grid-cols-10'>
      {/*left*/}
      <div className="lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500">
        <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
            <div className='bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl'>
                <img className='w-44 rounded-xl object-cover lg:h-96 lg:w-72' src="https://links.papareact.com/8sg" alt="Oops" />
            </div>
            <div className='text-center p-5 space-y-2'>
                <h2 className='text-4xl font-bold text-white'>You Maverick !!!</h2>
                <p className='text-xl text-white'>Welcome to a Biggest Mavericks NFT collectionnns</p>
            </div>
        </div>
      </div>

      {/*Right*/}

      <div className='lg:col-span-6 p-12'>
        {/* {top} */}
        <header className='flex items-center'>
            <h1 className='flex-1 text-base lg:text-xl'>
                The{' '} <span className='font-extrabold underline decoration-pink-600/50 '>MAVERICKS</span>{' '} NFT Market Place
            </h1>
            <button onClick={ () => ( address ? disconnect() : connectWithMetamask() )} className='cursor-pointer bg-rose-400 text-white text-xs font-bold border-2 px-4 py-2 rounded-full hover:bg-rose-500 lg:px-5 lg:py-3 lg:text-base'>
                { address ? 'Sign Out' : 'Sign In' }
            </button>
        </header>

        <hr className='my-2 border' />
        { address && <p className='text-rose-400 text-center text-sm'>You're logged In {address.substring(0,5)}...{address.substring(address.length - 5)}</p>}

        {/* {middle} */}
        <div className='mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0'>
            <img className='w-80 object-contain lg:h-100 pb-10' src="https://links.papareact.com/bdy" alt="ooops" />
            <h1 className='text-3xl font-bold lg:text-4xl lg:font-extrabold'>The Mavericks Club | NFT Collec</h1>
            <p className='text-xl pt-2 text-green-500'>13 / 21 NFT's claimed</p>
        </div>

        {/* {low} */}
        <button className='mt-10 lg:mt-20 h-10 lg:h-12 border text-white w-full font-bold bg-red-600 rounded-full cursor-pointer'>Mint NFT (0.01 ETH)</button>
      </div>
    </div>
  )
}

export default NFTDropPage
