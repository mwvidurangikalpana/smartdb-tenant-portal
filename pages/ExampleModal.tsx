import React, { useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from '@chakra-ui/react';

const ExampleModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [generatedCredentials, setGeneratedCredentials] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // code to generate credentials
    setGeneratedCredentials('generated credentials');
    setIsOpen(true);
  };

  return (
    <>
      <button onClick={handleSubmit}>Generate Credentials</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader>Generated Credentials</ModalHeader>
        <ModalBody>{generatedCredentials}</ModalBody>
        <ModalFooter>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ExampleModal;
