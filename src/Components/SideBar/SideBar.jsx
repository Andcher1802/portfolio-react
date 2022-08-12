import style from './SideBar.module.scss'
import SideBarLinks from '../SideBarLinks/SideBarLinks';
const SideBar = () => {
  return (
    <div className={style.sideBar}>
      <SideBarLinks/>
    </div>
  )
}

export default SideBar