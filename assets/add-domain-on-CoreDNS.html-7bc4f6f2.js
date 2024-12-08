import{_ as n,X as a,Y as s,a3 as e}from"./framework-abbf9d44.js";const i={},l=e(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h2 id="host解析设置" tabindex="-1"><a class="header-anchor" href="#host解析设置" aria-hidden="true">#</a> Host解析设置</h2><p>通过修改 <mark>CoreDNS ConfigMap</mark>, 即可实现，无限在values中添加过多的HostAlias</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl edit configmap coredns <span class="token parameter variable">-n</span> kube-system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>host {}</code> 内容，即为自定义域名，且<code>fallthrough</code> 必须配置，否则其他域名将无法解析</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Corefile: <span class="token operator">|</span>
    .:53 <span class="token punctuation">{</span>
        errors
        health <span class="token punctuation">{</span>
          lameduck 5s
        <span class="token punctuation">}</span>
        ready
        kubernetes cluster.local in-addr.arpa ip6.arpa <span class="token punctuation">{</span>
          pods insecure
          fallthrough in-addr.arpa ip6.arpa
        <span class="token punctuation">}</span>
        hosts <span class="token punctuation">{</span>
         <span class="token number">192.168</span>.2.149 harbor.zili.work
         <span class="token number">192.168</span>.4.14 minio.jkstack.com
         fallthrough
        <span class="token punctuation">}</span>
        prometheus :9153
        forward <span class="token builtin class-name">.</span> <span class="token string">&quot;/etc/resolv.conf&quot;</span>
        cache <span class="token number">30</span>
        loop
        reload
        loadbalance
    <span class="token punctuation">}</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),d=[l];function r(c,o){return a(),s("div",null,d)}const u=n(i,[["render",r],["__file","add-domain-on-CoreDNS.html.vue"]]);export{u as default};
