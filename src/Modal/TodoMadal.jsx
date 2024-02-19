import React from 'react';
import styles from './modal.module.scss';
import { Button } from '@chakra-ui/react';
const TodoMadal = ({ modalOpen, setModalOpen }) => {
    return (
        <div>
          {
            modalOpen && (
                <form className={styles.form}  >
                <h1 className={styles.formTitle}>
                  TODO
                </h1>
                <label htmlFor="title">
                  Title
                  <input
                    type="text"
                    id="title"
                
                  />
                </label>
                <label htmlFor="type">
                 Status
                  <select
                    id="type"
                    
                  >
                    <option value="incomplete">Incomplete</option>
                    <option value="complete">Completed</option>
                  </select>
                </label>
                <div className={styles.buttonContainer}>
                  <Button color='red' p='5' bg='black' type="submit" variant="primary">
                   Submit
                  </Button>
                  <Button variant="secondary" onClick={() => setModalOpen(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            )
          }
        </div>
    );
};

export default TodoMadal;