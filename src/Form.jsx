import React, { Component } from 'react';
import $ from 'jquery';

class Form extends Component {
    state = { 
        namaa : "",
        umurr : "",
        jk : "",
        alamatt : "",
        hobii :[
            'Tidur',
            'Nonton',
            'Makan'
        ],
        checkedHobi:[]
    }

    handleFormNama = (e) => {
        this.setState({namaa : e.target.value});
    }
      
    handleFormUmur = (e) => {
      this.setState({umurr : e.target.value})
    }

    handleFormJk = (e) => {
        this.setState({jk : e.target.value})
    }

    handleFormAlamat = (e) => {
        this.setState({alamatt : e.target.value})
    }

    handleFormHobi = (e) => {   
        if(e.target.checked){
            this.state.checkedHobi[e.target.value] = this.state.hobii[e.target.value]; 
        }
        else{
            this.state.checkedHobi.splice(e.target.value,1);
        }
   
    }
      
    handleSubmit = (e) => {

        if((this.state.namaa != "") && (this.state.umurr !="") && (this.state.alamatt != "") && (this.state.jk != "")){
            $('#hasil').html(
                "<p> Nama : " + this.state.namaa + "</p><br><p> Umur : " + this.state.umurr + "</p><br><p> Jenis Kelamin : " + this.state.jk + "</p><br><p> Alamat : " + this.state.alamatt + "</p><br><p> Hobi : " + this.state.checkedHobi.join(", ") + "</p>"
            );
            $('.alert').remove();
        }

        if(this.state.namaa == ""){
            $('#nameVal').append(`<div class="alert alert-danger" id="rm1" role="alert">
            Nama Harus Diisi !!!
          </div>
          `)
        }
        if(this.state.umurr == ""){
            $('#umurVal').append(`<div class="alert alert-danger" id="rm2" role="alert">
            Umur Harus Diisi !!!
          </div>
          `)
        }
        if(this.state.jk == ""){
            $('#jkVal').append(`<div class="alert alert-danger" id="rm3" role="alert">
            Jenis Kelamin Harus Dipilih !!!
          </div>
          `)
        }
        if(this.state.alamatt == ""){
            $('#alamatVal').append(`<div class="alert alert-danger" id="rm4" role="alert">
            Alamat Harus Diisi !!!
          </div>
          `)
        }
        e.preventDefault();
    }

    handleAlert = () => {
            $('.alert').remove()
    }

    render() { 
        return ( 
            <div className="container mt-3">      
        <form onSubmit={this.handleSubmit}>

            <div className="form-group">
                <label >Nama : </label>
                <input type="text" className="form-control" value={this.state.namaa} onChange={this.handleFormNama}  />
                <div id="nameVal"></div>
            </div>
            <div className="form-group">
                <label >Umur : </label>
                <input type="number" className="form-control" value={this.state.umurr} onChange={this.handleFormUmur}  />
                <div id="umurVal"></div>
            </div>

            <label >Jenis Kelamin : </label>
            <div className="form-check">
                <input className="form-check-input" type="radio" checked={this.state.jk === "Laki-Laki"} onChange={this.handleFormJk} name="lk" value="Laki-Laki"/>
                <label className="form-check-label" >
                    Laki-Laki
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" checked={this.state.jk === "Perempuan"} onChange={this.handleFormJk} name="pr" value="Perempuan"/>
                <label className="form-check-label" >
                    Perempuan
                </label>
            </div>
                <div id="jkVal"></div>

            <br/>
            <div className="form-group">
                <label >Alamat : </label>
                <textarea className="form-control" rows="3" value={this.state.alamatt} onChange={this.handleFormAlamat} ></textarea>
                <div id="alamatVal"></div>
            </div>

            <label >Hobi : </label>
                {this.state.hobii.map((hobi, i)=>(<div><input className="form-check-input" type="checkbox" onChange={this.handleFormHobi} value={i}/><label className="form-check-label" >{hobi}</label></div>))}     

        <br/>
            <input type="submit" onClick={this.handleAlert} className="btn btn-info" value="Submit"/>
        </form>

<hr/>
        <div className="card">
        <h5 className="card-header">Hasil</h5>
        <div className="card-body">
            <b><p className="card-text" id="hasil">
            </p></b>
        </div>
        </div>
        <br></br>
        <br/>

        </div>
         );
    }
}
 
export default Form;

