import React,{Component} from 'react';
import Materia from './materia';

class Semestre extends Component{
    
    render(){
        
        return(
            <div className="semestre">
                <div className="semestreTag">Semestre {this.props.semestre.numero}</div> 
                {this.props.semestre.materias.map( materia =>{
                    return <Materia key= {materia.id} onNormal= {this.props.onNormal} onBlocked={this.props.onBlocked} onLiberado={this.props.onLiberado}  materia={materia} semestres={this.props.semestres} numero={this.props.semestre.numero} onClickBotaoPassou={this.props.onClickBotaoPassou} onClickBotaoPerdeu={this.props.onClickBotaoPerdeu}/>
                })}       
            </div>
        );
    }
}
export default Semestre;