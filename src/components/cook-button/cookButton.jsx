import {NavLink} from 'react-router-dom'
import classes from '../cook-button/cook-Button.module.css'
export function CookButton() {
  return (
      <button type='submit' className={classes.btn}>Cook</button> 
  ) 
}
