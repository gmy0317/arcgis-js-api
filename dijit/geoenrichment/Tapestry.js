// COPYRIGHT © 2015 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
define(["../../declare","./BaseWidget","dojo/_base/lang","dojo/on","require","dojo/dom-construct","dojo/dom-attr","dojo/dom-class","dojo/query","dojo/i18n!../../nls/jsapi","./dom"],function(e,t,l,s,a,r,i,n,o,c,p){c=c.geoenrichment.dijit.Tapestry;var h=e("esri.dijit.geoenrichment.Tapestry",[t],{currentTop:0,updateUIExpanded:function(){this.inherited(arguments),0===this.currentTop?this.updateListUIExpanded():this.updateViewUIExpanded()},updateUICollapsed:function(){this.inherited(arguments),0===this.currentTop?this.updateListUICollapsed():this.updateViewUICollapsed()},createUI:function(e){e.contentClass.push("Tapestry"),this.inherited(arguments)},createUIExpanded:function(e){this.inherited(arguments),0===this.currentTop?this.createListUIExpanded(e):this.createViewUIExpanded(e)},createUICollapsed:function(e){this.inherited(arguments),0===this.currentTop?this.createListUICollapsed(e):this.createViewUICollapsed(e)},updateListUIExpanded:function(){for(var e=1;4>e;e++){var t=5*(e-1);if(this.noValue(e))return y(this.table,e,t,5),void n.remove("arr"+e,"Tapestry_RightArrowCell");n.add("arr"+e,"Tapestry_RightArrowCell");var l=this.table.rows[t++];l.cells[0].innerHTML=this.formatByName(0,d.get(d.Percentage,e));var s=l.cells[1];s.innerHTML=this.getValueByName(0,d.get(d.Name,e)),l=this.table.rows[t++];var a=l.cells[0];a.innerHTML="("+this.formatByName(0,d.get(d.Value,e))+" "+c.hhLabel+")",l=this.table.rows[t++],l.cells[1].innerHTML=c.hhTypeLabel,l.cells[2].innerHTML=this.getValueByName(0,d.get(d.Type,e)),l=this.table.rows[t++],l.cells[1].innerHTML=c.medianAgeLabel,l.cells[2].innerHTML=this.getValueByName(0,d.get(d.Age,e)),l=this.table.rows[t++],l.cells[1].innerHTML=c.incomeLabel,l.cells[2].innerHTML=this.getValueByName(0,d.get(d.Income,e))}},updateListUICollapsed:function(){for(var e=1;4>e;e++){var t=2*(e-1);if(this.noValue(e))return y(this.table,e,t,2,!0),void n.remove("arr"+e,"Tapestry_RightArrowCell");n.add("arr"+e,"Tapestry_RightArrowCell");var l=this.table.rows[t++];l.cells[0].children[0].innerHTML=this.formatByName(0,d.get(d.Percentage,e)),l.cells[1].innerHTML=this.getValueByName(0,d.get(d.Name,e)),l=this.table.rows[t++],l.cells[0].innerHTML="("+this.formatByName(0,d.get(d.Value,e))+" "+c.hhLabel+")"}},updateViewUIExpanded:function(){if(this.noValue(this.currentTop))return void o('td:not([".Tapestry_LeftArrowCell"])',this.table).forEach(function(e){r.empty(e)});var e=this.table.rows[0];e.cells[1].innerHTML=this.getValueByName(0,d.get(d.Name,this.currentTop)),e=this.table.rows[1];var t=this.formatByName(0,d.get(d.Code,this.currentTop));1==t.length&&(t="0"+t),C.bindTopIcon(e.cells[1],t);for(var l=0;6>l;l++)e=this.table.rows[l+2],e.cells[1].innerHTML=C.labels[l],e.cells[2].innerHTML=this.getValueByName(0,d.get(C.values[l],this.currentTop))},updateViewUICollapsed:function(){if(this.noValue(this.currentTop))return void o("td",this.table).forEach(function(e){"LeftArrow"!=e.className&&r.empty(e)});var e=this.table.rows[0].cells[0].children[0],t=e.rows[0];t.cells[1].innerHTML=this.getValueByName(0,d.get(d.Name,this.currentTop));for(var l=0;6>l;l++){var s=this.table.rows[l+1];s.cells[0].innerHTML=C.labels[l],s.cells[1].innerHTML=this.getValueByName(0,d.get(C.values[l],this.currentTop))}},createListUIExpanded:function(e){this.table&&this.table.innerHTML&&r.destroy(this.table),this.table=e.addContent("table",{"class":"Tapestry_Table",cellpadding:"0",cellspacing:"0"}),p.createCols(this.table,[null,null,1,null]);for(var t=1;4>t;t++){var l=this.table.insertRow(-1),s=l.insertCell(-1);i.set(s,"class","Tapestry_PrcCell Tapestry_Top"+u[t]),i.set(s,"rowspan","2"),s=l.insertCell(-1),i.set(s,"class","Tapestry_HeaderCell Tapestry_Top"+u[t]+" Tapestry_LeftCell topName"),i.set(s,"colspan","3"),l=this.table.insertRow(-1),s=l.insertCell(-1),i.set(s,"class","Tapestry_ValueCell Tapestry_Top"+u[t]+" Tapestry_LeftCell"),i.set(s,"colspan","3"),this.addTextRows(t)}},addTextRows:function(e){for(var t=0;3>t;t++){var l=this.table.insertRow(-1);if(l.insertCell(-1),i.set(l.insertCell(-1),"class","Tapestry_AttrCell"),i.set(l.insertCell(-1),"class","Tapestry_TextCell"),0===t){var s=l.insertCell(-1);i.set(s,"rowspan","3"),T(s,e,this)}}},updateMode:function(e){this.currentTop=e,this.destroy(!0),this.update()},createListUICollapsed:function(e){this.table&&this.table.innerHTML&&r.destroy(this.table),this.table=e.addContent("table",{"class":"Tapestry_Table",cellpadding:"0",cellspacing:"0"}),p.createCols(this.table,[null,1,null]);for(var t=1;4>t;t++){var l=this.table.insertRow(-1),s=l.insertCell(-1);i.set(s,"class","Tapestry_ListCell Tapestry_Top"+u[t]+" Tapestry_PrcCell"),i.set(s,"rowspan","2"),r.create("div",null,s),i.set(l.insertCell(-1),"class","Tapestry_HeaderCell Tapestry_ListCell Tapestry_Top"+u[t]+" Tapestry_LeftCell"),s=l.insertCell(-1),i.set(s,"rowspan","2"),i.set(s,"class","Tapestry_ListCell"),T(s,t,this),i.set(this.table.insertRow(-1).insertCell(-1),"class","Tapestry_HeaderCell Tapestry_Top"+u[t]+" Tapestry_LeftCell")}},createViewUIExpanded:function(e){this.table&&this.table.innerHTML&&r.destroy(this.table),this.table=e.addContent("table",{"class":"Tapestry_Table",cellpadding:"1",cellspacing:"0"}),p.createCols(this.table,[null,null,1]);var t=this.table.insertRow(0),a=t.insertCell(-1);i.set(a,"class","Tapestry_LeftArrowCell"),s(a,"click",l.hitch(this,this.updateMode,0));var n=t.insertCell(-1);i.set(n,"class","Tapestry_HeaderCell Tapestry_Top"+u[this.currentTop]),i.set(n,"colspan","2"),t=this.table.insertRow(-1),t.insertCell(-1),a=t.insertCell(-1),i.set(a,"colspan","2");for(var o=0;6>o;o++)t=this.table.insertRow(-1),i.set(t.insertCell(-1),"class",0===o?"Tapestry_AttrCell Tapestry_TopCell":"Tapestry_AttrCell"),i.set(t.insertCell(-1),"class",0===o?"Tapestry_AttrCell Tapestry_TopCell":"Tapestry_AttrCell"),i.set(t.insertCell(-1),"class",0===o?"Tapestry_TextCell Tapestry_TopCell":"Tapestry_TextCell")},createViewUICollapsed:function(e){this.table&&this.table.innerHTML&&r.destroy(this.table),this.table=e.addContent("table",{"class":"Tapestry_Table",cellpadding:"1",cellspacing:"0"}),p.createCols(this.table,[null,1]);var t=this.table.insertRow(0),a=t.insertCell(-1);i.set(a,"colspan","2"),i.set(a,"class","LeftArrow");var n=r.create("table",null,a).insertRow(0);i.set(n.insertCell(-1),"class","Tapestry_LeftArrowCell"),s(this.table.rows[0].cells[0].children[0].rows[0].cells[0],"click",l.hitch(this,this.updateMode,0)),i.set(n.insertCell(-1),"class","Tapestry_HeaderCell Tapestry_Top"+u[this.currentTop]);for(var o=0;6>o;o++)t=this.table.insertRow(-1),i.set(t.insertCell(-1),"class",0===o?"Tapestry_AttrCell Tapestry_TopCell":"Tapestry_AttrCell Tapestry_ViewCell"),i.set(t.insertCell(-1),"class",0===o?"Tapestry_TextCell Tapestry_TopCell":"Tapestry_TextCell Tapestry_ViewCell")},noValue:function(e){var t=Number(this.getValueByName(0,d.get(d.Value,e)));return!t||0>=t}}),d={Code:"CODE",Name:"NAME",Value:"VALUE",Percentage:"PRC",Type:"TYPE",Age:"AGE",Income:"INCOME",Employment:"EMP",Education:"EDU",Residental:"RSD",Race:"RACE",get:function(e,t){return"TOP"+t+e}},T=function(e,t,a){r.create("div",{"class":"Tapestry_RightArrowCell",id:"arr"+t},e),s(e,"click",l.hitch(a,a.updateMode,t))},u={1:"One",2:"Two",3:"Three"},y=function(e,t,l,s,a){for(var i=l;l+s>i;i++)o("td",e.rows[i]).forEach(function(e){0===o("#arr"+t,e).length&&r.empty(e),a&&e.className.indexOf("Tapestry_PrcCell")>-1&&r.create("div",null,e)})},C={labels:[c.hhTypeLabel,c.medianAgeLabel,c.incomeLabel,c.employmentLabel,c.educationLabel,c.residentialLabel],values:[d.Type,d.Age,d.Income,d.Employment,d.Education,d.Residental],bindTopIcon:function(e,t){r.empty(e);var l=a.toUrl("./images/tapestry"+t+".png");r.create("div",{"class":"Tapestry_ViewImage",style:"background-image:url('"+l+"')"},e)}};return h});