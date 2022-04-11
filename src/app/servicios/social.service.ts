import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  private social:Social [] = [
    
      {
        nombre: "Guepardo",
        bio: "El guepardo es el mamífero terrestre más rápido del mundo. Su capacidad de aceleración, que dejaría clavados a la mayoría de los automóviles, le permite pasar de 0 a 96 kilómetros por hora en apenas tres segundos. Este gran felino es sumamente ágil cuando se mueve a gran velocidad y es capaz de hacer giros rápidos e inesperados persiguiendo a su presa.",
        img: "../../assets/img/guepardo.jpg",
        aparicion: "26.000.000-7500000 de años",
        casa:"antílopes, gacelas, cebras y ñús"
      },
      {
        nombre: "Fenix",
        bio: "El ave Fénix es conocido por ser esa criatura que supuestamente renace de sus propias cenizas. El mito, entonces, asocia a esta criatura con la capacidad de resiliencia que muchas personas tienen; esa habilidad para encontrar soluciones a situaciones adversas que les presenta la vida y, al igual que el ave Fénix, renacer de las cenizas que les dejó ese problema.",
        img: "../../assets/img/fenix.jpg",
        aparicion: "500 años antes del renacimiento",
        casa:"El bambu"
      },
      {
        nombre: "Selva",
        bio: "El bioma de la selva es conocido por muchos nombres diferentes; bosque lluvioso, jungla,  bosques densos, entre otros términos. Principalmente alberga una extensa cantidad de especies en flora y fauna además de caracterizarse por albergar árboles de grandes dimensiones y altura. Así que, el bioma selva es de vital importancia para la Tierra!",
        img: "../../assets/img/paisajes.jpg",
        aparicion: "",
        casa: ""
      },
      {
        nombre: "Mariposas",
        bio: "Las mariposas, son unos insectos pertenecientes al orden de los homometábolos, un grupo de insectos superiores, los cuales, a lo largo de su vida sufren una serie de transformaciones complejas conocida como metamorfosis, y en la que se suceden las fases de embrión, larva, pupa e imago.",
        img: "../../assets/img/mariposa.jpg",
        aparicion: "120 y 100 millones de años",
        casa:"néctar de las flores"
      },
      {
        nombre: "Lago",
        bio: "Lago, del latín lacus, es una masa permanente de agua que se halla depositada en las depresiones de un terreno. La formación de un lago se produce a partir de fallas geológicas (que generan la depresión del terreno), de la acumulación de morrenas glaciares (acumulación de piedras y barro) o de la obstrucción de un valle a causa de avalanchas producidas en sus laderas.",
        img: "../../assets/img/lago.jpg",
        aparicion: "hace 15.000 años",
        casa: ""
      },
      {
        nombre: "Piramides",
        bio: "Las pirámides de Egipto son unos de los monumentos más admirados y estudiados del planeta. Construidas con enormes bloques de piedra, estas obras son motivo de incertidumbre para muchos de los arqueólogos que se preguntan cómo fueron construidas en aquel entonces. Las tres pirámides de Guiza: Keops, Kefren y Micerino, son las más conocidas y se ubican cerca de El Cairo.",
        img: "../../assets/img/piramides.jpg",
        aparicion: "2680 y 2565 a. C.",
        casa: ""
      },
      {
        nombre: "Aves",
        bio: "Las aves son animales vertebrados, de sangre caliente, que caminan, saltan o se mantienen solo sobre las extremidades posteriores,3​ mientras que las extremidades anteriores han evolucionado hasta convertirse en alas que, al igual que muchas otras características anatómicas únicas, les permiten, en la mayoría de los casos, volar, si bien no todas vuelan. ",
        img: "../../assets/img/aves.jpg",
        aparicion: "150 millones de año atrás",
        casa: "semillas, bayas, frutas, insectos, otras aves, huevos, mamíferos pequeños, peces, brotes, larvas, invertebrados acuáticos, bellotas y otras nueces, vegetación acuática, cereales, animales muertos, basura"
      }
    ];
  

  constructor (){
    console.log("Servicio listo para usar!!!");
  }

  getSocial(): Social[]{
    return this.social;
  }

  getsocial ( idx: number){
    return this.social[idx];
  }

  buscarSocial (termino:string): Social[]{
    
    let socialArr: Social[]=[];
    termino = termino.toLocaleLowerCase(); 

    for(let i = 0; i < this.social.length; i++) {

      let social = this.social[i]; 


      let nombre = social.nombre.toLocaleLowerCase(); 
      if (nombre.indexOf (termino) >= 0) {
          social.idx= i;
          socialArr.push(social)  
      }
    }
    return socialArr;
  }
}

export interface Social{
  nombre: string; 
  bio: string; 
  img: string;
  aparicion: string; 
  casa: string;
  idx?: number;
} 
