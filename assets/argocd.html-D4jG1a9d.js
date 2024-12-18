import{_ as a,c as s,o as e,f as n}from"./app-BfCDUtKQ.js";const r={},o=n(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><h2 id="官方文档" tabindex="-1"><a class="header-anchor" href="#官方文档"><span><a href="https://argo-cd.readthedocs.io/en/stable/getting_started/" target="_blank" rel="noopener noreferrer">官方文档</a></span></a></h2><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p>拉取charts</p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">helm</span><span style="color:#98C379;--shiki-dark:#98C379;"> pull</span><span style="color:#98C379;--shiki-dark:#98C379;"> oci://registry-1.docker.io/bitnamicharts/grafana</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --version</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 9.6.5</span></span></code></pre></div><p>grafana配置</p><div class="language-yaml" data-ext="yaml" data-title="yaml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">admin</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  user</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;admin&quot;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  password</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;admin&quot;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  existingSecret</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  existingSecretPasswordKey</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">password</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">ingress</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  enabled</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  pathType</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">ImplementationSpecific</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  apiVersion</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  hostname</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">grafana.zili.work</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  path</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">/</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  annotations</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    kubernetes.io/ingress.class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">nginx</span></span></code></pre></div><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">helm</span><span style="color:#98C379;--shiki-dark:#98C379;"> upgrade</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --install</span><span style="color:#98C379;--shiki-dark:#98C379;"> grafana</span><span style="color:#98C379;--shiki-dark:#98C379;"> .</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -f</span><span style="color:#98C379;--shiki-dark:#98C379;"> grafana-values.yaml</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -n</span><span style="color:#98C379;--shiki-dark:#98C379;"> middleware</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --create-namespace</span></span></code></pre></div>`,8),i=[o];function l(t,p){return e(),s("div",null,i)}const d=a(r,[["render",l],["__file","argocd.html.vue"]]),k=JSON.parse(`{"path":"/ops/GitOps/deploy/tool/argocd.html","title":"argocd","lang":"zh-CN","frontmatter":{"article":true,"title":"argocd","order":11,"category":["云原生","gitops"],"tag":["argocd","cicd"],"index":true,"description":"官方文档 安装 拉取charts grafana配置","head":[["meta",{"property":"og:url","content":"https://docs.lizili.online/ops/GitOps/deploy/tool/argocd.html"}],["meta",{"property":"og:site_name","content":"lzz's Blog"}],["meta",{"property":"og:title","content":"argocd"}],["meta",{"property":"og:description","content":"官方文档 安装 拉取charts grafana配置"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-12T03:42:17.000Z"}],["meta",{"property":"article:author","content":"z"}],["meta",{"property":"article:tag","content":"argocd"}],["meta",{"property":"article:tag","content":"cicd"}],["meta",{"property":"article:modified_time","content":"2024-03-12T03:42:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"argocd\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-12T03:42:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"z\\",\\"url\\":\\"https://docs.lizili.online\\"}]}"]]},"headers":[{"level":2,"title":"官方文档","slug":"官方文档","link":"#官方文档","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]}],"git":{"createdTime":1703146872000,"updatedTime":1710214937000,"contributors":[{"name":"lizili","email":"cn.zili.lee@outlook.com","commits":1}]},"readingTime":{"minutes":0.25,"words":74},"filePathRelative":"ops/GitOps/deploy/tool/argocd.md","localizedDate":"2023年12月21日","excerpt":"\\n<h2><a class=\\"header-anchor\\" href=\\"#官方文档\\"><span></span></a><a href=\\"https://argo-cd.readthedocs.io/en/stable/getting_started/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方文档</a></h2>\\n<h2>安装</h2>\\n<p>拉取charts</p>\\n<div class=\\"language-shell\\" data-ext=\\"shell\\" data-title=\\"shell\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">helm</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> pull</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> oci://registry-1.docker.io/bitnamicharts/grafana</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> --version</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> 9.6.5</span></span></code></pre>\\n</div>","autoDesc":true}`);export{d as comp,k as data};