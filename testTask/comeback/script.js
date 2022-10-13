
$(document).ready(function () {
   $(document).mouseleave(function (e) { if (e.clientY < 0) { $(".outss").addClass("outssye"); } });
   $('.outsscl, .outssback').click(function () { if ($(".outss").hasClass('outssye')) { $(".outss").css('display', 'none'); } });
});