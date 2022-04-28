import React from 'react';

const Search: React.FC = () => {
  const input = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    if (input.current) {
      input.current.focus();
    }
  }, []);
  return (
    <form>
      <input ref={input} type="type" />
    </form>
  );
};

ReactDOM.render(<Search />, document.getElementById("root"));
