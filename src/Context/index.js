import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

@DragDropContext(HTML5Backend)
class Context extends PureComponent {
  render() {
    return (this.props.children || null)
  }
}

Context.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Context
