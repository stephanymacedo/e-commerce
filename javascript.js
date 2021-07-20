const items = [
    {
      id: 0,
      nome: " Kit SOS Hidratação Turbinada - 3 Itens",
      valor:"R$ 55,17",
      img: "img/img1.jpg",
      quantidade: 0,
    },

    {
      id: 1,
      nome: " Kit SOS Bomba Antiqueda - 4 Itens",
      valor:"R$ 57,79",
      img: "img/img2.jpg",
      quantidade: 0,
    },

    {
      id: 2,
      nome: "Kit to de cacho Babosa - 4 Itens ",
      valor:"R$ 78,84",
      img: "img/img3.jpg",
      quantidade: 0,
    },

    {
      id: 3,
      nome: "Kit Meu Liso Ondulado - 4 Itens",
      valor:"R$ 31,95 ",
      img: "img/img4.jpg",
      quantidade: 0,
    },

    {
        id: 4,
        nome: "Kit SOS Cachos Coco one - 3 Itens",
        valor:"R$ 87,92",
        img: "img/img5.jpg",
        quantidade: 0,
      },

      {
        id: 5,
        nome: " SOS Cachos Arginina one - 1 Item",
        valor:"R$ 35,99 ",
        img: "img/img6.jpg",
        quantidade: 0,
      },

      {
        id:6 ,
        nome: "Kit turbinado SOS Bomba - 3 Itens ",
        valor:"R$ 82,93 ",
        img: "img/img7.jpg",
        quantidade: 0,
      },

      {
        id: 7,
        nome: "Kit SOS Cachos Poderosos - 3 Itens",
        valor:"R$ 55,37 ",
        img: "img/img8.jpeg",
        quantidade: 0,
      },
  ];

  inicializarLoja = () => {
    var containerProdutos = document.getElementById("produtos");
    items.map((val) => {
      containerProdutos.innerHTML +=
        `
           <div class= "produto-single">
            <img src = "`+val.img +`"/>
            <p>`+val.nome +`</p>
            <p>`+val.valor +`</p>
            <a key="`+val.id +`" href="#">Adicionar ao carrinho!<a/>
            </div>
           `;
    });
  };

  inicializarLoja();

  atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById("carrinho");
    containerCarrinho.innerHTML = "";
    items.map((val) => {
      if (val.quantidade > 0) {
        containerCarrinho.innerHTML +=`
           <div class="info-single-checkout">
           <p style="float:left;">Produto:  `+val.nome+` </p>
           <p style="float:right;">Quantidade:  `+val.quantidade +`</p>
           <div style="clear:both"></div>
         
           </div>
           `;
      }
    });
  };

  var links = document.getElementsByTagName("a");

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      let key = this.getAttribute("key");
      items[key].quantidade++;
      atualizarCarrinho();
      return false;
    });
  }

  /* cadastro clientes */

  function cadastrar() {

    
    
    let nome = document.querySelector('#nome').value
    let email = document.querySelector('#email').value
    let telefone = document.querySelector('#telefone').value
    let cpf = document.querySelector('#cpf').value
    let endereco = document.querySelector('#endereco').value
    let numero = document.querySelector('#numero').value
    let complemento = document.querySelector('#complemento').value
    let bairro = document.querySelector('#bairro').value
    let cep = document.querySelector('#cep').value
    let cidade = document.querySelector('#cidade').value
    let uf = document.querySelector('#estado').value
    
    let data = {
    
        nome,
        email,
        telefone,
        cpf,
        endereco,
        numero,
        complemento,
        bairro,
        cep,
        cidade,
        uf
    }
    
    let convertData = JSON.stringify(data);
    
    
        if (localStorage.idAtual) {
            localStorage.idAtual = Number(localStorage.idAtual) + 1;
            localStorage.setItem(`cliente_id: ${localStorage.idAtual}`, convertData);
        } else {
            localStorage.idAtual = 1;
            localStorage.setItem(`cliente_id: ${localStorage.idAtual}`, convertData);
          }
          alert('Cliente cadastrado!');
          document.getElementById("formCliente").reset();
    
    }