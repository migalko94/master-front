import React from "react";

export const useVisible = () => {
  const [visible, setVisible] = React.useState<boolean>(true);
  return {
    visible,
    setVisible,
  };
};
