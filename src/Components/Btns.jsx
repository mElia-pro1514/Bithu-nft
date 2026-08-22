
const Btn = ({className, icon, text, onclick, icon_class}) => {
  const handleClick = typeof onclick === 'function' ? onclick : undefined;
  return (
   <>
   <button className={className} onClick={handleClick} >
    <span className={` py-[12px]  pr-2 ${icon_class}`}>{icon}</span>
    <span className='block font-normal'>{text}</span>
   </button>
   </>
  )
}

export default Btn