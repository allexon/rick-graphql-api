import { createSignal, createEffect, createRoot } from 'solid-js'
import { queryRickList } from '../queryes/index'
import { fnDataFetch } from '../functions'

const [queryList, setQueryList] = createSignal(queryRickList)
const [dataList, setDataList] = createSignal([])
const [firstName, setFirstName] = createSignal('')
const [info, setInfo] = createSignal([])
const [activePage, setActivePage] = createSignal(1)

export { info, activePage, setActivePage, setQueryList, dataList, setFirstName, firstName }

const fnData = async () => {
  let _result = await fnDataFetch(queryList, activePage)
  _result = await _result.json()
  try {    
    //@ts-ignore
    setDataList(_result.data.characters.results);
    //@ts-ignore
    setInfo(_result.data.characters.info)
  } catch (error) {
    console.log('Não possivel conectar ao banco')
  }
}

createRoot(() => {  
  createEffect(async () => {
    await fnData()
  })
})