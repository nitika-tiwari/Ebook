<head>

    <script>(function(H){H.className=H.className.replace(/\bno-js\b/,'js')})(document.documentElement)</script>
    <meta charset="utf-8">
    <style>
        .js #features {
            margin-left: -12000px; width: 100%;
        }

       .cover {
  /*  background: #ffffff url(../dream/banner/boy_0.png) no-repeat; */
    background-size: 100% 100%;}
    #main {
    position: relative;
    padding-top: 50px!important;
}
  #blank{
    display: none;
  }
 </style>
    <!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame
       Remove this if you use the .htaccess -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <title></title>
    <meta name="description" content="">
    <meta name="author" content="Marcio Aguiar">

    <!--  Mobile viewport optimized: j.mp/bplateviewport -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- CSS : implied media="all" -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/wow_book.css" type="text/css" />
    <link rel="stylesheet" type="text/css" href="css/preview.css"><!-- Uncomment if you are specifically targeting less enabled mobile browsers
	<link rel="stylesheet" media="handheld" href="css/handheld.css?v=2">  -->

    <!-- All JavaScript at the bottom, except for Modernizr which enables HTML5 elements & feature detects -->
    <script src="js/modernizr-1.6.min.js"></script>
    <script src="js/book.js"></script>

</head>
<body>

<div id="container">
<nav>
    <ul>
        <li><a id='first'     href="#" title='goto first page'   >First page</a></li>
        <li><a id='back'      href="#" title='go back one page'  >Back</a></li>
        <li><a id='next'      href="#" title='go foward one page'>Next</a></li>
        <li><a id='last'      href="#" title='goto last page'    >last page</a></li>
    </ul>
</nav>
<section class="form_section">

    <input type="text" id="tb" name="input" placeholder="Firstname" >
    <input type="text" id="tb" name="input" placeholder="Lastname" >
    <input type="radio" class="genderCheck" name="gender" value="boy"  >Boy
    <input type="radio" class="genderCheck"  name="gender" value="girl">Girl
    <button onClick="myfun()" formnovalidate>Get Image</button>
  <div id="result"></div>

 <h2><span id="mylocation"></span></h2>
 </section>

 <div id="main" class="jsload">
    <img id='click_to_open' src="images/click_to_open.png" alt='click to open' />

    <div id='features'></div> <!-- features -->

</div>
<div id='thumbs_holder'>
</div>
<footer>

</footer>
</div> <!--! end of #container -->
</div>

<!-- Javascript at the bottom for fast page loading -->

<!-- Grab Google CDN's jQuery. fall back to local if necessary -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>


<script src="https://cdn.shopify.com/s/files/1/0605/2675/6046/t/1/assets/wow_book.js"></script>


</body>
</html>
