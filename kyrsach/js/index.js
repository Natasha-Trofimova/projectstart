const NAMES = [
  'name',
  'className',
  'informatics',
  'physics',
  'mathemathics',
  'literature',
  'music',
]

function saveGrades(grades) {
  // Сохраняем данные об оценках в локальном хранилище
  localStorage.setItem('grades', JSON.stringify(grades))
}

function getGrades() {
  // Вытаскиваем данные об оценках в локальном хранилище
  return JSON.parse(localStorage.getItem('grades')) || []
}

// Добавляем инфу об оценках
function addGrades(info) {
  const grades = getGrades();
  grades.push(info)
  saveGrades(grades)
}

function deleteRow(e) {
  const rowElement = e.target.parentElement.parentElement;
  const student = rowElement.getElementsByTagName('td')[0].textContent
  const grades = getGrades();
  const filteredGrades = grades.filter((info) => info.name && info.name !== student);
  saveGrades(filteredGrades);
  fillTabel()
}

function editRow(e) {
  const grades = getGrades();
  const rowElement = e.target.parentElement.parentElement;
  const columns = rowElement.getElementsByTagName('td');
  const editing = columns[0].getElementsByTagName('input').length > 0;
  const student = rowElement.getElementsByTagName('td')[0].textContent

  const newInfo = {}

  if (editing) {
    Array.from(columns).forEach((elem, index) => {
      if (index !== columns.length - 1) {
        const input = elem.getElementsByTagName('input')[0]
      
        newInfo[input.name] = input.value
      }
    });
  }


  Array.from(columns).forEach((item, index) => {
    if (index !== columns.length - 1) {
      const name = NAMES[index];

      if (editing) {
        item.removeChild(item.lastChild);
        item.textContent = newInfo[name];
      } else {
        const input = document.createElement('input');
        input.value = item.textContent;
        input.name = name;
        item.textContent = '';
        item.appendChild(input)
        
      }
    }
  });

  const newGrades = grades.map((item) => {
    if (item.student === student) {
      return newInfo
    }

    return item
  })

  saveGrades(newGrades)
}

function getRow(info) {
  // Строка таблицы
  const tableRow = document.createElement('tr');
  // Имя ученика
  const nameColumn = document.createElement('td');
  nameColumn.textContent = info.name;
  // Класс ученика
  const classColumn = document.createElement('td');
  classColumn.textContent = info.className;
  // Информатика
  const informaticsColumn = document.createElement('td');
  informaticsColumn.textContent = info.informatics;
  // Физика
  const physicsColumn = document.createElement('td');
  physicsColumn.textContent = info.physics;
  // Математика
  const mathemathicsColumn = document.createElement('td');
  mathemathicsColumn.textContent = info.mathemathics;
  // Литература
  const literatureColumn = document.createElement('td');
  literatureColumn.textContent = info.literature;
  // Музыка
  const musicColumn = document.createElement('td');
  musicColumn.textContent = info.music;
  // Действия
  const actionsColumn = document.createElement('td');
  const editButton = document.createElement('button');
  editButton.className = 'edit-button'
  editButton.textContent = 'Редактировать'
  editButton.addEventListener('click', editRow)
  const deleteButton = document.createElement('button');
  deleteButton.addEventListener('click', deleteRow)
  deleteButton.className = 'delete-button'
  deleteButton.textContent = 'Удалить'
  actionsColumn.appendChild(editButton)
  actionsColumn.appendChild(deleteButton)

  // Добавление ячеек в строку
  tableRow.appendChild(nameColumn)
  tableRow.appendChild(classColumn)
  tableRow.appendChild(informaticsColumn)
  tableRow.appendChild(physicsColumn)
  tableRow.appendChild(mathemathicsColumn)
  tableRow.appendChild(literatureColumn)
  tableRow.appendChild(musicColumn)
  tableRow.appendChild(actionsColumn)

  return tableRow
}

function addRow() {
  const tableElement = document.getElementById('grades-table');
  // Получение элемента тела таблицы
  const tbodyElement = tableElement.getElementsByTagName('tbody')[0];
  // Получение массива полей ввода
  const inputelements = document.getElementById('add-row').getElementsByTagName('input')

  const newInfo = {}

  Array.from(inputelements).forEach((e) => {
    newInfo[e.name] = e.value
  })

  if (newInfo.name) {
    addGrades(newInfo)
    const rowElement = getRow(newInfo)
    // Добавление строки в таблицу
    tbodyElement.appendChild(rowElement)
  } else {
    alert('Заполните имя ученика!')
  }
}

// Заполнение таблицы данными
function fillTabel() {
  const grades = getGrades()
  const tableElement = document.getElementById('grades-table');
  // Получение элемента тела таблицы
  const tbodyElement = tableElement.getElementsByTagName('tbody')[0];

  while (tbodyElement.firstChild) {
    tbodyElement.removeChild(tbodyElement.lastChild);
  }

  grades.forEach((info) => {
    // Строка таблицы
    const tableRow = getRow(info)
    // Добавление строки в таблицу
    tbodyElement.appendChild(tableRow)
  })
}

// Старт приложения
function start() {
  fillTabel();
  const buttonElement = document.getElementById('add-row-button');
  buttonElement.addEventListener('click', addRow);
}

start()
// saveGrades(GRADES)

