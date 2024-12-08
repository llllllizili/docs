import{_ as n,X as e,Y as s,a3 as a}from"./framework-abbf9d44.js";const i={},l=a(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h2 id="时间同步" tabindex="-1"><a class="header-anchor" href="#时间同步" aria-hidden="true">#</a> 时间同步</h2><p><code>ntpdate</code> 在9上已经不可用了，使用<code>chrony</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token comment">#启用时间同步</span>
timedatectl set-ntp <span class="token boolean">true</span>
<span class="token comment">#禁用时间同步</span>
timedatectl set-ntp <span class="token boolean">false</span>  <span class="token comment"># 未安装则安装</span>

yum <span class="token function">install</span> chrony
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开机启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> chronyd <span class="token parameter variable">--now</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置</p><p><code>vim /etc/chrony.conf </code></p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code># Use public servers from the pool.ntp.org project.
# Please consider joining the pool (https://www.pool.ntp.org/join.html).

## 时间服务器地址，若作为
pool 2.centos.pool.ntp.org iburst 
...
...
~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同步</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#启用时间同步</span>
timedatectl set-ntp <span class="token boolean">true</span>
<span class="token comment">#禁用时间同步</span>
timedatectl set-ntp <span class="token boolean">false</span>
<span class="token comment">#同步硬件时间</span>
hwclock <span class="token parameter variable">-w</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ip设置" tabindex="-1"><a class="header-anchor" href="#ip设置" aria-hidden="true">#</a> IP设置</h2><p>centos 9 通过 <code>nmcli</code> 管理网络，且之前IP 的配置文件在<code>/etc/sysconfig/network-script</code> 目录下已不存在。</p><p>最新的配置文件地址为<code>/etc/NetworkManager/system-connections/网卡名</code>, 我的网卡就是 <code>enp0s5</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s ~<span class="token punctuation">]</span><span class="token comment"># ip addr</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope <span class="token function">host</span>
       valid_lft forever preferred_lft forever
<span class="token number">2</span>: enp0s5: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc fq_codel state UP group default qlen <span class="token number">1000</span>
    link/ether 00:1c:42:85:d9:a5 brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">172.100</span>.1.3/24 brd <span class="token number">172.100</span>.1.255 scope global dynamic noprefixroute enp0s5
       valid_lft 1513sec preferred_lft 1513sec
    inet6 fe80::21c:42ff:fe85:d9a5/64 scope <span class="token function">link</span> noprefixroute
       valid_lft forever preferred_lft forever
<span class="token number">3</span>: docker0: <span class="token operator">&lt;</span>NO-CARRIER,BROADCAST,MULTICAST,UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue state DOWN group default
    link/ether 02:42:86:c4:a5:b2 brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">172.17</span>.0.1/16 brd <span class="token number">172.17</span>.255.255 scope global docker0
       valid_lft forever preferred_lft forever
<span class="token punctuation">[</span>root@k8s ~<span class="token punctuation">]</span><span class="token comment"># ls /etc/NetworkManager/system-connections</span>
enp0s5.nmconnection
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置参考</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>[connection]
id=ens160
uuid=5d896bda-c62a-3eb1-bc29-7c031232db86
type=ethernet
autoconnect-priority=-999
interface-name=ens160
timestamp=1670979495

[ethernet]

[ipv4]
# method=auto
method=manual
# 地址1 = ip 子网掩码 网关
address1=192.168.42.188/24,192.168.42.2
# DNS地址, 用；隔开
dns=114.114.114.114;8.8.8.8  
[ipv6]
addr-gen-mode=eui64
method=auto

[proxy]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启网卡</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nmcli c reload enp0s5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19),d=[l];function c(r,t){return e(),s("div",null,d)}const p=n(i,[["render",c],["__file","Centos9.html.vue"]]);export{p as default};
