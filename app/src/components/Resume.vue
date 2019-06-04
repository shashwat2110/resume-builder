<template>
<v-container>

		<div class="row">
			<div class="text-center" id="center">
				<div id="page" class="droid">
					<div class="row" style="margin-bottom:10px;">
						<div class="col-sm-12" contenteditable="true">
							<div id="info" style="display:inline-block;">
								<h2 id="contentName">Student Name</h2>
								<h5 id="contentCourse">B.Tech - XXX Engineering</h5>
								<h5 id="contentBranch">XXX Engineering</h5>
								<h5 id="contentMinor">Minor in XXX</h5>
								<h5 id="contentCollege">Indian Institute of Technology Guwahati</h5>
							</div>
							<div id="contact" style="float:right; display:inline-block;">
								+91-9999999999<br>
								xyz.xyz@gmail.com<br>
								abc@iitg.ac.in<br>
								<span class="light" id="contactLink1">www.linkedin.com/in/xyz123<br></span>
								<span class="light" id="contactLink2">github.com/xyz123<br></span>
							</div>
						</div>
					</div>

                <div v-for="field in resumeData" :key="field[0]">
					<div class="section" :id="field[0]" contenteditable="true">
						<div class="section-title ruled rule-above">
							<hr class="hr-above">
							<h4 contenteditable="false"><strong contenteditable="false"> {{ field[1].fieldName }} </strong></h4>
							<hr class="hr-below">
						</div>
		               <div v-html="field[1].content"></div>
					</div>

				</div>
				</div>
				
			</div>


		</div>

</v-container>


    
</template>


<script>
  export default {
    name: 'Resume',
    data: function() {
        return {
        }
    },
    props : {
        resumeData: Array
    },
   
    
  }
</script>

<style>

#page {
	/* width: 794px; */
	/* height: 29.7cm; */
	width: 21cm;
	background-color: white;
	margin: 1% auto 1% auto;
	padding: 0.2cm 1.3cm 1cm 1.3cm;
	box-shadow: 0px 0px 20px 0px #000;
	line-height: 1.4em;
	text-align: left;
}


#page h2 {
	margin-bottom: 4px;
}
#page h5 {
	margin-top: 2px; margin-bottom: 3px;
}

a {
	color: #666;
}
a.blue {
	color: blue;
	text-decoration: none;
	border-bottom: 1px dotted blue;
}
a.blue:hover {
	color: blue;
	text-decoration: none;
	border-bottom: 1px solid blue;
}

ul {
	margin-left: 20px;
	padding-left: 20px;
}
li {
	margin-top: 1%;
}
li li {
	margin-top: 0.25%;
}



.star {
	margin-top: 5px;
}
.light {
	font-weight: 300;
}
.grey {
	color: #666;
}
.borderless { margin-bottom: 0; }
.half {
	display: inline-block;
	width: 49.5%;
}

.left {
	float: left;
}
.right {
	float: right;
}
.tab {
	margin-left: 10px;
}



#image_box {
	float: left;
	margin-top: 25px;
	margin-left: 5px;
	margin-right: 15px;
}
#info {
	margin-bottom: 0px;
	margin-top: auto;
}
#contact {
	position: absolute;
	bottom: 0;
	right: 20px;
	text-align: right;
}


table {
	border-top: 1px solid #999;
	border-left: 1px solid #999;
}

tr {
	border-bottom: 1px solid #999;
}

td {
	padding: 0px 5px 0px 5px;
	border-right: 1px solid #999;
}


.section-title h4 { 
	margin-top: 15px;
	margin-bottom: 0px;
}
.section-title.uppercase h4 {
	text-transform: uppercase;
}
.section-title.shaded h4 {
	padding: 3px;
	padding-left: 10px;
	font-size: 14px;
	background-color: #ccc !important;
}

.section-title.ruled.rule-above hr.hr-above {
	border: 1px solid hsl(0,0%,40%);
	margin-top: 0px; margin-bottom: 0px;
}
.section-title.ruled.rule-above hr.hr-below {
	border: none;
	margin: 0px;
}
.section-title.ruled.rule-below hr.hr-above {
	border: none;
	margin: 0px;
}
.section-title.ruled.rule-below hr.hr-below {
	border: 1px solid hsl(0,0%,40%);
	margin-top: 2px; margin-bottom: 5px;
}
.section-title.shaded hr { 
	border: none;
	margin: 0px;
}


.text {
	color: #444;
	font-size: 13.5px;
}
.time {
	color: #333;
	font-style: italic;
	margin-right: 1px;
}
.mentor {
	font-weight: 300;
	font-style: italic;
}
.link {
	color: #666;
	margin-left: 30px;
	font-weight: 300;
	font-style: italic;
	margin-right: 1px;
}



#page.verdana-sans * {
	font-family: "Verdana", sans-serif;
}
#page.verdana-serif * {
	font-family: "Verdana", serif;
}
#page.roboto * {
	font-family: 'Roboto', sans-serif;
}
#page.droid * {
	font-family: 'Droid Serif', serif;
}
.droid strong , .verdana-sans strong , .verdana-serif strong {
	font-weight: 700;
}
.roboto strong {
	font-weight: 500;
}
.droid .title , .verdana-sans .title , .verdana-serif .title {
	font-weight: 700;
}
.roboto .title {
	font-weight: 500;
}

#notice {
	background-color: #C0392B;
	border-radius: 5px;
	padding: 10px;
	margin-bottom: 10px;
	color: white;
	text-align: center;
}
#notice a {
	color: #F1C40F;
}
</style>
