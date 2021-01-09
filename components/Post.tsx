import ReactMarkdown from "react-markdown"
import gfm from "remark-gfm"
// import style from 'react'
// import styles from "../styles/Post.module.css"

const Post = (props) => {
  const imageView = props.images.map((i) => {
    if (i["@type"] == "ImageObject") {
      return (
        <div className="max-h-96 overflow-hidden rounded-md">
          <img className="w-full" key={i.url} src={i.url} />
        </div>
      )
    }
  })

  return (
    <div className="mt-20 font-serif">
      <div className="text-gray-400 text-2xl mb-6">{props.Title}</div>
      <div>
        {imageView}
        {/* <div className={styles.main} ><ReactMarkdown>{props.Content}</ReactMarkdown></div> */}
        <div className="Post text-base mt-2 blue  text-gray-600 leading-7">
          <ReactMarkdown plugins={[gfm]} children={props.Content} />
          <h3>RAW:</h3>
          {props.Content}
        </div>
      </div>

      <style>
        {`
        p {
          margin-top: 1.25rem;
        }
      `}
      </style>
    </div>
  )
}

export default Post
