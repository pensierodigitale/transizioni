jQuery(document).ready(function() {
console.log("Ready TRANS");
  /* Custom effects registration - feature available in the Velocity UI pack */
  //none

   // nuovo effetto
    /* loader div in tarnsizione*/
  // loader = new SVGLoader( document.getElementById( 'loader' ), { speedIn : 300, easingIn : mina.easeinout } );
  // //*



  var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
        console.log("Start Trans");
      /**
       * This function is automatically called as soon the Transition starts
       * this.newContainerLoading is a Promise for the loading of the new container
       * (Barba.js also comes with an handy Promise polyfill!)
       */

      // As soon the loading is finished and the old page is faded out, let's fade the new page
      Promise
        .all([this.newContainerLoading, this.fadeOut()])
        .then(this.fadeIn.bind(this));
    },

    fadeOut: function() {
      /**
       * this.oldContainer is the HTMLElement of the old Container
       */
        console.log("fadeout");
       var deferred = Barba.Utils.deferred();
       ricaLoader.show(deferred.resolve,1500);
       return deferred.promise;
      //  $(".is-off-canvas-open").toggleClass('is-off-canvas-open is-open-left');;
      // return $(this.oldContainer).velocity("slideUp", { duration: 1500 }).promise();
    },

    fadeIn: function() {
      /**
       * this.newContainer is the HTMLElement of the new Container
       * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
       * Please note, newContainer is available just after newContainerLoading is resolved!
       */

       console.log("fadeIn");
      var _this = this;
      $(this.oldContainer).hide();
      $(this.newContainer).css('visibility','visible');
      ricaLoader.hide(function () {
        console.log("endTrans");
        _this.done();
      }, 1500);

      // $el.velocity("slideDown", {visibility : 'visible', duration: 1500, complete: function(elements) {
      //   console.log("endTrans");
      //   _this.done();
      //   }});
    }
  });
  var Homepage = Barba.BaseView.extend({
    namespace: 'page',
    onEnter: function() {
        console.log("onEnter");
        // The new Container is ready and attached to the DOM.
    },
    onEnterCompleted: function() {
        // The Transition has just finished.
        console.log("onEnterCompleted");
        $(document).foundation();

    },
    onLeave: function() {
        console.log("onLeave");
        // A new Transition toward a new page has just started.
    },
    onLeaveCompleted: function() {
        console.log("onLeaveCompleted");
        // The Container has just been removed from the DOM.
    }
  });

  // Don't forget to init the view!
  Homepage.init();



  /**
   * Next step, you have to tell Barba to use the new Transition
   */

  Barba.Pjax.getTransition = function() {
    /**
     * Here you can use your own logic!
     * For example you can use different Transition based on the current page or link...
     */

    return FadeTransition;
  };
  Barba.Dispatcher.on("linkClicked", function() {
    console.log("linkClicked", arguments)
  });
  Barba.Dispatcher.on("initStateChange", function() {
    console.log("initStateChange", arguments)
  });
  Barba.Dispatcher.on("newPageReady", function() {
    console.log("newPageReady", arguments);
  });
  Barba.Dispatcher.on("transitionCompleted", function() {
    console.log("transitionCompleted", arguments);
    //Questo metodo viene sempre eseguito anche al caricamento della prima pagina
    //SE il barba container è hidden sono nella prima pagina!!
    if ($(".barba-container").css('visibility') == 'hidden') {
        $(".barba-container").css('visibility', 'visible');
        ricaLoader.hide(function () {

            $("#more").velocity({
                translateX: "200px",
                rotateZ: "360deg"
            },{complete: function (){ console.log("animazione velocity finita")}}).velocity("reverse", {delay:500 });
            $("#less").velocity({
                translateX: "-200px",
                rotateZ: "-360deg"
            }).velocity("reverse", {delay:500 });
        });

    }else {
   // $(document).foundation();
   $("#more").velocity({
       translateX: "200px",
       rotateZ: "360deg"
   },{complete: function (){ console.log("animazione velocity finita")}}).velocity("reverse", {delay:500 });
   $("#less").velocity({
       translateX: "-200px",
       rotateZ: "-360deg"
   }).velocity("reverse", {delay:500 });}
  // $("#barba-container").velocity("slideUp",   {delay: 900, duration: 1000});
  });

  //Please note, the DOM should be ready
  Barba.Pjax.start();
  //Barba.Prefetch.init();

});
