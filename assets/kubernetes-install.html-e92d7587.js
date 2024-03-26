import{_ as n,X as s,Y as a,$ as e}from"./framework-7663974c.js";const i="/assets/2023-12-04-15-48-55-120cb5b6.png",l={},t=e(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h2 id="前置准备" tabindex="-1"><a class="header-anchor" href="#前置准备" aria-hidden="true">#</a> 前置准备</h2><ol><li>CentOS * 3</li><li>网络策略互通</li><li>互联网访问开通</li><li>节点唯一主机名、mac</li></ol><h3 id="yum-配置" tabindex="-1"><a class="header-anchor" href="#yum-配置" aria-hidden="true">#</a> yum 配置</h3><p>yum</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-o</span> /etc/yum.repos.d/Centos-7.repo http://mirrors.aliyun.com/repo/Centos-7.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>docker</p><blockquote><p>k8s依赖容器运行时,v1.24 弃用 dockershim,可直接使用使用containerd</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-o</span> /etc/yum.repos.d/docker-ce.repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kubernetes</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/yum.repos.d/kubernetes.repo</span>
[kubernetes]
name=Kubernetes
baseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=0
repo_gpgcheck=0
gpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg
       http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>yum 缓存</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum clean all <span class="token operator">&amp;&amp;</span> yum makecache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装工具" tabindex="-1"><a class="header-anchor" href="#安装工具" aria-hidden="true">#</a> 安装工具</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> tree <span class="token function">vim</span> <span class="token function">wget</span> bash-completion bash-completion-extras  net-tools  <span class="token function">unzip</span> <span class="token function">nc</span> nmap telnet ntpdate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="时间设置" tabindex="-1"><a class="header-anchor" href="#时间设置" aria-hidden="true">#</a> 时间设置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>timedatectl set-timezone Asia/Shanghai

(echo &quot;0 01 23 * * ntpdate ntp1.aliyun.com&quot; ; crontab -l )| crontab

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="防火墙-swap-selinux" tabindex="-1"><a class="header-anchor" href="#防火墙-swap-selinux" aria-hidden="true">#</a> 防火墙 swap selinux</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 如果防火墙是running，关闭防火墙</span>
<span class="token function">sudo</span> systemctl disable firewalld <span class="token operator">&amp;&amp;</span> systemctl stop firewalld

<span class="token comment"># 关闭SELinux </span>
<span class="token function">sudo</span> setenforce <span class="token number">0</span>
<span class="token function">sudo</span> <span class="token function">sed</span> <span class="token parameter variable">-ri</span> <span class="token string">&#39;s#(SELINUX=).*#\\1disabled#&#39;</span> /etc/selinux/config

<span class="token comment"># 关闭swap。避免 kubelet启动失败</span>
<span class="token function">sudo</span> swapoff <span class="token parameter variable">-a</span>

<span class="token comment"># 永久关闭swap</span>
<span class="token function">sudo</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;/ swap / s/^\\(.*\\)$/#\\1/g&#39;</span> /etc/fstab

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ipvs" tabindex="-1"><a class="header-anchor" href="#ipvs" aria-hidden="true">#</a> ipvs</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 加载ipvs模块</span>
modprobe br_netfilter
modprobe -- ip_vs
modprobe -- ip_vs_sh
modprobe -- ip_vs_rr
modprobe -- ip_vs_wrr
modprobe -- nf_conntrack_ipv4

<span class="token comment"># 验证ip_vs模块</span>
lsmod <span class="token operator">|</span><span class="token function">grep</span> ip_vs
ip_vs_wrr              <span class="token number">12697</span>  <span class="token number">0</span> 
ip_vs_rr               <span class="token number">12600</span>  <span class="token number">0</span> 
ip_vs_sh               <span class="token number">12688</span>  <span class="token number">0</span> 
ip_vs                 <span class="token number">145458</span>  <span class="token number">6</span> ip_vs_rr,ip_vs_sh,ip_vs_wrr
nf_conntrack          <span class="token number">139264</span>  <span class="token number">2</span> ip_vs,nf_conntrack_ipv4
libcrc32c              <span class="token number">12644</span>  <span class="token number">3</span> xfs,ip_vs,nf_conntrack

<span class="token comment"># 内核文件 </span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span>  /etc/sysctl.d/k8s.conf</span>
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward=1
vm.max_map_count=262144
EOF</span>

<span class="token comment"># 生效并验证内核优化</span>
<span class="token function">sysctl</span> <span class="token parameter variable">-p</span> /etc/sysctl.d/k8s.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker" aria-hidden="true">#</a> 安装docker</h2><blockquote><p>或安装containerd。关注配置 /etc/containerd/config.toml</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> docker-ce <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置docker</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/docker/daemon.json</span>
{
    &quot;registry-mirrors&quot;: [
        &quot;https://registry.hub.docker.com&quot;,
        &quot;http://hub-mirror.c.163.com&quot;,
        &quot;https://docker.mirrors.ustc.edu.cn&quot;,
        &quot;https://registry.docker-cn.com&quot;
    ],
    # &quot;exec-opts&quot;: [&quot;native.cgroupdriver=systemd&quot;],
    &quot;data-root&quot;: &quot;/data/docker&quot;,
    &quot;log-driver&quot;: &quot;json-file&quot;,
    &quot;log-opts&quot;: {&quot;max-size&quot;:&quot;10m&quot;, &quot;max-file&quot;:&quot;3&quot;}
} 
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Kubernetes 推荐使用 systemd 来替代 cgroupfs，是因为 systemd 是 Kubernetes 自带的 cgroup 管理器，负责为每个进程分配 cgroupfs，但 Docker 的 cgroup driver 默认是 cgroupfs，这样就同时运行了两个 cgroup 控制管理器。当资源有压力时，有可能会出现不稳定的情况。</p></blockquote><p>如果不修改配置，会在 kubeadm init 时提示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>WARNING IsDockerSystemdCheck<span class="token punctuation">]</span>: detected <span class="token string">&quot;cgroupfs&quot;</span> as the Docker cgroup driver. The recommended driver is <span class="token string">&quot;systemd&quot;</span><span class="token builtin class-name">.</span> Please follow the guide at https://kubernetes.io/docs/setup/cri/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl start docker &amp;&amp; systemctl enable docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>验证</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>pause 镜像地址更换</p><blockquote><p>为了防止安装过程中出现pause镜像下载失败的问题，建议运行containerd config dump &gt; /etc/containerd/config.toml 命令，将当前配置导出到文件，并修改sandbox_image配置。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 修改配置文件/etc/containerd/config.toml， 更改sandbox_image配置</span>
<span class="token punctuation">[</span>plugins<span class="token punctuation">]</span>
  <span class="token punctuation">[</span>plugins.<span class="token string">&quot;io.containerd.grpc.v1.cri&quot;</span><span class="token punctuation">]</span>
    sandbox_image <span class="token operator">=</span> <span class="token string">&quot;registry.aliyuncs.com/google_containers/pause:3.9&quot;</span>

<span class="token comment">## 如果没有/etc/containerd/config.toml文件，将默认配置导出到/etc/containerd/config.toml。</span>
containerd config default <span class="token operator">&gt;</span> /etc/containerd/config.toml

<span class="token comment">## 重启containerd</span>
systemctl restart containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装kubeadm-kubelet-kubectl" tabindex="-1"><a class="header-anchor" href="#安装kubeadm-kubelet-kubectl" aria-hidden="true">#</a> 安装kubeadm, kubelet, kubectl</h2><p>kubeadm：部署k8s集群的工具</p><p>kubelet: 该组件在集群中的所有机器上运行，并执行启动pod和容器之类的任务。</p><p>kubectl: 与集群通信的工具。可以只在master节点上安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> kubelet kubeadm kubectl <span class="token parameter variable">--disableexcludes</span><span class="token operator">=</span>kubernetes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开机启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> kubelet.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装k8s" tabindex="-1"><a class="header-anchor" href="#安装k8s" aria-hidden="true">#</a> 安装K8S</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> kubeadm init <span class="token punctuation">\\</span>
  --apiserver-advertise-address<span class="token operator">=</span><span class="token number">192.168</span>.2.133 <span class="token punctuation">\\</span>
  --image-repository registry.aliyuncs.com/google_containers <span class="token punctuation">\\</span>
  --kubernetes-version v1.28.0 <span class="token punctuation">\\</span>
  --service-cidr<span class="token operator">=</span><span class="token number">10.96</span>.0.0/12 <span class="token punctuation">\\</span>
  --pod-network-cidr<span class="token operator">=</span><span class="token number">10.244</span>.0.0/16

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装成功提示</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>To start using your cluster, you need to run the following as a regular user:

  <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token environment constant">$HOME</span>/.kube
  <span class="token function">sudo</span> <span class="token function">cp</span> <span class="token parameter variable">-i</span> /etc/kubernetes/admin.conf <span class="token environment constant">$HOME</span>/.kube/config
  <span class="token function">sudo</span> <span class="token function">chown</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span><span class="token builtin class-name">:</span><span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-g</span><span class="token variable">)</span></span> <span class="token environment constant">$HOME</span>/.kube/config

Alternatively, <span class="token keyword">if</span> you are the root user, you can run:

  <span class="token builtin class-name">export</span> <span class="token assign-left variable">KUBECONFIG</span><span class="token operator">=</span>/etc/kubernetes/admin.conf


Then you can <span class="token function">join</span> any number of worker nodes by running the following on each as root:

kubeadm <span class="token function">join</span> <span class="token number">192.168</span>.2.133:6443 <span class="token parameter variable">--token</span> dm4r9m.xjlx0z6e4w54uxze <span class="token punctuation">\\</span>
	--discovery-token-ca-cert-hash sha256:7c12c7c06ea525e6a16fc8b7f62416af11ed36d266eea348606fbbc49f6cd1f3 
<span class="token punctuation">[</span>root@zili01 install_k8s<span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据提示执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>To start using your cluster, you need to run the following as a regular user:

  <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token environment constant">$HOME</span>/.kube
  <span class="token function">sudo</span> <span class="token function">cp</span> <span class="token parameter variable">-i</span> /etc/kubernetes/admin.conf <span class="token environment constant">$HOME</span>/.kube/config
  <span class="token function">sudo</span> <span class="token function">chown</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span><span class="token builtin class-name">:</span><span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-g</span><span class="token variable">)</span></span> <span class="token environment constant">$HOME</span>/.kube/config

Alternatively, <span class="token keyword">if</span> you are the root user, you can run:

  <span class="token builtin class-name">export</span> <span class="token assign-left variable">KUBECONFIG</span><span class="token operator">=</span>/etc/kubernetes/admin.conf


我使用的roor用户，所以执行：
<span class="token builtin class-name">export</span> <span class="token assign-left variable">KUBECONFIG</span><span class="token operator">=</span>/etc/kubernetes/admin.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>节点添加, init成功后，会有此提示</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubeadm <span class="token function">join</span> <span class="token number">192.168</span>.2.133:6443 <span class="token parameter variable">--token</span> dm4r9m.xjlx0z6e4w54uxze <span class="token punctuation">\\</span>
	--discovery-token-ca-cert-hash sha256:7c12c7c06ea525e6a16fc8b7f62416af11ed36d266eea348606fbbc49f6cd1f3 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查node, 未安装网络插件CNI，所以NotReady</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@zili01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get node -A</span>
NAME     STATUS     ROLES           AGE   VERSION
zili01   NotReady   control-plane   23h   v1.28.2
zili02   NotReady   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>          23h   v1.28.2
zili03   NotReady   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>          23h   v1.28.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装网络插件" tabindex="-1"><a class="header-anchor" href="#安装网络插件" aria-hidden="true">#</a> 安装网络插件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改文件中，<code>net-conf.json.Network</code>， 与init时指定的<code>--pod-network-cidr=10.244.0.0/16</code> 一致</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>data:
  cni-conf.json: <span class="token operator">|</span>
    <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cbr0&quot;</span>,
      <span class="token string">&quot;cniVersion&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;0.3.1&quot;</span>,
      <span class="token string">&quot;plugins&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;flannel&quot;</span>,
          <span class="token string">&quot;delegate&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;hairpinMode&quot;</span><span class="token builtin class-name">:</span> true,
            <span class="token string">&quot;isDefaultGateway&quot;</span><span class="token builtin class-name">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>,
        <span class="token punctuation">{</span>
          <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;portmap&quot;</span>,
          <span class="token string">&quot;capabilities&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;portMappings&quot;</span><span class="token builtin class-name">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  net-conf.json: <span class="token operator">|</span>
    <span class="token punctuation">{</span>
      <span class="token string">&quot;Network&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;10.244.0.0/16&quot;</span>,
      <span class="token string">&quot;Backend&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;Type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vxlan&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部署插件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@zili01 install_k8s<span class="token punctuation">]</span><span class="token comment"># kubectl apply -f kube-flannel.yml</span>
namespace/kube-flannel created
clusterrole.rbac.authorization.k8s.io/flannel created
clusterrolebinding.rbac.authorization.k8s.io/flannel created
serviceaccount/flannel created
configmap/kube-flannel-cfg created
daemonset.apps/kube-flannel-ds created

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@zili01 install_k8s<span class="token punctuation">]</span><span class="token comment"># kubectl -n kube-system get pod -o wide</span>
NAME                             READY   STATUS    RESTARTS   AGE   IP              NODE     NOMINATED NODE   READINESS GATES
coredns-66f779496c-hntt2         <span class="token number">1</span>/1     Running   <span class="token number">0</span>          23h   <span class="token number">10.244</span>.1.2      zili02   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
coredns-66f779496c-n549l         <span class="token number">1</span>/1     Running   <span class="token number">0</span>          23h   <span class="token number">10.244</span>.1.3      zili02   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
etcd-zili01                      <span class="token number">1</span>/1     Running   <span class="token number">0</span>          23h   <span class="token number">192.168</span>.2.133   zili01   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
kube-apiserver-zili01            <span class="token number">1</span>/1     Running   <span class="token number">0</span>          23h   <span class="token number">192.168</span>.2.133   zili01   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
kube-controller-manager-zili01   <span class="token number">1</span>/1     Running   <span class="token number">1</span>          23h   <span class="token number">192.168</span>.2.133   zili01   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
kube-proxy-hfjc4                 <span class="token number">1</span>/1     Running   <span class="token number">0</span>          23h   <span class="token number">192.168</span>.2.134   zili02   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
kube-proxy-kpkf7                 <span class="token number">1</span>/1     Running   <span class="token number">0</span>          23h   <span class="token number">192.168</span>.2.135   zili03   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
kube-proxy-xwpqj                 <span class="token number">1</span>/1     Running   <span class="token number">0</span>          23h   <span class="token number">192.168</span>.2.133   zili01   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
kube-scheduler-zili01            <span class="token number">1</span>/1     Running   <span class="token number">1</span>          23h   <span class="token number">192.168</span>.2.133   zili01   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
<span class="token punctuation">[</span>root@zili01 install_k8s<span class="token punctuation">]</span><span class="token comment"># kubectl get nodes</span>
NAME     STATUS   ROLES           AGE   VERSION
zili01   Ready    control-plane   23h   v1.28.2
zili02   Ready    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>          23h   v1.28.2
zili03   Ready    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>          23h   v1.28.2

<span class="token punctuation">[</span>root@zili01 install_k8s<span class="token punctuation">]</span><span class="token comment"># kubectl create deployment nginx --image=nginx</span>
deployment.apps/nginx created
<span class="token punctuation">[</span>root@zili01 install_k8s<span class="token punctuation">]</span><span class="token comment"># kubectl expose deployment nginx --port=80 --type=NodePort</span>
service/nginx exposed
<span class="token punctuation">[</span>root@zili01 install_k8s<span class="token punctuation">]</span><span class="token comment"># kubectl get svc -A</span>
NAMESPACE     NAME         TYPE        CLUSTER-IP     EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>                  AGE
default       kubernetes   ClusterIP   <span class="token number">10.96</span>.0.1      <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>/TCP                  2d15h
default       nginx        NodePort    <span class="token number">10.96</span>.30.102   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">80</span>:30892/TCP             3s
kube-system   kube-dns     ClusterIP   <span class="token number">10.96</span>.0.10     <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">53</span>/UDP,53/TCP,9153/TCP   2d15h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问 节点地址 + 端口</p><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#生成一条永久有效的token</span>
kubeadm token create <span class="token parameter variable">--ttl</span> <span class="token number">0</span>
<span class="token comment">#查询token</span>
kubeadm token list
<span class="token comment">#获取ca证书sha256编码hash值</span>
openssl x509 <span class="token parameter variable">-pubkey</span> <span class="token parameter variable">-in</span> /etc/kubernetes/pki/ca.crt <span class="token operator">|</span> openssl rsa <span class="token parameter variable">-pubin</span> <span class="token parameter variable">-outform</span> der <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null <span class="token operator">|</span> openssl dgst <span class="token parameter variable">-sha256</span> <span class="token parameter variable">-hex</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/^.* //&#39;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="污点删除" tabindex="-1"><a class="header-anchor" href="#污点删除" aria-hidden="true">#</a> 污点删除</h3><p>查看污点</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@zili01 install_k8s<span class="token punctuation">]</span><span class="token comment"># kubectl describe nodes  |grep Taints</span>
Taints:             node-role.kubernetes.io/control-plane:NoSchedule
Taints:             <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Taints:             <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>master节点，默认不参与调度的，可通过污点删除，让master参与调度</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl taint nodes <span class="token parameter variable">--all</span> node-role.kubernetes.io/control-plane-
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>不建议删除。建议master 节点配置降低，和node分开部署，各司其职</p></blockquote>`,71),o=[t];function c(p,r){return s(),a("div",null,o)}const u=n(l,[["render",c],["__file","kubernetes-install.html.vue"]]);export{u as default};
