import{_ as e,X as t,Y as l,$ as n,a0 as p,a1 as i,a3 as s,F as o}from"./framework-abbf9d44.js";const c="/assets/2024-03-18-17-19-47-e6e275c0.png",u={},r=s(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h2 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h2><blockquote><p>kubernetes-event-exporter 是一个用于采集k8s事件的工具，通过它可以将 Kubernetes 事件导出到第三方平台或者数据库（如Webhooks/HTTP，Elasticsearch，OpenSearch，Kafka，Slack，File，Loki等），以便用于可观察性或警报目的。</p></blockquote><h2 id="服务配置" tabindex="-1"><a class="header-anchor" href="#服务配置" aria-hidden="true">#</a> 服务配置</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">image</span><span class="token punctuation">:</span>
  <span class="token key atrule">registry</span><span class="token punctuation">:</span> docker.io
  <span class="token key atrule">repository</span><span class="token punctuation">:</span> bitnami/kubernetes<span class="token punctuation">-</span>event<span class="token punctuation">-</span>exporter
  <span class="token key atrule">tag</span><span class="token punctuation">:</span> 1.6.1<span class="token punctuation">-</span>debian<span class="token punctuation">-</span>12<span class="token punctuation">-</span>r16

<span class="token key atrule">config</span><span class="token punctuation">:</span>
  <span class="token key atrule">logLevel</span><span class="token punctuation">:</span> debug
  <span class="token key atrule">metricsNamePrefix</span><span class="token punctuation">:</span> <span class="token string">&#39;event_exporter_&#39;</span>
  <span class="token comment"># 修改为json，便于数据操作</span>
  <span class="token key atrule">logFormat</span><span class="token punctuation">:</span> json
  <span class="token comment"># https://github.com/resmoio/kubernetes-event-exporter#configuration</span>
  <span class="token key atrule">receivers</span><span class="token punctuation">:</span>
    <span class="token comment"># - name: &quot;dump&quot;</span>
    <span class="token comment">#   file:</span>
    <span class="token comment">#     path: &quot;/dev/stdout&quot;</span>
    <span class="token comment">#     layout: {}</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;loki&quot;</span>
      <span class="token key atrule">loki</span><span class="token punctuation">:</span>
        <span class="token comment"># 地址根据实际情况修改</span>
        <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//grafana<span class="token punctuation">-</span>loki<span class="token punctuation">-</span>distributor.middleware<span class="token punctuation">:</span>3100/loki/api/v1/push
        <span class="token key atrule">headers</span><span class="token punctuation">:</span>
          <span class="token key atrule">Content-Type</span><span class="token punctuation">:</span> application/json
          <span class="token key atrule">User-Agent</span><span class="token punctuation">:</span> <span class="token string">&quot;kube-event-exporter&quot;</span>
        <span class="token key atrule">streamLabels</span><span class="token punctuation">:</span>
          <span class="token key atrule">app</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>event<span class="token punctuation">-</span>exporter
          <span class="token key atrule">dataCenter</span><span class="token punctuation">:</span> local<span class="token punctuation">-</span>cluster
          <span class="token key atrule">source</span><span class="token punctuation">:</span> event<span class="token punctuation">-</span>exporter
        <span class="token comment"># 这里不建议修改了，汇总和模板冲突。如自定义大屏的话，可按需配置</span>
        <span class="token comment"># layout: {}</span>

  <span class="token key atrule">route</span><span class="token punctuation">:</span>
    <span class="token key atrule">routes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">match</span><span class="token punctuation">:</span>
          <span class="token comment"># - receiver: &quot;dump&quot;</span>
          <span class="token punctuation">-</span> <span class="token key atrule">receiver</span><span class="token punctuation">:</span> <span class="token string">&quot;loki&quot;</span>
<span class="token key atrule">metrics</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">serviceMonitor</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

  <span class="token key atrule">prometheusRule</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="大屏导入" tabindex="-1"><a class="header-anchor" href="#大屏导入" aria-hidden="true">#</a> 大屏导入</h2><p>导入过程略，大屏模版如下</p>`,7),d={href:"https://grafana.com/grafana/dashboards/17882-kubernetes-event-exporter/",target:"_blank",rel:"noopener noreferrer"},k=s(`<h2 id="event生成" tabindex="-1"><a class="header-anchor" href="#event生成" aria-hidden="true">#</a> event生成</h2><p>模拟动作，出发事件，查看效果</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl create deploy event-test <span class="token parameter variable">--image</span><span class="token operator">=</span>nginx-bad
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',4);function v(m,b){const a=o("ExternalLinkIcon");return t(),l("div",null,[r,n("p",null,[n("a",d,[p("https://grafana.com/grafana/dashboards/17882-kubernetes-event-exporter/"),i(a)])]),k])}const y=e(u,[["render",v],["__file","kubernetes-event-exporter.html.vue"]]);export{y as default};
