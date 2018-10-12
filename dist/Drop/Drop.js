var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import classnames from 'classnames';

var dustbinTarget = {
  drop: function drop(props, monitor, component) {
    if (monitor.didDrop()) {
      return undefined;
    }

    component.setState({
      hasDropped: true
    });

    return props.data;
  }
};

var Drop = (_dec = DropTarget(function (props) {
  return props.accepts;
}, dustbinTarget, function (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}), _dec(_class = function (_PureComponent) {
  _inherits(Drop, _PureComponent);

  function Drop() {
    _classCallCheck(this, Drop);

    return _possibleConstructorReturn(this, (Drop.__proto__ || Object.getPrototypeOf(Drop)).apply(this, arguments));
  }

  _createClass(Drop, [{
    key: 'render',
    value: function render() {
      var connectDropTarget = this.props.connectDropTarget;

      var isCustomClass = this.props.canDrop && this.props.isDropClassName;

      var isActive = this.props.isOver && this.props.canDrop;
      if (isActive) {
        isCustomClass = this.props.isActiveClassName;
      }

      return connectDropTarget && connectDropTarget(React.createElement(
        'div',
        {
          className: classnames(this.props.className, isCustomClass),
          style: this.props.style
        },
        React.Children.map(this.props.children, function (child) {
          return React.cloneElement(child);
        })
      ));
    }
  }]);

  return Drop;
}(PureComponent)) || _class);


Drop.defaultProps = {
  className: undefined,
  style: undefined,
  isActiveClassName: undefined,
  isDropClassName: undefined,

  isOver: undefined,
  canDrop: {},
  connectDropTarget: {}
};

Drop.propTypes = {
  isActiveClassName: PropTypes.string,
  isDropClassName: PropTypes.string,
  isOver: PropTypes.bool,
  canDrop: PropTypes.object,
  connectDropTarget: PropTypes.object,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Drop;