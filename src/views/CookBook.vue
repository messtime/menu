<template>
    <div class="cook-book">
        <el-button type="success" v-on:click="generateMenu">随机点击生成</el-button>
        <el-button type="success" v-on:click="saveMenu">保存到服务器</el-button>
        <el-button type="success" v-on:click="getMenu">获取服务器数据</el-button>
        <el-button type="success" v-on:click="rotate">旋转表格</el-button>

        <br />
        <br />
        <div :class="{ rotate: isRotate }" class="rotate-box">
            <Week :events="events1">
            </Week>
        </div>
   

    </div>
</template>
<script>
import Week from "@/components/Week.vue"
import breakfast from "@/data/breakfast.js";
import aquatic from "@/data/aquatic.js";
import soup from "@/data/soup.js";
import dessert from "@/data/dessert.js";
import staple from "@/data/staple.js";
import condiment from "@/data/condiment.js";
import meat_dish from "@/data/meat_dish.js";
import drink from "@/data/drink.js";
import semi_finished from "@/data/semi_finished.js";
import vegetable_dish from "@/data/vegetable_dish.js";
import bilibiliTable from "@/data/bilibili.js"
import axios from "axios";
export default {
    components: {
        Week,
    },
    data() {
        return {
            events1: [
                {
                    xq: 1,
                    title: '形势与政治',
                    class: 'sport',
                    content: '1-4节' + '/' + '社会学1班' + '/' + '5教-402室',
                    start: 1,
                    end: 4
                },
            ],
            isRotate: false,
            tableData: [],
            bilibiliTable,
        }
    },
    mounted() {
        if (localStorage.getItem('events1')) {
            this.events1 = JSON.parse(localStorage.getItem('events1'))
        } else {
            this.generateMenu();
        }
    },
    watch: {

    },
    created() {
        this.allArr = [
            { name: "breakfast", list: breakfast },
            { name: "meat_dish", list: meat_dish },
            { name: "aquatic", list: aquatic },
            { name: "soup", list: soup },
            { name: "dessert", list: dessert },
            { name: "staple", list: staple },
            { name: "condiment", list: condiment },
            { name: "drink", list: drink },
            { name: "semi_finished", list: semi_finished },
            { name: "vegetable_dish", list: vegetable_dish },
        ];
        this.initFood();
    },
    methods: {
        generateMenu() {
            var result = [];
            // for (let i = 0; i < 7; i++) {
            //     let itemIndex = i*3;
            //     for (let j = 1; j < 12; j += 4) {
            //         let select = this.tableData[Math.floor(Math.random() * this.tableData.length)]; //将allarr数组的值赋给select

            //         result[itemIndex] = {
            //             xq: i + 1,
            //             title: select.food,
            //             class: 'sport',
            //             content: select.type,
            //             start: j,
            //             end: j + 1
            //         }
            //         itemIndex++
            //     }
            // }
            for (let i = 0; i < 7; i++) {
                let itemIndex = i * 3;
                // let itemIndex = 21 + i*3;
                for (let j = 1; j < 12; j += 4) {
                    let select = this.bilibiliTable[Math.floor(Math.random() * this.bilibiliTable.length)]; //将allarr数组的值赋给select

                    result[itemIndex] = {
                        xq: i + 1,
                        title: select.food,
                        class: 'sport',
                        content: `<a href=${select.href} target="_black">${select.type}</a>`,
                        start: j,
                        end: j + 3
                    }
                    itemIndex++
                }
            }
            this.events1 = result;
            localStorage.setItem('events1', JSON.stringify(result))

        },
        getMenu() {
            let self = this;
            axios
                .get(apiPrefix + "application/getMenu")
                .then(function (response) {
                    console.log(response);
                    debugger;
                    if (response.data) {
                        self.events1 = response.data.data.data;
                        localStorage.setItem('events1', JSON.stringify(response.data.data.data))
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    self.$alert(error);
                });
        },
        saveMenu() {
            let self = this;
            let data = this.events1;
            axios
                .post(apiPrefix + "application/setMenu", {
                    name: "第一个参数name", // 参数 name
                    data: data, // 参数 data
                })
                .then(function (response) {
                    console.log(response);
                    if (response.data) {
                        localStorage.setItem('events1', JSON.stringify(data))
                        self.$alert('保存成功');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    self.$alert(error);
                });

        },
        rotate() {
            this.isRotate = !this.isRotate;
        },
        initFood() {
            this.allArr.forEach((menuItem) => {
                menuItem.list.forEach((listItem) => {
                    //方法用于调用数组的每个元素，并将元素传递给回调函数。
                    if (listItem) {
                        this.tableData.push({
                            food: listItem.name,
                            menu: listItem,
                            type: menuItem.name,
                        });
                    }
                });
            });
        },
    }
}
</script>
<style lang="scss"> 
.cook-book {
    .rotate-box {
        transition: all 0.5s;
    }
     .rotate {
        text-align: center;
         transform-origin: left top;
         transform: rotate(90deg) translateY(-100%);
         margin: 0 auto;
         width: 262px;
        //  width: 50%;
         &::after {
            background-color: red;
            width: 10px;
         }
          .el-table {
             overflow: unset;
         }

         .el-table__header-wrapper {
             width: fit-content;
         }

         .el-table__body-wrapper {
             width: fit-content;
             padding-right: 40px;
         } 
         .el-table--border::after {
            display: none;
         }
     }
 }
</style>