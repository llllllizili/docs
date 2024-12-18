import{_ as s,c as a,o as n,f as i}from"./app-BfCDUtKQ.js";const e={},l=i(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><h2 id="时间同步" tabindex="-1"><a class="header-anchor" href="#时间同步"><span>时间同步</span></a></h2><p><code>ntpdate</code> 在9上已经不可用了，使用<code>chrony</code></p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">rpm</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -qa</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> | </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> #启用时间同步</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">timedatectl</span><span style="color:#98C379;--shiki-dark:#98C379;"> set-ntp</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> true</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#禁用时间同步</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">timedatectl</span><span style="color:#98C379;--shiki-dark:#98C379;"> set-ntp</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> false</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 未安装则安装</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">yum</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#98C379;--shiki-dark:#98C379;"> chrony</span></span></code></pre></div><p>开机启动</p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">systemctl</span><span style="color:#98C379;--shiki-dark:#98C379;"> enable</span><span style="color:#98C379;--shiki-dark:#98C379;"> chronyd</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --now</span></span></code></pre></div><p>配置</p><p><code>vim /etc/chrony.conf </code></p><div class="language-conf" data-ext="conf" data-title="conf"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span># Use public servers from the pool.ntp.org project.</span></span>
<span class="line"><span># Please consider joining the pool (https://www.pool.ntp.org/join.html).</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 时间服务器地址，若作为</span></span>
<span class="line"><span>pool 2.centos.pool.ntp.org iburst </span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>~</span></span></code></pre></div><p>同步</p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#启用时间同步</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">timedatectl</span><span style="color:#98C379;--shiki-dark:#98C379;"> set-ntp</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> true</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#禁用时间同步</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">timedatectl</span><span style="color:#98C379;--shiki-dark:#98C379;"> set-ntp</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> false</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#同步硬件时间</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">hwclock</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -w</span></span></code></pre></div><h2 id="ip设置" tabindex="-1"><a class="header-anchor" href="#ip设置"><span>IP设置</span></a></h2><p>centos 9 通过 <code>nmcli</code> 管理网络，且之前IP 的配置文件在<code>/etc/sysconfig/network-script</code> 目录下已不存在。</p><p>最新的配置文件地址为<code>/etc/NetworkManager/system-connections/网卡名</code>, 我的网卡就是 <code>enp0s5</code></p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@k8s ~]# ip addr</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">1:</span><span style="color:#98C379;--shiki-dark:#98C379;"> lo:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#98C379;--shiki-dark:#98C379;">LOOPBACK,UP,LOWER_U</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">P&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">mtu</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 65536</span><span style="color:#98C379;--shiki-dark:#98C379;"> qdisc</span><span style="color:#98C379;--shiki-dark:#98C379;"> noqueue</span><span style="color:#98C379;--shiki-dark:#98C379;"> state</span><span style="color:#98C379;--shiki-dark:#98C379;"> UNKNOWN</span><span style="color:#98C379;--shiki-dark:#98C379;"> group</span><span style="color:#98C379;--shiki-dark:#98C379;"> default</span><span style="color:#98C379;--shiki-dark:#98C379;"> qlen</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1000</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    link/loopback</span><span style="color:#98C379;--shiki-dark:#98C379;"> 00:00:00:00:00:00</span><span style="color:#98C379;--shiki-dark:#98C379;"> brd</span><span style="color:#98C379;--shiki-dark:#98C379;"> 00:00:00:00:00:00</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    inet</span><span style="color:#98C379;--shiki-dark:#98C379;"> 127.0.0.1/8</span><span style="color:#98C379;--shiki-dark:#98C379;"> scope</span><span style="color:#98C379;--shiki-dark:#98C379;"> host</span><span style="color:#98C379;--shiki-dark:#98C379;"> lo</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">       valid_lft</span><span style="color:#98C379;--shiki-dark:#98C379;"> forever</span><span style="color:#98C379;--shiki-dark:#98C379;"> preferred_lft</span><span style="color:#98C379;--shiki-dark:#98C379;"> forever</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    inet6</span><span style="color:#98C379;--shiki-dark:#98C379;"> ::1/128</span><span style="color:#98C379;--shiki-dark:#98C379;"> scope</span><span style="color:#98C379;--shiki-dark:#98C379;"> host</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">       valid_lft</span><span style="color:#98C379;--shiki-dark:#98C379;"> forever</span><span style="color:#98C379;--shiki-dark:#98C379;"> preferred_lft</span><span style="color:#98C379;--shiki-dark:#98C379;"> forever</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">2:</span><span style="color:#98C379;--shiki-dark:#98C379;"> enp0s5:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#98C379;--shiki-dark:#98C379;">BROADCAST,MULTICAST,UP,LOWER_U</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">P&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">mtu</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1500</span><span style="color:#98C379;--shiki-dark:#98C379;"> qdisc</span><span style="color:#98C379;--shiki-dark:#98C379;"> fq_codel</span><span style="color:#98C379;--shiki-dark:#98C379;"> state</span><span style="color:#98C379;--shiki-dark:#98C379;"> UP</span><span style="color:#98C379;--shiki-dark:#98C379;"> group</span><span style="color:#98C379;--shiki-dark:#98C379;"> default</span><span style="color:#98C379;--shiki-dark:#98C379;"> qlen</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1000</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    link/ether</span><span style="color:#98C379;--shiki-dark:#98C379;"> 00:1c:42:85:d9:a5</span><span style="color:#98C379;--shiki-dark:#98C379;"> brd</span><span style="color:#98C379;--shiki-dark:#98C379;"> ff:ff:ff:ff:ff:ff</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    inet</span><span style="color:#98C379;--shiki-dark:#98C379;"> 172.100.1.3/24</span><span style="color:#98C379;--shiki-dark:#98C379;"> brd</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 172.100.1.255</span><span style="color:#98C379;--shiki-dark:#98C379;"> scope</span><span style="color:#98C379;--shiki-dark:#98C379;"> global</span><span style="color:#98C379;--shiki-dark:#98C379;"> dynamic</span><span style="color:#98C379;--shiki-dark:#98C379;"> noprefixroute</span><span style="color:#98C379;--shiki-dark:#98C379;"> enp0s5</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">       valid_lft</span><span style="color:#98C379;--shiki-dark:#98C379;"> 1513sec</span><span style="color:#98C379;--shiki-dark:#98C379;"> preferred_lft</span><span style="color:#98C379;--shiki-dark:#98C379;"> 1513sec</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    inet6</span><span style="color:#98C379;--shiki-dark:#98C379;"> fe80::21c:42ff:fe85:d9a5/64</span><span style="color:#98C379;--shiki-dark:#98C379;"> scope</span><span style="color:#98C379;--shiki-dark:#98C379;"> link</span><span style="color:#98C379;--shiki-dark:#98C379;"> noprefixroute</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">       valid_lft</span><span style="color:#98C379;--shiki-dark:#98C379;"> forever</span><span style="color:#98C379;--shiki-dark:#98C379;"> preferred_lft</span><span style="color:#98C379;--shiki-dark:#98C379;"> forever</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">3:</span><span style="color:#98C379;--shiki-dark:#98C379;"> docker0:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#98C379;--shiki-dark:#98C379;">NO-CARRIER,BROADCAST,MULTICAST,U</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">P&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">mtu</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1500</span><span style="color:#98C379;--shiki-dark:#98C379;"> qdisc</span><span style="color:#98C379;--shiki-dark:#98C379;"> noqueue</span><span style="color:#98C379;--shiki-dark:#98C379;"> state</span><span style="color:#98C379;--shiki-dark:#98C379;"> DOWN</span><span style="color:#98C379;--shiki-dark:#98C379;"> group</span><span style="color:#98C379;--shiki-dark:#98C379;"> default</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    link/ether</span><span style="color:#98C379;--shiki-dark:#98C379;"> 02:42:86:c4:a5:b2</span><span style="color:#98C379;--shiki-dark:#98C379;"> brd</span><span style="color:#98C379;--shiki-dark:#98C379;"> ff:ff:ff:ff:ff:ff</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    inet</span><span style="color:#98C379;--shiki-dark:#98C379;"> 172.17.0.1/16</span><span style="color:#98C379;--shiki-dark:#98C379;"> brd</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 172.17.255.255</span><span style="color:#98C379;--shiki-dark:#98C379;"> scope</span><span style="color:#98C379;--shiki-dark:#98C379;"> global</span><span style="color:#98C379;--shiki-dark:#98C379;"> docker0</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">       valid_lft</span><span style="color:#98C379;--shiki-dark:#98C379;"> forever</span><span style="color:#98C379;--shiki-dark:#98C379;"> preferred_lft</span><span style="color:#98C379;--shiki-dark:#98C379;"> forever</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@k8s ~]# ls /etc/NetworkManager/system-connections</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">enp0s5.nmconnection</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置参考</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>[connection]</span></span>
<span class="line"><span>id=ens160</span></span>
<span class="line"><span>uuid=5d896bda-c62a-3eb1-bc29-7c031232db86</span></span>
<span class="line"><span>type=ethernet</span></span>
<span class="line"><span>autoconnect-priority=-999</span></span>
<span class="line"><span>interface-name=ens160</span></span>
<span class="line"><span>timestamp=1670979495</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[ethernet]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[ipv4]</span></span>
<span class="line"><span># method=auto</span></span>
<span class="line"><span>method=manual</span></span>
<span class="line"><span># 地址1 = ip 子网掩码 网关</span></span>
<span class="line"><span>address1=192.168.42.188/24,192.168.42.2</span></span>
<span class="line"><span># DNS地址, 用；隔开</span></span>
<span class="line"><span>dns=114.114.114.114;8.8.8.8  </span></span>
<span class="line"><span>[ipv6]</span></span>
<span class="line"><span>addr-gen-mode=eui64</span></span>
<span class="line"><span>method=auto</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[proxy]</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启网卡</p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">nmcli</span><span style="color:#98C379;--shiki-dark:#98C379;"> c</span><span style="color:#98C379;--shiki-dark:#98C379;"> reload</span><span style="color:#98C379;--shiki-dark:#98C379;"> enp0s5</span></span></code></pre></div>`,19),p=[l];function o(r,t){return n(),a("div",null,p)}const d=s(e,[["render",o],["__file","Centos9.html.vue"]]),k=JSON.parse(`{"path":"/ops/linux/Centos9.html","title":"Centos 9 init","lang":"zh-CN","frontmatter":{"article":false,"title":"Centos 9 init","order":11,"category":["linux"],"tag":["CentOS 9"],"index":true,"description":"时间同步 ntpdate 在9上已经不可用了，使用chrony 开机启动 配置 vim /etc/chrony.conf 同步 IP设置 centos 9 通过 nmcli 管理网络，且之前IP 的配置文件在/etc/sysconfig/network-script 目录下已不存在。 最新的配置文件地址为/etc/NetworkManager/syst...","head":[["meta",{"property":"og:url","content":"https://docs.lizili.online/ops/linux/Centos9.html"}],["meta",{"property":"og:site_name","content":"lzz's Blog"}],["meta",{"property":"og:title","content":"Centos 9 init"}],["meta",{"property":"og:description","content":"时间同步 ntpdate 在9上已经不可用了，使用chrony 开机启动 配置 vim /etc/chrony.conf 同步 IP设置 centos 9 通过 nmcli 管理网络，且之前IP 的配置文件在/etc/sysconfig/network-script 目录下已不存在。 最新的配置文件地址为/etc/NetworkManager/syst..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-15T12:36:31.000Z"}],["meta",{"property":"article:author","content":"z"}],["meta",{"property":"article:tag","content":"CentOS 9"}],["meta",{"property":"article:modified_time","content":"2024-03-15T12:36:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Centos 9 init\\",\\"description\\":\\"时间同步 ntpdate 在9上已经不可用了，使用chrony 开机启动 配置 vim /etc/chrony.conf 同步 IP设置 centos 9 通过 nmcli 管理网络，且之前IP 的配置文件在/etc/sysconfig/network-script 目录下已不存在。 最新的配置文件地址为/etc/NetworkManager/syst...\\"}"]]},"headers":[{"level":2,"title":"时间同步","slug":"时间同步","link":"#时间同步","children":[]},{"level":2,"title":"IP设置","slug":"ip设置","link":"#ip设置","children":[]}],"git":{"createdTime":1710506191000,"updatedTime":1710506191000,"contributors":[{"name":"lizili","email":"cn.zili.lee@outlook.com","commits":1}]},"readingTime":{"minutes":1.38,"words":413},"filePathRelative":"ops/linux/Centos9.md","localizedDate":"2024年3月15日","excerpt":"\\n<h2>时间同步</h2>\\n<p><code>ntpdate</code> 在9上已经不可用了，使用<code>chrony</code></p>\\n<div class=\\"language-shell\\" data-ext=\\"shell\\" data-title=\\"shell\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">rpm</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> -qa</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> | </span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">grep</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> #启用时间同步</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">timedatectl</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> set-ntp</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> true</span></span>\\n<span class=\\"line\\"><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#禁用时间同步</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">timedatectl</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> set-ntp</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> false</span><span style=\\"color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">  # 未安装则安装</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">yum</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> install</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> chrony</span></span></code></pre>\\n</div>","autoDesc":true}`);export{d as comp,k as data};