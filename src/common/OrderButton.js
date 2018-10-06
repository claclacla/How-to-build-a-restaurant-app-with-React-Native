import React from 'react';
import { Button } from 'react-native';

const OrderButton = function ({ navigate }) { 
  return (
    <Button
      onPress={() => navigate('Order')}
      title="Order"
    />
  );
}

export default OrderButton;