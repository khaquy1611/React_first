import { useState } from 'react';
import ButtonComponent from './components/button';
import ResultComponent from './components/result';
import InputComponent from './components/input';

function PhuongTrinhBacHai() {
  const [hsa, setHsa] = useState(0);
  const [hsb, setHsb] = useState(0);
  const [hsc, setHsc] = useState(0);
  const [result, setResult] = useState("");

  const getNumberInput = (event) => {
    let val = event.target.value;
    val = Number.parseFloat(val);
    //console.log(typeof val);
    const name = event.target.name;
    if(name === 'hsa'){
      setHsa(val);
    } else if(name === 'hsb') {
      setHsb(val);
    } else if(name === 'hsc'){
      setHsc(val);
    }
  }

  const giaiPT = () => {
    const delta = hsb*hsb - (4*hsa*hsc);
    if(delta < 0){
      setResult('phuong trinh vo nghiem');
    } else if(delta === 0) {
      let x = -hsb/(2*hsa);
      setResult(`Phuong trinh co nghiem kep x1 = x2 = ${x}`);
    } else {
      let x1 = (-hsb + Math.sqrt(delta)) / (2*hsa);
      let x2 = (-hsb - Math.sqrt(delta)) / (2*hsa);
      setResult(`Phuong trinh co 2 nghiem phan biet x1 = ${x1} va x2 = ${x2}`);
    }
  }

  return (
    <>
      <div style={{ width: '300px', padding: '5px', border: '1px solid #ccc', margin: 'auto' }}>
        <label>He So A</label>
        <InputComponent change={getNumberInput} type="text" name="hsa" value={hsa} />
        <br/>
        <br/>
        <label>He So B</label>
        <InputComponent change={getNumberInput} type="text" name="hsb" value={hsb} />
        <br/>
        <br/>
        <label>He So C</label>
        <InputComponent change={getNumberInput} type="text" name="hsc" value={hsc} />
        <br/>
        <br/>
        <ButtonComponent click={giaiPT} type="button" />
        <ResultComponent result={result} />
      </div>
    </>
  )
}
export default PhuongTrinhBacHai;