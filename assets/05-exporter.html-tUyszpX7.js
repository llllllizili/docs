import{_ as s,c as a,o as e,f as n}from"./app-BfCDUtKQ.js";const r="/assets/2024-03-21-15-27-33-3XiSpeu7.png",i="/assets/2024-03-21-16-17-19-Bq3R9Yq1.png",l={},p=n('<h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><h2 id="export" tabindex="-1"><a class="header-anchor" href="#export"><span>export</span></a></h2><p>简单来讲，能够向 sever 提供数据的程序，就可以称为exporter，在server的视角下，它即为一个<code>target</code></p><p>官方提供的<a href="https://github.com/orgs/prometheus/repositories?q=exporter" target="_blank" rel="noopener noreferrer">https://github.com/orgs/prometheus/repositories?q=exporter</a></p><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><blockquote><p>以下引用自网络</p></blockquote><ul><li><p>独立使用的</p><p>以我们已经使用过的Node Exporter为例，由于操作系统本身并不直接支持Prometheus，同时用户也无法通过直接从操作系统层面上提供对Prometheus的支持。因此，用户只能通过独立运行一个程序的方式，通过操作系统提供的相关接口，将系统的运行状态数据转换为可供Prometheus读取的监控数据。 除了Node Exporter以外，比如MySQL Exporter、Redis Exporter等都是通过这种方式实现的。 这些Exporter程序扮演了一个中间代理人的角色。</p></li><li><p>集成到应用中的</p><p>为了能够更好的监控系统的内部运行状态，有些开源项目如Kubernetes，ETCD等直接在代码中使用了Prometheus的Client Library，提供了对Prometheus的直接支持。这种方式打破的监控的界限，让应用程序可以直接将内部的运行状态暴露给Prometheus，适合于一些需要更多自定义监控指标需求的项目。</p></li></ul><h2 id="白盒监控" tabindex="-1"><a class="header-anchor" href="#白盒监控"><span>白盒监控</span></a></h2><p>白盒监控（White-box monitoring）是指对系统内部运行机制、逻辑、状态进行深入监控的一种方式。它依赖于系统内部的指标和日志，可以提供系统内部运行的详细视图，比如应用程序的性能指标、数据库查询性能、系统调用的统计信息等。白盒监控需要对被监控系统有较深的理解，通过收集系统的内部指标来分析系统的健康状况和性能问题。</p><p>Prometheus通过以下几个方面实现白盒监控：</p><ul><li><p>指标收集</p><p>Prometheus客户端库提供了一套丰富的指标收集接口，支持各种语言的应用程序。开发者可以在应用程序中直接使用这些库来暴露出内部状态的指标（比如HTTP请求延迟、数据库查询次数等），Prometheus服务器定期从这些暴露出的指标中抓取数据。</p></li><li><p>自定义指标</p><p>除了利用客户端库提供的标准指标类型（如Counter、Gauge、Histogram和Summary）外，用户还可以根据需要定义自己的指标，更细致地监控应用程序的内部状态。</p></li><li><p>服务发现</p><p>Prometheus支持多种服务发现机制（包括静态配置、DNS、Consul、Kubernetes等），这使得它可以自动发现并监控新的服务实例，适用于动态变化的环境。</p></li><li><p>查询语言</p><p>Prometheus提供了一种强大的查询语言（PromQL），它允许用户通过表达式来检索和处理时间序列数据，非常适合对内部指标进行深入分析。</p></li><li><p>告警规则</p><p>用户可以基于收集到的指标设置告警规则，一旦满足告警条件，Prometheus就会触发告警。这种机制可以及时发现系统内部的异常状态。</p></li></ul><p>常见的<code>Exporter</code>均为白盒监控</p><h2 id="黑盒监控" tabindex="-1"><a class="header-anchor" href="#黑盒监控"><span>黑盒监控</span></a></h2><p>在黑盒监控中，监控系统将被监控的服务视为一个黑盒子，只通过外部接口来检测系统的状态和性能，例如通过模拟用户请求来检测网站的可用性和响应时间。黑盒监控侧重于从用户的角度监控服务，重点关注服务是否可用、响应时间是否符合预期等。</p><p>黑盒监控是以故障为导向。当故障发生时，黑盒监控能快速发现故障，而白盒监控则侧重于主动发现或者预测潜在的问题。</p><p>Prometheus本身专注于白盒监控，即收集和分析应用程序内部的指标数据。然而，它可以通过集成黑盒监控工具，如Blackbox Exporter，来实现黑盒监控。它能够对外部系统执行各种检查，包括：</p><p><code>HTTP、HTTPS</code>：检查网页的可用性、证书有效性、页面加载时间等。</p><p><code>TCP</code>：检查TCP端口的可访问性。</p><p><code>ICMP</code> (Ping)：检查网络的连通性。</p><p><code>DNS</code>：检查DNS查询的响应。</p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><p><a href="https://github.com/prometheus/blackbox_exporter/releases" target="_blank" rel="noopener noreferrer">https://github.com/prometheus/blackbox_exporter/releases</a></p><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h3><p>安装包默认配置文件。（在Blackbox Exporter每一个探针配置称为一个module，并且以YAML配置文件的形式提供给Blackbox Exporter。<br> ）</p><div class="language-yaml" data-ext="yaml" data-title="yaml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">modules</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  http_2xx</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    prober</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">http</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    http</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      preferred_ip_protocol</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;ip4&quot;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  http_post_2xx</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    prober</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">http</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    http</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      method</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">POST</span></span></code></pre></div><p>访问<a href="http://127.0.0.1:9115/probe?module=http_2xx&amp;target=baidu.com" target="_blank" rel="noopener noreferrer">http://127.0.0.1:9115/probe?module=http_2xx&amp;target=baidu.com</a><br> 对baidu.com进行探测</p><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="集成" tabindex="-1"><a class="header-anchor" href="#集成"><span>集成</span></a></h3><p>在Prometheus下配置对Blockbox Exporter实例的采集任务即可</p><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">- </span><span style="color:#E06C75;--shiki-dark:#E06C75;">job_name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">baidu_http2xx_probe</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  params</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    module</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    - </span><span style="color:#98C379;--shiki-dark:#98C379;">http_2xx</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    target</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    - </span><span style="color:#98C379;--shiki-dark:#98C379;">baidu.com</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  metrics_path</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">/probe</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  static_configs</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  - </span><span style="color:#E06C75;--shiki-dark:#E06C75;">targets</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    - </span><span style="color:#98C379;--shiki-dark:#98C379;">127.0.0.1:9115</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">- </span><span style="color:#E06C75;--shiki-dark:#E06C75;">job_name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">prometheus_http2xx_probe</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  params</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    module</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    - </span><span style="color:#98C379;--shiki-dark:#98C379;">http_2xx</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    target</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    - </span><span style="color:#98C379;--shiki-dark:#98C379;">prometheus.io</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  metrics_path</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">/probe</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  static_configs</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  - </span><span style="color:#E06C75;--shiki-dark:#E06C75;">targets</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    - </span><span style="color:#98C379;--shiki-dark:#98C379;">127.0.0.1:9115</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们需要对doge站点进行采集时，一个个配置，显然不太现实。所以可以采用Relabling的方式对这些配置进行简化。</p><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">scrape_configs</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  - </span><span style="color:#E06C75;--shiki-dark:#E06C75;">job_name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;blackbox&#39;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    metrics_path</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">/probe</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    params</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">      module</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: [</span><span style="color:#98C379;--shiki-dark:#98C379;">http_2xx</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    static_configs</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#E06C75;--shiki-dark:#E06C75;">targets</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        - </span><span style="color:#98C379;--shiki-dark:#98C379;">http://prometheus.io</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # Target to probe with http.</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        - </span><span style="color:#98C379;--shiki-dark:#98C379;">https://prometheus.io</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   # Target to probe with https.</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        - </span><span style="color:#98C379;--shiki-dark:#98C379;">http://example.com:8080</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # Target to probe with http on port 8080.</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    relabel_configs</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#E06C75;--shiki-dark:#E06C75;">source_labels</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: [</span><span style="color:#98C379;--shiki-dark:#98C379;">__address__</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        target_label</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">__param_target</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#E06C75;--shiki-dark:#E06C75;">source_labels</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: [</span><span style="color:#98C379;--shiki-dark:#98C379;">__param_target</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        target_label</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">instance</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      - </span><span style="color:#E06C75;--shiki-dark:#E06C75;">target_label</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">__address__</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        replacement</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#98C379;--shiki-dark:#98C379;">127.0.0.1:9115</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>根据Target实例的地址，写入<code>__param_target</code>标签中。<code>__param_&lt;name&gt;</code>形式的标签表示，在采集任务时会在请求目标地址中添加<code>&lt;name&gt;</code>参数，等同于params的设置；</li><li>获取<code>__param_target</code>的值，并覆写到<code>instance</code>标签中；</li><li>覆写Target实例的<code>__address__</code>标签值为<code>BlockBox Exporter</code>实例的访问地址</li></ol><h3 id="http探针" tabindex="-1"><a class="header-anchor" href="#http探针"><span>http探针</span></a></h3><p>待补充</p><p><code>valid_http_versions</code></p><p><code>valid_status_codes</code></p><h2 id="自定义exporter" tabindex="-1"><a class="header-anchor" href="#自定义exporter"><span>自定义exporter</span></a></h2><p>待补充</p>`,40),o=[p];function t(c,d){return e(),a("div",null,o)}const h=s(l,[["render",t],["__file","05-exporter.html.vue"]]),k=JSON.parse(`{"path":"/ops/monitor/prometheus/05-exporter.html","title":"Exporter","lang":"zh-CN","frontmatter":{"article":true,"title":"Exporter","icon":null,"order":5,"index":true,"description":"export 简单来讲，能够向 sever 提供数据的程序，就可以称为exporter，在server的视角下，它即为一个target 官方提供的https://github.com/orgs/prometheus/repositories?q=exporter 使用 以下引用自网络 独立使用的 以我们已经使用过的Node Exporter为例，由于操...","head":[["meta",{"property":"og:url","content":"https://docs.lizili.online/ops/monitor/prometheus/05-exporter.html"}],["meta",{"property":"og:site_name","content":"lzz's Blog"}],["meta",{"property":"og:title","content":"Exporter"}],["meta",{"property":"og:description","content":"export 简单来讲，能够向 sever 提供数据的程序，就可以称为exporter，在server的视角下，它即为一个target 官方提供的https://github.com/orgs/prometheus/repositories?q=exporter 使用 以下引用自网络 独立使用的 以我们已经使用过的Node Exporter为例，由于操..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-21T13:21:43.000Z"}],["meta",{"property":"article:author","content":"z"}],["meta",{"property":"article:modified_time","content":"2024-03-21T13:21:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Exporter\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-21T13:21:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"z\\",\\"url\\":\\"https://docs.lizili.online\\"}]}"]]},"headers":[{"level":2,"title":"export","slug":"export","link":"#export","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"白盒监控","slug":"白盒监控","link":"#白盒监控","children":[]},{"level":2,"title":"黑盒监控","slug":"黑盒监控","link":"#黑盒监控","children":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":3,"title":"集成","slug":"集成","link":"#集成","children":[]},{"level":3,"title":"http探针","slug":"http探针","link":"#http探针","children":[]}]},{"level":2,"title":"自定义exporter","slug":"自定义exporter","link":"#自定义exporter","children":[]}],"git":{"createdTime":1711027303000,"updatedTime":1711027303000,"contributors":[{"name":"lizili","email":"cn.zili.lee@outlook.com","commits":1}]},"readingTime":{"minutes":4.78,"words":1434},"filePathRelative":"ops/monitor/prometheus/05-exporter.md","localizedDate":"2024年3月21日","excerpt":"\\n<h2>export</h2>\\n<p>简单来讲，能够向 sever 提供数据的程序，就可以称为exporter，在server的视角下，它即为一个<code>target</code></p>\\n<p>官方提供的<a href=\\"https://github.com/orgs/prometheus/repositories?q=exporter\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/orgs/prometheus/repositories?q=exporter</a></p>\\n<figure><figcaption></figcaption></figure>","autoDesc":true}`);export{h as comp,k as data};