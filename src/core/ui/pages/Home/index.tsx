import React, { ReactElement } from 'react';
import { View } from 'react-native';

import { HomeProps } from './props';

import { Styles } from './styles';

import { TextInput } from 'react-native-paper';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';


export default function Home({ }: HomeProps): ReactElement {
  const [text, setText] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <Provider>
        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <Text>Example Modal.  Click outside this area to dismiss.</Text>
          </Modal>
        </Portal>
        <Button style={{ marginTop: 30 }} onPress={showModal}>
          Show
      </Button>
      </Provider>
  );
}
