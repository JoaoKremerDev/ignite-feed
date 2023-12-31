import { Avatar } from './Avatar';
import styles from './SideBar.module.css'
import { PencilLine } from '@phosphor-icons/react';

function SideBar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.img}
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" alt=""
            />
            <div className={styles.profile}>
                <Avatar src="https://github.com/JoaoKremerDev.png" />
                <strong>João Vitor Kremer</strong>
                <span>Web Developer</span>

                <footer>
                    <a href="#">
                        <PencilLine size={20} />
                        Editar seu perfil</a>
                </footer>
            </div>
        </aside>
    )
}

export default SideBar