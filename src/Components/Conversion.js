const pageStyle = {
  backgroundColor: 'white',
  position: 'absolute',
  width: '90%',
  marginLeft: '30px',
  height: '100%',
  borderRadius: '5px',
  paddingTop: '10px',
  marginTop: '30px',

}

const inputStyle = {
  backgroundColor:'#112031',
  display: 'block',
  margin: '0.5em 0.5em 0.5em',
  borderRadius: '5px',
  color: '#FFFFFF',
  textAlign: 'left',
  padding: '5px',
  marginLeft: '30px',
  marginTop: '10px',
  
}


const Conversion = () => {

return (

  <div style={pageStyle}>

<label>
    
    <input placeholder=" Drillin Conversions" list="browsers" name="myBrowser" style={inputStyle}/>  
</label>   
<datalist id="browsers">
    <option value="Chrome" />
    <option value="Firefox" />
    <option value="Internet Explorer" />  
</datalist>
<label>
    
    <input placeholder=" Production Conversions" list="browsers" name="myBrowser" style={inputStyle}/>  
</label>   
<datalist id="browsers">
    <option value="Chrome" />
    <option value="Firefox" />
    <option value="Internet Explorer" />  
</datalist>
<label>
    
    <input placeholder=" Force and power Conversions" list="browsers" name="myBrowser" style={inputStyle}/>  
</label>   
<datalist id="browsers">
    <option value="Chrome" />
    <option value="Firefox" />
    <option value="Internet Explorer" />  
</datalist>
<label>
    
    <input placeholder=" Fluid Conversions" list="browsers" name="myBrowser" style={inputStyle}/>  
</label>   
<datalist id="browsers">
    <option value="Chrome" />
    <option value="Firefox" />
    <option value="Internet Explorer" />  
</datalist>
<label>
    
    <input placeholder=" Gaz Conversions" list="browsers" name="myBrowser" style={inputStyle}/>  
</label>   
<datalist id="browsers">
    <option value="Chrome" />
    <option value="Firefox" />
    <option value="Internet Explorer" />  
</datalist>

  </div>
  

);
}




export default Conversion;