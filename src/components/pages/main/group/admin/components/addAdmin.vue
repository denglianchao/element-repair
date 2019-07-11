<template>
    <el-dialog title="新增角色" :visible.sync="dialogModal" width="30%"
               center>
        <el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
                <el-col :span="20">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogModal = false">取 消</el-button>
            <el-button type="primary" @click="dialogModal = false">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
    export default {
        data () {
            return {
                dialogModal: this.model,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '120px'
            }
        },
        props: {
            modal: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            modal(val) {
                this.dialogModal = val;//监听外部对props属性modal的变更，并同步到组件内的data属性myModal中
            },
            dialogModal(val){
                this.$emit("on-change", val);//组件内对myModal变更后向外部发送事件通知
            }
        },
    }
</script>