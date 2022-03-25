import {Flex, Heading, Button, Container,Text, Link} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'
 
export default function Loading() {
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
    
      <Heading>
        <Image 
        src='../Load.svg' />
      </Heading>

    <Spinner
      thickness='4px'
      speed='0.95s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
      mt={'33.85px'}
    />
   
    <Text 
    fontWeight={'500'} 
    color={'#747474'} 
    pt={'24px'} 
    fontSize={'xs'}>
    Você quer <Link href="#" color={'#3D3ADA'}><u>cancelar e voltar ao início?</u></Link> </Text>
  </Flex>   
</Container>      
    )
  }