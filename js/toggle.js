$(document).ready(function() {
  var $accordionHead = $(".accordion_head");

  //toggle the component with class accordion_body
  $accordionHead.on("click", function() {
    var $head = $(this);

    $head.toggleClass("collapsed");

    if ($head.is(".collapsed")) {
      $head.next(".accordion_body").slideUp(300);
    } else {
      $head.next(".accordion_body").slideDown(300);
    }

    var $collapsedHeads = $accordionHead.filter(".collapsed");
    
    Cookies.set(
      "collapsed_Nodes",
      $collapsedHeads.map(function(){ return this.getAttribute("data-node-tag"); }).get().join(''),
      {
        expires: 7,
        path: ''
      }
    );
  });
});
