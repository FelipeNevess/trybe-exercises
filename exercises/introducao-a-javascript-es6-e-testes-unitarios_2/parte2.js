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

c3(lesson2);
console.log('_______________________')

const c4 = lesson => {
  console.log(Object.keys(lesson).length);
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
console.log('__________________________')

const estudantes = (obj) => {
  let cont = 0;
  let a = Object.keys(obj);

  for (let i in a) {
    cont += obj[a[i]].numeroEstudantes;
  }
  return cont;
}

console.log(estudantes(allLessons));
console.log('___________________________')

const getValueByNumber = (obt1, num) => {
  const a = Object.values(obt1);
  console.log(a[num]);
}

getValueByNumber(lesson1, 0)
console.log('___________________________')

const verifyPair = (obj2, keyy, val) => {
  const a = Object.keys(obj2);
  const b = Object.values(obj2);
  let cont = 0;

  for (let i = 0; i < a.length; i += 1) {
    if (a[i] === keyy && b[i] === val) {
      cont = 1;
    }
  }

  if (cont === 1) {
    return true;
  } else {
    return false;
  }
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log('_____________________________')

/// QUESTOẼS BÔNUS

const contEstudant = objec => {
  let cont = 0;
  const a = Object.keys(objec);
  
  for (let i in a) {
    if (objec[a[i]].materia === 'Matemática') {
      cont += objec[a[i]].numeroEstudantes;
    }
  }
  console.log(`A quantidade de alunos que assitiram a aula de Matemática foram: ${cont}`);
}

contEstudant(allLessons)
console.log('______________________________');

const relatorio = (obj, prof) => {
  const a = Object.keys(obj);
  let b = {};
  let cont = 0;
  let aulas = [];

  for (let i in a) {
    if (obj[a[i]].professor === prof) {
      b.professor = obj[a[i]].professor;
      aulas.push(obj[a[i]].materia);
      cont += obj[a[i]].numeroEstudantes;
    }
  }

  b.aulas = aulas;
  b.estudantes = cont;
  console.log(b);
}

relatorio(allLessons, 'Maria Clara');
