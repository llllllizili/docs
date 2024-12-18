import{_ as s,c as a,o as n,f as i}from"./app-BfCDUtKQ.js";const e={},l=i(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署"><span>部署</span></a></h2><p><a href="https://github.com/bitnami/charts/tree/main/bitnami/minio" target="_blank" rel="noopener noreferrer">github/bitnami</a></p><h3 id="拉取-charts" tabindex="-1"><a class="header-anchor" href="#拉取-charts"><span>拉取 charts</span></a></h3><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">helm</span><span style="color:#98C379;--shiki-dark:#98C379;"> pull</span><span style="color:#98C379;--shiki-dark:#98C379;">  oci://registry-1.docker.io/bitnamicharts/minio</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --version</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 12.10.4</span></span></code></pre></div><h3 id="解压" tabindex="-1"><a class="header-anchor" href="#解压"><span>解压</span></a></h3><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">tar</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -zxvf</span><span style="color:#98C379;--shiki-dark:#98C379;"> minio-12.10.4.tgz</span></span></code></pre></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h3><blockquote><p>更多配置参考 charts内的 values 或官方文档说明</p></blockquote><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">cat</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &lt;&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">EOF</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">minio-values.yaml</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">global:</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  imageRegistry: &quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">mode: standalone</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">auth:</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  rootUser: admin</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  rootPassword: &quot;Password@0101&quot;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">service:</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  type: ClusterIP</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  ports:</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    api: 9000</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    console: 9001</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">ingress:</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  enabled: true</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  hostname: minio.zili.work</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  path: /</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  pathType: ImplementationSpecific</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  servicePort: minio-console</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  annotations:</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    kubernetes.io/ingress.class: nginx</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    nginx.ingress.kubernetes.io/proxy-body-size: &quot;0&quot;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">apiIngress:</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  enabled: true</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  hostname: minio-api.zili.work</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  path: /</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  pathType: ImplementationSpecific</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  servicePort: minio-api</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  annotations:</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    kubernetes.io/ingress.class: nginx</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    nginx.ingress.kubernetes.io/proxy-body-size: &quot;0&quot;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    nginx.ingress.kubernetes.io/enable-cors: &quot;true&quot;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">persistence:</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  enabled: true</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  accessModes:</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">    - ReadWriteOnce</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">  size: 10Gi</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">helm</span><span style="color:#98C379;--shiki-dark:#98C379;"> upgrade</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --install</span><span style="color:#98C379;--shiki-dark:#98C379;"> minio</span><span style="color:#98C379;--shiki-dark:#98C379;"> .</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -f</span><span style="color:#98C379;--shiki-dark:#98C379;"> minio-values.yaml</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -n</span><span style="color:#98C379;--shiki-dark:#98C379;"> middleware</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --create-namespace</span></span></code></pre></div>`,12),r=[l];function o(t,p){return n(),a("div",null,r)}const d=s(e,[["render",o],["__file","minio.html.vue"]]),h=JSON.parse(`{"path":"/cloud-native/middleware/minio.html","title":"minio","lang":"zh-CN","frontmatter":{"article":true,"title":"minio","order":1,"category":["云原生"],"tag":["minio"],"description":"部署 github/bitnami 拉取 charts 解压 配置 更多配置参考 charts内的 values 或官方文档说明 安装","head":[["meta",{"property":"og:url","content":"https://docs.lizili.online/cloud-native/middleware/minio.html"}],["meta",{"property":"og:site_name","content":"lzz's Blog"}],["meta",{"property":"og:title","content":"minio"}],["meta",{"property":"og:description","content":"部署 github/bitnami 拉取 charts 解压 配置 更多配置参考 charts内的 values 或官方文档说明 安装"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-07T07:00:31.000Z"}],["meta",{"property":"article:author","content":"z"}],["meta",{"property":"article:tag","content":"minio"}],["meta",{"property":"article:modified_time","content":"2023-12-07T07:00:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"minio\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-07T07:00:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"z\\",\\"url\\":\\"https://docs.lizili.online\\"}]}"]]},"headers":[{"level":2,"title":"部署","slug":"部署","link":"#部署","children":[{"level":3,"title":"拉取 charts","slug":"拉取-charts","link":"#拉取-charts","children":[]},{"level":3,"title":"解压","slug":"解压","link":"#解压","children":[]},{"level":3,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]}]}],"git":{"createdTime":1701932431000,"updatedTime":1701932431000,"contributors":[{"name":"lizili","email":"cn.zili.lee@outlook.com","commits":1}]},"readingTime":{"minutes":0.47,"words":141},"filePathRelative":"cloud-native/middleware/minio.md","localizedDate":"2023年12月7日","excerpt":"\\n<h2>部署</h2>\\n<p><a href=\\"https://github.com/bitnami/charts/tree/main/bitnami/minio\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">github/bitnami</a></p>\\n<h3>拉取 charts</h3>\\n<div class=\\"language-shell\\" data-ext=\\"shell\\" data-title=\\"shell\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">helm</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> pull</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">  oci://registry-1.docker.io/bitnamicharts/minio</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> --version</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> 12.10.4</span></span></code></pre>\\n</div>","autoDesc":true}`);export{d as comp,h as data};