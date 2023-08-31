import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Commment.module.css'
import { Avatar } from './Avatar'

function Comment({content}) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="http://github.com/robinndev.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Robson Silva</strong>
                            <time title="29 de agosto às 20:11" dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'><Trash size={24} /></button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default Comment