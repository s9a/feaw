$(function() {
  function start() {
    console.log("start", location.hash)
    var hash = location.hash
    hash = hash || (location.hash = "25,25,25,25")
    draw()
    listen()
  }

  function draw() {
    console.log("draw", location.hash)
    var hash = location.hash
    var amounts = hash.slice(1).split(",")
    $(".amount").each(function(i) {
      var value = this.value = amounts[i]
      $(this)
        .css("font-size", value*0.62 + "vh")
        .closest(".flavor")
        .css("height", value + "vh")
        .css("font-size", value*0.38 + "vh")
    })
  }

  function save() {
    var amounts = []
    $(".amount").each(function() {
      amounts.push(this.value)
    })
    location.hash = amounts.join()
    console.log("save", location.hash)
  }

  function listen() {
    console.log("listen")
    $(".amount").change(save)
  }

  start()
  $(window).on("hashchange", draw)
});
