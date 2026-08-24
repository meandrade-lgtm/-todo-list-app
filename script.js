let tasks = [];
let filter = 'all';
const list = document.getElementById('taskList');
const input = document.getElementById('taskInput');
// HU-01: Agregar tarea
document.getElementById('addBtn').onclick = () => {
 if (!input.value.trim()) return;
 tasks.push({ id: Date.now(), text: input.value, done: false });
 input.value = '';
 render();
};
function render() {
 list.innerHTML = '';
 tasks
 .filter(t => filter === 'all' || (filter === 'pending' && !t.done) || (filter === 'done' &&
t.done))
 .forEach(t => {
 const li = document.createElement('li');
 li.className = t.done ? 'done' : '';
 li.innerHTML = `
