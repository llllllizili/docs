import{_ as n,X as s,Y as a,Z as e,a0 as i,$ as l}from"./framework-7663974c.js";const c={},d=i("p",null,"主题可以为你添加提示、注释、信息、注意、警告和详情自定义容器的支持。",-1),t=l(`<h2 id="演示" tabindex="-1"><a class="header-anchor" href="#演示" aria-hidden="true">#</a> 演示</h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>信息容器。</p></div><div class="hint-container note"><p class="hint-container-title">注</p><p>注释容器。</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>提示容器</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>警告容器</p></div><div class="hint-container danger"><p class="hint-container-title">警告</p><p>危险容器</p></div><details class="hint-container details"><summary>详情</summary><p>详情容器</p></details><div class="hint-container info"><p class="hint-container-title">自定义标题</p><p>一个有 <code>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的信息容器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container note"><p class="hint-container-title">自定义标题</p><p>一个有 <code>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的注释容器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">自定义标题</p><p>一个有 <code>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的提示容器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container warning"><p class="hint-container-title">自定义标题</p><p>一个有 <code>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的警告容器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container danger"><p class="hint-container-title">自定义标题</p><p>一个有 <code>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的危险容器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><details class="hint-container details"><summary>自定义标题</summary><p>一个有 <code>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的详情容器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><div class="hint-container info"><p class="hint-container-title">自定义信息</p></div><div class="hint-container note"><p class="hint-container-title">自定义注释</p></div><div class="hint-container tip"><p class="hint-container-title">自定义提示</p></div><div class="hint-container warning"><p class="hint-container-title">自定义警告</p></div><div class="hint-container danger"><p class="hint-container-title">自定义危险</p></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: info
信息容器。
:::

::: note
注释容器。
:::

::: tip
提示容器
:::

::: warning
警告容器
:::

::: danger
危险容器
:::

::: details
详情容器
:::

::: info 自定义标题

一个有 <span class="token code-snippet code keyword">\`代码\`</span> 和 <span class="token url">[<span class="token content">链接</span>](<span class="token url">#演示</span>)</span> 的信息容器。

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: note 自定义标题

一个有 <span class="token code-snippet code keyword">\`代码\`</span> 和 <span class="token url">[<span class="token content">链接</span>](<span class="token url">#演示</span>)</span> 的注释容器。

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: tip 自定义标题

一个有 <span class="token code-snippet code keyword">\`代码\`</span> 和 <span class="token url">[<span class="token content">链接</span>](<span class="token url">#演示</span>)</span> 的提示容器。

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: warning 自定义标题

一个有 <span class="token code-snippet code keyword">\`代码\`</span> 和 <span class="token url">[<span class="token content">链接</span>](<span class="token url">#演示</span>)</span> 的警告容器。

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: danger 自定义标题

一个有 <span class="token code-snippet code keyword">\`代码\`</span> 和 <span class="token url">[<span class="token content">链接</span>](<span class="token url">#演示</span>)</span> 的危险容器。

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: details 自定义标题

一个有 <span class="token code-snippet code keyword">\`代码\`</span> 和 <span class="token url">[<span class="token content">链接</span>](<span class="token url">#演示</span>)</span> 的详情容器。

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: info 自定义信息
:::

::: note 自定义注释
:::

::: tip 自定义提示
:::

::: warning 自定义警告
:::

::: danger 自定义危险
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function p(o,r){return s(),a("div",null,[d,e(" more "),t])}const u=n(c,[["render",p],["__file","container.html.vue"]]);export{u as default};
