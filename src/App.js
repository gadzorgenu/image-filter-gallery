import React,{useState, useEffect} from 'react'
import {Box, Button , Image ,Grid, Flex} from '@chakra-ui/core'

const images =[
  {id: '1',imgName: 'image1.jpg', tag: 'free'},
  {id: '2',imgName: 'image2.jpg', tag: 'pro'},
  {id: '3',imgName: 'image3.jpg', tag: 'free'},
  {id: '4',imgName: 'image4.jpg', tag: 'new'},
  {id: '5',imgName: 'image5.jpg', tag: 'free'},
  {id: '6',imgName: 'image6.jpg', tag: 'pro'},
  {id: '7',imgName: 'image7.jpg', tag: 'new'},
  {id: '8',imgName: 'image8.jpg', tag: 'free'},
  {id: '9',imgName: 'image9.jpg', tag: 'new'},
  {id: '10',imgName: 'image10.jpg', tag: 'new'},
  {id: '11',imgName: 'image11.jpg', tag: 'free'},
  {id: '12',imgName: 'image12.jpg', tag: 'post'},
  {id: '13',imgName: 'image13.jpg', tag: 'post'},
  {id: '14',imgName: 'image14.jpg', tag: 'pro'},
  {id: '15',imgName: 'image15.jpg', tag: 'pro'},
  {id: '16',imgName: 'image16.jpg', tag: 'pro'}
]

function App() {
  const [tag, setTag] = useState('all')
const [fiteredImages, setFilteredImages] = useState([])


useEffect(() => {
tag === 'all'? setFilteredImages(images) : setFilteredImages(images.filter(image=> image.tag === tag))
}, [tag])

  return (
    <Box>
      <Box textAlign='center' py={3} bg='blue.600'>
        <TagButton name='all' handleSetTag={setTag}  tagActive={tag === 'all' ? true : false} />
        <TagButton name='new' handleSetTag={setTag}  tagActive={tag === 'new' ? true : false} />
        <TagButton name='free' handleSetTag={setTag} tagActive={tag === 'free' ? true : false} />
        <TagButton name='pro' handleSetTag={setTag}  tagActive={tag === 'pro' ? true : false} />
      </Box>

      <Flex margin='auto' w={{md: '80%'}}>
        <Grid align='center' m={10} templateColumns= 'repeat(4,1fr)' gap={6}>
        {fiteredImages.map(image=> (
          <Box key={images.id}  p={5} borderWidth='1px'rounded='md' >
            <Image src ={`/images/${image.imgName}`} alt={image.imgName} />
          </Box>
          ) )}
        </Grid>
      </Flex>
    </Box>
  )
}


const TagButton = ({name, handleSetTag, tagActive}) =>{
  return <Button  tagActive={`tag ${tagActive ? 'active' : null}`}  _focus={{
    borderBottom: '1px',
    fontWeight: 'bold'
  }}  variantColor='transparent'mr={5} m={5} onClick={()=> handleSetTag(name)} >
  {name.toUpperCase()}
  </Button >
}
export default App;
