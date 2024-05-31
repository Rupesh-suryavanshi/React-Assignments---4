import React, { useState, useEffect } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const TicketView = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTicket();
  }, [id]);

  const fetchTicket = async () => {
    const response = await axios.get(`http://localhost:5000/tickets/${id}`);
    setTicket(response.data);
  };

  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/tickets/${id}`);
    navigate('/tickets');
  };

  return (
    <Box p="4">
      {ticket && (
        <>
          <Box>
            <strong>Title:</strong> {ticket.title}
          </Box>
          <Box>
            <strong>Description:</strong> {ticket.description}
          </Box>
          <Box>
            <strong>Assignee:</strong> {ticket.assignee}
          </Box>
          <Box>
            <strong>Status:</strong> {ticket.status}
          </Box>
          <Box>
            <strong>Priority:</strong> {ticket.priority}
          </Box>
          <Button mt="2" colorScheme="teal" onClick={() => navigate(`/tickets/edit/${id}`)}>Edit</Button>
          <Button mt="2" colorScheme="red" ml="4" onClick={handleDelete}>Delete</Button>
        </>
      )}
    </Box>
  );
};

export default TicketView;
