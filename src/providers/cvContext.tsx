import React, { useContext, useState } from 'react';
import { Resume } from '../types';
import EduardoLorenzo from '../data/EduardoLorenzo';

const CvContext = React.createContext<Resume>({} as Resume);

interface Props {
  children: React.ReactNode;
}

export const useCv = () => {
  return useContext(CvContext);
};

export const CvProvider = ({ children }: Props) => {
  const [cv] = useState<Resume>(EduardoLorenzo);

  return <CvContext.Provider value={cv}>{children}</CvContext.Provider>;
};
