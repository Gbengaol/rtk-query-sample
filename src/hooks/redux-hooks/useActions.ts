import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store";
import actionCreators from "../../store/action-creators";

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  return useMemo(() => {
    return bindActionCreators(actionCreators, dispatch);
  }, [dispatch]);
};
