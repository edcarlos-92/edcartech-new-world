export default function formatPost(post:any) {
    let rendered = post.content;
    let result = rendered.replace(/\<code\>/g,'<div class="microlight">');
    //let result = rendered.replace(/\<code\>/g,'<div class="sc-gsnTZi csNcpH"><span style="background:#d9d9db;border-radius:3px;display:flex;line-height:1;overflow-x:auto;white-space:pre"><code class="prettyprint" style="font-size:inherit;font-family:inherit;line-height:1;padding:8px">');
    const parsed = result;
    return parsed;
}

    // const getTag = document.getElementsByTagName('pre')
    // // const getHtmlData = Array.from(getTag).map(item => item.innerHTML)