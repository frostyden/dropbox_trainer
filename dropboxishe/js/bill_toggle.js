jQuery(document).ready(function(){
    $(".toggle-monthly").on('click', function() {
        $(".plans-table-plan-pro").find(".ptp-first-span").text("$9.99");
        $(".plans-table-plan-business").find(".ptp-first-span").text("$15");
    });
    $(".toggle-annually").on('click', function() {
        $(".plans-table-plan-pro").find(".ptp-first-span").text("$8.25");
        $(".plans-table-plan-business").find(".ptp-first-span").text("$12.50");
    });
});