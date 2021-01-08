import ReactMarkdown from 'react-markdown'
// import styles from "../styles/Post.module.css"


const Post = (props) => {

    const imageView = props.images.map(i => {
        if (i['@type'] == "ImageObject") {
            return <img key={i.url} src={i.url} />
        }
    })

    return <div className="mt-12 font-serif">
        <div className="text-gray-400 text-2xl">{props.Title}</div>
        {imageView}
        {/* <div className={styles.main} ><ReactMarkdown>{props.Content}</ReactMarkdown></div> */}
        <div className="text-lg mt-2" ><ReactMarkdown>{props.Content}</ReactMarkdown></div>
    </div>
}

export default Post