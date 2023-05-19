import {BiPlus} from 'react-icons/bi'

const TrendSongs = ({content}) => {
  return (
    <div className="bg-[#fff] flex border-2 rounded px-4 py-2 items-center">
        <p>{content}</p>
        <p className='font-black text-[1.2rem]'><BiPlus /></p>
    </div>
  )
}

export default TrendSongs