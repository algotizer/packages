// generated with http://www.dotnetwise.com/Code/Externs/
// to regenerate from the tool:
// first include http://fb.me/react-0.13.1.js
// then https://raw.githubusercontent.com/react-bootstrap/react-bootstrap-bower/v0.20.3/react-bootstrap.js

var ReactBootstrap = {
    "Accordion": function () {},
    "Affix": function () {},
    "AffixMixin": {
        "propTypes": {
            "offset": function () {},
            "offsetTop": function () {},
            "offsetBottom": function () {}
        },
        "getInitialState": function () {},
        "getPinnedOffset": function () {},
        "checkPosition": function () {},
        "checkPositionWithEventLoop": function () {},
        "componentDidMount": function () {},
        "componentWillUnmount": function () {},
        "componentDidUpdate": function () {}
    },
    "Alert": function () {},
    "BootstrapMixin": {
        "propTypes": {
            "bsClass": function () {},
            "bsStyle": function () {},
            "bsSize": function () {}
        },
        "getBsClassSet": function () {},
        "prefixClass": function () {}
    },
    "Badge": function () {},
    "Button": function () {},
    "ButtonGroup": function () {},
    "ButtonToolbar": function () {},
    "CollapsableNav": function () {},
    "Carousel": function () {},
    "CarouselItem": function () {},
    "Col": function () {},
    "CollapsableMixin": {
        "propTypes": {
            "defaultExpanded": function () {},
            "expanded": function () {}
        },
        "getInitialState": function () {},
        "componentWillUpdate": function () {},
        "componentDidUpdate": function () {},
        "_afterWillUpdate": function () {},
        "_checkStartAnimation": function () {},
        "_checkToggleCollapsing": function () {},
        "_handleExpand": function () {},
        "_handleCollapse": function () {},
        "_addEndEventListener": function () {},
        "_removeEndEventListener": function () {},
        "dimension": function () {},
        "isExpanded": function () {},
        "getCollapsableClassSet": function () {}
    },
    "DropdownButton": function () {},
    "DropdownMenu": function () {},
    "DropdownStateMixin": {
        "getInitialState": function () {},
        "setDropdownState": function () {},
        "handleDocumentKeyUp": function () {},
        "handleDocumentClick": function () {},
        "bindRootCloseHandlers": function () {},
        "unbindRootCloseHandlers": function () {},
        "componentWillUnmount": function () {}
    },
    "FadeMixin": {
        "_fadeIn": function () {},
        "_fadeOut": function () {},
        "_handleFadeOutEnd": function () {},
        "componentDidMount": function () {},
        "componentWillUnmount": function () {}
    },
    "Glyphicon": function () {},
    "Grid": function () {},
    "Input": function () {},
    "Interpolate": function () {},
    "Jumbotron": function () {},
    "Label": function () {},
    "ListGroup": function () {},
    "ListGroupItem": function () {},
    "MenuItem": function () {},
    "Modal": function () {},
    "Nav": function () {},
    "Navbar": function () {},
    "NavItem": function () {},
    "ModalTrigger": function () {},
    "OverlayTrigger": function () {},
    "OverlayMixin": {
        "propTypes": {
            "container": function () {}
        },
        "componentWillUnmount": function () {},
        "componentDidUpdate": function () {},
        "componentDidMount": function () {},
        "_mountOverlayTarget": function () {},
        "_renderOverlay": function () {},
        "_unrenderOverlay": function () {},
        "getOverlayDOMNode": function () {},
        "getContainerDOMNode": function () {}
    },
    "PageHeader": function () {},
    "Panel": function () {},
    "PanelGroup": function () {},
    "PageItem": function () {},
    "Pager": function () {},
    "Popover": function () {},
    "ProgressBar": function () {},
    "Row": function () {},
    "SplitButton": function () {},
    "SubNav": function () {},
    "TabbedArea": function () {},
    "Table": function () {},
    "TabPane": function () {},
    "Tooltip": function () {},
    "Well": function () {},
    "constants": {
        "CLASSES": {
            "alert": {},
            "button": {},
            "button-group": {},
            "button-toolbar": {},
            "column": {},
            "input-group": {},
            "form": {},
            "glyphicon": {},
            "label": {},
            "list-group-item": {},
            "panel": {},
            "panel-group": {},
            "progress-bar": {},
            "nav": {},
            "navbar": {},
            "modal": {},
            "row": {},
            "well": {}
        },
        "STYLES": {
            "default": {},
            "primary": {},
            "success": {},
            "info": {},
            "warning": {},
            "danger": {},
            "link": {},
            "inline": {},
            "tabs": {},
            "pills": {}
        },
        "SIZES": {
            "large": {},
            "medium": {},
            "small": {},
            "xsmall": {}
        },
        "GLYPHS": {
            "0": {},
            "1": {},
            "2": {},
            "3": {},
            "4": {},
            "5": {},
            "6": {},
            "7": {},
            "8": {},
            "9": {},
            "10": {},
            "11": {},
            "12": {},
            "13": {},
            "14": {},
            "15": {},
            "16": {},
            "17": {},
            "18": {},
            "19": {},
            "20": {},
            "21": {},
            "22": {},
            "23": {},
            "24": {},
            "25": {},
            "26": {},
            "27": {},
            "28": {},
            "29": {},
            "30": {},
            "31": {},
            "32": {},
            "33": {},
            "34": {},
            "35": {},
            "36": {},
            "37": {},
            "38": {},
            "39": {},
            "40": {},
            "41": {},
            "42": {},
            "43": {},
            "44": {},
            "45": {},
            "46": {},
            "47": {},
            "48": {},
            "49": {},
            "50": {},
            "51": {},
            "52": {},
            "53": {},
            "54": {},
            "55": {},
            "56": {},
            "57": {},
            "58": {},
            "59": {},
            "60": {},
            "61": {},
            "62": {},
            "63": {},
            "64": {},
            "65": {},
            "66": {},
            "67": {},
            "68": {},
            "69": {},
            "70": {},
            "71": {},
            "72": {},
            "73": {},
            "74": {},
            "75": {},
            "76": {},
            "77": {},
            "78": {},
            "79": {},
            "80": {},
            "81": {},
            "82": {},
            "83": {},
            "84": {},
            "85": {},
            "86": {},
            "87": {},
            "88": {},
            "89": {},
            "90": {},
            "91": {},
            "92": {},
            "93": {},
            "94": {},
            "95": {},
            "96": {},
            "97": {},
            "98": {},
            "99": {},
            "100": {},
            "101": {},
            "102": {},
            "103": {},
            "104": {},
            "105": {},
            "106": {},
            "107": {},
            "108": {},
            "109": {},
            "110": {},
            "111": {},
            "112": {},
            "113": {},
            "114": {},
            "115": {},
            "116": {},
            "117": {},
            "118": {},
            "119": {},
            "120": {},
            "121": {},
            "122": {},
            "123": {},
            "124": {},
            "125": {},
            "126": {},
            "127": {},
            "128": {},
            "129": {},
            "130": {},
            "131": {},
            "132": {},
            "133": {},
            "134": {},
            "135": {},
            "136": {},
            "137": {},
            "138": {},
            "139": {},
            "140": {},
            "141": {},
            "142": {},
            "143": {},
            "144": {},
            "145": {},
            "146": {},
            "147": {},
            "148": {},
            "149": {},
            "150": {},
            "151": {},
            "152": {},
            "153": {},
            "154": {},
            "155": {},
            "156": {},
            "157": {},
            "158": {},
            "159": {},
            "160": {},
            "161": {},
            "162": {},
            "163": {},
            "164": {},
            "165": {},
            "166": {},
            "167": {},
            "168": {},
            "169": {},
            "170": {},
            "171": {},
            "172": {},
            "173": {},
            "174": {},
            "175": {},
            "176": {},
            "177": {},
            "178": {},
            "179": {},
            "180": {},
            "181": {},
            "182": {},
            "183": {},
            "184": {},
            "185": {},
            "186": {},
            "187": {},
            "188": {},
            "189": {},
            "190": {},
            "191": {},
            "192": {},
            "193": {},
            "194": {},
            "195": {},
            "196": {},
            "197": {},
            "198": {},
            "199": {},
            "200": {},
            "201": {},
            "202": {},
            "203": {},
            "204": {},
            "205": {},
            "206": {},
            "207": {},
            "208": {},
            "209": {},
            "210": {},
            "211": {},
            "212": {},
            "213": {},
            "214": {},
            "215": {},
            "216": {},
            "217": {},
            "218": {},
            "219": {},
            "220": {},
            "221": {},
            "222": {},
            "223": {},
            "224": {},
            "225": {},
            "226": {},
            "227": {},
            "228": {},
            "229": {},
            "230": {},
            "231": {},
            "232": {},
            "233": {},
            "234": {},
            "235": {},
            "236": {},
            "237": {},
            "238": {},
            "239": {},
            "240": {},
            "241": {},
            "242": {},
            "243": {},
            "244": {},
            "245": {},
            "246": {},
            "247": {},
            "248": {},
            "249": {},
            "250": {},
            "251": {},
            "252": {},
            "253": {},
            "254": {},
            "255": {},
            "256": {},
            "257": {},
            "258": {}
        }
    }
}