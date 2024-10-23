import{_ as d,X as t,Y as c,$ as a,a0 as e,a1 as n,a2 as o,a3 as r,F as i}from"./framework-abbf9d44.js";const u={},p=a("h1",{id:"",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#","aria-hidden":"true"},"#")],-1),v={href:"https://github.com/goharbor/harbor-helm",target:"_blank",rel:"noopener noreferrer"},h=r(`<h2 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>helm repo <span class="token function">add</span> harbor https://helm.goharbor.io
helm repo update 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>helm pull harbor/harbor  <span class="token parameter variable">--version</span> <span class="token number">1.13</span>.1

<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> harbor-1.13.1.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="values修改" tabindex="-1"><a class="header-anchor" href="#values修改" aria-hidden="true">#</a> values修改</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> harbor-values.yaml</span>
expose:
  type: ingress
  tls:
    enabled: false
  ingress:
    hosts:
      core: harbor.zili.work
    annotations:
        ingressClassName: nginx
    harbor:
      annotations:
        ingressClassName: nginx
externalURL: http://harbor.zili.work
persistence:
  enabled: true
  persistentVolumeClaim:
    registry:
      accessMode: ReadWriteOnce
      size: 2Gi
    trivy:
      accessMode: ReadWriteOnce
      size: 2Gi
harborAdminPassword: &quot;Harbor12345&quot;
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>helm upgrade <span class="token parameter variable">--install</span> harbor <span class="token builtin class-name">.</span> <span class="token parameter variable">-f</span> harbor-values.yaml <span class="token parameter variable">-n</span> harbor --create-namespace
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="域名解析" tabindex="-1"><a class="header-anchor" href="#域名解析" aria-hidden="true">#</a> 域名解析</h3>`,9),b=a("h3",{id:"_404",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_404","aria-hidden":"true"},"#"),e(" 404")],-1),m={href:"https://github.com/goharbor/harbor-helm/issues/1189",target:"_blank",rel:"noopener noreferrer"},k=r(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl edit ingress/harbor-ingress <span class="token parameter variable">--namespace</span> harbor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">在 spec 下 追加一行  ingressClassName</span><span class="token punctuation">:</span> nginx。 如下
<span class="token punctuation">...</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
   <span class="token key atrule">ingressClassName</span><span class="token punctuation">:</span> nginx
   <span class="token key atrule">rules</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> harbor.zili.work
     <span class="token key atrule">http</span><span class="token punctuation">:</span>
       <span class="token key atrule">paths</span><span class="token punctuation">:</span>
       <span class="token punctuation">-</span> <span class="token key atrule">backend</span><span class="token punctuation">:</span>
       <span class="token punctuation">...</span>. 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function g(_,x){const s=i("ExternalLinkIcon"),l=i("RouterLink");return t(),c("div",null,[p,a("p",null,[a("a",v,[e("官方文档"),n(s)])]),h,a("p",null,[n(l,{to:"/ops/GitOps/deploy/cloud-native/add-domain-on-CoreDNS.html"},{default:o(()=>[e("CoreDNS 添加域名解析")]),_:1})]),b,a("p",null,[a("a",m,[e("404修复"),n(s)])]),k])}const y=d(u,[["render",g],["__file","harbor.html.vue"]]);export{y as default};
