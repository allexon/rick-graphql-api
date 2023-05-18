export const queryRickList = `
  query Characters($activePage: Int!) {
    characters(page: $activePage) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        image
      }
    }
  }
`