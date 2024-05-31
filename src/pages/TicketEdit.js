import React, { useState, useEffect } from 'react';
import { Box, Button, Input, Textarea, Select, VStack } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const TicketEdit = () => {
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

  const handleSubmit = async () => {
    await axios.put(`http://localhost:5000/tickets/${id}`, ticket);
    navigate('/tickets');
  };

  return (
    <Box p="4">
      {ticket && (
        <VStack spacing="4">
          <Input placeholder="Title" value={ticket.title} onChange={(e) => setTicket({ ...ticket, title: e.target.value })} />
          <Textarea placeholder="Description" value={ticket.description} onChange={(e) => setTicket({ ...ticket, description: e.target.value })} />
          <Select placeholder="Assignee" value={ticket.assignee} onChange={(e) => setTicket({ ...ticket, assignee: e.target.value })}>
            <option value="John Doe">John Doe</option>
            <option value="Jane Smith">Jane Smith</option>
          </Select>
          <Select placeholder="Status" value={ticket.status} onChange={(e) => setTicket({ ...ticket, status: e.target.value })}>
            <option value="Pending">Pending</option>
            <option value="Progress">Progress</option>
            <option value="Completed">Completed</option>
          </Select>
          <Select placeholder="Priority" value={ticket.priority} onChange={(e) => setTicket({ ...ticket, priority: e.target.value })}>
            {[...Array(10).keys()].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </Select>
          <Button onClick={handleSubmit}>Edit Ticket</Button>
        </VStack>
      )}
    </Box>
  );
};

export default TicketEdit;
