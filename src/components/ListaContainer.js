import React from 'react';

export default class ListaContainer extends React.Component{

    constructor(){
        super();

        this.state={
            tarefas: [],
            novaTarefa: "",
        };

        this.addTarefa = (evento) => {
            evento.preventDefault();
            const tarefas = this.state.tarefas.slice();
            tarefas.push(this.state.novaTarefa);
            this.setState({
                tarefas: tarefas,
                novaTarefa: ""
            });
        };

        this.onChange = (evento) => {
            evento.preventDefault();
            const state = Object.assign({}, this.state);
            state[evento.target.name] = evento.target.value;
            this.setState(state);
        }

        this.removeTarefa = (index) => {
            const tarefas = this.state.tarefas.slice();
            //Remove do index 1 
            tarefas.splice(index, 1);
            this.setState({tarefas});
        }

        this.editTarefa = (index, valor) => {
            const tarefas = this.state.tarefas.slice();
            tarefas[index] = valor;
            this.setState({tarefas});
        }
    }

    render(){
        return(
            <ListaView
                tarefas={this.state.tarefas}
                novaTarefa={this.state.novaTarefa}
                onChange={this.onChange}
                addTarefa={this.addTarefa} 
                removeTarefa={this.removeTarefa}/>
        )
    }
}


const ListaView = (props) => (
    <div>
        <h1>Lista de Tarefas</h1>
        <input type="text" name="novaTarefa" value={props.novaTarefa} onChange={props.onChange} />
        <button onClick={props.addTarefa}>Add</button>
        {
            props.tarefas.map((tarefa, index) => (
                <p>{
                    index+1} - {tarefa}
                    <span style={{cursor: 'pointer'}} onClick={() => props.removeTarefa(index)}> Excluir</span>
                </p>)
            )
        }
    </div>
);