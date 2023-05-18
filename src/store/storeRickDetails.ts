import { createSignal, createEffect, createRoot } from 'solid-js'
import { queryRickDetails } from '../queryes/index'
import { fnDataFetch } from '../functions'

const [queryDetails, setQueryDetails] = createSignal(queryRickDetails(''))
const [dataDetails, setDataDetails] = createSignal([])
const [firstName, setFirstName] = createSignal('')
const [info, setInfo] = createSignal([])
const [activePage, setActivePage] = createSignal(1)

export { info, activePage, setActivePage, queryDetails, dataDetails, setFirstName, firstName, fnData }

const fnData = async () => {
  let _result = await fnDataFetch(queryDetails, activePage)
  _result = await _result.json()  
  try {    
    //@ts-ignore
    setDataDetails(_result.data.characters.results);
    //@ts-ignore
    setInfo(_result.data.characters.info)  
  } catch (error) {
    console.log('Não possivel conectar ao banco')
  }
}

createRoot(() => {
  createEffect(() => {
    setQueryDetails(queryRickDetails(firstName()))
    fnData()
  })
})

createRoot(() => {
  createEffect(async () => {
    setQueryDetails(queryRickDetails(firstName()))
    await fnData()
  })
})