function compareTime(departureTime,arrivalTime)
{
    let timeObj1 = new Date(departureTime);
    let timeObj2 = new Date(arrivalTime);

    if(timeObj1>timeObj2)
    {
        return true;
    }
    else{
        return false;
    }

}

module.exports = {compareTime};