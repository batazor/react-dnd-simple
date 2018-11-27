'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDnd = require('react-dnd');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultTarget = {
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

var Drop = (_dec = (0, _reactDnd.DropTarget)(function (props) {
  return props.accepts;
}, function (props) {
  return props.customDropTarget || defaultTarget;
}, function (connect, monitor) {
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

      return connectDropTarget && connectDropTarget(_react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(this.props.className, isCustomClass),
          style: this.props.style
        },
        _react2.default.Children.map(this.props.children, function (child) {
          return _react2.default.cloneElement(child);
        })
      ));
    }
  }]);

  return Drop;
}(_react.PureComponent)) || _class);


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
  isActiveClassName: _propTypes2.default.string,
  isDropClassName: _propTypes2.default.string,
  isOver: _propTypes2.default.bool,
  canDrop: _propTypes2.default.object,
  connectDropTarget: _propTypes2.default.object,
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object
};

exports.default = Drop;