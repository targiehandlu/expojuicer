import React from 'react';

import { connect } from 'react-redux';
import compose from 'recompose/compose';

import {
  MenuItemLink,
  translate,
  userLogout as userLogoutAction
} from 'admin-on-rest';

import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/svg-icons/action/power-settings-new';

class Logout extends React.Component {
  logout = () => {
    const { userLogout } = this.props;
    userLogout({});
  };

  render() {
    const { translate, icon } = this.props;

    if (icon) {
      return (
        <IconButton>
          <Icon color="#ffffff" onClick={this.logout} />
        </IconButton>
      );
    }

    return (
      <MenuItemLink
        to="/login?bye"
        primaryText={translate('pos.logout')}
        onClick={this.logout}
        leftIcon={<Icon />}
      />
    );
  }
}

const enhance = compose(
  connect(null, { userLogout: userLogoutAction }),
  translate
);

export default enhance(Logout);
