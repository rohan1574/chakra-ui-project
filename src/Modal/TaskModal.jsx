import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import TodoMadal from './TodoMadal';

const TaskModal = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div>
            <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Task
      </Button>
      <TodoMadal  modalOpen={modalOpen} setModalOpen={setModalOpen}></TodoMadal>
     
        </div>
    );
};

export default TaskModal;