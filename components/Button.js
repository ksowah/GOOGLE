
const Button = ({className}) => {
  return (
    <div>
        <button className={`px-5 py-2 bg-sky-600 rounded-lg cursor-pointer text-white font-bold hover:bg-sky-500 ${className}`}>Sign in</button>
    </div>
  )
}

export default Button