import{_ as s,X as e,Y as i,Z as a,$ as n}from"./framework-7663974c.js";const l={},d=n('<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><div class="hint-container danger"><p class="hint-container-title">请注意</p><p>文章写于2017年，请注意内容的有效性。</p></div><h2 id="salt简介" tabindex="-1"><a class="header-anchor" href="#salt简介" aria-hidden="true">#</a> salt简介</h2><p>SaltStack是一个服务器基础架构集中化管理平台，具备配置管理、远程执行、监控等功能，基于Python语言实现，结合轻量级消息队列（ZeroMQ）与Python第三方模块（Pyzmq、PyCrypto、Pyjinjia2、python-msgpack和PyYAML等）构建。</p><p>通过部署SaltStack，我们可以在成千万台服务器上做到批量执行命令，根据不同业务进行配置集中化管理、分发文件、采集服务器数据、操作系统基础及软件包管理等，SaltStack是运维人员提高工作效率、规范业务配置与操作的利器。</p>',5),t=n(`<h2 id="salt基本原理" tabindex="-1"><a class="header-anchor" href="#salt基本原理" aria-hidden="true">#</a> salt基本原理</h2><blockquote><p>SaltStack 采用 C/S模式，server端就是salt的master，client端就是minion，minion与master之间通过ZeroMQ消息队列通信</p><p>minion上线后先与master端联系，把自己的pub key发过去，这时master端通过salt-key -L命令就会看到minion的key，接受该minion-key后，也就是master与minion已经互信</p><p>master可以发送任何指令让minion执行了，salt有很多可执行模块，比如说cmd模块，在安装minion的时候已经自带了，它们通常位于你的python库中，<code>locate salt | grep /usr/</code> 可以看到salt自带的所有东西。</p><p>这些模块是python写成的文件，里面会有好多函数，如cmd.run，当我们执行<code>salt &#39;*&#39; cmd.run &#39;uptime&#39;</code>的时候，master下发任务匹配到的minion上去，minion执行模块函数，并返回结果。master监听4505和4506端口，4505对应的是ZMQ的PUB system，用来发送消息，4506对应的是REP system是来接受消息的。</p></blockquote><p>具体步骤如下</p><ol><li>Salt stack的Master与Minion之间通过ZeroMq进行消息传递，使用了ZeroMq的发布-订阅模式，连接方式包括tcp，ipc</li><li>salt命令，将<code>cmd.run ls</code>命令从<code>salt.client.LocalClient.cmd_cli</code>发布到master，获取一个Jodid，根据jobid获取命令执行结果。</li><li>master接收到命令后，将要执行的命令发送给客户端minion。</li><li>minion从消息总线上接收到要处理的命令，交给<code>minion._handle_aes</code>处理</li><li><code>minion._handle_aes</code>发起一个本地线程调用cmdmod执行ls命令。线程执行完ls后，调用<code>minion._return_pub</code>方法，将执行结果通过消息总线返回给master</li><li>master接收到客户端返回的结果，调用<code>master._handle_aes</code>方法，将结果写的文件中</li><li><code>salt.client.LocalClient.cmd_cli</code>通过轮询获取Job执行结果，将结果输出到终端。</li></ol><h2 id="安装salt" tabindex="-1"><a class="header-anchor" href="#安装salt" aria-hidden="true">#</a> 安装salt</h2><blockquote><p>导入salt 密钥</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">7</span>版本
<span class="token function">rpm</span> <span class="token parameter variable">--import</span> https://repo.saltstack.com/yum/redhat/7/x86_64/latest/SALTSTACK-GPG-KEY.pub


<span class="token number">6</span>版本
<span class="token function">rpm</span> <span class="token parameter variable">--import</span> https://repo.saltstack.com/yum/redhat/6/x86_64/latest/SALTSTACK-GPG-KEY.pub


<span class="token comment">#新增 /etc/yum.repos.d/saltstack.repo</span>
<span class="token number">7</span> <span class="token operator">&amp;</span> <span class="token number">6</span>版本

<span class="token punctuation">[</span>saltstack-repo<span class="token punctuation">]</span> 
name <span class="token operator">=</span> RHEL / CentOS $ releasever的
SaltStack repo baseurl <span class="token operator">=</span> https://repo.saltstack.com/yum/redhat/<span class="token variable">$releasever</span>/<span class="token variable">$basearch</span>/latest 
enabled <span class="token operator">=</span> <span class="token number">1</span> 
gpgcheck <span class="token operator">=</span> <span class="token number">1</span> 
gpgkey <span class="token operator">=</span> https：// repo.saltstack.com/yum/redhat/<span class="token variable">$releasever</span>/<span class="token variable">$basearch</span>/latest/SALTSTACK-GPG-KEY.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>安装 salt-minion, salt-master,或Salt components:</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> salt-master
yum <span class="token function">install</span> salt-minion
yum <span class="token function">install</span> salt-ssh
yum <span class="token function">install</span> salt-syndic
yum <span class="token function">install</span> salt-cloud
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置salt" tabindex="-1"><a class="header-anchor" href="#配置salt" aria-hidden="true">#</a> 配置salt</h2><h3 id="master" tabindex="-1"><a class="header-anchor" href="#master" aria-hidden="true">#</a> master</h3><blockquote><p>一般使用默认就好 (/etc/salt/master)</p></blockquote><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>#指定master，冒号后有一个空格
master: 192.168.2.22
user: root

#-------以下为可选--------------
# salt运行的用户，影响到salt的执行权限
user: root
#s alt的运行线程，开的线程越多一般处理的速度越快，但一般不要超过CPU的个数
worker_threads: 10
# master的管理端口
publish_port : 4505
# master跟minion的通讯端口，用于文件服务，认证，接受返回结果等
ret_port : 4506
# 如果这个master运行的salt-syndic连接到了一个更高层级的master,那么这个参数需要配置成连接到的这个高层级master的监听端口
syndic_master_port : 4506
# 指定pid文件位置
pidfile: /var/run/salt-master.pid
# saltstack 可以控制的文件系统的开始位置
root_dir: /
# 日志文件地址
log_file: /var/log/salt_master.log
# 分组设置
nodegroups:
  group_all: &#39;*&#39;
# salt state执行时候的根目录
file_roots:
  base:
    - /srv/salt/
# 设置pillar 的根目录
pillar_roots:
  base:
    - /srv/pillar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动master</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl start salt-master
systemctl enable salt-master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="minion" tabindex="-1"><a class="header-anchor" href="#minion" aria-hidden="true">#</a> minion</h3><p>(/etc/salt/minion)</p><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>#指定master，冒号后有一个空格
master: 192.168.2.22
id: minion-01
user: root

#-------以下为可选--------------
# minion的识别ID，可以是IP，域名，或是可以通过DNS解析的字符串
id: 192.168.0.100
# salt运行的用户权限
user: root
# master的识别ID，可以是IP，域名，或是可以通过DNS解析的字符串
master : 192.168.0.100
# master通讯端口
master_port: 4506
# 备份模式，minion是本地备份，当进行文件管理时的文件备份模式
backup_mode: minion
# 执行salt-call时候的输出方式
output: nested 
# minion等待master接受认证的时间
acceptance_wait_time: 10
# 失败重连次数，0表示无限次，非零会不断尝试到设置值后停止尝试
acceptance_wait_time_max: 0
# 重新认证延迟时间，可以避免因为master的key改变导致minion需要重新认证的syn风暴
random_reauth_delay: 60
# 日志文件位置
log_file: /var/logs/salt_minion.log
# 文件路径基本位置
file_roots:
  base:
    - /etc/salt/minion/file
# pillar基本位置
pillar_roots:
  base:
    - /data/salt/minion/pillar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动minion</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl start salt-master
systemctl enable salt-master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加key" tabindex="-1"><a class="header-anchor" href="#添加key" aria-hidden="true">#</a> 添加key</h2><blockquote><p>master 端查看key</p></blockquote><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>[root@master salt]# salt-key 
Accepted Keys:
Denied Keys:
Unaccepted Keys:   #可看到 minion已经检测到，没有认证key
minion-01
Rejected Keys:

[root@master salt]# salt-key -a minion-01
The following keys are going to be accepted:
Unaccepted Keys:
minion-01
Proceed? [n/Y] y    #Y确认添加
Key for minion minion-01 accepted.  #添加成功
[root@master salt]# salt-key 
Accepted Keys:
minion-01
Denied Keys:
Unaccepted Keys:
Rejected Keys:
[root@master salt]#
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="salt-key常用参数" tabindex="-1"><a class="header-anchor" href="#salt-key常用参数" aria-hidden="true">#</a> salt-key常用参数</h3><table><thead><tr><th style="text-align:left;">-a</th><th style="text-align:left;">添加指定ID 的key</th></tr></thead><tbody><tr><td style="text-align:left;">-A</td><td style="text-align:left;">添加全部</td></tr><tr><td style="text-align:left;">-R</td><td style="text-align:left;">拒绝全部</td></tr><tr><td style="text-align:left;">-d</td><td style="text-align:left;">删除指定ID的</td></tr><tr><td style="text-align:left;">-D</td><td style="text-align:left;">删除全部</td></tr></tbody></table><h3 id="测试连通性" tabindex="-1"><a class="header-anchor" href="#测试连通性" aria-hidden="true">#</a> 测试连通性</h3><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>[root@master salt]# salt &#39;minion-01&#39; test.ping
minion-01:
    True   #返回结果表示成功
[root@master salt]# 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简单服务的安装" tabindex="-1"><a class="header-anchor" href="#简单服务的安装" aria-hidden="true">#</a> 简单服务的安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root/<span class="token punctuation">]</span> <span class="token punctuation">]</span><span class="token variable">$salt</span> <span class="token string">&#39;minion-01&#39;</span> pkg.install <span class="token function">ftp</span>  <span class="token comment">#解释</span>
minion-01:
    ----------
    ftp:
        ----------
        new:
            <span class="token number">0.17</span>-67.el7
        old:
<span class="token punctuation">[</span>root/<span class="token punctuation">]</span> <span class="token punctuation">]</span>$

<span class="token comment">#去minion查看</span>
<span class="token punctuation">[</span>root@minion-01 tmp<span class="token punctuation">]</span><span class="token comment"># rpm -qa ftp</span>
ftp-0.17-67.el7.x86_64

<span class="token comment">#salt &#39;minion-01&#39; pkg.install ftp</span>
<span class="token comment">#1.&#39;*&#39; 代表的是target是指在那些minion上操作</span>
<span class="token comment">#2. &#39;pkg&#39; 是一个执行模块,就像&#39;test&#39; </span>
<span class="token comment">#3.&#39;install&#39; 是执行模块下面的函数，像test下的ping</span>
<span class="token comment">#4.&#39;ftp&#39; 是函数的参数(arg)，有的函数需要参数，有的不需要比如test.ping就不需要参数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token comment">##查看所有执行模块的doc</span>
 salt <span class="token string">&#39;minion&#39;</span> sys.doc
 <span class="token comment">##查看test模块的帮助</span>
 salt <span class="token string">&#39;minion&#39;</span> sys.doc <span class="token builtin class-name">test</span>  
 <span class="token comment">##查看test.ping函数的帮助</span>
 salt <span class="token string">&#39;minion&#39;</span> sys.doc test.ping 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="salt常用命令" tabindex="-1"><a class="header-anchor" href="#salt常用命令" aria-hidden="true">#</a> salt常用命令</h2><h3 id="salt" tabindex="-1"><a class="header-anchor" href="#salt" aria-hidden="true">#</a> salt</h3><blockquote><p>该命令执行salt的执行模块,通常在master端运行.常用命令</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
salt <span class="token punctuation">[</span>option<span class="token punctuation">]</span> <span class="token string">&#39;&lt; target &gt;&#39;</span> <span class="token operator">&lt;</span> <span class="token keyword">function</span> <span class="token operator">&gt;</span> <span class="token punctuation">[</span> arguments <span class="token punctuation">]</span>

<span class="token comment">#例如</span>
salt <span class="token string">&#39;minion-01&#39;</span> cmd.run <span class="token string">&#39;ip addr&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="salt-run" tabindex="-1"><a class="header-anchor" href="#salt-run" aria-hidden="true">#</a> salt-run</h3><blockquote><p>该命令执行runner(salt自带或者自定义的，)，通常在master端执行，比如经常用到的manage</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>salt-run <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span>runner.func<span class="token punctuation">]</span>

<span class="token comment">#例如</span>
salt-run manage.status   <span class="token comment">##查看所有minion状态</span>
salt-run manage.down     <span class="token comment">##查看所有没在线minion</span>
salt-run manged.up       <span class="token comment">##查看所有在线minion</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="salt-key" tabindex="-1"><a class="header-anchor" href="#salt-key" aria-hidden="true">#</a> salt-key</h3><blockquote><p>密钥管理，通常在master端执行</p></blockquote><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>salt-key [options]
salt-key -L              ##查看所有minion-key
salt-key -a &lt;key-name&gt;   ##接受某个minion-key
salt-key -d &lt;key-name&gt;   ##删除某个minion-key
salt-key -A              ##接受所有的minion-key
salt-key -D              ##删除所有的minion-key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="salt-call" tabindex="-1"><a class="header-anchor" href="#salt-call" aria-hidden="true">#</a> salt-call</h3><blockquote><p>该命令通常在minion上执行，minion自己执行可执行模块，不通过master下发job</p></blockquote><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>salt-call [options] &lt;function&gt; [arguments]
salt-call test.ping           ##自己执行test.ping命令
salt-call cmd.run &#39;ifconfig&#39;  ##自己执行cmd.run函数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="salt-cp" tabindex="-1"><a class="header-anchor" href="#salt-cp" aria-hidden="true">#</a> salt-cp</h3><blockquote><p>分发文件到minion上,不支持目录分发.运行在master</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>salt-cp <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token string">&#39;&lt; target &gt;&#39;</span> SOURCE DEST
<span class="token comment">#例如</span>
salt-cp <span class="token string">&#39;*&#39;</span> testfile.html /tmp
salt-cp <span class="token string">&#39;test*&#39;</span> index.html /tmp/a.html

<span class="token comment">#如果minion 是windows端 默认/ 指的是 C:\\   /test = C:\\test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="salt-master" tabindex="-1"><a class="header-anchor" href="#salt-master" aria-hidden="true">#</a> salt-master</h3><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>salt-master [options]
salt-master            ##前台运行master
salt-master -d         ##后台运行master
salt-master -l debug   ##前台debug输出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="salt-minion" tabindex="-1"><a class="header-anchor" href="#salt-minion" aria-hidden="true">#</a> salt-minion</h3><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>salt-minion [options]
salt-minion            ##前台运行
salt-minion -d         ##后台运行
salt-minion -l debug   ##前台debug输出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="普通用户执行salt" tabindex="-1"><a class="header-anchor" href="#普通用户执行salt" aria-hidden="true">#</a> 普通用户执行salt</h2><p>两种方法</p><blockquote><p>1: ACL(修改master)</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    client_acl:
    monitor: <span class="token comment">#uonghu</span>
     - test*: <span class="token comment">#权限</span>
    - test.*
    dev:
     - service.*
    sa:
     - .*
<span class="token comment">#重启master</span>
     
<span class="token comment">#给予目录和文件权限</span>
<span class="token function">chmod</span> +r /etc/salt/master
<span class="token function">chmod</span> +x /var/run/salt
<span class="token function">chmod</span> +x /var/cache/salt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>2 external_auth(修改master)</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  pam:
    fred:
      - test.*
<span class="token comment">#重启master</span>
     
<span class="token comment">#给予目录和文件权限</span>
<span class="token function">chmod</span> +r /etc/salt/master
<span class="token function">chmod</span> +x /var/run/salt
<span class="token function">chmod</span> +x /var/cache/salt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用Token不必每次都输入账号密码，使用external_auth每次都是需要密码的，这样多麻烦，这里引入了Token，它会保存一串字符到在当前用户家目录下.salt_token中，在有效时间内使用external_auth是不需要输入密码的，默认时间12hour，可以通过master配置文件修改</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>salt -T -a pam &#39;*&#39; test.ping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="target" tabindex="-1"><a class="header-anchor" href="#target" aria-hidden="true">#</a> target</h2><blockquote><p>target也就是目标,目的.指定master命令应该对谁执行</p></blockquote><ul><li>正则匹配</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master /<span class="token punctuation">]</span><span class="token comment"># salt -E  &#39;mini*&#39; test.ping</span>
minion-02:
    True
minion-01:
    True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列表匹配</li></ul><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>[root@master ~]# salt -L minion-01,minion-02 test.ping
minion-02:
    True
minion-01:
    True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>grains匹配</li></ul><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>[root@master ~]# salt -G &#39;os:CentOs&#39; test.ping
minion-02:
    True
minion-01:
    True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>组匹配</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#开启master 的default_include</span>
<span class="token function">vim</span> /etc/salt/master.d/nodegroup.conf 
<span class="token comment">#写到master中也是这个格式</span>
nodegroups:
 test1: <span class="token string">&#39;L@test1,test2 or test3*&#39;</span>
 test2: <span class="token string">&#39;G@os:CenOS or test2&#39;</span>

salt <span class="token parameter variable">-N</span> test1 test.ping   <span class="token comment">#-N指定groupname</span>

在top file中使用nodegroups

<span class="token string">&#39;test1&#39;</span><span class="token builtin class-name">:</span>
 - match: nodegroup     <span class="token comment">##没s,匹配的是文件</span>
 - webserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># salt -N nodegroups test.ping</span>
minion-02:
    True
minion-01:
    True
<span class="token comment">#组需要在master中预先定义</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>复合匹配 <code>salt -C &#39;G@os:MacOS or L@Minion1&#39;</code></li><li>Pillar匹配 <code>salt -I &#39;key:value&#39; test.ping</code></li><li>CIDR匹配 <code>salt -S &#39;192.168.1.0/24&#39; test.ping</code></li></ul><blockquote><p>在top文件中匹配 grains</p></blockquote><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>&#39;node_type:web&#39;:
  - match: grain         #没有s
  - webserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>top文件中使用jinja</p></blockquote><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>{% set self = grains[&#39;node_type&#39;] %}
    - match: grain
- {{ self }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>一次在n个minion上执行</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-b</span> n
--batch-size n
<span class="token comment">#例：</span>
salt <span class="token string">&#39;*&#39;</span> <span class="token parameter variable">-b</span> <span class="token number">5</span> test.ping
<span class="token comment">#5个5个的ping</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多master" tabindex="-1"><a class="header-anchor" href="#多master" aria-hidden="true">#</a> 多master</h2><blockquote><blockquote><p>2个master并不会共享Minion keys，一个master删除了一个key不会影响另一个</p></blockquote><blockquote><p>不会自动同步File_roots,所以需要手动去维护，如果用git就没问题了</p></blockquote><blockquote><p>不会自动同步Pillar_Roots，所以需要手工去维护，也可以用git</p></blockquote><blockquote><p>Master的配置文件也是独立的</p></blockquote></blockquote><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>#安装 salt-master

#原master的密钥cp一份到新的master
scp /etc/salt/pki/master/master* newmaster:/etc/salt/pki/master/
#启动新的Master

#修改配置minion的配置
master:
  - master1
  - master2
#重启minion

#新master接受所有的key
salt-key -L
salt-key -A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="yaml" tabindex="-1"><a class="header-anchor" href="#yaml" aria-hidden="true">#</a> YAML</h2><blockquote><p>语法风格</p></blockquote><ul><li><p>空格和TAB</p><p>yaml两个空格为缩进, TAB不要使用!</p></li><li><p>冒号: 和减号-</p><p>: 和- 后面要跟上一个空格在写</p></li><li><p>数字解析</p><p>mode: 0644 会解析成为mode: 644 最好使用mode: (0644)</p></li><li><p>简写</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vim:
  pkg.installed <span class="token comment">#第一个简写</span>
  user.present <span class="token comment">#第二个简写.不被支持,因为不支持双简写</span>

<span class="token comment">#建议规范书写</span>
vim:
  pkg:
    - installed
  user:
    - present
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="jinja" tabindex="-1"><a class="header-anchor" href="#jinja" aria-hidden="true">#</a> Jinja</h2><blockquote><p>Jinja 基于Python模板引擎开发,saltstack默认使用yaml_jinja渲染器,渲染流程时先jinja在yaml解析.所以在开始解析yaml的时候可以使用jinja&quot;偷个腥&quot;</p></blockquote><ul><li>区分模板文件</li></ul><p>在salt中,files和templates都使用file这个state模块.那么如何区分模板是什么文件呢.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  - templates: jinja
  
file.managed:
  - name: /tmp/test
  - source: salt://tmp/test
  - template: jinja
  - defaults:
    Server: <span class="token punctuation">{</span><span class="token punctuation">{</span> pillar<span class="token punctuation">[</span><span class="token string">&#39;.....&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>jinja中使用grains</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{{ grains[&#39;os&#39;] }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>jinja中使用执行模块</li></ul><div class="language-BAHS line-numbers-mode" data-ext="BAHS"><pre class="language-BAHS"><code>{{ salt[&#39;network.hw_addr&#39;](&#39;eth0&#39;) }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>jinja中使用Pillar</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{{ pillar[&#39;apache&#39;][&#39;PORT&#39;] }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Jinja的逻辑关系</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{% if grains[&#39;os&#39;] == &#39;RedHat&#39; %}
apache: httpd
{% elif grains[&#39;os&#39;] == &#39;Debian&#39; %}
apache: apache2
{% endif %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>更多使用自行研究</strong></p><h2 id="salt常用模块和api" tabindex="-1"><a class="header-anchor" href="#salt常用模块和api" aria-hidden="true">#</a> salt常用模块和API</h2><h3 id="查看支持的所有modules" tabindex="-1"><a class="header-anchor" href="#查看支持的所有modules" aria-hidden="true">#</a> 查看支持的所有modules</h3><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>[root/] ]$salt &#39;minion-01&#39; sys.list_modules
minion-01:
    - acl
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="salt-client调用api举例" tabindex="-1"><a class="header-anchor" href="#salt-client调用api举例" aria-hidden="true">#</a> salt.client调用API举例</h3><p><strong><code>[root/] ]$cd /usr/lib/python2.7/site-packages/salt/modules/</code></strong> 模块path</p><p><strong>API调用示例</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token punctuation">[</span>root<span class="token operator">/</span><span class="token punctuation">]</span> <span class="token punctuation">]</span>$cat test<span class="token punctuation">.</span>py 
<span class="token comment">#!/usr/bin/python</span>
<span class="token keyword">import</span> salt<span class="token punctuation">.</span>client
client <span class="token operator">=</span> salt<span class="token punctuation">.</span>client<span class="token punctuation">.</span>LocalClient<span class="token punctuation">(</span><span class="token punctuation">)</span>

res <span class="token operator">=</span> client<span class="token punctuation">.</span>cmd<span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;test.ping&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> res
<span class="token punctuation">[</span>root<span class="token operator">/</span><span class="token punctuation">]</span> <span class="token punctuation">]</span>$<span class="token punctuation">.</span><span class="token operator">/</span>test<span class="token punctuation">.</span>py 
<span class="token punctuation">{</span><span class="token string">&#39;minion-02&#39;</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token string">&#39;minion-01&#39;</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">}</span>

<span class="token comment">##解释一下</span>
<span class="token comment">#当我们调用salt.client.LocalClient的时候,其实就等于我们执行了 salt &#39;*&#39; test.ping</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>API调用：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>client.cmd(&#39;*&#39;,&#39;file.remove&#39;,[&#39;/tmp/foo&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>salt &lt; target &gt; sys.doc module</p><p>可以查看模块支持那些命令</p></blockquote><h3 id="archive" tabindex="-1"><a class="header-anchor" href="#archive" aria-hidden="true">#</a> Archive</h3><blockquote><p>实现对系统曾经的压缩包调用支持gzip,gunzip.rar,tar,unrar,unzip等</p></blockquote><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>#采用gunzip解压sourcefile.txt.gz包
salt &#39;*&#39; archive.gunzip sourcefile.txt.gz

#采用gzip压缩sourcefile.txt文件
salt &#39;*&#39; archive.gzip sourcefile.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>API调用：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>client.cmd(&#39;*&#39;,&#39;archive.gunzip&#39;,[&#39;sourcefile.txt.gz&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="cmd" tabindex="-1"><a class="header-anchor" href="#cmd" aria-hidden="true">#</a> cmd</h3><blockquote><p>实现对远程命令的调用执行,(默认具备root权限!谨慎使用)</p></blockquote><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>#获取所欲被控主机的内存使用情况
salt &#39;*&#39; cmd.run &#39;free -m&#39;

#在wx主机上运行test.py脚本，其中script/test.py存放在file_roots指定的目录（默认是在/srv/salt,自定义在/etc/salt/master文件中定义），
#该命令会做2个动作：首先同步test.py到minion的cache目录；起床运行该脚本
salt &#39;minion-01&#39; cmd.script salt://script/test.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>API调用：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>client.cmd(&#39;*&#39;,&#39;cmd.run&#39;,[&#39;free -m&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="cp" tabindex="-1"><a class="header-anchor" href="#cp" aria-hidden="true">#</a> cp</h3><blockquote><p>实现远程文件目录的复制,以及下载URL文件等操作</p></blockquote><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>#将被控主机的/etc/hosts文件复制到被控主机本地的salt cache目录（/var/cache/salt/minion/localfiles/）
salt &#39;*&#39; cp.cache_local_file /etc/hosts

#将主控端file_roots指定位置下的目录复制到被控主机/minion/目录下
salt &#39;*&#39; cp.get_dir salt://script/ /minion/

#将主控端file_roots指定位置下的文件复制到被控主机/minion/test.py文件(file为文件名)
salt &#39;*&#39; cp.get_dir salt://script/test.py /minion/test.py

#下载URL内容到被控主机指定位置(/tmp/index.html)
salt &#39;*&#39; cp.get_url http://www.slashdot.ort /tmp/index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>API调用：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>client.cmd(&#39;*&#39;,&#39;cp.get_file&#39;,[&#39;salt://script/test.py&#39;,&#39;/minion/test.py&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="cron" tabindex="-1"><a class="header-anchor" href="#cron" aria-hidden="true">#</a> cron</h3><blockquote><p>实现对minion的crontab控制</p></blockquote><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>#查看指定被控主机、root用户的crontab操作
salt &#39;minion-01&#39; cron.raw_cron root

#为指定被控主机、root用户添加/usr/local/weekly任务zuoye
salt &#39;minion-01&#39; cron.set_job root &#39;*&#39; &#39;*&#39; &#39;*&#39; &#39;*&#39; 1 /usr/local/weekly 

#删除指定被控主机、root用户crontab的/usr/local/weekly任务zuoye
salt &#39;minion-01&#39; cron.rm_job root /usr/local/weekly 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>API调用：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>client.cmd<span class="token punctuation">(</span><span class="token string">&#39;wx&#39;</span>,<span class="token string">&#39;cron.set_job&#39;</span>,<span class="token punctuation">[</span><span class="token string">&#39;root&#39;</span>,<span class="token string">&#39;*&#39;</span>,<span class="token string">&#39;*&#39;</span>,<span class="token string">&#39;*&#39;</span>,<span class="token string">&#39;*&#39;</span>,1,<span class="token string">&#39;/usr/local/weekly&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="file" tabindex="-1"><a class="header-anchor" href="#file" aria-hidden="true">#</a> file</h3><blockquote><p>对minion的文件操作,包括文件读写,权限,查找校验</p></blockquote><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>#校验所有被控主机/etc/fstab文件的md5值是否为xxxxxxxxxxxxx,一致则返回True值
salt &#39;*&#39; file.check_hash /etc/fstab md5=xxxxxxxxxxxxxxxxxxxxx

#校验所有被控主机文件的加密信息，支持md5、sha1、sha224、shs256、sha384、sha512加密算法
salt &#39;*&#39; file.get_sum /etc/passwd md5

#修改所有被控主机/etc/passwd文件的属组、用户权限、等价于chown root:root /etc/passwd
salt &#39;*&#39; file.chown /etc/passwd root root

#复制所有被控主机/path/to/src文件到本地的/path/to/dst文件
salt &#39;*&#39; file.copy /path/to/src /path/to/dst

#检查所有被控主机/etc目录是否存在，存在则返回True,检查文件是否存在使用file.file_exists方法
salt &#39;*&#39; file.directory_exists /etc

#获取所有被控主机/etc/passwd的stats信息
salt &#39;*&#39; file.stats /etc/passwd

#获取所有被控主机/etc/passwd的权限mode，如755，644
salt &#39;*&#39; file.get_mode /etc/passwd

#修改所有被控主机/etc/passwd的权限mode为0644
salt &#39;*&#39; file.set_mode /etc/passwd 0644

#在所有被控主机创建/opt/test目录
salt &#39;*&#39; file.mkdir /opt/test

#将所有被控主机/etc/httpd/httpd.conf文件的LogLevel参数的warn值修改为info
salt &#39;*&#39; file.sed /etc/httpd/httpd.conf &#39;LogLevel warn&#39; &#39;LogLevel info&#39;

#给所有被控主机的/tmp/test/test.conf文件追加内容‘maxclient 100’
salt &#39;*&#39; file.append /tmp/test/test.conf &#39;maxclient 100&#39;

#删除所有被控主机的/tmp/foo文件
salt &#39;*&#39; file.remove /tmp/foo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="network" tabindex="-1"><a class="header-anchor" href="#network" aria-hidden="true">#</a> network</h3><blockquote><p>返回minion的主机信息</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#在指定被控主机获取dig、ping、traceroute目录域名信息</span>
salt <span class="token string">&#39;minion-01&#39;</span> network.dig www.qq.com
salt <span class="token string">&#39;minion-01&#39;</span> network.ping www.qq.com
salt <span class="token string">&#39;minion-01&#39;</span> network.traceroute www.qq.com

<span class="token comment">#获取指定被控主机的mac地址</span>
salt <span class="token string">&#39;minion-01&#39;</span> network.hwaddr eth0

<span class="token comment">#检测指定被控主机是否属于10.0.0.0/16子网范围，属于则返回True</span>
salt <span class="token string">&#39;minion-01&#39;</span> network.in_subnet <span class="token number">10.0</span>.0.0/16

<span class="token comment">#获取指定被控主机的网卡配置信息</span>
salt <span class="token string">&#39;minion-01&#39;</span> network.interfaces

<span class="token comment">#获取指定被控主机的IP地址配置信息</span>
salt <span class="token string">&#39;minion-01&#39;</span> network.ip_addrs

<span class="token comment">#获取指定被控主机的子网信息</span>
salt <span class="token string">&#39;minion-01&#39;</span> network.subnets
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>API调用：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>client.cmd<span class="token punctuation">(</span><span class="token string">&#39;minion-01&#39;</span>,<span class="token string">&#39;network.ip_addrs&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="pkg" tabindex="-1"><a class="header-anchor" href="#pkg" aria-hidden="true">#</a> pkg</h3><blockquote><p>minion的程序包管理,如yum, apt-get等</p></blockquote><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>#为所有被控主机安装PHP环境，根据不同系统发行版调用不同安装工具进行部署，如redhat平台的yum，等价于yum -y install php
salt &#39;*&#39; pkg.install php

#卸载所有被控主机的PHP环境
salt &#39;*&#39; pkg.remove php

#升级所有被控主机的软件包
salt &#39;*&#39; pkg.upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>API调用：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>client.cmd(&#39;*&#39;,&#39;pkg.remove&#39;,[&#39;php&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="status" tabindex="-1"><a class="header-anchor" href="#status" aria-hidden="true">#</a> status</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>salt &#39;*&#39; status.version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>API</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> salt<span class="token punctuation">.</span>client
client <span class="token operator">=</span> salt<span class="token punctuation">.</span>client<span class="token punctuation">.</span>LocalClient<span class="token punctuation">(</span><span class="token punctuation">)</span>
client<span class="token punctuation">.</span>cmd<span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;status.uptime&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="system" tabindex="-1"><a class="header-anchor" href="#system" aria-hidden="true">#</a> system</h3><blockquote><p>用来日常操作计算机</p></blockquote><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>system.halt        #停止正在运行的系统
system.init 3      #切换到字符界面，5是图形界面
system.poweroff
system.reboot
system.shutdown
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="systemd-service" tabindex="-1"><a class="header-anchor" href="#systemd-service" aria-hidden="true">#</a> systemd(service)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  service.available sshd            #查看服务是否可用
  service.disable &lt;service name&gt;    #设置开机启动的服务
  service.enable &lt;service name&gt;
  service.disabled &lt;service name&gt;   #查看服务是不是开机启动
  service.enabled &lt;service name&gt;
  service.get_disabled              #返回所有关闭的服务
  service.get_enabled               #返回所有开启的服务
  service.get_all                   #返回所有服务
  service.reload &lt;service name&gt;     #重新载入指定的服务
  service.restart &lt;service name&gt;    #重启服务
  service.start &lt;service name&gt;
  service.stop &lt;service name&gt;
  service.status &lt;service name&gt;
  service.force_reload &lt;service name&gt;  #强制载入指定的服务
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用</strong></p><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>[root@mail python]# salt &#39;*&#39; service.available sshdmonitor:    True

api调用:
&gt;&gt;&gt; client.cmd(&#39;*&#39;,&#39;service.available&#39;,[&#39;sshd&#39;]){&#39;monitor&#39;: True}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="grains" tabindex="-1"><a class="header-anchor" href="#grains" aria-hidden="true">#</a> grains</h2><blockquote><p>服务器的一些静态信息，强调的是静态，就是不会变的东西，比如说os是centos，不会变化，除非重新安装系统</p></blockquote><h3 id="grains的使用" tabindex="-1"><a class="header-anchor" href="#grains的使用" aria-hidden="true">#</a> grains的使用</h3><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>#查询所有grains信息
[root@master salt]# salt &#39;minion-01&#39; grains.items 
minion-01:
    ----------
    SSDs:
    biosreleasedate:
        09/21/2015
    biosversion:
        6.00
    cpu_flags:
        - fpu
        - vme
        - de
.....

#查询grains指定项
[root@master salt]# salt &#39;*&#39; grains.item os
minion-02:
    ----------
    os:
        CentOS
minion-01:
    ----------
    os:
        CentOS
[root@master salt]# 


[root@master salt]# salt -G &#39;os:CentOS&#39; test.ping
minion-01:
    True

#对系统是CentOS的服务器进行ping测试操作
#os:CentOS ; 就是对应上面grains.items显示出来的os值是CentOs的对象进行匹配 

 
#对cpu架构是x86_64的服务器显示CPU的个数
salt -G &#39;cpuarch:x86_64&#39; grains.item num_cpus
 
#对字典值的对象进行匹配
salt -G &#39;ip_interfaces:eno16777728:192.168.2.*&#39; test.ping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在SLS中用grains</strong></p><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code># 在xxx.sls中使用grains
&#39;os:CentOS&#39;:
    - match: grain
    - webserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义grains-两种方法" tabindex="-1"><a class="header-anchor" href="#自定义grains-两种方法" aria-hidden="true">#</a> 自定义grains(两种方法)</h3><p><strong>1 . minion端修改</strong> 重启生效</p><blockquote><p>修改配置文件 /etc/salt/minion 或者写在/etc/salt/grains中</p><p>打开 default_include: minion.d/*.conf 或者直接添加此命令</p><p>在minion端的/etc/salt/minion.d/ 目录下新建并编辑.conf后缀文件</p></blockquote><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>grains: #如果是/etc/salt/grains中,不需此行
  roles:
    - webserver
  sex: boy  #名字：值
  age:      #名字：多个值
    - 33
    - 44
 # 重启生效
[root@master ~]# salt &#39;minion-01&#39; grains.item age
minion-01:
    ----------
    age:
        - 33
        - 44
[root@master ~]# 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**2 . minion端修改 ** 同步之后生效</p><blockquote><p>base目录（在/etc/salt/master中配置的file_roots项，默认在/srv/salt）下生成**_grains** 目录,新建文件,用python来写</p></blockquote><p>编写文件,需要返回一个字典</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">vim</span> test1.py
def hello<span class="token punctuation">(</span><span class="token punctuation">)</span>: <span class="token comment">##函数名字无所谓，应该是所有函数都会运行</span>
    agrain <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    agrain<span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;lzl&#39;</span> 
    <span class="token builtin class-name">return</span> agrain   <span class="token comment">##返回这个字典</span>


<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>

<span class="token comment">#!/usr/bin/python</span>
<span class="token comment"># -*- coding:utf-8 -*-</span>
<span class="token function">import</span> os
def file<span class="token punctuation">(</span><span class="token punctuation">)</span>:
    <span class="token assign-left variable">grains</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token comment">#初始化一个字典，</span>
    <span class="token function">file</span> <span class="token operator">=</span> os.popen<span class="token punctuation">(</span><span class="token string">&#39;ulimit -n&#39;</span><span class="token punctuation">)</span>.read<span class="token punctuation">(</span><span class="token punctuation">)</span>
    grains<span class="token punctuation">[</span><span class="token string">&#39;my_file&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span>file
    <span class="token builtin class-name">return</span> grains


<span class="token comment">#注意文件赋予权限</span>
<span class="token function">chmod</span> a+x .py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>#同步到各个minion中去
salt &#39;*&#39; saltutil.sync_all

#查看
[root/srv/salt/_grains] ]$salt &#39;minion-01&#39; grains.item hello
minion-01:
    ----------
    hello:
        lzl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pillar" tabindex="-1"><a class="header-anchor" href="#pillar" aria-hidden="true">#</a> pillar</h2><blockquote><p>Pillar在salt中是非常重要的组成部分，利用它可以完成很强大的功能，它可以指定一些信息到指定的minion上，不像grains一样是分发到所有Minion上的，它保存的数据可以是动态的,Pillar以sls来写的，格式是键值</p><p>适用</p><p>1.比较敏感的数据，比如密码，key等</p><p>2.特殊数据到特定Minion上</p><p>3.动态的内容</p><p>4.其他数据类型</p></blockquote><h3 id="pillar基本使用" tabindex="-1"><a class="header-anchor" href="#pillar基本使用" aria-hidden="true">#</a> pillar基本使用</h3><p><strong>查看所有</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>salt &#39;*&#39; pillar.items
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>查看某个</strong></p><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>salt &#39;*&#39; pillar.item KEY
#可以取到更小粒度的
salt &#39;*&#39; pillar.get &lt;key&gt;:&lt;key&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编写pillar" tabindex="-1"><a class="header-anchor" href="#编写pillar" aria-hidden="true">#</a> 编写pillar</h3><blockquote><p>指定pillar_roots</p><p>默认是/srv/pillar/(可通过修改master配置文件修改),建立目录</p></blockquote><p><strong>top.sls</strong></p><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>base:           #指定环境
  &#39;*&#39;:          #target
    - test1     #引用test1.sls 或者test1/init.sls
    
#通过分组名匹配，
base:
  group1:
    - match: nodegroup    #必须要有 - match: nodegroup  
    - webserver  

#通过grain模块匹配的示例
base:
  &#39;os:CentOS&#39;:
    - match: grain   #必须要有- match: grain
    - webserver
    

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>test1.sls</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>name: test1
user: lzl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>刷新</strong> pillar数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>salt &#39;*&#39; saltutil.refresh_pillar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>查看结果</strong></p><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>[root/srv/pillar] ]$salt &#39;minion-01&#39; pillar.items
minion-01:
    ----------
    name:
        test1
    user:
        lzl
[root/srv/pillar] ]$

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在state中通过jinja使用pillar" tabindex="-1"><a class="header-anchor" href="#在state中通过jinja使用pillar" aria-hidden="true">#</a> 在state中通过jinja使用pillar</h2><p>默认state文件位置/src/salt/</p><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>user.sls

{% for user, uid in pillar.get(&#39;users&#39;, {}).items() %}  
 ##pillar.get(&#39;users&#39;,{})可用pillar[&#39;users&#39;]代替，前者在没有得到值的情况下，赋默认值
{{user}}:
  user.present:
    - uid: {{uid}}
{% endfor %}
 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jinja配合grains-指定pillar数据" tabindex="-1"><a class="header-anchor" href="#jinja配合grains-指定pillar数据" aria-hidden="true">#</a> jinja配合grains 指定pillar数据</h2><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>{% if grains[&#39;os_family&#39;] == &#39;RedHat&#39; %}
apache: httpd
{% elif grains[&#39;os&#39;] == &#39;CentOS&#39; %}
apache: httpd
vim: vim
{% elif grains[&#39;os&#39;] == &#39;Arch&#39; %}
apache: apache
vim: vim
{% endif %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用salt-state" tabindex="-1"><a class="header-anchor" href="#使用salt-state" aria-hidden="true">#</a> 使用salt state</h2><blockquote><p>它的核心是写sls(SaLt State file)文件,sls文件默认格式是YAML格式，并默认使用jinja模板，jinja是根据django的模板语言发展而来的语言，简单并强大，支持for if 等循环判断。salt state主要用来描述系统，软性，服务，配置文件的状态，常常被称为配置管理！</p></blockquote><blockquote><p>通常state，pillar,top file会用sls文件来编写。state文件默认是放在/srv/salt中，它与你的master配置文件中的file_roots设置有关</p></blockquote><h3 id="简单的state文件配置-介绍" tabindex="-1"><a class="header-anchor" href="#简单的state文件配置-介绍" aria-hidden="true">#</a> 简单的state文件配置&amp;介绍</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#/srv/salt/apahce.sls</span>

apache:           <span class="token comment">##state ID，全文件唯一,如果模块没跟-name默认用的ID作为-name</span>
 pkg:             <span class="token comment">##模块</span>
   <span class="token comment">#- name: apache ##函数参数，可以省略</span>
   - installed    <span class="token comment">##函数</span>
 service:         <span class="token comment">##模块</span>
   - running      <span class="token comment">##函数</span>
  <span class="token comment">#- name: apache ##函数参数，这个是省略的，也可以写上</span>
   - require:     <span class="token comment">##依赖系统</span>
     - pkg: apache  <span class="token comment">##表示依赖id为apache的pkg状态</span>
     

<span class="token comment">#声明一个叫apache的状态id,该id可以随意，最好能表示一定意思</span>

<span class="token comment">#pkg代表的是pkg模块</span>

<span class="token comment">#installed是pkg模块下的一个函数，描述的是状态，该函数表示apache是否部署，返回值为True或者False，为真时，表示状态OK，否则会去满足该状态(下载安装apache)，如果满足不了会提示error,在该模块上面省略了参数-name: apache,因为ID为apache,这些参数是模块函数需要的（可以去查看源码）</span>

<span class="token comment">#service是指的service模块</span>
<span class="token comment">#这个模块下主要是描述service状态的函数，running状态函数表示apache在运行，省略-name不在表述，-require表示依赖系统，依赖系统是state system的重要组成部分，在该处描述了apache服务的运行需要依赖apache软件的部署，这里就要牵涉到sls文件的执行，sls文件在salt中执行时无序(如果没有指定顺序，后面会讲到order)，假如先执行了service这个状态，它发现依赖pkg包的安装，会去先验证pkg的状态有没有满足，如果没有依赖关系的话，我们可以想象，如果没有安装apache，apache 的service肯定运行会失败的，我们来看看怎么执行这个sls文件:</span>
     
salt <span class="token string">&#39;*&#39;</span> state.sls apache  

<span class="token comment">#在命令行里这样执行，.sls不写，如果在目录下，将目录与文件用’.’隔开，</span>
<span class="token comment">#如： httpd/apache.sls –&gt; httpd.apache</span>

<span class="token comment">#或者</span>
salt <span class="token string">&#39;*&#39;</span> state.highstate 
<span class="token comment">#前提是存在top.sls 去指定minion运行的是哪个文件</span>
<span class="token comment">#top.sls</span>
base:
  <span class="token string">&#39;*&#39;</span><span class="token builtin class-name">:</span>
    - webserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>state.sls默认的运行环境是base环境，但是它并不读取top.sls（top.sls定义了运行环境以及需要运行的sls）</p><p>state.sls也可以指定读取哪个环境：state.sls salt_env=&#39;prod&#39; xxxx.sls，这个xxxx.sls可以不在top.sls中记录。</p><p>state.highstate: 这个是全局的所有环境，以及所有状态都生效。它会读取每一个环境的top.sls，并且对所有sls都生效。不在top.sls文件里面记录的sls则不会被执行；</p></blockquote><p>阅读后写的版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>webserver:
  pkg:
    - name: httpd
    - installed
  service:
    - name: httpd
    - running
    - reqire:
      -pkg: httpd

<span class="token punctuation">[</span>root/srv/salt<span class="token punctuation">]</span> <span class="token punctuation">]</span><span class="token variable">$salt</span> <span class="token string">&#39;minion-02&#39;</span> state.sls webserver
minion-02:
----------
          ID: webserver
    Function: pkg.installed
        Name: httpd
      Result: True
     Comment: The following packages were installed/updated: httpd
     Started: <span class="token number">18</span>:24:07.033564
    Duration: <span class="token number">65091.443</span> ms
     Changes:   
              ----------
              httpd:
                  ----------
                  new:
                      <span class="token number">2.4</span>.6-45.el7.centos
                  old:
              httpd-tools:
                  ----------
                  new:
                      <span class="token number">2.4</span>.6-45.el7.centos
                  old:
              mailcap:
                  ----------
                  new:
                      <span class="token number">2.1</span>.41-2.el7
                  old:
----------
          ID: webserver
    Function: service.running
        Name: httpd
      Result: True
     Comment: Started Service httpd
     Started: <span class="token number">18</span>:25:12.142495
    Duration: <span class="token number">5599.171</span> ms
     Changes:   
              ----------
              httpd:
                  True

Summary
------------
Succeeded: <span class="token number">2</span> <span class="token punctuation">(</span>changed<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
Failed:    <span class="token number">0</span>
------------
Total states run:     <span class="token number">2</span>
<span class="token punctuation">[</span>root/srv/salt<span class="token punctuation">]</span> <span class="token punctuation">]</span>$

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="较复杂的state" tabindex="-1"><a class="header-anchor" href="#较复杂的state" aria-hidden="true">#</a> 较复杂的state</h3><p><strong>/srv/salt/ssh/init.sls</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>openssh-client:
  pkg.installed
/etc/ssh/ssh_config:
  file.managed:
    - user: root
    - group: root
    - mode: <span class="token number">644</span>
    - source: salt://ssh/ssh_config
    - require:
      - pkg: openssh-client
<span class="token comment">#ssh/init.sls 意思是当执行 salt &#39;*&#39; state.sls ssh的时候其实就是执行init.sls</span>
<span class="token comment">#第一行:文件名,全文件唯一,如果pkg等模块没跟- name 包名, 默认用的ID作为-name</span>
<span class="token comment">#第二行: 简写,意思pkg下的installed函数</span>
<span class="token comment">#第三行: ID 告诉minion下载的文件应该放哪里!</span>
<span class="token comment">#第四行:简写</span>
<span class="token comment">#第八行:source是告诉minion从哪里下载源文件!</span>
<span class="token comment">#salt://ssh/ssh_config其实就是/srv/salt/ssh/ssh_config 前面/srv/salt这个路径和file_roots的配置有关</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>/srv/salt/ssh/server.sls</strong></p><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>include:
  - ssh
#include表示包含意思，就是把ssh/init.sls直接包含进来

openssh-server:
 pkg.installed

sshd:
  service.running:
    - require:
      - pkg: openssh-client
      - pkg: openssh-server
      - file: /etc/ssh/banner
      - file: /etc/ssh/sshd_config

/etc/ssh/sshd_config:
  file.managed:
    - user: root
    - group: root
    - mode: 644
    - source: salt://ssh/sshd_config
    - require:
      - pkg: openssh-server
/etc/ssh/banner:
  file:
    - managed
    - user: root
    - group: root
    - mode: 644
    - source: salt://ssh/banner
    - require:
      - pkg: openssh-server

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>此时的目录结构应该是</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── ssh
│   ├── banner
│   ├── init.sls
│   ├── server.sls
│   ├── ssh_config
│   └── sshd_config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>关于include</strong>古官网的demo</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>include:
  - ssh.server
extend:
  /etc/ssh/banner:
    file:
      - source: salt://ssh/custom-banner
 
<span class="token comment">#包含ssh/server.sls,扩展/etc/ssh/banner，重新其source而其它的如user,group等不变，与include一致。</span>

include:
  - apache
extend:
  apache:
  service:
    - watch:
      - pkg: mod_python
<span class="token comment">#把apache.sls包含进来，想apache-service是追加了依赖关系(watch也是依赖系统的函数).</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关于渲染器-render-system" tabindex="-1"><a class="header-anchor" href="#关于渲染器-render-system" aria-hidden="true">#</a> 关于渲染器 render system</h2><blockquote><p>salt默认是用的yaml_jinja渲染器处理ss文件,会优先使用jinjia处理,然后传给yaml处理然后生成salt需要的python数据类型.</p></blockquote><p><strong>apache/init.sls</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>apache:
  pkg:installed:
    <span class="token punctuation">{</span>% <span class="token keyword">if</span> grains<span class="token punctuation">[</span><span class="token string">&#39;os&#39;</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;CentoOS&#39;</span> %<span class="token punctuation">}</span>
    - name: httpd
    <span class="token punctuation">{</span>% endif %<span class="token punctuation">}</span>
  service.running:
    <span class="token punctuation">{</span>% <span class="token keyword">if</span> grains<span class="token punctuation">[</span><span class="token string">&#39;os&#39;</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;CentoOS&#39;</span> %<span class="token punctuation">}</span>
    - name: httpd
    <span class="token punctuation">{</span>% endif %<span class="token punctuation">}</span>
    - watch:
      - pkg: apache
      
<span class="token comment">#简单的例子,使用jinja结合grains进行判断</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>user/init.sls</strong></p><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>{% set users = [&#39;jerry&#39;,&#39;tom&#39;,&#39;gaga&#39;] %}
{% for user in users %}
{{ user }}:
 user.present:
   - shell: /bin/bash
   - home: /home/{{ user }}
{% endfor %}

---------------------------

{% if salt[&#39;cmd.run&#39;](&#39;uname -i&#39;) == &#39;x86_64&#39; %}
hadoop:
 user.present:
   - shell: /bin/bash
   - home: /home/hadoop
{% elif salt[&#39;cmd.run&#39;](&#39;uname -i&#39;) == &#39;i386&#39; %}
openstack:
 user.present:
   - shell: /bin/bash
- home: /home/openstack
{% else %}
django:
 user.present:
   - shell: /sbin/nologin
{% endif %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="py渲染器" tabindex="-1"><a class="header-anchor" href="#py渲染器" aria-hidden="true">#</a> py渲染器</h2><blockquote><p>纯python写的sls文件.如果使用其他的渲染器,需要在文件开头声明,!py就是声明用的py渲染器,</p><p>py中可用的变量有<strong>salt</strong>,<strong>grains</strong>,<strong>pillar</strong>,<strong>opts</strong>,<strong>env</strong>,<strong>sls</strong>,前三个分别对应jinja里的salt,grains,pillar,<strong>opts</strong>是minion的配置文件的字典，<strong>env</strong>对应的是环境如base,<strong>sls</strong>对应的是sls的文件名</p></blockquote><div class="language-PYTHON line-numbers-mode" data-ext="PYTHON"><pre class="language-PYTHON"><code>#!py
import os
def run():
   &#39;&#39;&#39;add user hadoop&#39;&#39;&#39;
platform = os.popen(&#39;uname -a&#39;).read().strip()
if platform == &#39;x86_64&#39;:
   return {&#39;hadoop&#39;: {&#39;user&#39;: [&#39;present&#39;,{&#39;shell&#39;: &#39;/bin/bash&#39;}, {&#39;home&#39;: &#39;/home/hadoop&#39;}]}}
elif platform == &#39;i386&#39;:
       return {&#39;openstack&#39;: {&#39;user&#39;: [&#39;present&#39;, {&#39;shell&#39;: &#39;/bin/bash&#39;}, {&#39;home&#39;: &#39;/home/openstack&#39;}]}}
else:
   return {&#39;django&#39;: {&#39;user&#39;: [&#39;present&#39;, {&#39;shell&#39;: &#39;/sbin/nologin&#39;}]}}

#注意的是return的数据结构{ID: {module: [func, arg1,arg2,...,]}} 或 {ID: {module.func: [arg1,arg2,..,]}} 。表示的内容与“示例；salt字典”表达的相同
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="state的执行顺序" tabindex="-1"><a class="header-anchor" href="#state的执行顺序" aria-hidden="true">#</a> state的执行顺序</h2><blockquote><p>stata执行,也就是.sls文件的执行是无序的.为了保证每次的顺序是一致的,就加入了state order ,</p><p>先了解下高级数据(High Data)和低级数据(Low Data).</p><p>高级数据就是指编写的sls文件的数据</p><p>低级数据就是经过render和parser编译过的数据</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root~<span class="token punctuation">]</span> <span class="token punctuation">]</span><span class="token variable">$salt</span> <span class="token string">&#39;minion-01&#39;</span> state.show_highstate
minion-01:
    ----------
    webserver:
        ----------
        __env__:
            base
        __sls__:
            webserver
        pkg:
            <span class="token operator">|</span>_
              ----------
              name:
                  httpd
            - installed
            <span class="token operator">|</span>_
              ----------
              order:
                  <span class="token number">10000</span>
        service:
            <span class="token operator">|</span>_
              ----------
              name:
                  httpd
            - running
            <span class="token operator">|</span>_
              ----------
              -pkg:
                  httpd
              reqire:
                  None
            <span class="token operator">|</span>_
              ----------
              order:
                  <span class="token number">10001</span>
<span class="token punctuation">[</span>root~<span class="token punctuation">]</span> <span class="token punctuation">]</span><span class="token variable">$salt</span> <span class="token string">&#39;minion-01&#39;</span> state.show_lowstate
minion-01:
    <span class="token operator">|</span>_
      ----------
      __env__:
          base
      __id__:
          webserver
      __sls__:
          webserver
      fun:
          installed
      name:
          httpd
      order:
          <span class="token number">10000</span>
      state:
          pkg
    <span class="token operator">|</span>_
      ----------
      -pkg:
          httpd
      __env__:
          base
      __id__:
          webserver
      __sls__:
          webserver
      fun:
          running
      name:
          httpd
      order:
          <span class="token number">10001</span>
      reqire:
          None
      state:
          <span class="token function">service</span>
<span class="token punctuation">[</span>root~<span class="token punctuation">]</span> <span class="token punctuation">]</span>$

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>查看可知,里面有个order,这个是默认salt 会自动设置,从10000开始.可通过修改master <code>state_auto_order: False</code>来关闭</p></blockquote><h2 id="order的设定" tabindex="-1"><a class="header-anchor" href="#order的设定" aria-hidden="true">#</a> order的设定</h2><ul><li>include</li></ul><blockquote><p>被include的文件Order靠前,先执行</p></blockquote><ul><li>手动定义order</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>httpd:
  pkg:
    - installed
    - order: 1
#order的值越小,优先级越高.但是-1 是最后!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>依赖关系系统</li></ul><p>就是前面使用过的 - require</p><h2 id="依赖关系系统-requisite-system" tabindex="-1"><a class="header-anchor" href="#依赖关系系统-requisite-system" aria-hidden="true">#</a> 依赖关系系统 requisite system</h2><blockquote><p>我们已经使用过依赖关系系统了,就是定义状态和状态之间的依赖关系,常用的函数有 <code>require</code>和<code>watch</code> 以及他们的变种<code>require_in</code>和<code>watch-in</code></p><p>四者有何区别?</p><p>require,watch是指依赖，require_in,watch_in是指被依赖</p></blockquote><blockquote><p>watch 常用于service,而且当依赖条件发生变化的时候会执行一些动作</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/etc/httpd/httpd.conf:
  file:
    - managed
    - source: salt://httpd/httpd.conf
  pkg.installed
  service:
    - running
    - require:
      - pkg: httpd
    - watch:
      - file://etc/httpd/httpd.conf <span class="token comment">#当httpd.conf改变时，重启httpd服务</span>
    
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>    

/etc/httpd/httpd.conf:
  file:
    - managed
    - source: salt://httpd/httpd.conf   
    - watch_in:
      - service: httpd
  httpd:
    pkg:
      - installed
      - require_in:
        - service: httpd
    service:
      - running
    
    
    
    
    
    
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="salt-state多环境" tabindex="-1"><a class="header-anchor" href="#salt-state多环境" aria-hidden="true">#</a> salt state多环境</h2><blockquote><p>针对不同的环境,应用不同state的file,比如开发,测试,生产等.</p><p>通过修改master对不同的环境应用不通过的目录</p></blockquote><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>#官方demo
Example:
  file_roots:
    base:
      - /srv/salt/
    dev:
      - /srv/salt/dev/services
      - /srv/salt/dev/states
    prod:
      - /srv/salt/prod/services
      - /srv/salt/prod/states
#file_roots 配置salt配置的存放目录, 其中base环境是必要的, 指定top.sls存放的位置.
#默认没指定环境时则从base目录获取文件
#其它则是一些自定义的, 可以通过环境变量指定.
#这样可以逻辑上隔离一些环境配置.
#每一个环境都可以定义多个目录, 优先级关系由定义目录的顺序决定.
file_roots:
  base:
    - /srv/salt/foo
    - /srv/salt/bar
#如果寻找 salt://file.sls, 如果都存在/srv/salt/foo/file.sls和/srv/salt/bar/file.sls, 则使用第一个找到的.    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一个例子</p><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>file_roots:
  base:
    - /srv/salt/prod
  qa:
    - /srv/salt/qa
    - /srv/salt/prod
  dev:
    - /srv/salt/dev
    - /srv/salt/qa
    - /srv/salt/prod
#/srv/salt/prod 里的配置是在三种环境下都可以, /srv/salt/qa 只在qa和dev环境下可用, /srv/salt/dev则只在dev环境下可用.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简答你的实施案例</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#master配置</span>
file_roots:
  base:
    - /home/base/
  dev:
    - /home/dev/
    - /home/base/
    
<span class="token comment">#base环境   </span>
<span class="token comment">#/home/base</span>
├── envtest.sls
└── top.sls

<span class="token comment">#cat /home/base/envtest.sls</span>
envtest:
  cmd.run:
    - name: <span class="token string">&quot;echo &#39;[base] env&#39;&quot;</span>    

<span class="token comment">#dev环境</span>
<span class="token comment">#/home/dev/</span>
├── mytest.sls
└── top.sls

<span class="token comment">#cat /home/dev/mytest.sls</span>
envtest:
  cmd.run:
    - name: <span class="token string">&quot;echo &#39;[dev] env&#39;&quot;</span>



<span class="token comment">##执行效果如下,如果不添加环境变量,则提示找不到文件</span>
<span class="token punctuation">[</span>root/srv/salt/dev<span class="token punctuation">]</span> <span class="token punctuation">]</span><span class="token variable">$salt</span> <span class="token string">&#39;minion-01&#39;</span> state.sls mytest  <span class="token assign-left variable">test</span><span class="token operator">=</span>True
minion-01:
    Data failed to compile:
----------
    No matching sls found <span class="token keyword">for</span> <span class="token string">&#39;mytest&#39;</span> <span class="token keyword">in</span> <span class="token function">env</span> <span class="token string">&#39;base&#39;</span>
ERROR: Minions returned with non-zero <span class="token builtin class-name">exit</span> code

<span class="token comment">#加上环境变量执行</span>
<span class="token punctuation">[</span>root/srv/salt/dev<span class="token punctuation">]</span> <span class="token punctuation">]</span><span class="token variable">$salt</span> <span class="token string">&#39;minion-01&#39;</span> state.sls mytest <span class="token assign-left variable">saltenv</span><span class="token operator">=</span><span class="token string">&#39;dev&#39;</span> <span class="token assign-left variable">test</span><span class="token operator">=</span>True
minion-01:
----------
          ID: mytest
    Function: cmd.run
        Name: <span class="token builtin class-name">echo</span> dev-env
      Result: None
     Comment: Command <span class="token string">&quot;echo dev-env&quot;</span> would have been executed
     Started: <span class="token number">23</span>:54:46.298421
    Duration: <span class="token number">0.422</span> ms
     Changes:   

Summary
------------
Succeeded: <span class="token number">1</span> <span class="token punctuation">(</span>unchanged<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
Failed:    <span class="token number">0</span>
------------
Total states run:     <span class="token number">1</span>
<span class="token punctuation">[</span>root/srv/salt/dev<span class="token punctuation">]</span> <span class="token punctuation">]</span>$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="salt-schedule-salt中的crontab" tabindex="-1"><a class="header-anchor" href="#salt-schedule-salt中的crontab" aria-hidden="true">#</a> salt schedule(salt中的crontab)</h2><blockquote><p>周期性的执行一些函数,需要注意的是: 在minion上执行salt可执行模块里的函数,在master执行的是runner模块的函数.</p><p>共有三种方式:master minion pillar</p></blockquote><ul><li>master端</li><li>minion端</li><li>pillar</li></ul><blockquote><p>一般而言,尤其是在minion端配置,基本不会用到的,主要还是一pillar为主</p></blockquote><p><strong>修改top.sls</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#添加</span>
  - schedule
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>/srv/pillar/schedule.sls</strong></p><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>schedule:
  test-job:
    function: cmd.run
    seconds: 10
    args:
      - &#39;date &gt;&gt; /date.log&#39;
      
#没隔10S 在/目录的date.log文件中记录一条时间
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>salt <span class="token string">&quot;*&quot;</span> saltutil.refresh_pillar
<span class="token comment">#刷新pillar到minion</span>

<span class="token comment">#回到minion 可以查看到</span>
<span class="token punctuation">[</span>root@minion-01 /<span class="token punctuation">]</span><span class="token comment"># ls</span>
bin  boot  date.log  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
<span class="token punctuation">[</span>root@minion-01 /<span class="token punctuation">]</span><span class="token comment"># cat date.log </span>
Fri Mar <span class="token number">24</span> 02:27:40 CST <span class="token number">2017</span>
Fri Mar <span class="token number">24</span> 02:27:50 CST <span class="token number">2017</span>
Fri Mar <span class="token number">24</span> 02:28:00 CST <span class="token number">2017</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="salt-ssh" tabindex="-1"><a class="header-anchor" href="#salt-ssh" aria-hidden="true">#</a> salt ssh</h2><blockquote><p>salt-ssh 是 0.17.0 新出现的一个功能.对于有些不能安装minion的机器,ssh不失为一种好的选择但是SSH并不能取代minion,salt的有些功能不支持ssh.而且走的是SSH 并不是ZeroMQ,所以速度会有所影响</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#首先安装salt-ssh.</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> salt-ssh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>[root~] ]$cat /etc/salt/roster #roster文件名和路径!
minion-01:
  host: 192.168.247.153
  user: root
  passwd: centos
minion-02:
  host: 192.168.247.154
  user: root
  passwd: centos
  sudo: True

#如果不给passwd的话,执行salt-ssh会提示输入密码
#普通用户给sudo权限
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>#第一次使用记得加参数 -i 否则报错如下
[root~] ]$salt-ssh &#39;minion-01&#39; test.ping
minion-01:
    ----------
    retcode:
        254
    stderr:
    stdout:
        The host key needs to be accepted, to auto accept run salt-ssh with the -i flag:
        The authenticity of host &#39;192.168.247.153 (192.168.247.153)&#39; can&#39;t be established.
        ECDSA key fingerprint is 16:f6:f5:49:24:9c:91:da:d7:02:58:a2:14:08:e4:15.
        Are you sure you want to continue connecting (yes/no)? 
        
#第一次运行 添加-i参数
[root~] ]$salt-ssh &#39;minion-01&#39; test.ping -i
minion-01:
    True
[root~] ]$salt-ssh &#39;minion-01&#39; test.ping
minion-01:
    True
[root~] ]$

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="returners" tabindex="-1"><a class="header-anchor" href="#returners" aria-hidden="true">#</a> Returners</h2><p>略</p><h2 id="扩展salt" tabindex="-1"><a class="header-anchor" href="#扩展salt" aria-hidden="true">#</a> 扩展salt</h2><p>略</p>`,253);function r(c,v){return e(),i("div",null,[d,a("more"),t])}const o=s(l,[["render",r],["__file","SaltStack学习.html.vue"]]);export{o as default};
