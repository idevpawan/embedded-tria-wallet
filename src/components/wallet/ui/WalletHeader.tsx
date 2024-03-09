
import { getImage } from '../../../utils'
import Shimmer from '../../GlobalComponents/Shimmer'

function WalletHeader({stopShimmer}: {stopShimmer: boolean}) {
  return (
    <div className='flex items-center justify-between'>
        <div className='flex cursor-pointer p-[6px] rounded-full hover:bg-[#FAFAFA14] transition-all ease-in-out items-center gap-2.5'>
            <img className='w-7 h-7' src={getImage("avatar.svg")} alt="" />
            {stopShimmer ? <p className='text-[#FAFAFACC] font-semibold'>thekaypo@tria</p> : <Shimmer type='username' />}
            <img className='w-[15.81px] mt-0.5 h-[15.81px]' src={getImage("downArrow.svg")} alt="" />
        </div>
        <div className='flex items-center gap-2.5'>
            <img className=' cursor-pointer' src={getImage("copy.svg")} alt="" />
            <img className=' cursor-pointer' src={getImage("polygon.svg")} alt="" />
        </div>
    </div>
  )
}

export default WalletHeader