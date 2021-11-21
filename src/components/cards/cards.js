import { Component } from "react";
import ProdutoCard from "../cards/card";

export default class SecaoProdutos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produtoList: [],
    };
  }

  onFalhaCarregamento(error) {
    console.log(error);
  }

  componentDidMount() {
    fetch("http://localhost:8080/produto")
      .then((response) => response.json(), this.onFalhaCarregamento)
      .then((json) => this.setState({ produtoList: json }), this.onFalhaCarregamento);
  }

  render() {
    return (
      <Container>
        <h4>Produtos</h4>
        <Row xs={1} md={4} className="g-4">
          {this.state.produtoList.map(function (produto) {
            return (
              <Col>
                <ProdutoCard produto={produto} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}