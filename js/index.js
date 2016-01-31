/**
 * Created by matorchio on 24/01/2016.
 */
$(function() {
    $("#accordion").accordion({
        header: "h3",
        collapsible: true,
        active: false,
        animate: 1000,
        beforeActivate: function (event, ui) {
            if (ui.newHeader.length === 0) {
                $('.header').show("slow");
            } else {
                var elemId = ui.newHeader[0].id;
                $.each( $('.header'), function (index, value) {
                    if (value.id != elemId) {
                        $('#' + value.id).hide("slow");
                    }
                });
            }
        }
    });
});