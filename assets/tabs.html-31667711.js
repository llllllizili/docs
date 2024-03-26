import{_ as v,X as r,Y as u,Z as m,a0 as n,a2 as t,a3 as a,$ as c,a1 as e,F as o}from"./framework-7663974c.js";const b={},p=n("p",null,"让你的 Markdown 文件支持供选项卡。",-1),_=c(`<h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><p>你需要将选项卡包装在 <code>tabs</code> 容器中。</p><p>你可以在 <code>tabs</code> 容器中添加一个 id 后缀，该后缀将用作选项卡 id。 所有具有相同 id 的选项卡将共享相同的切换事件。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

<span class="token comment">&lt;!-- 这里，fruit 将用作 id，它是可选的 --&gt;</span>

<span class="token comment">&lt;!-- 选项卡内容 --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个容器内，你应该使用 <code>@tab</code> 标记来标记和分隔选项卡内容。</p><p>在 <code>@tab</code> 标记后，你可以添加文本 <code>:active</code> 默认激活选项卡，之后的文本将被解析为选项卡标题。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs

@tab 标题 1

<span class="token comment">&lt;!-- tab 1 内容 --&gt;</span>

@tab 标题 2

<span class="token comment">&lt;!-- tab 2 内容 --&gt;</span>

@tab:active 标题 3

<span class="token comment">&lt;!-- tab 3 将会被默认激活 --&gt;</span>

<span class="token comment">&lt;!-- tab 3 内容 --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，标题将用作选项卡的值，但你可以使用 id 后缀覆盖它。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs

@tab 标题 1

<span class="token comment">&lt;!-- 此处，选项卡 1 的标题“标题 1”将用作值。 --&gt;</span>

<span class="token comment">&lt;!-- tab 1 内容 --&gt;</span>

@tab 标题 2#值 2

<span class="token comment">&lt;!-- 这里，tab 2 的标题将是 “标题 2”，但它会使用 “值 2” 作为选项卡的值--&gt;</span>

<span class="token comment">&lt;!-- tab 2 内容 --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),h={class:"hint-container info"},g=n("p",{class:"hint-container-title"},"一起切换并保持选择",-1),k=n("p",null,"如果你想让一些选项卡组一起切换，你可以使用相同的选项卡 ID 来绑定它们。",-1),f=n("p",null,"针对每个选项卡 ID 的选择会被存储并进行持久化。",-1),A=n("p",null,"下方是一个案例。",-1),x=n("p",null,"选择包管理器:",-1),w=n("p",null,"npm 应该与 Node.js 被一同安装。",-1),B=n("p",null,"如果你使用的是 Node.js v16+，你可以使用 corepack 来启用 pnpm:",-1),N=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[e("corepack prepare pnpm@7.28.0 "),n("span",{class:"token parameter variable"},"--activated"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),V=n("p",null,"否则，你可以使用 npm 安装它:",-1),D=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),e(" i "),n("span",{class:"token parameter variable"},"-g"),e(),n("span",{class:"token function"},"pnpm"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),O=n("p",null,[e("安装 "),n("code",null,"vuepress-plugin-md-enhance"),e(":")],-1),C=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),e(" i "),n("span",{class:"token parameter variable"},"-D"),e(` vuepress-plugin-md-enhance
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),T=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),e(),n("span",{class:"token function"},"add"),e(),n("span",{class:"token parameter variable"},"-D"),e(` vuepress-plugin-md-enhance
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),j=n("h2",{id:"案例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#案例","aria-hidden":"true"},"#"),e(" 案例")],-1),I=n("p",null,"一个水果选项卡列表:",-1),E=n("p",null,"Apple",-1),F=n("p",null,"Banana",-1),M=c(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple#apple

Apple

@tab banana#banana

Banana

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一个水果选项卡列表:</p>`,2),S=n("p",null,"Apple",-1),X=n("p",null,"Banana",-1),Y=n("p",null,"Orange",-1),Z=c(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个没有绑定 id 的水果选项卡列表:</p>`,2),$=n("p",null,"Apple",-1),q=n("p",null,"Banana",-1),y=n("p",null,"Orange",-1),z=c(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function G(H,J){const d=o("Tabs");return r(),u("div",null,[p,m(" more "),_,n("div",h,[g,k,f,A,x,t(d,{id:"38",data:[{title:"npm"},{title:"pnpm"}],"tab-id":"shell"},{tab0:a(({title:i,value:s,isActive:l})=>[w]),tab1:a(({title:i,value:s,isActive:l})=>[B,N,V,D]),_:1}),O,t(d,{id:"58",data:[{title:"使用 npm",id:"npm"},{title:"使用 pnpm",id:"pnpm"}],"tab-id":"shell"},{tab0:a(({title:i,value:s,isActive:l})=>[C]),tab1:a(({title:i,value:s,isActive:l})=>[T]),_:1})]),j,I,t(d,{id:"73",data:[{title:"apple",id:"apple"},{title:"banana",id:"banana"}],"tab-id":"fruit"},{tab0:a(({title:i,value:s,isActive:l})=>[E]),tab1:a(({title:i,value:s,isActive:l})=>[F]),_:1}),M,t(d,{id:"89",data:[{title:"apple"},{title:"banana"},{title:"orange"}],"tab-id":"fruit"},{tab0:a(({title:i,value:s,isActive:l})=>[S]),tab1:a(({title:i,value:s,isActive:l})=>[X]),tab2:a(({title:i,value:s,isActive:l})=>[Y]),_:1}),Z,t(d,{id:"110",data:[{title:"apple"},{title:"banana"},{title:"orange"}]},{tab0:a(({title:i,value:s,isActive:l})=>[$]),tab1:a(({title:i,value:s,isActive:l})=>[q]),tab2:a(({title:i,value:s,isActive:l})=>[y]),_:1}),z])}const L=v(b,[["render",G],["__file","tabs.html.vue"]]);export{L as default};
