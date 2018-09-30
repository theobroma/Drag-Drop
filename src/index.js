import React from 'react';
import ReactDOM from 'react-dom';
import {DragDropContext} from 'react-beautiful-dnd';
import '@atlaskit/css-reset';
import initialData from './initial-data';
import Column from './column';

class App extends React.Component {
  state = initialData;
  onDragEnd = result => {};

  render () {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map (columnId => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map (taskId => this.state.tasks[taskId]);
          return <Column key={columnId} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    );
  }
}

ReactDOM.render (<App />, document.getElementById ('root'));
