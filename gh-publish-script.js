var ghpages = require('gh-pages');

ghpages.publish('www', {
    branch: 'master',
    repo: 'https://github.com/shivamsngh/shivamsngh.github.io.git'
  }, (err, success)=>{
      if(err) throw new Error(err);
      console.log("Success");
  });