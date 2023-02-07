import { ReactNode } from 'react'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import Link from 'next/link'
/*
const Links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Create User',
    path: '/CreateUser',
  },
  {
    name: 'All Users',
    path: '/ListUsers',
  },
  {
    name: 'Search User',
    path: '/GetUser',
  },
  {
    name: 'Edit User',
    path: '/EditUser',
  },
  {
    name: 'Delete User',
    path: '/DeleteUser',
  },
  {
    name: 'Assign Role To User',
    path: '/AssignRole',
  },
  {
    name: 'View Tenants',
    path: '/ViewOrganizations',
  },
  {
    name: 'Client Keys',
    path: '/GetClientKeys',
  },
]
*/
const Links =[
  {
    name: 'Home',
    path: '/',
  },
]

const NavLink = ({ children, path }: { children: ReactNode; path: string }) => (
  <Box
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
  >
    <Link href={path}>{children}</Link>
  </Box>
)

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <Link href="/">
                Home
              </Link>
            </HStack>

            <HStack alignItems={'center'}>
              <Menu>
                <MenuButton
                  as={Button}
                  size={'sm'}
                  width={100}
                  mr={2}>
                    Users
                </MenuButton>

                <MenuList>
                  <MenuItem>
                    <Link href="/ListUsers">
                      All Users
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/CreateUser">
                      Create User
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/DeleteUser">
                      Delete User
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/EditUser">
                      Edit User
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/GetUser">
                      Search User
                    </Link>
                  </MenuItem>

                </MenuList>
              </Menu>
            </HStack>

            <HStack alignItems={'center'}>
              <Menu>
                <MenuButton
                  as={Button}
                  size={'sm'}
                  width={150}
                  mr={2}>
                    OpenSearch Index
                </MenuButton>

                <MenuList>
                  <MenuItem>
                    <Link href="/OS_ListIndices">
                      All Indices
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/OS_CreateIndex">
                      Create Index
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/OS_DeleteIndex">
                      Delete Index
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/OS_EditIndex">
                      Edit Index
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/OS_GetIndex">
                      Search Index
                    </Link>
                  </MenuItem>

                </MenuList>
              </Menu>
            </HStack>

            <HStack alignItems={'center'}>
              <Menu>
                <MenuButton
                  as={Button}
                  size={'sm'}
                  width={100}
                  mr={2}>
                    Credentials
                </MenuButton>

                <MenuList>
                  <MenuItem>
                    <Link href="/GetClientKeys">
                      Generate Credentials
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/ListAllCredentials">
                      List All Credentials
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/ViewCredentials">
                      View Credentials
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <Link href="/DeleteCredentials">
                      Delete Credentials
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>

            <HStack alignItems={'center'}>
              <Menu>
                <MenuButton
                  as={Button}
                  size={'sm'}
                  width={100}
                  mr={2}>
                    Organizations
                </MenuButton>

                <MenuList>
                  <MenuItem>
                    <Link href="/ViewOrganizations">
                      View and Edit
                    </Link>
                  </MenuItem>

                </MenuList>
              </Menu>
            </HStack>

          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}
