const onDocumentLoad = () => {
    document.getElementById("parcel-area").addEventListener("change", clearResults);
    document.getElementById("building-count").addEventListener("change", clearResults);
    document.getElementById("floor-count").addEventListener("change", clearResults);
    document.getElementById("base-area").addEventListener("change", clearResults);

    document.getElementById("btn-calculate").addEventListener("click", calculate);
}
const clearResults = () => {
    document.getElementById("field-5-a-result").value = "";
}
const calculateEtut = (parcelArea) => {
    let baseValue = 1890;
    let subLimit = 100;
    let multiplier = 1;
    let result = 0;
    let lastLimit;
    let nextLimit = 0;
    let interval;

    if (parcelArea > nextLimit) {
        lastLimit = nextLimit;
        nextLimit = 500;
        result += baseValue;
        
    }

    if (parcelArea > nextLimit) {
        lastLimit = nextLimit;
        nextLimit = 1000
        multiplier = 240;
        interval = Math.min(parcelArea, nextLimit) - lastLimit;
        result += multiplier * interval / subLimit;
        
    }
    if (parcelArea > nextLimit) {
        lastLimit = nextLimit;
        nextLimit = 2000;
        multiplier = 141
        interval = Math.min(parcelArea, nextLimit) - lastLimit;
        result += multiplier * interval / subLimit;
    }
    if (parcelArea > nextLimit) {
        lastLimit = nextLimit;
        nextLimit = 5000;
        multiplier = 90
        interval = Math.min(parcelArea, nextLimit ) - lastLimit;
        result += multiplier * interval / subLimit;
    }
    if (parcelArea > nextLimit) {
        lastLimit = nextLimit;
        nextLimit = 10000
        multiplier = 33
        interval = Math.min(parcelArea, nextLimit ) - lastLimit;
        result += multiplier * interval / subLimit;
    }
    if (parcelArea > nextLimit) {
        lastLimit = nextLimit;
        subLimit = 1000;
        multiplier = 32
        interval = parcelArea - lastLimit;
        result += multiplier * interval / subLimit;
    }
    return result;
}

const calculateProject = (buildingCount, floorCount, baseArea) => {

    let result = 0;
    if(buildingCount + floorCount + baseArea == 0)
    {
        return result;
    }
    if( 0 < baseArea && baseArea <= 100){
        result = 3210;
    }
    if( 100 < baseArea && baseArea <= 150){
        result = 3743;
    }
    if( 150 < baseArea){
        result = 4643;
    }
    let baseLimit = 250;
    let multiplier = 1;
    let subLimit = 100;
    let lastLimit = 0;
    let nextLimit = baseLimit;
    let interval;

    if (baseArea > nextLimit) {
        lastLimit = nextLimit;
        nextLimit = 1000;
        multiplier = 503;
        interval = Math.min(baseArea, nextLimit ) - lastLimit;
        result += multiplier * interval / subLimit;    
    }
    if (baseArea > nextLimit) {
        lastLimit = nextLimit;
        nextLimit = 2000;
        multiplier = 315;
        interval = Math.min(baseArea, nextLimit ) - lastLimit;
        result += multiplier * interval / subLimit;    
    }
    if (baseArea > nextLimit) {
        lastLimit = nextLimit;
        nextLimit = 5000;
        multiplier = 145;
        interval = Math.min(baseArea, nextLimit ) - lastLimit;
        result += multiplier * interval / subLimit;    
    }

    if (baseArea > nextLimit) {
        lastLimit = nextLimit;
        multiplier = 36;
        interval = baseArea - lastLimit;
        result += multiplier * interval / subLimit;    
    }

    result += 300 * floorCount;
    lastLimit = 0;
    nextLimit = 1;

    if(buildingCount > nextLimit )
    {
        lastLimit = nextLimit;
        nextLimit = 10;
        multiplier = 1043;
        subLimit = 1;
        interval = Math.min(buildingCount, nextLimit ) - lastLimit;
        result += multiplier * interval / subLimit;  
    }

    if(buildingCount > nextLimit )
    {
        lastLimit = nextLimit;
        nextLimit = 20;
        multiplier = 683;
        subLimit = 1;
        interval = Math.min(buildingCount, nextLimit ) - lastLimit;
        result += multiplier * interval / subLimit;  
    }

    if(buildingCount > nextLimit )
    {
        lastLimit = nextLimit;
        nextLimit = 30;
        multiplier = 525;
        subLimit = 1;
        interval = Math.min(buildingCount, nextLimit ) - lastLimit;
        result += multiplier * interval / subLimit;  
    }

    if(buildingCount > nextLimit )
    {
        lastLimit = nextLimit;
        multiplier = 428;
        subLimit = 1;
        interval = buildingCount - lastLimit;
        result += multiplier * interval / subLimit;  
    }
    return result;
}

const calculate = () => {
    let parcelArea = Number(document.getElementById("parcel-area").value);
    let buildingCount = Number(document.getElementById("building-count").value);
    let floorCount = Number(document.getElementById("floor-count").value);
    let baseArea = Number(document.getElementById("base-area").value);
    console.log([buildingCount,floorCount, baseArea ]);
    let resultEtut = 1.1 * calculateEtut(parcelArea);
    let resultProject = 1.1 * calculateProject(buildingCount, floorCount, baseArea);
    document.getElementById("field-5-a-result").value = resultEtut.toFixed(2);
    document.getElementById("field-5-b-result").value = resultProject.toFixed(2);
    document.getElementById("total-result").value = (resultEtut + resultProject).toFixed(2);
}

document.addEventListener("DOMContentLoaded", onDocumentLoad);