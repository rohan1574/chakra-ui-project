
import React, { useState } from "react";
import DATA from "../data";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { Box, Button, FormControl, FormLabel, Icon, Input, Stack, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import "../theme/styles";
import Filters from "../pages/Filters";
import SortIcon from "../icons/SortIcon";
// import TaskModal from "../Modal/TaskModal";

const columns = [
  {
    accessorKey: "task",
    header: "User Name",
    // cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: "task",
    header: "First Name",
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: "task",
    header: "Last Name",
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: "status",
    header: "Role",
    cell: (props) => <p>{props.getValue()?.name}</p>
  },

  {
    accessorKey: "notes",
    header: "state",
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: "action",
    header: "action",
    cell: () => <p>
      <Stack direction={'row'}>
        <FaRegEdit />
        <MdDelete />
      </Stack>

    </p>
  },

];
//   console.log(DATA)

const TaskTable = () => {
  const [data, setData] = useState(DATA);
  const [columnFilters, setColumnFilters] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
  console.log(table.getHeaderGroups())
  return (
    <Box color="black" className="mb-7">
      {/* header text */}

      <Stack direction={'row'}>
        <Filters
          columnFilters={columnFilters}
          setColumnFilters={setColumnFilters}
        />
        <div>
          <Button color='red' p='5' bg='black' onClick={onOpen}>New User</Button>


          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Create your account</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl mt={4}>
                  <FormLabel>User name</FormLabel>
                  <Input ref={initialRef} placeholder='User name' />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>First name</FormLabel>
                  <Input ref={initialRef} placeholder='First name' />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Last name</FormLabel>
                  <Input placeholder='Last name' />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Role name</FormLabel>
                  <Input ref={initialRef} placeholder='Role name' />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>State name</FormLabel>
                  <Input ref={initialRef} placeholder='State name' />
                </FormControl>

                <Stack mt={7} direction={'row'}>
                  <Button colorScheme='blue' mr={3}>
                    Active
                  </Button>
                  <Button colorScheme='blue' mr={3}>
                    Disabled
                  </Button>
                </Stack>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme='blue' mr={3}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </Stack>
      <Box color="black" className="table" w={table.getTotalSize()}>

        {table.getHeaderGroups().map((headerGroup) => (
          <Box className="tr" key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Box className="th" w={header.getSize()} key={header.id}>

                {header.column.columnDef.header}
                {header.column.getCanSort() && (
                  <Icon
                    as={SortIcon}
                    mx={3}
                    fontSize={14}
                    onClick={header.column.getToggleSortingHandler()}
                  />
                )}
              </Box>

            ))}
          </Box>))}
        {/* middle-text */}
        {table.getRowModel().rows.map((row) => (
          <Box className="tr" key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Box className="td" w={cell.column.getSize()} key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Box>
            ))}
          </Box>
        ))}

      </Box>
    </Box >


  );
};

export default TaskTable;