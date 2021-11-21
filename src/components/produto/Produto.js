import { Card, Button } from "react-bootstrap";
import "../cards/card.css";

export default function ProdutoCard({ produto }) {
  return (
    <Card>
      <Card.Img variant="top" src={produto.image} />
      <Card.Body className="text-center">
        <Card.Subtitle>{product.name}</Card.Subtitle>
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
          {produto.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Card.Title>
        <Card.Text>
          Ou em até {produto.parcela.count}X de{" "}
          {produto.parcela.value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Card.Text>
        <Button className="green">Comprar</Button>
      </Card.Body>
    </Card>
  );
}