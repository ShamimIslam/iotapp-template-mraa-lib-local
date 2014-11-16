    var mraa_upgrade_command = '/usr/bin/opkg install '+__dirname+'/libmraa0_0.5.0.25_i586.ipk '+__dirname+'/upm_0.1.8.32_i586.ipk';
    var exec = require('child_process').exec, child;
    console.log('Updating mraa and upm (please wait)');
    child = exec(mraa_upgrade_command, {env:process.env}, 
      function (error, stdout, stderr) {
        console.log(stdout);
        if(stderr)console.log('stderr: ' + stderr);
        if (error !== null) {
          console.log('exec error: ' + error);
        }
        console.log('Update complete!');
    });  