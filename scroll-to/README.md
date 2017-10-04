## ScrollTo
#### A simple wrapper component to allow for triggered scrolling to an element.

Reacts to initial and changing of props to work within a redux project. 
```
import ScrollTo from './scroll-to-element'

...
          <ScrollTo 
            scrollElement={scrollEl}
            resetScroll={this.resetScroll}
          >
            <div>
            ...</div>
          </ScrollTo>

         <ScrollTo 
            scrollPos={100}
            resetScroll={this.resetScroll}
          >
            <div>
            ...</div>
          </ScrollTo>
```

## PropTypes:
```
{
    scrollElement: PropTypes.string // optional
    scrollPos: PropTypes.number
    resetScroll: PropTypes.func // optional
}

either scrollElement or scrollPos should be passed.
```

### Scroll to: Element:
To scroll to an element pass in an identifiying class (unique). 
```
         <ScrollTo 
            scrollElement={'bottom-element'}
            resetScroll={this.resetScroll}
          >
          <div>
            ...
            ...
            <div className='bottom-element'>
            </div>
        </ScrollTo>
```

### Scroll to: Position:
To scroll to a specific position within the window object pass in the desired scroll offset (e.g. 1200) - represented in px. * See 'to-do'

```
         <ScrollTo 
            scrollPos={1000}
            resetScroll={this.resetScroll}
          >
          <div>
            ...
            ...
          </div>
        </ScrollTo>
```

### To-Do:
-   Add ability to change measurements (em, vh...)