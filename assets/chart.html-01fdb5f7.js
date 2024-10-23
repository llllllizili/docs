import{_ as c,X as l,Y as u,$ as p,a0 as t,a1 as n,Z as i,a3 as s,F as e}from"./framework-abbf9d44.js";const r={},d=p("p",null,"让你 VuePress 站点中的 Markdown 文件支持图表。",-1),k={href:"https://www.chartjs.org/docs/latest/",target:"_blank",rel:"noopener noreferrer"},v=s(`<h2 id="格式" tabindex="-1"><a class="header-anchor" href="#格式" aria-hidden="true">#</a> 格式</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart 标题

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json"><span class="token punctuation">{</span>
  <span class="token comment">// 此处为图表配置</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们也支持 <code>js</code> 和 <code>javascript</code> 的代码块，你应当将导出对象赋值给 <code>module.exports</code>。</p><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><h3 id="块状图" tabindex="-1"><a class="header-anchor" href="#块状图" aria-hidden="true">#</a> 块状图</h3>`,5),b=s(`<details class="hint-container details"><summary>对应代码</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart 一个块状图案例

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json"><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;labels&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;红色&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;蓝色&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;黄色&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;绿色&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;紫色&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;橙色&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;datasets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;投票数&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;rgba(255, 99, 132, 0.2)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(54, 162, 235, 0.2)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(255, 206, 86, 0.2)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(75, 192, 192, 0.2)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(153, 102, 255, 0.2)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(255, 159, 64, 0.2)&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;borderColor&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;rgba(255, 99, 132, 1)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(54, 162, 235, 1)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(255, 206, 86, 1)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(75, 192, 192, 1)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(153, 102, 255, 1)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgba(255, 159, 64, 1)&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;borderWidth&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;scales&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;beginAtZero&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="气泡图" tabindex="-1"><a class="header-anchor" href="#气泡图" aria-hidden="true">#</a> 气泡图</h3>`,2),m=s(`<details class="hint-container details"><summary>对应代码</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart 一个气泡图案例

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json"><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bubble&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;datasets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;第一个数据集&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token property">&quot;r&quot;</span><span class="token operator">:</span> <span class="token number">15</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token property">&quot;r&quot;</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rgb(255, 99, 132)&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="线状图" tabindex="-1"><a class="header-anchor" href="#线状图" aria-hidden="true">#</a> 线状图</h3>`,2),q=s(`<details class="hint-container details"><summary>代码</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart 一个线状图案例

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json"><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;line&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;labels&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;一月&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;二月&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;三月&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;四月&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;五月&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;六月&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;七月&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;datasets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;我的第一个数据集&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">65</span><span class="token punctuation">,</span> <span class="token number">59</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">81</span><span class="token punctuation">,</span> <span class="token number">56</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;fill&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;borderColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rgb(75, 192, 192)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;tension&quot;</span><span class="token operator">:</span> <span class="token number">0.1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="玫瑰图" tabindex="-1"><a class="header-anchor" href="#玫瑰图" aria-hidden="true">#</a> 玫瑰图</h3>`,2),g=s(`<details class="hint-container details"><summary>代码</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart 一个玫瑰图案例

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json"><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;polarArea&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;labels&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;红色&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;绿色&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;黄色&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;灰色&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;蓝色&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;datasets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;我的第一个数据集&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;rgb(255, 99, 132)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgb(75, 192, 192)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgb(255, 205, 86)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgb(201, 203, 207)&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rgb(54, 162, 235)&quot;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="雷达图" tabindex="-1"><a class="header-anchor" href="#雷达图" aria-hidden="true">#</a> 雷达图</h3>`,2),y=s(`<details class="hint-container details"><summary>代码</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart 一个雷达图案例

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json"><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;radar&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;labels&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;吃饭&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;喝水&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;睡觉&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;设计&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;编程&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;骑车&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;跑步&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;datasets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;我的第一个数据集&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">65</span><span class="token punctuation">,</span> <span class="token number">59</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">81</span><span class="token punctuation">,</span> <span class="token number">56</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;fill&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255, 99, 132, 0.2)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;borderColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rgb(255, 99, 132)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pointBackgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rgb(255, 99, 132)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pointBorderColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pointHoverBackgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pointHoverBorderColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rgb(255, 99, 132)&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;我的第二个数据集&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">28</span><span class="token punctuation">,</span> <span class="token number">48</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">96</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;fill&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rgba(54, 162, 235, 0.2)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;borderColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rgb(54, 162, 235)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pointBackgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rgb(54, 162, 235)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pointBorderColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pointHoverBackgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pointHoverBorderColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rgb(54, 162, 235)&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;elements&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;line&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;borderWidth&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="散点图" tabindex="-1"><a class="header-anchor" href="#散点图" aria-hidden="true">#</a> 散点图</h3>`,2),h=s(`<details class="hint-container details"><summary>代码</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart 一个散点图案例

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json"><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scatter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;datasets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;散点数据集&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">-10</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">5.5</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rgb(255, 99, 132)&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;scales&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;linear&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bottom&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h2>`,2),E={href:"https://www.chartjs.org/docs/latest/",target:"_blank",rel:"noopener noreferrer"};function B(f,A){const o=e("ExternalLinkIcon"),a=e("ChartJS");return l(),u("div",null,[d,p("p",null,[t("此插件使用 "),p("a",k,[t("chart.js"),n(o)]),t(" 提供相应功能。")]),i(" more "),v,n(a,{id:"chart-20",config:"eJyNUrtOwzAU3fsVlieQLBQnJBA2xEcgUXVwGitERHHluEOFsrHAijowsCAhgVgQYqIDf5OUv+DactsEJaVDnPs4Puce614PEMJqNuH4BOGISUx0IWaKQUE3IctYxLMC8iGuv56Wtx+YILy8f7TRz+LGRvXiexV9vtmoen3Q0UjzWuaCK8NmKsiqbJT0JNXdvH5+qebvZh7btVMNqUsQDQnyCPIJgsSz7AYVsfFVIsU0j89EJmRDyLRlErE914eLIVBQD647B+5+Q2cF8g+hH0Df9QDdAzJMrhMQdAxfD+gIMDQ0U/fLUR/8UEfrac5tetSH0QMYz4DWmNYrCBlzuesL0P/9d0La7jshbe+dkD/O+5XWvgGyxfV5GqtLcE1tozT/EZyl2W4xUanI9QraBS/GLOObHCqzRqJ5eZLmp+qCSwENJae8Ra3PclAOfgFjv8GB",title:"%E4%B8%80%E4%B8%AA%E5%9D%97%E7%8A%B6%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"}),b,n(a,{id:"chart-29",config:"eJyr5lJQUCqpLEhVslJQSipNSspJVdIBiaUkliQCxUDyUF5xakkxUCQaLKIAlQHL5iQmpeaADHi+Zs2THQ1Pdqx6NnXDs951L2e3gQ2DKoMaCTMAbIiCUgVQyMhAR0GpEsgwBjGKgAxDU4VahFa4QhOYQkO4QgOFWri6WCTbkhKTs9OL8kvzUpzzc/JBSpWK0pM0jExNdRQsLXUUDI2NNJWgyiEmxALJWq5aLgCVmkPj",title:"%E4%B8%80%E4%B8%AA%E6%B0%94%E6%B3%A1%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"}),m,n(a,{id:"chart-38",config:"eJyr5lJQUCqpLEhVslJQysnMS1XSAYmkJJYkAkVAskBeTmJSak4xkB+t9GRHw7M5HUo6CkpPdvXAWDs6oayns2fDZafAxFrXwtU1g1ixIBugdhSnloDNBYsoQO1D2Aly1LOOic9ntTxfswZo9ZMdq55N3fCsd93L2W1gh0IVQ50bbWaqo2BqqaNgYQDEhkC2GRADxUwMoJaCVadl5oBMTkvMKU5FEk7KL0pJLXLOz8kvAtlblJ6kYQ7Ua2hpBCY0kS0sSc0rzszPA6oz0DOECteC6VggWctVywUAjFhqNw==",title:"%E4%B8%80%E4%B8%AA%E7%BA%BF%E7%8A%B6%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"}),q,n(a,{id:"chart-47",config:"eJyr5lJQUCqpLEhVslJQKsjPSSxyLEpNVNIBCackliQChUFKgLycxKTUnGIgP1rp+a5FLzo3KekoKD3fvR/Kerm7BSbWuAHKejF5LogVCzINal5xagnYDLCIAtRshPkgVzzrmPh8VsvzNWue7Gh4smPVs6kbnvWuezm7DewoqGKo06INDXUUDM10FMx1FIyBLBOoVWA1SYnJ2elF+aV5Kc75OflFSLaCpYvSkzSMTE11FCwtgTqNjTSRzIdKmwNlDS2NwAQWabBuIwMgYWGGTdoA6DgjA6C7jAzMscibmoDcDjTdyNhUUwkuGwtl1YJpEK+Wq5YLALKFcXk=",title:"%E4%B8%80%E4%B8%AA%E7%8E%AB%E7%91%B0%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"}),g,n(a,{id:"chart-56",config:"eJy9k81Kw0AQx+99imW9KARJ0w9bj3rxDTyUHhKzqcGYLdtUECkIiigq2IM9KD30UJXSlh4Ei6hP0ybpWzi7pphgaQpCD7s7Ozsz/2F/zEkCIewclwneRJipusqwxF266qjg4s9ws1SNWBW4F/D47mzS7mEJ4XGj6Q5eueU1W/7zFbf8/pffbwnfR8N7uebWpFP3P5/E61vd7bVxkSsEGhXiiLrCgwK9X03elXtZ9x7OvW53NDwdDTvu/cC97U8eL0SjQXDQbiGbkVAmL6G8LKFcEuwsLPCl5UBURBumxSs7rEpCXk3dOygxWrX1bWpRJj6kpKmrCi+Qh6LJlCIheV1ZCytrlOmEhTMiCZHYMjVtZ2umTFxSVGXFMIw/MTv0iLAZ1ecEx/UeJNWm2fPxvN/E4VFygIIvwJPkmACPsgG2/A8+mTQUyAIaJQW9L8AnnLAwn5ikZfGJtjHlI84i7IIUpmXHpDafq2B+iUUOiS0mbYoQW6bNhz6E9Oerdk3d2YeHVKQ432uJWuIbidwvfg==",title:"%E4%B8%80%E4%B8%AA%E9%9B%B7%E8%BE%BE%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"}),y,n(a,{id:"chart-65",config:"eJxtULsOgjAU3fmKppMmaETDoKufYRgKNIRYKYGaSAyLg5sjk6O7cfWHMP6F95byMGFp2vO6t+dsEUJVkXK6ITQPmFI8ozaCIVMMQBSYV85VDshOI8QwmhXM5wIT6urxubzr6lXfnt/7VScZjclr3TqB0BNAM2dhE1rAbUHK3tHxLeuM053bHXfP3Zafg6ITeIPdfBbso0wek3ArhczwJ1nkT5YuWNdrmzir5ZQaeZPgwamnUZmqWCZYjKkKWhS8fwOCawzaausWccJZ07ZhUpnHmIasL5WSh/+peJZWaf0ALadm1Q==",title:"%E4%B8%80%E4%B8%AA%E6%95%A3%E7%82%B9%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"}),h,p("p",null,[t("相关详情，详见 "),p("a",E,[t("Chart.js 文档"),n(o)]),t(".")])])}const x=c(r,[["render",B],["__file","chart.html.vue"]]);export{x as default};
