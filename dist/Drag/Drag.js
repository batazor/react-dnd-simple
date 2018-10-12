'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

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

var boxSource = {
  beginDrag: function beginDrag(props) {
    props.onDrag && props.onDrag(props.data);

    return props.data;
  },
  endDrag: function endDrag(props, monitor) {
    if (!monitor.didDrop()) {
      return;
    }

    var item = monitor.getItem();
    var dropResult = monitor.getDropResult();

    props.onDrop && props.onDrop(dropResult);
    props.onDnD && props.onDnD({
      drag: item,
      drop: dropResult
    });
  }
};

var Drag = (_dec = (0, _reactDnd.DragSource)(function (props) {
  return props.type;
}, boxSource, function (connect, monitor) {
  return {
    isDragging: monitor.isDragging(),
    connectDragSource: connect.dragSource()
  };
}), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(Drag, _PureComponent);

  function Drag() {
    _classCallCheck(this, Drag);

    return _possibleConstructorReturn(this, (Drag.__proto__ || Object.getPrototypeOf(Drag)).apply(this, arguments));
  }

  _createClass(Drag, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isDragging = _props.isDragging,
          connectDragSource = _props.connectDragSource,
          data = _props.data,
          _onClick = _props.onClick;


      var isDragClassName = isDragging && this.props.isDragClassName;

      return connectDragSource && connectDragSource(_react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(this.props.className, isDragClassName),
          style: this.props.style,
          onClick: function onClick() {
            return _onClick(data.indexRow);
          },
          onKeyPress: function onKeyPress() {
            return _onClick(data.indexRow);
          }
        },
        this.props.children
      ));
    }
  }]);

  return Drag;
}(_react.PureComponent), _class2.propTypes = {
  isDragging: _propTypes2.default.bool.isRequired,
  connectDragSource: _propTypes2.default.func.isRequired,
  isDragClassName: _propTypes2.default.string,

  data: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,

  onClick: _propTypes2.default.func
}, _class2.defaultProps = {
  className: undefined,
  style: undefined,
  isDragClassName: undefined,

  onClick: function onClick() {}
}, _temp)) || _class);
exports.default = Drag;