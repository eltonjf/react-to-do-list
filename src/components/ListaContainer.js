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
    }

    render(){
        return(
            <ListaView
                tarefas={this.state.tarefas}
                novaTarefa={this.state.novaTarefa}
                onChange={this.onChange}
                addTarefa={this.addTarefa} />
        )
    }
}


const ListaView = (props) => (
    <div>
        <h1>Lista de Tarefas</h1>
        <input type="text" name="novaTarefa" value={props.novaTarefa} onChange={props.onChange} />
        <button onClick={props.addTarefa}>Add</button>
        {
            props.tarefas.map((tarefa, index) => <p>{index+1} - {tarefa}</p>)
        }
    </div>
);