import React, { Component } from 'react';
import Semestre from './components/semestre'
import './App.css';


class App extends Component {

  state = {
    semestre: [
      {
        numero: "1", materias: [
          {
            id: "0", codigo: "DIR213", nome: "CIÊNCIA POLITICA", passou: 0, dependencias: [

            ]
          },
          {
            id: "1", codigo: "DIRA45", nome: "TEORIA DO DIREITO I", passou: 0, dependencias: [

            ]
          },
          {
            id: "2", codigo: "DIRA75", nome: "METODOLOGIA DA PESQUISA EM DIREITO", passou: 0, dependencias: [

            ]
          },
          {
            id: "3", codigo: "ECOA27", nome: "INTRODUÇÃO À ECONOMIA", passou: 0, dependencias: [

            ]
          },
          {
            id: "4", codigo: "FCH001", nome: "INTRODUÇÃO À FILOSOFIA", passou: 0, dependencias: [

            ]
          },
          {
            id: "5", codigo: "FCH007", nome: "INTRODUCAO SOCIOLOGIA II", passou: 0, dependencias: [

            ]
          }]
      },

      {
        numero: "2", materias: [
          {
            id: "0", codigo: "DIRA74", nome: "HISTÓRIA DO DIREITO", passou: 0, dependencias: [
              { id: "1", numero: "1" }
            ]
          },
          {
            id: "1", codigo: "DIRA79", nome: "TEORIA DA CONSTITUIÇÃO E ORGANIZAÇÃO DO ESTADO", passou: 0, dependencias: [
              { id: "0", numero: "1" }, { id: "1", numero: "1" }
            ]
          },
          {
            id: "2", codigo: "DIRA82", nome: "TEORIA GERAL DO DIREITO CIVIL I", passou: 0, dependencias: [
              { id: "1", numero: "1" }
            ]
          },
          {
            id: "3", codigo: "DIRA83", nome: "TEORIA DO DIREITO PENAL I", passou: 0, dependencias: [
              { id: "1", numero: "1" }
            ]
          },
          {
            id: "4", codigo: "FCH124", nome: "ANTROPOLOGIA I", passou: 0, dependencias: [

            ]
          },
          {
            id: "5", codigo: "IPSA01", nome: "PSICOLOGIA I", passou: 0, dependencias: [

            ]
          }]
      },

      {
        numero: "3", materias: [
          {
            id: "0", codigo: "DIR007", nome: "DIREITOS FUNDAMENTAIS", passou: 0, dependencias: [
              { id: "1", numero: "2" }
            ]
          },
          {
            id: "1", codigo: "DIRA80", nome: "SOCIOLOGIA JURÍDICA", passou: 0, dependencias: [
              { id: "1", numero: "1" }, { id: "5", numero: "1" }
            ]
          },
          {
            id: "2", codigo: "DIRA84", nome: "DIREITO CONSTITUCIONAL", passou: 0, dependencias: [
              { id: "1", numero: "2" }
            ]
          },
          {
            id: "3", codigo: "DIRA86", nome: "TEORIA GERAL DO DIREITO CIVIL II", passou: 0, dependencias: [
              { id: "2", numero: "2" }
            ]
          },
          {
            id: "4", codigo: "DIRA88", nome: "TEORIA DO DIREITO PENAL II", passou: 0, dependencias: [
              { id: "3", numero: "2" }
            ]
          },
          {
            id: "5", codigo: "DIRA89", nome: "CIÊNCIA DAS FINANÇAS E DIREITO FINANCEIRO", passou: 0, dependencias: [
              { id: "1", numero: "2" }
            ]
          }]
      },

      {
        numero: "4", materias: [
          {
            id: "0", codigo: "DIR030", nome: "TEORIA GERAL DO PROCESSO", passou: 0, dependencias: [
              { id: "2", numero: "3" }
            ]
          },
          {
            id: "1", codigo: "DIR031", nome: "DIREITO ADMINISTRATIVO I", passou: 0, dependencias: [
              { id: "2", numero: "3" }
            ]
          },
          {
            id: "2", codigo: "DIR192", nome: "DIREITOS REAIS I", passou: 0, dependencias: [
              { id: "3", numero: "3" }
            ]
          },
          {
            id: "3", codigo: "DIR194", nome: "DIREITO PENAL III", passou: 0, dependencias: [
              { id: "4", numero: "3" }
            ]
          },
          {
            id: "4", codigo: "DIRA85", nome: "FILOSOFIA DO DIREITO", passou: 0, dependencias: [
              { id: "0", numero: "3" }, { id: "4", numero: "1" }
            ]
          },
          {
            id: "5", codigo: "DIRA90", nome: "DIREITO DAS OBRIGAÇÕES I", passou: 0, dependencias: [
              { id: "3", numero: "3" }
            ]
          }]
      },

      {
        numero: "5", materias: [
          {
            id: "0", codigo: "DIR032", nome: "DIREITO ADMINISTRATIVO II", passou: 0, dependencias: [
              { id: "1", numero: "4" }
            ]
          },
          {
            id: "1", codigo: "DIR035", nome: "DIREITO TRIBUTARIO I", passou: 0, dependencias: [
              { id: "5", numero: "4" }
            ]
          },
          {
            id: "2", codigo: "DIR038", nome: "DIREITO PROCESSUAL CIVIL I", passou: 0, dependencias: [
              { id: "0", numero: "4" }
            ]
          },
          {
            id: "3", codigo: "DIR046", nome: "DIREITO INTERNACIONAL PÚBLICO", passou: 0, dependencias: [
              { id: "1", numero: "4" }
            ]
          },
          {
            id: "4", codigo: "DIR195", nome: "DIREITO PENAL IV", passou: 0, dependencias: [
              { id: "3", numero: "4" }
            ]
          },
          {
            id: "5", codigo: "DIRA91", nome: "DIREITO DAS OBRIGAÇÕES II", passou: 0, dependencias: [
              { id: "5", numero: "4" }
            ]
          }]
      },

      {
        numero: "6", materias: [
          {
            id: "0", codigo: "DIR036", nome: "DIREITO TRIBUTARIO II", passou: 0, dependencias: [
              { id: "1", numero: "5" }
            ]
          },
          {
            id: "1", codigo: "DIR039", nome: "DIREITO PROCESSUAL CIVIL II-A", passou: 0, dependencias: [
              { id: "2", numero: "5" }
            ]
          },
          {
            id: "2", codigo: "DIR043", nome: "DIREITO DO TRABALHO I", passou: 0, dependencias: [
              { id: "5", numero: "5" }
            ]
          },
          {
            id: "3", codigo: "DIR049", nome: "DIREITO PROCESSUAL PENAL I-A", passou: 0, dependencias: [
              { id: "2", numero: "5" }
            ]
          },
          {
            id: "4", codigo: "DIR190", nome: "HERMENÊUTICA JURIDICA", passou: 0, dependencias: [
              { id: "4", numero: "4" }
            ]
          },
          {
            id: "5", codigo: "DIRA92", nome: "CONTRATOS", passou: 0, dependencias: [
              { id: "5", numero: "5" }
            ]
          }]
      },

      {
        numero: "7", materias: [
          {
            id: "0", codigo: "DIR015", nome: "DIREITO DE FAMíLIA", passou: 0, dependencias: [
              { id: "5", numero: "5" }
            ]
          },
          {
            id: "1", codigo: "DIR040", nome: "DIREITO PROCESSUAL CIVIL III-A", passou: 0, dependencias: [
              { id: "1", numero: "6" }
            ]
          },
          {
            id: "2", codigo: "DIR044", nome: "DIREITO PROCESSUAL DO TRABALHO I", passou: 0, dependencias: [
              { id: "1", numero: "6" }, { id: "2", numero: "6" }
            ]
          },
          {
            id: "3", codigo: "DIR050", nome: "DIREITO PROCESSUAL PENAL II-A", passou: 0, dependencias: [
              { id: "3", numero: "6" }
            ]
          },
          {
            id: "4", codigo: "DIRA93", nome: "PRÁTICA JURÍDICA CÍVEL I", passou: 0, dependencias: [
              { id: "1", numero: "6" }
            ]
          },
          {
            id: "5", codigo: "DIRA95", nome: "DIREITO EMPRESARIAL", passou: 0, dependencias: [
              { id: "5", numero: "6" }
            ]
          }]
      },

      {
        numero: "8", materias: [
          {
            id: "0", codigo: "DIR016", nome: "DIREITO DAS SUCESSÕES", passou: 0, dependencias: [
              { id: "0", numero: "7" }
            ]
          },
          {
            id: "1", codigo: "DIR041", nome: "DIREITO PROCESSUAL CIVIL IV", passou: 0, dependencias: [
              { id: "1", numero: "7" }
            ]
          },
          {
            id: "2", codigo: "DIR045", nome: "DIREITO COLETIVO DO TRABALHO E SINDICAL", passou: 0, dependencias: [
              { id: "2", numero: "7" }
            ]
          },
          {
            id: "3", codigo: "DIRA76", nome: "DIREITO SOCIETÁRIO", passou: 0, dependencias: [
              { id: "5", numero: "7" }
            ]
          },
          {
            id: "4", codigo: "DIRA94", nome: "PRÁTICA JURÍDICA CÍVEL II", passou: 0, dependencias: [
              { id: "4", numero: "7" }
            ]
          },
          {
            id: "5", codigo: "DIRA96", nome: "TRABALHO DE CONCLUSÃO DE CURSO I", passou: 0, dependencias: [
              { id: "1", numero: "7" }
            ]
          }]
      },

      {
        numero: "9", materias: [
          {
            id: "0", codigo: "DIR034", nome: "DIREITO AMBIENTAL", passou: 0, dependencias: [
              { id: "0", numero: "5" }
            ]
          },
          {
            id: "1", codigo: "DIR189", nome: "ETICA GERAL E PROFISSIONAL", passou: 0, dependencias: [
              { id: "4", numero: "8" }
            ]
          },
          {
            id: "2", codigo: "DIRA78", nome: "PRÁTICA JURÍDICA TRABALHISTA", passou: 0, dependencias: [
              { id: "2", numero: "8" }
            ]
          },
          {
            id: "3", codigo: "DIRA97", nome: "TRABALHO DE CONCLUSÃO DE CURSO II", passou: 0, dependencias: [
              { id: "5", numero: "8" }
            ]
          }]
      },

      {
        numero: "10", materias: [
          {
            id: "0", codigo: "DIRA77", nome: "PRÁTICA JURÍDICA PENAL", passou: 0, dependencias: [
              { id: "3", numero: "7" }
            ]
          }]
      }

    ]






  }


  render() {
    return (
      <div>
        <div className="linha">
          {this.state.semestre.map(semestre => {
            return <Semestre key={semestre.numero} onNormal={this.onNormal} onBlocked={this.onBlocked} onLiberado={this.onLiberado} semestre={semestre} semestres={this.state.semestre} onClickBotaoPassou={this.onClickBotaoPassou} onClickBotaoPerdeu={this.onClickBotaoPerdeu} />
          })}
        </div>
        <div className="linha">
          <div className="legenda">
            verde fraco= liberada, verde forte=passou, vermelhor forte=perdeu, vermelho fraco=trancada;
          </div>
        </div>
      </div>
    );
  }
  onBlocked = (event) => {
    let semestre = this.state.semestre;
    const materia = semestre[event.numero - 1].materias[event.id];
    semestre[event.numero - 1].materias[event.id].passou = 4;

    this.setState({ semestre });
  }
  onNormal = (event) => {
    let semestre = this.state.semestre;
    const materia = semestre[event.numero - 1].materias[event.id];
    semestre[event.numero - 1].materias[event.id].passou = 0;

    this.setState({ semestre });
  }
  onLiberado = (event) => {
    let semestre = this.state.semestre;
    const materia = semestre[event.numero - 1].materias[event.id];
    semestre[event.numero - 1].materias[event.id].passou = 3;

    this.setState({ semestre });
  }
  onClickBotaoPassou = (event) => {
    let semestre = this.state.semestre;
    const materia = semestre[event.numero - 1].materias[event.id];
    semestre[event.numero - 1].materias[event.id].passou = 1;
    materia.dependencias.map((content) => {
      this.onClickBotaoPassou(content);
    });
    this.setState({ semestre });
  }
  onClickBotaoPerdeu = (event) => {
    let semestre = this.state.semestre;
    semestre[event.numero - 1].materias[event.id].passou = 2;
    this.setState({ semestre });
  }

}

export default App;
