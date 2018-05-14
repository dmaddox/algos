let rewards = 0;
let endpoints = 1; // going to use this for a while statement, once it reaches 0, the thing is over

function getRewards(qUrl) {
  // setup a while loop, condition being that if there are no more endpoints awaiting response, the loop ends
  while (endpoints > 0) {
    $.ajax({
      url: qUrl, 
      success: function(res){
        // res = {"children":["http://algo.work/interview/b","http://algo.work/interview/c"],"reward":1}
        // tally new rewards
        reward += res.reward;
        // confirm endpoint response by decreasing endpoints variable by 1
        endpoints -= 1;
        // if no more descendents, exit function for that recursive branch
        if (!res.children) return;
        // track new endpoints that you will be calling in the recursion
        endpoints += res.children.length;
        // call recursion for each descendent
        for (let i = 0; i < res.children.length; i++) {
          getRewards(res.children[i]);
        }
        
      },
      error: function(err) {
        console.log(err);
        // confirm endpoint response by decreasing endpoints variable by 1
        endpoints -= 1;
      }
            
    };
  };

  // return rewards count;
  return rewards;
};


const initialUrl = "http://algo.work/interview/a";
getRewards(initialUrl);






