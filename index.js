var strava = require('strava-v3');
/*strava.athlete.get({},function(err,payload) {
    if(!err) {
        console.log(payload);
    }
    else {
        console.log(err);
    }
});
*/
strava.athlete.listActivities({per_page:10},function(err,payload) {
    if(!err) {
        
        for (var i = 0; i < payload.length; i++) {
            if (payload[i].commute) {
                console.log(payload[i].start_date_local + " " + payload[i].name + "");
            }
        }
    }
    else {
        console.log(err);
    }
});