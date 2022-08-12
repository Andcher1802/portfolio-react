import styles from './MySelect.module.scss'
const MySelect = ({options, value, defaultValue, onChange}) => {
  return (
    <select
    className={styles.mySelect}
    value={value}
    onChange={event => onChange(event.target.value)}
    >
      <option disabled value=''>{defaultValue}</option>
      {options.map((option)=> <option value={option.value} key={option.value}>{option.name}</option>)}
    </select>
  )
}

export default MySelect