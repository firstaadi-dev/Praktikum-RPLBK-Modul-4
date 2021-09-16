import { createContext, useContext, useEffect, useState } from "react";

const themes = {
  bold: {
    weight: 700,
  },
  normal: {
    weight: 200,
  },
};


const BiodataContext = createContext();

export default function Biodata() {
  const [valueTheme, setValueTheme] = useState(themes.normal);

  useEffect(() => {
    if (valueTheme.weight === 200) {
      alert("Anda menggunakan font-weight normal");
    } else {
      alert("Anda menggunakan font-weight bold");
    }
  });
  
  return (
    <BiodataContext.Provider value={valueTheme}>
      <div className="biodataWrapper" style={{ fontWeight: valueTheme.weight }}>
        <Card />
        <button
          onClick={() =>
            setValueTheme(
              valueTheme === themes.normal ? themes.bold : themes.normal
            )
          }
        >
          change theme
        </button>
      </div>
    </BiodataContext.Provider>
  );
}

function Card(props) {
  return (
    <div>
      <Data />
    </div>
  );
}

function Data(props) {
  const theme = useContext(BiodataContext);
  console.log(theme.weight);
  return (
    <div>
      <div>
        <p>Nama: Firsta Adi Pradana</p>
        <p>NIM: 21120118130059</p>
        <p>Kelompok: 40</p>
        <p>Font-Weight: {theme.weight}</p>
      </div>
      <div>
        <p>Nama: Damarjati Rahmandaru</p>
        <p>NIM: 21120118130074</p>
        <p>Kelompok: 40</p>
        <p>Font-Weight: {theme.weight}</p>
      </div>
    </div>
  );
}
