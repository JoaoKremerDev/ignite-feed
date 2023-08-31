import { Avatar } from './Avatar';
import Comment from './Comment';
import styles from './Post.module.css';

import { useState } from 'react';

interface PostsProps {
    publishedAt: Date;
    author: any;
    content: any;
}

function Post({ publishedAt, author, content }: PostsProps) {

    const [comments, setComments] = useState([
        'Post muito bacana, hein?!'
    ]);

    const [newComment, setNewComment] = useState('');

    const handleCreateNewComment = (event) => {
        event?.preventDefault();
        setComments([...comments, newComment])
        setNewComment('')
    }

    const handleNewCommentChange = (e) => {
        setNewComment(e.target.value)
    }

    const publishedDateFormated = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
    }).format(publishedAt)

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormated} dateTime={"2022-05-11 08:13:30"}>{publishedDateFormated}</time>
            </header>

            <div className={styles.content}>
                {content.map( (item, index)  => {
                    if (item.type == 'paragraph') {
                        return <p key={index}>{item.content}</p>
                    } else if (item.type == 'link') {
                        return <p key={index}><a href="#">{item.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea value={newComment} placeholder='Deixe um comentário' name='comment' onChange={handleNewCommentChange}></textarea>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map((comment, index) => {
                    return <Comment key={index} content={comment} />
                })}
            </div>
        </article>
    );
}

export default Post;