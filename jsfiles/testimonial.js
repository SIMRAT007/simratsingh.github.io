
// TESTIMONIAL BOX

$(document).ready(function(){
    var slide =  $('.tbox')
    $(slide).first().addClass('active-img');
    $(slide).last().addClass('small').addClass('prev');
    $(slide).last().prev('.tbox').addClass('smaller prevSmall');
    $(slide).first().next('.tbox').addClass('small next');
    $(slide).first().next('.tbox').next('.tbox').addClass('smaller nextSmall');

    
    $('.next-btn').click(function(e){
    e.preventDefault();
        var Active = $('.active-img'), Prev = $('.prev'), Next = $('.next'), SmallPrev = $('.prevSmall'), SmallNext = $('.nextSmall');
    
    $(Active).addClass('small prev ').removeClass('active-img');
    $(Next).addClass('active-img').removeClass('small next');
    $(Prev).addClass('smaller prevSmall ').removeClass('small prev ');
    $(SmallNext).addClass('small next').removeClass('smaller nextSmall ');
    $(SmallPrev).removeClass('prevSmall').addClass('nextSmall');
    
    });
    $('.prev-btn').click(function(e){
    e.preventDefault();
    var Active = $('.active-img'), Prev = $('.prev'), Next = $('.next'), SmallPrev = $('.prevSmall'), SmallNext = $('.nextSmall');
    
    $(Active).removeClass('active-img').addClass('small next');
    $(Prev).removeClass('small prev').addClass('active-img');
    $(Next).removeClass('small next').addClass('smaller nextSmall');
    $(SmallPrev).addClass('small prev').removeClass('smaller prevSmall');
    $(SmallNext).removeClass('nextSmall').addClass('prevSmall');
    
    });
    });



    // MUSIC SECTION

