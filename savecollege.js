let aluno = [
    {
        nome:"Alexandre",
        altura:'1,71',
        idade:13,
        sexo:'masculino',
        sala:'A',
        matematica:8,
        },
        {
        nome:"Amanda",
        altura:'1,69',
        idade:14,
        sexo:'feminino',
        sala:'B',
        matematica:7,
        },
        {
        nome:"Arthur",
        altura:'1,70',
        idade:13,
        sexo:'masculino',
        sala:'A',
        matematica:5,
        },
        {
        nome:"Andre",
        altura:'1,65',
        idade:11,
        sexo:'masculino',
        sala:'B',
        matematica:6,
        },
        {
        nome:"Eduardo",
        altura:'1,67',
        idade:14,
        sexo:'masculino',
        sala:'A',
        matematica:9,
        },
    ]
//Inicio - Ex1 - dados dos alunos
console.log('::Ex1 - dados dos alunos')
/*aluno.forEach(exibirAlunos);
function exibirAlunos(item){
    console.log(item.nome,item.altura,item.idade,item.sexo,item.sala);
}*/
for (var i = 0; i < aluno.length; i++) {
    console.log(aluno[i].nome,aluno[i].altura,aluno[i].idade,aluno[i].sexo,aluno[i].sala);
    // more statements
 }
//Fim - Ex1 - dados dos alunos
//Inicio - Ex2 - média dos alunos
console.log('::Ex2 - média dos alunos')
let media=0;
let cont=0;
while (cont < aluno.length) {
    media += aluno[cont].matematica;
    cont++;
}
console.log(`Média da nota de matematica dos alunos: ${media}`)
//Inicio - Ex3 - alunos aprovados
console.log('::Ex3 - alunos aprovados')
for (var i=0; i < aluno.length; i++) {
    aluno[i].matematica >= 7 ? console.log(`${aluno[i].nome} APROVADO`) : console.log(`${aluno[i].nome} REPROVADO`)
}

//Fim - Ex3 - alunos aprovados