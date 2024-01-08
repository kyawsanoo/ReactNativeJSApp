import { Appbar } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';

function AppBar({ navigation, route, options, back }) {
    const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
       {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}

export default AppBar;