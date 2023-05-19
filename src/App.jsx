import './App.css'
import Button from './components/Button'
import TrendSongs from './components/TrendSongs'

function App() {

  return (
    <div className='p-4 bg-[#eeeeee] h-screen'>
      <div className='bg-[#fff] flex justify-end border-2 py-2 px-2 gap-x-2 rounded-lg'>
        <Button content="Contact Us"/>
        <Button content="Sign Up"/>
      </div>
      <div className='w-[100%] mx-auto text-center py-4'>
        <h1 className='text-[2rem] font-bold'>Make your party fun!</h1>
        <p className='text-[1.2rem] font-medium'>Create your own custom playlist</p>
      </div>
      <div className='bg-[#666666]'>
        <div className='flex flex-col gap-4 py-4 px-4'>
        <TrendSongs content="Unavailable by Davido"/>
        <TrendSongs content="Unavailable by Davido"/>
        <TrendSongs content="Unavailable by Davido"/>
        <TrendSongs content="Unavailable by Davido"/>
        <TrendSongs content="Unavailable by Davido"/>
      </div>
      </div>
      <Button content="Button"/>
    </div>
  )
}

export default App
