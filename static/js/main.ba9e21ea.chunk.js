(window.webpackJsonpimagingapplication=window.webpackJsonpimagingapplication||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(3),r=n.n(o),i=(n(15),n(4)),c=n(5),m=n(7),u=n(6),p=n(8),s=(n(16),n(1)),E=n(2),h=n.n(E),d=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={uuid:"",experiment_number:"",camera1:"",camera2:"",camera2_setup:"",camera3:"",camera3_setup:"",camera4:"",camera4_setup:"",camera5:"",camera5_setup:"",camera6:"",camera6_setup:"",camera7:"",camera7_setup:"",camera8:"",camera8_setup:"",camera9:"",camera9_setup:"",camera10:"",camera10_setup:"",start_date:"",end_date:"",checked:!1,show_all_cameras:!1,error:"",camera_img:""},e.submitted.bind(Object(s.a)(e)),e.handle_experiment_number=e.handle_experiment_number.bind(Object(s.a)(e)),e.getDates=e.getDates.bind(Object(s.a)(e)),e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handle_uuid",value:function(e){var t=(e=new Date(e.target.value)).toISOString().substring(0,10);console.log(t),this.setState({uuid:t})}},{key:"handle_experiment_number",value:function(e){this.setState({experiment_number:e.target.value})}},{key:"handle_camera1",value:function(e){this.setState({camera1:e.target.value,camera2_setup:l.a.createElement("select",{onChange:this.handle_camera2.bind(this)},l.a.createElement("option",null,"None"),l.a.createElement("option",null,"0"),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"),l.a.createElement("option",null,"6"),l.a.createElement("option",null,"7"),l.a.createElement("option",null,"8"),l.a.createElement("option",null,"9"),l.a.createElement("option",null,"10"),l.a.createElement("option",null,"11"),l.a.createElement("option",null,"12"),l.a.createElement("option",null,"13"),l.a.createElement("option",null,"14"),l.a.createElement("option",null,"15"),l.a.createElement("option",null,"16"),l.a.createElement("option",null,"17"),l.a.createElement("option",null,"18"),l.a.createElement("option",null,"19"),l.a.createElement("option",null,"20"),l.a.createElement("option",null,"21"),l.a.createElement("option",null,"22"),l.a.createElement("option",null,"23"))})}},{key:"handle_camera2",value:function(e){this.setState({camera2:e.target.value,camera3_setup:l.a.createElement("select",{onChange:this.handle_camera3.bind(this)},l.a.createElement("option",null,"None"),l.a.createElement("option",null,"0"),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"),l.a.createElement("option",null,"6"),l.a.createElement("option",null,"7"),l.a.createElement("option",null,"8"),l.a.createElement("option",null,"9"),l.a.createElement("option",null,"10"),l.a.createElement("option",null,"11"),l.a.createElement("option",null,"12"),l.a.createElement("option",null,"13"),l.a.createElement("option",null,"14"),l.a.createElement("option",null,"15"),l.a.createElement("option",null,"16"),l.a.createElement("option",null,"17"),l.a.createElement("option",null,"18"),l.a.createElement("option",null,"19"),l.a.createElement("option",null,"20"),l.a.createElement("option",null,"21"),l.a.createElement("option",null,"22"),l.a.createElement("option",null,"23"))})}},{key:"handle_camera3",value:function(e){this.setState({camera3:e.target.value,camera4_setup:l.a.createElement("select",{onChange:this.handle_camera4.bind(this)},l.a.createElement("option",null,"None"),l.a.createElement("option",null,"0"),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"),l.a.createElement("option",null,"6"),l.a.createElement("option",null,"7"),l.a.createElement("option",null,"8"),l.a.createElement("option",null,"9"),l.a.createElement("option",null,"10"),l.a.createElement("option",null,"11"),l.a.createElement("option",null,"12"),l.a.createElement("option",null,"13"),l.a.createElement("option",null,"14"),l.a.createElement("option",null,"15"),l.a.createElement("option",null,"16"),l.a.createElement("option",null,"17"),l.a.createElement("option",null,"18"),l.a.createElement("option",null,"19"),l.a.createElement("option",null,"20"),l.a.createElement("option",null,"21"),l.a.createElement("option",null,"22"),l.a.createElement("option",null,"23"))})}},{key:"handle_camera4",value:function(e){this.setState({camera4:e.target.value,camera5_setup:l.a.createElement("select",{onChange:this.handle_camera5.bind(this)},l.a.createElement("option",null,"None"),l.a.createElement("option",null,"0"),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"),l.a.createElement("option",null,"6"),l.a.createElement("option",null,"7"),l.a.createElement("option",null,"8"),l.a.createElement("option",null,"9"),l.a.createElement("option",null,"10"),l.a.createElement("option",null,"11"),l.a.createElement("option",null,"12"),l.a.createElement("option",null,"13"),l.a.createElement("option",null,"14"),l.a.createElement("option",null,"15"),l.a.createElement("option",null,"16"),l.a.createElement("option",null,"17"),l.a.createElement("option",null,"18"),l.a.createElement("option",null,"19"),l.a.createElement("option",null,"20"),l.a.createElement("option",null,"21"),l.a.createElement("option",null,"22"),l.a.createElement("option",null,"23"))})}},{key:"handle_camera5",value:function(e){this.setState({camera5:e.target.value,camera6_setup:l.a.createElement("select",{onChange:this.handle_camera6.bind(this)},l.a.createElement("option",null,"None"),l.a.createElement("option",null,"0"),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"),l.a.createElement("option",null,"6"),l.a.createElement("option",null,"7"),l.a.createElement("option",null,"8"),l.a.createElement("option",null,"9"),l.a.createElement("option",null,"10"),l.a.createElement("option",null,"11"),l.a.createElement("option",null,"12"),l.a.createElement("option",null,"13"),l.a.createElement("option",null,"14"),l.a.createElement("option",null,"15"),l.a.createElement("option",null,"16"),l.a.createElement("option",null,"17"),l.a.createElement("option",null,"18"),l.a.createElement("option",null,"19"),l.a.createElement("option",null,"20"),l.a.createElement("option",null,"21"),l.a.createElement("option",null,"22"),l.a.createElement("option",null,"23"))})}},{key:"handle_camera6",value:function(e){this.setState({camera6:e.target.value,camera7_setup:l.a.createElement("select",{onChange:this.handle_camera7.bind(this)},l.a.createElement("option",null,"None"),l.a.createElement("option",null,"0"),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"),l.a.createElement("option",null,"6"),l.a.createElement("option",null,"7"),l.a.createElement("option",null,"8"),l.a.createElement("option",null,"9"),l.a.createElement("option",null,"10"),l.a.createElement("option",null,"11"),l.a.createElement("option",null,"12"),l.a.createElement("option",null,"13"),l.a.createElement("option",null,"14"),l.a.createElement("option",null,"15"),l.a.createElement("option",null,"16"),l.a.createElement("option",null,"17"),l.a.createElement("option",null,"18"),l.a.createElement("option",null,"19"),l.a.createElement("option",null,"20"),l.a.createElement("option",null,"21"),l.a.createElement("option",null,"22"),l.a.createElement("option",null,"23"))})}},{key:"handle_camera7",value:function(e){this.setState({camera7:e.target.value,camera8_setup:l.a.createElement("select",{onChange:this.handle_camera8.bind(this)},l.a.createElement("option",null,"None"),l.a.createElement("option",null,"0"),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"),l.a.createElement("option",null,"6"),l.a.createElement("option",null,"7"),l.a.createElement("option",null,"8"),l.a.createElement("option",null,"9"),l.a.createElement("option",null,"10"),l.a.createElement("option",null,"11"),l.a.createElement("option",null,"12"),l.a.createElement("option",null,"13"),l.a.createElement("option",null,"14"),l.a.createElement("option",null,"15"),l.a.createElement("option",null,"16"),l.a.createElement("option",null,"17"),l.a.createElement("option",null,"18"),l.a.createElement("option",null,"19"),l.a.createElement("option",null,"20"),l.a.createElement("option",null,"21"),l.a.createElement("option",null,"22"),l.a.createElement("option",null,"23"))})}},{key:"handle_camera8",value:function(e){this.setState({camera8:e.target.value,camera9_setup:l.a.createElement("select",{onChange:this.handle_camera9.bind(this)},l.a.createElement("option",null,"None"),l.a.createElement("option",null,"0"),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"),l.a.createElement("option",null,"6"),l.a.createElement("option",null,"7"),l.a.createElement("option",null,"8"),l.a.createElement("option",null,"9"),l.a.createElement("option",null,"10"),l.a.createElement("option",null,"11"),l.a.createElement("option",null,"12"),l.a.createElement("option",null,"13"),l.a.createElement("option",null,"14"),l.a.createElement("option",null,"15"),l.a.createElement("option",null,"16"),l.a.createElement("option",null,"17"),l.a.createElement("option",null,"18"),l.a.createElement("option",null,"19"),l.a.createElement("option",null,"20"),l.a.createElement("option",null,"21"),l.a.createElement("option",null,"22"),l.a.createElement("option",null,"23"))})}},{key:"handle_camera9",value:function(e){this.setState({camera9:e.target.value,camera10_setup:l.a.createElement("select",{onChange:this.handle_camera10.bind(this)},l.a.createElement("option",null,"None"),l.a.createElement("option",null,"0"),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"),l.a.createElement("option",null,"6"),l.a.createElement("option",null,"7"),l.a.createElement("option",null,"8"),l.a.createElement("option",null,"9"),l.a.createElement("option",null,"10"),l.a.createElement("option",null,"11"),l.a.createElement("option",null,"12"),l.a.createElement("option",null,"13"),l.a.createElement("option",null,"14"),l.a.createElement("option",null,"15"),l.a.createElement("option",null,"16"),l.a.createElement("option",null,"17"),l.a.createElement("option",null,"18"),l.a.createElement("option",null,"19"),l.a.createElement("option",null,"20"),l.a.createElement("option",null,"21"),l.a.createElement("option",null,"22"),l.a.createElement("option",null,"23"))})}},{key:"handle_camera10",value:function(e){this.setState({camera10:e.target.value})}},{key:"handle_all_cameras",value:function(e){this.setState({show_all_cameras:!0}),console.log(this.state.show_all_cameras)}},{key:"handle_start_date",value:function(e){this.setState({start_date:e.target.value})}},{key:"handle_end_date",value:function(e){this.setState({end_date:e.target.value})}},{key:"handle_Checkbox_Change",value:function(){this.setState({show_all_cameras:!this.state.show_all_cameras})}},{key:"getDates",value:function(e,t){var n=[],a=h()(e);for(t=h()(t);a<=t;)n.push(h()(a).format("MM/DD/YYYY")),a=h()(a).add(1,"days");var l,o=[];for(l=0;l<n.length;l++){var r=new Date(n[l]);o.push(r.toISOString())}return o}},{key:"submitted",value:function(){var e=4,t=["2019-10-04T02:01:09.328653","2019-10-04T02:01:15.876264","2019-10-04T02:01:27.174618"];this.setState({error:""});var n,a,o,r=this.getDates(this.state.start_date,this.state.end_date);if(console.log(r),0!=r.length)if(1==this.state.show_all_cameras&&""!=this.state.start_date&&""!=this.state.end_date&&""!=this.state.experiment_number)for(console.log(r),n=0;n<r.length;n++)for(a=0;a<t.length;a++)for(o=0;o<e;o++)console.log("<endpoint>/<bucket>/imaging/experiment"+this.state.experiment_number+"/"+r[n]+"/camera"+a),console.log("https://s3.nautilus.optiputer.net/braingeneers/rcurrie/archive/"+r[n].substring(0,10)+"/images/"+t[a]+"/"+o+"/0.jpg");else if(""!=this.state.camera1&&""!=this.state.start_date&&""!=this.state.end_date&&""!=this.state.experiment_number){var i=[this.state.camera1];for(""!=this.state.camera2&&(i.push(this.state.camera2),""!=this.state.camera3&&(i.push(this.state.camera2),""!=this.state.camera4&&(i.push(this.state.camera2),""!=this.state.camera5&&(i.push(this.state.camera2),""!=this.state.camera6&&(i.push(this.state.camera2),""!=this.state.camera7&&(i.push(this.state.camera2),""!=this.state.camera7&&(i.push(this.state.camera2),""!=this.state.camera8&&(i.push(this.state.camera2),""!=this.state.camera9&&(i.push(this.state.camera2),""!=this.state.camera10&&i.push(10)))))))))),console.log("Cameras:",i),console.log("Dates:",r),n=0;n<r.length;n++){for(a=0;a<i.length;a++)console.log("<endpoint>/<bucket>/imaging/experiment"+this.state.experiment_number+"/"+r[n]+"/camera"+i[a]),console.log("https://s3.nautilus.optiputer.net/braingeneers/rcurrie/archive/2019-10-04/images/"+t[a]+"/"+this.state.experiment_number+"/"+i[a]+".jpg");this.setState({camera_img:l.a.createElement("img",{src:"https://s3.nautilus.optiputer.net/braingeneers/rcurrie/archive/2019-10-04/images/"+t[a]+"/"+this.state.experiment_number+"/"+i[a]+".jpg"})})}}else this.setState({error:"Fill in the fields correctly"});else this.setState({error:"Fill in the fields correctly"})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{className:"tab"},l.a.createElement("label",null,"Day:",l.a.createElement("input",{type:"date",onChange:this.handle_start_date.bind(this)}),"\xa0 to \xa0",l.a.createElement("input",{type:"date",onChange:this.handle_end_date.bind(this)})),l.a.createElement("br",null),l.a.createElement("br",null),"Num Stacks:",l.a.createElement("select",{onChange:this.handle_experiment_number},l.a.createElement("option",null,"None"),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"),l.a.createElement("option",null,"6"),l.a.createElement("option",null,"7"),l.a.createElement("option",null,"8"),l.a.createElement("option",null,"9"),l.a.createElement("option",null,"10"),l.a.createElement("option",null,"11")),l.a.createElement("br",null),l.a.createElement("br",null),"Stack Size:",l.a.createElement("select",{onChange:this.handle_camera1.bind(this)},l.a.createElement("option",null,"None"),l.a.createElement("option",null,"0"),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"),l.a.createElement("option",null,"6"),l.a.createElement("option",null,"7"),l.a.createElement("option",null,"8"),l.a.createElement("option",null,"9"),l.a.createElement("option",null,"10"),l.a.createElement("option",null,"11"),l.a.createElement("option",null,"12"),l.a.createElement("option",null,"13"),l.a.createElement("option",null,"14"),l.a.createElement("option",null,"15"),l.a.createElement("option",null,"16"),l.a.createElement("option",null,"17"),l.a.createElement("option",null,"18"),l.a.createElement("option",null,"19"),l.a.createElement("option",null,"20"),l.a.createElement("option",null,"21"),l.a.createElement("option",null,"22"),l.a.createElement("option",null,"23")),this.state.camera2_setup,this.state.camera3_setup,this.state.camera4_setup,this.state.camera5_setup,this.state.camera6_setup,this.state.camera7_setup,this.state.camera8_setup,this.state.camera9_setup,this.state.camera10_setup,l.a.createElement("br",null),l.a.createElement("br",null),"Show all Cameras:",l.a.createElement("input",{type:"checkbox",onChange:this.handle_Checkbox_Change.bind(this)}),l.a.createElement("br",null),l.a.createElement("br",null),"\xa0",l.a.createElement("button",{type:"button",onClick:this.submitted.bind(this)},"Submit"),this.state.camera_img,l.a.createElement("h1",{class:"error_message"},this.state.error)))}}]),t}(a.PureComponent),_=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={name:"React"},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h1",{class:"top-header"}," Braingeneers Picroscope Imaging")),l.a.createElement(d,null))}}]),t}(a.Component);Object(o.render)(l.a.createElement(_,null),document.getElementById("root"));var g=_;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.ba9e21ea.chunk.js.map