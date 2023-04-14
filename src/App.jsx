import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Card from "./Card";
import Cards from "./Cards"

import reactLogo from './imagens/react.jfif'
import nodeLogo from './imagens/node.jfif'
import Counter from "./Counter";


function App() {
    const [page, setPage] = useState()

    function handleChangePages(page){
        setPage(page)
    }

    return (
        <>
            <Header titulo="Hello World!" subtitulo="Subtitulo"></Header>
            <p>{page}</p>
            <button onClick={handleChangePages('articles')}>Articles</button>
            <button onClick={handleChangePages('counter')}>Counter</button>
            <Content>
                <h2>Título</h2>
                <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
                <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
                <Cards>
                    <Card
                        img={reactLogo}
                        titulo="React"
                        texto="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica"
                    />
                    <Card
                        img={nodeLogo}
                        titulo="Node"
                        texto="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica"
                    />
                </Cards>
            </Content>
            <Counter/>

        </>
    )
}
export default App