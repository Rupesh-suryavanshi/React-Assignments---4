import React, { useState, useEffect } from 'react';
import { Box, Button, SimpleGrid, Select } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [sortPriority, setSortPriority] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    const response = await axios.get('http://localhost:5000/tickets');
    setTickets(response.data);
  };

  const handleSort = (e) => {
    setSortPriority(e.target.value);
  };

  const handleFilter = (e) => {
    setFilterStatus(e.target.value);
  };

  const sortedAndFilteredTickets = tickets
    .filter((ticket) => !filterStatus || ticket.status === filterStatus)
    .sort((a, b) => {
      if (sortPriority === 'Low to High') {
        return a.priority - b.priority;
      } else if (sortPriority === 'High to Low') {
        return b.priority - a.priority;
      } else {
        return 0;
      }
    });

  return (
    <Box p="4">
      <Box d="flex" justifyContent="space-between" mb="4">
        <Link to="/tickets/create">
          <Button colorScheme="teal">Create Ticket</Button>
        </Link>
        <Box>
          <Select placeholder="Sort by Priority" onChange={handleSort} value={sortPriority}>
            <option value="Low to High">Low to High</option>
            <option value="High to Low">High to Low</option>
          </Select>
          <Select placeholder="Filter by Status" onChange={handleFilter} value={filterStatus} ml="4">
            <option value="Pending">Pending</option>
            <option value="Progress">Progress</option>
            <option value="Completed">Completed</option>
          </Select>
        </Box>
      </Box>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="4">
        {sortedAndFilteredTickets.map((ticket) => (
          <Box key={ticket.id} p="4" borderWidth="1px" borderRadius="md">
            <Box>
              <strong>Title:</strong> {ticket.title}
            </Box>
            <Box>
              <strong>Status:</strong> {ticket.status}
            </Box>
            <Box>
              <strong>Priority:</strong> {ticket.priority}
            </Box>
            <Link to={`/tickets/view/${ticket.id}`}>
              <Button mt="2" colorScheme="teal">View</Button>
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Tickets;
