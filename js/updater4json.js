/*
updater4json.js
-----------------
This library is responsible for updating the JSON
in the JSON editor before generating the output with Handlebars4Code
URL: https://gitlab.com/niehausbert/handlebars4code
*/


function enumerate_y_index(pJSON) {
  var index = 0;
  if (pJSON) {
    if (pJSON.data) {
      for (var i = 0; i < pJSON.data.length; i++) {
        index++;
        pJSON.data[i].name = "y"+index;
      }
    }
  }
  return pJSON;
}

function populate_colorlist(pJSON) {
  var vColorList = "";
  var vSep = "";
  if (pJSON) {
    if (pJSON.data) {
      // start with i=1 because frist data column is contains the x Values
      for (var i = 1; i < pJSON.data.length; i++) {
        vColorList += vSep + pJSON.data[i].color;
        vSep = ",";
      }
      pJSON.colors = vColorList;
    } else {
      console.error("ERROR: populate_colorlist() Call: pJSON.data undefined!");
    }
  } else {
    console.error("ERROR: populate_colorlist() Call: pJSON undefined!");
  }
  return pJSON;
}


function update_column_lists(pJSON) {
  if (pJSON) {
    if (pJSON.data) {
      // start with i=1 because frist data column is contains the x Values
      for (var i = 1; i < pJSON.data.length; i++) {
        pJSON.data[i].collist += (pJSON.data[i].col).join(",");
      }
    } else {
      console.error("ERROR: populate_column_list() Call: pJSON.data undefined!");
    }
  } else {
    console.error("ERROR: populate_column_list() Call: pJSON undefined!");

  }
  return pJSON;
}

function updater4json(pEditor) {
  /*
  this function gets the JSON editor as parameter and
  updates the JSON in the editor
  */
  if (pEditor) {
    var vJSON = pEditor.getValue();
    if (vJSON) {
      if (vJSON.hasOwnProperty("axis")) {
        if (vJSON.axis.hasOwnProperty("x")) {
          if (vJSON.hasOwnProperty("data")) {
            //---- set Titles for x-Axis and y-Axis----
            if (vJSON.data.length > 0) {
              console.log("Chart x-Axis Title: '" + vJSON.data[0].title + "'");
              vJSON.axis.x.title = vJSON.data[0].title;
              if (vJSON.data.length == 2) {
                console.log("Chart y-Axis Title: '" + vJSON.data[1].title + "'");
                vJSON.axis.y.title = vJSON.data[1].title;
              } else {
                console.error("ERROR: vJSON.data.length= - no x-axis values found!");
              }
              vJSON = update_column_lists(vJSON);
            } else {
              console.error("ERROR: vJSON.data.length= - no x-axis values found!");
            }
          }
        } else {
          console.error("vJSON.axis.x undefined in updater4json()");

        }
      } else {
        console.error("vJSON.axis undefined in updater4json()");

      }

      if (vJSON.hasOwnProperty("data")) {
          vJSON = enumerate_y_index(vJSON);
          vJSON = populate_colorlist(vJSON);
          pEditor.setValue(vJSON);
      } else {
        console.error("vJSON.data undefined in updater4json()");
      }
    } else {
      console.error("pEditor.getValue() returns an undefined JSON");
    }
  } else {
    console.error("pEditor is not defined in updater4json() call");
  }
}
