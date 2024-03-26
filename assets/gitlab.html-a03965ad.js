import{_ as l,X as t,Y as r,a0 as s,a1 as a,a2 as n,$ as i,F as o}from"./framework-7663974c.js";const d={},c=s("h1",{id:"",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#","aria-hidden":"true"},"#")],-1),p={href:"https://docs.gitlab.com/charts/installation/",target:"_blank",rel:"noopener noreferrer"},v=i(`<h2 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h2><p>gitlab</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>helm repo <span class="token function">add</span> gitlab https://charts.gitlab.io/
helm repo update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>helm pull gitlab/gitlab <span class="token parameter variable">--version</span> <span class="token number">7.6</span>.1

<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> gitlab-7.6.1.tgz

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="values修改" tabindex="-1"><a class="header-anchor" href="#values修改" aria-hidden="true">#</a> values修改</h3>`,6),b={href:"https://docs.gitlab.com/charts/installation/command-line-options.html",target:"_blank",rel:"noopener noreferrer"},u=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> gitlab-values.yaml</span>
global:
  common:
    labels: {}
  hosts:
    domain: zili.work
    https: false
    externalIP: 192.168.2.149
  ingress:
    configureCertmanager: false
    provider: nginx
    annotations:
      ingressClassName: nginx
    enabled: true
    path: /
    pathType: Prefix
  gitaly:
    enabled: true

gitlab-runner:
  install: false
nginx-ingress:
  enabled: false
prometheus:
  install: false

EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>helm upgrade <span class="token parameter variable">--install</span> gitlab <span class="token builtin class-name">.</span> <span class="token parameter variable">-f</span> gitlab-values.yaml <span class="token parameter variable">-n</span> gitlab --create-namespace
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Release <span class="token string">&quot;gitlab&quot;</span> does not exist. Installing it now.
NAME: gitlab
LAST DEPLOYED: Thu Dec  <span class="token number">7</span> <span class="token number">11</span>:37:35 <span class="token number">2023</span>
NAMESPACE: gitlab
STATUS: deployed
REVISION: <span class="token number">1</span>
NOTES:
<span class="token operator">==</span><span class="token operator">=</span> CRITICAL
The following charts are included <span class="token keyword">for</span> evaluation purposes only. They will not be supported by GitLab Support
<span class="token keyword">for</span> production workloads. Use Cloud Native Hybrid deployments <span class="token keyword">for</span> production. For <span class="token function">more</span> information visit
https://docs.gitlab.com/charts/installation/index.html<span class="token comment">#use-the-reference-architectures.</span>
- PostgreSQL
- Redis
- Gitaly
- MinIO

<span class="token operator">==</span><span class="token operator">=</span> NOTICE
The minimum required version of PostgreSQL is now <span class="token number">13</span>. See https://gitlab.com/gitlab-org/charts/gitlab/-/blob/master/doc/installation/upgrade.md <span class="token keyword">for</span> <span class="token function">more</span> details.

<span class="token operator">==</span><span class="token operator">=</span> WARNING
Automatic TLS certificate generation with cert-manager is disabled.
One or <span class="token function">more</span> of the components does not have a TLS certificate Secret configured.
As a result, Self-signed certificates were generated <span class="token keyword">for</span> these components.

You may retrieve the CA root <span class="token keyword">for</span> these certificates from the <span class="token variable"><span class="token variable">\`</span>gitlab-wildcard-tls-ca<span class="token variable">\`</span></span> secret, via the following command. It can <span class="token keyword">then</span> be imported to a web browser or system store.

  kubectl get secret gitlab-wildcard-tls-ca <span class="token parameter variable">-ojsonpath</span><span class="token operator">=</span><span class="token string">&#39;{.data.cfssl_ca}&#39;</span> <span class="token operator">|</span> base64 <span class="token parameter variable">--decode</span> <span class="token operator">&gt;</span> gitlab.zili.work.ca.pem

If you <span class="token keyword">do</span> not wish to use self-signed certificates, please <span class="token builtin class-name">set</span> the following properties:
- global.ingress.tls.secretName
OR all of:
- global.ingress.tls.enabled <span class="token punctuation">(</span>set to <span class="token variable"><span class="token variable">\`</span><span class="token boolean">true</span><span class="token variable">\`</span></span><span class="token punctuation">)</span>
- gitlab.webservice.ingress.tls.secretName
- registry.ingress.tls.secretName
- minio.ingress.tls.secretName
- gitlab.kas.ingress.tls.secretName
Help us improve the installation experience, <span class="token builtin class-name">let</span> us know how we did with a <span class="token number">1</span> minute survey:https://gitlab.fra1.qualtrics.com/jfe/form/SV_6kVqZANThUQ1bZb?installation<span class="token operator">=</span>helm<span class="token operator">&amp;</span><span class="token assign-left variable">release</span><span class="token operator">=</span><span class="token number">16</span>-6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取root密码" tabindex="-1"><a class="header-anchor" href="#获取root密码" aria-hidden="true">#</a> 获取root密码</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl get secret gitlab-gitlab-initial-root-password <span class="token parameter variable">-ojsonpath</span><span class="token operator">=</span><span class="token string">&#39;{.data.password}&#39;</span> <span class="token parameter variable">-n</span> gitlab <span class="token operator">|</span> base64 <span class="token parameter variable">--decode</span> <span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6);function m(h,g){const e=o("ExternalLinkIcon");return t(),r("div",null,[c,s("p",null,[s("a",p,[a("官方文档"),n(e)])]),v,s("p",null,[s("a",b,[a("配置选项参考值"),n(e)])]),u])}const f=l(d,[["render",m],["__file","gitlab.html.vue"]]);export{f as default};
