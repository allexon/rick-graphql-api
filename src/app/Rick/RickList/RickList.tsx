import { createEffect, createSignal } from 'solid-js'
import { Container, Card, Buttons, Box, ContainerImg, Img, Label, Title, Button, ButtonShare } from './stylesRickList'
import { dataList, info, setActivePage } from '../../../store/storeRickList'
import { firstName, setFirstName, fnData } from '../../../store/storeRickDetails'
import { IconArrowRight, IconArrowLeft, IconShare } from '../../../assets/svg-in-js/index'
import RickDetails  from '../RickDetails/RickDetails'

export default function RickList() {
  const [selectedItem, setSelectedItem] = createSignal(null)

  const fnNextPage = () => {    
    //@ts-ignore
    setActivePage(info().next)    
  }

  const fnPriorPage = () => {
    //@ts-ignore    
    setActivePage(info().prev)
  }

  const fnFirstName = (firstName : string) => {        
    let _name = firstName.split(' ')[0]    
    setFirstName(_name)
  }

   createEffect(() => {
    fnData()
  }, [firstName])

  const addDetailsRick = (item : any) => {
    if (selectedItem() === item) {
      setSelectedItem(null)
    } else {
      setSelectedItem(item)
    }
  }
  
  return (    
    <Container>      
        {
            dataList().map((res: any) => (
                <Card>
                    <Box style={{"background-color":'black'}}>
                      <ContainerImg>
                        <Img src={res.image} alt="Avatar" />
                      </ContainerImg>
                    </Box>
                    <Box>
                      <Title>{res.name}</Title>
                      <Label class='circle'>{res.status}</Label>
                      <Label>{res.species}</Label>
                    </Box>
                    <ButtonShare onClick={() => {fnFirstName(res.name); addDetailsRick(res)}}>
                      <IconShare />
                    </ButtonShare>
                    {
                      selectedItem() === res ? <RickDetails /> : null
                    }
                    {/* <Button onClick={() => handleClick(res)}>
                      {selectedItem() === res ? 'Remove' : 'Add'}
                    </Button> */}
                </Card>
            ))
        }        
      <Buttons>
          {/* @ts-ignore */}
        <Button onClick={() => fnPriorPage()} disabled={info().prev? false : true}>
            {/* @ts-ignore */}
            <IconArrowLeft />
        </Button>
          {/* @ts-ignore */}
        <Button onClick={() => fnNextPage()}  disabled={info().next? false : true}>
          {/* @ts-ignore */}
          <IconArrowRight />
        </Button>

      </Buttons>
    </Container>    
  )
}