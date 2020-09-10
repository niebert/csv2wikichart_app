// JSON2Schema
// File for ID 'template_id': jsoneditor_app/tpl/template4json_tpl.js
// created with JSON2Schema: https://niehausbert.gitlab.io/JSON2Schema

vDataJSON.tpl.template4json =  `

  <!-- Object: root --> 
*  
{{#ifcond type "==" "line"}}
  {{{type}}}
  <!--   Attribute 'type' has value 'line' in output format 'markdown' -->
{{/ifcond}}
{{#ifcond type "==" "area"}}
  {{{type}}}
  <!--   Attribute 'type' has value 'area' in output format 'markdown' -->
{{/ifcond}} 
*  {{{linewidth}}} 
*  
{{#ifcond interpolate "==" "line"}}
  {{{interpolate}}}
  <!--   Attribute 'interpolate' has value 'line' in output format 'markdown' -->
{{/ifcond}}
{{#ifcond interpolate "==" "curve"}}
  {{{interpolate}}}
  <!--   Attribute 'interpolate' has value 'curve' in output format 'markdown' -->
{{/ifcond}}
{{#ifcond interpolate "==" "none"}}
  {{{interpolate}}}
  <!--   Attribute 'interpolate' has value 'none' in output format 'markdown' -->
{{/ifcond}} 
*  {{{showSymbols}}}
 <!-- String Format: text --> 
*  {{{width}}} 
*  {{{height}}} 
*  
{{#ifcond colorpalette "==" "default"}}
  {{{colorpalette}}}
  <!--   Attribute 'colorpalette' has value 'default' in output format 'markdown' -->
{{/ifcond}}
{{#ifcond colorpalette "==" "user-defined"}}
  {{{colorpalette}}}
  <!--   Attribute 'colorpalette' has value 'user-defined' in output format 'markdown' -->
{{/ifcond}} 
*  {{{colors}}}
 <!-- String Format: text --> 
*  {{{showValues}}}
 <!-- String Format: text --> 
*  {{{xAxisAngle}}} 
*  
  <!-- Object: root.axis --> 
{{#with axis}}
*  {{{logscale}}}
 <!-- String Format: text --> 
*  
  <!-- Object: root.axis.x --> 
{{#with x}}
*  {{{title}}}
 <!-- String Format: text --> 
*  {{{angle}}} 
*  
{{#ifcond scaletype "==" "linear"}}
  {{{scaletype}}}
  <!--   Attribute 'scaletype' has value 'linear' in output format 'markdown' -->
{{/ifcond}}
{{#ifcond scaletype "==" "log"}}
  {{{scaletype}}}
  <!--   Attribute 'scaletype' has value 'log' in output format 'markdown' -->
{{/ifcond}}
{{#ifcond scaletype "==" "sqrt"}}
  {{{scaletype}}}
  <!--   Attribute 'scaletype' has value 'sqrt' in output format 'markdown' -->
{{/ifcond}} 
{{/with}}
  <!-- Object: root.axis.x --> 
*  
  <!-- Object: root.axis.y --> 
{{#with y}}
*  {{{title}}}
 <!-- String Format: text --> 
*  
{{#ifcond scaletype "==" "linear"}}
  {{{scaletype}}}
  <!--   Attribute 'scaletype' has value 'linear' in output format 'markdown' -->
{{/ifcond}}
{{#ifcond scaletype "==" "log"}}
  {{{scaletype}}}
  <!--   Attribute 'scaletype' has value 'log' in output format 'markdown' -->
{{/ifcond}}
{{#ifcond scaletype "==" "sqrt"}}
  {{{scaletype}}}
  <!--   Attribute 'scaletype' has value 'sqrt' in output format 'markdown' -->
{{/ifcond}} 
{{/with}}
  <!-- Object: root.axis.y --> 
{{/with}}
  <!-- Object: root.axis --> 
*  
  <!-- Array: root.data --> 
<!-- Array Path: root.data  -->
{{#each data}}
* Sub-Type of Array Element: 'object'
  <!-- Object: root.data.* --> 
{{#with this}}
*  {{{name}}}
 <!-- String Format: text --> 
*  {{{collist}}}
 <!-- String Format: text --> 
*  
  <!-- Array: root.data.*.col --> 
<!-- Array Path: root.data.*.col  -->
{{#each col}}
* {{{this}}} 
{{/each}}
  <!-- Array: root.data.*.col --> 
*  {{{color}}}
 <!-- String Format: color --> 
*  {{{title}}}
 <!-- String Format: text --> 
{{/with}}
  <!-- Object: root.data.* --> 
{{/each}}
  <!-- Array: root.data --> 
  <!-- Object: root -->`;
