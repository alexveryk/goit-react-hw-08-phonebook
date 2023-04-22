import {
  Center,
  Heading,
  Card,
  CardHeader,
  CardBody,
  Image,
} from '@chakra-ui/react';

export const Home = () => {
  return (
    <div>
      <Center color="black">
        <Card align="center">
          <CardHeader>
            <Heading size="md">
              Phonebook is an application for saving your contacts
            </Heading>
          </CardHeader>
          <CardBody>
            <Image
              src="gibbresh.png"
              fallbackSrc="https://images.pexels.com/photos/6915114/pexels-photo-6915114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </CardBody>
          {/* <CardFooter>
            <Button colorScheme="blue">View here</Button>
          </CardFooter> */}
        </Card>
      </Center>
    </div>
  );
};
