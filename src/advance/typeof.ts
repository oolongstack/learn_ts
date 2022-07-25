interface DefaultProps {
  name?: string;
  age?: number;
}

const defaultProps: DefaultProps = {
  name: "",
  age: 20,
};

const props = {
  ...defaultProps,
  address: "beijing",
};

/**
 * type Props = {
    address: string;
    name?: string;
    age?: number;
}
 */
type Props = typeof props;
