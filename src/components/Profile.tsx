import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'



export function Profile(){
    const { level } = useContext(ChallengesContext)
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/guoliv3ira.png" alt="Gustavo"/>
            <div>
                <strong>Gustavo Oliveira</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                    </p>
            </div>
        </div>
    )
}