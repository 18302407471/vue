<template>
  <el-container>
    <!-- <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
        <el-table-column prop="date" label="日期" width="180"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table> -->
    <el-menu
        default-active="0"
        class="el-menu-vertical-demo"
        background-color="#F0F6F6"
        text-color="#3C3F41"
        active-text-color="black">
        <NavMenu :navMenus="leftMenus"></NavMenu>
    </el-menu>
  </el-container>
    
    
</template>

<script>
import NavMenu from '../components/NavMenu';
export default {
    components: {
      NavMenu
    },
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        leftMenus:{
    "entity": null,
    "childs": [
        {
            "entity": {
                "id": 1,
                "parentMenuId": 0,
                "name": "systemManage",
                "icon": "el-icon-message\r\n",
                "alias": "系统管理",
                "state": "ENABLE",
                "sort": 0,
                "value": null,
                "type": "NONE",
                "discription": "用于系统管理的菜单",
                "createUserId": 1
            },
            "childs": [
                {
                    "entity": {
                        "id": 3,
                        "parentMenuId": 1,
                        "name": "authManage",
                        "icon": "el-icon-loading",
                        "alias": "权限管理",
                        "state": "ENABLE",
                        "sort": 0,
                        "value": "/system/auth",
                        "type": "LINK",
                        "discription": "用于权限管理的菜单",
                        "createUserId": 1
                    },
                    "childs": null
                },
                {
                    "entity": {
                        "id": 4,
                        "parentMenuId": 1,
                        "name": "roleManage",
                        "icon": "el-icon-bell",
                        "alias": "角色管理",
                        "state": "ENABLE",
                        "sort": 1,
                        "value": "/system/role",
                        "type": "LINK",
                        "discription": "用于角色管理的菜单",
                        "createUserId": 1
                    },
                    "childs": null
                },
                {
                    "entity": {
                        "id": 2,
                        "parentMenuId": 1,
                        "name": "menuManage",
                        "icon": "el-icon-edit",
                        "alias": "菜单管理",
                        "state": "ENABLE",
                        "sort": 2,
                        "value": "/system/menu",
                        "type": "LINK",
                        "discription": "用于菜单管理的菜单",
                        "createUserId": 1
                    },
                    "childs": null
                },
                {
                    "entity": {
                        "id": 5,
                        "parentMenuId": 1,
                        "name": "groupManage",
                        "icon": "el-icon-mobile-phone\r\n",
                        "alias": "分组管理",
                        "state": "ENABLE",
                        "sort": 3,
                        "value": "/system/group",
                        "type": "LINK",
                        "discription": "用于分组管理的菜单",
                        "createUserId": 1
                    },
                    "childs": null
                }
            ]
        },
        {
            "entity": {
                "id": 6,
                "parentMenuId": 0,
                "name": "userManage",
                "icon": "el-icon-news",
                "alias": "用户管理",
                "state": "ENABLE",
                "sort": 1,
                "value": null,
                "type": "NONE",
                "discription": "用于用户管理的菜单",
                "createUserId": 1
            },
            "childs": [
                {
                    "entity": {
                        "id": 7,
                        "parentMenuId": 6,
                        "name": "accountManage",
                        "icon": "el-icon-phone-outline\r\n",
                        "alias": "帐号管理",
                        "state": "ENABLE",
                        "sort": 0,
                        "value": "",
                        "type": "NONE",
                        "discription": "用于帐号管理的菜单",
                        "createUserId": 1
                    },
                    "childs": [
                        {
                            "entity": {
                                "id": 14,
                                "parentMenuId": 7,
                                "name": "emailManage",
                                "icon": "el-icon-sold-out\r\n",
                                "alias": "邮箱管理",
                                "state": "ENABLE",
                                "sort": 0,
                                "value": "/content/email",
                                "type": "LINK",
                                "discription": "用于邮箱管理的菜单",
                                "createUserId": 1
                            },
                            "childs": null
                        },
                        {
                            "entity": {
                                "id": 13,
                                "parentMenuId": 7,
                                "name": "passManage",
                                "icon": "el-icon-service\r\n",
                                "alias": "密码管理",
                                "state": "ENABLE",
                                "sort": 1,
                                "value": "/content/pass",
                                "type": "LINK",
                                "discription": "用于密码管理的菜单",
                                "createUserId": 1
                            },
                            "childs": null
                        }
                    ]
                },
                {
                    "entity": {
                        "id": 8,
                        "parentMenuId": 6,
                        "name": "integralManage",
                        "icon": "el-icon-picture",
                        "alias": "积分管理",
                        "state": "ENABLE",
                        "sort": 1,
                        "value": "/user/integral",
                        "type": "LINK",
                        "discription": "用于积分管理的菜单",
                        "createUserId": 1
                    },
                    "childs": null
                }
            ]
        },
        {
            "entity": {
                "id": 9,
                "parentMenuId": 0,
                "name": "contentManage",
                "icon": "el-icon-rank",
                "alias": "内容管理",
                "state": "ENABLE",
                "sort": 2,
                "value": null,
                "type": "NONE",
                "discription": "用于内容管理的菜单",
                "createUserId": 1
            },
            "childs": [
                {
                    "entity": {
                        "id": 10,
                        "parentMenuId": 9,
                        "name": "classifyManage",
                        "icon": "el-icon-printer",
                        "alias": "分类管理",
                        "state": "ENABLE",
                        "sort": 0,
                        "value": "/content/classify",
                        "type": "LINK",
                        "discription": "用于分类管理的菜单",
                        "createUserId": 1
                    },
                    "childs": null
                },
                {
                    "entity": {
                        "id": 11,
                        "parentMenuId": 9,
                        "name": "articleManage",
                        "icon": "el-icon-star-on",
                        "alias": "文章管理",
                        "state": "ENABLE",
                        "sort": 1,
                        "value": "/content/article",
                        "type": "LINK",
                        "discription": "用于文章管理的菜单",
                        "createUserId": 1
                    },
                    "childs": null
                },
                {
                    "entity": {
                        "id": 12,
                        "parentMenuId": 9,
                        "name": "commentManage",
                        "icon": "el-icon-share",
                        "alias": "评论管理",
                        "state": "ENABLE",
                        "sort": 2,
                        "value": "/content/comment",
                        "type": "LINK",
                        "discription": "用于评论管理的菜单",
                        "createUserId": 1
                    },
                    "childs": null
                }
            ]
        }
    ]
}
      }
    }
  }
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>