/**
 * Generate random data for coupons-redeemed
 *
 * ---------------------------------------------------------------
 *
 * This gulp task is configured to generate data random data for firebase
 */

/* MODULES */

// Stream building javascript task runner.
var gulp = require ('gulp');

// Globals file
var globals = require ('../config/globals.js');

// Module for integrating w/ Firebase
var Firebase = require ('firebase');
var firebaseRef = new Firebase (globals.firebase);
var couponsRedeemedRef = firebaseRef.child ('redeemed_coupons');
var couponsRef = firebaseRef.child ('coupons');

// Module for generating random data
var Chance = require ('chance');
var chance = new Chance ();

// Module for using parameters via cmd line
var argv = require('yargs').argv;

// Javascript utility library
var lodash = require ('lodash');

var q = require ('q');

/* END MODULES */

gulp.task ('generate-redeemed-coupons', Generate);

/**
 * Function
 * @Name: Generate
 * @Description: Generate json data for Firebase
 * @Params:
 *		callback: The callback function used to pipe gulp tasks.
 */
function Generate (callback) {
    var defer = q.defer ();
    var couponRefs = [];
    
    var count = GetCount ();
    var coupon = '';
    var timeRedeemed = 0;
    var address = '';
    
	for (var i = 0; i < count; i++) {
	    coupon = GenerateRandomCoupon();
	    timeRedeemed = GetTimestamp();
	    address = GenerateRandomAddress ();
	    
	    if (!couponRefs[coupon]) {
	        couponRefs[coupon] = couponsRef.child (coupon + "/counter");
	    }
	    
        couponsRedeemedRef.push ({
          coupon: coupon,
          timeRedeemed: timeRedeemed,
          address: address
        });
        
        couponRefs[coupon].transaction (function (counter) {
            return (counter || 0) + 1;
        });
	};
	
	defer.resolve ();
	console.log ('Finished! Ctrl + C to exit script');
	return defer.promise;
}

function GetTimestamp () {
    var params = {};
    
    if (!lodash.isUndefined (argv.year) && lodash.isNumber (argv.year) && argv.year >= 1970) {
        params.year = argv.year;
    }
    
    if (!lodash.isUndefined (argv.month) && lodash.isNumber (argv.month) && argv.month >= 0 && argv.month < 12) {
        params.month = argv.month;
    }
    
    if (!lodash.isUndefined (argv.day) && lodash.isNumber (argv.day) && argv.day >= 1 && argv.day <= 31) {
        params.day = argv.day;
    }
    
    return chance.hammertime (params);
}

function GetCount () {
    if (!lodash.isUndefined (argv.count) && lodash.isNumber (argv.count) && argv.count >= 0 && argv.count <= 500) {
        return argv.count;   
    }
    
    return 0;
}

function GenerateRandomCoupon () {
    var coupons = [
        '10_percent_off_smoothie1',
        '10_percent_off_smoothie2',
        '20_percent_off_smoothie1',
        'bogo_smoothie1',
        'bogo_smoothie2'
    ];
    
    return coupons[chance.integer ({min: 0, max: 4})];
}

function GenerateRandomAddress () {
    var address = {};

    address.street_num = chance.integer ({min: 0, max: 4});
    address.street = chance.street ();
    address.state = 'CA',
    address.zip = chance.zip ();
    address.city = chance.city ();
    address.latitude = chance.latitude ({min: 33.69, max: 33.91});
    address.longitude = chance.longitude ({min:-118.1, max: -117.8});
    
    return address;
}