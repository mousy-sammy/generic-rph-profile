export type IButton<P = {}> = React.FunctionComponent<P & IButtonProps>;
interface IButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}
