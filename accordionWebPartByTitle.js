<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>  
<script type="text/javascript">
jQuery(document).ready(function() {
   jQuery(".ms-wpContentDivSpace ").hide();
   
   jQuery(".ms-webpart-chrome-title ").click(function(){
      jQuery(this).next(".ms-wpContentDivSpace ").slideToggle(500);
   });
});
</script>
<style>
h2.ms-webpart-titleText { padding-bottom: 8px; position: relative; }

h2.ms-webpart-titleText span { color: #000; font-size: 26px; font-weight: normal; }

h2.ms-webpart-titleText:before,

h2.ms-webpart-titleText:after
{ content: ""; 
background: #e1e1e1; 
display: inline-block; 
vertical-align: middle;
height: 2px;
position: relative;
transition: all 0.25s ease-in-out; 
-webkit-transition: all 0.25s ease-in-out; 
-moz-transition: all 0.25s ease-in-out;
-o-transition: all 0.25s ease-in-out;
}

h2.ms-webpart-titleText:before { width: 20px; right: 5px; }

h2.ms-webpart-titleText:after { width: 100%; left: 5px; }

h2.ms-webpart-titleText:hover:before, h2.ms-webpart-titleText:hover:after { height: 5px; background: #0072C6; }

  </style>
