import { useState } from "react";

export const useBoolean = (initValue?: boolean) => {
  const [state, setState] = useState<boolean>(initValue ?? false);
  return {
    state,
    setTrue: () => setState(true),
    setFalse: () => setState(false),
    toggle: () => setState(!state),
  };
};
