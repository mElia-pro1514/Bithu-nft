import PropTypes from 'prop-types'

const Input = ({type, className = '', placeholder, name, value, onChange}) => {
    let input_class = `  ${className}`
  return (
   <>
   <div>
    <input type={type} name={name} className={`${input_class} outline-none`} placeholder={placeholder} value={value} onChange={onChange} required/>
   </div>
   </>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
}

export default Input