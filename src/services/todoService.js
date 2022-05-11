import http from './httpService';
import config from '../config.json';

export function getTodos() {
    return http.get(config.apiUrl + '/todos');
}
export function getTodo(id) {
    return http.get(config.apiUrl + '/todos' + '/' + id);
}
export function deleteTodo(todoId) {
    return http.delete(config.apiUrl + '/todos' + '/' + todoId);
}
export function saveTodo(todo) {
    return http.post(config.apiUrl + '/todos/', todo);
}

export function updateTodo(todo) {
    return http.put(config.apiUrl + '/todos' + '/' + todo._id, todo);
}


// export function updateTodo(todo) {
//     let copy = { ...todo }
//     delete copy._id;
//     copy.completed = !copy.completed;
//     console.log('Updated copy', copy);
//     return http.put(config.apiUrl + '/todos' + '/' + todo._id, copy)
// }

