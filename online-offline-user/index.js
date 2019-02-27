'use strict';

const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const socketEvents = require('./ulitity/socket');
const helper = require('./ulitity/helper');
const bodyParser = require('body-parser');

class Server {
    constructor() {
        this.port = process.env.PORT || 3000;
        this.host = process.env.HOST || `localhost`;

        this.app = express();
        this.http = http.Server(this.app);
        this.socket = socketio(this.http);
    }

    appRun() {
        
        this.socketEvents  = new socketEvents(this.socket).socketConfig();
        this.app.use(express.static(__dirname + '/uploads'));

        this.app.use(bodyParser.urlencoded({
            extended: false
        }));

        this.app.use(bodyParser.json());
        
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Orgin, X-Requested-With, Content-Type, Accept,Authorization');
            if (req.method === 'OPTIONS') {
                res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
                return res.status(200).json({});
            }
            next();
        })

        this.app.use((req,res,next) =>{
            res.io = this.socket;
            res.socketEvents = this.socketEvents;
            // res.io = this.socket.io;
            next();
        });
    
       
        this.http.listen(this.port, this.host, () => {
            console.log(`Listening on http://${this.host}:${this.port}`);
        });

        this.app.route('/api/alert').post( async(req,res) =>{
            const response = await helper.selectUserInService(1);
            console.log(response.user)
            response.user.company.map(_data => {
                res.io.to(_data.socketId).emit("broadcast", 
                {
                    webservice_id : 1,
                    data : {
                        "Header": {
                            "Title": "WeatherToday",
                            "Description": "Today's Weather Observation",
                            "Uri": "https://data.tmd.go.th/api/WeatherToday/V1",
                            "LastBuiltDate": "19/12/2018 19:18:43",
                            "CopyRight": "Thai Meteorology Department 2015",
                            "Generator": "TMDData_API services"
                        },
                        "Stations": [{
                                "WmoNumber": "48300",
                                "StationNameTh": "แม่ฮ่องสอน",
                                "StationNameEng": "MAE HONG SON",
                                "Province": "แม่ฮ่องสอน",
                                "Latitude": {
                                    "Value": "19.298972222222222222222222222",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "97.97577777777777777777777778",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1014.52,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 22.2,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 28.8,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.8,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 21.6,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 1.9,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 95.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48325",
                                "StationNameTh": "แม่สะเรียง",
                                "StationNameEng": "MAE SARIANG",
                                "Province": "แม่ฮ่องสอน",
                                "Latitude": {
                                    "Value": "18.166666666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "97.93333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1015.09,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 21.6,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 32.8,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -1.0,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 21.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 2.0,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 90.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48303",
                                "StationNameTh": "เชียงราย",
                                "StationNameEng": "CHIANG RAI",
                                "Province": "เชียงราย",
                                "Latitude": {
                                    "Value": "19.961388888888888888888888889",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "99.88138888888888888888888889",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1015.89,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 18.7,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 28.1,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.1,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 18.3,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 1.5,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 93.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48304",
                                "StationNameTh": "เชียงราย สกษ.",
                                "StationNameEng": "CHAING RAI AGROMET.",
                                "Province": "เชียงราย",
                                "Latitude": {
                                    "Value": "19.870833333333333333333333334",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "99.78277777777777777777777778",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1016.18,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 17.9,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 27.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.0,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 17.6,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 2.2,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 96.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48310",
                                "StationNameTh": "พะเยา",
                                "StationNameEng": "PHAYAO",
                                "Province": "พะเยา",
                                "Latitude": {
                                    "Value": "19.133333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "99.9",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1016.39,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 18.5,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 29.4,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.1,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 18.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.2,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 98.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48302",
                                "StationNameTh": "ดอยอ่างขาง",
                                "StationNameEng": "DOI ANG KANG",
                                "Province": "เชียงใหม่",
                                "Latitude": {
                                    "Value": "19.931388888888888888888888889",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "99.04833333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1016.20,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 14.3,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 17.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -1.2,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 14.1,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.3,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 99.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "140",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 3.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48327",
                                "StationNameTh": "เชียงใหม่",
                                "StationNameEng": "CHIANG MAI",
                                "Province": "เชียงใหม่",
                                "Latitude": {
                                    "Value": "18.771111111111111111111111111",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "98.97250000000000000000000000",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1016.40,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 21.4,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 30.1,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -1.1,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 21.1,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 1.6,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 90.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48328",
                                "StationNameTh": "ลำปาง",
                                "StationNameEng": "LAMPANG",
                                "Province": "ลำปาง",
                                "Latitude": {
                                    "Value": "18.283333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "99.51666666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1016.13,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 19.5,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.8,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.5,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 19.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 1.5,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 95.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48324",
                                "StationNameTh": "เถิน",
                                "StationNameEng": "THOEN",
                                "Province": "ลำปาง",
                                "Latitude": {
                                    "Value": "17.636611111111111111111111111",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "99.24475000000000000000000000",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1015.65,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 18.8,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 32.3,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.4,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 18.8,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.2,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 97.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "100",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 1.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48334",
                                "StationNameTh": "ลำปาง สกษ.",
                                "StationNameEng": "LAMPANG AGROMET.",
                                "Province": "ลำปาง",
                                "Latitude": {
                                    "Value": "18.316666666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "99.28333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1016.00,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 19.0,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 29.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.1,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 18.7,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 1.5,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 95.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48329",
                                "StationNameTh": "ลำพูน",
                                "StationNameEng": "LAMPHUN",
                                "Province": "ลำพูน",
                                "Latitude": {
                                    "Value": "18.566666666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "99.03333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1015.26,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 20.3,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 30.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.7,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 20.3,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 1.7,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 96.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48330",
                                "StationNameTh": "แพร่",
                                "StationNameEng": "PHRAE",
                                "Province": "แพร่",
                                "Latitude": {
                                    "Value": "18.166666666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.16666666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1015.67,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 19.0,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 32.6,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.2,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 18.4,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.4,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 95.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48331",
                                "StationNameTh": "น่าน",
                                "StationNameEng": "NAN",
                                "Province": "น่าน",
                                "Latitude": {
                                    "Value": "18.779722222222222222222222223",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.77777777777777777777777778",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1016.82,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 18.5,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 30.4,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.8,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 18.1,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.2,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 95.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48333",
                                "StationNameTh": "น่าน สกษ.",
                                "StationNameEng": "NAN AGROMET.",
                                "Province": "น่าน",
                                "Latitude": {
                                    "Value": "18.866666666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.75",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1017.12,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 17.0,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 30.2,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.6,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 16.8,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 1.0,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 95.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48315",
                                "StationNameTh": "ท่าวังผา",
                                "StationNameEng": "THA WANGPHA",
                                "Province": "น่าน",
                                "Latitude": {
                                    "Value": "19.110555555555555555555555556",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.8025",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1017.39,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 18.0,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 30.6,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.2,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 17.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.2,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 96.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48307",
                                "StationNameTh": "ทุ่งช้าง",
                                "StationNameEng": "THUNG CHANG",
                                "Province": "น่าน",
                                "Latitude": {
                                    "Value": "19.411944444444444444444444444",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.88352777777777777777777777",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1017.97,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 16.4,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 30.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.0,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 16.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -1.3,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 99.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48351",
                                "StationNameTh": "อุตรดิตถ์",
                                "StationNameEng": "UTTARADIT",
                                "Province": "อุตรดิตถ์",
                                "Latitude": {
                                    "Value": "17.616666666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.1",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1015.08,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 20.4,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 32.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.1,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 20.3,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.9,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 87.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48352",
                                "StationNameTh": "หนองคาย",
                                "StationNameEng": "NONG KHAI",
                                "Province": "หนองคาย",
                                "Latitude": {
                                    "Value": "17.865111111111111111111111111",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "102.74727777777777777777777777",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1017.32,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 18.6,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 29.6,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.3,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 18.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 1.0,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 89.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48353",
                                "StationNameTh": "เลย",
                                "StationNameEng": "LOEI",
                                "Province": "เลย",
                                "Latitude": {
                                    "Value": "17.45",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "101.73333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1017.46,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 16.5,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 29.2,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -1.3,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 16.2,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.6,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 94.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48350",
                                "StationNameTh": "เลย สกษ.",
                                "StationNameEng": "LOEI AGROMET.",
                                "Province": "เลย",
                                "Latitude": {
                                    "Value": "17.4",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "101.73333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1017.16,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 16.0,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 30.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.5,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 16.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.1,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 99.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48354",
                                "StationNameTh": "อุดรธานี",
                                "StationNameEng": "UDON THANI",
                                "Province": "อุดรธานี",
                                "Latitude": {
                                    "Value": "17.383333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "102.8",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1017.37,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 17.3,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 29.7,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.3,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 16.8,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.8,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 95.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48356",
                                "StationNameTh": "สกลนคร",
                                "StationNameEng": "SAKON NAKHON",
                                "Province": "สกลนคร",
                                "Latitude": {
                                    "Value": "17.15",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "104.13333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1017.64,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 17.5,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 29.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.2,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 17.3,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 1.9,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 87.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48355",
                                "StationNameTh": "สกลนคร สกษ.",
                                "StationNameEng": "SAKON NAKHON AGROMET.",
                                "Province": "สกลนคร",
                                "Latitude": {
                                    "Value": "17.125027777777777777777777778",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "104.061",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1017.73,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 16.0,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 29.9,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -1.1,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 15.6,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 1.4,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 91.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48357",
                                "StationNameTh": "นครพนม",
                                "StationNameEng": "NAKHON PHANOM",
                                "Province": "นครพนม",
                                "Latitude": {
                                    "Value": "17.410833333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "104.78250000000000000000000000",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1017.88,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 16.8,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 29.7,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.7,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 16.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.9,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 92.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48358",
                                "StationNameTh": "นครพนม สกษ.",
                                "StationNameEng": "NAKHON PHANOM AGROMET.",
                                "Province": "นครพนม",
                                "Latitude": {
                                    "Value": "17.443055555555555555555555555",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "104.77361111111111111111111111",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1018.04,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 14.6,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 28.8,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.3,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 14.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 1.0,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 93.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48360",
                                "StationNameTh": "หนองบัวลำภู",
                                "StationNameEng": "NONG BUA LAM PHU",
                                "Province": "หนองบัวลำภู",
                                "Latitude": {
                                    "Value": "17.232500000000000000000000000",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "102.42944444444444444444444445",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1016.32,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 16.5,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 29.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.8,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 16.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.8,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 98.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48372",
                                "StationNameTh": "สุโขทัย",
                                "StationNameEng": "SUKHOTHAI*",
                                "Province": "สุโขทัย",
                                "Latitude": {
                                    "Value": "17.106111111111111111111111111",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "99.8",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1015.15,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 20.6,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 32.1,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.6,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 19.8,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.6,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 94.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48373",
                                "StationNameTh": "ศรีสำโรง สกษ.",
                                "StationNameEng": "SI SAMRONG AGROMET.",
                                "Province": "สุโขทัย",
                                "Latitude": {
                                    "Value": "17.161361111111111111111111111",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "99.86166666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1015.33,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 20.0,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.7,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.8,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 19.9,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -1.0,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 93.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48376",
                                "StationNameTh": "ตาก",
                                "StationNameEng": "TAK",
                                "Province": "ตาก",
                                "Latitude": {
                                    "Value": "16.878333333333333333333333334",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "99.14333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1016.06,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 20.0,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.7,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 19.4,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.4,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 95.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48375",
                                "StationNameTh": "แม่สอด",
                                "StationNameEng": "MAE SOT",
                                "Province": "ตาก",
                                "Latitude": {
                                    "Value": "16.659166666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "98.55083333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1015.98,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 20.0,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.2,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -1.4,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 18.9,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.0,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 93.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48377",
                                "StationNameTh": "เขื่อนภูมิพล",
                                "StationNameEng": "BHUMIBOL DAM",
                                "Province": "ตาก",
                                "Latitude": {
                                    "Value": "17.243888888888888888888888889",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "99.0025",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1015.41,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 19.5,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 30.7,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -1.6,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 19.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.5,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 95.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48387",
                                "StationNameTh": "ดอยมูเซอ สกษ.",
                                "StationNameEng": "DOI MU SOE AGROMET.",
                                "Province": "ตาก",
                                "Latitude": {
                                    "Value": "16.75",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "98.93333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1015.96,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 15.0,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 24.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.8,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 14.7,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -1.8,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 98.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48385",
                                "StationNameTh": "อุ้มผาง",
                                "StationNameEng": "UMPHANG",
                                "Province": "ตาก",
                                "Latitude": {
                                    "Value": "16.024722222222222222222222223",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "98.86444444444444444444444444",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1017.48,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 16.2,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.5,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 15.7,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.5,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 96.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48378",
                                "StationNameTh": "พิษณุโลก",
                                "StationNameEng": "PHITSANULOK",
                                "Province": "พิษณุโลก",
                                "Latitude": {
                                    "Value": "16.794805555555555555555555555",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.27930555555555555555555556",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1015.30,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 21.0,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.4,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.6,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 20.6,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -1.1,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 91.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48379",
                                "StationNameTh": "เพชรบูรณ์",
                                "StationNameEng": "PHETCHABUN",
                                "Province": "เพชรบูรณ์",
                                "Latitude": {
                                    "Value": "16.433333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "101.15",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1014.51,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 19.4,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 32.2,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.8,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 19.3,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -1.1,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 87.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48374",
                                "StationNameTh": "หล่มสัก",
                                "StationNameEng": "LOM SAK",
                                "Province": "เพชรบูรณ์",
                                "Latitude": {
                                    "Value": "16.773611111111111111111111111",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "101.24944444444444444444444444",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1017.40,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 19.0,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 32.1,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -1.1,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 18.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -1.3,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 85.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48413",
                                "StationNameTh": "วิเชียรบุรี",
                                "StationNameEng": "WICHIAN BURI",
                                "Province": "เพชรบูรณ์",
                                "Latitude": {
                                    "Value": "15.657",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "101.108",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1015.69,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 20.5,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.8,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.7,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 20.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.3,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 86.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48380",
                                "StationNameTh": "กำแพงเพชร",
                                "StationNameEng": "KAMPHAENG PHET",
                                "Province": "กำแพงเพชร",
                                "Latitude": {
                                    "Value": "16.486805555555555555555555555",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "99.52697222222222222222222223",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1015.02,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 21.3,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 32.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.2,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 21.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.3,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 94.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48381",
                                "StationNameTh": "ขอนแก่น",
                                "StationNameEng": "KHON KAEN",
                                "Province": "ขอนแก่น",
                                "Latitude": {
                                    "Value": "16.461111111111111111111111111",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "102.78972222222222222222222222",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1017.45,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 18.5,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 30.4,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.1,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 18.4,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.9,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 87.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48384",
                                "StationNameTh": "ท่าพระ สกษ.",
                                "StationNameEng": "THA PHRA AGROMET.",
                                "Province": "ขอนแก่น",
                                "Latitude": {
                                    "Value": "16.333333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "102.81666666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1016.20,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 17.6,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.6,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 17.1,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 1.0,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 92.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48383",
                                "StationNameTh": "มุกดาหาร",
                                "StationNameEng": "MUKDAHAN",
                                "Province": "มุกดาหาร",
                                "Latitude": {
                                    "Value": "16.541388888888888888888888889",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "104.72888888888888888888888889",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1016.43,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 18.3,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 30.1,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 1.0,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 18.1,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.5,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 88.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "030",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 3.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48386",
                                "StationNameTh": "พิจิตร สกษ.",
                                "StationNameEng": "PICHIT AGROMET.",
                                "Province": "พิจิตร",
                                "Latitude": {
                                    "Value": "16.338777777777777777777777777",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.36711111111111111111111111",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1014.93,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 21.7,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 32.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.6,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 20.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.5,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 92.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48382",
                                "StationNameTh": "มหาสารคาม",
                                "StationNameEng": "MAHASARAKHAM",
                                "Province": "มหาสารคาม",
                                "Latitude": {
                                    "Value": "16.247222222222222222222222222",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "103.06805555555555555555555556",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1017.36,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 19.8,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 30.8,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.7,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 18.8,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 1.8,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 83.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48390",
                                "StationNameTh": "กาฬสินธุ์",
                                "StationNameEng": "KALASIN",
                                "Province": "กาฬสินธุ์",
                                "Latitude": {
                                    "Value": "16.332027777777777777777777778",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "103.58752777777777777777777777",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1016.53,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 17.6,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 30.7,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -1.1,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 17.4,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 1.2,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 99.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48400",
                                "StationNameTh": "นครสวรรค์ ",
                                "StationNameEng": "NAKHON SAWAN",
                                "Province": "นครสวรรค์",
                                "Latitude": {
                                    "Value": "15.671833333333333333333333334",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.13236111111111111111111111",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1015.06,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 20.8,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 32.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.9,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 19.7,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.7,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 87.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48401",
                                "StationNameTh": "ตากฟ้า สกษ.",
                                "StationNameEng": "TAKFA AGROMET.",
                                "Province": "นครสวรรค์",
                                "Latitude": {
                                    "Value": "15.349444444444444444444444444",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.53027777777777777777777778",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1016.47,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 24.5,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 32.4,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.2,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 21.3,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -1.2,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 57.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "040",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 2.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48402",
                                "StationNameTh": "ชัยนาท สกษ.",
                                "StationNameEng": "CHAINAT AGROMET.",
                                "Province": "ชัยนาท",
                                "Latitude": {
                                    "Value": "15.15",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.18333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1015.35,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 21.5,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.7,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.3,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 21.2,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.2,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 86.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48403",
                                "StationNameTh": "ชัยภูมิ",
                                "StationNameEng": "CHAIYAPHUM",
                                "Province": "ชัยภูมิ",
                                "Latitude": {
                                    "Value": "15.8",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "102.03333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1016.45,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 20.8,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 30.2,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.7,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 20.2,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 1.2,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 75.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48405",
                                "StationNameTh": "ร้อยเอ็ด",
                                "StationNameEng": "ROI ET",
                                "Province": "ร้อยเอ็ด",
                                "Latitude": {
                                    "Value": "16.020000000000000000000000000",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "103.74388888888888888888888889",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1016.49,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 18.8,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 30.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -1.4,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 18.7,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 1.1,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 88.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48404",
                                "StationNameTh": "ร้อยเอ็ด สกษ.",
                                "StationNameEng": "ROI ET AGROMET.",
                                "Province": "ร้อยเอ็ด",
                                "Latitude": {
                                    "Value": "16.073222222222222222222222223",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "103.60844444444444444444444444",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1016.80,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 18.5,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 29.7,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.5,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 17.8,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 1.7,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 85.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48408",
                                "StationNameTh": "อุบลราชธานี สกษ.",
                                "StationNameEng": "UBON RATCHATHANI AGROMET.",
                                "Province": "อุบลราชธานี",
                                "Latitude": {
                                    "Value": "15.239138888888888888888888889",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "105.02350000000000000000000000",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1017.30,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 18.5,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 32.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.5,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 18.2,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.3,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 93.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48407",
                                "StationNameTh": "อุบลราชธานี (ศูนย์ฯ)",
                                "StationNameEng": "UBON RATCHATHANI",
                                "Province": "อุบลราชธานี",
                                "Latitude": {
                                    "Value": "15.25",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "104.86666666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1016.75,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 18.9,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 32.7,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.1,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 18.6,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.4,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 88.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48409",
                                "StationNameTh": "ศรีสะเกษ",
                                "StationNameEng": "SI SAKET AGROMET.",
                                "Province": "ศรีสะเกษ",
                                "Latitude": {
                                    "Value": "15.0",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "104.05",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1016.94,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 19.2,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.2,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.8,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 18.3,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.1,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 88.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48415",
                                "StationNameTh": "พระนครศรีอยุธยา",
                                "StationNameEng": "AYUTTHAYA",
                                "Province": "พระนครศรีอยุธยา",
                                "Latitude": {
                                    "Value": "14.534722222222222222222222222",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.72500000000000000000000000",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1014.46,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 23.7,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 32.6,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.2,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 22.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.8,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 69.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "050",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 9.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48419",
                                "StationNameTh": "ปทุมธานี สกษ.",
                                "StationNameEng": "PATHUMTHANI",
                                "Province": "ปทุมธานี",
                                "Latitude": {
                                    "Value": "14.1",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.61666666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1014.24,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 23.0,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 33.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.5,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 22.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.0,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 89.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48458",
                                "StationNameTh": "ฉะเชิงเทรา",
                                "StationNameEng": "CHACHOENGSAO",
                                "Province": "ฉะเชิงเทรา",
                                "Latitude": {
                                    "Value": "13.515555555555555555555555556",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "101.45833333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1017.18,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 21.2,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 32.3,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 1.1,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 21.2,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 1.5,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 86.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "020",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 2.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48464",
                                "StationNameTh": "ราชบุรี",
                                "StationNameEng": "RATCHA BURI",
                                "Province": "ราชบุรี",
                                "Latitude": {
                                    "Value": "13.489305555555555555555555555",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "99.79238888888888888888888889",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1014.91,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 22.7,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 30.4,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -1.0,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 22.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.5,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 86.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "320",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 4.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48425",
                                "StationNameTh": "สุพรรณบุรี",
                                "StationNameEng": "SUPHAN BURI",
                                "Province": "สุพรรณบุรี",
                                "Latitude": {
                                    "Value": "14.474444444444444444444444445",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.13888888888888888888888889",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1014.85,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 22.6,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -1.1,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 22.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.3,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 86.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48427",
                                "StationNameTh": "อู่ทอง สกษ.",
                                "StationNameEng": "U THONG AGROMET.",
                                "Province": "สุพรรณบุรี",
                                "Latitude": {
                                    "Value": "14.303611111111111111111111111",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "99.86472222222222222222222222",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1014.78,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 20.9,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.4,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.0,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 20.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -1.1,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 92.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48426",
                                "StationNameTh": "ลพบุรี",
                                "StationNameEng": "LOP BURI",
                                "Province": "ลพบุรี",
                                "Latitude": {
                                    "Value": "14.799722222222222222222222222",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.62833333333333333333333334",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1014.72,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 24.9,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 32.3,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.3,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 22.9,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.2,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 58.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "050",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 3.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48418",
                                "StationNameTh": "บัวชุม  ",
                                "StationNameEng": "BUA CHUM",
                                "Province": "ลพบุรี",
                                "Latitude": {
                                    "Value": "15.266666666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "101.18736111111111111111111111",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1016.07,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 21.6,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -1.0,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 19.4,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -1.0,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 77.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48457",
                                "StationNameTh": "นำร่อง",
                                "StationNameEng": "PILOT STATION",
                                "Province": "สมุทรปราการ",
                                "Latitude": {
                                    "Value": "13.377222222222222222222222223",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.59944444444444444444444444",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1013.86,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 24.8,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 2.2,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 23.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.3,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 75.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "050",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 13.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48420",
                                "StationNameTh": "สมุทรปราการ สกษ.",
                                "StationNameEng": "Samut Prakarn",
                                "Province": "สมุทรปราการ",
                                "Latitude": {
                                    "Value": "13.516666666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.76166666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1013.77,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 24.5,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.7,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.2,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 23.7,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.3,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 75.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "120",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 6.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48429",
                                "StationNameTh": "สนามบินสุวรรณภูมิ",
                                "StationNameEng": "SUVARNABHUMI AIRPORT",
                                "Province": "สมุทรปราการ",
                                "Latitude": {
                                    "Value": "13.686388888888888888888888889",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.76750000000000000000000000",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1014.41,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 24.4,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.1,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.4,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 22.4,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.4,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 75.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "090",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 3.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48430",
                                "StationNameTh": "ปราจีนบุรี",
                                "StationNameEng": "PRACHIN BURI",
                                "Province": "ปราจีนบุรี",
                                "Latitude": {
                                    "Value": "14.058416666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "101.36930555555555555555555556",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1014.17,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 24.1,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 32.8,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.3,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 22.9,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.4,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 67.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48439",
                                "StationNameTh": "กบินทร์บุรี",
                                "StationNameEng": "KABIN BURI",
                                "Province": "ปราจีนบุรี",
                                "Latitude": {
                                    "Value": "13.983333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "101.70722222222222222222222222",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1014.70,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 22.0,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 32.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.6,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 21.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.3,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 86.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48431",
                                "StationNameTh": "นครราชสีมา",
                                "StationNameEng": "NAKHON RATCHASIMA",
                                "Province": "นครราชสีมา",
                                "Latitude": {
                                    "Value": "14.968305555555555555555555556",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "102.08602777777777777777777777",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1016.86,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 21.0,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 30.1,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -1.4,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 20.8,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 1.7,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 85.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "110",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 4.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48435",
                                "StationNameTh": "ปากช่อง สกษ.",
                                "StationNameEng": "PAKCHONG AGROMET.",
                                "Province": "นครราชสีมา",
                                "Latitude": {
                                    "Value": "14.643888888888888888888888889",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "101.33194444444444444444444445",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1015.95,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 21.2,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 29.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.1,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 20.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 2.0,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 68.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "110",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 8.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48434",
                                "StationNameTh": "โชคชัย",
                                "StationNameEng": "CHOK CHAI",
                                "Province": "นครราชสีมา",
                                "Latitude": {
                                    "Value": "14.718888888888888888888888889",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "102.16861111111111111111111111",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1016.75,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 20.5,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 30.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -1.5,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 20.1,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 1.4,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 91.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48432",
                                "StationNameTh": "สุรินทร์",
                                "StationNameEng": "SURIN",
                                "Province": "สุรินทร์",
                                "Latitude": {
                                    "Value": "14.883333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "103.5",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1016.72,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 19.5,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 30.8,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.5,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 19.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 1.1,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 88.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "060",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 2.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48433",
                                "StationNameTh": "สุรินทร์ สกษ.",
                                "StationNameEng": "SURIN AGROMET.",
                                "Province": "สุรินทร์",
                                "Latitude": {
                                    "Value": "14.883333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "103.45",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1017.10,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 18.7,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.0,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 18.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.5,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 92.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48416",
                                "StationNameTh": "ท่าตูม",
                                "StationNameEng": "THA TUM",
                                "Province": "สุรินทร์",
                                "Latitude": {
                                    "Value": "15.316666666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "103.68333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1016.20,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 20.8,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 30.8,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.4,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 20.2,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 1.7,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 81.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "010",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 2.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48437",
                                "StationNameTh": "บุรีรัมย์",
                                "StationNameEng": "BURIRUM",
                                "Province": "บุรีรัมย์",
                                "Latitude": {
                                    "Value": "15.225750000000000000000000000",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "103.24808333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1017.84,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 18.3,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 30.4,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.5,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 18.2,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 1.5,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 95.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "040",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 4.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48436",
                                "StationNameTh": "นางรอง",
                                "StationNameEng": "NANG RONG",
                                "Province": "บุรีรัมย์",
                                "Latitude": {
                                    "Value": "14.583333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "102.8",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1016.61,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 19.8,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 30.8,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -1.0,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 19.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 1.2,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 90.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48462",
                                "StationNameTh": "อรัญประเทศ",
                                "StationNameEng": "ARANYA PRATHET",
                                "Province": "สระแก้ว",
                                "Latitude": {
                                    "Value": "13.7",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "102.58333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1015.32,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 22.5,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 32.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.3,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 21.8,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.7,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 83.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48440",
                                "StationNameTh": "สระแก้ว",
                                "StationNameEng": "SA KAEW",
                                "Province": "สระแก้ว",
                                "Latitude": {
                                    "Value": "13.788888888888888888888888889",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "102.03472222222222222222222222",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1014.87,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 21.2,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 32.1,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.7,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 21.1,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.2,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 94.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48450",
                                "StationNameTh": "กาญจนบุรี",
                                "StationNameEng": "KANCHANA BURI",
                                "Province": "กาญจนบุรี",
                                "Latitude": {
                                    "Value": "14.022500000000000000000000000",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "99.53583333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1014.71,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 22.3,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.0,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 20.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.5,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 84.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48421",
                                "StationNameTh": "ทองผาภูมิ",
                                "StationNameEng": "THONG PHAPHUM",
                                "Province": "กาญจนบุรี",
                                "Latitude": {
                                    "Value": "14.742222222222222222222222222",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "98.63638888888888888888888889",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1015.22,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 19.8,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 33.7,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.3,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 19.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -1.2,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 92.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48451",
                                "StationNameTh": "นครปฐม",
                                "StationNameEng": "NAKHONPATHOM",
                                "Province": "นครปฐม",
                                "Latitude": {
                                    "Value": "14.011666666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "99.97000000000000000000000000",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1014.64,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 21.6,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 29.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -1.2,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 21.3,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.1,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 95.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48455",
                                "StationNameTh": "กรุงเทพมหานคร",
                                "StationNameEng": "BANGKOK METROPOLIS",
                                "Province": "กรุงเทพมหานคร",
                                "Latitude": {
                                    "Value": "13.726388888888888888888888889",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.56",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1014.15,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 25.2,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 33.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.5,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 25.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.5,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 69.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "090",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 2.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48454",
                                "StationNameTh": "กรุงเทพฯ ท่าเรือคลองเตย",
                                "StationNameEng": "BANGKOK PORT (KLONG TOEI)",
                                "Province": "กรุงเทพมหานคร",
                                "Latitude": {
                                    "Value": "13.706944444444444444444444444",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.56805555555555555555555556",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1014.13,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 25.0,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 33.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 1.2,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 23.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.8,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 79.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48453",
                                "StationNameTh": "กรุงเทพฯ บางนา สกษ.",
                                "StationNameEng": "BANG NA AGROMET.",
                                "Province": "กรุงเทพมหานคร",
                                "Latitude": {
                                    "Value": "13.666388888888888888888888889",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.60611111111111111111111111",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1014.24,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 23.5,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 32.1,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.2,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 23.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.8,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 87.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "060",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 2.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48456",
                                "StationNameTh": "สนามบินดอนเมือง",
                                "StationNameEng": "DON MUANG AIRPORT",
                                "Province": "กรุงเทพมหานคร",
                                "Latitude": {
                                    "Value": "13.919166666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.605",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1014.31,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 23.4,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 32.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.6,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 23.3,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.5,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 85.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "080",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 1.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48459",
                                "StationNameTh": "ชลบุรี",
                                "StationNameEng": "CHON BURI",
                                "Province": "ชลบุรี",
                                "Latitude": {
                                    "Value": "13.366666666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.98333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1014.42,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 24.6,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 34.2,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.6,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 24.4,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.4,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 75.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "090",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 3.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48460",
                                "StationNameTh": "เกาะสีชัง",
                                "StationNameEng": "KO SICHANG",
                                "Province": "ชลบุรี",
                                "Latitude": {
                                    "Value": "13.161666666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.80194444444444444444444444",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1013.23,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 26.5,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.4,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.7,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 25.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.6,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 81.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "080",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 6.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48461",
                                "StationNameTh": "พัทยา",
                                "StationNameEng": "PHATTHAYA",
                                "Province": "ชลบุรี",
                                "Latitude": {
                                    "Value": "12.920000000000000000000000000",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.86944444444444444444444445",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1013.68,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 25.5,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -1.5,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 25.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.7,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 67.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "070",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 4.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48477",
                                "StationNameTh": "สัตหีบ",
                                "StationNameEng": "SATTAHIP",
                                "Province": "ชลบุรี",
                                "Latitude": {
                                    "Value": "12.683333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.98333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1013.94,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 24.5,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 33.6,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.9,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 23.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.5,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 75.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "020",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 4.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48463",
                                "StationNameTh": "แหลมฉบัง",
                                "StationNameEng": "LAEM CHABANG",
                                "Province": "ชลบุรี",
                                "Latitude": {
                                    "Value": "13.076944444444444444444444445",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.87583333333333333333333334",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1014.80,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 25.5,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 33.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -1.3,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 25.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.5,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 66.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48465",
                                "StationNameTh": "เพชรบุรี",
                                "StationNameEng": "PHETCHA BURI",
                                "Province": "เพชรบุรี",
                                "Latitude": {
                                    "Value": "12.999444444444444444444444444",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.06055555555555555555555556",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1014.24,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 23.9,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.5,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 23.2,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.2,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 84.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "360",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 8.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48478",
                                "StationNameTh": "ระยอง",
                                "StationNameEng": "RAYONG",
                                "Province": "ระยอง",
                                "Latitude": {
                                    "Value": "12.632222222222222222222222223",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "101.34361111111111111111111111",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1013.56,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 24.3,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 33.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.0,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 24.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.2,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 81.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48479",
                                "StationNameTh": "ห้วยโป่ง สกษ.",
                                "StationNameEng": "HUAI PONG AGROMET.",
                                "Province": "ระยอง",
                                "Latitude": {
                                    "Value": "12.735000000000000000000000000",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "101.13500000000000000000000000",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1013.73,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 24.6,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 33.1,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.3,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 23.4,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.4,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 69.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "050",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 4.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48480",
                                "StationNameTh": "จันทบุรี",
                                "StationNameEng": "CHANTHA BURI",
                                "Province": "จันทบุรี",
                                "Latitude": {
                                    "Value": "12.616666666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "102.11333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1013.75,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 25.0,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 32.7,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.7,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 24.3,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.6,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 69.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "010",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 8.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48481",
                                "StationNameTh": "พลิ้ว สกษ.",
                                "StationNameEng": "PHLIU  AGROMET.",
                                "Province": "จันทบุรี",
                                "Latitude": {
                                    "Value": "12.508611111111111111111111111",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "102.17305555555555555555555556",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1013.95,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 22.7,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 33.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.5,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 22.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.8,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 88.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48500",
                                "StationNameTh": "ประจวบคีรีขันธ์",
                                "StationNameEng": "PRACHUAP KHIRIKHAN",
                                "Province": "ประจวบคีรีขันธ์",
                                "Latitude": {
                                    "Value": "11.833333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "99.83333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1013.37,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 25.5,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.1,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 1.5,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 23.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.4,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 69.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "360",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 3.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48475",
                                "StationNameTh": "หัวหิน",
                                "StationNameEng": "HUA HIN",
                                "Province": "ประจวบคีรีขันธ์",
                                "Latitude": {
                                    "Value": "12.586111111111111111111111111",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "99.9625",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1013.71,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 26.6,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 30.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.2,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 25.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.5,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 60.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48474",
                                "StationNameTh": "หนองพลับ สกษ.",
                                "StationNameEng": "NONG PHLUB AGROMET.",
                                "Province": "ประจวบคีรีขันธ์",
                                "Latitude": {
                                    "Value": "12.583333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "99.73333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1014.49,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 23.0,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 30.2,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.9,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 22.2,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.7,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 88.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48501",
                                "StationNameTh": "ตราด",
                                "StationNameEng": "TRAD",
                                "Province": "ตราด",
                                "Latitude": {
                                    "Value": "11.766666666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "102.88333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1012.90,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 24.2,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 34.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.5,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 23.1,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -1.0,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 86.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "110",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 2.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48517",
                                "StationNameTh": "ชุมพร",
                                "StationNameEng": "CHUMPHON",
                                "Province": "ชุมพร",
                                "Latitude": {
                                    "Value": "10.498750000000000000000000000",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "99.18847222222222222222222222",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1013.13,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 24.3,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 4.1,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 24.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.4,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 93.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 0.01,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48520",
                                "StationNameTh": "สวี สกษ.",
                                "StationNameEng": "SAWI AGROMET.",
                                "Province": "ชุมพร",
                                "Latitude": {
                                    "Value": "10.333333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "99.1",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1012.74,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 24.4,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.2,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 3.8,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 23.4,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.3,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 98.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "140",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 1.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 1.80,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48532",
                                "StationNameTh": "ระนอง",
                                "StationNameEng": "RANONG",
                                "Province": "ระนอง",
                                "Latitude": {
                                    "Value": "9.983333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "98.61666666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1012.77,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 24.0,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 32.4,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 4.2,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 24.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -1.1,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 95.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "040",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 2.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 16.60,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48551",
                                "StationNameTh": "สุราษฎร์ธานี",
                                "StationNameEng": "SURAT THANI",
                                "Province": "สุราษฎร์ธานี",
                                "Latitude": {
                                    "Value": "9.135555555555555555555555555",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "99.15194444444444444444444444",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1013.75,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 24.3,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 30.3,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 2.5,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 24.2,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.6,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 98.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 2.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48550",
                                "StationNameTh": "เกาะสมุย",
                                "StationNameEng": "KO SAMUI",
                                "Province": "สุราษฎร์ธานี",
                                "Latitude": {
                                    "Value": "9.466666666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.05",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1013.40,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 26.3,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 29.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.6,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 24.7,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -2.7,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 98.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "360",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 3.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 94.70,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48555",
                                "StationNameTh": "สุราษฎร์ธานี สกษ.",
                                "StationNameEng": "SURAT THANI AGROMET.",
                                "Province": "สุราษฎร์ธานี",
                                "Latitude": {
                                    "Value": "9.1",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "99.63333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1015.11,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 24.1,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 28.3,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -1.8,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 23.8,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.6,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 99.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 24.70,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48556",
                                "StationNameTh": "พระแสง สอท.",
                                "StationNameEng": "PHRA SANG",
                                "Province": "สุราษฎร์ธานี",
                                "Latitude": {
                                    "Value": "8.570222222222222222222222223",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "99.25825",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1010.18,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 23.0,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.8,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 1.8,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 22.6,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.2,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 98.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 3.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48552",
                                "StationNameTh": "นครศรีธรรมราช",
                                "StationNameEng": "NAKHONSI THAMMARAT",
                                "Province": "นครศรีธรรมราช",
                                "Latitude": {
                                    "Value": "8.537777777777777777777777777",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "99.94722222222222222222222222",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1012.85,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 26.4,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.4,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 2.0,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 25.3,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.3,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 93.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "230",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 4.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 2.80,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48554",
                                "StationNameTh": "นครศรีธรรมราช สกษ.",
                                "StationNameEng": "NAKHONSI THAMMARAT AGROMET.",
                                "Province": "นครศรีธรรมราช",
                                "Latitude": {
                                    "Value": "8.359305555555555555555555556",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.0",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1012.81,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 25.2,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 30.6,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 1.6,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 25.2,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.2,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 98.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 3.60,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48557",
                                "StationNameTh": "ฉวาง",
                                "StationNameEng": "CHAWANG",
                                "Province": "นครศรีธรรมราช",
                                "Latitude": {
                                    "Value": "8.424722222222222222222222223",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "99.50666666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1012.83,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 23.8,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 1.7,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 23.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.5,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 97.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 30.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48560",
                                "StationNameTh": "พัทลุง สกษ.",
                                "StationNameEng": "PHATTHALUNG AGROMET.",
                                "Province": "พัทลุง",
                                "Latitude": {
                                    "Value": "7.5833333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.16666666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1012.52,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 24.8,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 30.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.6,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 24.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.3,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 98.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 77.10,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48561",
                                "StationNameTh": "ตะกั่วป่า",
                                "StationNameEng": "TAKUA PA",
                                "Province": "พังงา",
                                "Latitude": {
                                    "Value": "8.684166666666666666666666666",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "98.25222222222222222222222222",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1011.82,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 24.5,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.7,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.7,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 24.2,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.2,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 96.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 16.40,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48564",
                                "StationNameTh": "ภูเก็ต",
                                "StationNameEng": "PHUKET",
                                "Province": "ภูเก็ต",
                                "Latitude": {
                                    "Value": "7.8833333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "98.4",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1012.52,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 25.3,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.1,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 25.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.5,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 95.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 10.60,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48565",
                                "StationNameTh": "ภูเก็ต (ศูนย์ฯ)",
                                "StationNameEng": "PHUKET AIRPORT",
                                "Province": "ภูเก็ต",
                                "Latitude": {
                                    "Value": "8.145000000000000000000000000",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "98.31444444444444444444444444",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1010.96,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 25.2,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.1,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 24.2,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.1,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 93.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "100",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 5.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 3.40,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48566",
                                "StationNameTh": "เกาะลันตา",
                                "StationNameEng": "KO LANTA",
                                "Province": "กระบี่",
                                "Latitude": {
                                    "Value": "7.5333333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "99.05",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1011.98,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 24.3,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 30.1,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.7,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 23.8,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -1.6,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 95.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "040",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 5.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 12.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48563",
                                "StationNameTh": "กระบี่",
                                "StationNameEng": "KRABI",
                                "Province": "กระบี่",
                                "Latitude": {
                                    "Value": "8.103611111111111111111111111",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "98.97527777777777777777777778",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1012.74,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 23.7,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 32.1,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 1.3,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 23.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.8,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 96.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "040",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 3.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 6.10,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48567",
                                "StationNameTh": "ตรัง",
                                "StationNameEng": "TRANG AIRPORT",
                                "Province": "ตรัง",
                                "Latitude": {
                                    "Value": "7.5166666666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "99.61666666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1012.87,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 24.0,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 29.1,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.6,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 23.3,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.8,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 97.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "050",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 4.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 91.40,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48571",
                                "StationNameTh": "คอหงษ์ สกษ.",
                                "StationNameEng": "KHO HONG AGROMET.",
                                "Province": "สงขลา",
                                "Latitude": {
                                    "Value": "7.0",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.5",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1014.14,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 25.2,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 29.3,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.2,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 23.2,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.8,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 95.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 27.80,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48574",
                                "StationNameTh": "สะเดา",
                                "StationNameEng": "SA DAO",
                                "Province": "สงขลา",
                                "Latitude": {
                                    "Value": "6.7980555555555555555555555555",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.39055555555555555555555555",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1012.62,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 25.1,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 29.6,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.4,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 23.6,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.3,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 98.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 9.90,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48568",
                                "StationNameTh": "สงขลา",
                                "StationNameEng": "SONGKHLA",
                                "Province": "สงขลา",
                                "Latitude": {
                                    "Value": "7.1821111111111111111111111111",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.60769444444444444444444444",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1012.98,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 25.6,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 28.7,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -2.5,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 24.5,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.1,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 91.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "100",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 5.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 50.70,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48569",
                                "StationNameTh": "หาดใหญ่",
                                "StationNameEng": "HAT YAI AIRPORT",
                                "Province": "สงขลา",
                                "Latitude": {
                                    "Value": "6.9166666666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.43333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1013.04,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 24.1,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 29.7,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.6,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 23.8,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": -0.4,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 97.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "290",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 4.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 33.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48570",
                                "StationNameTh": "สตูล",
                                "StationNameEng": "SATUN",
                                "Province": "สตูล",
                                "Latitude": {
                                    "Value": "6.65",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "100.08333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1012.06,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 25.0,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 31.1,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 1.6,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 24.4,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.2,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 94.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 8.00,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48580",
                                "StationNameTh": "ปัตตานี",
                                "StationNameEng": "PATTANI AIRPORT",
                                "Province": "ปัตตานี",
                                "Latitude": {
                                    "Value": "6.7833333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "101.15",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1011.82,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 24.3,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 29.0,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -1.1,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 24.1,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.6,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 97.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "///",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 37.80,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48581",
                                "StationNameTh": "ยะลา สกษ.",
                                "StationNameEng": "YALA AGROMET.",
                                "Province": "ยะลา",
                                "Latitude": {
                                    "Value": "6.5166666666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "101.28333333333333333333333333",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1013.85,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 24.5,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 28.4,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": 0.4,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": {
                                        "Value": 23.3,
                                        "Unit": "celcius"
                                    },
                                    "DiffMinTemperature": {
                                        "Value": 0.3,
                                        "Unit": "hPa"
                                    },
                                    "RelativeHumidity": {
                                        "Value": 97.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 57.50,
                                        "Unit": "mm"
                                    }
                                }
                            },
                            {
                                "WmoNumber": "48583",
                                "StationNameTh": "นราธิวาส",
                                "StationNameEng": "NARATHIWAT",
                                "Province": "นราธิวาส",
                                "Latitude": {
                                    "Value": "6.4166666666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Longitude": {
                                    "Value": "101.81666666666666666666666667",
                                    "Unit": "decimal degree"
                                },
                                "Observe": {
                                    "Time": "19/12/2018",
                                    "MeanSeaLevelPressure": {
                                        "Value": 1012.81,
                                        "Unit": "hPa"
                                    },
                                    "Temperature": {
                                        "Value": 24.8,
                                        "Unit": "celcius"
                                    },
                                    "MaxTemperature": {
                                        "Value": 27.2,
                                        "Unit": "celcius"
                                    },
                                    "DiffMaxTemperature": {
                                        "Value": -0.8,
                                        "Unit": "celcius"
                                    },
                                    "MinTemperature": null,
                                    "DiffMinTemperature": null,
                                    "RelativeHumidity": {
                                        "Value": 93.0,
                                        "Unit": "%"
                                    },
                                    "WindDirection": {
                                        "Value": "000",
                                        "Unit": "degree"
                                    },
                                    "WindSpeed": {
                                        "Value": 0.0,
                                        "Unit": "km/h"
                                    },
                                    "Rainfall": {
                                        "Value": 59.60,
                                        "Unit": "mm"
                                    }
                                }
                            }
                        ]
                    }
                    
                });
            })
            res.status(201).json({test:response});
        });
    }
}

const app = new Server();
app.appRun();
