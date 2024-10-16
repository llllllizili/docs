import{_ as n,X as s,Y as a,a3 as e}from"./framework-abbf9d44.js";const i={},l=e(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><div class="hint-container danger"><p class="hint-container-title">请注意</p><p>本文内容可能已过时，请自行甄别。</p></div><blockquote><p>Keepalived使用的vrrp协议方式，虚拟路由冗余协议 (Virtual Router Redundancy Protocol，简称VRRP).</p></blockquote><p>Keepalived模拟路由器的高可用，Heartbeat或Corosync的目的是实现Service的高可用。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>如无特殊需求,直接yum安装<code>yum install keepalived</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>主配置文件：/etc/keepalived/keepalived.conf
主程序文件：/usr/sbin/keepalived
Unit File：keepalived.service
Unit File的环境配置文件：/etc/sysconfig/keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单主模式" tabindex="-1"><a class="header-anchor" href="#单主模式" aria-hidden="true">#</a> 单主模式</h2><p>10.1.27.23 主,27.24 备,vip:27.21</p><h3 id="master" tabindex="-1"><a class="header-anchor" href="#master" aria-hidden="true">#</a> master</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master keepalived<span class="token punctuation">]</span><span class="token comment"># cat keepalived.conf</span>
<span class="token operator">!</span> Configuration File <span class="token keyword">for</span> keepalived

global_defs <span class="token punctuation">{</span>   <span class="token comment">#全局配置</span>
   notification_email <span class="token punctuation">{</span>
   	lizili@xxxxxx.com   <span class="token comment">#出问题是,接收人邮件</span>
   <span class="token punctuation">}</span>
   notification_email_from lizili@xxxxxx.com <span class="token comment">#发件人邮箱</span>
   smtp_server smtp.xxxxxx.com
   smtp_connect_timeout <span class="token number">30</span>
   router_id LVS_DEVEL
<span class="token punctuation">}</span>
<span class="token comment"># 这个邮件比较鸡肋,建议通过脚本发送.</span>

vrrp_instance VI_1 <span class="token punctuation">{</span>       <span class="token comment">#vrrp命名,多个的时候,命名要不一致.</span>
    state MASTER         <span class="token comment">#虚拟机路由器状态MASTER/BACKUP</span>
    interface eno16777984  <span class="token comment">#通过那个网卡发送vrrp广播</span>
    virtual_router_id <span class="token number">51</span> <span class="token comment">#虚拟路由器ID,如果有多个VI要注意区分这个ID</span>
    priority <span class="token number">100</span>  <span class="token comment">#优先级,越大越优先(取值范围1-255)</span>
    advert_int <span class="token number">1</span> <span class="token comment">#广播时间间隔,默认1s</span>
    authentication <span class="token punctuation">{</span>  <span class="token comment">#传递信息认证方式,密码仅支持8位</span>
        auth_type PASS  
        auth_pass lizili
    <span class="token punctuation">}</span>
    virtual_ipaddress <span class="token punctuation">{</span>  <span class="token comment">#虚拟路由地址</span>
        <span class="token number">10.1</span>.27.21
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="slave" tabindex="-1"><a class="header-anchor" href="#slave" aria-hidden="true">#</a> slave</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@slave keepalived<span class="token punctuation">]</span><span class="token comment"># cat keepalived.conf</span>
<span class="token operator">!</span> Configuration File <span class="token keyword">for</span> keepalived

global_defs <span class="token punctuation">{</span>
   notification_email <span class="token punctuation">{</span>
   	lizili@xxxxxx.com
   <span class="token punctuation">}</span>
   notification_email_from lizili@xxxxxx.com
   smtp_server smtp.xxxxxx.com
   smtp_connect_timeout <span class="token number">30</span>
   router_id LVS_DEVEL
<span class="token punctuation">}</span>

vrrp_instance VI_1 <span class="token punctuation">{</span>
    state BACKUP
    interface eno16777984
    virtual_router_id <span class="token number">51</span>
    priority <span class="token number">99</span>
    advert_int <span class="token number">1</span>
    authentication <span class="token punctuation">{</span>
        auth_type PASS
        auth_pass lizili
    <span class="token punctuation">}</span>
    virtual_ipaddress <span class="token punctuation">{</span>
        <span class="token number">10.1</span>.27.21
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><p>两台都安装httpd服务<code>yum -y install httpd</code></p><p><code>vi /var/www/html/index.html</code></p><p>内容分别写上本机IP,然后通过浏览器访问vip,应该能查看到master的IP地址.</p><p>然后关闭master的keepalived服务,刷新网页,应该出现slave的地址</p><h2 id="邮件告警" tabindex="-1"><a class="header-anchor" href="#邮件告警" aria-hidden="true">#</a> 邮件告警</h2><p>安装mailx</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#安装mailx邮件服务</span>
yum <span class="token function">install</span> mailx <span class="token parameter variable">-y</span>

<span class="token comment">#配置文件追加信息（/etc/mail.rc）</span>
<span class="token function">vim</span> /etc/mail.rc
<span class="token comment">#发件人信息</span>
<span class="token builtin class-name">set</span> <span class="token assign-left variable">from</span><span class="token operator">=</span>lizili@xxxxxx.com
<span class="token builtin class-name">set</span> <span class="token assign-left variable">smtp</span><span class="token operator">=</span>smtp.xxxxxx.com
<span class="token builtin class-name">set</span> smtp-auth-user<span class="token operator">=</span>lizili
<span class="token builtin class-name">set</span> smtp-auth-password<span class="token operator">=</span>xxxxxx
<span class="token builtin class-name">set</span> smtp-auth<span class="token operator">=</span>login

<span class="token comment">#测试发送</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;hello world&quot;</span> <span class="token operator">|</span> mail <span class="token parameter variable">-s</span> <span class="token string">&quot;hello&quot;</span> lizili@xxxxxx.com
<span class="token comment">#echo &quot;邮件内容&quot; | mail -s &quot;标题&quot; 邮箱地址</span>
<span class="token comment">#邮件策略上,把账号加如白名单,以防被拉黑.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置keepalived</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#在VRRP实例中虚拟IP下配置添加以下信息</span>
vrrp_instance VI_1 <span class="token punctuation">{</span>
    <span class="token comment">#Keepalived进入MASTER状态执行脚本</span>
    notify_master <span class="token string">&quot;/etc/keepalived/mail_notify.sh master&quot;</span>
    <span class="token comment">#Keepalived进入BACKUP状态执行脚本</span>
    notify_backup <span class="token string">&quot;/etc/keepalived/mail_notify.sh backup&quot;</span>
    <span class="token comment">#Keepalived进入FAULT状态执行脚本</span>
    notify_fault <span class="token string">&quot;/etc/keepalived/mail_notify.sh fault&quot;</span>
｝    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建脚本 755权限</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/keepalived/mail_notify.sh
<span class="token comment">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;keepalived 10.1.27.23 <span class="token variable">$1</span> 状态被激活，请确认服务运行状态&quot;</span><span class="token operator">|</span>mail <span class="token parameter variable">-s</span> <span class="token string">&quot;keepalived状态切换&quot;</span> lizili@wondersgroup.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="双主模式" tabindex="-1"><a class="header-anchor" href="#双主模式" aria-hidden="true">#</a> 双主模式</h2><p>配置并没有太大的变化,在添加一个vrrp实例即可,配置如下</p><p>master</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vrrp_instance VI_2 <span class="token punctuation">{</span>       <span class="token comment">#vrrp命名,多个的时候,命名要不一致.</span>
    state BACKUP         <span class="token comment">#修改为backup</span>
    interface eno16777984  <span class="token comment">#通过那个网卡发送vrrp广播</span>
    virtual_router_id <span class="token number">52</span> <span class="token comment">#虚拟路由器ID,如果有多个VI要注意区分这个ID</span>
    priority <span class="token number">99</span>  <span class="token comment">#优先级,越大越优先(取值范围1-255)</span>
    advert_int <span class="token number">1</span> <span class="token comment">#广播时间间隔,默认1s</span>
    authentication <span class="token punctuation">{</span>  <span class="token comment">#传递信息认证方式,密码仅支持8位</span>
        auth_type PASS  
        auth_pass lizili
    <span class="token punctuation">}</span>
    virtual_ipaddress <span class="token punctuation">{</span>  <span class="token comment">#虚拟路由地址</span>
        <span class="token number">10.1</span>.27.11
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>slave</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vrrp_instance VI_1 <span class="token punctuation">{</span>
    state MASTER
    interface eno16777984
    virtual_router_id <span class="token number">52</span>
    priority <span class="token number">100</span>
    advert_int <span class="token number">1</span>
    authentication <span class="token punctuation">{</span>
        auth_type PASS
        auth_pass lizili
    <span class="token punctuation">}</span>
    virtual_ipaddress <span class="token punctuation">{</span>
        <span class="token number">10.1</span>.27.11
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实就是增加新的配置 VI_2 使用Server B 做主，如此 Server A、B 各自拥有主虚拟 IP，同时备份对方的虚拟 IP, 这个方案可以是不同的服务，或者是同一服务的访问分流(配合 DNS 使用).</p>`,32),t=[l];function c(d,p){return s(),a("div",null,t)}const o=n(i,[["render",c],["__file","keepalived.html.vue"]]);export{o as default};
