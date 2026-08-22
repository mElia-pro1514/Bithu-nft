
const Btn = ({className, icon, text, onclick, type}) => {
  return (
   <>
   <button className={className} onClick={onclick} type={type}>
    <span className=' py-[12px]  sm:pr-2'>{icon}</span>
    <span className=' hidden sm:block'>{text}</span>

   </button>
   
   </>
  )
}

export default Btn