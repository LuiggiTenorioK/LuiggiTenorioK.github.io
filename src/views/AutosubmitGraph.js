import React, { useRef } from 'react';
import ReactEcharts from "echarts-for-react";

const echartOption = {
    title: {
        text: 'Autosubmit Graph Mockup'
    },
    toolbox: {
        show: true,
        feature: {
            // dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
        }
    },
    animation: false,
    dataZoom: [{
        type: "inside",
        disabled: true
    }],
    tooltip: {},
    series: [
        {
            type: 'graph',
            roam: true,
            label: {
                show: true,
                position: "bottom"
            },
            symbol: "path://M 20 0 h 760 a 20 20 0 0 1 20 20 v 160 a 20 20 0 0 1 -20 20 h -760 a 20 20 0 0 1 -20 -20 v -160 a 20 20 0 0 1 20 -20 z",
            symbolSize: [200,50],
            itemStyle: {
                color: "#fff",
                borderColor: '#000'
            },
            emphasis: {
                scale: false,
                itemStyle: {
                    color: "#eee",
                }
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            lineStyle: {
                color: "#000"
            },
            draggable: true,
            zoom: 0.7,
            nodeScaleRatio: 0.8,
            scaleLimit: {
                min: 0.1,
                max: 2
            },
            selectedMode: "multiple",
            select: {
                itemStyle: {
                    color: "#D2E5FF",
                    borderColor: "#2B7CE9"
                }
            },
            data: [
                {
                    name: 't0kx_LOCAL_SETUP',
                    x: 450,
                    y: 0,
                    value: "300",
                    symbolSize: 50
                },
                {
                    name: 't0kx_LOCAL_SEND_SOURCE',
                    x: 400,
                    y: 100,
                    symbolSize: 100,
                },
                {
                    name: 't0kx_LOCAL_SEND_SOURCE_2',
                    x: 500,
                    y: 100,
                    symbolSize: 120,
                }
            ],
            links: [
                {
                    source: "t0kx_LOCAL_SETUP",
                    target: "t0kx_LOCAL_SEND_SOURCE"
                },
                {
                    source: "t0kx_LOCAL_SETUP",
                    target: "t0kx_LOCAL_SEND_SOURCE_2"
                }
            ]
        }
    ]
}

const AutosubmitGraph = (props) => {
    const chartRef = useRef(null);

    document.title = "Autosubmit Graph Mockup"

    return (
        <div style={{ height: "100vh", width: "100vv"}}>
            <ReactEcharts ref={chartRef} style={{height: '100%', width: '100%'}} option={echartOption} />
        </div>
    );
};

export default AutosubmitGraph;