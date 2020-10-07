/*
json2morris.hs
-----------------
This library is responsible for converting the JSON
in the JSON editor of Jeremy Dorn into a data structure
that can be used for rendering the data in the MorrisJS library.
see https://morrisjs.github.io/morris.js/
*/
var vGraphCount = 0;

function render_graph(pEditor) {
  if (pEditor && pEditor.getValue) {
    updater4json(pEditor);
    var vJSON = pEditor.getValue();
    vJSON = update_column_lists(vJSON);
    var vMorrisConfig = json2morris(vJSON);
    if (vMorrisConfig) {
      vGraphCount++;
      $('#charts').empty();
      $('#charts').append("<div id='report_" + vGraphCount + "'></div>");
      vMorrisConfig.element = 'report_'+vGraphCount;
      console.log("Create a new graph ID='" + vMorrisConfig.element + "' for MorrisJS");
      app.nav.page("chart");
      switch (vJSON.type) {
        case "line":
          new Morris.Line(vMorrisConfig);
        break;
        case "stackedarea":
          new Morris.Area(vMorrisConfig);
        break;
        case "area":
          new Morris.Area(vMorrisConfig);
        break;
        default:

      }
    } else {
      alert("ERROR: MorrisJS Graph could not be generated - vMorrisConfig does not exist.");
      console.error("ERROR: render_graph(pEditor) - vMorrisConfig could not be generated!");
    }
  } else {
    alert("ERROR: MorrisJS Graph could not be generated - JSON Editor does not exist as parameter.");
    console.error("ERROR: render_graph(pEditor) - pEditor is not defined, getValue() call failed!");
  }

}

function XX_render_graph(pEditor) {
  var day_data = [
    {"day": "2020-10-04", "licensed": 3407, "sorned": 660},
    {"day": "2020-09-30", "licensed": 3351, "sorned": 629},
    {"day": "2020-09-29", "licensed": 3269, "sorned": 618},
    {"day": "2020-09-20", "licensed": 3246, "sorned": 661},
    {"day": "2020-09-19", "licensed": 3257, "sorned": 667},
    {"day": "2020-09-18", "licensed": 3248, "sorned": 627},
    {"day": "2020-09-17", "licensed": 3171, "sorned": 660},
    {"day": "2020-09-16", "licensed": 3171, "sorned": 676},
    {"day": "2020-09-15", "licensed": 3201, "sorned": 656},
    {"day": "2020-09-10", "licensed": 3215, "sorned": 622}
  ];
  vChart.setData(day_data)
}

function X_render_graph(pEditor) {
  if (pEditor && pEditor.getValue) {
    var vJSON = pEditor.getValue();
    var vMorrisConfig = json2morris(vJSON);
    if (vMorrisConfig) {
      $("#graph4data").empty();
      Morris.Line(vMorrisConfig);
      app.nav.page("chart");
    } else {
      alert("ERROR: MorrisJS Graph could not be generated - vMorrisConfig does not exist.");
      console.error("ERROR: render_graph(pEditor) - vMorrisConfig could not be generated!");
    }
  } else {
    alert("ERROR: MorrisJS Graph could not be generated - JSON Editor does not exist as parameter.");
    console.error("ERROR: render_graph(pEditor) - pEditor is not defined, getValue() call failed!");
  }
}

function title2var(pString) {
  var vVariable = "undefined";
  if (pString) {
    vVariable = pString.toLowerCase();
    vVariable = vVariable.replace(/[^0-9a-z]/g,"_");
    vVariable = vVariable.replace(/_[_]+/g,"_");
  }
  return vVariable;
}

function getHash4Morris(pDataCols,pRow) {
  // this function return a Hash for a single row pRow in the CSV file
  // the keys are the column names
  var vHash = {};
  var vValue =  " ";
  if (pDataCols) {
    console.log("pDataCols.length="+pDataCols.length+" export row="+pRow+"\n pDataCols="+JSON.stringify(pDataCols,null,4));
    for (var k = 0; k < pDataCols.length; k++) {
      var vValueObj = parseValue4JSON(pDataCols[k].col[pRow]);
      console.log("vValueObj" + pRow + "="+JSON.stringify(vValueObj,null,4));
      if (vValueObj.type != "undefined") {
        vHash[title2var(pDataCols[k].title)] = vValueObj.val;
        console.log(pDataCols[k].name+"-" + k + " '" +pDataCols[k].title +"': "+vValueObj.val+ " Type: "+vValueObj.type);
      }
    }
  }

  console.log("CALL: getHash4Morris() - " + JSON.stringify(vHash,null,4));
  return vHash;
}

function getMorrisData(pJSON) {
  var vMorrisData = [];
  var vRowsCSV = 0;
  var vDataCols = []; // array of columns
  if (pJSON && pJSON.data && pJSON.data[0] && pJSON.data[0].col) {
    // Use first column as reference for vMorrisData length
    vRowsCSV = pJSON.data[0].col.length;
    vDataCols = pJSON.data;
    console.log("CALL: json2morris(pJSON) - pJSON.data[0].col is defined!");
  } else {
    console.error("ERROR in Call: json2morris(pJSON) - pJSON.data[0].col is defined!");
  }
  console.log("x-Values: "+ (pJSON.axis.x.title || "undefined"));
  // iterate over all CSV lines - max is length of first column vCol
  for (var row = 0; row < vRowsCSV; row++) {
    //
    var vHash = getHash4Morris(vDataCols,row);
    vMorrisData.push(vHash);
  }
  return vMorrisData;
}

function json2morris(pJSON) {
  var vMorrisConfig = null;
  if (pJSON && pJSON.data) {
    console.log("CALL: json2morris(pJSON) - pJSON.data is defined!");
    var vX_Key = "xkey_undef";
    var vY_Keys = [];
    var vLabels = [];
    var vLineColors = [];
    var vPointColors = [];
    var vX_LabelAngle = 0;
    var vLineWidth = 2;
    var vSmooth = true;
    var vParseTime = false;
    if (pJSON.data.length > 0) {
      switch (pJSON.interpolate) {
        case "line":
          vSmooth = false;
          vLineWidth = (parseInt(pJSON.linewidth) || 2);
        break;
        case "curve":
          vLineWidth = (parseInt(pJSON.linewidth) || 2);
          vSmooth = true;
        break;
        case "none":
          vLineWidth = 0;
          vSmooth = false;
        break;
        default:

      }
      if (pJSON.axis.x.angle) {
        vX_LabelAngle = parseInt(pJSON.axis.x.angle) || 0;
        console.log("x-Label Angle="+vX_LabelAngle);
      } else {
        console.warn("x-Label Angle undefined");
      }
      vX_Key = title2var(pJSON.data[0].title);
      if (pJSON.data[0].col && (pJSON.data[0].col.length > 0)) {
        var vValueObj = parseValue4JSON(pJSON.data[0].col[0]);
        if (vValueObj.type === "date") {
          console.log("x-Values are date - e.g. '" + pJSON.data[0].col[0] + "'");
          vParseTime = true;
        } else {
          console.log("x-Values are not of type date!");
        }
      } else {
        console.error("ERROR: x-Values do not contain data!");
      }
    }
    for (var i = 1; i < pJSON.data.length; i++) {
      // extract y keys and colors of lines and points
      vY_Keys.push(title2var(pJSON.data[i].title));
      vLabels.push(pJSON.data[i].title);
      vLineColors.push(pJSON.data[i].color);
      vPointColors.push(pJSON.data[i].color);
    }
    vMorrisConfig = {
      element: 'graph4data',
      data: getMorrisData(pJSON),
      xkey: vX_Key,
      ykeys: vY_Keys,
      labels: vLabels,
      parseTime: vParseTime,
      lineColors: vLineColors,
      lineWidth: vLineWidth,
      smooth: vSmooth,
      xLabelAngle: vX_LabelAngle,
      pointFillColors: vPointColors
    };
    console.log("CALL: json2morris(pJSON) - vMorrisConfig="+JSON.stringify(vMorrisConfig,null,4));
  }
  return vMorrisConfig;
}

function check_json2morris(pEditor) {
  if (pEditor) {
    var vJSON = pEditor.getValue();
    var vMorrisData = getMorrisData(vJSON);
    console.log("CALL: check_json2morris(pEditor) - vMorrisData="+JSON.stringify(vMorrisData,null,4));
  } else {
    console.error("ERROR: check_json2morris(pEditor) - pEditor not defined!");
  }
}

function parseValue4JSON(pValue) {
  var vValueObj = {
    "type":"undefined",
    "val": " "
  };
  var vValue = "?";
  // check if
  if (pValue) {
    if (typeof(pValue) === "string") {
      console.log("pValue is of type 'string'");
    } else {
      console.log("pValue is not a string");
    }
    if (isNaN(pValue)) {
      console.log("CALL: parseValue4JSON(pValue) - parseFloat('" + pValue + "')");
      vValue = parseFloat(pValue);
    } else {
      vValue = pValue;
    }
    if (isNaN(vValue) == false) {
      // pString contains a Float encoded as String
      vValueObj.val  = vValue;
      vValueObj.type = "float";
    } else {
      // Check String for encoded Date
      //var vRegExp4Date = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/
      var vRegExp4Date = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
      test_result = vRegExp4Date.test(pString);
      if (test_result == true) {
        vValueObj.val  = pValue;
        vValueObj.type = "date";
      } else {
        console.log("CALL: parseValue4JSON(pString) - pString is not a number and not a date in format YYYY-MM-DD");
      }
    }
  } else {
    console.error("CALL: parseValue4JSON(pValue) - pValue undefined");
  }
  return vValueObj;
}
