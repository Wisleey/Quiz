import React, {Component} from 'react'


class Equipe extends Component{
    render(){
        return(
            <div>
                <Sobre nome = {this.props.nome} 
                       cargo= {this.props.cargo}
                       idade= {this.props.idade}/>

                
                <Social
                fb= {this.props.facebook}
                lk= {this.props.linkedin}
                yt= {this.props.Youtube}
               
                
                />
                       

            <hr/>              
            </div>

        );
    }


}

class Sobre extends Component{
    render(){
        return(
            <div>
                <h2> Ola Eu Me Chamo  
                    {this.props.nome} </h2>
                <h2>Cargo:
                    {this.props.cargo}</h2> 
                <h3>Idade: 
                    {this.props.idade} Anos</h3>

            </div>
        )
    }
}

const Social = (props) => {
    return(
        <div>
            <a href={props.fb}>Facebook </a>
            <a href={props.lk}>Linkedin </a>
            <a href={props.yt}>Youtube </a>
        </div>
    )
}

function Curso(){
    return(
        <div>
          
    
            <h1> Conheça nossa Equipe </h1>
            <Equipe nome=" Wisley" 
                    cargo = " Programador"
                    idade=" 27"
                    facebook="https://facebook.com"
                    linkedin= "https://google.com"
                    Youtube="https://youtube.com"
                    />
                    

          
            <Equipe nome=" Gabriela" 
                    cargo = " Advogada"
                    idade=" 22"
                    facebook="https://facebook.com"
                    linkedin= "https://www.linkedin.com/"
                    Youtube="https://youtube.com"/>

            <Equipe nome= " Lucas"
                    cargo= " Jogador De Futebol"
                    idade= " 12"/>
        </div>
    )
}

export default Curso