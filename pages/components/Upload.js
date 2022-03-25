import {Flex, Heading, Button, Container,Text, Link} from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'
import Header from "./Header";

export default function Upload() {
    return (
<Container 
  border='4px solid #3D3ADA' 
  maxW={'842px'} h={'468px'} 
  align='center' p={'85px'} 
  borderRadius={'10px'} >

  <Flex 
    direction='column' 
    justify='center' 
    align='center' 
    margin-top= '90px'
    fontSize='md'>  
    <Container>
      <Heading>
        <Image src='../Head.svg' />
      </Heading>
    </Container>

       <Button 
        w='200px' 
        mt='24px' 
        bg='#3d3ada' 
        color='#fff' 
        p='30px'>
        Selecionar lista
       </Button>

    <Container pt={'24px'}>
      <Text 
      fontWeight={'500'}
      w='409px' 
      align='center'>
      Selecione um arquivo CSV para iniciar a verificação de uma lista com números e mensagens de SMS.
      </Text>
    </Container>
      
    <Text 
      fontWeight={'500'} 
      color={'#747474'} 
      pt={'24px'} 
      fontSize={'xs'}>
      Use nosso <Link href="#" color={'#3D3ADA'}><u>modelo</u></Link> de arquivo se você tem alguma dúvidas.
    </Text>
  </Flex>   
</Container>       
    )
  }