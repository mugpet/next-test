import useCoda from "./useCoda"
import { useEffect } from "react"

const Comp2 = (props) => {
  const { data, isLoading } = useCoda()

  useEffect(() => {

      console.log("UseEffect -> Comp2:", data)

  }, [data])

  console.log("Comp2:", data)

  return <div>Comp 2</div>
}

export default Comp2
