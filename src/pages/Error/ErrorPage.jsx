import React from 'react';
import { Text, Icon } from '@chakra-ui/react';
import { TbError404Off } from "react-icons/tb";
import css from '../AllPage.module.css';

const ErrorPage = () => {
  return (
    <div className={css.container}>
      <Text>Oops, nothing here...</Text>
      <Icon as={TbError404Off} w={20} h={20} color='red.500' />
    </div>
  );
};

export default ErrorPage;
