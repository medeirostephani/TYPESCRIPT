function calculoDaArea (base: number, altura: number): number {
    const area = base * altura;
    return area;
};

const forma = calculoDaArea(18, 7);
console.log(forma);



function saudacao(nome: string): string {
    return `Olá, ${nome}`;
};
const nome = "Stephani";
const dizOla = saudacao(nome);
console.log(dizOla);