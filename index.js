// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
  - Input:  Bir dosya yolunu (path) parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon, verilen bir dosya adresideki(path) dosyanın adını vermeli.
  * İpucu:  Dosya adresinin / işaretleri ile bölümlendiğine dikkat et.

  örnek input:  "C:/Users/johnsmith/Music/Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  "Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  ""
  örnek output: ""
*/
const dosya_yolu = "C:/Users/johnsmith/Music/Beethoven_5.mp3";

function dosyaAdiniBul(path) {

  if ( path.includes("/")){

    const arrayPath = path.split("/");
    console.log(`split - array : ${arrayPath}`);
    return arrayPath.pop();

  }
  else
    return path;
}
console.log("OUTPUT : ",dosyaAdiniBul(dosya_yolu));
/*
  GÖREV 2
  - Input:  Bir sayı arrayini parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasını dönmeli.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: 46

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: 104
*/
const listeNum = [109, 216, 288, 143, 71, 185, -278, 194, 5];

function ortalamaBul(arrayNumber) {
    let toplam = 0;
    let ort;
    if (arrayNumber.length === 0){
      return null;
    }

    for( let k in arrayNumber){
      toplam += arrayNumber[k];
    }
    ort = toplam/(arrayNumber.length);

    return ort;
}
console.log("Dizinin - Ortalaması : ",ortalamaBul(listeNum));

/*
  GÖREV 3
  - Input:  Bir sayı arrayini ve ortalama bulmaya yarayacak bir fonksiyonu parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasından büyük ya da eşit elemanlardan oluşan bir array dönmeli.
  * Çağırırken kendi ortalama fonksiyonunla çağırabilirsin, ama parametrenin tanımlama aşamasında soyut bir ifade olduğunu unutma.
  * f(x) = 2x+5 içerisindeki x değeri gibi.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: [50, 153]

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: [109, 216, 288, 143, 185, 194]
*/

function ortalamadanBuyukleriBul(arrayNum,ortFunc) {

  const newArray = [];
  const deger = ortFunc(arrayNum);
  if (deger !== null){
    for ( let j in arrayNum){
      if (arrayNum[j] >= deger){
        newArray.push(arrayNum[j]);
      }
    }
    return newArray;
  }
  else return null;
}
console.log(`Feedback Array =  ${ortalamadanBuyukleriBul(listeNum,ortalamaBul)}`);



/* !!!! Burdan aşağısını değiştirmeyin !!!! */

function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };
