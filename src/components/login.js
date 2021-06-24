import react from "react"
import styles from "./login.module.css"


export default function login() { 


    return( <div className={styles.loginBox}>
                <h1>please login here</h1>
                    <input type='email' placeholder='Fuck'/>
                    <input type='password' placeholder="**************" />
            </div>)
}