interface Props {
  children: React.ReactNode;
}

export const Background = ({ children }: Props) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 bg-fixed" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
