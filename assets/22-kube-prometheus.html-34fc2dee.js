import{_ as t,X as p,Y as l,Z as i,$ as n,a0 as s,a1 as c,a3 as a,F as o}from"./framework-abbf9d44.js";const u="/assets/2024-03-08-17-36-15-9d40e087.png",r="/assets/2024-03-11-16-38-59-471f4ad2.png",d="/assets/2024-03-26-15-31-25-8dc30903.png",k="/assets/2024-03-08-18-04-57-5746bae0.png",v="/assets/2024-03-11-15-57-22-3d98b06c.png",m="/assets/2024-03-11-16-14-53-5f5fd6b0.png",b={},y=a(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h2 id="下载chart" tabindex="-1"><a class="header-anchor" href="#下载chart" aria-hidden="true">#</a> 下载chart</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>helm pull oci://registry-1.docker.io/bitnamicharts/kube-prometheus <span class="token parameter variable">--version</span> <span class="token number">8.30</span>.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="下载模版" tabindex="-1"><a class="header-anchor" href="#下载模版" aria-hidden="true">#</a> 下载模版</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>https://grafana.com/grafana/dashboards/15758-kubernetes-views-namespaces/?tab<span class="token operator">=</span>revisions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>https://grafana.com/grafana/dashboards/1860-node-exporter-full/?tab<span class="token operator">=</span>revisions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p><code>prometheus-values.yaml</code> 文件如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">global</span><span class="token punctuation">:</span>
  <span class="token key atrule">imageRegistry</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
  <span class="token key atrule">imagePullSecrets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token key atrule">storageClass</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>

<span class="token key atrule">fullnameOverride</span><span class="token punctuation">:</span> <span class="token string">&quot;kube-prometheus&quot;</span>

<span class="token key atrule">operator</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span>
    <span class="token key atrule">registry</span><span class="token punctuation">:</span> docker.io
    <span class="token key atrule">repository</span><span class="token punctuation">:</span> bitnami/prometheus<span class="token punctuation">-</span>operator
    <span class="token key atrule">tag</span><span class="token punctuation">:</span> 0.72.0<span class="token punctuation">-</span>debian<span class="token punctuation">-</span>12<span class="token punctuation">-</span>r1
    <span class="token key atrule">pullPolicy</span><span class="token punctuation">:</span> IfNotPresent
    <span class="token key atrule">pullSecrets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token key atrule">prometheus</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span>
    <span class="token key atrule">registry</span><span class="token punctuation">:</span> docker.io
    <span class="token key atrule">repository</span><span class="token punctuation">:</span> bitnami/prometheus
    <span class="token key atrule">tag</span><span class="token punctuation">:</span> 2.50.1<span class="token punctuation">-</span>debian<span class="token punctuation">-</span>12<span class="token punctuation">-</span>r1
    <span class="token key atrule">pullSecrets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token key atrule">persistence</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">size</span><span class="token punctuation">:</span> 10Gi
  <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">replicaCount</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">podDisruptionBudget</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">serviceMonitor</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">ingress</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
      <span class="token key atrule">kubernetes.io/ingress.class</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> prometheus.zili.work
  <span class="token key atrule">retention</span><span class="token punctuation">:</span> 5d
  <span class="token key atrule">thanos</span><span class="token punctuation">:</span>
    <span class="token key atrule">create</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token key atrule">alertmanager</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span>
    <span class="token key atrule">registry</span><span class="token punctuation">:</span> docker.io
    <span class="token key atrule">repository</span><span class="token punctuation">:</span> bitnami/alertmanager
    <span class="token key atrule">tag</span><span class="token punctuation">:</span> 0.27.0<span class="token punctuation">-</span>debian<span class="token punctuation">-</span>12<span class="token punctuation">-</span>r1
    <span class="token key atrule">pullSecrets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token key atrule">persistence</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ReadWriteOnce
    <span class="token key atrule">size</span><span class="token punctuation">:</span> 5Gi

  <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token key atrule">replicaCount</span><span class="token punctuation">:</span> <span class="token number">1</span>

  <span class="token key atrule">ingress</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
      <span class="token key atrule">kubernetes.io/ingress.class</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> alert.prometheus.zili.work

<span class="token comment">## </span>
<span class="token comment"># node-exporter:</span>
<span class="token comment"># kube-state-metrics:</span>
<span class="token comment"># ServiceMonitors:</span>

<span class="token key atrule">coreDns</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token key atrule">kubelet</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">replicaCount</span><span class="token punctuation">:</span> <span class="token number">1</span>

<span class="token key atrule">blackboxExporter</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">replicaCount</span><span class="token punctuation">:</span> <span class="token number">1</span>

<span class="token key atrule">kubeApiServer</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token key atrule">kubeControllerManager</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
  <span class="token key atrule">endpoint</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 192.168.2.133
  <span class="token key atrule">service</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token key atrule">http</span><span class="token punctuation">:</span> <span class="token number">10257</span>
    <span class="token key atrule">targetPorts</span><span class="token punctuation">:</span>
      <span class="token key atrule">http</span><span class="token punctuation">:</span> <span class="token number">10257</span>
  <span class="token key atrule">serviceMonitor</span><span class="token punctuation">:</span>
    <span class="token key atrule">https</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">insecureSkipVerify</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token key atrule">kubeScheduler</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
  <span class="token key atrule">endpoint</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 192.168.2.133
  <span class="token key atrule">service</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token key atrule">http</span><span class="token punctuation">:</span> <span class="token number">10259</span>
    <span class="token key atrule">targetPorts</span><span class="token punctuation">:</span>
      <span class="token key atrule">http</span><span class="token punctuation">:</span> <span class="token number">10259</span>
  <span class="token key atrule">serviceMonitor</span><span class="token punctuation">:</span>
    <span class="token key atrule">https</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">insecureSkipVerify</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token key atrule">kubeProxy</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
  <span class="token key atrule">endpoint</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 192.168.2.133
    <span class="token punctuation">-</span> 192.168.2.135
    <span class="token punctuation">-</span> 192.168.2.135
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>helm upgrade <span class="token parameter variable">--install</span> kube-prometheus <span class="token builtin class-name">.</span> <span class="token parameter variable">-f</span> prometheus-values.yaml <span class="token parameter variable">-n</span> prometheus --create-namespace
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),g=n("h2",{id:"集群外实例添加",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#集群外实例添加","aria-hidden":"true"},"#"),s(" 集群外实例添加")],-1),h={href:"https://github.com/bitnami/charts/blob/main/bitnami/kube-prometheus/README.md#additional-scrape-configurations",target:"_blank",rel:"noopener noreferrer"},f=a(`<ol><li>新建一个配置文件, 如<code>prometheus-additional.yaml</code></li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> 
  <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;192.168.1.32:9100&quot;</span><span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的配置写法，和维护 prometheus的启动配置文件一致。</p><ol start="2"><li>为配置文件创建一个secret</li></ol><p>生成配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl create secret generic additional-scrape-configs --from-file<span class="token operator">=</span>prometheus-additional.yaml --dry-run<span class="token operator">=</span>client <span class="token parameter variable">-oyaml</span> <span class="token operator">&gt;</span> additional-scrape-configs.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>应用配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 注意namespace 保持一致</span>
kubectl apply <span class="token parameter variable">-f</span> additional-scrape-configs.yaml <span class="token parameter variable">-n</span> prometheus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在编排中，添加这个配置</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">prometheus</span><span class="token punctuation">:</span>
  <span class="token punctuation">...</span>
  <span class="token punctuation">...</span>
  <span class="token key atrule">additionalScrapeConfigs</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> external
    <span class="token key atrule">external</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> additional<span class="token punctuation">-</span>scrape<span class="token punctuation">-</span>configs
      <span class="token key atrule">key</span><span class="token punctuation">:</span> prometheus<span class="token punctuation">-</span>additional.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更新服务即可</p><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><h3 id="unhealthy" tabindex="-1"><a class="header-anchor" href="#unhealthy" aria-hidden="true">#</a> unhealthy</h3><figure><img src="'+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>是否为pod，非pod的服务，需指定endpotin、port、tls等</li><li>网络策略（防火墙、服务端口等）</li><li>RBAC 授权</li></ol><p>我的集群为<code>kubeadm</code>安装，默认这几个服务的端口绑定在<code>localhost</code> <code>127.0.0.1</code>上，需要将地址暴露出来，这里为了方便，统一调整为 <code>0.0.0.0</code></p><p>配置变更后，服务会自动重启，无须额外操作。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;s/- --bind-address=127.0.0.1/- --bind-address=0.0.0.0/&quot;</span> <span class="token parameter variable">-i</span> /etc/kubernetes/manifests/kube-controller-manager.yaml
<span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;s/- --bind-address=127.0.0.1/- --bind-address=0.0.0.0/&quot;</span> <span class="token parameter variable">-i</span> /etc/kubernetes/manifests/kube-scheduler.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>更改编排文件，端口如下，再次执行即可。</p><figure><img src="`+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">kubeControllerManager</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
  <span class="token key atrule">endpoint</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 192.168.2.133
  <span class="token key atrule">service</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token key atrule">http</span><span class="token punctuation">:</span> <span class="token number">10257</span>
    <span class="token key atrule">targetPorts</span><span class="token punctuation">:</span>
      <span class="token key atrule">http</span><span class="token punctuation">:</span> <span class="token number">10257</span>
  <span class="token key atrule">serviceMonitor</span><span class="token punctuation">:</span>
    <span class="token key atrule">https</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">insecureSkipVerify</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">kubeScheduler</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
  <span class="token key atrule">endpoint</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 192.168.2.133
  <span class="token key atrule">service</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token key atrule">http</span><span class="token punctuation">:</span> <span class="token number">10259</span>
    <span class="token key atrule">targetPorts</span><span class="token punctuation">:</span>
      <span class="token key atrule">http</span><span class="token punctuation">:</span> <span class="token number">10259</span>
  <span class="token key atrule">serviceMonitor</span><span class="token punctuation">:</span>
    <span class="token key atrule">https</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">insecureSkipVerify</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>proxy的调整</p><p>编辑<code>configmap</code>， 修改<code>metricsBindAddress</code>的值为<code>0.0.0.0</code>,重启proxy服务即可</p><figure><img src="`+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',25);function x(_,q){const e=o("ExternalLinkIcon");return p(),l("div",null,[y,i(" ## 集群内实例添加 "),g,n("p",null,[n("a",h,[s("additional-scrape-configurations"),c(e)])]),f])}const C=t(b,[["render",x],["__file","22-kube-prometheus.html.vue"]]);export{C as default};
