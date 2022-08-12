import style from './SideBarLinks.module.scss'
const SideBarLinks = () => {

  const links = [
    {name:'Calculator', id:1},
  ]

  return (
    <>
      <h4 className={style.title}>Components</h4>
      <ul className={style.sideBarLinks}>
        {links.map((link)=><li key={link.id}>{link.id}. {link.name}</li>)}
      </ul>
    </>
  )
}

export default SideBarLinks