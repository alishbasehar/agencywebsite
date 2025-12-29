
import {company_logos} from '../images/assets'

const Trust = () => {
  return (
    <div className=' container mx-auto max-w-7xl flex flex-col items-center px-4 sm:px-12 lg-px-24 xl-px-40 gap-10 text-gray-700 dark:text-white/80'>
        <h3 className='font-semibold'> Trusted by companies</h3>
     <div className="flex flex-wrap justify-center gap-y-8 m-4 w-full">
  {company_logos.map((logo, index) => (
    <div
      key={index}
      className="
        w-[50%]
        sm:w-[33.33%]
        md:w-[23%]
        lg:w-[16.66%]
        flex
        justify-center
          h-12
     
      "
    >
      <img
        src={logo}
        className="max-h-5 sm:max-h-6 dark:drop-shadow-2xl"
        alt="company logo"
      />
    </div>
  ))}
</div>

    </div>
  )
}

export default Trust