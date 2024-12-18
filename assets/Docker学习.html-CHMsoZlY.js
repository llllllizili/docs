import{_ as s,c as n,o as a,f as e}from"./app-BfCDUtKQ.js";const p={},i=e(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><div class="hint-container caution"><p class="hint-container-title">请注意</p><p>本文内容可能已过时，请自行甄别。</p></div><p>Docker三个基本概念</p><ul><li>镜像（image）</li><li>容器（container）</li><li>仓库（rrepository)</li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p>不同系统安装方式不同，<a href="https://github.com/yeasy/docker_practice/blob/master/install/README.md" target="_blank" rel="noopener noreferrer">详见</a><br> 以<code>centos</code>为例(仅支持64位kernel &gt;=3.10)建议使用国内源</p><p><strong>卸载原有版本</strong></p><p><code>yum remove docker docker-common docker-selinux docker-engine</code></p><p>yum-util 提供yum-config-manager功能，另外两个是devicemapper驱动依赖</p><p><code>yum install -y yum-utils device-mapper-persistent-data lvm2</code></p><p><strong>添加yum源</strong></p><div class="language-conf" data-ext="conf" data-title="conf"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span># 阿里源</span></span>
<span class="line"><span>yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#中科大</span></span>
<span class="line"><span>sudo yum-config-manager --add-repo https://mirrors.ustc.edu.cn/docker-ce/linux/centos/docker-ce.repo</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 官方源</span></span>
<span class="line"><span># sudo yum-config-manager  --add-repo https://download.docker.com/linux/centos/docker-ce.repo</span></span></code></pre></div><p>查看版本<br><code> yum list docker-ce --showduplicates | sort -r</code></p><p>可选择版本进行安装。默认仓库只开放稳定版</p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sudo</span><span style="color:#98C379;--shiki-dark:#98C379;"> yum</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#98C379;--shiki-dark:#98C379;"> docker-ce</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> #默认安装最新稳定版</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sudo</span><span style="color:#98C379;--shiki-dark:#98C379;"> yum</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#98C379;--shiki-dark:#98C379;"> docker-ce-17.12.0.ce</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> #安装指定版本</span></span></code></pre></div><p>启动并开机启动，<code>docker version</code> 即可查看版本</p><h2 id="创建用户组" tabindex="-1"><a class="header-anchor" href="#创建用户组"><span>创建用户组</span></a></h2><p>为了安全起见，docker只允许root和docker用户组的用户进行访问</p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">groupadd</span><span style="color:#98C379;--shiki-dark:#98C379;"> docker</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">usermod</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -G</span><span style="color:#98C379;--shiki-dark:#98C379;"> docker</span><span style="color:#98C379;--shiki-dark:#98C379;"> username</span></span></code></pre></div><h2 id="镜像加速" tabindex="-1"><a class="header-anchor" href="#镜像加速"><span>镜像加速</span></a></h2><p>若文件不存在,则手动创建</p><p><code>vim /etc/docker/daemon.json</code></p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#docker国内镜像加速应该是挂了</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  &quot;registry-mirrors&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;https://registry.docker-cn.com&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#阿里云镜像加速</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">登陆[阿里云](https://cr.console.aliyun.com</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">),获取专属加速地址</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">类似</span><span style="color:#98C379;--shiki-dark:#98C379;"> https://xxxx.mirror.aliyuncs.com</span><span style="color:#98C379;--shiki-dark:#98C379;"> 替换上面的地址</span></span></code></pre></div><p>systemctl daemon-reload</p><p>systemctl restart docker</p><h2 id="image" tabindex="-1"><a class="header-anchor" href="#image"><span>image</span></a></h2><p>获取镜像<br><code>docker pull [选项] [ 仓库地址] 仓库名/标签</code> 默认从<code>docker hub</code> 中拉取</p><p>例如 ： docker pull centos #默认就是从docker hub下载最新的</p><p>如果需要下载制定tag的，可去官网查询</p><p><code>docker search xxxx</code> 不显示tag</p><p><code>docker pull centos:7.4.1708</code> 下载指定版本</p><p><code>docker images -a </code> 列出镜像 (显示包括中间层镜像)</p><p>中间层镜像：是其他镜像所依赖的镜像，不能删除，否则会导致上层镜像因为依赖丢失报错，事实上也无需删除，相同的层只会存储一遍。</p><p><code>docker system df</code> 查看镜像,容器,数据卷占用空间</p><p><code>docker images -f since(或before)=image name</code> 列出某个image之前(之后)的镜像</p><p><code>docker image prune</code>删除虚悬镜像(dangling)</p><p>虚悬镜像：也就是新旧镜像重名而导致的，pull和build都可能会出现这种情况，<code>docker image ls -f dangling=true</code>可 查看，虚悬镜像都是无价值的，可删除</p><p><code>docker rmi $(docker images -q -f dangling=true)</code> 批量删除dangling</p><p><code>docker run --name webserver -d -p 80:80 nginx</code> 以nginx镜像为基础，运行容器，也就是新建个容器</p><h3 id="构建镜像" tabindex="-1"><a class="header-anchor" href="#构建镜像"><span>构建镜像</span></a></h3><h3 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile"><span>Dockerfile</span></a></h3><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;">   mkdir</span><span style="color:#98C379;--shiki-dark:#98C379;">   mynginx</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;">   cd</span><span style="color:#98C379;--shiki-dark:#98C379;">  mynginx</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">$</span><span style="color:#98C379;--shiki-dark:#98C379;">   touch</span><span style="color:#98C379;--shiki-dark:#98C379;">   Dockerfile</span></span></code></pre></div><p>cat Dockerfile</p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">FROM</span><span style="color:#98C379;--shiki-dark:#98C379;"> nginx</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">RUN</span><span style="color:#98C379;--shiki-dark:#98C379;"> echo</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;&lt;h1&gt;Dockerfile&lt;/h1&gt;&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &gt;    &gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">/usr/share/nginx/html/index.html</span></span></code></pre></div><p><code>FROM image</code></p><p>必写,定制镜像也是以镜像为基础的.这里就是选定一个基础镜像,可以以相关服务镜像为基础(nginx,mysql等),也可是是系统(ubuntu,centos等).</p><p>另外,docker还提供<code>FROM scratch</code> 意味不以任何镜像为基础.</p><p><code>RUN</code></p><p>shell格式 : 用来执行命令行命令.</p><p>exec格式: <code>RUN [&quot;可执行文件&quot;,&quot;参数1&quot;, &quot;参数2&quot;]</code>这像是函数调用</p><p><code>RUN</code>命令常用来安装软件包</p><h4 id="构建" tabindex="-1"><a class="header-anchor" href="#构建"><span>构建</span></a></h4><p><code>docker build [选项] &lt;上下文路径/URL/-&gt;</code><br> 在文件目录下执行<code>docker build -t nginx:v3 .</code></p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[root@docker docker]# docker build -t nginx:v3 </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">.</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Sending</span><span style="color:#98C379;--shiki-dark:#98C379;"> build</span><span style="color:#98C379;--shiki-dark:#98C379;"> context</span><span style="color:#98C379;--shiki-dark:#98C379;"> to</span><span style="color:#98C379;--shiki-dark:#98C379;"> Docker</span><span style="color:#98C379;--shiki-dark:#98C379;"> daemon</span><span style="color:#98C379;--shiki-dark:#98C379;">  2.048kB</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Step</span><span style="color:#98C379;--shiki-dark:#98C379;"> 1/2</span><span style="color:#98C379;--shiki-dark:#98C379;"> :</span><span style="color:#98C379;--shiki-dark:#98C379;"> FROM</span><span style="color:#98C379;--shiki-dark:#98C379;"> nginx</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> ---</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">b8efb18f159b</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Step</span><span style="color:#98C379;--shiki-dark:#98C379;"> 2/2</span><span style="color:#98C379;--shiki-dark:#98C379;"> :</span><span style="color:#98C379;--shiki-dark:#98C379;"> RUN</span><span style="color:#98C379;--shiki-dark:#98C379;"> echo</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;&lt;h1&gt; Dockerfile!&lt;/h1&gt;&#39;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &gt;&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">/usr/share/nginx/html/index.html</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> ---</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">Running</span><span style="color:#98C379;--shiki-dark:#98C379;"> in</span><span style="color:#98C379;--shiki-dark:#98C379;"> 8b921720af4c</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> ---</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">2cd0174a0aea</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Removing</span><span style="color:#98C379;--shiki-dark:#98C379;"> intermediate</span><span style="color:#98C379;--shiki-dark:#98C379;"> container</span><span style="color:#98C379;--shiki-dark:#98C379;"> 8b921720af4c</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Successfully</span><span style="color:#98C379;--shiki-dark:#98C379;"> built</span><span style="color:#98C379;--shiki-dark:#98C379;"> 2cd0174a0aea</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Successfully</span><span style="color:#98C379;--shiki-dark:#98C379;"> tagged</span><span style="color:#98C379;--shiki-dark:#98C379;"> nginx:v3</span></span></code></pre></div><h4 id="实例解析" tabindex="-1"><a class="header-anchor" href="#实例解析"><span>实例解析</span></a></h4><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">FROM</span><span style="color:#98C379;--shiki-dark:#98C379;">    debian:jessie</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">RUN</span><span style="color:#98C379;--shiki-dark:#98C379;"> apt-get</span><span style="color:#98C379;--shiki-dark:#98C379;"> update</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">RUN</span><span style="color:#98C379;--shiki-dark:#98C379;"> apt-get</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -y</span><span style="color:#98C379;--shiki-dark:#98C379;">  gcc</span><span style="color:#98C379;--shiki-dark:#98C379;"> libc6-dev</span><span style="color:#98C379;--shiki-dark:#98C379;">   make</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">RUN</span><span style="color:#98C379;--shiki-dark:#98C379;"> wget</span><span style="color:#D19A66;--shiki-dark:#D19A66;">    -O</span><span style="color:#98C379;--shiki-dark:#98C379;">  redis.tar.gz</span><span style="color:#98C379;--shiki-dark:#98C379;">    &quot;http://download.redis.io/releases/redis-3.2.5.tar.gz&quot;</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">RUN</span><span style="color:#98C379;--shiki-dark:#98C379;"> mkdir</span><span style="color:#D19A66;--shiki-dark:#D19A66;">   -p</span><span style="color:#98C379;--shiki-dark:#98C379;">  /usr/src/redis</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">RUN</span><span style="color:#98C379;--shiki-dark:#98C379;"> tar</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -xzf</span><span style="color:#98C379;--shiki-dark:#98C379;">    redis.tar.gz</span><span style="color:#D19A66;--shiki-dark:#D19A66;">    -C</span><span style="color:#98C379;--shiki-dark:#98C379;">  /usr/src/redis</span><span style="color:#D19A66;--shiki-dark:#D19A66;">  --strip-components=1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">RUN</span><span style="color:#98C379;--shiki-dark:#98C379;"> make</span><span style="color:#D19A66;--shiki-dark:#D19A66;">    -C</span><span style="color:#98C379;--shiki-dark:#98C379;">  /usr/src/redis</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">RUN</span><span style="color:#98C379;--shiki-dark:#98C379;"> make</span><span style="color:#D19A66;--shiki-dark:#D19A66;">    -C</span><span style="color:#98C379;--shiki-dark:#98C379;">  /usr/src/redis</span><span style="color:#98C379;--shiki-dark:#98C379;">  install</span></span></code></pre></div><p>Dockerfile中一个RUN指令,就会建立一层.就和cimmit类似,一层层的叠加然后生成新的image.这样没有意义,很多无用的东西都装进了image.编译环境,软件包等.而且UnionFS是有层数限制的的.<br> 所以,正确的写法应该是这样</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>FROM    debian:jessie</span></span>
<span class="line"><span>RUN buildDeps=&#39;gcc  libc6-dev   make&#39;   \\</span></span>
<span class="line"><span>                &amp;&amp;  apt-get update  \\</span></span>
<span class="line"><span>                &amp;&amp;  apt-get install -y  $buildDeps  \\</span></span>
<span class="line"><span>                &amp;&amp;  wget    -O  redis.tar.gz    &quot;http://download.redis.io/releases/redis-3.2.5.tar.gz&quot;  \\</span></span>
<span class="line"><span>                &amp;&amp;  mkdir   -p  /usr/src/redis  \\</span></span>
<span class="line"><span>                &amp;&amp;  tar -xzf    redis.tar.gz    -C  /usr/src/redis  --strip-components=1    \\</span></span>
<span class="line"><span>                &amp;&amp;  make    -C  /usr/src/redis  \\</span></span>
<span class="line"><span>                &amp;&amp;  make    -C  /usr/src/redis  install \\</span></span>
<span class="line"><span>                &amp;&amp;  rm  -rf /var/lib/apt/lists/*    \\</span></span>
<span class="line"><span>                &amp;&amp;  rm  redis.tar.gz    \\</span></span>
<span class="line"><span>                &amp;&amp;  rm  -r  /usr/src/redis  \\</span></span>
<span class="line"><span>                &amp;&amp;  apt-get purge   -y  --auto-remove   $buildDeps</span></span></code></pre></div><p>一层一个目的,而不是一层一条命令,我们是在构建image并不是在写shell脚本.并且要记得做相关清理工作.</p><h4 id="build中的点" tabindex="-1"><a class="header-anchor" href="#build中的点"><span>build中的点<code>.</code></span></a></h4><p>docker build 命令最后有个点<code>.</code>,它表示当前目录,而Dockerfile就在当前目录.所以会让人认为点<code>.</code>指的就是Dockerfile的路径,其实是不准确的.如果对照bulid格式,会发现,这里的点其实指的是上下文.<br> 理解上下文要理解下docker工作原理,docker运行时,分为server和client.我们其实是使用client控制docker服务端,所有的操作其实是服务端完成的.也就是C/S结构.<br> 所以我们构建image的时候,可以使用ADD.COPY等指令,将本地文件复制进镜像.构建是在服务端.服务端如何获取本地文件呢?这里就用到了上下文.用户指定了上下文路径,build的时候就会将路径下的内容打包.然后上传到Docker server.当Docker server收到后展开就能获得所需的一切文件<br> 比如<br><code>COPY ./package.json /app</code><br> 这并不是要复制执行docker build命令所在的目录下的package.json ,也不是复制Dockerfile所在目录下的package.json而是复制上下文(context)目录下的p<br> ackage.json<br> 所以,这里的路径是相对的, <code>COPY ../package.json /app</code>或者<code>COPY /opt/xxxx /app</code> 其实都已经超出了上下文的范围.那当我们需要context范围外的文件怎么办?很简单,先把文件cp到上下文目录中.<br> 默认情况下,Dockerfile会将上下文目录下的Dockerfile文件作为Dockerfile.所以很多人会误认为 <code>.</code>就是指Dockerfile所在目录<br> 通常习惯上我们也不会去更改.</p><h3 id="dockerfile其他指令" tabindex="-1"><a class="header-anchor" href="#dockerfile其他指令"><span>Dockerfile其他指令</span></a></h3><h4 id="copy" tabindex="-1"><a class="header-anchor" href="#copy"><span>COPY</span></a></h4><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>    COPY    &lt;源路径&gt;...    &lt;目标路径&gt;  </span></span>
<span class="line"><span>    COPY    [&quot;&lt;源路径1&gt;&quot;,...   &quot;&lt;目标路径&gt;&quot;]</span></span></code></pre></div><p>源路径可以指定多个,也可以是还是用通配符.<br> 此COPY 自带 -p.会保留源文件的属性.</p><h4 id="add" tabindex="-1"><a class="header-anchor" href="#add"><span>ADD</span></a></h4><p>基本和COPY是一致的.但是他俩的使用建议遵守一个原则<br> 文件复制使用<code>COPY</code>,需要解压缩使用<code>ADD</code></p><h4 id="cmd" tabindex="-1"><a class="header-anchor" href="#cmd"><span>CMD</span></a></h4><p>此命令类似<code>RUN</code> 支持两种格式 <code>shell</code> 和 <code>exec</code><br> shell 格式: <code>CMD &lt;命令&gt;</code><br> exec格式: <code>CMD [&quot;可执行文件&quot;, &quot;参数1&quot;, &quot;参数2&quot;...]</code><br> 参数列表格式: <code>CMD[&quot;参数1&quot;, &quot;参数2&quot;...]</code>在指定了 <code>ENTRYPOINT</code> 指令后,用 CMD指定具体的参数。</p><p>Docker不是虚拟机,容器是进程.所以容器的启动需要指定运行程序和参数.<code>CMD</code> 就是用于指定默认容易主进程的启动命令<br> 或者这样理解,<code>CMD</code> 执行的是默认容器启动后执行的命令以及参数.一般<code>只允许使用一次CMD,常用于文件最后</code></p><p>命令格式上推荐使用<code>exec</code> , 默认情况下 shell 是会被封装成为<code>sh -c</code><br> 如:<br><code>CMD echo $HOME</code> --&gt; <code>CMD [&quot;sh&quot;, &quot;-c&quot;, &quot;echo $HOME&quot;]</code><br> 注意! <code>exec</code>格式 一定要用双引号!因为在解析时会被解析成<code>json</code></p><p>docker不是虚拟机,容器的应用也应该是以前台执行的,容器不存在后台的概念.不能以虚拟机的方式去执行后台服务等<br> 所以 <code>CMD service nginx start</code>肯定是错误的.会转换为 <code>CMD [&quot;sh&quot;, &quot;-c&quot;, &quot;service nginx start&quot;]</code> 显而易见,主进程是<code>sh</code>,所以这种格式的命令,会导致容器退出.<br> 正确的方式 是<code>CMD [&quot;nginx&quot;,&quot;-g&quot;,&quot;daemon off&quot;]</code></p><h4 id="entrypoint" tabindex="-1"><a class="header-anchor" href="#entrypoint"><span>ENTRYPOINT</span></a></h4><p>同样支持两种格式: <code>exec</code> 和<code>shell</code></p><p>当指定了<code>ENTRYPOINT</code>后<code>CMD</code>的含义就发生了变化,它不在直接运行命令,而是将内容传送给<code>ENTYRPOINT</code>运行<br> 同<code>CMD</code>,一个文件只写一次.</p><h4 id="env" tabindex="-1"><a class="header-anchor" href="#env"><span>ENV</span></a></h4><p>环境变量<br><code>ENV KEY VALUE</code> <code>ENV KEY=VALUE</code> 两种方式都可以<br> 下列指令可以支持环境变量展开：<br><code>ADD、COPY、ENV、EXPOSE、LABEL、USER、WORKDIR、VOLUME、STOPSIGNAL、ONBUILD</code><br> 例:(node官方)</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>ENV NODE_VERSION 7.2.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RUN curl -SLO &quot;https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz&quot; \\</span></span>
<span class="line"><span>  &amp;&amp; curl -SLO &quot;https://nodejs.org/dist/v$NODE_VERSION/SHASUMS256.txt.asc&quot; \\</span></span>
<span class="line"><span>  &amp;&amp; gpg --batch --decrypt --output SHASUMS256.txt SHASUMS256.txt.asc \\</span></span>
<span class="line"><span>  &amp;&amp; grep &quot; node-v$NODE_VERSION-linux-x64.tar.xz\\$&quot; SHASUMS256.txt | sha256sum -c - \\</span></span>
<span class="line"><span>  &amp;&amp; tar -xJf &quot;node-v$NODE_VERSION-linux-x64.tar.xz&quot; -C /usr/local --strip-components=1 \\</span></span>
<span class="line"><span>  &amp;&amp; rm &quot;node-v$NODE_VERSION-linux-x64.tar.xz&quot; SHASUMS256.txt.asc SHASUMS256.txt \\</span></span>
<span class="line"><span>  &amp;&amp; ln -s /usr/local/bin/node /usr/local/bin/nodejs</span></span></code></pre></div><h4 id="arg变量" tabindex="-1"><a class="header-anchor" href="#arg变量"><span>ARG变量</span></a></h4><p><code>ARG key </code> <code>ARG key=value </code><br> ARG指令定义的参数，在docker build命令中以--build-arg key=value形式赋值。<br> ARG变量不像ENV变量始终存在于镜像中。不过ARG变量会以类似的方式对构建缓存产生影响。如果Dockerfile中定义的ARG变量的值与之前定义的变量值不一样，那么就有可能产生“cache miss”。比如RUN指令使用ARG定义的变量时，ARG变量的值变了之后，就会导致缓存失效。</p><h4 id="volume" tabindex="-1"><a class="header-anchor" href="#volume"><span>VOLUME</span></a></h4><p><code>VOLUME path</code> <code>VOLUME [&quot;path1&quot;,&quot;path2&quot;]</code><br> 容器运行,尽量让存储层不发生写操作,通常数据都存放在卷中,此命令可实现指定挂载某目录,以防用户忘记将动态文件目录挂载为卷.这样可以保证容器的正常运行,并且不会向存储写数据</p><h4 id="expose" tabindex="-1"><a class="header-anchor" href="#expose"><span>EXPOSE</span></a></h4><p><code>EXPOSE 80</code><br><code>EXPOSE 22</code><br> 声明运行容器时提供服务端口,单单只是声明,并不会真的去开启这个端口.当使用<code>docker run -P</code>时,会自动随机映射EXPOSE的端口</p><h4 id="workdir" tabindex="-1"><a class="header-anchor" href="#workdir"><span>WORKDIR</span></a></h4><p>指定工作目录<br><code>WORKDIR dir</code><br> 用来指定工作目录,WORKDIR类似命令cd。<br> WORKDIR参数后可以是相对路径或者带/的绝对路径，使用相对路径就依据上一个WORKDIR参数决定下面的Dockerfile工作目录。<br> 可以重复定义，以切换Dockerfile的工作目录。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>RUN cd  /app</span></span>
<span class="line"><span>RUN echo    &quot;hello&quot; &gt;   world.txt</span></span></code></pre></div><p>两个RUN 其实是运行了两个容器.第一个RUN并不会对第二个产生任何影响.所以第二个将会找不到路径,此时就需要设置工作目录 <code>WORKDIR /app</code></p><h4 id="onbuild" tabindex="-1"><a class="header-anchor" href="#onbuild"><span>ONBUILD</span></a></h4><p>该命令实际上是个触发器,其参数是任意一个Dockerfile 指令<br><code>ONBUILD RUN mkdir /testdir</code><br> 当我们在一个Dockerfile文件中加上ONBUILD指令，该指令对利用该Dockerfile构建镜像（比如为A镜像）不会产生实质性影响。<br> 但是当我们编写一个新的Dockerfile文件来基于A镜像构建一个镜像（比如为B镜像）时，这时构造A镜像的Dockerfile文件中的ONBUILD指令就生效了.</p><h4 id="user" tabindex="-1"><a class="header-anchor" href="#user"><span>USER</span></a></h4><p><code>USER username</code><br><code>USER</code>会改变以后命令的执行用户.或者说,他就是切换用户的.前提,用户是存在的,否则失败.</p><p>如果以 root 执行的脚本，在执行期间希望改变身份，比如希望以某个已经建立好的用户来运行某个服务进程<br> 不要使用 su 或者 sudo，这些都需要比较麻烦的配置，而且在 TTY 缺失的环境下经常出错。建议使用 gosu。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span># 建立 redis 用户，并使用 gosu 换另一个用户执行命令</span></span>
<span class="line"><span>RUN groupadd -r redis &amp;&amp; useradd -r -g redis redis</span></span>
<span class="line"><span># 下载 gosu</span></span>
<span class="line"><span>RUN wget -O /usr/local/bin/gosu &quot;https://github.com/tianon/gosu/releases/download/1.7/gosu-amd64&quot; \\</span></span>
<span class="line"><span>    &amp;&amp; chmod +x /usr/local/bin/gosu \\</span></span>
<span class="line"><span>    &amp;&amp; gosu nobody true</span></span>
<span class="line"><span># 设置 CMD，并以另外的用户执行</span></span>
<span class="line"><span>CMD [ &quot;exec&quot;, &quot;gosu&quot;, &quot;redis&quot;, &quot;redis-server&quot; ]</span></span></code></pre></div><h4 id="healthcheck" tabindex="-1"><a class="header-anchor" href="#healthcheck"><span>HEALTHCHECK</span></a></h4><p><code>HEALTHCHECK [option] CMD &lt;command&gt;</code><br><code>HEALTHCHECK NONE</code> 可屏蔽基础镜像的健康检测指令</p><p>其命令和ENTTYPOINT类似.<br><code>--interval</code> 间隔时间,两次检测时间间隔,默认30s<br><code>--timeout</code> 超时.健康检测运行超时时间.默认30s<br><code>--retries</code> 重试.默认3次.<br> 返回值:<code>0</code>:成功,<code>1</code>:失败 <code>2</code>:保留</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>FROM    nginx</span></span>
<span class="line"><span>RUN apt-get update  &amp;&amp;  apt-get install -y  curl    &amp;&amp;  rm  -rf /var/lib/apt/lists/*</span></span>
<span class="line"><span>HEALTHCHECK --interval=15s  --timeout=5s    \\</span></span>
<span class="line"><span>        CMD curl    -fs http://localhost/   ||  exit    1</span></span></code></pre></div><h4 id="dockerfile多阶段构建" tabindex="-1"><a class="header-anchor" href="#dockerfile多阶段构建"><span>Dockerfile多阶段构建</span></a></h4><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>FROM muninn/glide:alpine AS build-env</span></span>
<span class="line"><span>ADD . /go/src/app</span></span>
<span class="line"><span>WORKDIR /go/src/app</span></span>
<span class="line"><span>RUN glide install</span></span>
<span class="line"><span>RUN go build -v -o /go/src/app/app-server</span></span>
<span class="line"><span></span></span>
<span class="line"><span>FROM alpine</span></span>
<span class="line"><span>RUN apk add -U tzdata</span></span>
<span class="line"><span>RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai  /etc/localtime</span></span>
<span class="line"><span>COPY --from=build-env /go/src/app/app-server /usr/local/bin/app-server</span></span>
<span class="line"><span>EXPOSE 80</span></span>
<span class="line"><span>CMD [&quot;app-server&quot;]</span></span></code></pre></div><p>首先，第一个 <code>FROM</code> 后边多了个 <code>AS</code> 关键字，可以给这个阶段起个名字。<br> 第二部分用了官方的 alpine 镜像，改变时区到中国<br> 注意<code>COPY</code> 关键字，它现在可以接受 --from= 这样的参数，从上个我们起名字的阶段复制文件过来。</p><h3 id="dockerfile文件解析" tabindex="-1"><a class="header-anchor" href="#dockerfile文件解析"><span>Dockerfile文件解析</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>#docker build -t centos_nginx:v5 .</span></span>
<span class="line"><span>#docker run --name web_5 -d -p 85:80 centos_nginx:v5 </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>FROM centos</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MAINTAINER zili.li</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ADD nginx-1.12.2.tar.gz /usr/local/src</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RUN buildDeps=&#39;gcc gcc-c++ glib make autoconf openssl openssl-devel libxslt-devel gd gd-devel GeoIP GeoIP-devel pcre pcre-devel wget curl&#39; \\ </span></span>
<span class="line"><span>                &amp;&amp; yum -y install $buildDeps \\</span></span>
<span class="line"><span>                &amp;&amp; useradd -M -s /sbin/nologin nginx</span></span>
<span class="line"><span>#多个用逗号分隔</span></span>
<span class="line"><span>#docker inspect web_5 的 Mounts下可看到文件挂载信息.</span></span>
<span class="line"><span>#docker exec -it web_5 /bin/bash 进入容器可查看到挂载的目录,其内容和Mounts是同步的</span></span>
<span class="line"><span>VOLUME [&quot;/usr/local/nginx/html&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>WORKDIR /usr/local/src/nginx-1.12.2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RUN ./configure --user=nginx --group=nginx --prefix=/usr/local/nginx --with-file-aio --with-http_ssl_module --with-http_realip_module --with-http_addition_module --with-http_xslt_module --with-http_image_filter_module --with-http_geoip_module --with-http_sub_module --with-http_dav_module --with-http_flv_module --with-http_mp4_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_auth_request_module --with-http_random_index_module --with-http_secure_link_module --with-http_degradation_module --with-http_stub_status_module \\</span></span>
<span class="line"><span>                &amp;&amp; make \\</span></span>
<span class="line"><span>                &amp;&amp; make install \\</span></span>
<span class="line"><span>                &amp;&amp; rm -rf /usr/local/src/nginx-1.12.2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#指定了环境变量,所以生成容器的时候 不用在指定路径.直接nginx 即可</span></span>
<span class="line"><span>ENV PATH /usr/local/nginx/sbin:$PATH                </span></span>
<span class="line"><span></span></span>
<span class="line"><span>EXPOSE 80</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#当ENTRYPOINT和CMD连用时，CMD的命令是ENTRYPOINT命令的参数，两者连用相当于nginx -g &quot;daemon off;&quot;</span></span>
<span class="line"><span>#如果CMD [&quot;-g&quot;,&quot;daemon on;&quot;] 那么生成的容器将不会处于up状态.但是执行run的时候加入 -g &quot;daemon off;&quot;此参数将会传入给ENTRYPOINT</span></span>
<span class="line"><span>#容器中的应用都应该以前台执行,容器没有后台概念,-d 表示的后台,是程序的后台,程序完毕容器停止,而不是容器后台.容器都是前台的.</span></span>
<span class="line"><span>ENTRYPOINT [&quot;nginx&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#CMD service nginx start 这是初学经常搞模糊的地方!</span></span>
<span class="line"><span>#对于容器而言，其启动程序就是容器应用进程，容器就是为了主进程而存在的，主进程退出，容器就失去了存在的意义，从而退出.</span></span>
<span class="line"><span># CMD service nginx start 会被理解为 CMD [ &quot;sh&quot;, &quot;-c&quot;, &quot;service nginx start&quot;]</span></span>
<span class="line"><span>#因此主进程实际上是 sh,那么当 service nginx start 命令结束后，sh 也就结束，sh作为主进程退出了自然就会令容器退出</span></span>
<span class="line"><span>#正确的做法是直接执行 nginx 可执行文件，并且要求以前台形式运行。比如：CMD [&quot;nginx&quot;, &quot;-g&quot;, &quot;daemon off;&quot;],或CMD /bin/sh -c &#39;nginx -g &quot;daemon off;&quot;&#39;</span></span>
<span class="line"><span>CMD [&quot;-g&quot;,&quot;daemon off;&quot;]</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="container" tabindex="-1"><a class="header-anchor" href="#container"><span>container</span></a></h2><h3 id="新建容器" tabindex="-1"><a class="header-anchor" href="#新建容器"><span>新建容器</span></a></h3><p><code>docker run</code> 此命令是用来新建容器<br> 例如：<br><code>docker run ubuntu /bin/echo &#39;test&#39;</code> 会输出test后终止容器，终止容器并不是删除容器，所以容器还是存在的，添加<code>--rm</code> 则会临时性的执行，完后删除容器<code>docker run --rm ....</code></p><p><code>docker run -it ubuntu /bin/bash</code> 会生成一个伪终端。可通过终端进行简单的操作。同样，此容器也是存在的。docker ps -a查看</p><p>docker run流程</p><ul><li>检查本地是否存在指定的镜像，不存在就从公有仓库下载</li><li>利用镜像创建并启动一个容器</li><li>分配一个文件系统，并在只读的镜像层外面挂载一层可读写层</li><li>从宿主主机配置的网桥接口中桥接一个虚拟接口到容器中去</li><li>从地址池配置一个 ip 地址给容器</li><li>执行用户指定的应用程序</li><li>执行完毕后容器被终止,并不是删除，容器还可以再次启动</li></ul><h3 id="启动容器" tabindex="-1"><a class="header-anchor" href="#启动容器"><span>启动容器</span></a></h3><p><code>docker container start -i container_id</code>会重新启动一个已终止的容器。</p><p><strong>docker container 还有很多命令，建议使用 --help查看使用说明</strong></p><h3 id="容器后台运行" tabindex="-1"><a class="header-anchor" href="#容器后台运行"><span>容器后台运行</span></a></h3><p><code>docker run -d</code><br> 不是用后台运行时，结果输出会到当前主机</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>[root@zili ~]# docker run ubuntu /bin/sh -c &quot;while true; do echo test -d; sleep 1; done&quot;</span></span>
<span class="line"><span>test -d</span></span>
<span class="line"><span>test -d</span></span>
<span class="line"><span>test -d</span></span>
<span class="line"><span>test -d</span></span></code></pre></div><p>使用后台运行时候,容器将后台运行，那么如何查看结果呢？</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>[root@zili ~]# docker run -d ubuntu /bin/sh -c &quot;while true; do echo test -d; sleep 1; done&quot;</span></span>
<span class="line"><span>69931b53bfea873daf9cfeb82c926be84980e41a3c0f62f966b039ffbaa0b1c1</span></span></code></pre></div><p><code>docker container log container_id</code> 可以来查看相关的容器输出</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>[root@zili ~]# docker container logs 699</span></span>
<span class="line"><span>test -d</span></span>
<span class="line"><span>test -d</span></span>
<span class="line"><span>test -d</span></span>
<span class="line"><span>test -d</span></span>
<span class="line"><span>test -d</span></span>
<span class="line"><span>test -d</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>需要注意的是，容器是否能长久运行和指定的命令有关系，也就是说，命令结束，容器停止，和<code>-d</code>参数并无关系，它只是用来让容器后台运行而已。<br> 停止容器运行使用<code>docker container stop container_id</code></p><h3 id="进入容器" tabindex="-1"><a class="header-anchor" href="#进入容器"><span>进入容器</span></a></h3><p><code>docker attach</code></p><p>不建议使用,因为使用此命令,如果容器是<code>-d</code>后台运行,stdin退出时,容器运行状态将终止.也就是说,此命令进入容器,退出时会导致后台运行的容器终止</p><p><code>docker exec -it </code> 不会导致后台运行中的容器终止.推荐使用~!<br> 参数说明请使用 <code>docker exec --help</code></p><h3 id="导入和导出" tabindex="-1"><a class="header-anchor" href="#导入和导出"><span>导入和导出</span></a></h3><p><code>docker container export</code> 导出</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>[root@docker ~]# docker ps -a</span></span>
<span class="line"><span>CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                      PORTS               NAMES</span></span>
<span class="line"><span>0828d964cc2f        ubuntu:16.04        &quot;/bin/bash&quot;         29 minutes ago      Exited (0) 29 minutes ago                       attach</span></span>
<span class="line"><span>[root@docker ~]# docker container export attach &gt; attach.tar</span></span>
<span class="line"><span>[root@docker ~]# ls</span></span>
<span class="line"><span>anaconda-ks.cfg  attach.tar  docker  myip</span></span></code></pre></div><p><code>docker image import</code> 导入</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>[root@docker ~]# cat attach.tar | docker import - test/ubuntu</span></span>
<span class="line"><span>sha256:e9b17f2d8f7546a1d3e143f684b234ebf2301b95193782d8685d2cdb2f05b2f5</span></span>
<span class="line"><span>[root@docker ~]# docker images</span></span>
<span class="line"><span>REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE</span></span>
<span class="line"><span>test/ubuntu         latest              e9b17f2d8f75        4 seconds ago       98.4MB</span></span></code></pre></div><p>也可以通过URL导入<br><code>docker import http://example.com/exampleimage.tgz example/imagerepo</code></p><h3 id="删除容器" tabindex="-1"><a class="header-anchor" href="#删除容器"><span>删除容器</span></a></h3><p><code>docker rm</code><br><code>docker rm -f</code> 删除运行中的容器<br><code>docker container prune</code> 删除所有终止的容器</p><h3 id="其他命令" tabindex="-1"><a class="header-anchor" href="#其他命令"><span>其他命令</span></a></h3><p><code>docker diff container name</code> 查看容器变化<br><code>docker history container:tag</code> 查看container 历史</p><h2 id="repository" tabindex="-1"><a class="header-anchor" href="#repository"><span>Repository</span></a></h2><p>官方repository <a href="https://hub.docker.com/" target="_blank" rel="noopener noreferrer">Docker hub</a></p><p><code>docker search</code> 命令查找官方repository的镜像.<br><code>docker pull</code> 命令把镜像拉取下来</p><p><code>docker login</code> 登录docker hub<br><code>docker logout</code> 退出docker hub<br><code>docker push</code> 推送镜像</p><h3 id="私有仓库" tabindex="-1"><a class="header-anchor" href="#私有仓库"><span>私有仓库</span></a></h3><p><a href="https://yeasy.gitbooks.io/docker_practice/content/repository/registry.html" target="_blank" rel="noopener noreferrer">略</a></p><h2 id="数据管理" tabindex="-1"><a class="header-anchor" href="#数据管理"><span>数据管理</span></a></h2><p>容器管理数据主要有两种方式,数据卷（Volumes）和挂载主机目录(Bind mounts)</p><h3 id="数据卷-volumes" tabindex="-1"><a class="header-anchor" href="#数据卷-volumes"><span>数据卷(Volumes)</span></a></h3><p>数据卷可以在容器之间共享和重用,<br> 数据卷 的修改会立马生效且数据卷 的更新，不会影响镜像<br> 数据卷 默认会一直存在，即使容器被删除</p><ul><li>注意：数据卷 的使用，类似于 Linux 下对目录或文件进行 mount，镜像中的被指定为挂载点的目录中的文件会隐藏掉，能显示看的是挂载的 数据卷。</li></ul><p>数据卷有 <code>--mount</code> <code>-v</code> 或者 <code>--volume</code> 但是推荐使用 <code>--mount</code> 参数</p><h3 id="创建-删除volume" tabindex="-1"><a class="header-anchor" href="#创建-删除volume"><span>创建/删除volume</span></a></h3><p><code>docker volume create webtest</code> 创建一个webtest的数据卷<br><code>docker volume inspect webtest</code> 查看数据卷</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>[root@docker ~]# docker volume inspect webtest</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &quot;CreatedAt&quot;: &quot;2018-04-15T10:54:40+08:00&quot;,</span></span>
<span class="line"><span>        &quot;Driver&quot;: &quot;local&quot;,</span></span>
<span class="line"><span>        &quot;Labels&quot;: {},</span></span>
<span class="line"><span>        &quot;Mountpoint&quot;: &quot;/var/lib/docker/volumes/webtest/_data&quot;,</span></span>
<span class="line"><span>        &quot;Name&quot;: &quot;webtest&quot;,</span></span>
<span class="line"><span>        &quot;Options&quot;: {},</span></span>
<span class="line"><span>        &quot;Scope&quot;: &quot;local&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>]</span></span></code></pre></div><p><code>docker volume rm webtest</code> 删除数据卷,前提数据卷没有被容器使用</p><p>数据卷是独立于容器的,用来做数据初始化的,所以容器的删除不会影响数据卷,若删除容器时想要删除数据卷 则使用<code>docker rm -v</code><br> 清理无主的数据卷 <code>docker volume prune</code></p><p>涉及删除的操作,<code>思之,慎之而行之</code></p><h3 id="启动挂载数据卷的容器" tabindex="-1"><a class="header-anchor" href="#启动挂载数据卷的容器"><span>启动挂载数据卷的容器</span></a></h3><p><code>docker run</code>时，使用 <code>--mount</code> 标记来将数据卷挂载到容器里,在一次 docker run 中可以挂载多个数据卷</p><p><code>-v后面的映射关系是&quot;宿主机文件/目录:容器里对应的文件/目录&quot;，其中，宿主机上的文件/目录是要提前存在的，容器里对应的文件/目录会自动创建。</code></p><p>两种方式本质上没有区别,mount更加清晰直观.<br><code> docker run -it --name web -d -p 80:80 --mount source=webtest,target=/webdir nginx</code><br><code>docker run -it --name web -d -p 80:80 -v webtest:/webdir nginx</code></p><p><strong>查看数据卷具体信息</strong><br><code>docker inspect web</code> 数据卷的信息在Mounts下</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>&quot;Mounts&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;Type&quot;: &quot;volume&quot;,</span></span>
<span class="line"><span>                &quot;Name&quot;: &quot;webtest&quot;,</span></span>
<span class="line"><span>                &quot;Source&quot;: &quot;/var/lib/docker/volumes/webtest/_data&quot;,</span></span>
<span class="line"><span>                &quot;Destination&quot;: &quot;/webdir&quot;,</span></span>
<span class="line"><span>                &quot;Driver&quot;: &quot;local&quot;,</span></span>
<span class="line"><span>                &quot;Mode&quot;: &quot;z&quot;,</span></span>
<span class="line"><span>                &quot;RW&quot;: true,</span></span>
<span class="line"><span>                &quot;Propagation&quot;: &quot;&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ],</span></span></code></pre></div><p><code>docker exec -it container /bin/bash</code> 可进入容器查看挂载的目录并新建文件等</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>root@f24f73d240d9:/# cd webdir/</span></span>
<span class="line"><span>root@f24f73d240d9:/webdir# touch 123</span></span>
<span class="line"><span>root@f24f73d240d9:/webdir# df -h</span></span>
<span class="line"><span>Filesystem              Size  Used Avail Use%   Mounted on</span></span>
<span class="line"><span>/dev/mapper/centos-root  50G  1.8G   49G   4%   /webdir</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后退出可在宿主机上看到此文件</span></span>
<span class="line"><span>[root@docker ~]# cd /var/lib/docker/volumes/webtest/_data/</span></span>
<span class="line"><span>[root@docker _data]# ls</span></span>
<span class="line"><span>123</span></span></code></pre></div><h3 id="挂载目录-bind-mounts" tabindex="-1"><a class="header-anchor" href="#挂载目录-bind-mounts"><span>挂载目录(Bind mounts)</span></a></h3><p>多个目录的挂载 多写几次<code>--mount</code>即可</p><p><code>[root@docker web]# docker run --name dirbind -d -p 80:80 --mount type=bind,source=/root/web,target=/usr/share/nginx/html nginx</code><br> 首先我在root下新建web目录并写个index.html文件将其挂到由nginx镜像生成的容器<code>dirbind</code>的html下.</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>[root@docker web]# docker run --name dirbind -d -p 80:80 --mount type=bind,source=/root/web,target=/usr/share/nginx/html nginx</span></span>
<span class="line"><span>2648c6f9e8ff3660e37dc64b0483bc906e5987082224fb0f8604e2bceef2da65</span></span>
<span class="line"><span>[root@docker web]# docker exec -it 264 /bin/bash</span></span>
<span class="line"><span>#此时已进入容器</span></span>
<span class="line"><span>root@2648c6f9e8ff:/# cd /usr/share/nginx/html</span></span>
<span class="line"><span>root@2648c6f9e8ff:/usr/share/nginx/html# ls</span></span>
<span class="line"><span>index.html</span></span>
<span class="line"><span>#index文件已经挂载上来了. 再次访问nginx就能看到index的内容了.</span></span></code></pre></div><p>查看容器信息<br><code>docker inspect dirbind</code> #Mounts部分可看到挂载信息,注意这里,<code>RW: true</code><br> 说明是读写权限的,其实还可以挂载个只读的文件.后有说明.</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>&quot;Mounts&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;Type&quot;: &quot;bind&quot;,</span></span>
<span class="line"><span>                &quot;Source&quot;: &quot;/root/web&quot;,</span></span>
<span class="line"><span>                &quot;Destination&quot;: &quot;/usr/share/nginx/html&quot;,</span></span>
<span class="line"><span>                &quot;Mode&quot;: &quot;&quot;,</span></span>
<span class="line"><span>                &quot;RW&quot;: true,</span></span>
<span class="line"><span>                &quot;Propagation&quot;: &quot;rprivate&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ],</span></span></code></pre></div><p>只读目录挂载<br><code>docker run --name dirbind -d -p 80:80 --mount type=bind,source=/root/web,target=/usr/share/nginx/html,readonly nginx</code></p><h3 id="挂载单个文件" tabindex="-1"><a class="header-anchor" href="#挂载单个文件"><span>挂载单个文件</span></a></h3><p><code>docker run --name bindfile -d -p 80:80 \\ --mount type=bind,source=/root/web,target=/usr/share/nginx/html \\ --mount type=bind,source=/root/a.html,target=/usr/share/nginx/html/index.html nginx</code><br> 第二个<code>--mount</code>是挂载单个文件,其会覆盖挂载的第一个目录下的index文件.</p><ul><li>单个文件的挂载要求容器内必须也存在此文件</li></ul><h2 id="docker网络" tabindex="-1"><a class="header-anchor" href="#docker网络"><span>docker网络</span></a></h2><p>docker 网络分为 外部访问和容器互联两种情况</p><h3 id="外部访问" tabindex="-1"><a class="header-anchor" href="#外部访问"><span>外部访问</span></a></h3><p>这个已经并不陌生了就是在<code>docker run</code>的时候加上<code>-p</code>参数即可指定本地端口和容器端口<br> 一个指定端口上只可以绑定一个容器<br> 格式有<code> ip:hostPort:containerPort | ip::containerPort | hostPort:containerPort</code><br> 还可以指定端口格式(tcp或udp)<code>127.0.0.1:1111:1111/udp</code></p><ul><li>注意:若需多个端口绑定,重复只用<code>-p</code> 即可</li></ul><p><code>docker port container_id</code> 可查看容器端口映射情况</p><p>使用<code>-P</code> 大写的P默认会自动分配端口进行映射.</p><h3 id="容器互联" tabindex="-1"><a class="header-anchor" href="#容器互联"><span>容器互联</span></a></h3><p><strong>新建网络</strong><br><code>docker network create -d bridge web-net</code> 新建一个<code>web-net</code>的网络<br><code>-d</code> 参数指定 Docker 网络类型，有 <code>bridge</code> <code>overlay</code>。其中 <code>overlay</code> 网络类型用于 <code>Swarm mode</code></p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>[root@docker ~]# docker network create -d bridge web-net</span></span>
<span class="line"><span>3a06ef1bde3ea75c16afe1d3024d1a161d33c3c9499646521f30a74992607407</span></span>
<span class="line"><span>[root@docker ~]# docker network inspect web-net</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &quot;Name&quot;: &quot;web-net&quot;,</span></span>
<span class="line"><span>        &quot;Id&quot;: &quot;3a06ef1bde3ea75c16afe1d3024d1a161d33c3c9499646521f30a74992607407&quot;,</span></span>
<span class="line"><span>        &quot;Created&quot;: &quot;2018-04-15T14:08:13.044203584+08:00&quot;,</span></span>
<span class="line"><span>        &quot;Scope&quot;: &quot;local&quot;,</span></span>
<span class="line"><span>        &quot;Driver&quot;: &quot;bridge&quot;,</span></span>
<span class="line"><span>        &quot;EnableIPv6&quot;: false,</span></span>
<span class="line"><span>        &quot;IPAM&quot;: {</span></span>
<span class="line"><span>            &quot;Driver&quot;: &quot;default&quot;,</span></span>
<span class="line"><span>            &quot;Options&quot;: {},</span></span>
<span class="line"><span>            &quot;Config&quot;: [</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    &quot;Subnet&quot;: &quot;172.18.0.0/16&quot;,</span></span>
<span class="line"><span>                    &quot;Gateway&quot;: &quot;172.18.0.1&quot;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;Internal&quot;: false,</span></span>
<span class="line"><span>        &quot;Attachable&quot;: false,</span></span>
<span class="line"><span>        &quot;Ingress&quot;: false,</span></span>
<span class="line"><span>        &quot;ConfigFrom&quot;: {</span></span>
<span class="line"><span>            &quot;Network&quot;: &quot;&quot;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;ConfigOnly&quot;: false,</span></span>
<span class="line"><span>        &quot;Containers&quot;: {},</span></span>
<span class="line"><span>        &quot;Options&quot;: {},</span></span>
<span class="line"><span>        &quot;Labels&quot;: {}</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>]</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>容器关联网络</strong><br> 通过<code>--network</code> 参数指定容器网络<br><code>docker run --name web1 -d -P --network web-net nginx</code><br><code>docker run --name web2 -d -P --network web-net nginx</code></p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>[root@docker ~]# docker network inspect web-net</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &quot;Name&quot;: &quot;web-net&quot;,</span></span>
<span class="line"><span>        &quot;Id&quot;: &quot;3a06ef1bde3ea75c16afe1d3024d1a161d33c3c9499646521f30a74992607407&quot;,</span></span>
<span class="line"><span>        &quot;Created&quot;: &quot;2018-04-15T14:08:13.044203584+08:00&quot;,</span></span>
<span class="line"><span>        &quot;Scope&quot;: &quot;local&quot;,</span></span>
<span class="line"><span>        &quot;Driver&quot;: &quot;bridge&quot;,</span></span>
<span class="line"><span>        &quot;EnableIPv6&quot;: false,</span></span>
<span class="line"><span>        &quot;IPAM&quot;: {</span></span>
<span class="line"><span>            &quot;Driver&quot;: &quot;default&quot;,</span></span>
<span class="line"><span>            &quot;Options&quot;: {},</span></span>
<span class="line"><span>            &quot;Config&quot;: [</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    &quot;Subnet&quot;: &quot;172.18.0.0/16&quot;,</span></span>
<span class="line"><span>                    &quot;Gateway&quot;: &quot;172.18.0.1&quot;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;Internal&quot;: false,</span></span>
<span class="line"><span>        &quot;Attachable&quot;: false,</span></span>
<span class="line"><span>        &quot;Ingress&quot;: false,</span></span>
<span class="line"><span>        &quot;ConfigFrom&quot;: {</span></span>
<span class="line"><span>            &quot;Network&quot;: &quot;&quot;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;ConfigOnly&quot;: false,</span></span>
<span class="line"><span>        &quot;Containers&quot;: {</span></span>
<span class="line"><span>            &quot;21250caa4838de429eeda541aab9d4e6e0697a4b9038d9656e0ee318db9f2636&quot;: {</span></span>
<span class="line"><span>                &quot;Name&quot;: &quot;web2&quot;,</span></span>
<span class="line"><span>                &quot;EndpointID&quot;: &quot;46cac28abeef408daa1351bd2c376376928c82c1bb2836cb729adcd7379022ce&quot;,</span></span>
<span class="line"><span>                &quot;MacAddress&quot;: &quot;02:42:ac:12:00:02&quot;,</span></span>
<span class="line"><span>                &quot;IPv4Address&quot;: &quot;172.18.0.2/16&quot;,</span></span>
<span class="line"><span>                &quot;IPv6Address&quot;: &quot;&quot;</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            &quot;aca3aa6558188c41a2ab1f79993d845d6cea392fcc8c61d8acc0bc9864550834&quot;: {</span></span>
<span class="line"><span>                &quot;Name&quot;: &quot;web1&quot;,</span></span>
<span class="line"><span>                &quot;EndpointID&quot;: &quot;26e27856326d3bc04f29ecaf083dab789c80b0f64ce7c09159df31e896052ca6&quot;,</span></span>
<span class="line"><span>                &quot;MacAddress&quot;: &quot;02:42:ac:12:00:03&quot;,</span></span>
<span class="line"><span>                &quot;IPv4Address&quot;: &quot;172.18.0.3/16&quot;,</span></span>
<span class="line"><span>                &quot;IPv6Address&quot;: &quot;&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;Options&quot;: {},</span></span>
<span class="line"><span>        &quot;Labels&quot;: {}</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>]</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入容器中<code>docker exec -it /bin/bash</code><br> ubuntu容器没有ping则安装</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>apt-get update</span></span>
<span class="line"><span>apt install net-tools       # ifconfig</span></span>
<span class="line"><span>apt install iputils-ping     # ping</span></span></code></pre></div><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>root@0b8f77731024:~# ping web2</span></span>
<span class="line"><span>PING net2 (172.18.0.2) 56(84) bytes of data.</span></span>
<span class="line"><span>64 bytes from web2.web-net (172.18.0.2): icmp_seq=1 ttl=64 time=0.085 ms</span></span>
<span class="line"><span>64 bytes from web2.web-net (172.18.0.2): icmp_seq=2 ttl=64 time=0.043 ms</span></span></code></pre></div><p>如果有过个容器要互联,如果你有多个容器之间需要互相连接，<code>Docker Compose</code>了解一下.</p><h3 id="dns" tabindex="-1"><a class="header-anchor" href="#dns"><span>DNS</span></a></h3><p>进入容器中执行<code>mount</code></p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>root@0b8f77731024:~# mount</span></span>
<span class="line"><span>/dev/mapper/centos-root on /etc/resolv.conf type xfs (rw,relatime,attr2,inode64,noquota)</span></span>
<span class="line"><span>/dev/mapper/centos-root on /etc/hostname type xfs (rw,relatime,attr2,inode64,noquota)</span></span>
<span class="line"><span>/dev/mapper/centos-root on /etc/hosts type xfs (rw,relatime,attr2,inode64,noquota)</span></span></code></pre></div><p>可以看到,dns,主机名,hosts文件是被挂载上去的,这样只要宿主机有变更,那么容器就能立即得到更新.<br> 同理,如果有需要可单独见文件进行挂载,并指向容器内相关文件.</p><p><strong>还有一种方式</strong> 通过<code>/etc/docker/daemon.json</code>来配置,这样影响所有容器</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;dns&quot; : [</span></span>
<span class="line"><span>    &quot;114.114.114.114&quot;,</span></span>
<span class="line"><span>    &quot;8.8.8.8&quot;</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果想要手动指定的话.在<code>docker run</code>的时候可以添加参数<br><code>-h HOSTNAME </code>或者 <code>--hostname=HOSTNAME </code>设定容器的主机名,但它在容器外部看不到，既不会在 docker container ls 中显示，也不会在其他的容器的 /etc/hosts 看到。<br><code>--dns=IP_ADDRESS</code> 添加 DNS 服务器到容器的<code> /etc/resolv.conf</code> 中，让容器用这个服务器来解析所有不在 /etc/hosts 中的主机名。<br><code>--dns-search=DOMAIN </code>设定容器的搜索域，当设定搜索域为 <code>.example.com </code>时，在搜索一个名为 host 的主机时，DNS 不仅搜索 host，还会搜索 <code>host.example.com</code></p><h3 id="高级网络配置" tabindex="-1"><a class="header-anchor" href="#高级网络配置"><span>高级网络配置</span></a></h3><p><a href="https://yeasy.gitbooks.io/docker_practice/content/advanced_network/" target="_blank" rel="noopener noreferrer">略，参考链接</a></p><h2 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose"><span>Docker Compose</span></a></h2><p>Docker Compose 是 Docker 官方编排（Orchestration）项目之一，负责快速的部署分布式应用</p><p>我们知道通过Dockerfile可以实现单独的一个应用容器.<br> 实际,一个项目可能需要多个容器相互配合来完成.比如一个动态网站,除了页面还有数据库等等.</p><p>compose两个重要的概念:<br> - 服务(service) : 一个应用容器，实际上可以包括若干运行相同镜像的容器实例<br> - 项目(project) :　一组关联容器组成的完整业务单元</p><h3 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1"><span>安装</span></a></h3><p>二进制安装</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>sudo curl -L https://github.com/docker/compose/releases/download/1.17.1/docker-compose-\`uname -s\`-\`uname -m\` &gt; /usr/local/bin/docker-compose</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sudo chmod +x /usr/local/bin/docker-compose</span></span></code></pre></div><p>pip安装<br><code>sudo pip install -U docker-compose</code></p><p>容器中执行</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>curl -L https://github.com/docker/compose/releases/download/1.8.0/run.sh &gt; /usr/local/bin/docker-compose</span></span>
<span class="line"><span></span></span>
<span class="line"><span>chmod +x /usr/local/bin/docker-compose</span></span></code></pre></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>├── docker_compose</span></span>
<span class="line"><span>│   ├── app.py</span></span>
<span class="line"><span>│   ├── docker-compose.yml</span></span>
<span class="line"><span>│   └── Dockerfile</span></span></code></pre></div><p><code>app.py</code></p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>from flask import Flask</span></span>
<span class="line"><span>from redis import Redis</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app = Flask(__name__)</span></span>
<span class="line"><span>redis = Redis(host=&#39;redis&#39;, port=6379)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@app.route(&#39;/&#39;)</span></span>
<span class="line"><span>def hello():</span></span>
<span class="line"><span>    count = redis.incr(&#39;hits&#39;)</span></span>
<span class="line"><span>    return &#39;Hello World! 该页面已被访问 {} 次。\\n&#39;.format(count)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &quot;__main__&quot;:</span></span>
<span class="line"><span>    app.run(host=&quot;0.0.0.0&quot;, debug=True)</span></span></code></pre></div><p><code>Dockerfile</code></p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>FROM python:3.6-alpine</span></span>
<span class="line"><span>ADD . /code</span></span>
<span class="line"><span>WORKDIR /code</span></span>
<span class="line"><span>RUN pip install redis flask</span></span>
<span class="line"><span>CMD [&quot;python&quot;, &quot;app.py&quot;]</span></span></code></pre></div><p><code>docker-compose.yml</code></p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>version: &#39;3&#39;</span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  web:</span></span>
<span class="line"><span>    build: .</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>     - &quot;5000:5000&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  redis:</span></span>
<span class="line"><span>    image: &quot;redis:alpine&quot;</span></span></code></pre></div><p>然后执行<code>docker-compose up</code> 即可</p><h3 id="命令参数说明" tabindex="-1"><a class="header-anchor" href="#命令参数说明"><span>命令参数说明</span></a></h3><p>docker-compose</p><pre><code>- \`-f, --file FILE\` 指定使用的 Compose 模板文件，默认为 \`docker-compose.yml\`，可以多次指定。
- \`-p, --project-name NAME\` 指定项目名称，默认将使用所在目录名称作为项目名。
- \`--x-networking\` 使用 Docker 的可拔插网络后端特性
- \`--x-network-driver DRIVER\` 指定网络后端的驱动，默认为 bridge
- \`--verbose\` 输出更多调试信息
- \`-v, --version\` 打印版本并退出
</code></pre><p>docker-compose <code>build</code><br> 用来创建或重新创建服务使用的镜像<br> docker-compose build service_a<br> 创建一个镜像名叫service_a</p><p>docker-compose <code>kill</code><br> 用于通过容器发送SIGKILL信号强行停止服务</p><p>docker-compose <code>logs</code><br> 显示service的日志信息</p><p>docker-compose pause/unpause<br> docker-compose pause #暂停服务<br> docker-compose unpause #恢复被暂停的服务</p><p>docker-compose <code>port</code><br> 用于查看服务中的端口与物理机的映射关系<br> docker-compose port nginx_web 80<br> 查看服务中80端口映射到物理机上的那个端口</p><p>dokcer-compose <code>ps</code><br> 用于显示当前项目下的容器<br> 注意，此命令与docker ps不同作用，此命令会显示停止后的容器（状态为Exited），只征对某个项目。</p><p>docker-compose <code>pull</code><br> 用于拉取服务依赖的镜像</p><p>docker-compose <code>restart</code><br> 用于重启某个服务中的所有容器<br> docker-compose restart service_name<br> 只有正在运行的服务可以使用重启命令，停止的服务是不可以重启</p><p>docker-compose <code>rm</code><br> 删除停止的服务（服务里的容器）</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>-f #强制删除</span></span>
<span class="line"><span>-v #删除与容器相关的卷（volumes）</span></span></code></pre></div><p>docker-compose <code>run</code><br> 用于在服务中运行一个一次性的命令。这个命令会新建一个容器，它的配置和srvice的配置相同。<br> 但两者之间还是有两点不同之处</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>1、run指定的命令会直接覆盖掉service配置中指定的命令</span></span>
<span class="line"><span>2、run命令启动的容器不会创建在service配置中指定的端口，如果需要指定使用--service-ports指定</span></span></code></pre></div><p>docker-compose start/stop<br> docker-compose start 启动运行某个服务的所有容器<br> docker-compose stop 启动运行某个服务的所有容器</p><p>docker-compose scale<br> 指定某个服务启动的容器个数</p><h3 id="实例一" tabindex="-1"><a class="header-anchor" href="#实例一"><span>实例一</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>[root@docker web-nginx]# tree</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>├── docker-compose.yml</span></span>
<span class="line"><span>├── nginx</span></span>
<span class="line"><span>│   └── nginx.conf</span></span>
<span class="line"><span>└── webserver</span></span>
<span class="line"><span>    └── index.html</span></span></code></pre></div><p><code>nginx.conf</code></p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>#user  nginx;</span></span>
<span class="line"><span>worker_processes  1;</span></span>
<span class="line"><span>error_log  /var/log/nginx_error.log warn;</span></span>
<span class="line"><span>pid        /var/run/nginx.pid;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>events {</span></span>
<span class="line"><span>    worker_connections  1024;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>    include       mime.types;</span></span>
<span class="line"><span>    default_type  application/octet-stream;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span>                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span>                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    access_log  /var/log/nginx_access.log  main;</span></span>
<span class="line"><span>    client_max_body_size 10m;  </span></span>
<span class="line"><span>    sendfile        on;</span></span>
<span class="line"><span>    #tcp_nopush     on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    keepalive_timeout  65;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #gzip  on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen       80;</span></span>
<span class="line"><span>    server_name  localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        root   /webserver;</span></span>
<span class="line"><span>        index  index.html index.htm;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>    #include /usr/local/nginx/conf.d/*.conf;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>index.html</code></p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;welcome to nginx web stie&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>   &lt;h2&gt;compose test1---1&lt;/h2&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p><code>docker-compose.yml</code></p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>version: &quot;3&quot; #指定语法版本</span></span>
<span class="line"><span>services: #定义服务</span></span>
<span class="line"><span>  nginx:</span></span>
<span class="line"><span>    container_name: web-nginx #容器名字</span></span>
<span class="line"><span>    image: centos_nginx:v5 #依赖镜像</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    ports:  #端口映射</span></span>
<span class="line"><span>      - 80:80</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      #映射文件到容器.第一个是web的,在nginx通过root指定路径.第二个是配置文件.</span></span>
<span class="line"><span>      #如果不想指定web,可直接映射到nginx默认html路径.nginx配置不需要指定路径了</span></span>
<span class="line"><span>      #- ./webserver:/usr/local/nginx/html</span></span>
<span class="line"><span>      - ./webserver:/webserver</span></span>
<span class="line"><span>      - ./nginx/nginx.conf:/usr/local/nginx/conf/nginx.conf</span></span></code></pre></div><h3 id="实例二" tabindex="-1"><a class="header-anchor" href="#实例二"><span>实例二</span></a></h3><p>创建自定义网络test<code>docker network create --subnet=172.88.0.0/16 test</code><br> 网络名test和ip会在docker-compose中使用,用来指定网络和IP,同时IP与nginx负载有关</p><h4 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构"><span>目录结构</span></a></h4><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>├── docker-compose.yml</span></span>
<span class="line"><span>├── etc</span></span>
<span class="line"><span>│   └── localtime</span></span>
<span class="line"><span>├── nginx</span></span>
<span class="line"><span>│   ├── Dockerfile</span></span>
<span class="line"><span>│   ├── nginx-1.12.2.tar.gz</span></span>
<span class="line"><span>│   └── nginx.conf</span></span>
<span class="line"><span>├── tomcat</span></span>
<span class="line"><span>│   ├── apache-tomcat-8.5.24.tar.gz</span></span>
<span class="line"><span>│   ├── Dockerfile</span></span>
<span class="line"><span>│   └── jdk-8u45-linux-x64.tar.gz</span></span>
<span class="line"><span>└── webserver</span></span>
<span class="line"><span>    ├── tomcatA</span></span>
<span class="line"><span>    │   └── index.jsp</span></span>
<span class="line"><span>    └── tomcatB</span></span>
<span class="line"><span>        └── index.jsp</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>nginx</span></a></h4><p><code>nginx.conf</code></p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>#user  nginx;</span></span>
<span class="line"><span>worker_processes  1;</span></span>
<span class="line"><span>error_log  /var/log/nginx_error.log warn;</span></span>
<span class="line"><span>pid        /var/run/nginx.pid;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>events {</span></span>
<span class="line"><span>    worker_connections  1024;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>    upstream tomcat  { </span></span>
<span class="line"><span>      server 172.88.0.11:8080; </span></span>
<span class="line"><span>      server 172.88.0.22:8080; </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    include       mime.types;</span></span>
<span class="line"><span>    default_type  application/octet-stream;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span>                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span>                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    access_log  /var/log/nginx_access.log  main;</span></span>
<span class="line"><span>    client_max_body_size 10m;  </span></span>
<span class="line"><span>    sendfile        on;</span></span>
<span class="line"><span>    #tcp_nopush     on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    keepalive_timeout  65;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #gzip  on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen       80;</span></span>
<span class="line"><span>        server_name  tomcat;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            #root   /webserver;</span></span>
<span class="line"><span>            proxy_pass http://tomcat;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    #include /usr/local/nginx/conf.d/*.conf;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Dcokerfile</code></p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>FROM centos</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MAINTAINER zili.li</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ADD nginx-1.12.2.tar.gz /usr/local/src</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RUN buildDeps=&#39;gcc gcc-c++ glib make autoconf openssl openssl-devel libxslt-devel gd gd-devel GeoIP GeoIP-devel pcre pcre-devel wget curl&#39; \\ </span></span>
<span class="line"><span>                &amp;&amp; yum -y install $buildDeps \\</span></span>
<span class="line"><span>                &amp;&amp; useradd -M -s /sbin/nologin nginx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>VOLUME [&quot;/usr/local/nginx/html&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>WORKDIR /usr/local/src/nginx-1.12.2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RUN ./configure --user=nginx --group=nginx --prefix=/usr/local/nginx --with-file-aio --with-http_ssl_module --with-http_realip_module --with-http_addition_module --with-http_xslt_module --with-http_image_filter_module --with-http_geoip_module --with-http_sub_module --with-http_dav_module --with-http_flv_module --with-http_mp4_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_auth_request_module --with-http_random_index_module --with-http_secure_link_module --with-http_degradation_module --with-http_stub_status_module \\</span></span>
<span class="line"><span>                &amp;&amp; make \\</span></span>
<span class="line"><span>                &amp;&amp; make install \\</span></span>
<span class="line"><span>                &amp;&amp; rm -rf /usr/local/src/nginx-1.12.2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ENV PATH /usr/local/nginx/sbin:$PATH                </span></span>
<span class="line"><span></span></span>
<span class="line"><span>EXPOSE 80</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ENTRYPOINT [&quot;nginx&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CMD [&quot;-g&quot;,&quot;daemon off;&quot;]</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tomcat" tabindex="-1"><a class="header-anchor" href="#tomcat"><span>tomcat</span></a></h4><p><code>Dcokerfile</code></p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>FROM centos</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ADD jdk-8u45-linux-x64.tar.gz /usr/local</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ENV RUN_AS_USER=root</span></span>
<span class="line"><span>ENV JAVA_HOME /usr/local/jdk1.8.0_45</span></span>
<span class="line"><span>ENV CLASS_HOME=/usr/local/jdk1.8.0_45/lib:$JAVA_HOME/jre/lib</span></span>
<span class="line"><span>ENV CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib:$CLASSPATH</span></span>
<span class="line"><span>ENV PATH=$PATH:$JAVA_HOME/bin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ADD apache-tomcat-8.5.24.tar.gz /usr/local</span></span>
<span class="line"><span></span></span>
<span class="line"><span>EXPOSE 8080</span></span>
<span class="line"><span>ENTRYPOINT [&quot;/usr/local/apache-tomcat-8.5.24/bin/catalina.sh&quot;, &quot;run&quot;]</span></span></code></pre></div><h4 id="docker-compose-1" tabindex="-1"><a class="header-anchor" href="#docker-compose-1"><span>docker-compose</span></a></h4><p><code>docker-compose.yml</code></p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>version: &quot;3&quot;</span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>  nginx:</span></span>
<span class="line"><span>    hostname: nginx</span></span>
<span class="line"><span>    build: ./nginx</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - 80:80</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      test:</span></span>
<span class="line"><span>        ipv4_address: 172.88.0.88</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - ./nginx/nginx.conf:/usr/local/nginx/conf/nginx.conf</span></span>
<span class="line"><span>      - ./etc/localtime:/etc/localtime</span></span>
<span class="line"><span>    depends_on:</span></span>
<span class="line"><span>      - tomcat1</span></span>
<span class="line"><span>      - tomcat2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  tomcat1:</span></span>
<span class="line"><span>    hostname: tomcat1</span></span>
<span class="line"><span>    build: ./tomcat</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - ./webserver/tomcatA:/usr/local/apache-tomcat-8.5.24/webapps/ROOT</span></span>
<span class="line"><span>      - ./etc/localtime:/etc/localtime</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      test:</span></span>
<span class="line"><span>        ipv4_address: 172.88.0.11</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  tomcat2:</span></span>
<span class="line"><span>    hostname: tomcat2</span></span>
<span class="line"><span>    build: ./tomcat</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - ./webserver/tomcatB/index.jsp:/usr/local/apache-tomcat-8.5.24/webapps/ROOT/index.jsp</span></span>
<span class="line"><span>      - ./etc/localtime:/etc/localtime</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      test:</span></span>
<span class="line"><span>        ipv4_address: 172.88.0.22</span></span>
<span class="line"><span></span></span>
<span class="line"><span>networks:</span></span>
<span class="line"><span>  test:</span></span>
<span class="line"><span>    external: true</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>docker-compose up</code></p><h2 id="docker-machine" tabindex="-1"><a class="header-anchor" href="#docker-machine"><span>docker machine</span></a></h2><h3 id="安装-2" tabindex="-1"><a class="header-anchor" href="#安装-2"><span>安装</span></a></h3><ul><li>linux<br><a href="https://github.com/docker/machine/releases" target="_blank" rel="noopener noreferrer">官网</a>下载相关安装包,安装即可 .</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>$ sudo curl -L https://github.com/docker/machine/releases/download/v0.13.0/docker-machine-\`uname -s\`-\`uname -m\` &gt; /usr/local/bin/docker-machine</span></span>
<span class="line"><span>$ sudo chmod +x /usr/local/bin/docker-machine</span></span></code></pre></div><h3 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1"><span>使用</span></a></h3><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>docker-machine create \\</span></span>
<span class="line"><span>    --driver vmwarevsphere \\</span></span>
<span class="line"><span>    --vmwarevsphere-vcenter=xxx.xxx.xxx.xxx \\</span></span>
<span class="line"><span>    --vmwarevsphere-username=xxxxx \\</span></span>
<span class="line"><span>    --vmwarevsphere-password=xxxxxxx \\</span></span>
<span class="line"><span>    --vmwarevsphere-cpu-count=1 \\</span></span>
<span class="line"><span>    --vmwarevsphere-memory-size=512 \\</span></span>
<span class="line"><span>    --vmwarevsphere-disk-size=10240 \\</span></span>
<span class="line"><span>    TestDcokerMa</span></span></code></pre></div><p><code>driver vmwarevsphere</code><br> 我们的虚拟机 host 上安装的是 vmware 的产品 vSphere，因此需要给 Docker Machine 提供对应的驱动，这样才能够在上面安装新的虚拟机。<br><code>--vmwarevsphere-vcenter=xxx.xxx.xxx.xxx</code><br><code>--vmwarevsphere-username=root </code><br><code>--vmwarevsphere-password=12345678</code><br> 上面三行分别指定了虚拟机 host 的 IP 地址、用户名和密码。</p><p><code>--vmwarevsphere-cpu-count=1</code><br><code>--vmwarevsphere-memory-size=512</code><br><code>--vmwarevsphere-disk-size=10240</code><br> 上面三行则分别指定了新创建的虚拟机占用的 cpu、内存和磁盘资源。<br><code>TestDcokerMa</code><br> 最后一个参数则是新建虚拟机的名称。</p><p><a href="https://docs.docker.com/machine/" target="_blank" rel="noopener noreferrer">详细使用参考官网</a><br> ​</p>`,264),l=[i];function o(c,d){return a(),n("div",null,l)}const t=s(p,[["render",o],["__file","Docker学习.html.vue"]]),u=JSON.parse(`{"path":"/ops/linux/Docker%E5%AD%A6%E4%B9%A0.html","title":"Docker","lang":"zh-CN","frontmatter":{"article":true,"title":"Docker","order":33,"category":["linux","docker"],"tag":["docker"],"index":true,"description":"请注意 本文内容可能已过时，请自行甄别。 Docker三个基本概念 镜像（image） 容器（container） 仓库（rrepository) 安装 不同系统安装方式不同，详见 以centos为例(仅支持64位kernel >=3.10)建议使用国内源 卸载原有版本 yum remove docker docker-common docker-se...","head":[["meta",{"property":"og:url","content":"https://docs.lizili.online/ops/linux/Docker%E5%AD%A6%E4%B9%A0.html"}],["meta",{"property":"og:site_name","content":"lzz's Blog"}],["meta",{"property":"og:title","content":"Docker"}],["meta",{"property":"og:description","content":"请注意 本文内容可能已过时，请自行甄别。 Docker三个基本概念 镜像（image） 容器（container） 仓库（rrepository) 安装 不同系统安装方式不同，详见 以centos为例(仅支持64位kernel >=3.10)建议使用国内源 卸载原有版本 yum remove docker docker-common docker-se..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-23T05:06:11.000Z"}],["meta",{"property":"article:author","content":"z"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:modified_time","content":"2024-04-23T05:06:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-23T05:06:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"z\\",\\"url\\":\\"https://docs.lizili.online\\"}]}"]]},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"创建用户组","slug":"创建用户组","link":"#创建用户组","children":[]},{"level":2,"title":"镜像加速","slug":"镜像加速","link":"#镜像加速","children":[]},{"level":2,"title":"image","slug":"image","link":"#image","children":[{"level":3,"title":"构建镜像","slug":"构建镜像","link":"#构建镜像","children":[]},{"level":3,"title":"Dockerfile","slug":"dockerfile","link":"#dockerfile","children":[]},{"level":3,"title":"Dockerfile其他指令","slug":"dockerfile其他指令","link":"#dockerfile其他指令","children":[]},{"level":3,"title":"Dockerfile文件解析","slug":"dockerfile文件解析","link":"#dockerfile文件解析","children":[]}]},{"level":2,"title":"container","slug":"container","link":"#container","children":[{"level":3,"title":"新建容器","slug":"新建容器","link":"#新建容器","children":[]},{"level":3,"title":"启动容器","slug":"启动容器","link":"#启动容器","children":[]},{"level":3,"title":"容器后台运行","slug":"容器后台运行","link":"#容器后台运行","children":[]},{"level":3,"title":"进入容器","slug":"进入容器","link":"#进入容器","children":[]},{"level":3,"title":"导入和导出","slug":"导入和导出","link":"#导入和导出","children":[]},{"level":3,"title":"删除容器","slug":"删除容器","link":"#删除容器","children":[]},{"level":3,"title":"其他命令","slug":"其他命令","link":"#其他命令","children":[]}]},{"level":2,"title":"Repository","slug":"repository","link":"#repository","children":[{"level":3,"title":"私有仓库","slug":"私有仓库","link":"#私有仓库","children":[]}]},{"level":2,"title":"数据管理","slug":"数据管理","link":"#数据管理","children":[{"level":3,"title":"数据卷(Volumes)","slug":"数据卷-volumes","link":"#数据卷-volumes","children":[]},{"level":3,"title":"创建/删除volume","slug":"创建-删除volume","link":"#创建-删除volume","children":[]},{"level":3,"title":"启动挂载数据卷的容器","slug":"启动挂载数据卷的容器","link":"#启动挂载数据卷的容器","children":[]},{"level":3,"title":"挂载目录(Bind mounts)","slug":"挂载目录-bind-mounts","link":"#挂载目录-bind-mounts","children":[]},{"level":3,"title":"挂载单个文件","slug":"挂载单个文件","link":"#挂载单个文件","children":[]}]},{"level":2,"title":"docker网络","slug":"docker网络","link":"#docker网络","children":[{"level":3,"title":"外部访问","slug":"外部访问","link":"#外部访问","children":[]},{"level":3,"title":"容器互联","slug":"容器互联","link":"#容器互联","children":[]},{"level":3,"title":"DNS","slug":"dns","link":"#dns","children":[]},{"level":3,"title":"高级网络配置","slug":"高级网络配置","link":"#高级网络配置","children":[]}]},{"level":2,"title":"Docker Compose","slug":"docker-compose","link":"#docker-compose","children":[{"level":3,"title":"安装","slug":"安装-1","link":"#安装-1","children":[]},{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":3,"title":"命令参数说明","slug":"命令参数说明","link":"#命令参数说明","children":[]},{"level":3,"title":"实例一","slug":"实例一","link":"#实例一","children":[]},{"level":3,"title":"实例二","slug":"实例二","link":"#实例二","children":[]}]},{"level":2,"title":"docker machine","slug":"docker-machine","link":"#docker-machine","children":[{"level":3,"title":"安装","slug":"安装-2","link":"#安装-2","children":[]},{"level":3,"title":"使用","slug":"使用-1","link":"#使用-1","children":[]}]}],"git":{"createdTime":1689953524000,"updatedTime":1713848771000,"contributors":[{"name":"lizili","email":"cn.zili.lee@outlook.com","commits":3}]},"readingTime":{"minutes":25.49,"words":7648},"filePathRelative":"ops/linux/Docker学习.md","localizedDate":"2023年7月21日","excerpt":"\\n<div class=\\"hint-container caution\\">\\n<p class=\\"hint-container-title\\">请注意</p>\\n<p>本文内容可能已过时，请自行甄别。</p>\\n</div>\\n<p>Docker三个基本概念</p>\\n<ul>\\n<li>镜像（image）</li>\\n<li>容器（container）</li>\\n<li>仓库（rrepository)</li>\\n</ul>\\n<h2>安装</h2>\\n<p>不同系统安装方式不同，<a href=\\"https://github.com/yeasy/docker_practice/blob/master/install/README.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">详见</a><br>\\n以<code>centos</code>为例(仅支持64位kernel &gt;=3.10)建议使用国内源</p>","autoDesc":true}`);export{t as comp,u as data};
