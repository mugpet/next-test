import { useState } from "react"
import { useQuery } from "react-query"

/*
headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/tables/<table ID>'
res = requests.get(uri, headers=headers).json()
*/

const useCoda = () => {
  const docId = "brFgLa5Oku"
  const token = "aadfc738-6992-4c05-a236-19b705da3cc2"
  const pageId = "canvas-rqbxVNMw6i"
  // const tableIdOrName = "grid-5L6bQvHD-F"
  const tableIdOrName = "grid-Gnja2_iH8B"
  const headers = {
    Authorization: `Bearer ${token}`,
    ContentType: "application/x-www-form-urlencoded",
  }
  //   const url = `/api/`
  //   const url = `/apis/v1/docs/${docId}/pages/${pageId}`
  //   const url = `https://coda.io/apis/v1/docs/${docId}/pages/${pageId}`
  //   const url = `https://coda.io/apis/v1/apis/v1/docs/${docId}/tables/${tableIdOrName}`
  
  const url = `/apis/v1/docs/${docId}/tables/${tableIdOrName}/rows?valueFormat=rich&useColumnNames=true`

  //   const getTable = async () => {
  //     let res = await

  //     res = await res.json()

  //     setData(res)
  //   }

  const { isLoading, error, data, isFetching } = useQuery("coda", () =>
    fetch(url, { headers }).then((res) => res.json())
  )

  return { data, isLoading }
}

export default useCoda
