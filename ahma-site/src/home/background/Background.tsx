interface Props {
  children: React.ReactNode;
}

export const Background = ({ children }: Props) => {
  return (
    <div className="site-background">{children}</div>
  );
};
