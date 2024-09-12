import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Container, TaskText, TaskDone, TaskDelete } from './styles';
import FontAwesome from 'react-native-vector-icons/MaterialIcons';

interface TaskProps {
  description: string;
  check: boolean;
}

export function Task({ description, check }: TaskProps) {
  return (
    <Container>
      <TaskDone>
      <FontAwesome name="circle" size={28} color="white" />


      </TaskDone>
      <TaskText>{description}</TaskText>
      <TaskDelete>
        <Feather name='trash-2' size={24} color='white' />
      </TaskDelete>
    </Container>
  );
}