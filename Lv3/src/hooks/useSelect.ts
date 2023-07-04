import { Dispatch, SetStateAction, useState } from "react";

const useSelect = (list: string[]): [string, string[], Dispatch<SetStateAction<string>>] => {
  const [selectList] = useState<string[]>([...list]);
  const [select, setSelect] = useState<string>(selectList[0]);

  return [select, selectList, setSelect];
};
export default useSelect;
