import style from './MainButton.module.scss'
const MainButton = ({children, ...props}) => {
  return (
    <button className={style.mainBtn} {...props}>{children}</button>
  )
}

export default MainButton