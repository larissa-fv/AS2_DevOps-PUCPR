const devocionais = [
    {
        versiculo: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
        referencia: "João 3:16",
        reflexao: "Esse versículo nos lembra do imenso amor de Deus, que sacrificou Seu único Filho por nós. Tudo é sobre Ele e para Ele, e a fé em Jesus é fundamental para a vida eterna."
    },
    {
        versiculo: "O Senhor é o meu pastor; nada me faltará.",
        referencia: "Salmos 23:1",
        reflexao: "Aqui, vemos a segurança e a confiança que temos em Deus como nosso guia e provedor. Não devemos nos satisfazer com as coisas desta terra, que são passageiras; a Vida é Eterna em Cristo."
    },
    {
        versiculo: "E conhecereis a verdade, e a verdade vos libertará.",
        referencia: "João 8:32",
        reflexao: "Este versículo enfatiza a importância de conhecer a verdade que vem de Deus para a verdadeira liberdade que existe apenas em Cristo Jesus. A verdadeira liberdade não é poder fazer o que se quiser, mas sim escolher não fazer."
    },
    {
        versiculo: "Posso todas as coisas naquele que me fortalece.",
        referencia: "Filipenses 4:13",
        reflexao: "Através de Cristo, temos força para enfrentar qualquer desafio. Outro texto diz que, em nossa fraqueza, Ele se faz forte em nós, para que em tudo Cristo seja glorificado."
    },
    {
        versiculo: "E nós conhecemos e cremos no amor que Deus tem por nós.",
        referencia: "1 João 4:16",
        reflexao: "Este versículo nos encoraja a confiar no amor incondicional de Deus, que entregou Seu Filho para morrer em nosso lugar. Nossa dívida foi paga; não temos mais o que temer. Isso, porém, não nos dá o direito de viver de qualquer maneira, mas de viver uma vida que glorifique a Deus. Não seremos salvos ou reconhecidos por nossas boas obras, pois é apenas o Sangue de Cristo que nos purifica de todos os pecados."
    },
    {
        versiculo: "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a minha destra fiel.",
        referencia: "Isaías 41:10",
        reflexao: "Deus nos promete estar ao nosso lado em todos os momentos, dando-nos força e coragem. Precisamos apenas de Cristo: confessar nossos pecados a Ele, que nos salva, ama e perdoa. Cristo nos dá uma nova chance; não existem casos perdidos. Uma vez que Cristo me libertou e salvou."
    },
    {
        versiculo: "Esforça-te e tem bom ânimo; não temas, nem te espantes, porque o Senhor, teu Deus, é contigo por onde quer que andares.",
        referencia: "Josué 1:9",
        reflexao: "Este versículo nos lembra de sermos corajosos e confiantes na presença de Deus em nossas vidas."
    },
    {
        versiculo: "Bendito o Deus e Pai de nosso Senhor Jesus Cristo, que, segundo a sua muita misericórdia, nos regenerou para uma viva esperança, pela ressurreição de Jesus Cristo dentre os mortos.",
        referencia: "1 Pedro 1:3",
        reflexao: "A ressurreição de Cristo nos dá uma esperança viva e poderosa, que transforma nossas vidas. Apenas em Cristo encontramos graça e misericórdia, o amor incondicional que deu a vida por aqueles que não o amaram, mas o rejeitaram."
    },
    {
        versiculo: "Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará.",
        referencia: "Salmos 37:5",
        reflexao: "Quando entregamos nossos caminhos a Deus, podemos confiar que Ele tem um plano perfeito para nós. Seus planos sempre serão melhores do que os nossos. Viver os sonhos de Deus, no tempo de Deus, é muito melhor do que qualquer outra coisa."
    },
    {
        versiculo: "O Senhor é bom, uma fortaleza no dia da angústia, e conhece os que nele confiam.",
        referencia: "Naum 1:7",
        reflexao: "Em tempos difíceis, podemos encontrar refúgio na bondade e na força do Senhor. A Palavra de Deus diz que aqueles que clamam a Ele, Ele escuta. Converse com Deus; Ele está vivo, sempre. Ele não muda, é bom e te ama! Jesus te ama!"
    },
    {
        versiculo: "Antes, santificai a Cristo como Senhor em vossos corações; e estai sempre preparados para responder a todo aquele que vos pedir a razão da esperança que há em vós.",
        referencia: "1 Pedro 3:15",
        reflexao: "Devemos estar sempre prontos para compartilhar nossa fé e a esperança que temos em Jesus. A volta de Cristo é a nossa verdadeira esperança, pois nos promete a vida eterna e a restauração completa. Em meio a dificuldades, devemos lembrar que estamos aguardando o retorno do nosso Salvador que logo voltará para buscar aqueles que o Amam, nunca perca a Fé, nunca perca a Esperança."
    }
];

function novoVersiculo() {
    const randomIndex = Math.floor(Math.random() * devocionais.length);
    const versiculoDoDia = devocionais[randomIndex];

    document.getElementById("texto-versiculo").innerText = `"${versiculoDoDia.versiculo}" - ${versiculoDoDia.referencia}`;
    document.getElementById("reflexao").innerText = versiculoDoDia.reflexao;
}

// Carrega um versículo aleatório ao abrir a página
window.onload = novoVersiculo;
