# react-dnd-simple

Wrapper over react-dnd

### Usage

```js
import { Context, Drag, Drop } from 'react-dnd-simple'

// ...code
<Context>

  <Drag
    type="owner"
    data={{ _id: item._id }}
    className={s.Card}
    isDragClassName={s.isDragClassName}

    onDnD={onDnD}
    style={{ ...style }}
  >
    <div>
      {item[dataKey]}
    </div>
  </Drag>

  <Drop
    accepts={['owner']}
    data={{ _id: item._id }}
    isActiveClassName={s.isActiveContainer}
    isDropClassName={s.isDropClassNameContainer}
    style={{ ...style }}
  >
    <div>
      {item[dataKey]}
    </div>
  </Drop>
</Context>
```
