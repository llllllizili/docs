import{_ as s,X as e,Y as t,a0 as n,a1 as l,a2 as p,$ as i,F as o}from"./framework-7663974c.js";const c="/assets/2024-02-29-17-16-17-934ff5eb.png",u="/assets/2024-02-29-17-21-24-b1ef4617.png",r="/assets/2024-02-29-17-44-59-bb029964.png",k={},d=n("h1",{id:"",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#","aria-hidden":"true"},"#")],-1),v={href:"https://github.com/bitnami/charts/tree/main/bitnami/grafana-loki",target:"_blank",rel:"noopener noreferrer"},b=i(`<h2 id="loki配置" tabindex="-1"><a class="header-anchor" href="#loki配置" aria-hidden="true">#</a> loki配置</h2><p>拉取charts</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>helm pull oci://registry-1.docker.io/bitnamicharts/grafana-loki <span class="token parameter variable">--version</span> <span class="token number">2.18</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">loki</span><span class="token punctuation">:</span>
  <span class="token key atrule">gossipRing</span><span class="token punctuation">:</span>
    <span class="token key atrule">service</span><span class="token punctuation">:</span>
      <span class="token key atrule">annotations</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token key atrule">compactor</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">persistence</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ReadWriteOnce
    <span class="token key atrule">size</span><span class="token punctuation">:</span> 2Gi
  <span class="token key atrule">service</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> ClusterIP
    <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
      <span class="token key atrule">kubernetes.io/ingress.class</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">networkPolicy</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">gateway</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">auth</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> <span class="token string">&quot;admin&quot;</span>
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token string">&quot;admin&quot;</span>
    <span class="token key atrule">existingSecret</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
  <span class="token key atrule">service</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> ClusterIP
    <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
      <span class="token key atrule">kubernetes.io/ingress.class</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">ingress</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> grafana<span class="token punctuation">-</span>loki.zili.work
    <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
      <span class="token key atrule">kubernetes.io/ingress.class</span><span class="token punctuation">:</span> nginx
<span class="token key atrule">indexGateway</span><span class="token punctuation">:</span>
  <span class="token comment">## @param indexGateway.enabled Enable index-gateway deployment</span>
  <span class="token comment">##</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">distributor</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicaCount</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">networkPolicy</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">ingester</span><span class="token punctuation">:</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">persistence</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">size</span><span class="token punctuation">:</span> 2Gi
  <span class="token key atrule">networkPolicy</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">querier</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicaCount</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">persistence</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">size</span><span class="token punctuation">:</span> 2Gi
  <span class="token key atrule">networkPolicy</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">queryFrontend</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicaCount</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">networkPolicy</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">queryScheduler</span><span class="token punctuation">:</span>
  <span class="token key atrule">networkPolicy</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">ruler</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">tableManager</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">promtail</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">logLevel</span><span class="token punctuation">:</span> info

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>helm upgrade <span class="token parameter variable">--install</span> grafana-loki <span class="token builtin class-name">.</span> <span class="token parameter variable">-f</span> loki-values.yaml <span class="token parameter variable">-n</span> middleware --create-namespace

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Data source <code>querier</code> (k8s内)</p><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>通过label 即可查询对应的日志</p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="模版导入" tabindex="-1"><a class="header-anchor" href="#模版导入" aria-hidden="true">#</a> 模版导入</h2><p>下载模板：https://grafana.com/grafana/dashboards/15141-kubernetes-service-logs/?tab=revisions</p><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',13);function m(y,g){const a=o("ExternalLinkIcon");return e(),t("div",null,[d,n("p",null,[n("a",v,[l("bitnami官方安装指导"),p(a)])]),b])}const f=s(k,[["render",m],["__file","loki.html.vue"]]);export{f as default};
