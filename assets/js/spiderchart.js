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
            'Nadam', 'RMSprop', 'SGD'],
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
        data: [0.658, 0.834, 0.834, 0.945, 0.734, 0.953, 0.89],
        pointPlacement: 'on'
    }, {
        name: 'Loss',
        data: [1.023, 0.464, 0.456, 0.177, 1.12, 0.132, 0.332],
        pointPlacement: 'on'
    }],


});

