import{_ as n,X as i,Y as r,a0 as e,a1 as a,a2 as d,$ as l,F as c}from"./framework-7663974c.js";const t={},o=e("h1",{id:"",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#","aria-hidden":"true"},"#")],-1),v=e("h2",{id:"部署",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#部署","aria-hidden":"true"},"#"),a(" 部署")],-1),u={href:"https://github.com/bitnami/charts/tree/main/bitnami/redis",target:"_blank",rel:"noopener noreferrer"},b=l(`<h3 id="拉取-charts" tabindex="-1"><a class="header-anchor" href="#拉取-charts" aria-hidden="true">#</a> 拉取 charts</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>helm pull  oci://registry-1.docker.io/bitnamicharts/redis <span class="token parameter variable">--version</span> <span class="token number">16.13</span>.2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解压" tabindex="-1"><a class="header-anchor" href="#解压" aria-hidden="true">#</a> 解压</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> redis-16.13.2.tgz 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><blockquote><p>更多配置参考 charts内的 values 或官方文档说明</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> redis-values.yaml</span>
global:
  redis:
    password: Password@0101
master:
  count: 1
  persistence:
    enabled: true
    accessModes:
      - ReadWriteOnce
    size: 8Gi
  resources:
    limits: {}
    requests: {}
replica:
  replicaCount: 1
  persistence:
    enabled: true
    accessModes:
      - ReadWriteOnce
    size: 8Gi
  resources:
    limits: {}
    requests: {}
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>helm upgrade <span class="token parameter variable">--install</span> redis <span class="token builtin class-name">.</span> <span class="token parameter variable">-f</span> redis-values.yaml <span class="token parameter variable">-n</span> middleware --create-namespace
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9);function m(h,p){const s=c("ExternalLinkIcon");return i(),r("div",null,[o,v,e("p",null,[e("a",u,[a("github/bitnami"),d(s)])]),b])}const _=n(t,[["render",m],["__file","redis.html.vue"]]);export{_ as default};
