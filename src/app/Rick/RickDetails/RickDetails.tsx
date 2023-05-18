import { createEffect } from 'solid-js'
import { Card, Box, ContainerImg, Img, Label, Title  } from './stylesRickDetails'
import { dataDetails } from '../../../store/storeRickDetails'

export default function RickDetails() {   
  return (    
    <>
        {
            dataDetails().map((res: any) => (
                <Card>
                    <Box style={{"background-color":'black'}}>
                      <ContainerImg>
                        <Img src={res.image} alt="Avatar" />
                      </ContainerImg>
                    </Box>
                    <Box>
                      <Title>{res.name}</Title>                      
                    </Box>
                </Card>
            ))
        }
    </>    
  )
}