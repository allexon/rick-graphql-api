export const fnDataFetch = async (query : any, activePage : any) => {    
    const _options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: query(),
        variables: { activePage: activePage() },
      })
    }  
    const _result = await fetch('https://rickandmortyapi.com/graphql', _options)  
    return _result
  }

