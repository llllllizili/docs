import{_ as a,X as e,Y as t,$ as n,a0 as p,a1 as c,a3 as i,F as l}from"./framework-abbf9d44.js";const o="/assets/2024-03-11-17-03-42-8bf15cb1.png",u={},r={href:"https://github.com/kubernetes-sigs/metrics-server",target:"_blank",rel:"noopener noreferrer"},d=i(`<ul><li>kubeadm 默认是不部署的。</li><li>依赖于 API Aggregator</li><li>只可以查询当前的度量数据，不保存历史数据。</li></ul><p>检查Aggregator是否开启</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> apiserver <span class="token operator">|</span> <span class="token function">grep</span> enable-aggregator-routing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改配置，并开启。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vi</span> /etc/kubernetes/manifests/kube-apiserver.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>增加 <code>--enable-aggregator-routing=true</code>，修改后，服务会自动重启</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token punctuation">...</span><span class="token punctuation">...</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">command</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> kube<span class="token punctuation">-</span>apiserver
	<span class="token punctuation">...</span><span class="token punctuation">...</span>
    <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>enable<span class="token punctuation">-</span>bootstrap<span class="token punctuation">-</span>token<span class="token punctuation">-</span>auth=true
    <span class="token comment"># 新增</span>
    <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>enable<span class="token punctuation">-</span>aggregator<span class="token punctuation">-</span>routing=true  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下载文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">...</span>
<span class="token punctuation">...</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>cert<span class="token punctuation">-</span>dir=/tmp
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>secure<span class="token punctuation">-</span>port=10250
        <span class="token comment"># 默认是InternalIP,ExternalIP,Hostname</span>
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>kubelet<span class="token punctuation">-</span>preferred<span class="token punctuation">-</span>address<span class="token punctuation">-</span>types=InternalIP
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>kubelet<span class="token punctuation">-</span>use<span class="token punctuation">-</span>node<span class="token punctuation">-</span>status<span class="token punctuation">-</span>port
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>metric<span class="token punctuation">-</span>resolution=15s
        <span class="token comment"># 添加此行</span>
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>kubelet<span class="token punctuation">-</span>insecure<span class="token punctuation">-</span>tls
        <span class="token comment"># 修改镜像地址</span>
        <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.cn<span class="token punctuation">-</span>hangzhou.aliyuncs.com/chenby/metrics<span class="token punctuation">-</span>server<span class="token punctuation">:</span>v0.6.1
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
<span class="token punctuation">...</span>
<span class="token punctuation">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',11);function k(v,m){const s=l("ExternalLinkIcon");return e(),t("div",null,[n("p",null,[n("a",r,[p("github-metrics-server"),c(s)])]),d])}const g=a(u,[["render",k],["__file","kubernetes-metrics-server.html.vue"]]);export{g as default};
