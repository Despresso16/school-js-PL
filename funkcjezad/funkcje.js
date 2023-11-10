// ZAD1
let tab1 = [67, 31, 17, 6, 19, 5, 43, 10, 27, 20];
//1.1
alert(tab1[7]);
tab1[4] = 12;
//1.2
console.log("1.2")
let tab2 = new Array(tab1.length);
for (let i = 0; i < tab2.length; i++)
{
    tab2[i] = tab1[i];
}
console.log(tab2)
//1.3
console.log("1.3")
let tab3 = new Array(tab1.length);
for (let i = 0; i < tab3.length; i++)
{
    tab3[i] = tab1[i] + tab2[i];
}
console.log(tab3);
//1.4
console.log("1.4")
tab2 = tab1.reverse();
console.log(tab2);
// ZAD2
//2.1
console.log("2.1");
let dlugosc = prompt("Podaj wielkosc");
let tablica = new Array(dlugosc);
for (let i = 0; i < dlugosc; i++)
{
    tablica[i] = prompt("Podaj wartosc");
}
console.log(tablica);
//2.2
console.log("2.2")
tablica.sort();
console.log("Najmniejsza liczba " + tablica[0] + "| Najwieksza liczba " + tablica[tablica.length -1]);
//2.3
console.log("2.3");
let suma = 0;
for(let i = 0; i < dlugosc; i++)
{
    suma += tablica[i];
}
console.log(suma / dlugosc);
//2.4
console.log("2.4");
let ilosc = 0;
for (let i = 0; i < dlugosc; i++)
{
    if (tablica[i] == 3) 
    {
        ilosc += 1;
    }
}
console.log(ilosc);
//2.5
//juz posortowane
//2.6
console.log("2.6");
if (dlugosc % 2 === 0)
{
    let wartosc1 = dlugosc / 2;
    let wartosc2 = dlugosc - 1;
    let mediana = (wartosc1 + wartosc2 ) /2;
}
else 
{
    let mediana = dlugosc / 2;
}
console.log(mediana);

