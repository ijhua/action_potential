<head>
               <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
</head>

<script>
	TESTER = document.getElementById('tester');
	Plotly.plot( TESTER, [{
	x: [1, 2, 3, 4, 5],
	y: [1, 2, 4, 8, 16] }], {
	margin: { t: 0 } } );
  console.log( Plotly.BUILD );
</script>