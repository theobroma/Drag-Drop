import React from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightblue;
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 2px;
  display: border-box;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
`;

export default class Task extends React.Component {
  render () {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            innerRef={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            {/* {console.log (snapshot)} */}
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}
