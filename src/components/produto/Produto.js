import { Card, Button } from "react-bootstrap";

export default function ProdutoCard({ produto }) {
  return (
    <Card>
      <Card.Img variant="top" src={produto.image} />
      <Card.Body className="text-center">
        <Card.Subtitle>{produto.name}</Card.Subtitle>
        <Card.Text className="text-muted">
          <del>
            {produto.oldPrice.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </del>
        </Card.Text>
        <Card.Title className="green">
          por{" "}
          {produto.valorParcela.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Card.Title>
        <Card.Text>
          Ou em até {produto.parcela.count}X de{" "}
          {produto.parcela.valor.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Card.Text>
        <Button className="green">Comprar</Button>
      </Card.Body>
    </Card>
  );
}