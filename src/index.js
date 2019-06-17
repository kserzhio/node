import Koa from 'koa';
import {port} from './utils/config'
const app = new Koa();
app.use(async ctx=>{
    ctx.body = 'Hello Word'
});
app.listen(3000,() => console.log(`Server started port 3000 ${port}`));