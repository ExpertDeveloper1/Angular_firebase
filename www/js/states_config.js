function useStatesConfig($stateProvider) {

	$stateProvider

    .state('app',{
      url:"/app",
      abstract: true,
      templateUrl: "www/templates/parent.html",
    })
    
    .state('app.home', {
      url: "/home",
      views: {
        "head": {templateUrl: "www/templates/header.html", controller: "HomeCtrl"},
        "body": {templateUrl:"www/templates/home.html", controller: "HomeCtrl"}
      }            
    })

    .state('app.add', {
      url: "/add",
      views: {
          "head": {templateUrl: "www/templates/header.html", controller: "HomeCtrl"},
          "body": {templateUrl: "www/templates/add.html", controller: 'AddCtrl'}
      }
    })

    .state('app.view', {
      url: "/view/:id",
      views: {
          "head": {templateUrl: "www/templates/header.html", controller: "HomeCtrl"},
          "body": {templateUrl: "www/templates/view.html", controller: 'ViewCtrl'}
      }
    })

    .state('app.login', {
          url: "/login",
          views: {
              "head": {templateUrl: "www/templates/header.html", controller: "HomeCtrl"},
              "body": {templateUrl: "www/templates/login.html", controller: 'ViewCtrl'}
          }
        })


}





