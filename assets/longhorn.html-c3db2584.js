import{_ as u,X as m,Y as v,a0 as n,a1 as s,a2 as a,a3 as e,$ as l,F as i}from"./framework-7663974c.js";const b="/assets/2023-12-05-15-45-50-49f11855.png",h={},k=n("h1",{id:"",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#","aria-hidden":"true"},"#")],-1),g={href:"https://longhorn.io/docs/1.5.3/deploy/important-notes/",target:"_blank",rel:"noopener noreferrer"},_=l(`<p>支持多种安装方式，这里使用helm 安装</p><h2 id="前置准备" tabindex="-1"><a class="header-anchor" href="#前置准备" aria-hidden="true">#</a> 前置准备</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">--setopt</span><span class="token operator">=</span>tsflags<span class="token operator">=</span>noscripts <span class="token function">install</span> iscsi-initiator-utils
<span class="token builtin class-name">echo</span> <span class="token string">&quot;InitiatorName=<span class="token variable"><span class="token variable">$(</span>/sbin/iscsi-iname<span class="token variable">)</span></span>&quot;</span> <span class="token operator">&gt;</span> /etc/iscsi/initiatorname.iscsi
systemctl <span class="token builtin class-name">enable</span> iscsid
systemctl start iscsid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@zili01 ~<span class="token punctuation">]</span><span class="token comment"># systemctl status iscsid</span>
● iscsid.service - Open-iSCSI
   Loaded: loaded <span class="token punctuation">(</span>/usr/lib/systemd/system/iscsid.service<span class="token punctuation">;</span> enabled<span class="token punctuation">;</span> vendor preset: disabled<span class="token punctuation">)</span>
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Mon <span class="token number">2023</span>-12-04 <span class="token number">16</span>:36:21 CST<span class="token punctuation">;</span> 9s ago
     Docs: man:iscsid<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
           man:iscsiuio<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
           man:iscsiadm<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
 Main PID: <span class="token number">22072</span> <span class="token punctuation">(</span>iscsid<span class="token punctuation">)</span>
   Status: <span class="token string">&quot;Ready to process requests&quot;</span>
    Tasks: <span class="token number">1</span>
   Memory: <span class="token number">1</span>.8M
   CGroup: /system.slice/iscsid.service
           └─22072 /sbin/iscsid <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>仓库添加</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>helm repo <span class="token function">add</span> longhorn https://charts.longhorn.io
helm repo update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>安装</p>`,8),f=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("helm "),n("span",{class:"token function"},"install"),s(" longhorn longhorn/longhorn "),n("span",{class:"token parameter variable"},"--namespace"),s(" longhorn-system --create-namespace "),n("span",{class:"token parameter variable"},"--version"),s(),n("span",{class:"token number"},"1.5"),s(`.3
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("helm pull longhorn/longhorn "),n("span",{class:"token parameter variable"},"--version"),s(),n("span",{class:"token number"},"1.5"),s(`.3

`),n("span",{class:"token function"},"tar"),s(),n("span",{class:"token parameter variable"},"-zxvf"),s(` longhorn-1.5.3.tgz

`),n("span",{class:"token comment"},"# 可修改values，这里仅改了下存储的路径"),s(`
defaultSettings:
  defaultDataPath: /data/longhorn

`),n("span",{class:"token comment"},"# 安装"),s(`
helm upgrade `),n("span",{class:"token parameter variable"},"--install"),s(" longhorn "),n("span",{class:"token builtin class-name"},"."),s(),n("span",{class:"token parameter variable"},"-f"),s(" values.yaml "),n("span",{class:"token parameter variable"},"-n"),s(` longhorn-system --create-namespace
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>❯ kubectl <span class="token parameter variable">-n</span> longhorn-system get pod
NAME                                                READY   STATUS    RESTARTS   AGE
csi-attacher-79b44f5d-5xvhb                         <span class="token number">1</span>/1     Running   <span class="token number">0</span>          8m32s
<span class="token punctuation">..</span>.
<span class="token punctuation">..</span>.
longhorn-ui-7c667cb6fc-rxlwp                        <span class="token number">1</span>/1     Running   <span class="token number">0</span>          10m

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="访问" tabindex="-1"><a class="header-anchor" href="#访问" aria-hidden="true">#</a> 访问</h2><p>longhorn 安装默认时安装了UI的。</p>`,3),S=l(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">ingress</span><span class="token punctuation">:</span>
  <span class="token comment">## Set to true to enable ingress record generation</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">host</span><span class="token punctuation">:</span> longhorn.zili.work
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">kubernetes.io/ingress.class</span><span class="token punctuation">:</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本机hosts文件中，添加记录。若生产环境，申请泛域名，做映射</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>192.168.2.149 longhorn.zili.work
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',4);function T(A,R){const t=i("ExternalLinkIcon"),o=i("Tabs"),c=i("RouterLink");return m(),v("div",null,[k,n("p",null,[n("a",g,[s("官方安装指导"),a(t)])]),_,a(o,{id:"24",data:[{title:"在线安装"},{title:"离线安装"}]},{tab0:e(({title:r,value:p,isActive:d})=>[f]),tab1:e(({title:r,value:p,isActive:d})=>[y]),_:1}),x,n("p",null,[s("若需要访问，安装ingress ，开启longhorn的"),a(c,{to:"/ops/GitOps/deploy/infra/ingress.html"},{default:e(()=>[s("ingress")]),_:1}),s("即可")]),S])}const z=u(h,[["render",T],["__file","longhorn.html.vue"]]);export{z as default};
