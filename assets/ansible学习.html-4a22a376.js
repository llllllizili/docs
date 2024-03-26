import{_ as l,X as t,Y as d,Z as r,a0 as n,a1 as e,a2 as i,$ as s,F as c}from"./framework-7663974c.js";const u="/assets/2511748-ee48dcc8af53cf00-50f30741.jpg",o="/assets/2511748-1001b5832ebba246-c13c20c3.jpg",v={},p=s('<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><div class="hint-container danger"><p class="hint-container-title">请注意</p><p>文章写于2017年，请注意内容的有效性。</p></div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p><strong>Ansible is Simple IT Automation——简单的自动化IT工具，可以实现 批量系统配置、批量程序部署、批量运行命令等功能，简而言之，就是</strong> <span style="color:red;"><strong>分布式集中管理工具</strong></span>， <strong>通俗的讲就是批量在远端服务器上执行命令。其实，ansible自身不具备部署能力的，只是提供框架，其核心为模块</strong></p>',4),m=s('<h2 id="什么是ansible" tabindex="-1"><a class="header-anchor" href="#什么是ansible" aria-hidden="true">#</a> 什么是ansible?</h2><figure><img src="'+u+'" alt="ansible架构" tabindex="0" loading="lazy"><figcaption>ansible架构</figcaption></figure><table><thead><tr><th style="text-align:left;">五大部分</th><th style="text-align:left;">功能</th></tr></thead><tbody><tr><td style="text-align:left;">connection plugins</td><td style="text-align:left;">远程连接插件</td></tr><tr><td style="text-align:left;">hosts</td><td style="text-align:left;">定义管理主机或主机组</td></tr><tr><td style="text-align:left;">modules</td><td style="text-align:left;">包含各个核心模块及自定义模块</td></tr><tr><td style="text-align:left;">Plugin</td><td style="text-align:left;">完成模块功能的补充，如日志插件、邮件插件等</td></tr><tr><td style="text-align:left;">Playbook</td><td style="text-align:left;">ansible的任务配置文件，将多个任务定义在剧本中进行管理</td></tr></tbody></table><h2 id="ansible-的工作流程" tabindex="-1"><a class="header-anchor" href="#ansible-的工作流程" aria-hidden="true">#</a> ansible 的工作流程</h2><p><img src="'+o+`" alt="ansible流程" loading="lazy"> ​</p><p>​</p><h2 id="安装ansible" tabindex="-1"><a class="header-anchor" href="#安装ansible" aria-hidden="true">#</a> 安装ansible</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#配置源  ansible默认不在yum仓库中</span>
<span class="token function">rpm</span> <span class="token parameter variable">-iUvh</span> http://ftp.jaist.ac.jp/pub/Linux/Fedora/epel//7/x86_64/e/epel-release-7-9.noarch.rpm

<span class="token comment">#此源主要是为了安装PyYAML</span>
<span class="token function">wget</span> http://mirrors.163.com/.help/CentOS7-Base-163.repo          
<span class="token function">mv</span> CentOS7-Base-163.repo /etc/yum.repos.d/

yum <span class="token parameter variable">-y</span> <span class="token function">install</span> ansible

ansible <span class="token parameter variable">--version</span>
<span class="token comment">#可查看当前ansible版本</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置登录" tabindex="-1"><a class="header-anchor" href="#配置登录" aria-hidden="true">#</a> 配置登录</h2><blockquote><p>ansible 使用ssh登录，所以主奴之间要配置密钥进行认证，这样才能开始正常工作</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token comment">#回车</span>
<span class="token comment">#将会生成密钥/root/.ssh/id_rsa.pub</span>

ssh-copy-id <span class="token parameter variable">-i</span> root@ipaddress 
<span class="token comment">#公钥将会被cp到各个ipaddress节点</span>

<span class="token comment">#至此 已经实现了master与各节点的连接</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定义ansible的节点清单" tabindex="-1"><a class="header-anchor" href="#定义ansible的节点清单" aria-hidden="true">#</a> 定义Ansible的节点清单</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim /etc/ansible/hosts
[testgroup]-----#服务器组的名字，方便统一管理，划分和命名要有规划
192.168.1.XX----#组内节点的地址
192.168.1.XXX
等等

[websever]
....
[DBserver]
....
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="简单的远程操作" tabindex="-1"><a class="header-anchor" href="#简单的远程操作" aria-hidden="true">#</a> 简单的远程操作</h2><p><strong>通过执行who，查看服务器登录信息</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible testgroup <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&#39;who&#39;</span> <span class="token comment">#组</span>
ansible all <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&#39;who&#39;</span>   <span class="token comment"># 所有</span>
ansible <span class="token number">192.168</span>.1.XX <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&#39;who&#39;</span>  <span class="token comment">#单个ip</span>

<span class="token comment">##</span>
<span class="token number">192.168</span>.247.152 <span class="token operator">|</span> SUCCESS <span class="token operator">|</span> <span class="token assign-left variable">rc</span><span class="token operator">=</span><span class="token number">0</span> <span class="token operator">&gt;&gt;</span>
root     :0           <span class="token number">2017</span>-02-15 <span class="token number">22</span>:33 <span class="token punctuation">(</span>:0<span class="token punctuation">)</span>
root     pts/0        <span class="token number">2017</span>-02-15 <span class="token number">22</span>:34 <span class="token punctuation">(</span>:0<span class="token punctuation">)</span>
root     pts/1        <span class="token number">2017</span>-02-18 <span class="token number">13</span>:08 <span class="token punctuation">(</span><span class="token number">192.168</span>.247.1<span class="token punctuation">)</span>
root     pts/2        <span class="token number">2017</span>-03-07 <span class="token number">22</span>:52 <span class="token punctuation">(</span>:0<span class="token punctuation">)</span>
root     pts/3        <span class="token number">2017</span>-03-07 <span class="token number">22</span>:54 <span class="token punctuation">(</span><span class="token number">192.168</span>.247.156<span class="token punctuation">)</span>


<span class="token comment"># 以ashin用户身份ping .134</span>
ansible <span class="token number">192.168</span>.1.134 <span class="token parameter variable">-m</span> <span class="token function">ping</span> <span class="token parameter variable">-u</span> zili

<span class="token comment"># 以用户zili身份使用sudo来ping 组testgroup</span>
<span class="token comment"># -K是输入root密码</span>
ansible v1 <span class="token parameter variable">-m</span> <span class="token function">ping</span> <span class="token parameter variable">-u</span> zili <span class="token parameter variable">--sudo</span> <span class="token parameter variable">-K</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定义变量" tabindex="-1"><a class="header-anchor" href="#定义变量" aria-hidden="true">#</a> 定义变量</h2><h3 id="定义主机变量" tabindex="-1"><a class="header-anchor" href="#定义主机变量" aria-hidden="true">#</a> 定义主机变量</h3><div class="language-YAML line-numbers-mode" data-ext="YAML"><pre class="language-YAML"><code>    [web]
    192.168.247.152  http_port=80
    ...............  http_port=303
    [mysql]
    192.168.247.152
    ...
    
    #组名以及ip根本自己需求定义
    #主机指定变量，以便后面供palybooks配置使用。
    #定义两台web服务器的apache参数http_port，可以让两台服务器产生的apache配置文件httpd.conf差异化
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义组变量" tabindex="-1"><a class="header-anchor" href="#定义组变量" aria-hidden="true">#</a> 定义组变量</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>    <span class="token punctuation">[</span>web<span class="token punctuation">]</span>
    192.168.247.152
    <span class="token punctuation">[</span>web<span class="token punctuation">:</span>vars<span class="token punctuation">]</span>
    http_port=80
    
    <span class="token comment">#组变量的作用域是覆盖组所有成员，通过定义一个新块，块名由组名+ &quot;:vars&quot;组成。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="嵌套组" tabindex="-1"><a class="header-anchor" href="#嵌套组" aria-hidden="true">#</a> 嵌套组</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>    <span class="token punctuation">[</span>web<span class="token punctuation">]</span>
    192.168.247.152
    <span class="token punctuation">[</span>mysql<span class="token punctuation">]</span>
    192.168.247.152
    <span class="token punctuation">...</span>
    <span class="token punctuation">[</span>nested：children<span class="token punctuation">]</span>
    web
    mysql
    <span class="token punctuation">[</span>nested：vars<span class="token punctuation">]</span>
    ntp_server=s1b.time.edu.cn   
    
<span class="token comment">##</span>
嵌套组定义一个新块，块名由 组名+&quot;<span class="token punctuation">:</span>chilren&quot; 组成。
同是嵌套组也可以定义组变量，作用域是嵌套组里的所有组<span class="token punctuation">,</span>  
嵌套组只能在/usr/bin/ansible<span class="token punctuation">-</span>playbook中，
在/usr/bin/ansible中不起作用，下面会介绍playbook
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分离主机和组特定数据" tabindex="-1"><a class="header-anchor" href="#分离主机和组特定数据" aria-hidden="true">#</a> 分离主机和组特定数据</h3><blockquote><p>为更好的规范定义的<strong>主机与组变量</strong>，我们实际是不会在hosts里直接写的var，将定义的主机名与组变量单独剥离出来放到指定的文件中，将采用YAML格式存放 全局的变量放在group_vars/all中，局部变量放在group_vars/x中，特定的host使用特定的变量可以使用host_vars/x，子group中的变量会覆盖上级变量，hosts变量总是覆盖groups变量 存放位置规定：&quot;/etc/ansible/group_vars/名&quot;和&quot;/etc/ansible/host_vars/主机名&quot;分别存放指定组名或主机名定义的变量，如 <code>/etc/ansible/group\\_vars/mysql.yml</code><code>/etc/ansible/host\\_vars/192.168.11.1.yml</code> 使用变量要用jinja语法去引用</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>cat mysql.yml

   <span class="token punctuation">---</span>
    <span class="token key atrule">ntp_server</span><span class="token punctuation">:</span> s1b.time.edu.cn
    <span class="token key atrule">database_server</span><span class="token punctuation">:</span> 192.168.247.152

<span class="token comment">##</span>
规范变量名字，是因为，ansible会自动加载这目录下的变量，
否则无法调用，当然也有解决不放此目录的方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@master ansible]# tree
├── create_user.yml
├── group_vars
│   └── t1.yml
├── hosts

[root@master ansible]# cat hosts
[t1]
10.1.27.24

所以
├── group_vars
│   └── t1.yml  #他的内容就是t1的变量

[root@master ansible]# cat group_vars/t1.yml 
---
user: ansibleTest1

[root@master ansible]# cat create_user.yml 
# create user
---
- name: create user
  hosts: t1
  user: root
  tasks:
  - name: useradd {{ user }}  #引用t1变量
    user: name=&quot;{{ user }}&quot;

返回结果如下
[root@master ansible]# ansible-playbook create_user.yml 

PLAY [create user] ***********************************************************************************************************

TASK [Gathering Facts] *******************************************************************************************************
ok: [10.1.27.24]

TASK [useradd ansibleTest1] **************************************************************************************************
changed: [10.1.27.24]

PLAY RECAP *******************************************************************************************************************
10.1.27.24                 : ok=2    changed=1    unreachable=0    failed=0   

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命令参数" tabindex="-1"><a class="header-anchor" href="#命令参数" aria-hidden="true">#</a> 命令参数</h2><blockquote><p>ansible &lt; host-pattern &gt; [ options ]</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-m</span> MODULE_NAME, --module-name<span class="token operator">=</span>MODULE_NAME     要执行的模块，默认为 <span class="token builtin class-name">command</span>  
<span class="token parameter variable">-a</span> MODULE_ARGS, <span class="token parameter variable">--args</span><span class="token operator">=</span>MODULE_ARGS      模块的参数  
<span class="token parameter variable">-u</span> REMOTE_USER, <span class="token parameter variable">--user</span><span class="token operator">=</span>REMOTE_USER <span class="token function">ssh</span>      连接的用户名，默认用 root，ansible.cfg 中可以配置
-k, --ask-pass      提示输入 <span class="token function">ssh</span> 登录密码，当使用密码验证登录的时候用     
-s, <span class="token parameter variable">--sudo</span>      <span class="token function">sudo</span> 运行
<span class="token parameter variable">-U</span> SUDO_USER, --sudo-user<span class="token operator">=</span>SUDO_USER     <span class="token function">sudo</span> 到哪个用户，默认为 root
-K, --ask-sudo-pass     提示输入 <span class="token function">sudo</span> 密码，当不是 NOPASSWD 模式时使用
<span class="token parameter variable">-B</span> <span class="token environment constant">SECONDS</span>, <span class="token parameter variable">--background</span><span class="token operator">=</span><span class="token environment constant">SECONDS</span>       run asynchronously, failing after X seconds<span class="token punctuation">(</span>default<span class="token operator">=</span>N/A<span class="token punctuation">)</span>
<span class="token parameter variable">-P</span> POLL_INTERVAL, <span class="token parameter variable">--poll</span><span class="token operator">=</span>POLL_INTERVAL      <span class="token builtin class-name">set</span> the poll interval <span class="token keyword">if</span> using
<span class="token parameter variable">-B</span> <span class="token punctuation">(</span>default<span class="token operator">=</span><span class="token number">15</span><span class="token punctuation">)</span>
-C, <span class="token parameter variable">--check</span>     只是测试一下会改变什么内容，不会真正去执行
<span class="token parameter variable">-c</span> CONNECTION   连接类型<span class="token punctuation">(</span>default<span class="token operator">=</span>smart<span class="token punctuation">)</span>
<span class="token parameter variable">-f</span> FORKS, <span class="token parameter variable">--forks</span><span class="token operator">=</span>FORKS     fork 多少个进程并发处理，默认 <span class="token number">5</span>
<span class="token parameter variable">-i</span> INVENTORY, --inventory-file<span class="token operator">=</span>INVENTORY      指定hosts文件路径默认 default <span class="token operator">=</span>/etc/ansible/hosts
<span class="token parameter variable">-l</span> SUBSET, <span class="token parameter variable">--limit</span><span class="token operator">=</span>SUBSET       指定一个 pattern，对<span class="token operator">&lt;</span>host_pattern<span class="token operator">&gt;</span>已经匹配的主机中再过滤一次
--list-hosts        只打印有哪些主机会执行这个 playbook 文件：不是实际执行该 playbook
<span class="token parameter variable">-M</span> MODULE_PATH, --module-path<span class="token operator">=</span>MODULE_PATH       要执行的模块的路径，默认为/usr/share/ansible/
-o, --one-line      压缩输出，摘要输出
--private-key<span class="token operator">=</span>PRIVATE_KEY_FILE      私钥路径
<span class="token parameter variable">-T</span> TIMEOUT, <span class="token parameter variable">--timeout</span><span class="token operator">=</span>TIMEOUT   <span class="token function">ssh</span> 连接超时时间，默认 <span class="token number">10</span> 秒
<span class="token parameter variable">-t</span> TREE, <span class="token parameter variable">--tree</span><span class="token operator">=</span>TREE            日志输出到该目录，日志文件名会以主机名命名
-v, <span class="token parameter variable">--verbose</span>   verbose mode <span class="token punctuation">(</span>-vvv <span class="token keyword">for</span> more, <span class="token parameter variable">-vvvv</span> to <span class="token builtin class-name">enable</span> connection debugging<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pattern" tabindex="-1"><a class="header-anchor" href="#pattern" aria-hidden="true">#</a> Pattern</h2><p>可以直接指定ip或hosts中的组名，同时指定多个组或者多个<code>ip</code>使用<code>:</code>分割</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ansible group1:group2 -m ping
ansible ip1:ip2 -m ping

#all  或者 *  代表全部
ansible all -m ping

# 感叹号 ! 表示非
g1:!g2   #表示在g1分组中，但是不在g2中的hosts

# &amp;符号表示交集
g1:&amp;g2  #表示在g1分组中，也在g2中的hosts

#使用下标
g1[2]  #组的第三个
g1[0:3] #组的前四个
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用模块" tabindex="-1"><a class="header-anchor" href="#常用模块" aria-hidden="true">#</a> 常用模块</h2><h3 id="copy模块" tabindex="-1"><a class="header-anchor" href="#copy模块" aria-hidden="true">#</a> copy模块</h3><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>目的：把主控端/root目录下的a.sh文件拷贝到到指定节点上  
命令：ansible 192.168.247.152 -m copy -a &#39;src=/root/a.sh dest=/tmp/ owner=root group=root mode=0755&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="file模块" tabindex="-1"><a class="header-anchor" href="#file模块" aria-hidden="true">#</a> file模块</h3><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>目的：更改指定节点上/tmp/t.sh的权限为755，属主和属组为root  
命令：ansible all -m file -a &quot;dest=/tmp/t.sh mode=755 owner=root group=root&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cron模块" tabindex="-1"><a class="header-anchor" href="#cron模块" aria-hidden="true">#</a> cron模块</h3><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>    目的：在指定节点上定义一个计划任务，每隔3分钟到主控端更新一次时间  
    命令：ansible all -m cron -a &#39;name=&quot;custom job&quot; minute=*/3 hour=* day=* month=* weekday=* job=&quot;/usr/sbin/ntpdate 192.168.247.152&quot;&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="group模块" tabindex="-1"><a class="header-anchor" href="#group模块" aria-hidden="true">#</a> group模块</h3><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>目的：在所有节点上创建一个组名为nolinux，gid为2014的组  
命令：ansible all -m group -a &#39;gid=2014 name=nolinux&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uesr模块" tabindex="-1"><a class="header-anchor" href="#uesr模块" aria-hidden="true">#</a> uesr模块</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>目的：在所有节点上创建一个用户名为nolinux，组为nolinux的用户  
命令：ansible all <span class="token parameter variable">-m</span> user <span class="token parameter variable">-a</span> <span class="token string">&#39;name=nolinux groups=nolinux state=present&#39;</span>
删除用户  
命令：ansible all <span class="token parameter variable">-m</span> user <span class="token parameter variable">-a</span> <span class="token string">&#39;name=nolinux state=absent remove=yes&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="yum模块" tabindex="-1"><a class="header-anchor" href="#yum模块" aria-hidden="true">#</a> yum模块</h3><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>目的：在指定节点上安装 apache 服务  
命令：ansible all -m yum -a &quot;state=present name=httpd&quot;
#state=latest 安装最新版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shell模块" tabindex="-1"><a class="header-anchor" href="#shell模块" aria-hidden="true">#</a> shell模块</h3><div class="language-SHELL line-numbers-mode" data-ext="SHELL"><pre class="language-SHELL"><code>目的：在指定节点上安装 apache 服务  
命令：ansible testgroup -m shell -a &#39;yum -y install httpd&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="command模块" tabindex="-1"><a class="header-anchor" href="#command模块" aria-hidden="true">#</a> command模块</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>目的：在指定节点上运行hostname命令
命令：ansible 192.168.247.152 -m command -a &#39;hostname&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="raw模块" tabindex="-1"><a class="header-anchor" href="#raw模块" aria-hidden="true">#</a> raw模块</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>目的：在192.168.247.152节点上运行ifconfig命令
命令：ansible 192.168.247.152 -m raw-a &#39;ifconfig|eth0&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="script模块" tabindex="-1"><a class="header-anchor" href="#script模块" aria-hidden="true">#</a> script模块</h3><div class="language-SHELL line-numbers-mode" data-ext="SHELL"><pre class="language-SHELL"><code>目的：在指定节点上执行/root/a.sh脚本(该脚本是在ansible主控端)  
命令：ansible 10.1.1.113 -m script -a &#39;/root/a.sh&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="command-script-shell-raw的区别" tabindex="-1"><a class="header-anchor" href="#command-script-shell-raw的区别" aria-hidden="true">#</a> command,script,shell,raw的区别</h3><blockquote><p>思考：四者有何区别？</p></blockquote><p>command模块 [执行远程命令]</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ansible client -m command -a &quot;uname -n&quot; -s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>script模块 [在远程主机执行主控端的shell/python脚本]</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ansible client -m script -a &quot;/soft/ntpdate.py&quot; -s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>shell模块 [执行远程主机的shell/python脚本]</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ansible client -m shell -a &quot;/soft/file.py&quot; -s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>raw模块 [类似于command模块、支持管道传递]</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ansible client -m raw -a &quot;ifconfig eth0|sed -n 2p|awk &#39;{print \\$2}&#39;&quot; -s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="service模块" tabindex="-1"><a class="header-anchor" href="#service模块" aria-hidden="true">#</a> service模块</h3><div class="language-SHELL line-numbers-mode" data-ext="SHELL"><pre class="language-SHELL"><code>目的：启动指定节点上的 httpd 服务，并让其开机自启动  
命令：ansible 192.168.247.152 -m service -a &#39;name=httpd state=restarted enabled=yes&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ping模块" tabindex="-1"><a class="header-anchor" href="#ping模块" aria-hidden="true">#</a> ping模块</h3><div class="language-SHELL line-numbers-mode" data-ext="SHELL"><pre class="language-SHELL"><code>目的：检查指定节点机器是否还能连通  
命令：ansible 192.168.247.152 -m ping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-url" tabindex="-1"><a class="header-anchor" href="#get-url" aria-hidden="true">#</a> get_url</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>目的：下载百度下的图标文件到节点的/tmp文件下
命令：ansible testgroup -m get_url -a &#39;url=https://www.baidu.com/favicon dest=/tmp&#39;
#结果为error.html，但是证明了模块是可用的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="stat模块" tabindex="-1"><a class="header-anchor" href="#stat模块" aria-hidden="true">#</a> stat模块</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>目的：获取远程文件状态信息，包括atime、ctime、mtime、md5、uid、gid等信息
ansible web -m stat -a &#39;path=/etc/sysctl.conf&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="template模块" tabindex="-1"><a class="header-anchor" href="#template模块" aria-hidden="true">#</a> template模块</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>template使用了Jinja2格式作为文件模版，进行文档内变量的替换的模块。它的每次使用都会被ansible标记为”changed”状态。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="模块参数" tabindex="-1"><a class="header-anchor" href="#模块参数" aria-hidden="true">#</a> 模块参数</h2>`,76),b=n("thead",null,[n("tr",null,[n("th",null,"参数名"),n("th",null,"是否必须"),n("th",null,"默认值"),n("th",null,"选项"),n("th",null,"说明")])],-1),h=n("tr",null,[n("td",null,"backup"),n("td",null,"no"),n("td",null,"no"),n("td",null,"yes/no"),n("td",null,"建立个包括timestamp在内的文件备份，以备不时之需.")],-1),k=n("tr",null,[n("td",null,"dest"),n("td",null,"yes"),n("td"),n("td"),n("td",null,"远程节点上的绝对路径，用于放置template文件。")],-1),g=n("tr",null,[n("td",null,"group"),n("td",null,"no"),n("td"),n("td"),n("td",null,"设置远程节点上的的template文件的所属用户组")],-1),y=n("td",null,"mode",-1),f=n("td",null,"no",-1),x=n("td",null,null,-1),q=n("td",null,null,-1),_={href:"http://www.2cto.com/os/linux/",target:"_blank",rel:"noopener noreferrer"},A=n("em",null,"chmod",-1),S=n("tr",null,[n("td",null,"owner"),n("td",null,"no"),n("td"),n("td"),n("td",null,"设置远程节点上的template文件所属用户")],-1),L=n("tr",null,[n("td",null,"src"),n("td",null,"yes"),n("td"),n("td"),n("td",null,"本地Jinjia2模版的template文件位置")],-1),w=s(`<h2 id="模块参数案例" tabindex="-1"><a class="header-anchor" href="#模块参数案例" aria-hidden="true">#</a> 模块参数案例</h2><p>把/mytemplates/foo.j2文件经过填写参数后，复制到远程节点的/etc/file.conf，文件权限相关略过</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> - template: src=/mytemplates/foo.j2 dest=/etc/file.conf owner=bin group=wheel mode=0644
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>跟上面一样的效果，不一样的文件权限设置方式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> - template: src=/mytemplates/foo.j2 dest=/etc/file.conf owner=bin group=wheel mode=&quot;u=rw,g=r,o=r&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>#详细说明 
roles/templates/server.xml中的template文件关键部分如下：
&lt;user username=&quot;{{ admin_username }}&quot; password=&quot;{{ admin_password }}&quot; roles=&quot;manager-gui&quot; /&gt;
#当这个文件还没被template执行的时候，本地的admin_username及admin_password 都是变量状态。 
#当playbook执行完template的时候，远程的admin_username*及admin_password 会变成变量所对应的值。

#例 
#前面的那个Playbook,如果我们在tomcat-servers设置了这两个变量如下：
dmin_username: admin
admin_password: adminsecret

#那么在执行这个Playbook前，对应的那个template文件（俗称模版），
将在本地保持{{ admin_username }}及{{ admin_password }}的状态。
在Ansible调用template模版执行的时候，这里将由Jinjia2从”tomcat-servers”读取对应的值，
然后替换掉模版里的变量，然后把这个替换变量值后的文件拷贝到远程节点。
#这个就是template的意义所在。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更多模块" tabindex="-1"><a class="header-anchor" href="#更多模块" aria-hidden="true">#</a> 更多模块</h3><p>ansible-doc -l 查询</p><hr><h2 id="playbook的配置和使用" tabindex="-1"><a class="header-anchor" href="#playbook的配置和使用" aria-hidden="true">#</a> playbook的配置和使用</h2><p>配置文件后缀名为.yml</p><h3 id="官网demo说明" tabindex="-1"><a class="header-anchor" href="#官网demo说明" aria-hidden="true">#</a> 官网demo说明</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#这个是你选择的主机</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webservers
<span class="token comment">#这个是变量</span>
  <span class="token key atrule">vars</span><span class="token punctuation">:</span>
    <span class="token key atrule">http_port</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">max_clients</span><span class="token punctuation">:</span> <span class="token number">200</span>
<span class="token comment">#远端的执行权限</span>
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
<span class="token comment">#利用yum模块来操作</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ensure apache is at the latest version
    <span class="token key atrule">yum</span><span class="token punctuation">:</span> pkg=httpd state=latest
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> write the apache config file
    <span class="token key atrule">template</span><span class="token punctuation">:</span> src=/srv/httpd.j2 dest=/etc/httpd.conf
<span class="token comment">#触发重启服务器</span>
    <span class="token key atrule">notify</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> restart apache
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ensure apache is running
    <span class="token key atrule">service</span><span class="token punctuation">:</span> name=httpd state=started
<span class="token comment">#这里的restart apache 和上面的触发是配对的。这就是handlers的作用。相当于tag</span>
  <span class="token key atrule">handlers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> restart apache
      <span class="token key atrule">service</span><span class="token punctuation">:</span> name=httpd state=restarted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-YAML line-numbers-mode" data-ext="YAML"><pre class="language-YAML"><code>#有的系统做了sudo限制，所以需要在playbook中开启权限，如下
- hosts: web
  remote_user: vic
  tasks:
    - service: name=nginx state=started
      sudo: yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="脚本实例" tabindex="-1"><a class="header-anchor" href="#脚本实例" aria-hidden="true">#</a> 脚本实例</h3><div class="language-YAML line-numbers-mode" data-ext="YAML"><pre class="language-YAML"><code>#create_user.yml
- name: create user
  hosts: testgroup
  user: root
  ##facts可以调用client的变量来使用，后面变量里会详细介绍
  gather_facts: false
  vars:
  - user: &quot;usertest1&quot;
  tasks:
  - name: create {{ user }}
    user: name=&quot;{{ user }}&quot;
    
#返回结果如下
[root/] ]$ansible-playbook create_user.yml

PLAY [create user] *************************************************************

TASK [create usertest1] ********************************************************
ok: [192.168.247.152]

PLAY RECAP *********************************************************************
192.168.247.152            : ok=1    changed=0    unreachable=0    failed=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="给脚本添加service的调用" tabindex="-1"><a class="header-anchor" href="#给脚本添加service的调用" aria-hidden="true">#</a> 给脚本添加service的调用</h2><div class="language-YAML line-numbers-mode" data-ext="YAML"><pre class="language-YAML"><code>#create_user.yml
- name: create user
  hosts: testgroup
  user: root
  gather_facts: false
  vars:
  - user: &quot;usertest1&quot;
  tasks:
  - name: create {{ user }}
    user: name={{ user }}
  - name: start httpd
    service: name=httpd state=startd
  #添加了httpd服务的开启
  
  #返回结果如下 
PLAY [create user] *************************************************************

TASK [create usertest2] ********************************************************
ok: [192.168.247.152]
#可以注意到 TASK [service]显示已经开启了
TASK [service] *****************************************************************
changed: [192.168.247.152]

PLAY RECAP *********************************************************************
192.168.247.152            : ok=2    changed=1    unreachable=0    failed=0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="给脚本添加copy模块的调用" tabindex="-1"><a class="header-anchor" href="#给脚本添加copy模块的调用" aria-hidden="true">#</a> 给脚本添加copy模块的调用</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#create_user.yml</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> create user
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> testgroup
  <span class="token key atrule">user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">gather_facts</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">vars</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">user</span><span class="token punctuation">:</span> <span class="token string">&quot;usertest1&quot;</span>
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> create <span class="token punctuation">{</span><span class="token punctuation">{</span> user <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">user</span><span class="token punctuation">:</span> name=<span class="token punctuation">{</span><span class="token punctuation">{</span> user <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> start httpd
    <span class="token key atrule">service</span><span class="token punctuation">:</span> name=httpd state=startd
   <span class="token comment">#添加了httpd服务的开启</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Copy file to client
    <span class="token key atrule">copy</span><span class="token punctuation">:</span> src=/tmp/test.test dest=/tmp/
    <span class="token comment">#添加了copy服务的开启</span>
    
 <span class="token comment">#返回结果如下</span>
<span class="token punctuation">[</span>root/ansible_yml<span class="token punctuation">]</span> <span class="token punctuation">]</span>$ansible<span class="token punctuation">-</span>playbook create_user.yml

PLAY <span class="token punctuation">[</span>create user<span class="token punctuation">]</span> <span class="token important">************************************************************</span>

TASK <span class="token punctuation">[</span>create usertest2<span class="token punctuation">]</span> <span class="token important">*******************************************************</span>
<span class="token key atrule">ok</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>192.168.247.152<span class="token punctuation">]</span>

TASK <span class="token punctuation">[</span>service<span class="token punctuation">]</span> <span class="token important">****************************************************************</span>
<span class="token key atrule">ok</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>192.168.247.152<span class="token punctuation">]</span>
<span class="token comment">#可以注意到 TASK [copy file to clent]已成功</span>
TASK <span class="token punctuation">[</span>copy file to clent<span class="token punctuation">]</span> <span class="token important">*****************************************************</span>
<span class="token key atrule">changed</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>192.168.247.152<span class="token punctuation">]</span>

PLAY RECAP <span class="token important">********************************************************************</span>
<span class="token key atrule">192.168.247.152</span>            <span class="token punctuation">:</span> ok=3    changed=1    unreachable=0    failed=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>copy传送的时候，可能报错</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>afewbug | FAILED &gt;&gt; {
    &quot;checksum&quot;: &quot;4ee72f7427050dcd97068734d35ca7b2c651bc88&quot;, 
    &quot;failed&quot;: true, 
    &quot;msg&quot;: &quot;Aborting, target uses selinux but python bindings (libselinux-python) aren‘t installed!&quot;
    
是因为ansible需要libselinux-python包。（被控端需要安装libselinux-python**）  
可以在copy前先调用yum模块，安装libselinux-python
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="template模板-支持jinja2" tabindex="-1"><a class="header-anchor" href="#template模板-支持jinja2" aria-hidden="true">#</a> template模板（支持jinja2）</h2><div class="language-YAML line-numbers-mode" data-ext="YAML"><pre class="language-YAML"><code>#create_user.yml
- name: create user
  hosts: testgroup
  user: root
  gather_facts: false
  vars:
  - user: &quot;usertest1&quot;
  - temp: temptest
  tasks:
  - name: create {{ user }}
    user: name={{ user }}
  - name: start httpd
    service: name=httpd state=startd
   #添加了httpd服务的开启
  - name: Copy file to client
    copy: src=/tmp/test.test dest=/tmp/
    #添加了copy服务的开启
  - name: template test
    template: src=/tmp/temp dest=/tmp/{{temp}} #{{temp}}变量来自vars
    #添加了template模板使用
    
#返回结果
[root/ansible_yml] ]$ansible-playbook create_user.yml

PLAY [create user] *************************************************************

TASK [create usertest2] ********************************************************
ok: [192.168.247.152]

TASK [start httpd] *************************************************************
ok: [192.168.247.152]

TASK [copy file to clent] ******************************************************
ok: [192.168.247.152]
#可以注意到 返回结果显示成功，去client相关目录即可看到文件
TASK [template test] ***********************************************************
changed: [192.168.247.152]

PLAY RECAP *********************************************************************
192.168.247.152            : ok=4    changed=1    unreachable=0    failed=0


##
#template模块可以引用变量到源文件
/tmp/temp
{{user}}
{{temp}}

#执行yml后

[root/ansible_yml] ]$ansible testgroup -m command -a &#39;cat /tmp/temptest&#39;
192.168.247.152 | SUCCESS | rc=0 &gt;&gt;
##client返回的就是主机源文件中引入的变量
usertest1
temptest

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="执行外部命令的模块" tabindex="-1"><a class="header-anchor" href="#执行外部命令的模块" aria-hidden="true">#</a> 执行外部命令的模块</h2><div class="language-YAML line-numbers-mode" data-ext="YAML"><pre class="language-YAML"><code>#create_user.yml
- name: create user
  hosts: testgroup
  user: root
  gather_facts: false
  vars:
  - user: &quot;usertest1&quot;
  - temp: temptest
  tasks:
  - name: create {{ user }}
    user: name={{ user }}
  - name: start httpd
    service: name=httpd state=startd
   #添加了httpd服务的开启
  - name: Copy file to client
    copy: src=/tmp/test.test dest=/tmp/
    #添加了copy服务的开启
  - name: template test
    template: src=/tmp/temp dest=/tmp/{{temp}} #{{temp}}变量来自vars
    #添加了template模板使用
  - name: run shell
    shell: /usr/bin/ls /tmp/ || /bin/true
    #/bin/true 防中断
  - name: run  command
    command: mkdir /tmp/command-test
  #添加了两个执行外部命令模块shell和command

#返回结果如下
[root/ansible_yml] ]$ansible-playbook create_user.yml

PLAY [create user] *************************************************************

TASK [create usertest2] ********************************************************
ok: [192.168.247.152]

TASK [start httpd] *************************************************************
ok: [192.168.247.152]

TASK [copy file to client] *****************************************************
changed: [192.168.247.152]

TASK [template test] ***********************************************************
changed: [192.168.247.152]

TASK [shell~] ******************************************************************
changed: [192.168.247.152]

TASK [run this command] ********************************************************
changed: [192.168.247.152]
 [WARNING]: Consider using file module with state=directory rather than running
mkdir


PLAY RECAP *********************************************************************
192.168.247.152            : ok=6    changed=4    unreachable=0    failed=0


#
#1./usr/bin/...||/bin/true  前面失败的话/bin/true：返回true。防止中断，继续执行。类似的判断还有chenge_when参数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量功能" tabindex="-1"><a class="header-anchor" href="#变量功能" aria-hidden="true">#</a> 变量功能</h2><h3 id="facts" tabindex="-1"><a class="header-anchor" href="#facts" aria-hidden="true">#</a> facts</h3><blockquote><p>一个常用的组件，可实现对远程自己系统信息的获取，比如：主机名，IP地址，操作系统，分区情况，硬件信息等，配合playbook使用，更加的灵活和个性化定制</p></blockquote><p><code>ansible ip/group -m setup</code>可以获取clients的facts信息</p><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>[root~] ]$ansible testgroup -m setup
192.168.247.152 | SUCCESS =&gt; {
    &quot;ansible_facts&quot;: {
        &quot;ansible_all_ipv4_addresses&quot;: [
            &quot;192.168.122.1&quot;,
            &quot;192.168.247.152&quot;
        ],
        &quot;ansible_all_ipv6_addresses&quot;: [
            &quot;fe80::20c:29ff:feb5:6e6&quot;
        ],
        &quot;ansible_architecture&quot;: &quot;x86_64&quot;,
        &quot;ansible_bios_date&quot;: &quot;07/02/2015&quot;,
        &quot;ansible_bios_version&quot;: &quot;6.00&quot;,
        
        ......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>脚本中开启Facts功能</strong></p><div class="language-YAML line-numbers-mode" data-ext="YAML"><pre class="language-YAML"><code>#create_user.yml
- name: create user
  hosts: testgroup
  user: root
  gather_facts: false #开启facts
  tasks:
  - name: template test
    template: src=/tmp/temp dest=/tmp/{{temp}} #{{temp}}变量来自vars

#返回结果，
[root/ansible_yml] ]$ansible-playbook create_user.yml

PLAY [create user] *************************************************************

TASK [setup] *******************************************************************
ok: [192.168.247.152]

TASK [template test] ***********************************************************
changed: [192.168.247.152]

PLAY RECAP *********************************************************************
192.168.247.152            : ok=2    changed=1    unreachable=0    failed=0

#查看
[root/ansible_yml] ]$ansible testgroup -m raw -a &quot;ls /tmp | grep 192*&quot;
192.168.247.152 | SUCCESS | rc=0 &gt;&gt;
[u&#39;192.168.122.1&#39;, u&#39;192.168.247.152&#39;]
Shared connection to 192.168.247.152 closed.
#IP地址有两个所以文件名很奇怪
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>当然，我们也可以在主机的/tmp/temp下调用facts变量</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#修改/tmp/temp文件</span>
test
<span class="token punctuation">{</span><span class="token punctuation">{</span>ansible_all_ipv4_addresses<span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment">#create_user.yml</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> create user
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> testgroup
  <span class="token key atrule">user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">gather_facts</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment">#开启facts</span>
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> template test
    <span class="token key atrule">template</span><span class="token punctuation">:</span> src=/tmp/temp dest=/tmp/factstest

<span class="token comment">#结果如下</span>
<span class="token punctuation">[</span>root/ansible_yml<span class="token punctuation">]</span> <span class="token punctuation">]</span>$ansible<span class="token punctuation">-</span>playbook create_user.yml

PLAY <span class="token punctuation">[</span>create user<span class="token punctuation">]</span> <span class="token important">*************************************************************</span>

TASK <span class="token punctuation">[</span>setup<span class="token punctuation">]</span> <span class="token important">*******************************************************************</span>
<span class="token key atrule">ok</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>192.168.247.152<span class="token punctuation">]</span>

TASK <span class="token punctuation">[</span>template test<span class="token punctuation">]</span> <span class="token important">***********************************************************</span>
<span class="token key atrule">changed</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>192.168.247.152<span class="token punctuation">]</span>

PLAY RECAP <span class="token important">*********************************************************************</span>
<span class="token key atrule">192.168.247.152</span>            <span class="token punctuation">:</span> ok=2    changed=1    unreachable=0    failed=0

<span class="token punctuation">[</span>root/ansible_yml<span class="token punctuation">]</span> <span class="token punctuation">]</span>$ansible testgroup <span class="token punctuation">-</span>m raw <span class="token punctuation">-</span>a &quot;cat /tmp/factstest&quot;
192.168.247.152 <span class="token punctuation">|</span> SUCCESS <span class="token punctuation">|</span> rc=0 <span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span>
test
<span class="token punctuation">[</span>u&#39;192.168.122.1&#39;<span class="token punctuation">,</span> u&#39;192.168.247.152&#39;<span class="token punctuation">]</span>
Shared connection to 192.168.247.152 closed.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义变量" tabindex="-1"><a class="header-anchor" href="#自定义变量" aria-hidden="true">#</a> 自定义变量</h3><blockquote><p>如何facts的变量并不能满足需求的，就可以自定义facts模板来实现</p><p>另外可以通过本地facts来实现，只需在client的/etc/ansible/facts.d目录定义JSON,INI或可执行的JSON输出，后缀名一定要用.fact，那么这些文件就可以作为本地的facts</p></blockquote><p>##在client定义变量，供ansible主机使用</p><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>[root@test1 ~]# mkdir /etc/ansible/facts.d -p
[root@test1 ~]# cd /etc/ansible/facts.d/
[root@test1 facts.d]# cat client.fact
[general]
name=zili
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ansible主机</strong></p><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>[root/ansible_yml] ]$ansible 192.168.247.152 -m setup -a &quot;filter=ansible_local&quot; 192.168.247.152 | SUCCESS =&gt; {
    &quot;ansible_facts&quot;: {
        &quot;ansible_local&quot;: {      #本地facts
            &quot;client&quot;: {       #文件名
                &quot;general&quot;: {       #节点名
                    &quot;name&quot;: &quot;zili&quot;    #key-value
                }
            }
        }
    },
    &quot;changed&quot;: false
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>那么就可以通过如下方式去调用自定义的facts变量</strong></p><p><code>{{ansible_local.client.general.name}}</code></p><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>[root/ansible_yml] ]$ansible-playbook create_user.yml

PLAY [create user] *************************************************************

TASK [setup] *******************************************************************
ok: [192.168.247.152]

TASK [template test] ***********************************************************
changed: [192.168.247.152]

PLAY RECAP *********************************************************************
192.168.247.152            : ok=2    changed=1    unreachable=0    failed=0
#调用成功，并可看到client内容已变化
[root/ansible_yml] ]$ansible testgroup -m raw -a &quot;cat /tmp/factstest2&quot;          192.168.247.152 | SUCCESS | rc=0 &gt;&gt;
zili #
Shared connection to 192.168.247.152 closed.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在操作主机定义变量-来控制client" tabindex="-1"><a class="header-anchor" href="#在操作主机定义变量-来控制client" aria-hidden="true">#</a> 在操作主机定义变量，来控制client</h2><p>思路就是在执行playbook的时候将本地的facts推送到client相关目录下</p><div class="language-YAML line-numbers-mode" data-ext="YAML"><pre class="language-YAML"><code>      - name: create directory for ansible custom facts
        file: state=directory recurse=yes path=/etc/ansible/facts.d
      - name: install custom facts
        copy: src=/etc/ansible/host.fact dest=/etc/ansible/facts.d
      - name: re-read facts after adding custom fact
        setup: filter=ansible_local
  #如此相当于批量在client创建了facts变量
  #然后就可以主机调用了!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注册变量" tabindex="-1"><a class="header-anchor" href="#注册变量" aria-hidden="true">#</a> 注册变量</h3><blockquote><p>变量可以将一条命令的返回值进行保存，然后提供给playbook使用</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@ansible ansible<span class="token punctuation">]</span><span class="token comment"># cat user1.yml</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> testgroup
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">shell</span><span class="token punctuation">:</span> /usr/bin/foo
    <span class="token key atrule">register</span><span class="token punctuation">:</span> z     <span class="token comment">#注册了一个foo\\_resul变量，变量值为shell: /usr/bin/foo的运行结果;  </span>
    <span class="token key atrule">ignore_errors</span><span class="token punctuation">:</span> <span class="token boolean important">True</span>  <span class="token comment">#ignore\\_errors: True为忽略错误</span>
  <span class="token punctuation">-</span> <span class="token key atrule">shell</span><span class="token punctuation">:</span> touch /tmp/LLL <span class="token comment">#当变量注册完成后，就可以在后面的playbook中使用了</span>
    <span class="token key atrule">when</span><span class="token punctuation">:</span> z.rc == 5 
<span class="token comment">#当条件语句when: z.rc == 5成立时，shell: touch /tmp/LLL命令才会执行  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>#可以注意到command是skipping的。因为返回值是127，所以client肯定还是没有创建LLL的
[root/ansible_yml] ]$ansible-playbook user1.yml

PLAY [testgroup] ***************************************************************

TASK [setup] *******************************************************************
ok: [192.168.247.152]

TASK [command] *****************************************************************
fatal: [192.168.247.152]: FAILED! =&gt; {&quot;changed&quot;: true, &quot;cmd&quot;: &quot;/usr/bin/foo&quot;, &quot;delta&quot;: &quot;0:00:00.003488&quot;, &quot;end&quot;: &quot;2017-03-11 13:08:45.996549&quot;, &quot;failed&quot;: true, &quot;rc&quot;: 127, &quot;start&quot;: &quot;2017-03-11 13:08:45.993061&quot;, &quot;stderr&quot;: &quot;/bin/sh: /usr/bin/foo: No such file or directory&quot;, &quot;stdout&quot;: &quot;&quot;, &quot;stdout_lines&quot;: [], &quot;warnings&quot;: []}
...ignoring

TASK [command] *****************************************************************
skipping: [192.168.247.152]

PLAY RECAP *********************************************************************
192.168.247.152            : ok=2    changed=1    unreachable=0    failed=0

##所以我门修改z.rc的返回值为127在执行
#以为返回值是对的，所以执行了touch，warning是友情提示，最好用线管模块进行文件的操作
[root/ansible_yml] ]$ansible-playbook user1.yml

PLAY [testgroup] ***************************************************************

TASK [setup] *******************************************************************
ok: [192.168.247.152]

TASK [command] *****************************************************************
fatal: [192.168.247.152]: FAILED! =&gt; {&quot;changed&quot;: true, &quot;cmd&quot;: &quot;/usr/bin/foo&quot;, &quot;delta&quot;: &quot;0:00:00.003539&quot;, &quot;end&quot;: &quot;2017-03-11 13:11:01.955975&quot;, &quot;failed&quot;: true, &quot;rc&quot;: 127, &quot;start&quot;: &quot;2017-03-11 13:11:01.952436&quot;, &quot;stderr&quot;: &quot;/bin/sh: /usr/bin/foo: No such file or directory&quot;, &quot;stdout&quot;: &quot;&quot;, &quot;stdout_lines&quot;: [], &quot;warnings&quot;: []}
...ignoring

TASK [command] *****************************************************************
changed: [192.168.247.152]
 [WARNING]: Consider using file module with state=touch rather than running touch


PLAY RECAP *********************************************************************
192.168.247.152            : ok=3    changed=2    unreachable=0    failed=0

[root/ansible_yml] ]$


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="语句" tabindex="-1"><a class="header-anchor" href="#语句" aria-hidden="true">#</a> 语句</h2><h3 id="条件语句" tabindex="-1"><a class="header-anchor" href="#条件语句" aria-hidden="true">#</a> 条件语句</h3><blockquote><p>playbook的执行结果取决于变量，不管是facts还是tasks结果赋值的，而变量的值可以依赖于其他变量，当然一会印象ansible的执行</p><p>有时候我们，想要跳过某些主机的执行步骤，比如，某些client不安装某个软件包，不清理垃圾等等</p><p>就要使用判断了</p></blockquote><h2 id="when" tabindex="-1"><a class="header-anchor" href="#when" aria-hidden="true">#</a> when</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> when
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> testgroup
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">gather_facts</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> shutdown centos
    <span class="token key atrule">command</span><span class="token punctuation">:</span> /sbin/shutdown <span class="token punctuation">-</span>t now
    <span class="token key atrule">when</span><span class="token punctuation">:</span> ansible_hostname == &#39;test1&#39;
<span class="token comment">#when返回bool值，为true是执行，false则不执行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>when 针对不同分支的二级处理</strong></p><div class="language-YAML line-numbers-mode" data-ext="YAML"><pre class="language-YAML"><code>- name: when
  hosts: web
  remote_user: root
  gather_facts: true
  tasks:
  - command: /sbin/ip a
    register: result
    ignore_errors: True
  - command: /bin/something
    when: result|failed
  - command: /bin/something_else
    when: result|success
  - command: /bin/still/something_else
    when: result|skipped
    
# when: result|success&quot;的意思为当变量result执行结果为成功
#将执行/bin/something_else命令，其他同理。
#其中success为Ansible内部过滤器方法，返回True代表命令运行成功。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环语句" tabindex="-1"><a class="header-anchor" href="#循环语句" aria-hidden="true">#</a> 循环语句</h3><div class="language-YAML line-numbers-mode" data-ext="YAML"><pre class="language-YAML"><code>- name: whell
  hosts: testgroup
  remote_user: root
  gather_facts: true
  tasks:
  - name: &quot;add user&quot;
    user: name={{ item }} state=present groups=wheel
    with_items:
    - tiger1
    - tiger2
    
#创建用户的。with_items会自动循环执行上面的语句&quot;user: name={{ item }} state=present groups=wheel&quot;，循环的次数为with_items的元素个数。这里有2个元素，分别为tiger1、tiger2，会分别替换{{ item }}项
#等同于
- name: whell
  hosts: testgroup
  remote_user: root
  gather_facts: true
  tasks:
  - name: &quot;add user tiger1&quot;
    user: name=tiger1 state=present groups=wheel
  - name: &quot;add user tiger2&quot;
    user: name=tiger2 state=present groups=wheel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="循环元素支持列表" tabindex="-1"><a class="header-anchor" href="#循环元素支持列表" aria-hidden="true">#</a> 循环元素支持列表</h2><div class="language-YAML line-numbers-mode" data-ext="YAML"><pre class="language-YAML"><code>#首先定义好列表 list.yml
packages_base:
  - [ &#39;vsftpd&#39;, &#39;vim&#39; ]
packages_apps:
  - [[ &#39;mysql&#39;,httpd&#39; ]]

#然后引入使用
- name: whell
  hosts: testgroup
  remote_user: root
  gather_facts: true
  var_files: 
  - /etc/ansible/list.yml
  tasks:
  - name: &quot;install rpm&quot;
    yum: name={{ item }} state=installed
    with_flattened: #此语句 用来循环定义好的列表
    - packages_base
    - packages_apps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="handlers-和-include" tabindex="-1"><a class="header-anchor" href="#handlers-和-include" aria-hidden="true">#</a> handlers 和 include</h3><blockquote><p>当多个playbook涉及复用的任务列表时，可以将复用的内容剥离出来，写到独立的文件里，需要的地方include进来即可</p><p>除了tasks之外，还有一个handlers的命令，handlers是在执行tasks之后服务器发生变化之后可供调用的handler</p></blockquote><div class="language-YAML line-numbers-mode" data-ext="YAML"><pre class="language-YAML"><code>- name: write the httpd config file
  hosts: testgroup
  remote_user: root
  gather_facts: true
  tasks:
  - name: write the httpd.conf to client
    template: src=/httpd.conf.j2 dest=/etc/httpd/conf/httpd.conf
    notify:    # 如果copy执行完之后/etc/httpd/conf/httpd.conf文件发送了变化，则执行
    - restart httpd  # 调用handler
    - include: playbook/tasks/httpd.yml
    
    handlers:
    - name: restart httpd #此处的标识必须和notify一样才可以引起触发
      service: name=httpd state=restarted
      
 #注意上面使用的- include: playbook/tasks/httpd.yml，看一下这个文件的内容
- name: ensure httpd is running
  service: name=httpd state=started
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>notify这个action可用于在每个play的最后被触发，这样可以避免多次有改变发生时每次都执行指定的操作，取而代之，仅在所有的变化发生完成后一次性地执行指定操作。</p><p>Handlers 是由通知者进行 notify, 如果没有被 notify,handlers 不会执行。</p><p>Handlers 最佳的应用场景是用来重启服务,或者触发系统重启操作.除此以外很少用到了。</p></blockquote><h2 id="roles-使用" tabindex="-1"><a class="header-anchor" href="#roles-使用" aria-hidden="true">#</a> roles 使用</h2><p>前面的所有都在一个文件内.还有一种方法可以进行更好的组织架构 使用roles</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@master roles]# tree
.
├── test
│   └── tasks
│       └── main.yml
└── test.yml
test.yml为入口文件,每次执行它即可.他的内容如下

[root@master roles]# cat test.yml 
---
- hosts: all
  roles:
    - role: test
定义了主机/主机组,然后定义了要使用的roles,(也就是roles下的文件夹的名字)

test文件夹下定义了tasks,内有 **main.yml**  这个命名是规定好的.必须是main


main.yml 书写了tasks的任务.
[root@master roles]# cat test/tasks/main.yml 
---
- name: test role ping
  ping:

[root@master roles]# 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@master roles]# ansible-playbook test.yml 

PLAY [all] ************************************************************************************

TASK [Gathering Facts] ************************************************************************
ok: [10.1.27.28]
ok: [10.1.27.24]

TASK [test : test role ping] ******************************************************************
ok: [10.1.27.28]
ok: [10.1.27.24]

PLAY RECAP ************************************************************************************
10.1.27.24                 : ok=2    changed=0    unreachable=0    failed=0   
10.1.27.28                 : ok=2    changed=0    unreachable=0    failed=0   

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>roles有很多结构,ansible可以根据其进行解析.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── defaults
├── files
├── handlers
├── meta
├── tasks
├── templates
└── vars
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果<code>roles/x/tasks/main.yml</code>存在,则自动将里面的tasks添加到play中。</p><p>如果<code>roles/x/handlers/main.yml</code>存在,则自动将里面的handlers添加到play中。</p><p>如果<code>roles/x/vars/main.yml</code>存在, 则自动将其中的variables添加到play中。</p><p>如果<code>roles/x/meta/main.yml</code>存在,则添加role的依赖关系roles中。</p><p>任何<code>copy</code>任务、<code>script</code>任务都可以引用<code>roles/x/files</code>中的文件，无论是使用绝对或相对路径都可以。</p><p>任何<code>template</code>任务都可以引用<code>roles/x/templates</code>中的文件，无论绝对或相对路径。</p><p>任何<code>include</code>任务都可以引用<code>roles/x/tasks/</code>中的文件，无论相对或绝对路径</p>`,80),E={href:"http://docs.ansible.com/playbooks_intro.html",target:"_blank",rel:"noopener noreferrer"},Y=n("h2",{id:"ansible和saltstack的对比",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ansible和saltstack的对比","aria-hidden":"true"},"#"),e(" ansible和saltstack的对比")],-1),T=n("blockquote",null,[n("p",null,"1、salt要安装agent , ansible通过ssh连接。"),n("p",null,"2、salt在server端要启进程；ansible不需要。"),n("p",null,"3、salt与ansible都有模块，可使用任意语言开发模块。"),n("p",null,"4、salt与ansible都使用yaml语言格式编写剧本。"),n("p",null,"ansible走的是ssh,所以它有认证以及加密码的过程，使得ansible非常慢，不适用于大规模环境（指上千台）")],-1),M=n("hr",null,null,-1);function P(H,B){const a=c("ExternalLinkIcon");return t(),d("div",null,[p,r("more"),m,n("table",null,[b,n("tbody",null,[h,k,g,n("tr",null,[y,f,x,q,n("td",null,[e("设置远程节点上的template文件权限。类似"),n("a",_,[e("Linux"),i(a)]),e("中"),A,e("的用法")])]),S,L])]),w,n("p",null,[e("具体可以参见文档："),n("a",E,[e("http://docs.ansible.com/playbooks_intro.html"),i(a)])]),Y,T,M])}const K=l(v,[["render",P],["__file","ansible学习.html.vue"]]);export{K as default};
