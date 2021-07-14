import { Radio, Typography } from 'antd';
import 'antd/dist/antd.css'
import { useEffect, useState } from 'react';
import './App.css';

 
function App() {
  const { Text , Title, Paragraph} = Typography
  const [ radio, setRadio ] = useState(true)
  const [dataStyle, setDataStyle] = useState({ 
      color: 'white',
      background: 'black' 
  })
  const style = {
    light: {
      color: 'white',
      background: 'black'
    },
    dark: {
      color: 'red',
      background: '#ccc'
    }
  }
  useEffect(()=>{
    radio ? setDataStyle(style.light) : setDataStyle(style.dark)
  },[radio])

  const onChange = (e) =>{
    setRadio(e.target.value) 
  } 
  return (
    <>

    {/* việc của chị: 
      - tạo 1 nút bấm sử dụng Radio chuyển đổi background và màu text
    */}
    <div style={{width:'500px', height:'500px',background:dataStyle.background}}> 
      <Radio.Group onChange={onChange} defaultValue={radio}>
        <Radio value={true}>Light</Radio>
        <Radio value={false}>Dark</Radio> 
      </Radio.Group>
      <Text style={{width:'50px',color:dataStyle.color}} ellipsis={true} onClick={(e)=> console.log(e)}> lorem akdsjasdjaksdljkladjlkajsdlajdlajsdl </Text>
      <Title style={{color:dataStyle.color}} level={2}> Title </Title>
      <Paragraph style={{color:dataStyle.color}} > Paragraph </Paragraph>
     </div>
    </>
  );
}

export default App;
