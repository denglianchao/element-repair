<template>
    <div class="app-container">
        <div class="filter-container">
            <el-input placeholder="Title" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"/>

            <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="">
                Search
            </el-button>
        </div>

        <div class="filter-operation">
            <el-button class="filter-item" type="primary" icon="el-icon-edit" @click="modal = true">
                Add
            </el-button>
        </div>

        <el-table :key="tableKey" v-loading="listLoading" :data="data" border fit highlight-current-row style="width: 100%;"
        >
            <el-table-column label="ID" prop="roleid" sortable="custom" align="center" width="80">
                <template slot-scope="scope">
                    <span>{{ scope.row.roleid }}</span>
                </template>
            </el-table-column>
            <el-table-column label="角色名" prop="rolename">
            </el-table-column>
            <el-table-column label="描述" prop="roledesc" align="center">
            </el-table-column>
            <el-table-column label="新增时间" prop="addtime" align="center">
            </el-table-column>
            <el-table-column label="操作人员" prop="operator" align="center">
            </el-table-column>
            <!--<el-table-column label="Status" class-name="status-col" width="100">
                <template slot-scope="{row}">
                    <el-tag :type="row.status | statusFilter">
                        {{ row.status }}
                    </el-tag>
                </template>
            </el-table-column>-->
            <el-table-column label="操作" align="center" width="400" class-name="small-padding fixed-width">
                <template slot-scope="{row}">
                    <el-button type="primary" size="mini" @click="">
                        Edit
                    </el-button>
                    <el-button size="mini" type="success" @click="">
                        Publish
                    </el-button>
                    <el-button size="mini" @click="">
                        Draft
                    </el-button>
                    <el-button size="mini" type="danger" @click="deleteRole(row.roleid)">
                        Delete
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="app-pagination">
            <el-pagination
                    background
                    layout="prev, pager, next" :page-size="pageSize" :current-page="currentPage"
                    :total="total" @current-change = "pageChange" @prev-click="" @next-click="pageChange">
            </el-pagination>
        </div>
        <add-admin :modal="modal" @on-change="onResultChange">
        </add-admin>
    </div>
</template>

<script>
    import addAdmin from './components/addAdmin.vue'
    export default {
        /*name: 'Admin',*/
        data () {
            return {
                modal: false,
                tableKey: 0,
                list: null,
                total: 0,
                pageSize: 5,
                currentPage: 1,
                listLoading: false,
                data: []
            }
        },
        components: {
            addAdmin
        },
        created () {

        },
        mounted() {
            this.initData();
            /*this.initScroll();*/
        },
        methods: {
            initData() {
                let _this = this;
                let param = {};
                param.pageSize = this.pageSize;
                param.pageNum = this.currentPage;
                this.listLoading = true;
                this.$http.post('/management/adminuser/role-info.mvc', param).then(function (value) {
                    console.log(value);
                    if(value.data.code == '200') {
                        let page = value.data.result.page;
                        _this.pageSize = page.pageSize;
                        _this.total = page.total;
                        _this.currentPage = page.pageNum;
                        _this.data = page.list;
                    } else {

                    }
                    _this.listLoading = false;
                }).catch(function (error) {

                })
            },
            deleteRole(roleid) {
                this.$confirm('此操作将永久删除该角色, 是否继续?', '提示', {
                    type: 'warning'
                }).then(() => {
                    if(!roleid) {
                        this.$message({
                            type: 'warning',
                            message: '删除对象不能为空!'
                        });
                    }
                    let _this = this;
                    const loading = this.$loading({
                        lock: true,
                        text: '角色正在删除中，请稍等...',
                        spinner: 'el-icon-loading',
                        background: 'rgba(0, 0, 0, 0.5)'
                    });
                    this.$http.post('/management/adminuser/role-delete.mvc', {'roleid': roleid}).then(function (value) {
                        if(value.data.code == '200') {
                            _this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                            _this.initData();
                        } else {
                            _this.$message({
                                type: 'fail',
                                message: '删除失败!'
                            });
                        }
                        loading.close();
                    }).catch(function (error) {

                    })
                });
            },
            pageChange(val) {
                this.currentPage = val;
                this.initData();
            },
            onResultChange(val) {
                this.modal = val;
            }
        }
    }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
$blue: rgba(0, 0, 0, 0.7)
</style>
