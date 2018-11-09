class Service {
    constructor() {
        let dataFromUrl;
        let dataHeader;
        var dataHeaderList;



        this.initService = (url) => {
            console.log("init service")
            let treeView = new TreeView();
            treeView.clearValue();
            dataFromUrl = treeView.getDataFormUrl();
            dataHeader = treeView.getHeaderFormData(dataFromUrl);
            dataHeaderList = treeView.getDataHeaderAll();
            dataHeader = JSON.stringify(dataHeader);

            this.createTreeView();
            //console.log(dataHeader);
            // console.log(dataHeaderList);
        }

        this.createTreeView = () => {
            //console.log("Sssssss");
            //console.log(dataHeader);
            let str = "<a href='select'></a><div id='select'><form id='search'><input class='mb-2 mr-2' type='search' id='id_search' placeholder='Search'/><button class='btn btn-primary' type='submit'>Search</button></form><div id='check'></div><div id='submitcheck'></div>"
            document.getElementById('checkshow').innerHTML = str;
            document.getElementById('detail-show1').innerHTML = "<h6 style='font-style: oblique;'> Where is tree from?</h6><div id='detail-show'><p>Tree comes from URL that you input in the form to get API.</p></div>"
            document.getElementById('detail-show2').innerHTML = "<h6 style='font-style: oblique;'> How to use? </h6><div id='detail-show'><p>Click check on the left side to select the column that you are interested in and you can search keyword that you want to find.When done,click Submit.</p></div></div>"

            $('#check').jstree({
                'core': {
                    'data': JSON.parse(dataHeader),
                    'themes': {
                        'name': 'proton',
                        "icons": false,
                        'responsive': true
                    },
                },
                "plugins": ["checkbox", "wholerow", "search"]
            });
            $('#check').on('ready.jstree', function() {
                $("#check").jstree("open_all");
                $("#check").jstree("check_all");           
            });
            document.getElementById('submitcheck').innerHTML = "<button id='submit' class='btn btn-primary' type='submit'>Submit</button></div>";
            $('#submit').on("click", function () {
                var selectedElmsIds = $('#check').jstree("get_selected", true);
                //console.log(selectedElmsIds);
                createListQuery(selectedElmsIds);
                
                //instance.deselect_all();
                //instance.select_node('1');
            });
            $("#search").submit(function (e) {
                e.preventDefault();
                $("#check").jstree(true).search($("#id_search").val());
            });
        }

        let createListQuery = (listSelect) => {
            let list = listSelect;
            let list2 = listSelect;     
            let lengthMaxList = 0 ;
            //console.log(list)
            // find max length parents
            for(let i = 0 ;i<list.length;i++)
            {    
                
                if(list[i].parents.length >= lengthMaxList)
                {
                    lengthMaxList = list[i].parents.length;
                    
                }
            }
           
            for(let i =1 ;i<=lengthMaxList;i++)
            {
               //=1 #
               //=2 45,#
               for(let j =0 ; j<list.length ;j++)
               {
                    //console.log("num I - "+i+" --- "+list[j].text+" len"+list[j].parents.length)
                    if(list[j].parents.length === i)
                    { 
                        console.log("+")
                        //console.log(" 1 st "+list[j].text)
                       
                        let lengthChild = list[j].children_d.length ;
                        for(let k =lengthChild-1 ; k >=0 ; k-- )
                        {
                            //console.log(list)
                            let idDelect = list[j].children_d[k].toString() ;
                            for(let q =0;q<list.length;q++)
                            {
                                //console.log(idDelect+"------------"+list[q].id+"***"+list[q].text)

                                       
                                if(idDelect == list[q].id.toString())
                                {  
                                    console.log("+"+list[q].text)
                                    //list.splice(q, 1);
                                    //list[q].text = null
                                    break;                                           
                                }
                            } 

                        }
                         
                    }
                }
            }
           
            console.log(list)
            createQueryHeader(list);

            
            
           
        }

       let createQueryHeader = (list) =>{
           // header,Stations
            //header.Url,Stations.Latitude.Value
           let arrData = []; // list new
           let str ="";
           let tempNameParents ;
           // take-out value list[i] == text 
           console.log(list)
           for(let i =0 ;i<list.length;i++)
           {
               if(list[i].text != null)
               {
                   arrData.push(list[i]);
               }
           }
           console.log(arrData)
           for(let i = 0 ; i <arrData.length ;i++)
           {
               if(str != "")
               {
                    str = str+",";
               }
               else if(arrData[i].parents.length == 1)
               {
                   //str = str+list[i].text ;
                   console.log("if -- "+arrData[i].text);
               }
               else if(arrData[i].parents.length > 1)
               {
                    console.log("if -- ddddd");
                   for(let j = arrData[i].parents.length-2 ; j >=0;j++)
                   {
                       for(let k = 0 ; k < dataHeaderList.length ;k++)
                       {
                           if(arrData[i].parents[j] == dataHeaderList[k].id)
                           {
                               console.log("if in-- "+dataHeaderList[k].text);
                               break;
                           }
                       }
                       
                   }
               }
            
               
            
            }
      
        console.log(str)
       }
    }
}

class TreeView {
    constructor() {

        //this.strUrl = this.url;

        let arrData = [];
        let dataChild = [];

        let dataHeaderAll = [];
        let num = 0;
        let num2 = 0;
        //let num2 =1 ;
        //this.dataFromUrl;

        this.clearValue = () => {
            arrData = [];
            dataChild = [];
        }

        this.getDataHeaderAll = () => {
            return dataHeaderAll;
        }

        this.getDataFormUrl = () => {
            let dataTemp;
            $.ajax({
                url: "https://data.tmd.go.th/api/Weather3Hours/V1/?type=json",
                method: "GET",
                dataType: "json",
                async: false,
                success: function (data) {
                    //console.log("Get Json Com")                    
                    dataTemp = data;

                },
                error: function (data) {
                    console.log("Error Get Json");
                }
            })
            return dataTemp;

        }

        this.getHeaderFormData = (data) => {
            let dataTemp;
            arrData = [];
            if (typeof(data) !== 'object') {

            }
            else {
                let temp;
                Object.keys(data).forEach(function (key) {
                    if (Array.isArray(data[key])) {
                        temp = data[key][0];
                    }
                    else {
                        temp = data[key];
                    }

                    //num = num2;

                    getHeader(temp, key);
                    num2++;
                    arrData.push({ 'id': num2, 'text': key, 'children': dataChild });
                    dataHeaderAll.push({ 'id': num2, 'text': key });
                    dataChild = [];
                });
            }
            dataTemp = arrData;
            arrData = [];
            return dataTemp;
            //return dataHeaderAll;
        }

        let getHeader = (dataIn) => {

            let arrDataIn = [];
            if (typeof (dataIn) !== 'object') {

            }
            else {
                Object.keys(dataIn).forEach(function (key) {

                    if (typeof (dataIn[key]) === 'object') {
                        

                        getHeader(dataIn[key]);
                        num2++;
                        arrDataIn.push({ 'id': num2, 'text': key, 'children': dataChild });
                        dataHeaderAll.push({ 'id': num2, 'text': key });
                    }
                    else {
                        
                        // if(key == "Value" || key == "Unit")
                        // {

                        // }
                        // else 
                        // {
                            num2++;
                            arrDataIn.push({ 'id': num2, 'text': key, 'children': null });
                            dataHeaderAll.push({ 'id': num2, 'text': key });
                        //}
                        
                    }
                });
                dataChild = arrDataIn;
                arrDataIn = [];
                return dataChild;
                //return arrDataIn;

            }

        }

    }
}

$(document).ready(function () {

    $(".show-header").click(function () {
        //console.log("kuy");
        let url = $("#url-webservice").val();
        //console.log(url);

        let service = new Service();
        service.initService();
    })

    // $(".show-header").click(function(){

    // })



})

