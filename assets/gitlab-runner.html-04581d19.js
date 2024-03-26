import{_ as n,X as s,Y as a,$ as e}from"./framework-7663974c.js";const t="/assets/2023-12-26-15-44-13-aa799b8a.png",l="/assets/2023-12-28-11-01-53-dc87f6d4.png",p={},i=e('<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><blockquote><p>runner 的安装，在打开runner界面时，即可查看相关的手册</p></blockquote><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="在k8s中安装" tabindex="-1"><a class="header-anchor" href="#在k8s中安装" aria-hidden="true">#</a> 在K8S中安装</h3><p>仓库添加</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>helm repo <span class="token function">add</span> gitlab https://charts.gitlab.io
<span class="token comment"># 查询对应的版本</span>
helm search repo <span class="token parameter variable">-l</span> gitlab/gitlab-runner     
<span class="token comment"># 找gitlab版本 对应的版本号</span>
helm pull gitlab/gitlab-runner <span class="token parameter variable">--version</span><span class="token operator">=</span><span class="token number">0.39</span>.1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 镜像用和自己git版本匹配的</span>
<span class="token key atrule">image</span><span class="token punctuation">:</span> gitlab/gitlab<span class="token punctuation">-</span>runner<span class="token punctuation">:</span>alpine<span class="token punctuation">-</span>v14.10.1
<span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
<span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span>
<span class="token key atrule">gitlabUrl</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//gitlab.zili.work<span class="token punctuation">:</span>8888/
<span class="token comment"># 这个token 来自 runner界面，如果使用runnerToken 则副本数只能为1</span>
<span class="token key atrule">runnerRegistrationToken</span><span class="token punctuation">:</span> <span class="token string">&quot;p1fDzwhHbyGeK4XSz7RM&quot;</span>
<span class="token key atrule">terminationGracePeriodSeconds</span><span class="token punctuation">:</span> <span class="token number">3600</span>
<span class="token key atrule">concurrent</span><span class="token punctuation">:</span> <span class="token number">20</span>
<span class="token key atrule">checkInterval</span><span class="token punctuation">:</span> <span class="token number">30</span>
<span class="token key atrule">sessionServer</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">rbac</span><span class="token punctuation">:</span>
  <span class="token key atrule">create</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;pods&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pods/exec&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pods/attach&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;secrets&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;configmaps&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;watch&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;create&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;patch&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;delete&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;update&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">rules</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token key atrule">clusterWideAccess</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">podSecurityPolicy</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">resourceNames</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> gitlab<span class="token punctuation">-</span>runner
<span class="token key atrule">metrics</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">service</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> ClusterIP
<span class="token key atrule">runners</span><span class="token punctuation">:</span>
  <span class="token comment"># 缓存 https://docs.gitlab.com/runner/install/kubernetes.html#s3</span>
  <span class="token key atrule">config</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    [[runners]]
      [runners.kubernetes]
        privileged = true
        namespace = &quot;{{.Release.Namespace}}&quot;
        image = &quot;ubuntu:16.04&quot;
      [runners.cache]
        Type = &quot;s3&quot;
        Path = &quot;caches&quot;
        Shared = true
        [runners.cache.s3]
          ServerAddress = &quot;minio.middleware.svc.cluster.local:9000&quot;
          BucketName = &quot;gitlab-runner&quot;
          Insecure = true
          AccessKey = &quot;admin&quot;
          SecretKey = &quot;Password@0101&quot;</span>
  <span class="token key atrule">executor</span><span class="token punctuation">:</span> kubernetes
  <span class="token key atrule">tags</span><span class="token punctuation">:</span> <span class="token string">&quot;Kubernetes,K8S&quot;</span>
  <span class="token key atrule">cloneUrl</span><span class="token punctuation">:</span> <span class="token string">&quot;http://gitlab.zili.work:8888/&quot;</span>
<span class="token key atrule">securityContext</span><span class="token punctuation">:</span>
  <span class="token key atrule">runAsUser</span><span class="token punctuation">:</span> <span class="token number">100</span>
  <span class="token key atrule">fsGroup</span><span class="token punctuation">:</span> <span class="token number">65533</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>helm upgrade <span class="token parameter variable">--install</span> gitlab-runner <span class="token builtin class-name">.</span>  <span class="token parameter variable">-n</span> gitlab-runner --create-namespace
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>runner 无法注册</p><figure><img src="`+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>检查自己 <code>gitlabUrl</code> 是否配置正确</p>',14),c=[i];function u(o,r){return s(),a("div",null,c)}const k=n(p,[["render",u],["__file","gitlab-runner.html.vue"]]);export{k as default};
