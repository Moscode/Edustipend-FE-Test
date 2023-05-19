import './App.css'
import Button from './components/Button'
import TrendSongs from './components/TrendSongs'

function App() {

  return (
    <div className='p-4 h-screen'>
      {/*First top section*/}
      <div className='bg-[#fff] flex justify-end border-2 py-2 px-2 gap-x-2 rounded-lg'>
        <Button content="Contact Us" style="rounded px-[1.2rem] py-[0.3rem] font-medium"/>
        <Button content="Sign Up" style="bg-[#ff9900] rounded px-[1.2rem] py-[0.3rem] font-medium"/>
      </div>
      {/* Hero Section */}
      <div className='md:flex md:py-6 md:h-screen md:items-center'>
      <div className='w-[100%] mx-auto text-center py-4'>
        <h1 className='text-[2rem] font-bold md:text-[4rem] md:font-extrabold'>Make your party fun!</h1>
        <p className='text-[1.2rem] font-medium text-[1.7rem] font-bold'>Create your own custom playlist</p>
        <Button content="Create playlist" style="bg-[#ff9900] rounded px-[1.2rem] py-[0.3rem] font-medium"/>
      </div>
      {/*Trend Songs Section*/}
      <div className='bg-[#666666] md:w-[25rem] h-[100%]'>
        <div className='flex flex-col items- py-4 items-center px-8 h-[100%] gap-y-6'>
        <h2 className='font-bold text-[1.5rem] md:font-bold md:text-[2rem]'>Trending Songs</h2>
        <TrendSongs content="Unavailable by Davido"/>
        <TrendSongs content="Unavailable by Davido"/>
        <TrendSongs content="Unavailable by Davido"/>
        <TrendSongs content="Unavailable by Davido"/>
        <TrendSongs content="Unavailable by Davido"/>
        <Button content="View more" style="bg-[#ff9900] rounded px-[1.2rem] py-[0.3rem] font-medium"/>
      </div>
      </div>
      </div>
    </div>
  )
}

export default App
