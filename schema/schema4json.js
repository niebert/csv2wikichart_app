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
        "legend",
        "colorpalette",
        "colors",
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
                "stackedarea",
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
            "default": 2,
            "description": "A description for 'linewidth'  Type: 'integer'",
            "enum": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10
            ],
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
        "legend": {
            "type": "integer",
            "id": "/properties/legend",
            "title": "Legend",
            "default": "Legend",
            "description": "A Label for the legend for the graph in Wikiversity",
            "options": {
                "hidden": false
            },
            "propertyOrder": 65
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
                "hidden": true
            },
            "propertyOrder": 80
        },
        "xAxisAngle": {
            "type": "integer",
            "id": "/properties/xAxisAngle",
            "title": "x-Axis Angle",
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
            "description": "The x-Axis Angle defines the angle for the x-values, e.g. for dates so that the x-value do not overlap. Use -40 degrees for dates or long x-values e.g. 1500000",
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
                "x",
                "y"
            ],
            "properties": {
                "x": {
                    "type": "object",
                    "id": "/properties/axis/properties/x",
                    "title": "x-Axis",
                    "options": {
                        "disable_collapse": false,
                        "disable_edit_json": true,
                        "disable_properties": true,
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
                            "title": "x-Axis Title ",
                            "default": "unit x-axis",
                            "format": "text",
                            "description": "The x-axis title is usually used for the units of the x-axis (e.g. 'years - Age')",
                            "options": {
                                "hidden": false
                            },
                            "propertyOrder": 10
                        },
                        "angle": {
                            "type": "string",
                            "id": "/properties/axis/properties/x/properties/angle",
                            "title": "x-Axis Angle",
                            "default": "0",
                            "enum": [
                                "0",
                                "-15",
                                "-30",
                                "-45",
                                "-60",
                                "-75",
                                "-90",
                                "15",
                                "30",
                                "45",
                                "60",
                                "75",
                                "90"
                            ],
                            "description": "The x-Axis Angle defines the angle for the x-values, e.g. for dates so that the x-value do not overlap. Use -40 degrees for dates or long x-values e.g. 1500000",
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
                        "disable_edit_json": true,
                        "disable_properties": true,
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
                            "default": "unit y-axis",
                            "format": "text",
                            "description": "The y-axis title is usually used for the units of the y-axis (e.g. 'Kg Weight')",
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
                "title": "Data ",
                "headerTemplate": "Column: {{self.title}}",
                "options": {
                    "disable_collapse": false,
                    "disable_edit_json": false,
                    "disable_properties": false,
                    "collapsed": false,
                    "hidden": false
                },
                "defaultProperties": [
                    "name",
                    "title",
                    "color",
                    "collist",
                    "col"
                ],
                "properties": {
                    "name": {
                        "type": "string",
                        "id": "/properties/data/items/properties/name",
                        "title": "Chart Variable Name - Automated Hidden",
                        "default": "y1",
                        "format": "text",
                        "description": "These variable names are automated set as y1, y2, y3, ... according to index",
                        "options": {
                            "hidden": true
                        },
                        "propertyOrder": 10
                    },
                    "title": {
                        "type": "string",
                        "id": "/properties/data/items/properties/title",
                        "title": "Title",
                        "default": "",
                        "format": "text",
                        "description": "Description for the y-values'",
                        "options": {
                            "hidden": false
                        },
                        "propertyOrder": 20
                    },
                    "color": {
                        "type": "string",
                        "id": "/properties/data/items/properties/color",
                        "title": "Color y-Values",
                        "default": "#000000",
                        "format": "color",
                        "description": "The defined color is used for line, curve in the graph if 'colorpalette' is set to 'user-defined for 'colorpalette=default' the default colors are used",
                        "options": {
                            "hidden": false
                        },
                        "propertyOrder": 30
                    },
                    "collist": {
                        "type": "string",
                        "id": "/properties/data/items/properties/collist",
                        "title": "Comma Separated Column List",
                        "default": "",
                        "format": "text",
                        "description": "Thes comma seperated y-values in  'collist' a populated and update by json_post_process() and the values are automated concatenated for y1, y2, y3, ... ",
                        "options": {
                            "hidden": true
                        },
                        "propertyOrder": 40
                    },
                    "col": {
                        "type": "array",
                        "id": "/properties/data/items/properties/col",
                        "title": "Col",
                        "headerTemplate": "Values",
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
                            "title": "Value ",
                            "default": 0.0,
                            "options": {
                                "hidden": false
                            }
                        },
                        "propertyOrder": 50
                    }
                }
            },
            "propertyOrder": 120
        }
    }
};
