jQuery(document).ready(function() {

  /* Custom effects registration - feature available in the Velocity UI pack */
  //none
  $.Velocity
      .RegisterEffect("translateUp", {
          defaultDuration: 1,
          calls: [
              [{translateY: '-100%'}, 1]
          ]
      });
  $.Velocity
      .RegisterEffect("translateDown", {
          defaultDuration: 1,
          calls: [
              [{translateY: '100%'}, 1]
          ]
      });
  $.Velocity
      .RegisterEffect("translateNone", {
          defaultDuration: 1,
          calls: [
              [{translateY: '0', opacity: '1', scale: '1', rotateX: '0', boxShadowBlur: '0'}, 1]
          ]
      });

  //scale down
  $.Velocity
      .RegisterEffect("scaleDown", {
          defaultDuration: 1,
          calls: [
              [{opacity: '0', scale: '0.7', boxShadowBlur: '40px'}, 1]
          ]
      });
  //rotation
  $.Velocity
      .RegisterEffect("rotation", {
          defaultDuration: 1,
          calls: [
              [{opacity: '0', rotateX: '90', translateY: '-100%'}, 1]
          ]
      });
  $.Velocity
      .RegisterEffect("rotation.scroll", {
          defaultDuration: 1,
          calls: [
              [{opacity: '0', rotateX: '90', translateY: '0'}, 1]
          ]
      });
  //gallery
  $.Velocity
      .RegisterEffect("scaleDown.moveUp", {
          defaultDuration: 1,
          calls: [
              [{translateY: '-10%', scale: '0.9', boxShadowBlur: '40px'}, 0.20],
              [{translateY: '-100%'}, 0.60],
              [{translateY: '-100%', scale: '1', boxShadowBlur: '0'}, 0.20]
          ]
      });
  $.Velocity
      .RegisterEffect("scaleDown.moveUp.scroll", {
          defaultDuration: 1,
          calls: [
              [{translateY: '-100%', scale: '0.9', boxShadowBlur: '40px'}, 0.60],
              [{translateY: '-100%', scale: '1', boxShadowBlur: '0'}, 0.40]
          ]
      });
  $.Velocity
      .RegisterEffect("scaleUp.moveUp", {
          defaultDuration: 1,
          calls: [
              [{translateY: '90%', scale: '0.9', boxShadowBlur: '40px'}, 0.20],
              [{translateY: '0%'}, 0.60],
              [{translateY: '0%', scale: '1', boxShadowBlur: '0'}, 0.20]
          ]
      });
  $.Velocity
      .RegisterEffect("scaleUp.moveUp.scroll", {
          defaultDuration: 1,
          calls: [
              [{translateY: '0%', scale: '0.9', boxShadowBlur: '40px'}, 0.60],
              [{translateY: '0%', scale: '1', boxShadowBlur: '0'}, 0.40]
          ]
      });
  $.Velocity
      .RegisterEffect("scaleDown.moveDown", {
          defaultDuration: 1,
          calls: [
              [{translateY: '10%', scale: '0.9', boxShadowBlur: '40px'}, 0.20],
              [{translateY: '100%'}, 0.60],
              [{translateY: '100%', scale: '1', boxShadowBlur: '0'}, 0.20]
          ]
      });
  $.Velocity
      .RegisterEffect("scaleDown.moveDown.scroll", {
          defaultDuration: 1,
          calls: [
              [{translateY: '100%', scale: '0.9', boxShadowBlur: '40px'}, 0.60],
              [{translateY: '100%', scale: '1', boxShadowBlur: '0'}, 0.40]
          ]
      });
  $.Velocity
      .RegisterEffect("scaleUp.moveDown", {
          defaultDuration: 1,
          calls: [
              [{translateY: '-90%', scale: '0.9', boxShadowBlur: '40px'}, 0.20],
              [{translateY: '0%'}, 0.60],
              [{translateY: '0%', scale: '1', boxShadowBlur: '0'}, 0.20]
          ]
      });
  //catch up
  $.Velocity
      .RegisterEffect("translateUp.delay", {
          defaultDuration: 1,
          calls: [
              [{translateY: '0%'}, 0.8, {delay: 100}]
          ]
      });
  //opacity
  $.Velocity
      .RegisterEffect("hide.scaleUp", {
          defaultDuration: 1,
          calls: [
              [{opacity: '0', scale: '1.2'}, 1]
          ]
      });
  $.Velocity
      .RegisterEffect("hide.scaleDown", {
          defaultDuration: 1,
          calls: [
              [{opacity: '0', scale: '0.8'}, 1]
          ]
      });
  //parallax
  $.Velocity
      .RegisterEffect("translateUp.half", {
          defaultDuration: 1,
          calls: [
              [{translateY: '-350%'}, 1]
          ]
      });

  $.Velocity
      .RegisterEffect("translateUp.half", {
          defaultDuration: 1,
          calls: [
              [{translateY: '350%'}, 1]
          ]
      });

  $.Velocity
      .RegisterEffect("translateRight.half", {
          defaultDuration: 1,
          calls: [
              [{translateY: '150%'}, 1]
          ]
      });

  $.Velocity
      .RegisterEffect("translateRightcontent.half", {
          defaultDuration: 1,
          calls: [
              [{width: '75%'}, 1]
          ]
      });

  $.Velocity
      .RegisterEffect("translateRightcontentoff.half", {
          defaultDuration: 1,
          calls: [
              [{width: '1%'}, 1]
          ]
      });
  $.Velocity
      .RegisterEffect("pcontentShow", {
          defaultDuration: 1,
          calls: [
              [{opacity: '1.1'}, 1]
          ]
      });

  $.Velocity
      .RegisterEffect("escidaDestra", {
          defaultDuration: 1,
          calls: [
              [{translateX: '0%', scale: '1', boxShadowBlur: '0px'}, 0.20],
              [{translateX: '50%'}, 0.60],
              [{translateX: '100%', scale: '1', boxShadowBlur: '0'}, 0.20]
          ]
      });

  $.Velocity
      .RegisterEffect("escidaSinistra", {
          defaultDuration: 1,
          calls: [
              [{translateX: '-10%', scale: '1', boxShadowBlur: '0px'}, 0.20],
              [{translateX: '-50%'}, 0.60],
              [{translateX: '-100%', scale: '1', boxShadowBlur: '0px'}, 0.20]
          ]
      });

  $.Velocity
      .RegisterEffect("entradaDestra", {
          defaultDuration: 1,
          calls: [
              [{scale: '1', right: '0%'}, 1.20]
          ]
      });

  $.Velocity
      .RegisterEffect("entradaSinistra", {
          defaultDuration: 1,
          calls: [
              [{scale: '1', left: '0%'}, 1.20]
          ]
      });

  //Please note, the DOM should be ready
Barba.Pjax.start();

var Homepage = Barba.BaseView.extend({
namespace: 'page',
onEnter: function() {
   // The new Container is ready and attached to the DOM.








},
onEnterCompleted: function() {


   // The Transition has just finished.
   jQuery(document).foundation();




},
onLeave: function() {
   // A new Transition toward a new page has just started.
},
onLeaveCompleted: function() {
   // The Container has just been removed from the DOM.
   //
}
});

// Don't forget to init the view!
 Homepage.init();


  var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
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

      return $(this.oldContainer).animate({ opacity: 0 }).promise();
    },

    fadeIn: function() {
      /**
       * this.newContainer is the HTMLElement of the new Container
       * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
       * Please note, newContainer is available just after newContainerLoading is resolved!
       */

      var _this = this;
      var $el = $(this.newContainer);

      $(this.oldContainer).hide();

      $el.css({
        visibility : 'visible',
        opacity : 0
      });

      $el.animate({ opacity: 1 }, 400, function() {
        /**
         * Do not forget to call .done() as soon your transition is finished!
         * .done() will automatically remove from the DOM the old Container
         */

        _this.done();
      });
    }
  });

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

  //Please note, the DOM should be ready
  Barba.Pjax.start();

});
