import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Velocity from 'velocity-animate';

export default class ScrollTo extends React.Component {
    static propTypes = {
        onMount: PropTypes.bool,
        scrollElement: PropTypes.obj,
        scrollPos: PropTypes.number,
        resetScroll: PropTypes.func
    }

    static defaultProps = {
        onMount: false,
        scrollElement: null,
        scrollPos: null,
        resetScroll: null
    }
    

    scrollToEl = (scrollElement, params) => {
        Velocity(ReactDOM.findDOMNode(this).getElementsByClassName(scrollElement)[0], 'scroll', params);
    }

    scrollToPos = (scrollPos, params) => {
        const formattedParams = Object.assign({offset: `${scrollPos}px`, mobileHA: false }, params);
        Velocity(
            document.getElementsByTagName('html'),
            'scroll',
            formattedParams
        );
    }

    componentDidMount() {
        const {scrollElement, onMount, scrollPos} = this.props;
        if (scrollElement && onMount) this.scrollToEl(scrollElement, {duration: 800, delay: 100});
        if (scrollPos && onMount) this.scrollToPos(scrollPos, {duration: 800, delay: 100});
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.scrollElement && nextProps.scrollElement !== this.props.scrollElement) {
            this.scrollToEl(nextProps.scrollElement, {duration: 800});
            if(nextProps.resetScroll) nextProps.resetScroll('');
        }

        if (nextProps.scrollPos && nextProps.scrollPos !== this.props.scrollPos) {
            this.scrollToPos(nextProps.scrollPos, {duration: 800});
        }
    }

    render() {
        const {children} = this.props;
        return (
            <div>
                {children}
            </div>
        )
    }
}