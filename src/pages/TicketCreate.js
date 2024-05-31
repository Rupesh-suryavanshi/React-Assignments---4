import React, { useState } from 'react';
import { Box, Button, Input, Textarea, Select, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TicketCreate = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignee, setAssignee] = useState('');
  const [status, setStatus] = useState('Pending');
  const [priority, setPriority] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const newTicket = { title, description, assignee, status, priority };
    await axios.post('http://localhost:5000/tickets', newTicket);
    navigate('/tickets');
  };

  return (
    <Box p="4">
      <VStack spacing="4">
        <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <Select placeholder="Assignee" value={assignee} onChange={(e) => setAssignee(e.target.value)}>
          <option value="John Doe">John Doe</option>
          <option value="Jane Smith">Jane Smith</option>
        </Select>
        <Select placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Pending">Pending</option>
          <option value="Progress">Progress</option>
          <option value="Completed">Completed</option>
        </Select>
        <Select placeholder="Priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
          {[...Array(10).keys()].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </Select>
        <Button onClick={handleSubmit}>Create Ticket</Button>
      </VStack>
    </Box>
  );
};

export default TicketCreate;
