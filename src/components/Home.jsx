import React, { Component } from 'react'

export default class Index extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="col-md-12">
                    <br />
                    <div className="row">
                        <div className="col-md-7">
                            <img className="home_logo"
                              alt="starwars"
                              src='http://www.revistaestante.fnac.pt/wp-content/uploads/2015/11/star-wars-estante-fnac.jpg'></img>
                        </div>
                        <div className="col-md-4">
                        <h3>Star Wars</h3>

                            <p align="justify">
                                Star Wars é uma franquia do tipo space opera estadunidense criada pelo cineasta George Lucas que conta com uma série de oito filmes de fantasia científica e dois spin-offs. O primeiro filme foi lançado apenas com o título Star Wars em 25 de maio de 1977, e tornou-se um fenômeno mundial inesperado de cultura popular, sendo responsável pelo início da "era dos blockbusters": Super produções cinematográficas que fazem sucesso nas bilheterias e viram franquias com brinquedos, jogos, livros, etc. Foi seguido por duas sequências, The Empire Strikes Back e Return of the Jedi, lançadas com intervalos de três anos. Esta primeira trilogia segue o trio icônico: Luke Skywalker, Han Solo e Princesa Leia, que luta na Aliança Rebelde para derrubar o tirano Império Galáctico; paralelamente ocorre a jornada de Luke para se tornar um cavaleiro Jedi e a luta contra Darth Vader, um ex-Jedi que sucumbiu ao Lado Sombrio da Força e ao Imperador.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}