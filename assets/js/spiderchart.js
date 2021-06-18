Highcharts.chart('container', {

    chart: {
        polar: true,
        type: 'line'
    },


    title: {
        text: 'Accuracy VS Loss',
        x: 0,
		y:10,
		margin:50
    },

    pane: {
        size: '70%'
    },

    xAxis: {
        categories: ['Adadelta', 'Adagrad', 'Adam', 'Adamax',
            'Nadam', 'RMSprop', 'SGD', 'Ftrl'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.3f}</b><br/>'
    },

    legend: {
        align: 'left',
        verticalAlign: 'middle',
        layout: 'vertical'

    },

    series: [{
        name: 'Accuracy',
        data: [0.649, 0.842, 0.96, 0.95, 0.941, 0.76, 0.948, 0.542],
        pointPlacement: 'on'
    }, {
        name: 'Loss',
        data: [1.009, 0.459, 0.132, 0.159, 0.194, 0.943, 0.154, 1.108],
        pointPlacement: 'on'
    }, {
        name: 'Time (min)',
        data: [1.0044, 1.390, 1.002, 1.078, 2.237, 1.526, 0.839, 1.409],
        pointPlacement: 'on'
    }],


});

