import "./App.css";
import React from 'react';



//arama kutucuğunun bileşenini oluşturduk
function Arama({aramaMetni, onSearch, }){
 
  function handleChange(event){
    setAramaMetni(event.target.value)
    //ekrana yazdırma
     props.onSearch(event);
     localStorage.setItem("aranan", event.target.value);  //ekranda ne yazasrsan onu yerel depolama birimine yaz diyoer
  }
  React.useEffect(() => {
    localStorage.setItem("aranan", aramaMetni); 
  },[aramaMetni]);
    return(
    <div>     
      <label htmlFor="arama">Ara: </label>
      <input id="arama" type="text" onChange={onSearch} value={aramaMetni}   />  
      <p>
        
      </p>
      </div>
  )
}



function Yazi({id, url, baslik, yazar, yorum_sayisi, puan}){
  return(
    <li key={id}>
          <span>
            <a href={url}>{baslik}</a>, 
          </span>
          <span><b>Yazar:</b> {yazar}, </span>
          <span><b>Yorum Sayısı:</b> {yorum_sayisi}, </span>
          <span><b>Puan:</b> {puan}</span>
        </li>
  )
}




//ilk baştakinden farkı yok ekran olarak. Daha esnek bir yapı ile oluşturduk
function Liste(props) {    //bu function bir bileşen, javadaki class gibi düşün. Liste isminde bir bileşen
  return(
  <ul>
   {props.yazilar.map(function (yazi){
    return (
    
    <Yazi key={yazi.id} {...yazi}/>
    );
   })}

  </ul>

  )                     
}





function App() {
  const [aramaMetni, setAramaMetni] = React.useState(localStorage.getItem("aranan") ||  "React");

  const yaziListesi = [
    {  
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Sinan Yüksel",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Asım Yüksel",
      yorum_sayisi: 2,
      puan: 5,
      id: 1,
    },

    {
      baslik: "Python Öğreniyorum",
      url: "www.python.org",
      yazar: "Buse Çelik",
      yorum_sayisi: 10,
      puan: 4.5,
      id: 2
    },

    {
      baslik: "React Dünyası",
      url: "www.developer.apple.com",
      yazar: "Mustafa Aslan",
      yorum_sayisi: 12,
      puan: 3.0,
      id: 3
    },

    {
      baslik: "Data Structures",
      url: "www.datastructures.com",
      yazar: "Narasimha Karumanchi",
      yorum_sayisi: 8,
      puan: 4.8,
      id: 4
    },

    {
      baslik: "R ile Veri Bilimi ve Machine Learning",
      url: "www.udemy.com",
      yazar: "Vahit Keskin",
      yorum_sayisi: 15,
      puan: 4.2,
      id: 5
    },

    {
      baslik: "The Complete 2023 Web Development Bootcamp",
      url: "www.udemy.com",
      yazar: "Dr.Angela Yu",
      yorum_sayisi: 122,
      puan: 7.7,
      id: 6
    },
    
  ];

  const arananYazilar = yaziListesi.filter(function (yazi) {
    return (
      yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) || yazi.yazar.toLowerCase().includes(aramaMetni.toLowerCase()) 
    );
  });




//1. asama :callback metodu olusturma
  function handleSearch(event){
   setAramaMetni(event.target.value);
  }

  React.useEffect(()=>{
    localStorage.setItem("aranan",aramaMetni);
  },[aramaMetni]);

  return (
    <div>
      <h1>Yazılar</h1>
      <Arama aramaMetni={aramaMetni}  onSearch = {handleSearch} />  
      <strong>{aramaMetni} araniyor...</strong>
      <hr />
      <Liste yazilar={arananYazilar}/>
    </div>
  );


 
}
export default App;