/* LoadFile4DOM Return Types
The onload handler could get different processed JSON objects as return types.
* `file` is
  * just the text for file type `text`
  * the parsed JSON for file type `json`
  * binary version (blob) of loaded file
* `filehash` contains also the filename if browser return the name of the file. This is not standard and might result in an unexpected behavior if not used in Firefox or Chrome. `filehash` return a hash with
  javascript:
   data = {
     "name": "myloadedfile.txt",
     "file": "the content of the loaded text file",
     "mime_type":"text/plain"
   }


*/

    var lf4d = new LoadFile4DOM();
    var options = {
      "debug": false
    };
    lf4d.init(document,options);
    //---------------------------------------------------
    //----- Create a new Loader with ID "myjsonfile" ----
    //---------------------------------------------------
    // we load the JSON as text file without parsing.
    // the
    var txtfile = lf4d.get_loader_options("myjsonfile","json");
    txtfile.returntype = "filehash";
    txtfile.file_extension = ".csv";
    // Define what to do with the loaded data
    console.log("txtfile="+JSON.stringify(txtfile,null,4));
    txtfile.onload = function (data,err) {
      if (err) {
        // do something on error, perr contains error message
        console.error(err);
        alert("ERROR: Parse JSON was not successful - " + err);
      } else {
        // do something with the file content in data e.g. store  in a HTML textarea (e.g. <textarea id="mytextarea" ...>
        console.log("CALL: txtfile.onload() store the JSON as text file copy into textarea 'jsonstring'");
        // data is now a JSON file that will be converted into string with indent 4 and stored into textarea.
        //window.document.getElementById("jsonstring").value = JSON.stringify(data,null,4);
        if (editor) {
          var vJSON = null;
          try {
            if (!data.file) {
              console.error("ERROR: LoadFile4DOM txtfile-loadhandler 'data.name' is not defined");
            }
            vJSON = JSON.parse(data.file);
            if (data.name) {
              el("jsonfile").value = data.name;
            } else {
              console.error("ERROR: LoadFile4DOM txtfile-loadhandler 'data.name' is not defined");
            }
          } catch(e) {
            console.error("ERROR Parse JSON: "+e);
          }
          editor.setValue(vJSON);
        } else {
          console.error("ERROR: JSON Editor 'editor' is not defined");
        }
      }
    };
    // create the loader txtfile
    lf4d.create_load_dialog(txtfile);
    //-----------------------------------------------
    //---------------------------------------------------
    //----- Create a new Loader with ID "mycsvfile" ----
    //---------------------------------------------------
    // we load the JSON as text file without parsing.
    // the
    var csvfile = lf4d.get_loader_options("mycsvfile","text");
    csvfile.returntype = "filehash";
  // Define what to do with the loaded data
    console.log("LoadFile4DOM csvfile="+JSON.stringify(csvfile,null,4));
    csvfile.onload = function (data,err) {
      if (err) {
        // do something on error, perr contains error message
        console.error(err);
        alert("ERROR: Loading CSV file was not successful - " + err);
      } else {
        var csv_string = "";
        if (data.file) {
          csv_string = data.file;
        } else {
          console.error("ERROR: LoadFile4DOM csvfile-loadhandler 'data.file' is not defined");
        }
        if (data.name) {
          el("jsonfile").value = getBaseFileName(data.name) + ".json";
        }
        // do something with the file content in data e.g. store  in a HTML textarea (e.g. <textarea id="mytextarea" ...>
        console.log("CALL: csvfile.onload() parse the text file store textfile into a JSON Editor");
        // data is now a JSON file that will be converted into string with indent 4 and stored into textarea.
        //window.document.getElementById("jsonstring").value = JSON.stringify(data,null,4);
        if (editor) {
          var vJSON = editor.getValue();
          if (vJSON) {
            console.log("vJSON exists CSV can be parsed");
            var csv2json_options = {
              separator: ',',
              delimiter: '"',
              headers: true,
              "colors":vDataJSON.colors
            };
            vJSON.data = csv2json.convert(csv_string,csv2json_options);
            console.log("CSV parsed sucessfully and store JSON in JSON Editor");
            editor.setValue(vJSON);
          } else {
            alert("ERROR: parsing CSV was not successful!");
            console.error("ERROR Parse JSON: ");
          }
        } else {
          console.error("ERROR: JSON Editor 'editor' is not defined!");
        }
      }
    };
    // create the loader txtfile
    lf4d.create_load_dialog(csvfile);
    //-----------------------------------------------
