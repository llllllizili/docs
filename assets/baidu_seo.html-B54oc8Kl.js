import{_ as e,c as t,o as i,f as n}from"./app-BfCDUtKQ.js";const a="/assets/add_site-Cc3KgFZT.png",o="/assets/file_validation-B30utMLh.png",s="/assets/label_validation-BDnIZSN3.png",r={},l=n('<div class="hint-container info"><p class="hint-container-title">相关信息</p><p>由于本博客部署在 GitHub Pages 上，而 Github 禁止了百度爬取。故将博客添加到百度收录 SEO 中，增强网站的访问</p></div><h2 id="查看网站是否收录" tabindex="-1"><a class="header-anchor" href="#查看网站是否收录"><span>查看网站是否收录</span></a></h2><p>在百度中输入 <code>site:&lt;域名&gt;</code> 查看网站是否收录。</p><p>例如：<code>site:sankgao.github.io</code></p><h2 id="添加网站" tabindex="-1"><a class="header-anchor" href="#添加网站"><span>添加网站</span></a></h2><ol><li><p>登陆 <a href="https://ziyuan.baidu.com/" target="_blank" rel="noopener noreferrer">百度资源搜索平台</a></p></li><li><p>点击 <strong>用户中心 -&gt; 站点管理</strong> 添加网站</p><figure><img src="'+a+'" alt="添加网站" tabindex="0" loading="lazy"><figcaption>添加网站</figcaption></figure></li><li><p>选择站点属性</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>站点验证成功后，站点领域信息 30 天内只能修改一次，请谨慎设置！</p></div></li><li><p>验证网站</p><p>验证网站有两种方式，选择一个验证方式，根据提示完成验证。</p><ul><li><p><strong>文件验证</strong></p><figure><img src="'+o+'" alt="文件验证" tabindex="0" loading="lazy"><figcaption>文件验证</figcaption></figure></li><li><p><strong>HTML 标签验证</strong></p><figure><img src="'+s+`" alt="HTML 标签验证" tabindex="0" loading="lazy"><figcaption>HTML 标签验证</figcaption></figure></li></ul></li></ol><h2 id="博客中添加验证代码" tabindex="-1"><a class="header-anchor" href="#博客中添加验证代码"><span>博客中添加验证代码</span></a></h2><p>本人选择的是 HTML 标签验证，在博客中添加上述代码。</p><p><a href="https://theme-hope.vuejs.press/zh/guide/advanced/seo.html#%E7%9B%B4%E6%8E%A5%E6%B7%BB%E5%8A%A0-head-%E6%A0%87%E7%AD%BE" target="_blank" rel="noopener noreferrer">博客主题</a> 提供了在页面的 <code>frontmatter</code> 中配置 <code>head</code> 选项，自主添加特定标签到页面 <code>&lt;head&gt;</code>，会自动注入 <code>&lt;meta name=&quot;keywords&quot; content=&quot;SEO plugin&quot; /&gt;</code>。</p><p>所以将下面代码添加到网站根目录下的 <code>README</code> 文件中（docs/README.md）：</p><div class="language-md" data-ext="md" data-title="md"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">head:</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">  -</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> -</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> meta</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    -</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> name: baidu-site-verification</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      content: codeva-jJHuz4vkzL</span></span></code></pre></div>`,11),p=[l];function c(d,g){return i(),t("div",null,p)}const u=e(r,[["render",c],["__file","baidu_seo.html.vue"]]),m=JSON.parse(`{"path":"/guide/vuepress/baidu_seo.html","title":"百度收录 GitHub Pages 博客","lang":"zh-CN","frontmatter":{"title":"百度收录 GitHub Pages 博客","icon":"seo","category":"VuePress","order":99,"tag":["Blog"],"description":"相关信息 由于本博客部署在 GitHub Pages 上，而 Github 禁止了百度爬取。故将博客添加到百度收录 SEO 中，增强网站的访问 查看网站是否收录 在百度中输入 site:<域名> 查看网站是否收录。 例如：site:sankgao.github.io 添加网站 登陆 百度资源搜索平台 点击 用户中心 -> 站点管理 添加网站 添加网站添...","head":[["meta",{"property":"og:url","content":"https://docs.lizili.online/guide/vuepress/baidu_seo.html"}],["meta",{"property":"og:site_name","content":"lzz's Blog"}],["meta",{"property":"og:title","content":"百度收录 GitHub Pages 博客"}],["meta",{"property":"og:description","content":"相关信息 由于本博客部署在 GitHub Pages 上，而 Github 禁止了百度爬取。故将博客添加到百度收录 SEO 中，增强网站的访问 查看网站是否收录 在百度中输入 site:<域名> 查看网站是否收录。 例如：site:sankgao.github.io 添加网站 登陆 百度资源搜索平台 点击 用户中心 -> 站点管理 添加网站 添加网站添..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-06T14:45:22.000Z"}],["meta",{"property":"article:author","content":"z"}],["meta",{"property":"article:tag","content":"Blog"}],["meta",{"property":"article:modified_time","content":"2024-10-06T14:45:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"百度收录 GitHub Pages 博客\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-06T14:45:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"z\\",\\"url\\":\\"https://docs.lizili.online\\"}]}"]]},"headers":[{"level":2,"title":"查看网站是否收录","slug":"查看网站是否收录","link":"#查看网站是否收录","children":[]},{"level":2,"title":"添加网站","slug":"添加网站","link":"#添加网站","children":[]},{"level":2,"title":"博客中添加验证代码","slug":"博客中添加验证代码","link":"#博客中添加验证代码","children":[]}],"git":{"createdTime":1728225922000,"updatedTime":1728225922000,"contributors":[{"name":"lizili","email":"cn.zili.lee@outlook.com","commits":1}]},"readingTime":{"minutes":1.12,"words":335},"filePathRelative":"guide/vuepress/baidu_seo.md","localizedDate":"2024年10月6日","excerpt":"<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">相关信息</p>\\n<p>由于本博客部署在 GitHub Pages 上，而 Github 禁止了百度爬取。故将博客添加到百度收录 SEO 中，增强网站的访问</p>\\n</div>\\n<h2>查看网站是否收录</h2>\\n<p>在百度中输入 <code>site:&lt;域名&gt;</code> 查看网站是否收录。</p>\\n<p>例如：<code>site:sankgao.github.io</code></p>\\n<h2>添加网站</h2>\\n<ol>\\n<li>\\n<p>登陆 <a href=\\"https://ziyuan.baidu.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">百度资源搜索平台</a></p>\\n</li>\\n<li>\\n<p>点击 <strong>用户中心 -&gt; 站点管理</strong> 添加网站</p>\\n<figure><figcaption>添加网站</figcaption></figure>\\n</li>\\n<li>\\n<p>选择站点属性</p>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>站点验证成功后，站点领域信息 30 天内只能修改一次，请谨慎设置！</p>\\n</div>\\n</li>\\n<li>\\n<p>验证网站</p>\\n<p>验证网站有两种方式，选择一个验证方式，根据提示完成验证。</p>\\n<ul>\\n<li>\\n<p><strong>文件验证</strong></p>\\n<figure><figcaption>文件验证</figcaption></figure>\\n</li>\\n<li>\\n<p><strong>HTML 标签验证</strong></p>\\n<figure><figcaption>HTML 标签验证</figcaption></figure>\\n</li>\\n</ul>\\n</li>\\n</ol>","autoDesc":true}`);export{u as comp,m as data};
