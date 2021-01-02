// import { useQuery } from "react-query"
// import useAirtable from "./useAirtable"
import useCoda from "./useCoda"

// import useCoda from './useCoda'

const Comp1 = (props) => {
    const { data, isLoading } = useCoda()
    // const { data, isLoading } = useAirtable()

    //   console.log("Start")

//   const { isLoading, error, data, isFetching } = useQuery("codaData", () => {
//     console.log("useQuery Start")
//     const docId = "brFgLa5Oku"
//     const token = "aadfc738-6992-4c05-a236-19b705da3cc2"
//     const pageId = "canvas-rqbxVNMw6i"
//     const tableIdOrName = "grid-5L6bQvHD-F"
//     const headers = {
//       Authorization: `Bearer ${token}`,
//       ContentType: "application/x-www-form-urlencoded",
//     }
//     const url = `/apis/v1/docs/${docId}/tables/${tableIdOrName}/rows?valueFormat=rich&useColumnNames=true`

//     console.log("useQuery before fetch")
//     return fetch(url, { headers }).then((res) => res.json())
//   })

  console.log("Data is loading:", isLoading)

  console.log("Comp1: ", data)

  return <div>Comp 1</div>
}

export default Comp1
