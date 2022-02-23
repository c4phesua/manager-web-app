import { Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Popover } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { next } from '../util/Count';

const ORIGIN = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right',
};

function getExpansion(vertical, horizontal) {
  const expansion = {
    anchorOrigin: {
      vertical,
      horizontal,
    },
    transformOrigin: {
      horizontal,
    },
  };
  const { transformOrigin } = expansion;
  const { top, bottom } = ORIGIN;

  if (vertical === bottom) {
    transformOrigin.vertical = top;
  }

  if (vertical === top) {
    transformOrigin.vertical = bottom;
  }

  return expansion;
}

class DropDown extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      open: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  handleClick(event) {
    console.log('click');
    this.setState({ anchorEl: event.currentTarget });
    this.toggle();
  }

  toggle() {
    this.setState((prevState) => ({ open: !prevState.open }));
  }

  render() {
    const {
      button,
      menuItems,
      children,
      renderAnchorElement = () => null,
      expandOrigin,
      expandDirection,
      className,
      ...other
    } = this.props;

    const {
      anchorEl,
      open,
    } = this.state;

    const id = open ? 'simple-popover' : undefined;

    return (
      <>
        {renderAnchorElement({
          onClick: this.handleClick,
          ...other,
        })}
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={this.toggle}
          className={className || ''}
          {...getExpansion(expandOrigin, expandDirection)}
        >
          <List component="nav">
            {menuItems && menuItems.map(({ name, link, icon, divider, header }) => {
              if (divider) {
                return <Divider key={next()} />;
              }

              if (header) {
                return (
                  <ListSubheader key={next()} component="div">
                    {header}
                  </ListSubheader>
                );
              }

              if (link) {
                return (
                  <ListItem key={next()} button component="a" href={link}>
                    {icon && (
                      <ListItemIcon className="dropdown-menu-item-icon">
                        {icon}
                      </ListItemIcon>
                    )}
                    <ListItemText primary={name} />
                  </ListItem>
                );
              }

              return null;
            })}
            {children}
          </List>
        </Popover>
      </>
    );
  }
}

DropDown.propTypes = {
  button: PropTypes.any,
  menuItems: PropTypes.array,
  children: PropTypes.any,
  renderAnchorElement: PropTypes.func,
  expandOrigin: PropTypes.oneOf([ORIGIN.top, ORIGIN.bottom]),
  expandDirection: PropTypes.oneOf([ORIGIN.left, ORIGIN.right]),
  className: PropTypes.string,
};

DropDown.defaultProps = {
  expandOrigin: ORIGIN.bottom,
  expandDirection: ORIGIN.left,
};

export default DropDown;
