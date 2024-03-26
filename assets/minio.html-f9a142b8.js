import{_ as i,X as s,Y as r,a0 as e,a1 as n,a2 as l,$ as d,F as t}from"./framework-7663974c.js";const c={},o=e("h1",{id:"",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#","aria-hidden":"true"},"#")],-1),v=e("h2",{id:"部署",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#部署","aria-hidden":"true"},"#"),n(" 部署")],-1),u={href:"https://github.com/bitnami/charts/tree/main/bitnami/minio",target:"_blank",rel:"noopener noreferrer"},m=d(`<h3 id="拉取-charts" tabindex="-1"><a class="header-anchor" href="#拉取-charts" aria-hidden="true">#</a> 拉取 charts</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>helm pull  oci://registry-1.docker.io/bitnamicharts/minio <span class="token parameter variable">--version</span> <span class="token number">12.10</span>.4

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解压" tabindex="-1"><a class="header-anchor" href="#解压" aria-hidden="true">#</a> 解压</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> minio-12.10.4.tgz 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><blockquote><p>更多配置参考 charts内的 values 或官方文档说明</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> minio-values.yaml</span>
global:
  imageRegistry: &quot;&quot;
mode: standalone
auth:
  rootUser: admin
  rootPassword: &quot;Password@0101&quot;
service:
  type: ClusterIP
  ports:
    api: 9000
    console: 9001
ingress:
  enabled: true
  hostname: minio.zili.work
  path: /
  pathType: ImplementationSpecific
  servicePort: minio-console
  annotations:
    kubernetes.io/ingress.class: nginx
    nginx.ingress.kubernetes.io/proxy-body-size: &quot;0&quot;
apiIngress:
  enabled: true
  hostname: minio-api.zili.work
  path: /
  pathType: ImplementationSpecific
  servicePort: minio-api
  annotations:
    kubernetes.io/ingress.class: nginx
    nginx.ingress.kubernetes.io/proxy-body-size: &quot;0&quot;
    nginx.ingress.kubernetes.io/enable-cors: &quot;true&quot;
persistence:
  enabled: true
  accessModes:
    - ReadWriteOnce
  size: 10Gi
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>helm upgrade <span class="token parameter variable">--install</span> minio <span class="token builtin class-name">.</span> <span class="token parameter variable">-f</span> minio-values.yaml <span class="token parameter variable">-n</span> middleware --create-namespace
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9);function b(h,p){const a=t("ExternalLinkIcon");return s(),r("div",null,[o,v,e("p",null,[e("a",u,[n("github/bitnami"),l(a)])]),m])}const k=i(c,[["render",b],["__file","minio.html.vue"]]);export{k as default};
