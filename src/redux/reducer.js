//redux
// import statusFilters from './constants';
// import { combineReducers } from 'redux';

// // const initialState = {
// //   tasks: [
// //     { id: 0, text: 'Learn HTML and CSS', completed: true },
// //     { id: 1, text: 'Get good at JavaScript', completed: true },
// //     { id: 2, text: 'Master React', completed: false },
// //     { id: 3, text: 'Discover Redux', completed: false },
// //     { id: 4, text: 'Build amazing apps', completed: false },
// //   ],
// //   filters: { status: 'all' },
// // };
// const taskInitialState = [
//   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   { id: 1, text: 'Get good at JavaScript', completed: true },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },
// ];

// // export const rootReducer = (state = initialState, action) => {
// //   switch (action.type) {
// //     case 'tasks/addTask': {
// //       return {
// //         ...state,
// //         tasks: [...state.tasks, action.payload],
// //       };
// //     }
// //     case 'tasks/deleteTask': {
// //       return {
// //         ...state,
// //         tasks: state.tasks.filter(task => task.id !== action.payload),
// //       };
// //     }
// //     case 'tasks/toggleCompleted': {
// //       return {
// //         ...state,
// //         tasks: state.tasks.map(task => {
// //           if (task.id !== action.payload) {
// //             return task;
// //           }
// //           return { ...task, completed: !task.completed };
// //         }),
// //       };
// //     }
// //     case 'filters/setStatusFilter': {
// //       return {
// //         ...state,
// //         filters: {
// //           ...state.filters,
// //           status: action.payload,
// //         },
// //       };
// //     }
// //     default:
// //       return state;
// //   }
// // };
// export const tasksReducer = (state = taskInitialState, action) => {
//   switch (action.type) {
//     case 'tasks/addTask': {
//       return [...state, action.payload];
//     }
//     case 'tasks/deleteTask': {
//       return state.filter(task => task.id !== action.payload);
//     }
//     case 'tasks/toggleCompleted': {
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });
//     }

//     default:
//       return state;
//   }
// };
// const filtersInitialState = { status: statusFilters.all };
// const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// // export const rootReducer = (state = {}, action) => {
// //   return {
// //     tasks: tasksReducer(state.task, action),
// //     filters: filtersReducer(state.filters, action),
// //   };
// // };
// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });

// redux-toolkit
import {
  addTask,
  deleteTask,
  setStatusFilter,
  toggleCompleted,
} from './actions';
import statusFilters from './constants';
const tasksInitsalState = [];
export const tasksReducer = (state = tasksInitsalState, action) => {
  switch (action.type) {
    case addTask.type: {
      return [...state, action.payload];
    }
    case deleteTask.type: {
      return state.filter(task => task.id !== action.payload);
    }
    case toggleCompleted.type: {
      return state.map(task => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });
    }

    default:
      return state;
  }
};
const filtersInitsalState = {
  status: statusFilters.all,
};
export const filtersReducer = (state = filtersInitsalState, action) => {
  switch (action.type) {
    case setStatusFilter.type:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
