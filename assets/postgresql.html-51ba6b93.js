import{_ as n,X as i,Y as l,$ as e,a0 as s,a1 as r,a3 as d,F as t}from"./framework-abbf9d44.js";const c={},o=e("h1",{id:"",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#","aria-hidden":"true"},"#")],-1),u=e("h2",{id:"部署",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#部署","aria-hidden":"true"},"#"),s(" 部署")],-1),v={href:"https://github.com/bitnami/charts/tree/main/bitnami/postgresql",target:"_blank",rel:"noopener noreferrer"},p=d(`<h3 id="拉取-charts" tabindex="-1"><a class="header-anchor" href="#拉取-charts" aria-hidden="true">#</a> 拉取 charts</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>helm pull  oci://registry-1.docker.io/bitnamicharts/postgresql <span class="token parameter variable">--version</span> <span class="token number">12.5</span>.2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解压" tabindex="-1"><a class="header-anchor" href="#解压" aria-hidden="true">#</a> 解压</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> postgresql-12.5.2.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><blockquote><p>更多配置参考 charts内的 values 或官方文档说明</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span>EOF <span class="token operator">&gt;</span> pgsql-values.yaml
global:
  imageRegistry: <span class="token string">&quot;&quot;</span>
  postgresql:
    auth:
      postgresPassword: <span class="token string">&quot;Password@0101&quot;</span>
      username: <span class="token string">&quot;gitlab&quot;</span>
      password: <span class="token string">&quot;Password@0101&quot;</span>
      database: <span class="token string">&quot;gitlab&quot;</span>
primary:
  persistence:
    accessModes:
      - ReadWriteOnce
    size: 8Gi
  readReplicas:
    resources:
      limits: <span class="token punctuation">{</span><span class="token punctuation">}</span>
      requests:
        memory: 256Mi
        cpu: 250m
readReplicas:
  name: <span class="token builtin class-name">read</span>
  replicaCount: <span class="token number">1</span>
  persistence:
    enabled: <span class="token boolean">true</span>
    accessModes:
      - ReadWriteOnce
    size: 8Gi
  readReplicas:
    resources:
      limits: <span class="token punctuation">{</span><span class="token punctuation">}</span>
      requests:
        memory: 256Mi
        cpu: 250m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>helm upgrade <span class="token parameter variable">--install</span> pgsql <span class="token builtin class-name">.</span> <span class="token parameter variable">-f</span> pgsql-values.yaml <span class="token parameter variable">-n</span> middleware --create-namespace
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9);function m(b,h){const a=t("ExternalLinkIcon");return i(),l("div",null,[o,u,e("p",null,[e("a",v,[s("github/bitnami"),r(a)])]),p])}const k=n(c,[["render",m],["__file","postgresql.html.vue"]]);export{k as default};
