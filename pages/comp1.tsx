// import { useQuery } from "react-query"
// import useAirtable from "./useAirtable"
import Post from "../components/Post"
import useCoda from "../components/useCoda"
// import useClickup from "../components/useClickup"

// import useCoda from './useCoda'

const Comp1 = (props) => {
  const { data, isLoading } = useCoda()
  // const { data, isLoading } = useClickup()

  console.log("Data is loading:", isLoading)

  console.log("Comp1: ", data)

  const Posts = data && data.items 
  ? data.items.map(({values:p}) => {

    // remove ``` before and after rich text (added by Coda)
    const Titel = p.Titel && p.Titel.replace(/(^```|```$)/gm,"")
    const Indhold = p.Indhold && p.Indhold.replace(/^```|```$/gm,"")

    console.log("p:", p)
    return <Post key={p.Titel} Title={Titel} Content={Indhold} images={p['Overskfts billede']} />
  })
  : null


  return <div className="mt-24 flex flex-col p-4 mr-auto ml-auto max-w-3xl">
    <h1 className="text-gray-400">Nyheder</h1>
    {Posts}
  </div>
}

export default Comp1
