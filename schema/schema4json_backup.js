// JSON2Schema
// File for ID 'schema_id': jsoneditor_app/schema/schema4json.js
// created with JSON2Schema: https://niehausbert.gitlab.io/JSON2Schema

vDataJSON.schema4json =  {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "additionalProperties": true,
    "title": "CSV2Chart",
    "definitions": {
        "comment": {
            "title": "Comment:",
            "type": "string",
            "format": "textarea",
            "default": ""
        },
        "yesno": {
            "default": "yes",
            "type": "string",
            "enum": [
                "yes",
                "no"
            ]
        }
    },
    "type": "object",
    "id": "https://niebert.github.io/json-editor",
    "options": {
        "disable_collapse": false,
        "disable_edit_json": false,
        "disable_properties": false,
        "collapsed": false,
        "hidden": false
    },
    "defaultProperties": [
        "type",
        "linewidth",
        "interpolate",
        "showSymbols",
        "width",
        "height",
        "colorpalette",
        "colors",
        "showValues",
        "xAxisAngle",
        "axis",
        "data"
    ],
    "properties": {
        "type": {
            "type": "string",
            "id": "/properties/type",
            "title": "Type",
            "default": "line",
            "enum": [
                "line",
                "area"
            ],
            "format": "text",
            "description": "Description for 'type' Type: 'string' Path: '/properties/type'",
            "options": {
                "hidden": false
            },
            "propertyOrder": 10
        },
        "linewidth": {
            "type": "integer",
            "id": "/properties/linewidth",
            "title": "Linewidth",
            "default": 1,
            "description": "A description for 'linewidth'  Type: 'integer'",
            "options": {
                "hidden": false
            },
            "propertyOrder": 20
        },
        "interpolate": {
            "type": "string",
            "id": "/properties/interpolate",
            "title": "Interpolate",
            "default": "line",
            "enum": [
                "line",
                "curve",
                "none"
            ],
            "format": "text",
            "description": "Description for 'interpolate' Type: 'string' Path: '/properties/interpolate'",
            "options": {
                "hidden": false
            },
            "propertyOrder": 30
        },
        "showSymbols": {
            "type": "string",
            "id": "/properties/showSymbols",
            "title": "ShowSymbols",
            "enum": [
                "yes",
                "no"
            ],
            "default": "yes",
            "format": "text",
            "description": "Description for 'showSymbols' Type: 'string' Path: '/properties/showSymbols'",
            "options": {
                "hidden": false
            },
            "propertyOrder": 40
        },
        "width": {
            "type": "integer",
            "id": "/properties/width",
            "title": "Width",
            "default": 600,
            "description": "A description for 'width'  Type: 'integer'",
            "options": {
                "hidden": false
            },
            "propertyOrder": 50
        },
        "height": {
            "type": "integer",
            "id": "/properties/height",
            "title": "Height",
            "default": 480,
            "description": "A description for 'height'  Type: 'integer'",
            "options": {
                "hidden": false
            },
            "propertyOrder": 60
        },
        "colorpalette": {
            "type": "string",
            "id": "/properties/colorpalette",
            "title": "Colorpalette",
            "default": "user-defined",
            "enum": [
                "default",
                "user-defined"
            ],
            "format": "text",
            "description": "Defines the 'colorpalette' for the curves in the graph. If set to 'default' the colors for the data column are ignored",
            "options": {
                "hidden": false
            },
            "propertyOrder": 70
        },
        "colors": {
            "type": "string",
            "id": "/properties/colors",
            "title": "Colors",
            "default": "red,blue,green,black,yellow,#c0c0c0",
            "format": "text",
            "description": "Hidden Comma Separated Values of 'colors' aggregated from the curve colors before export - Type: 'string' Path: '/properties/colors'",
            "options": {
                "hidden": false
            },
            "propertyOrder": 80
        },
        "showValues": {
            "type": "string",
            "id": "/properties/showValues",
            "title": "Show Values as Text",
            "enum": [
                "yes",
                "no"
            ],
            "default": "no",
            "format": "text",
            "description": "The setting 'showValues' defines if text values are added to the graph",
            "options": {
                "hidden": false
            },
            "propertyOrder": 90
        },
        "xAxisAngle": {
            "type": "integer",
            "id": "/properties/xAxisAngle",
            "title": "XAxisAngle",
            "default": "0",
            "enum": [
                "0",
                "-10",
                "-20",
                "-30",
                "-40",
                "-50",
                "-60",
                "-70",
                "-80",
                "-90",
                "10",
                "20",
                "30",
                "40",
                "50",
                "60",
                "70",
                "80",
                "90"
            ],
            "description": "A description for 'xAxisAngle'  Type: 'integer'",
            "options": {
                "hidden": false
            },
            "propertyOrder": 100
        },
        "axis": {
            "type": "object",
            "id": "/properties/axis",
            "title": "Axis",
            "options": {
                "disable_collapse": false,
                "disable_edit_json": false,
                "disable_properties": false,
                "collapsed": false,
                "hidden": false
            },
            "defaultProperties": [
                "logscale",
                "x",
                "y"
            ],
            "properties": {
                "logscale": {
                    "type": "string",
                    "id": "/properties/axis/properties/logscale",
                    "title": "Logscale",
                    "default": "",
                    "format": "text",
                    "description": "Description for 'logscale' Type: 'string' Path: '/properties/axis/properties/logscale'",
                    "options": {
                        "hidden": false
                    },
                    "propertyOrder": 10
                },
                "x": {
                    "type": "object",
                    "id": "/properties/axis/properties/x",
                    "title": "X",
                    "options": {
                        "disable_collapse": false,
                        "disable_edit_json": false,
                        "disable_properties": false,
                        "collapsed": false,
                        "hidden": false
                    },
                    "defaultProperties": [
                        "title",
                        "angle",
                        "scaletype"
                    ],
                    "properties": {
                        "title": {
                            "type": "string",
                            "id": "/properties/axis/properties/x/properties/title",
                            "title": "Title",
                            "default": "",
                            "format": "text",
                            "description": "Description for 'title' Type: 'string' Path: '/properties/axis/properties/x/properties/title'",
                            "options": {
                                "hidden": false
                            },
                            "propertyOrder": 10
                        },
                        "angle": {
                            "type": "integer",
                            "id": "/properties/axis/properties/x/properties/angle",
                            "title": "Angle",
                            "default": 0,
                            "description": "A description for 'angle'  Type: 'integer'",
                            "options": {
                                "hidden": false
                            },
                            "propertyOrder": 20
                        },
                        "scaletype": {
                            "type": "string",
                            "id": "/properties/axis/properties/x/properties/scaletype",
                            "title": "Scaletype",
                            "default": "linear",
                            "enum": [
                                "linear",
                                "log",
                                "sqrt"
                            ],
                            "format": "text",
                            "description": "Description for 'scaletype' Type: 'string' Path: '/properties/axis/properties/x/properties/scaletype'",
                            "options": {
                                "hidden": false
                            },
                            "propertyOrder": 30
                        }
                    },
                    "propertyOrder": 20
                },
                "y": {
                    "type": "object",
                    "id": "/properties/axis/properties/y",
                    "title": "Y",
                    "options": {
                        "disable_collapse": false,
                        "disable_edit_json": false,
                        "disable_properties": false,
                        "collapsed": false,
                        "hidden": false
                    },
                    "defaultProperties": [
                        "title",
                        "scaletype"
                    ],
                    "properties": {
                        "title": {
                            "type": "string",
                            "id": "/properties/axis/properties/y/properties/title",
                            "title": "Title",
                            "default": "",
                            "format": "text",
                            "description": "Description for 'title' Type: 'string' Path: '/properties/axis/properties/y/properties/title'",
                            "options": {
                                "hidden": false
                            },
                            "propertyOrder": 10
                        },
                        "scaletype": {
                            "type": "string",
                            "id": "/properties/axis/properties/y/properties/scaletype",
                            "title": "Scaletype",
                            "default": "linear",
                            "enum": [
                                "linear",
                                "log",
                                "sqrt"
                            ],
                            "format": "text",
                            "description": "Description for 'scaletype' Type: 'string' Path: '/properties/axis/properties/y/properties/scaletype'",
                            "options": {
                                "hidden": false
                            },
                            "propertyOrder": 20
                        }
                    },
                    "propertyOrder": 30
                }
            },
            "propertyOrder": 110
        },
        "data": {
            "type": "array",
            "id": "/properties/data",
            "title": "Data",
            "format": "tabs",
            "options": {
                "disable_collapse": false,
                "disable_array_add": false,
                "disable_array_delete": false,
                "disable_array_reorder": false,
                "disable_properties": false,
                "collapsed": false,
                "hidden": false
            },
            "items": {
                "type": "object",
                "id": "/properties/data/items",
                "title": "Title Root Data ",
                "options": {
                    "disable_collapse": false,
                    "disable_edit_json": false,
                    "disable_properties": false,
                    "collapsed": false,
                    "hidden": false
                },
                "defaultProperties": [
                    "name",
                    "collist",
                    "col",
                    "color",
                    "title"
                ],
                "properties": {
                    "name": {
                        "type": "string",
                        "id": "/properties/data/items/properties/name",
                        "title": "Name",
                        "default": "",
                        "format": "text",
                        "description": "Description for 'name' Type: 'string' Path: '/properties/data/items/properties/name'",
                        "options": {
                            "hidden": false
                        },
                        "propertyOrder": 10
                    },
                    "collist": {
                        "type": "string",
                        "id": "/properties/data/items/properties/collist",
                        "title": "Collist",
                        "default": "",
                        "format": "text",
                        "description": "Description for 'collist' Type: 'string' Path: '/properties/data/items/properties/collist'",
                        "options": {
                            "hidden": false
                        },
                        "propertyOrder": 20
                    },
                    "col": {
                        "type": "array",
                        "id": "/properties/data/items/properties/col",
                        "title": "Col",
                        "format": "tabs",
                        "options": {
                            "disable_collapse": false,
                            "disable_array_add": false,
                            "disable_array_delete": false,
                            "disable_array_reorder": false,
                            "disable_properties": false,
                            "collapsed": false,
                            "hidden": false
                        },
                        "items": {
                            "type": "number",
                            "id": "/properties/data/items/properties/col/items",
                            "title": "Title Root Data Col ",
                            "default": 23.5,
                            "description": "A description for 'items'  Type: 'number'",
                            "options": {
                                "hidden": false
                            }
                        },
                        "propertyOrder": 30
                    },
                    "color": {
                        "type": "string",
                        "id": "/properties/data/items/properties/color",
                        "title": "Color",
                        "default": "",
                        "format": "color",
                        "description": "Description for 'color' Type: 'string' Path: '/properties/data/items/properties/color'",
                        "options": {
                            "hidden": false
                        },
                        "propertyOrder": 40
                    },
                    "title": {
                        "type": "string",
                        "id": "/properties/data/items/properties/title",
                        "title": "Title",
                        "default": "",
                        "format": "text",
                        "description": "Description for 'title' Type: 'string' Path: '/properties/data/items/properties/title'",
                        "options": {
                            "hidden": false
                        },
                        "propertyOrder": 50
                    }
                }
            },
            "propertyOrder": 120
        }
    }
};
