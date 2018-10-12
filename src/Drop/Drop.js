import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'
import classnames from 'classnames'

const dustbinTarget = {
  drop(props, monitor, component) {
    if (monitor.didDrop()) {
      return undefined
    }

    component.setState({
      hasDropped: true,
    })

    return props.data
  },
}

@DropTarget(props => props.accepts, dustbinTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))
class Drop extends PureComponent {
  render() {
    const { connectDropTarget } = this.props
    let isCustomClass = this.props.canDrop && this.props.isDropClassName

    const isActive = this.props.isOver && this.props.canDrop
    if (isActive) { isCustomClass = this.props.isActiveClassName }

    return connectDropTarget && connectDropTarget((
      <div
        className={classnames(this.props.className, isCustomClass)}
        style={this.props.style}
      >
        {
          React.Children.map(this.props.children, child => React.cloneElement(child))
        }
      </div>
    ))
  }
}

Drop.defaultProps = {
  className: undefined,
  style: undefined,
  isActiveClassName: undefined,
  isDropClassName: undefined,

  isOver: undefined,
  canDrop: {},
  connectDropTarget: {},
}

Drop.propTypes = {
  isActiveClassName: PropTypes.string,
  isDropClassName: PropTypes.string,
  isOver: PropTypes.bool,
  canDrop: PropTypes.object,
  connectDropTarget: PropTypes.object,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default Drop
