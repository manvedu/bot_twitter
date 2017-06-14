URI.open('www.google.com', function(err, data){
  if(err){
    console.log(err);
    return;
  }

  var mongotdb = new Mongo(...);
  mongodb.insert('....', data, function(err, response){
    if(err){
      console.log(err);
      return;
    }
    var notifier = new MailNotifier(...);
    notifier.notifyClient(...., response, function(err, data){
      if(err){ console.log(err); return}
      var cache = new Redis(...);
      cache.insertKe(..., function(err, data){
        ....
      });
    });

  });
});

URI.open('www.google.com', function(err, data){
  if(err){
    console.log(err);
    return;
  }

  var mongotdb = new Mongo(...);
  mongodb.insert('....', data, function(err, response){
    if(err){
      console.log(err);
      return;
    }
    var notifier = new MailNotifier(...);
    notifier.notifyClient(...., response, function(err, data){
      if(err){ console.log(err); return}
      var cache = new Redis(...);
      cache.insertKe(..., function(err, data){
        ....
      });
    });

  });
});
