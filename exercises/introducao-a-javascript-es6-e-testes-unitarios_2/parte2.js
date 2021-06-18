const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const c2 = (lesson, key, value) => {
  return lesson[key] = value;
}

c2(lesson2, 'turno', 'manhã');
console.log(c2(lesson2, 'turno', 'manhã'));
console.log('______________________')

const c3 = lesson => {
  for (let i in lesson) {
    console.log(`O valor de ${i}: ${lesson[i]}`)
  }
}

c3(lesson3);
console.log('_______________________')

const c4 = lesson => {
  for (let i in lesson) {
    console.log(Object.keys(lesson).length)
  }
}

c4(lesson2)
console.log('________________________')

const c5 = lesson => {
  for (let i in lesson) {
    console.log(lesson[i])
  }
}

c5(lesson2);
console.log('__________________________')

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);