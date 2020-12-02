// JSON2Schema
// File for ID 'template_id': jsoneditor_app/tpl/template4json_tpl.js
// created with JSON2Schema: https://niehausbert.gitlab.io/JSON2Schema

vDataJSON.tpl.template4json =  `

<!-- Created with CSV2WikiChart - URL: https://niebert.github.io/csv2wikichart_app -->
{{#ifcond type "==" "line"}}
|type={{{type}}}
<!--   Attribute 'type' has value 'line' in output format 'mediawiki' -->
{{/ifcond}}
{{#ifcond type "==" "area"}}
|type={{{type}}}
<!--   Attribute 'type' has value 'area' in output format 'mediawiki' -->
{{/ifcond}}
{{#ifcond type "==" "stackedarea"}}
|type={{{type}}}
<!--   Attribute 'type' has value 'stackedarea' as an additive, aggregated y-values to visualize fractions of the total sum -->
{{/ifcond}}
{{#ifcond type "==" "rect"}}
|type={{{type}}}
<!--   Attribute 'type' has value 'rect' as an additive, aggregated y-values to visualize bar charts i.e. type='rect' -->
{{/ifcond}}
{{#ifcond type "!=" "rect"}}
{{#ifcond interpolate "==" "line"}}
|linewidth={{{linewidth}}}
<!--   Attribute 'interpolate' has value 'line' with thinin output format 'mediawiki' -->
{{/ifcond}}
{{#ifcond interpolate "==" "curve"}}
|linewidth={{{linewidth}}}
<!--   Attribute 'interpolate' has value 'curve' in output format 'mediawiki' -->
{{/ifcond}}
{{#ifcond interpolate "==" "none"}}
|linewidth=0
<!--   Attribute 'interpolate' has value 'none' and line thickness was set to 0 so lines disappear -->
{{/ifcond}}
{{#ifcond showSymbols "==" "yes"}}
|showSymbols={{{sizeSymbols}}}
{{/ifcond}}
{{/ifcond}}
{{#ifcond showSymbols "==" "no"}}
{{#ifcond interpolate "==" "none"}}
<!-- showSymbols was set to 'no' but interpolate was set to 'none' too.
     This configuration of chart will lead to the fact that no curve and no y-values will be be visible.
     showSymbols was set to '1' as error correction -->
|showSymbols=1
{{/ifcond}}
{{#ifcond interpolate "!=" "none"}}
|showSymbols=0
{{/ifcond}}
{{/ifcond}}
<!-- Width and Height of the rendered image in Wikiversity, Wikipedia, ... -->
|width={{{width}}}
|height={{{height}}}
<!-- Header of the Legend -->
|legend={{{legend}}}
{{#ifcond colorpalette "==" "default"}}
<!--   Attribute 'colorpalette' has value 'default' in CSV2WikiChart
       therefore the curves use the default colors of the Chart template
       user defined colors "{{{colors}}}"  are not used with the "colors=" parameter -->
{{/ifcond}}
{{#ifcond colorpalette "==" "user-defined"}}
<!--   Attribute 'colorpalette' has value 'user-defined' in output format 'mediawiki'
       therefore the colors of the curve are defined by the curve colors for the datarow -->
|colors={{{colors}}}
{{/ifcond}}
{{#ifcond showValues "==" "yes"}}
|showValues={{{sizeValues}}}
{{/ifcond}}
<!-- Define the properties of the x-axis -->
{{#with axis}}
{{#with x}}
|xAxisTitle={{{title}}}
|xAxisAngle={{{angle}}}
{{#ifcond scaletype "!=" "linear"}}
<!-- 'scaletype' was set to value '{{{scaletype}}}'
      scale types of the x axes could be set to 'linear' for linear scale (default), 'log' for logarithmic scale and 'sqrt' for square root scale  -->
|xScaleType={{{scaletype}}}
{{/ifcond}}
{{#ifcond grid "==" "yes"}}
|xGrid=   <!-- show vertical grid lines for x-values -->
{{/ifcond}}
{{#ifcond scaletype "==" "log"}}
|xAxisMin = 0.1 <!--Needed to avoid trying to show the values x of 0, impossible on log scale because log(0)=-infinity -->
{{/ifcond}}
{{/with}}
<!-- Define the properties of the y-axis -->
{{#with y}}
|yAxisTitle={{{title}}}
{{#ifcond scaletype "!=" "linear"}}
<!-- 'scaletype' was set to value '{{{scaletype}}}'
      scale types of the x axes could be set to 'linear' for linear scale (default), 'log' for logarithmic scale and 'sqrt' for square root scale  -->
|yScaleType={{{scaletype}}}
{{/ifcond}}
{{#ifcond scaletype "==" "log"}}
|yAxisMin = 0.1 <!--Needed to avoid trying to show the values y2, y3 of 0, impossible on log scale because log(0)=-infinity -->
{{/ifcond}}
{{#ifcond grid "==" "yes"}}
|yGrid=   <!-- show horizontal grid lines for y-values -->
{{/ifcond}}
{{/with}}
{{/with}}
<!-- Define CSV Data into the Graph-->
{{#each data}}
{{#with this}}
<!-- Column List '{{{name}}}': '{{{title}}}' with color of line: '{{{color}}}' -->
<!-- Data '{{{title}}}': {{#each col}} {{{this}}} {{/each}} -->
|{{{name}}}Title={{{title}}}
|{{{name}}}= {{concatarray col ","}}
{{/with}}
{{/each}}
`;
