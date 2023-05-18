export const queryRickDetails = (firstName: string) => `  
  query {
    characters(filter: { name: "${firstName}" }) {
      results {
        id
        name
        status
        image
      }
    }
  }
`