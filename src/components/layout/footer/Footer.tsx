import { getCurrentYear } from '@/util/helpers'

const Footer = () => {
	return (
		<footer className='h-[60px] bg-[#262b3c] py-0 px-[15px]'>
			<div className='flex items-center justify-center h-full'>
				<p className='text-[18px] text-[#fff]'>
					{getCurrentYear() + ' © Orest Dykovych'}
				</p>
			</div>
		</footer>
	)
}

export default Footer
