import style from './HeaderButton.module.scss'
const HeaderButton = ({children, ...props}) => {
  return (
    <button className={style.myBtn} {...props}>{children}</button>
  )
}

export default HeaderButton