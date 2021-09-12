// function to wait until a selector appears before continuing queue of tasks.

function queueFunc(cfg){
  
  switch(cfg.type){ // what type of action do we need?
    case "click":
      cfg.delay = cfg.delay || 100; // default: check every 100ms
      cfg.max = cfg.max || 100; // default: check upto 100 times (10 seconds) then give up
    
      $(cfg.selector).trigger("click"); // trigger the click event
      
      
      if(cfg.waitfor && cfg.delay && cfg.callback){ // shoud we wait for an element to be drawn? - e.g. after an api call or large dom write
        var ct=0; // initiate counter var
        $.doTimeout(cfg.delay, function(){ // start a timed loop
          ct++; // increment counter
          if($(cfg.waitfor).length){ // check for element in DOM
            cfg.callback(); // call callback
            ct += cfg.max; // increment counter to end the loop
          }
          return ct<cfg.max; // test for exiting the loop
        });
      }else{
        if(cfg.delay && cfg.callback){ // just a regular delay before callback
          $.doTimeout(cfg.delay, function(){
            cfg.callback();
          });
        }else{
          if(cfg.callback){ // no delay before callback
            cfg.callback();
          }
        }
      }
    break; // others?
  }
}

// example 
queueFunc({
  type: "click",            // what to do
  selector: "#menu_loans",  // what to click
  waitfor: "#loans_table",  // what to wait for
  callback: function(){     // then what
    queueFunc({
      type: "click",
      selector: ".btn-primary",
      callback: null,       // or add more
    });
  }
});


