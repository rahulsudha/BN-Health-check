function switchToAll() {
  removeActive();
  hideAll();
  $("#Action-tab").addClass("is-active");
  $("#Action-tab-content").removeClass("hidden");
}

function switchToAdaptiveDesign() {
  removeActive();
  hideAll();
  $("#result-tab").addClass("is-active");
  $("#result-tab-content").removeClass("hidden");
}

function switchTorJquery() {
  removeActive();
  hideAll();
  $("#jquery-tab").addClass("is-active");
  $("#jquery-tab-content").removeClass("hidden");
}

function switchToJquery() {
  removeActive();
  hideAll();
  $("#username-tab").addClass("is-active");
  $("#username-tab-content").removeClass("hidden");
}

function switchToAngularJS() {
  removeActive();
  hideAll();
  $("#angularjs-tab").addClass("is-active");
  $("#angularjs-tab-content").removeClass("hidden");
}

function removeActive() {
  $("li").each(function() {
    $(this).removeClass("is-active");
  });
}

function hideAll(){
  $("#Action-tab-content").addClass("hidden");
  $("#result-tab-content").addClass("hidden");
  $("#jquery-tab-content").addClass("hidden");
  $("#username-tab-content").addClass("hidden");
  $("#angularjs-tab-content").addClass("hidden");
}


//Custom Functions that you can call
function resetAllValues() {
$('.container').find('input:text').val('');
// $('.columns').find('select').val("select");
$("#downloadforqueue").addClass("hidden");
$("#txtaread").addClass("hidden");




}


//+----------------------------------+
//| Functions for queue creation tab |
//+----------------------------------+


function text2json_queue_tab()
{

  //contents to copy to downloadjson_queue_tab() function starts
  var jsonobjqueue= {}
  jsonobjqueue.msgActionName= document.getElementById("Actionname").value;
  jsonobjqueue.queueName= document.getElementById("qname").value;
  jsonobjqueue.owner= document.getElementById("ownername").value;
  jsonobjqueue.maxMsgSpoolUsage= $('#maxspool').val()
  jsonobjqueue.accessType= $('#qtype').val()
  jsonobjqueue.permission= $('#permis').val()
  jsonobjqueue.maxRedeliveryCount= $('#maxred').val()
  jsonobjqueue.rejectMsgToSenderOnDiscardBehavior= $("input:radio[name=foobar1]:checked").val();
  jsonobjqueue.respectTtlEnabled= $("input:radio[name=foobar2]:checked").val();
  //copy contents ends here

  var result = JSON.stringify(jsonobjqueue, null, "\t");
  alert(result);

  $("#downloadforqueue").removeClass("hidden");
  $("#txtaread").removeClass("hidden");

  document.getElementById("jsonout").innerHTML= result;

}


function downloadjson_queue_tab()
{

  //copy contents from text2json_queue_tab() function here.
  var jsonobjqueue= {}
  jsonobjqueue.msgActionName= document.getElementById("Actionname").value;
  jsonobjqueue.queueName= document.getElementById("qname").value;
  jsonobjqueue.owner= document.getElementById("ownername").value;
  jsonobjqueue.maxMsgSpoolUsage= $('#maxspool').val()
  jsonobjqueue.accessType= $('#qtype').val()
  jsonobjqueue.permission= $('#permis').val()
  jsonobjqueue.maxRedeliveryCount= $('#maxred').val()
  jsonobjqueue.rejectMsgToSenderOnDiscardBehavior= $("input:radio[name=foobar1]:checked").val();
  jsonobjqueue.respectTtlEnabled= $("input:radio[name=foobar2]:checked").val();



  var fileContents = JSON.stringify(jsonobjqueue, null, "\n");
  var fileName = "createqueue.json";

  var pp = document.createElement('a');
  pp.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileContents));
  pp.setAttribute('download', fileName);
  pp.click();

}

// setTimeout(function() {
// download()
// }, 500);



function queue_tab_validate()
{
  var Actioname= document.getElementById("Actionname").value;
  var Actioname= document.getElementById("qname").value;
  var owner= document.getElementById("ownername").value;
  var topicsub= document.getElementById("topicsubsc").value;
  var maxspooldata= $('#maxspool').val()
  var quetype= $('#qtype').val()
  var allpermission= $('#permis').val()
  var maxredelivery= $('#maxred').val()
  var rejmsgradio= $("input:radio[name=foobar1]:checked").val();
  var tllradio= $("input:radio[name=foobar2]:checked").val();

  //validation starts
  if(Actioname == "" || Actioname == "" || owner == "" || topicsub == "" || maxspooldata == "")
  {
    alert("All forms must be filled");
  }
  else if (maxspooldata == "default" || quetype == "default" || allpermission == "default" || maxredelivery == "default")
  {
    alert ("Plese select the drop-down values. ")
  }
  else if (rejmsgradio == "" || tllradio == "")
  {
    alert ("Plese select the radio button values. ")
  }
  else
  {
    text2json_queue_tab();
  }

}


//+--------------------------------+
//| Functions for BN health checks |
//+--------------------------------+

window.onbeforeunload = function() {
  return "Data will be lost if you leave the page, are you sure?";
};

function tokyoremarks_check()
{
if (document.getElementById('tokyoremarks').checked) {
//alert("checked");
$("#tokyoremarks_textarea").removeClass("hidden");
} else {
//alert("not checked");
$("#tokyoremarks_textarea").addClass("hidden");
}
}

function singaporeremarks_check()
{
if (document.getElementById('singaporeremarks').checked) {
//alert("checked");
$("#singaporeremarks_textarea").removeClass("hidden");
} else {
//alert("not checked");
$("#singaporeremarks_textarea").addClass("hidden");
}
}

function johannesbergremarks_check()
{
if (document.getElementById('johannesbergremarks').checked) {
//alert("checked");
$("#johannesbergremarks_textarea").removeClass("hidden");
} else {
//alert("not checked");
$("#johannesbergremarks_textarea").addClass("hidden");
}
}

function londonremarks_check()
{
if (document.getElementById('londonremarks').checked) {
//alert("checked");
$("#londonremarks_textarea").removeClass("hidden");
} else {
//alert("not checked");
$("#londonremarks_textarea").addClass("hidden");
}
}

function cranfordremarks_check()
{
if (document.getElementById('cranfordremarks').checked) {
//alert("checked");
$("#cranfordremarks_textarea").removeClass("hidden");
} else {
//alert("not checked");
$("#cranfordremarks_textarea").addClass("hidden");
}
}

function piscatawayremarks_check()
{
if (document.getElementById('piscatawayremarks').checked) {
//alert("checked");
$("#piscatawayremarks_textarea").removeClass("hidden");
} else {
//alert("not checked");
$("#piscatawayremarks_textarea").addClass("hidden");
}
}


function healthremarks_check()
{
  if (document.getElementById('health_remarks').checked) {
  //alert("checked");
$("#health_remarks_textarea").removeClass("hidden");
  } else {
  //alert("not checked");
  $("#health_remarks_textarea").addClass("hidden");
  }
}

function urlremarks_check()
{
  if (document.getElementById('url_remarks').checked) {
  //alert("checked");
  $("#url_remarks_textarea").removeClass("hidden");
  } else {
  //alert("not checked");
  $("#url_remarks_textarea").addClass("hidden");
  }
}

function url_checkall_function()
{
  if (document.getElementById('url_checkall').checked) {
    document.getElementById("tknow").checked = true;
    document.getElementById("sgnow").checked = true;
    document.getElementById("jhbnow").checked = true;
    document.getElementById("eunow").checked = true;
    document.getElementById("cfnow").checked = true;
    document.getElementById("pinow").checked = true;
  }
  else {
    document.getElementById("tknow").checked = false;
    document.getElementById("sgnow").checked = false;
    document.getElementById("jhbnow").checked = false;
    document.getElementById("eunow").checked = false;
    document.getElementById("cfnow").checked = false;
    document.getElementById("pinow").checked = false;
  }
}


function health_checkall_function()
{
  if (document.getElementById('health_checkall').checked) {


    document.getElementById("tk_tkypsr1181").checked = true;
    document.getElementById("tk_tkypsr1182").checked = true;
    document.getElementById("tk_tkypsr1183").checked = true;
    document.getElementById("sg_sgppsr00690").checked = true;
    document.getElementById("sg_sgppsr00691").checked = true;
    document.getElementById("sg_sgppsr00692").checked = true;
    document.getElementById("jhb_jhbpsr000000363").checked = true;
    document.getElementById("jhb_jhbpsr000000364").checked = true;
    document.getElementById("eu_ldnpsr37508").checked = true;
    document.getElementById("eu_ldnpsr37509").checked = true;
    document.getElementById("eu_ldnpsr37510").checked = true;
    document.getElementById("eu_ldnpsr37511").checked = true;
    document.getElementById("eu_ldnpsr37378").checked = true;
    document.getElementById("eu_ldnpsr37379").checked = true;
    document.getElementById("cf_nykpsr10613").checked = true;
    document.getElementById("cf_nykpsr10614").checked = true;
    document.getElementById("cf_nykpsr10615").checked = true;
    document.getElementById("cf_nykpsr10616").checked = true;
    document.getElementById("pi_nykpsr10591").checked = true;
    document.getElementById("pi_nykpsr10592").checked = true;
    document.getElementById("pi_nykpsr10593").checked = true;
    document.getElementById("pi_nykpsr10594").checked = true;

  } else {

    document.getElementById("tk_tkypsr1181").checked = false;
    document.getElementById("tk_tkypsr1182").checked = false;
    document.getElementById("tk_tkypsr1183").checked = false;
    document.getElementById("sg_sgppsr00690").checked = false;
    document.getElementById("sg_sgppsr00691").checked = false;
    document.getElementById("sg_sgppsr00692").checked = false;
    document.getElementById("jhb_jhbpsr000000363").checked = false;
    document.getElementById("jhb_jhbpsr000000364").checked = false;
    document.getElementById("eu_ldnpsr37508").checked = false;
    document.getElementById("eu_ldnpsr37509").checked = false;
    document.getElementById("eu_ldnpsr37510").checked = false;
    document.getElementById("eu_ldnpsr37511").checked = false;
    document.getElementById("eu_ldnpsr37378").checked = false;
    document.getElementById("eu_ldnpsr37379").checked = false;
    document.getElementById("cf_nykpsr10613").checked = false;
    document.getElementById("cf_nykpsr10614").checked = false;
    document.getElementById("cf_nykpsr10615").checked = false;
    document.getElementById("cf_nykpsr10616").checked = false;
    document.getElementById("pi_nykpsr10591").checked = false;
    document.getElementById("pi_nykpsr10592").checked = false;
    document.getElementById("pi_nykpsr10593").checked = false;
    document.getElementById("pi_nykpsr10594").checked = false;

  }
}
