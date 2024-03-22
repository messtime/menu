<template>
    <div class="book-store">
        <a class="srcLink" href="https://www.alfredapp.com/help/">官方文档链接</a>
        <div class="test">店名：有戏OnShow
            <br />地址：深圳市宝安区欢乐港湾16号滨海艺术中心1楼
        </div>
        <div class="test">店名：钟书阁
            <br />地址：宝安区海府路欢乐港湾2号东岸楼L1-021
        </div>
        <div class="test">店名：愈欣书店
            <br />地址：南山区前海印里北里2层
        </div>
        <div class="test">店名：吾非书店
            <br />地址：南山区科苑北路1号电信大楼一层
        </div>
        <div class="test">店名：前檐书店
            <br />地址：南山区科苑南路2888号深圳湾万象城3楼
        </div>
        <div class="test">店名：旧天堂书店
            <br />地址：南山区华侨城文化创意园2期A5栋120铺
        </div>
        <div class="test">店名：飞地书局
            <br />地址：南山区华侨城创意文化园北区B4栋一楼
        </div>
        <div class="test">店名：小津概念书房
            <br />地址：福田区景田路105号天健时尚新天地B10
        </div>
        <div class="test">店名：九斤书店
            <br />地址：龙岗区坂田街道五和大道南96号巷内
        </div>
        <div class="test">店名：watch comics
            <br />地址：福田区园岭街道园岭五街1号、3号，5号园东花园裙楼52
        </div>
        <!-- <div style="color: #afafaf;">app文件注释 直接查询应用程序</div> -->
        <div class="test">app文件注释 直接查询应用程序</div>
        <div id="container"></div>
    </div>
</template>

<script>
export default {
    name: "menuxxx",
    components: {
    },
    data() {
        //所定义的组件的数据
        return {
            items: [],
            inputValue: "",
        };
    },
    methods: {
        loadJScript() {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = '//api.map.baidu.com/api?type=webgl&v=1.0&ak=您的密钥&callback=init';
            document.body.appendChild(script);
        },
        init() {
            var map = new BMapGL.Map('container'); // 创建Map实例
            var point = new BMapGL.Point(116.404, 39.915); // 创建点坐标
            map.centerAndZoom(point, 10);
            map.enableScrollWheelZoom(); // 启用滚轮放大缩小
        }
    },
    mounted() {
        // this.loadJScript(); // 异步加载地图

    },
};
</script>
  
<style scoped>
@import "@/scss/note.css"
</style>
  