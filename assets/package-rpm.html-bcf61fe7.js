import{_ as n,X as s,Y as a,a3 as e}from"./framework-abbf9d44.js";const i={},t=e(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><blockquote><p>RPM（Redhat Package Manager）是用于Redhat、CentOS、Fedora等Linux 分发版（distribution）的常见的软件包管理器。因为它允许分发已编译的软件，所以用户只用一个命令就可以安装软件.</p></blockquote><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install rpm-build
yum install rpmdevtools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p><code>rpmdev-setuptree</code>命令，可在<code>$HOME</code>下生产一个标注的工作空间<code>rpmbuild</code></p><p>结构如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ tree rpmbuild
rpmbuild
├── BUILD
├── RPMS
├── SOURCES
├── SPECS
└── SRPMS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果未安装<code>rpmdevtools</code> 手动创建也是可以的</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/rpmbuild/<span class="token punctuation">{</span>BUILD,RPMS,SOURCES,SPECS,SRPMS<span class="token punctuation">}</span>\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2><table><thead><tr><th>目录名</th><th>说明</th><th>macros中的宏名</th></tr></thead><tbody><tr><td>~/rpmbuild/</td><td>rpmbuild文件夹</td><td>%_topdir</td></tr><tr><td>~/rpmbuild/BUILD</td><td>编译rpm包的临时目录</td><td>%_builddir</td></tr><tr><td>~/rpmbuild/BUILDROOT</td><td>编译后生成的软件临时安装目录</td><td>%_buildrootdir</td></tr><tr><td>~/rpmbuild/RPMS</td><td>最终生成的可安装rpm包的所在目录</td><td>%_rpmdir</td></tr><tr><td>~/rpmbuild/SOURCES</td><td>所有源代码和补丁文件的存放目录</td><td>%_sourcedir</td></tr><tr><td>~/rpmbuild/SPECS</td><td>存放SPEC文件的目录(重要)</td><td>%_specdir</td></tr><tr><td>~/rpmbuild/SRPMS</td><td>软件最终的rpm源码格式存放路径(暂时忽略掉，别挂在心上)</td><td>%_srcrpmdir</td></tr></tbody></table><h2 id="流程" tabindex="-1"><a class="header-anchor" href="#流程" aria-hidden="true">#</a> 流程</h2><ol><li><p>源代码放在<code>%_sourcedir</code>下,一般是<code>.tar.gz</code>之类,或文件</p></li><li><p>编译,在<code>%_builddir</code>中进行,源码包解压后复制到此目录即可</p></li><li><p>安装,把软件包应该包含的内容（比如二进制文件、配置文件、man文档等）复制到<code>%_buildrootdir</code>中，并按照实际安装后的目录结构组装，比如二进制命令可能会放在<code>/usr/bin</code>下，那么就在<code>%_buildrootdir</code>下也按照同样的目录结构放置</p></li><li><p>配置,安装前,中,后,的一些工作,以及卸载前的工作.</p></li><li><p>检测,软件是否正常运行. 可选</p></li><li><p>生成rpm包,放到<code>%_rpmdir</code>下</p></li></ol><p>以上流程均是通过编写SPEC文件进行操作.</p><table><thead><tr><th>阶段</th><th>读取的目录</th><th>写入的目录</th><th>具体动作</th></tr></thead><tbody><tr><td>%prep</td><td>%_sourcedir</td><td>%_builddir</td><td>读取位于 %_sourcedir 目录的源代码和 patch 。之后，解压源代码至 %_builddir 的子目录并应用所有 patch</td></tr><tr><td>%build</td><td>%_builddir</td><td>%_builddir</td><td>编译位于 %_builddir 构建目录下的文件。通过执行类似 ./configure &amp;&amp; make 的命令实现</td></tr><tr><td>%install</td><td>%_builddir</td><td>%_buildrootdir</td><td>读取位于 %_builddir 构建目录下的文件并将其安装至 %_buildrootdir 目录。这些文件就是用户安装 RPM 后，最终得到的文件。注意一个奇怪的地方: 最终安装目录 不是 构建目录。通过执行类似 make install 的命令实现</td></tr><tr><td>%check</td><td>%_builddir</td><td>%_builddir</td><td>检查软件是否正常运行。通过执行类似 make test 的命令实现。很多软件包都不需要此步。</td></tr><tr><td>bin</td><td>%_buildrootdir</td><td>%_rpmdir</td><td>读取位于 %_buildrootdir 最终安装目录下的文件，以便最终在 %_rpmdir 目录下创建 RPM 包。在该目录下，不同架构的 RPM 包会分别保存至不同子目录， noarch 目录保存适用于所有架构的 RPM 包。这些 RPM 文件就是用户最终安装的 RPM 包。</td></tr><tr><td>src</td><td>%_sourcedir</td><td>%_srcrpmdir</td><td>创建源码 RPM 包（简称 SRPM，以.src.rpm 作为后缀名），并保存至 %_srcrpmdir 目录。SRPM 包通常用于审核和升级软件包。</td></tr></tbody></table><h2 id="spec" tabindex="-1"><a class="header-anchor" href="#spec" aria-hidden="true">#</a> SPEC</h2><p>zabbix agentd rpm包构建参考</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>%define zabbix_user zabbix                  
<span class="token comment">#自定义宏，名字为zabbix_user值为zabbix,%{zabbix_user}引用</span>

Name:   zabbix                              
<span class="token comment">#软件包的名字，后面可用%{name}引用</span>

Version:    <span class="token number">3.0</span>.14                           
<span class="token comment">#软件的实际版本号，可使用%{version}引用</span>

Release:    <span class="token number">1</span>%<span class="token punctuation">{</span>?dist<span class="token punctuation">}</span>                       
<span class="token comment">#发布序列号，标明第几次打包  </span>

Summary:    zabbix_agentd                   
<span class="token comment">#软件包内容概要</span>

Group:      zabbix                          
<span class="token comment">#软件包分组</span>

License:    GPL
<span class="token comment">#授权许可方式</span>

URL:        blog.dl1548.com
<span class="token comment">#软件的主页</span>

<span class="token comment">#源代码包，可以有Source0,Source1等源,对应%install下</span>
Source0:    zabbix-3.0.14.tar.gz
Source1:    discover_disk.pl
Source2:    tcp_conn_status.sh
Source3:    zbx_parse_iostat_values.sh
Source4:    tcp-status-params.conf
Source5:    zbx_parse_iostat_values.conf

BuildRequires:      net-tools
<span class="token comment">#gcc, gcc-c++            </span>
<span class="token comment">#制作rpm包时，所依赖的基本库</span>

Requires:      net-tools
<span class="token comment">#gcc, gcc-c++       </span>
<span class="token comment">#安装rpm包时，所依赖的软件包</span>

<span class="token comment">#BuildRoot: %{_tmpdir}/%{name}-%{version}-%{release}</span>
<span class="token comment">#构建包的临时文件路径.centos5 不写会报错</span>

%description                                
<span class="token comment">#定义rpm包的描述信息</span>
Zabbix agentd
creata by jingkunsystem-lizili

%pre                                        
<span class="token comment">#rpm包安装前执行的脚本</span>
<span class="token function">grep</span> zabbix /etc/passwd <span class="token operator">&gt;</span> /dev/null
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">]</span> 
<span class="token keyword">then</span> <span class="token function">useradd</span> zabbix <span class="token parameter variable">-M</span> <span class="token parameter variable">-s</span> /sbin/nologin
<span class="token keyword">fi</span>
<span class="token punctuation">[</span> <span class="token parameter variable">-d</span> /usr/local/zabbix <span class="token punctuation">]</span><span class="token operator">||</span><span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/local/zabbix*
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/zabbix*


%post                                       
<span class="token comment">#rpm包安装后执行的脚本</span>

<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;/BASEDIR=\\/usr\\/local/c\\BASEDIR=\\/usr\\/local\\/%{name}&quot;</span> /etc/init.d/zabbix_agentd

%preun                                      
<span class="token comment">#rpm卸载前执行的脚本</span>
/etc/init.d/zabbix_agentd stop

%postun                                     
<span class="token comment">#rpm卸载后执行的脚本</span>
<span class="token function">userdel</span>  zabbix
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/local/zabbix*

%prep

%setup <span class="token parameter variable">-q</span>                                   

%build                                      
<span class="token comment">#定义编译软件包时的操作</span>
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/%<span class="token punctuation">{</span>name<span class="token punctuation">}</span>  --enable-agent
<span class="token function">make</span> <span class="token parameter variable">-j8</span> %<span class="token punctuation">{</span>?_smp_mflags<span class="token punctuation">}</span>

%install                                    
<span class="token comment">#定义安装软件包，使用默认值即可</span>
<span class="token builtin class-name">test</span> <span class="token parameter variable">-L</span> %<span class="token punctuation">{</span>buildroot<span class="token punctuation">}</span>/usr/local/%<span class="token punctuation">{</span>name<span class="token punctuation">}</span> <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> %<span class="token punctuation">{</span>buildroot<span class="token punctuation">}</span>/usr/local/%<span class="token punctuation">{</span>name<span class="token punctuation">}</span>
<span class="token function">install</span> <span class="token parameter variable">-d</span> %<span class="token punctuation">{</span>buildroot<span class="token punctuation">}</span>/etc/profile.d
<span class="token function">install</span> <span class="token parameter variable">-d</span> %<span class="token punctuation">{</span>buildroot<span class="token punctuation">}</span>/etc/init.d
<span class="token function">make</span> <span class="token function">install</span> <span class="token assign-left variable">DESTDIR</span><span class="token operator">=</span>%<span class="token punctuation">{</span>buildroot<span class="token punctuation">}</span>

<span class="token comment">#其他脚本</span>
<span class="token function">install</span> <span class="token parameter variable">-p</span> <span class="token parameter variable">-D</span> <span class="token parameter variable">-m</span> 0755 %<span class="token punctuation">{</span>SOURCE1<span class="token punctuation">}</span>        %<span class="token punctuation">{</span>buildroot<span class="token punctuation">}</span>/usr/local/%<span class="token punctuation">{</span>name<span class="token punctuation">}</span>/lib/discover_disk.pl
<span class="token function">install</span> <span class="token parameter variable">-p</span> <span class="token parameter variable">-D</span> <span class="token parameter variable">-m</span> 0755 %<span class="token punctuation">{</span>SOURCE2<span class="token punctuation">}</span>        %<span class="token punctuation">{</span>buildroot<span class="token punctuation">}</span>/usr/local/%<span class="token punctuation">{</span>name<span class="token punctuation">}</span>/lib/tcp_conn_status.sh
<span class="token function">install</span> <span class="token parameter variable">-p</span> <span class="token parameter variable">-D</span> <span class="token parameter variable">-m</span> 0755 %<span class="token punctuation">{</span>SOURCE3<span class="token punctuation">}</span>        %<span class="token punctuation">{</span>buildroot<span class="token punctuation">}</span>/usr/local/%<span class="token punctuation">{</span>name<span class="token punctuation">}</span>/lib/zbx_parse_iostat_values.sh
<span class="token comment">#其他配置文件</span>
<span class="token function">install</span> <span class="token parameter variable">-p</span> <span class="token parameter variable">-D</span> <span class="token parameter variable">-m</span> 0755 %<span class="token punctuation">{</span>SOURCE4<span class="token punctuation">}</span>        %<span class="token punctuation">{</span>buildroot<span class="token punctuation">}</span>/usr/local/%<span class="token punctuation">{</span>name<span class="token punctuation">}</span>/etc/zabbix_agentd.conf.d/tcp-status-params.conf
<span class="token function">install</span> <span class="token parameter variable">-p</span> <span class="token parameter variable">-D</span> <span class="token parameter variable">-m</span> 0755 %<span class="token punctuation">{</span>SOURCE5<span class="token punctuation">}</span>        %<span class="token punctuation">{</span>buildroot<span class="token punctuation">}</span>/usr/local/%<span class="token punctuation">{</span>name<span class="token punctuation">}</span>/etc/zabbix_agentd.conf.d/zbx_parse_iostat_values.conf

<span class="token builtin class-name">echo</span> <span class="token string">&#39;export PATH=/etc/zabbix/bin:/etc/zabbix/sbin:$PATH&#39;</span> <span class="token operator">&gt;&gt;</span> %<span class="token punctuation">{</span>buildroot<span class="token punctuation">}</span>/etc/profile.d/%<span class="token punctuation">{</span>name<span class="token punctuation">}</span>.sh
<span class="token function">cp</span> %<span class="token punctuation">{</span>_builddir<span class="token punctuation">}</span>/%<span class="token punctuation">{</span>name<span class="token punctuation">}</span>-%<span class="token punctuation">{</span>version<span class="token punctuation">}</span>/misc/init.d/fedora/core/zabbix_agentd       %<span class="token punctuation">{</span>buildroot<span class="token punctuation">}</span>/etc/init.d/zabbix_agentd

%files
%defattr <span class="token punctuation">(</span>-,root,root,0755<span class="token punctuation">)</span>                                      
<span class="token comment">#定义rpm包安装时创建的相关目录及文件</span>
<span class="token comment">#在该选项中%defattr (-,root,root)一定要注意。它是指定安装文件的属性，分别是(mode,owner,group)，-表示默认值，对文本文件是0644，可执行文件是0755。</span>
/usr/local/%<span class="token punctuation">{</span>name<span class="token punctuation">}</span>/*
/usr/local/zabbix/lib/*
/usr/local/zabbix/etc/zabbix_agentd.conf.d/*
/etc/init.d/zabbix_agentd
/etc/profile.d/%<span class="token punctuation">{</span>name<span class="token punctuation">}</span>.sh

%changelog                                  
<span class="token comment">#主要用于软件的变更日志。该选项可有可无</span>

%clean 
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> %<span class="token punctuation">{</span>buildroot<span class="token punctuation">}</span>                         
<span class="token comment">#清理临时文件</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打包" tabindex="-1"><a class="header-anchor" href="#打包" aria-hidden="true">#</a> 打包</h2><p>在<code>SPECS</code>文件夹下执行 <code>rpmbuild -bb xxx.spec</code> 即可</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-ba</span> 既生成src.rpm又生成二进制rpm 
<span class="token parameter variable">-bs</span> 只生成src的rpm 
<span class="token parameter variable">-bb</span> 只生二进制的rpm 
<span class="token parameter variable">-bp</span> 执行到pre 
<span class="token parameter variable">-bc</span> 执行到 build段 
<span class="token parameter variable">-bi</span> 执行install段 
<span class="token parameter variable">-bl</span> 检测有文件没包含 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以先<code>rpmbuild -bp</code>,再<code>-bc</code> 再<code>-bi</code>如果没问题<code>rpmbuild -bb/ba</code>生成二进制包或两个都生成</p><p>脚本参考(主要针对centos7 内核)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#/usr/bin/bash</span>
<span class="token comment">#ip= ip addr |grep inet |egrep -v &quot;inet6|127.0.0.1&quot; |awk &#39;{print $2}&#39; |awk -F &quot;/&quot; &#39;{print $1}&#39;</span>

<span class="token comment"># get server ip</span>

<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span> NOTICE! Check the package net-tools is installed <span class="token entity" title="\\n">\\n</span> &quot;</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span>  <span class="token string">&quot;zabbix server ip：&quot;</span> zabbix_server
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$zabbix_server</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;you have not input server ip, exit&quot;</span>
    <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>

<span class="token comment"># get agent ip</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span>  <span class="token string">&quot;local ip: &quot;</span> local_ip
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$local_ip</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;you have not input local ip, exit&quot;</span>
    <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;start to install...&quot;</span>
<span class="token function">sleep</span> <span class="token number">1</span>
<span class="token comment">#version centos7</span>
<span class="token comment">#cat /etc/*release | egrep -i &quot;centos|rhel|red hat|redhat&quot;</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;check os version...&quot;</span>
<span class="token function">sleep</span> <span class="token number">1</span>


<span class="token comment">#version centos7</span>
<span class="token function">cat</span> /etc/*release <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-q</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;centos\\|rhel\\|red hat\\|redhat&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token function">cat</span> /etc/*release <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-q</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;7\\.&quot;</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token function">sleep</span> <span class="token number">1</span>
        <span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> zabbix-3.0.14-1.el7.centos.x86_64.rpm
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;modify the agentd configuration&quot;</span>
        <span class="token function">sleep</span> <span class="token number">1</span>
        <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;/^Server=/c\\Server=<span class="token variable">\${zabbix_server}</span>&quot;</span> /usr/local/zabbix/etc/zabbix_agentd.conf
        <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;/^ServerActive=/c\\ServerActive=<span class="token variable">\${zabbix_server}</span>&quot;</span> /usr/local/zabbix/etc/zabbix_agentd.conf
        <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;/^Hostname=/c\\Hostname=<span class="token variable">\${local_ip}</span>&quot;</span> /usr/local/zabbix/etc/zabbix_agentd.conf
        <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;/Timeout=3/c\\Timeout=30&quot;</span> /usr/local/zabbix/etc/zabbix_agentd.conf
        <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;260i\\Include=/usr/local/zabbix/etc/zabbix_agentd.conf.d/*.conf&quot;</span> /usr/local/zabbix/etc/zabbix_agentd.conf
        systemctl daemon-reload
        /etc/init.d/zabbix_agentd start
        <span class="token function">chkconfig</span> zabbix_agentd on
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;SUCCESSFUL !&quot;</span>
        <span class="token builtin class-name">exit</span>
    <span class="token keyword">fi</span>
<span class="token keyword">fi</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),l=[t];function p(c,o){return s(),a("div",null,l)}const d=n(i,[["render",p],["__file","package-rpm.html.vue"]]);export{d as default};
