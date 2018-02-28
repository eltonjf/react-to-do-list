import React from "react";

export default class ListaViewItem extends React.Component {

    constructor(props){
        super(props);
        this.state={
            edit: false,
            texto: props.tarefa
        }

        this.removeTarefa = () => {
            this.props.removeTarefa(this.props.index);
        }

        this.editTarefa = () => {
            this.props.editTarefa(this.props.index, this.state,texto);
            this.setState({edit: false});
        }

        this.abrirForm = () =>{
            this.setState({edit: true});
        }

        this.fecharForm = () => {
            this.setState({edit:false});
        }

    }

}