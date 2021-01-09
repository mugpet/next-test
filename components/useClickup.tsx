import { useState } from "react"
import { useQuery } from "react-query"

/*
headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/tables/<table ID>'
res = requests.get(uri, headers=headers).json()
*/

const useClickup
 = () => {
  // const docId = "brFgLa5Oku"
  const teamId = "2535330"
  const taskId = "c91je2"
  const token = "pk_4613077_ZR07CRI5HSKFK8A1XMCAOK4CRQ6PA141"
  const clientId = "IO9MB2A1GIQSF4IFGU5ZRFNIWU70SSDX"
  const clientSecret = "UV5MGMV1OHJAV7XO1BEMTKC0ARR2TRCA9GDZHT5I3UUCVOXJ5NXVSH24RAXS02VL"
  const pageId = "canvas-rqbxVNMw6i"
  // const tableIdOrName = "grid-5L6bQvHD-F"
  const tableIdOrName = "grid-cNXF4rxLjX"  // Nyheder
  const headers = {
    Authorization: `Bearer ${token}`,
    ContentType: "application/json",
  }
  //   const url = `/api/`
  //   const url = `/apis/v1/docs/${docId}/pages/${pageId}`
  //   const url = `https://coda.io/apis/v1/docs/${docId}/pages/${pageId}`
  //   const url = `https://coda.io/apis/v1/apis/v1/docs/${docId}/tables/${tableIdOrName}`
  
  const url = `/api/v2/task/${taskId}`

  // ?custom_task_ids=&team_id=${teamId}

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

export default useClickup

