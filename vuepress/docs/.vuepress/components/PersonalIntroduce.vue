<template>
    <div class="card">
        <img :src="$withBase('/img/home.jpg')" alt="foo" class="header">
        <h1>snowWu</h1>
        <p>我是一位热爱编程的技术爱好者。目前我的技术栈包括 typescript、HTML、CSS、Node.js、React,SpringBoot 等。</p>
        <p>如果你有任何问题或好的意见，欢迎发邮件至 <a href="mailto:2972561826@qq.com">2972561826@qq.com</a> 与我联系。</p>
    </div>
</template>
<script setup>

</script>
<style>
.card {
    background-color: #fff;
    padding: 30px;
    width: 80%;
    max-width: 800px;
    margin: 200px auto;
    text-align: center;
}

.header {
    width: 200px;
    height: 200px;
    border: 5px solid #eee;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
}

h1 {
    margin-bottom: 20px;
}

p {
    margin-bottom: 20px;
    font-size: 18px;
}

a {
    color: #007bff;
}
</style>


