import{_ as i,c as l,a as e,e as a,b as p,f as s,o as B,g as c}from"./app-BfCDUtKQ.js";const r={},t=p("p",null,"让你的 VuePress 站点中的 Markdown 文件支持 vue 交互演示。",-1),o=s(`<p>@tab JS</p><div class="language-js" data-ext="js" data-title="js"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// .vuepress/config.js</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> { </span><span style="color:#E06C75;--shiki-dark:#E06C75;">mdEnhance</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> } </span><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;vuepress-plugin-md-enhance&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> default</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  theme</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">hopeTheme</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    plugins</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      mdEnhance</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 启用 vue 交互演示</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        vuePlayground</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line highlighted"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }),</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">};</span></span></code></pre></div><p>:::</p><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span>用法</span></a></h2><p>要使用 Vue 交互演示，你应该使用一个名为 <code>vue-playground</code> 的容器。</p><p>在其中，你可以使用 3 个指令：</p><ul><li><code>@file 文件名</code> 紧跟文件的代码块</li><li><code>@import</code> 紧跟一个自定义“导入映射”的 json 块</li><li><code>@setting</code> 紧跟一个自定义设置的 json 块</li></ul><p>你可以查看以下案例以查看更多详细信息。</p><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h2>`,9),d=s(`<details class="hint-container details"><summary>Code</summary><div class="language-md line-numbers-mode" data-ext="md" data-title="md"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">::: vue-playground Vue 交互演示</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@file App.vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">\`\`\`vue</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">import { ref } from &quot;vue&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">const msg = ref(&quot;你好交互演示!&quot;);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;h1&gt;{{ msg }}&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;input v-model=&quot;msg&quot; /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:::</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),u=s(`<details class="hint-container details"><summary>Code</summary><div class="language-md line-numbers-mode" data-ext="md" data-title="md"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">::: vue-playground 自定义导入与映射的 Vue 交互演示</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@file App.vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">\`\`\`vue</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">import { ref } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">import Comp from &quot;./Comp.vue&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">const msg = ref(&quot;Hello Playground!&quot;);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;h1&gt;{{ msg }}&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;input v-model=&quot;msg&quot; /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;Comp /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@file Comp.vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">\`\`\`vue</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">import { useBattery } from &quot;@vueuse/core&quot;;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">import { ref } from &quot;vue&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">const { charging, level } = useBattery();</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;h1&gt;Battery status&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;p&gt;Charging: {{ charging }}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  &lt;p&gt;Level: {{ level * 100 }}%&lt;/p&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@import</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">\`\`\`json</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  &quot;imports&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    &quot;@vueuse/core&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;https://unpkg.com/@vueuse/core/index.mjs&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    &quot;@vueuse/shared&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;https://unpkg.com/@vueuse/shared/index.mjs&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    &quot;vue-demi&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;https://unpkg.com/vue-demi/lib/index.mjs&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@setting</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">\`\`\`json</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  &quot;showCompileOutput&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:::</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1);function k(v,m){const n=c("VuePlayground");return B(),l("div",null,[t,e(" more "),o,a(n,{title:"Vue%20%E4%BA%A4%E4%BA%92%E6%BC%94%E7%A4%BA",key:"e1a11e6a",settings:"%7B%7D",files:"eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcblxuY29uc3QgbXNnID0gcmVmKFwi5L2g5aW95Lqk5LqS5ryU56S6IVwiKTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU%2BXG4gIDxoMT57eyBtc2cgfX08L2gxPlxuICA8aW5wdXQgdi1tb2RlbD1cIm1zZ1wiIC8%2BXG48L3RlbXBsYXRlPlxuIn0%3D"}),d,a(n,{title:"%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AF%BC%E5%85%A5%E4%B8%8E%E6%98%A0%E5%B0%84%E7%9A%84%20Vue%20%E4%BA%A4%E4%BA%92%E6%BC%94%E7%A4%BA",key:"3fca809a",settings:"%7B%22showCompileOutput%22%3Atrue%7D",files:"eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcbmltcG9ydCBDb21wIGZyb20gXCIuL0NvbXAudnVlXCI7XG5cbmNvbnN0IG1zZyA9IHJlZihcIkhlbGxvIFBsYXlncm91bmQhXCIpO1xuPC9zY3JpcHQ%2BXG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPnt7IG1zZyB9fTwvaDE%2BXG4gIDxpbnB1dCB2LW1vZGVsPVwibXNnXCIgLz5cbiAgPENvbXAgLz5cbjwvdGVtcGxhdGU%2BXG4iLCJDb21wLnZ1ZSI6IjxzY3JpcHQgc2V0dXA%2BXG5pbXBvcnQgeyB1c2VCYXR0ZXJ5IH0gZnJvbSBcIkB2dWV1c2UvY29yZVwiO1xuaW1wb3J0IHsgcmVmIH0gZnJvbSBcInZ1ZVwiO1xuXG5jb25zdCB7IGNoYXJnaW5nLCBsZXZlbCB9ID0gdXNlQmF0dGVyeSgpO1xuPC9zY3JpcHQ%2BXG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPkJhdHRlcnkgc3RhdHVzPC9oMT5cbiAgPHA%2BQ2hhcmdpbmc6IHt7IGNoYXJnaW5nIH19PC9wPlxuICA8cD5MZXZlbDoge3sgbGV2ZWwgKiAxMDAgfX0lPC9wPlxuPC90ZW1wbGF0ZT5cbiIsImltcG9ydC1tYXAuanNvbiI6IntcbiAgXCJpbXBvcnRzXCI6IHtcbiAgICBcIkB2dWV1c2UvY29yZVwiOiBcImh0dHBzOi8vdW5wa2cuY29tL0B2dWV1c2UvY29yZS9pbmRleC5tanNcIixcbiAgICBcIkB2dWV1c2Uvc2hhcmVkXCI6IFwiaHR0cHM6Ly91bnBrZy5jb20vQHZ1ZXVzZS9zaGFyZWQvaW5kZXgubWpzXCIsXG4gICAgXCJ2dWUtZGVtaVwiOiBcImh0dHBzOi8vdW5wa2cuY29tL3Z1ZS1kZW1pL2xpYi9pbmRleC5tanNcIlxuICB9XG59XG4ifQ%3D%3D"}),u])}const h=i(r,[["render",k],["__file","vue-playground.html.vue"]]),b=JSON.parse(`{"path":"/guide/markdown/enhance/vue-playground.html","title":"Vue 交互演示","lang":"zh-CN","frontmatter":{"title":"Vue 交互演示","icon":null,"article":false,"index":true,"description":"让你的 VuePress 站点中的 Markdown 文件支持 vue 交互演示。","head":[["meta",{"property":"og:url","content":"https://docs.lizili.online/guide/markdown/enhance/vue-playground.html"}],["meta",{"property":"og:site_name","content":"lzz's Blog"}],["meta",{"property":"og:title","content":"Vue 交互演示"}],["meta",{"property":"og:description","content":"让你的 VuePress 站点中的 Markdown 文件支持 vue 交互演示。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-12T03:42:17.000Z"}],["meta",{"property":"article:author","content":"z"}],["meta",{"property":"article:modified_time","content":"2024-03-12T03:42:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Vue 交互演示\\",\\"description\\":\\"让你的 VuePress 站点中的 Markdown 文件支持 vue 交互演示。\\"}"]]},"headers":[{"level":2,"title":"用法","slug":"用法","link":"#用法","children":[]},{"level":2,"title":"案例","slug":"案例","link":"#案例","children":[]}],"git":{"createdTime":1680403823000,"updatedTime":1710214937000,"contributors":[{"name":"lizili","email":"cn.zili.lee@outlook.com","commits":2}]},"readingTime":{"minutes":1.43,"words":429},"filePathRelative":"guide/markdown/enhance/vue-playground.md","localizedDate":"2023年4月2日","excerpt":"<p>让你的 VuePress 站点中的 Markdown 文件支持 vue 交互演示。</p>\\n","autoDesc":true}`);export{h as comp,b as data};
