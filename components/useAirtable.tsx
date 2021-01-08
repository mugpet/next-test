import { useState } from "react"
import { useQuery } from "react-query"

/*
headers = {'Authorization': 'Bearer <your API token>'}
uri = f'https://coda.io/apis/v1/docs/<doc ID>/tables/<table ID>'
res = requests.get(uri, headers=headers).json()
*/

const useCoda = () => {
  const docId = "brFgLa5Oku"
  const token = "key1OEkzWu2AeyI7k"
  const pageId = "canvas-rqbxVNMw6i"
  const tableIdOrName = "grid-5L6bQvHD-F"
  const headers = {
    Authorization: `Bearer ${token}`,
    ContentType: "application/x-www-form-urlencoded",
  }
  console.log("UseAirtable called...")
  //   const url = `/api/`
  //   const url = `/apis/v1/docs/${docId}/pages/${pageId}`
  //   const url = `https://coda.io/apis/v1/docs/${docId}/pages/${pageId}`
  //   const url = `https://coda.io/apis/v1/apis/v1/docs/${docId}/tables/${tableIdOrName}`
  const url = `/v0/appwcyRp9fGlk0zE6/Lejligheder/rec1mWycrKeA8HZv1`

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

// ContentType: "application/json",


Beskrivelse: 
"**Lejligheden ligger ca 10 km fra** **Alicante lufthavn**, 20 km til strandpromenaden i Alicante, ca 10 km til strandpromenaden i Santa Pola, 40 km til Torrewieja by.↵↵Billede↵https://img.storyblok.com/s81JK_XdAyzWwyEC7bHNF3gDvEA=/840x0/filters:filters:fill(FFFFFF):filters:format(jpeg)/f/51376/4867x1562/8d59898080/headless-cms-explained-storyblok.jpg↵Der er kun ca. 5 km til et stort indkøbscenter. Der er 7 min. gang til en fantastisk badestrand. Ved stranden er der en større vej (strandpromenade) hvor der er restauranter samt mindre supermarkeder.↵↵↵↵### **SUPER!**↵o convert that into a headless CMS we simply remove the feature four from the stack. The head of that CMS - the actual website - was simply chopped off. What still stays is an application that allows content management (Admin UI) and reading (API: combined Integrations). Et voilà: you now have got yourself a **headless CMS**.↵https://img.storyblok.com/s81JK_XdAyzWwyEC7bHNF3gDvEA=/840x0/filters:filters:fill(FFFFFF):filters:format(jpeg)/f/51376/4867x1562/8d59898080/headless-cms-explained-storyblok.jpg↵Other than by using a regular/monolithic CMS, one website can’t be built only with a headless CMS. A headless CMS separated the head from its stack and therefore lacks this point by design. Therefore, th↵I gå afstand er der et meget stort fredet naturreservat. Som man vil kunne se på billederne er der en pragtfuld stor have (park) med legeplads, swimmingpool, jacuzzi og brusemuligheder.↵Ligeledes hører der en nummereret P-plads til lejligheden i kælderen.↵↵😄↵[](http://localhost:8080/)↵"
