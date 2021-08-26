import {
  Container,
  Image,
  Inner,
  Item,
  Pane,
  SubTitle,
  Title,
} from "./Jumbotron.styles";

const Jumbotron = ({ children, direction = "row", ...restProps }) => (
  <Item {...restProps}>
    <Inner direction={direction}>{children}</Inner>
  </Item>
);

Jumbotron.Container = function JumbotronContainer({
  children,
  direction,
  ...restProps
}) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, direction, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({
  children,
  direction,
  ...restProps
}) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({
  children,
  direction,
  ...restProps
}) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};

export default Jumbotron;
