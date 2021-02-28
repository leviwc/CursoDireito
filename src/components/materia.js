import React, {Component} from 'react';

class Materia extends Component{

    render(){
        return(
            <div className={this.handleClassDiv()}>
                <div className="codigo">{this.props.materia.codigo}</div>
                {this.props.materia.nome}
                <br/>
                <input type="button" value="passou" className="botao passou" onClick={() => this.props.onClickBotaoPassou({id:this.props.materia.id, numero:this.props.numero})}/>  
                <input type="button" value="perdeu" className="botao perdeu" onClick={() => this.props.onClickBotaoPerdeu({id:this.props.materia.id, numero:this.props.numero})} />
            </div>

        );
    }
    handleLiberado(){
        const length=this.props.materia.dependencias.length;
        const semestre=this.props.semestres;
        const dependencia=this.props.materia.dependencias;
        let tam=0;
        for(let i=0; i<length; i++){
            if(semestre[dependencia[i].numero-1].materias[dependencia[i].id].passou===1){
                tam++;
            }
        }
        if(tam===length){
            return true;
        }else{
            return false;
        }
    }
    handleBloqueada(){
        const length=this.props.materia.dependencias.length;
        const semestre=this.props.semestres;
        const dependencia=this.props.materia.dependencias;
        let tam=false;
        for(let i=0; i<length; i++){
            if(semestre[dependencia[i].numero-1].materias[dependencia[i].id].passou===2){
                tam=true;
            }
            if(semestre[dependencia[i].numero-1].materias[dependencia[i].id].passou===4){
                tam=true;
            }
        }
        return tam;
    }
    handleClassDiv(){
        let classe="materia";
        const materia=this.props.materia;
        
        if(this.handleLiberado() && materia.passou!==3 && materia.passou!==1 && materia.passou!==2){
            this.props.onLiberado({id:this.props.materia.id, numero:this.props.numero});
        }
        if(this.handleBloqueada() && materia.passou!==4 &&materia.passou!==2){
            this.props.onBlocked({id:this.props.materia.id, numero:this.props.numero});
        }
        if(materia.passou===4 && !this.handleBloqueada()){
            this.props.onNormal({id:this.props.materia.id, numero:this.props.numero});
        }
        if(materia.passou===1){
            classe+=" passou";
        }else if(materia.passou===2){
            classe+=" perdeu";
        }else if(materia.passou===3){
            classe+=" liberada";
        }else if(materia.passou===4){
            classe+=" bloqueada";
        }
        return classe;
    }
}

export default Materia;