import{_ as u,X as p,Y as m,$ as e,a0 as a,a1 as n,a2 as l,a3 as i,F as t}from"./framework-abbf9d44.js";const b={},v=e("h1",{id:"",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#","aria-hidden":"true"},"#")],-1),h={href:"https://metallb.org/installation/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/danderson/metallb",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,"MetalLB 是一个负载均衡器，专门解决裸金属 Kubernetes 集群中无法使用 LoadBalancer 类型服务的痛点。有了MetaLB，",-1),g=e("blockquote",null,[e("p",null,"metallb：为k8s集群的service提供LoadBalancer类型的支持")],-1),y=e("h2",{id:"前置准备",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#前置准备","aria-hidden":"true"},"#"),a(" 前置准备")],-1),f=e("li",null,"Kubernetes v1.13.0 或者更新的版本",-1),x={href:"https://metallb.universe.tf/installation/network-addons/",target:"_blank",rel:"noopener noreferrer"},P=e("li",null,"这里使用MetaLB的 layer 2模式，需要至少两个连续的IP作为地址池使用",-1),I=e("li",null,"L2 模式下需要各个节点间 7946 端口联通",-1),A=e("li",null,"BGP 略",-1),L=i(`<h3 id="修改-kube-proxy" tabindex="-1"><a class="header-anchor" href="#修改-kube-proxy" aria-hidden="true">#</a> 修改 kube proxy</h3><p>修改 kube-proxy 配置文件，启用严格的 ARP。如果 kube-proxy 使用的是 ipvs 模式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl edit configmap <span class="token parameter variable">-n</span> kube-system kube-proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>          <span class="token key atrule">ipvs</span><span class="token punctuation">:</span>
            <span class="token key atrule">excludeCIDRs</span><span class="token punctuation">:</span> <span class="token null important">null</span>
            <span class="token key atrule">minSyncPeriod</span><span class="token punctuation">:</span> 0s
            <span class="token key atrule">scheduler</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token key atrule">strictARP</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment">#false改为true</span>
            <span class="token key atrule">syncPeriod</span><span class="token punctuation">:</span> 0s
            <span class="token key atrule">tcpFinTimeout</span><span class="token punctuation">:</span> 0s
            <span class="token key atrule">tcpTimeout</span><span class="token punctuation">:</span> 0s
            <span class="token key atrule">udpTimeout</span><span class="token punctuation">:</span> 0s
          <span class="token key atrule">kind</span><span class="token punctuation">:</span> KubeProxyConfiguration
          <span class="token key atrule">metricsBindAddress</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
          <span class="token key atrule">mode</span><span class="token punctuation">:</span> <span class="token string">&quot;ipvs&quot;</span> <span class="token comment"># 配置为 ipvs</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>`,5),q={href:"https://github.com/bitnami/charts/tree/main/bitnami/metallb",target:"_blank",rel:"noopener noreferrer"},B=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[a("helm repo "),e("span",{class:"token function"},"add"),a(` metallb https://metallb.github.io/metallb
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),E=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[a("helm "),e("span",{class:"token function"},"install"),a(" metallb metallb/metallb "),e("span",{class:"token parameter variable"},"--version"),a(),e("span",{class:"token number"},"0.13"),a(`.12
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),C=e("p",null,null,-1),F=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[a("helm pull metallb/metallb "),e("span",{class:"token parameter variable"},"--version"),a(),e("span",{class:"token number"},"0.13"),a(`.12

`),e("span",{class:"token function"},"tar"),a(),e("span",{class:"token parameter variable"},"-zxvf"),a(` metallb-0.13.12.tgz 

helm upgrade `),e("span",{class:"token parameter variable"},"--install"),a(" metallb "),e("span",{class:"token builtin class-name"},"."),a(),e("span",{class:"token parameter variable"},"-f"),a(" values.yaml "),e("span",{class:"token parameter variable"},"-n"),a(` kube-system --create-namespace


`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),T=i(`<h2 id="地址池配置" tabindex="-1"><a class="header-anchor" href="#地址池配置" aria-hidden="true">#</a> 地址池配置</h2><blockquote><p>Layer2 模式进行配置，需要创建一个 IPAddressPool 资源对象，用来指定用于分配的 IP 池，这部分一定要在 DHCP 服务器上做 IP 资源的保留，避免IP冲突，引发异常</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> pool.yaml</span>
apiVersion: metallb.io/v1beta1
kind: IPAddressPool
metadata:
  name: ip-pool
  namespace: metallb-system
spec:
  addresses:
    - 192.168.2.149-192.168.2.150        #分配给LB的IP池
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>广播</p><blockquote><p>广播声明，可以关联上面的 IP 池对象，这样会使用关联的 IP 池地址。为了通告来自 IPAddressPool 的 IP，L2Advertisement 实例必须关联到 IPAddressPool。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span>  advertise.yaml</span>
apiVersion: metallb.io/v1beta1
kind: L2Advertisement
metadata:
  name: l2adver
  namespace: metallb-system
spec:
  ipAddressPools:
    - ip-pool
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl apply -f pool.yaml
kubectl apply -f  advertise.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function V(N,O){const s=t("ExternalLinkIcon"),r=t("Tabs");return p(),m("div",null,[v,e("p",null,[e("a",h,[a("官方文档"),n(s)])]),e("p",null,[e("a",k,[a("项目地址"),n(s)])]),_,g,y,e("ol",null,[f,e("li",null,[e("a",x,[a("CNI兼容自查"),n(s)])]),P,I,A]),L,e("p",null,[e("a",q,[a("bitnami - metallb"),n(s)])]),n(r,{id:"61",data:[{title:"在线安装"},{title:"离线安装"}]},{tab0:l(({title:o,value:d,isActive:c})=>[B,E,C]),tab1:l(({title:o,value:d,isActive:c})=>[F]),_:1}),T])}const M=u(b,[["render",V],["__file","metallb.html.vue"]]);export{M as default};
