// These functions and class will allow the data to be displayed and updated every 5 seconds.
class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        uv,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ
    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.uv = uv;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}
// function to obtain data from the dataLoader.js file
function getData(){
    var loadedData = loadData();
    return loadedData;
}
function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}
function updateDisplay(){
    theTime = new Date();
    console.log("The time is " + theTime.getHours() + ":" + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":" + (theTime.getSeconds() < 10 ? + "0" : theTime.getSeconds()));
    document.getElementById("timeStamp").innerHTML = theTime.getHours() + ":" + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":" + (theTime.getSeconds() < 10 ? + "0" : theTime.getSeconds());

    var timeRead = data[index].time_seconds;
    if (timeRead >= 10){
        document.getElementById("data").rows["seconds"].innerHTML = dataRow("Time Elapsed", data[index].time_seconds, "seconds");
        document.getElementById("data").rows["latitude"].innerHTML = dataRow("Latitude", data[index].latitude, "");
        document.getElementById("data").rows["longitude"].innerHTML = dataRow("Longitude", data[index].longitude, "seconds");
        document.getElementById("data").rows["gpsSensor_alt"].innerHTML = dataRow("GPS Altitude", data[index].gps_altitude, "");
        document.getElementById("data").rows["bmpSensor_alt"].innerHTML = dataRow("BMP Altitude", data[index].bmpSensor_altitude, "");
        document.getElementById("data").rows["bmpSensor_pres"].innerHTML = dataRow("BMP Pressure", data[index].bmpSensor_pressure, "");
        document.getElementById("data").rows["bmpSensor_temp"].innerHTML = dataRow("BMP Temperature", data[index].bmpSensor_temp, "");
        document.getElementById("data").rows["digSensor_temp"].innerHTML = dataRow("Digital Temperature", data[index].digSensor_temp, "");
        document.getElementById("data").rows["cssSensor_temp"].innerHTML = dataRow("CSS Temperature", data[index].cssSensor_temp, "");
        document.getElementById("data").rows["cssSensor_eco2"].innerHTML = dataRow("CSS eCO2", data[index].cssSensor_eCO2, "");
        document.getElementById("data").rows["cssSensor_TVOC"].innerHTML = dataRow("CSS TVOC", data[index].cssSensor_TVOC, "");
        document.getElementById("data").rows["UV"].innerHTML = dataRow("UV", data[index].uv, "");
        document.getElementById("data").rows["accelX"].innerHTML = dataRow("X Acceleration", data[index].accelX, "");
        document.getElementById("data").rows["accelY"].innerHTML = dataRow("Y Acceleration", data[index].accelY, "");
        document.getElementById("data").rows["accelZ"].innerHTML = dataRow("Z Acceleration", data[index].accelZ, "");
        document.getElementById("data").rows["magneticX"].innerHTML = dataRow("X Magnetic", data[index].magneticX, "");
        document.getElementById("data").rows["magneticY"].innerHTML = dataRow("Y Magnetic", data[index].magneticY, "");
        document.getElementById("data").rows["magneticZ"].innerHTML = dataRow("Z Magnetic", data[index].magneticZ, "");
        document.getElementById("data").rows["gyroX"].innerHTML = dataRow("X Gyro", data[index].gyroX, "");
        document.getElementById("data").rows["gyroY"].innerHTML = dataRow("Y Gyro", data[index].gyroY, "");
        document.getElementById("data").rows["gyroZ"].innerHTML = dataRow("Z Gyro", data[index].gyroZ, "");
    }
    if (index > 500){
        index = 0
    } else {index++}
}