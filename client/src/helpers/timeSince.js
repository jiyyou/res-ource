const timeSince = postedDate => {    //postedDate would be .getTime() data previously stored
	let currentTime = new Date();
	let passedTime = (currentTime.getTime() - postedDate) / 1000; //passedTime = time passed since post in SECONDS
	if (passedTime < 60) {
		return `${Math.floor(passedTime)}s`; //if passedTime is within 1 minute
	}
	else if (passedTime >= 60 && passedTime < 3600) {
		return `${Math.floor(passedTime/60)} minutes`; //if passedTime is within 1 hour
	}
	else if (passedTime >= 3600 && passedTime < 86400) {
		return `${Math.floor(passedTime/3600)}h`; //if passedTime is within 1 day
	}
	else if (passedTime >= 86400 && passedTime < 604800) {
		return `${Math.floor(passedTime/86400)}d`; //if passedTime is within 1 week
	}
	else if (passedTime >= 604800 && passedTime < 2419200) {
		return `${Math.floor(passedTime/604800)}w`; //if passedTime is within 1 month
	}
	else if (passedTime >= 2419200 && passedTime < 29030400) {
		return `${Math.floor(passedTime/2419200)} months`; //if passedTime is within 1 year
	}
	else if (passedTime >= 29030400) {
		return `${Math.floor(passedTime/29030400)}y`; //if passedTime is over 1year
	}
}

export default timeSince;