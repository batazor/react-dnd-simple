import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'
import classnames from 'classnames'

const boxSource = {
  beginDrag(props) {
    props.onDrag && props.onDrag(props.data)

    return props.data
  },

  endDrag(props, monitor) {
    if (!monitor.didDrop()) { return }

    const item = monitor.getItem()
    const dropResult = monitor.getDropResult()

    props.onDrop && props.onDrop(dropResult)
    props.onDnD && props.onDnD({
      drag: item,
      drop: dropResult,
    })
  },
}

@DragSource(props => props.type, boxSource, (connect, monitor) => ({
  isDragging: monitor.isDragging(),
  connectDragSource: connect.dragSource(),
}))
class Drag extends PureComponent {
  static propTypes = {
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    isDragClassName: PropTypes.string,

    data: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,

    onClick: PropTypes.func,
  };

  static defaultProps = {
    className: undefined,
    style: undefined,
    isDragClassName: undefined,

    onClick: () => {},
  };

  render() {
    const {
      isDragging,
      connectDragSource,
      data,

      onClick,
    } = this.props

    const isDragClassName = isDragging && this.props.isDragClassName

    return (
      connectDragSource && connectDragSource((
        <div
          className={classnames(this.props.className, isDragClassName)}
          style={this.props.style}
          onClick={() => onClick(data.indexRow)}
          onKeyPress={() => onClick(data.indexRow)}
        >
          {this.props.children}
        </div>
      ))
    )
  }
}

export default Drag
