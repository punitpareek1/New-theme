  //all add-to-cart handler 

$('body').on('click','form[action="/cart/add"] .btn', function(e) {
  e.preventDefault();
  jQuery(".not_with_other").hide();
  jQuery(".kit_present_available").hide();
  let btnText = $(this).val();
  $(this).addClass('current_add');

  var quantity = $(this).closest('form').find('#quantity').val();
  var productID ='';
  form = $(this).closest('form');
  form_array = form.serializeArray();
  
  
  
  
  
  if(jQuery('body').hasClass('template-product')){
    
    	if($("#custom-variant-id").length != 0) {
          let pid = form_array.find(item => item.name === "custom-variant-id");
          productID = pid['value'];
         
        }
        else{
        	let pid = form_array.find(item => item.name === "id");
          	productID = pid['value'];
        }
  }
  else{
     let pid = form_array.find(item => item.name === "id");
     productID = pid['value'];
  }
 
  
  if(quantity==undefined){
    quantity = 1;
  }
 
  let pName = form_array.find(item => item.name === "handle");
  
  //   For Clinical Microbiome Program checking
  let variantFound = 0;
    jQuery.getJSON('/cart.js', function(cart) {
      let cartItem = cart.items
      cartItem.map((data)=>{
        			if(data.product_id  == 6722346647613){
                      variantFound = 1;
        			}	
               })
       
      if(variantFound == 1){
        if(pName==undefined){
          jQuery(".kit_present_available").html(`<p>This product can't be added to your cart if Floré Clinical Microbiome is already added.</p>`);
        }
        else{
          jQuery(".kit_present_available").html(`<p>${pName['value']} can't be added to your cart if Floré Clinical Microbiome is already added.</p>`);
        }
        jQuery(".kit_present_available").show();      	
        quantity = 0;
      }
      else if(productID == 39766354198589 && cartItem.length > 0){
        
      	jQuery(".not_with_other").show();
        quantity = 0;
        
      }   
      addItem();
	}
  )
    
//     End Clinical Microbiome Program checking
  

 
 
    function addItem(){
    
      var property_exists = Object.keys(form_array).some(function(k) {
    return form_array[k].name === "properties[shipping_interval_unit_type]";
  });
  
  var selling_plan_exists = Object.keys(form_array).some(function(k) {
    return form_array[k].name === "selling_plan";

  });
  
  
  if(property_exists)
  {
      let frequency = form_array.find(item => item.name === "properties[shipping_interval_frequency]");
      let shipping_unit_type = form_array.find(item => item.name === "properties[shipping_interval_unit_type]");
      let selling_plan = form_array.find(item => item.name === "selling_plan");	
      var pro_data = {
         'quantity': quantity,
         'id': productID,
         'properties': {
            "shipping_interval_frequency": frequency.value,
            "shipping_interval_unit_type": shipping_unit_type.value
          }
  	  }
  }
    else if(selling_plan_exists)
  {
      let selling_plan = form_array.find(item => item.name === "selling_plan");
    
      var pro_data = {
         'quantity': quantity,
         'id': productID,
         "selling_plan": selling_plan.value
  	  }
  }
  else
  {
      var pro_data = {
         'quantity': quantity,
         'id': productID
  	  }
  }
             
  console.log(pro_data);
      $.ajax({
    type: 'POST',
    url: '/cart/add.js',
    dataType: 'json',
    data: pro_data,
    success: function(product){
      
      getCartProducts();
      changeValues();
      $('.prpwebs-popup-drawer-load').addClass('active');
      $('body').addClass('prpwebs-cart-open');
      $('.prp-cartdrawer-form .current_add').val('Added!'); 
    },
    error: function(error){
       getCartProducts();
       changeValues();
       $('.prp-cartdrawer-form .current_add').val('sold out!');  
        setTimeout(function(){
          $('.prp-cartdrawer-form .current_add').val(btnText);
          $('.prp-cartdrawer-form .btn').removeClass('current_add');
        }, 100);
      
    }

  });
  
  product_id_added = productID;
    }
    
  	

  
  
  
  
  

  
  

});



//slider

$('body').on('click','.drawer_slider  .add-to-cart-button', function(e) {
  e.preventDefault();
  let btnText = $(this).html();
  $(this).addClass('current_add');
  $(this).html('ADDING...');
  var $this = $(this);

  var quantity = 1;
  var productID = $(this).attr('data-vid');
  
  var pro_data = {
    'quantity': quantity,
    'id': productID
  }

  $.ajax({
    type: 'POST',
    url: '/cart/add.js',
    dataType: 'json',
    data: pro_data,
    success: function(product){
      getCartProducts();
      changeValues();
      $this.html('Added!'); 
      $this.parent().parent().parent().remove();
      
    },
    error: function(error){
       getCartProducts();
       changeValues();
       $('.prp-cartdrawer-form .current_add').val('sold out!');  
        setTimeout(function(){
          $this.html(btnText);
          $this.removeClass('current_add');
        }, 100);
      
    }

  });
  

});

//endslider


//get cart items for cart drawer
  
jQuery.getJSON('/cart.js', function(cart) {

  if(cart.items.length==0){
    $('.prpwebs-popup-cart-load').addClass('emptycarttrue');
    $('.prpwebs-drawer-checkout').addClass('emptycarttrue');
    $('.prpwebs-empty-cart').css('display','block');
  }
  else{
    $('.prpwebs-popup-cart-load').removeClass('emptycarttrue');
    $('.prpwebs-drawer-checkout').removeClass('emptycarttrue');
    $('.prpwebs-empty-cart').css('display','none');
  }

});


//get cart items for cart drawer
function getCartProducts(){  
   $('.cart_loader_img').show();
  
  var cartHtml = "";
  var cartItemsHas = 0;
  var cartItemString ="";
  $('.prpwebs-popup-cart-load').removeClass('emptycarttrue');
  $('.prpwebs-drawer-checkout').removeClass('emptycarttrue');
  $('.prpwebs-empty-cart').css('display','none');
  jQuery.getJSON('/cart.js', function(cart) {
    // now have access to Shopify cart object
    var carp_url = '';
    var carp_fImage = '';
    var carp_title = '';
    var carp_vtitle = '';
    var carp_itemId = '';
    var carp_itemVid = '';
    var carp_quantity = '';
    var carp_orginalPrice = '';
    var cartitems = cart.items;
	let itemindex = 0;
    for (var key in cartitems) {
      itemindex = itemindex + 1;
      var item = cartitems[key];
      var itemID = key+1;
      carp_url = item.url;
      carp_fImage = item.image;
      carp_title = item.product_title;
      carp_itemId = item.id;
      carp_itemVid = item.variant_id;
      carp_quantity = item.quantity;
      carp_orginalPrice = item.price;
      carp_orginalPrice = (carp_orginalPrice/100);
      carp_orginalPrice = carp_orginalPrice.toFixed(2);
      if( item.variant_title === null){
      	 carp_vtitle = ' ';
		}
      else {
        if(item.variant_title != 'Default Title')
        {
            carp_vtitle = item.variant_title;
        }
        else{
          carp_vtitle = ' ';
        }
      }
      
      
     cartHtml += `     
          <div class="prpwebs-item-cart-content" id="item-${itemindex}">
                  <div class="prpwebs-item-content-variants">
                       <div class="prpwebs-item-cart-image">
                              <a href="${carp_url}"><img class="prpwebs-cart-image" src="${carp_fImage}" /></a>
                      </div> 
                <div class="prpwebs-item-cart-description">
                  <div class="prpwebs-item-close">
                      <a href="javascript:void(0);" class="prpwebs-remove-item" data-id="${carp_itemId}" alt="remove-item" onclick="removItemCart(${carp_itemId},'item-${itemindex}')">
                          <i class="fa fa-trash" aria-hidden="true"></i>
                      </a>
                  </div>  
                <div class="prpwebs-content-product-and-variant-title">  
                      <a href="${carp_url}" class="prpwebs-product-title">  ${carp_title}  </a>  
          <span class="prpwebs-variant-title">${carp_vtitle}</span>  
                      <div class="prpwebs-propertie-content"></div>  
                </div> 
                <div class="prpwebs-content-quantity-price">

                      <div class="prpwebs-item-cart-content-quantity">  
                          <div class="prpwebs-item-cart-qty prpwebs-item-${carp_itemId} quantity center">
                              <div class="js-qty__adjust_prpwebs1 prpwebs-cart-plus-minus" data-quantity="${carp_quantity}" data-id="${carp_itemId}" data-line="1">
                                  <div class="prpwebs-dec prpwebs-qty button js-qty__adjust_prpwebs js-qty__adjust--minus quantity__minus">
                                      <span class="prpwebs-minus-symbol" id="minus-${itemindex}" onclick=minusItem(event,${itemindex},${carp_itemId})>-</span>
                                  </div>

                                  <input type="text" value="${carp_quantity}" class="text quantity js-qty__num quantity__input prpwebs-qty-inputbox" data-id="${carp_itemId}" id="inputQuantity_${itemindex}" disabled>

                                 <div class="prpwebs-inc prpwebs-qty button js-qty__adjust_prpwebs js-qty__adjust--plus quantity__plus">
                                      <span class="prpwebs-plus-symbol" id="plus-${itemindex}" onclick=plusItem(event,${itemindex},${carp_itemId})>+</span>
                                </div>
                              </div>  
                          </div>
                      </div>

                      <div class="prpwebs-cart-content-price cartitem-id-${carp_itemId}">  
                            <span class="prpwebs-compare-at-price"></span>
                            <span class="prpwebs-price-total  prpwebs-desktop"> 
                            <span class="money">$`+ carp_orginalPrice + `</span></span>      
                      </div>
                </div>
                </div>
                </div>
                </div> `;
      cartItemsHas += item.quantity;
      cartItemString = `(${cartItemsHas} ${cartitems.length > 1 ? 'Items' : 'Item'})`;
      console.log(cartItemsHas, 'hh');
    }

  }).done(function() {
	$('.cart_loader_img').hide();
    $('.prpwebs_cartitems').html(cartHtml);
    $('.cart_items').html(cartItemString);
    $('.prpwebs-popup-drawer-load').addClass('active');

  })

}


//change subtotal prices

function changeValues(){
    $.ajax( {
      type: 'get',
      url: '/cart.js',
      dataType: 'json',
         success: function( data ) {
           //createupsellItem();
           let total_cart = (data.total_price/100);
      		total_cart = total_cart.toFixed(2);
             $('.cart__subtotal').html('$'+total_cart);

             if(data.total_price < 4500 ){
                let ship_amt = (4500 - data.total_price)/100;
                ship_amt = ship_amt.toFixed(2);
                 //$('.shipping_count').html('YOU ARE <span class="shipamount"> $'+ship_amt+'</span> AWAY FROM FREE US SHIPPING!');
                 $('#cartprogressbar').val((data.total_price/100));
             }
             else{
                 //$('.shipping_count').html('YOUR BAG QUALIFIES FOR FREE US SHIPPING!');
                 $('#cartprogressbar').val((data.total_price/100));
             }
           
           if(data.total_price < data.original_total_price)
           {
            	$('.prpwebs-amount-sub-total .money-original' ).html( Shopify.formatMoney( data.original_total_price) );
           }
      }
    });
}




//upsell item filters
function filterupsellitems(object, data){
  const allowed = [data];
  const filtered = Object.keys(object)
    .filter(key => allowed.includes(key))
    .reduce((obj, key) => {
      obj[key] = object[key];
      return obj;
    }, {});
  return filtered;
}



  