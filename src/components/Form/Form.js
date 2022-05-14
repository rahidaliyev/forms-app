import React, { Component } from 'react'

export default class Form extends Component {
  state={
      ad: "",
      soyad: "",
      unvan: "",
      telefon: "",
      isvalid: true
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
  };
  handleChange=(event)=>{
this.setState({[event.target.name]:event.target.value},_=>{
    if(this.state.ad!=="" && this.state.soyad!=="" && this.state.unvan!=="" && this.state.telefon!==""){
        this.setState({isvalid: false})
    }
    else{
        this.setState({isvalid: true})
    }
})

  }
  myClick=()=>{
      alert("agilli ol!");
      console.log(this.state);
  }

    render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
      <input onChange={this.handleChange} type="ad"  name='ad' placeholder='Adiniz' required/>
      <input onChange={this.handleChange} type="soyad" name='soyad'  placeholder='Soyadiniz' required/>
      <input onChange={this.handleChange} type="unvan" name='unvan'  placeholder='Unvan' required/>
      <input onChange={this.handleChange} type="telefon" name='telefon'  placeholder='Telefon' required/>
      <button disabled={this.state.isvalid} onClick={this.myClick} type='submit'>Submit</button>
      </form>
      </>
    )
  }
}
