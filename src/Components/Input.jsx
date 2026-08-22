import PropTypes from 'prop-types'

const Input = ({type, className = '', placeholder, name, id, value, onChange, required = true}) => {
    let input_class = `  ${className}`
  return (
   <>
   <div>
    <input id={id || name} type={type} name={name} className={`${input_class} outline-none`} placeholder={placeholder} value={value} onChange={onChange} required={required}/>
   </div>
   </>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
}

export default Input