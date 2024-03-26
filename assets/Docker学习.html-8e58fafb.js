import{_ as a,X as o,Y as r,a0 as e,a1 as n,a2 as d,$ as s,F as l}from"./framework-7663974c.js";const c={},t=s('<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><div class="hint-container danger"><p class="hint-container-title">请注意</p><p>写于2017年左右年，用于个人学习过程记录。</p></div><p>Docker三个基本概念</p><ul><li>镜像（image）</li><li>容器（container）</li><li>仓库（rrepository)</li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>',5),u={href:"https://github.com/yeasy/docker_practice/blob/master/install/README.md",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"centos",-1),m=s(`<p><strong>卸载原有版本</strong></p><p><code>yum remove docker docker-common docker-selinux docker-engine</code></p><p>yum-util 提供yum-config-manager功能，另外两个是devicemapper驱动依赖</p><p><code>yum install -y yum-utils device-mapper-persistent-data lvm2</code></p><p><strong>添加yum源</strong></p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code># 阿里源
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

#中科大
sudo yum-config-manager --add-repo https://mirrors.ustc.edu.cn/docker-ce/linux/centos/docker-ce.repo

# 官方源
# sudo yum-config-manager  --add-repo https://download.docker.com/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看版本 <code> yum list docker-ce --showduplicates | sort -r</code></p><p>可选择版本进行安装。默认仓库只开放稳定版</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> docker-ce <span class="token comment">#默认安装最新稳定版</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> docker-ce-17.12.0.ce <span class="token comment">#安装指定版本</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>启动并开机启动，<code>docker version</code> 即可查看版本</p><h2 id="创建用户组" tabindex="-1"><a class="header-anchor" href="#创建用户组" aria-hidden="true">#</a> 创建用户组</h2><p>为了安全起见，docker只允许root和docker用户组的用户进行访问</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">groupadd</span> <span class="token function">docker</span>
<span class="token function">usermod</span> <span class="token parameter variable">-G</span> <span class="token function">docker</span> username
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="镜像加速" tabindex="-1"><a class="header-anchor" href="#镜像加速" aria-hidden="true">#</a> 镜像加速</h2><p>若文件不存在,则手动创建</p><p><code>vim /etc/docker/daemon.json</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#docker国内镜像加速应该是挂了</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;registry-mirrors&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://registry.docker-cn.com&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">#阿里云镜像加速</span>
登陆<span class="token punctuation">[</span>阿里云<span class="token punctuation">]</span><span class="token punctuation">(</span>https://cr.console.aliyun.com<span class="token punctuation">)</span>,获取专属加速地址
类似 https://xxxx.mirror.aliyuncs.com 替换上面的地址

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>systemctl daemon-reload</p><p>systemctl restart docker</p><h2 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> image</h2><p>获取镜像 <code>docker pull [选项] [ 仓库地址] 仓库名/标签</code> 默认从<code>docker hub</code> 中拉取</p><p>例如 ： docker pull centos #默认就是从docker hub下载最新的</p><p>如果需要下载制定tag的，可去官网查询</p><p><code>docker search xxxx</code> 不显示tag</p><p><code>docker pull centos:7.4.1708</code> 下载指定版本</p><p><code>docker images -a </code> 列出镜像 (显示包括中间层镜像)</p><p>中间层镜像：是其他镜像所依赖的镜像，不能删除，否则会导致上层镜像因为依赖丢失报错，事实上也无需删除，相同的层只会存储一遍。</p><p><code>docker system df</code> 查看镜像,容器,数据卷占用空间</p><p><code>docker images -f since(或before)=image name</code> 列出某个image之前(之后)的镜像</p><p><code>docker image prune</code>删除虚悬镜像(dangling)</p><p>虚悬镜像：也就是新旧镜像重名而导致的，pull和build都可能会出现这种情况，<code>docker image ls -f dangling=true</code>可 查看，虚悬镜像都是无价值的，可删除</p><p><code>docker rmi $(docker images -q -f dangling=true)</code> 批量删除dangling</p><p><code>docker run --name webserver -d -p 80:80 nginx</code> 以nginx镜像为基础，运行容器，也就是新建个容器</p><h3 id="构建镜像" tabindex="-1"><a class="header-anchor" href="#构建镜像" aria-hidden="true">#</a> 构建镜像</h3><h3 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> Dockerfile</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$   <span class="token function">mkdir</span>   mynginx
$   <span class="token builtin class-name">cd</span>  mynginx
$   <span class="token function">touch</span>   Dockerfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cat Dockerfile</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM nginx
RUN <span class="token builtin class-name">echo</span> <span class="token string">&#39;&lt;h1&gt;Dockerfile&lt;/h1&gt;&#39;</span> <span class="token operator">&gt;</span>    <span class="token operator">&gt;</span> /usr/share/nginx/html/index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>FROM image</code></p><p>必写,定制镜像也是以镜像为基础的.这里就是选定一个基础镜像,可以以相关服务镜像为基础(nginx,mysql等),也可是是系统(ubuntu,centos等).</p><p>另外,docker还提供<code>FROM scratch</code> 意味不以任何镜像为基础.</p><p><code>RUN</code></p><p>shell格式 : 用来执行命令行命令.</p><p>exec格式: <code>RUN [&quot;可执行文件&quot;,&quot;参数1&quot;, &quot;参数2&quot;]</code>这像是函数调用</p><p><code>RUN</code>命令常用来安装软件包</p><h4 id="构建" tabindex="-1"><a class="header-anchor" href="#构建" aria-hidden="true">#</a> 构建</h4><p><code>docker build [选项] &lt;上下文路径/URL/-&gt;</code> 在文件目录下执行<code>docker build -t nginx:v3 .</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@docker docker<span class="token punctuation">]</span><span class="token comment"># docker build -t nginx:v3 .</span>
Sending build context to Docker daemon  <span class="token number">2</span>.048kB
Step <span class="token number">1</span>/2 <span class="token builtin class-name">:</span> FROM nginx
 ---<span class="token operator">&gt;</span> b8efb18f159b
Step <span class="token number">2</span>/2 <span class="token builtin class-name">:</span> RUN <span class="token builtin class-name">echo</span> <span class="token string">&#39;&lt;h1&gt; Dockerfile!&lt;/h1&gt;&#39;</span> <span class="token operator">&gt;&gt;</span> /usr/share/nginx/html/index.html
 ---<span class="token operator">&gt;</span> Running <span class="token keyword">in</span> 8b921720af4c
 ---<span class="token operator">&gt;</span> 2cd0174a0aea
Removing intermediate container 8b921720af4c
Successfully built 2cd0174a0aea
Successfully tagged nginx:v3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="实例解析" tabindex="-1"><a class="header-anchor" href="#实例解析" aria-hidden="true">#</a> 实例解析</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM    debian:jessie
RUN <span class="token function">apt-get</span> update
RUN <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span>  gcc libc6-dev   <span class="token function">make</span>
RUN <span class="token function">wget</span>    <span class="token parameter variable">-O</span>  redis.tar.gz    <span class="token string">&quot;http://download.redis.io/releases/redis-3.2.5.tar.gz&quot;</span>
RUN <span class="token function">mkdir</span>   <span class="token parameter variable">-p</span>  /usr/src/redis
RUN <span class="token function">tar</span> <span class="token parameter variable">-xzf</span>    redis.tar.gz    <span class="token parameter variable">-C</span>  /usr/src/redis  --strip-components<span class="token operator">=</span><span class="token number">1</span>
RUN <span class="token function">make</span>    <span class="token parameter variable">-C</span>  /usr/src/redis
RUN <span class="token function">make</span>    <span class="token parameter variable">-C</span>  /usr/src/redis  <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Dockerfile中一个RUN指令,就会建立一层.就和cimmit类似,一层层的叠加然后生成新的image.这样没有意义,很多无用的东西都装进了image.编译环境,软件包等.而且UnionFS是有层数限制的的. 所以,正确的写法应该是这样</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>FROM    debian:jessie
RUN buildDeps=&#39;gcc  libc6-dev   make&#39;   \\
                &amp;&amp;  apt-get update  \\
                &amp;&amp;  apt-get install -y  $buildDeps  \\
                &amp;&amp;  wget    -O  redis.tar.gz    &quot;http://download.redis.io/releases/redis-3.2.5.tar.gz&quot;  \\
                &amp;&amp;  mkdir   -p  /usr/src/redis  \\
                &amp;&amp;  tar -xzf    redis.tar.gz    -C  /usr/src/redis  --strip-components=1    \\
                &amp;&amp;  make    -C  /usr/src/redis  \\
                &amp;&amp;  make    -C  /usr/src/redis  install \\
                &amp;&amp;  rm  -rf /var/lib/apt/lists/*    \\
                &amp;&amp;  rm  redis.tar.gz    \\
                &amp;&amp;  rm  -r  /usr/src/redis  \\
                &amp;&amp;  apt-get purge   -y  --auto-remove   $buildDeps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一层一个目的,而不是一层一条命令,我们是在构建image并不是在写shell脚本.并且要记得做相关清理工作.</p><h4 id="build中的点" tabindex="-1"><a class="header-anchor" href="#build中的点" aria-hidden="true">#</a> build中的点<code>.</code></h4><p>docker build 命令最后有个点<code>.</code>,它表示当前目录,而Dockerfile就在当前目录.所以会让人认为点<code>.</code>指的就是Dockerfile的路径,其实是不准确的.如果对照bulid格式,会发现,这里的点其实指的是上下文. 理解上下文要理解下docker工作原理,docker运行时,分为server和client.我们其实是使用client控制docker服务端,所有的操作其实是服务端完成的.也就是C/S结构. 所以我们构建image的时候,可以使用ADD.COPY等指令,将本地文件复制进镜像.构建是在服务端.服务端如何获取本地文件呢?这里就用到了上下文.用户指定了上下文路径,build的时候就会将路径下的内容打包.然后上传到Docker server.当Docker server收到后展开就能获得所需的一切文件 比如 <code>COPY ./package.json /app</code> 这并不是要复制执行docker build命令所在的目录下的package.json ,也不是复制Dockerfile所在目录下的package.json而是复制上下文(context)目录下的p ackage.json 所以,这里的路径是相对的, <code>COPY ../package.json /app</code>或者<code>COPY /opt/xxxx /app</code> 其实都已经超出了上下文的范围.那当我们需要context范围外的文件怎么办?很简单,先把文件cp到上下文目录中. 默认情况下,Dockerfile会将上下文目录下的Dockerfile文件作为Dockerfile.所以很多人会误认为 <code>.</code>就是指Dockerfile所在目录 通常习惯上我们也不会去更改.</p><h3 id="dockerfile其他指令" tabindex="-1"><a class="header-anchor" href="#dockerfile其他指令" aria-hidden="true">#</a> Dockerfile其他指令</h3><h4 id="copy" tabindex="-1"><a class="header-anchor" href="#copy" aria-hidden="true">#</a> COPY</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    COPY    &lt;源路径&gt;...    &lt;目标路径&gt;  
    COPY    [&quot;&lt;源路径1&gt;&quot;,...   &quot;&lt;目标路径&gt;&quot;]   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>源路径可以指定多个,也可以是还是用通配符. 此COPY 自带 -p.会保留源文件的属性.</p><h4 id="add" tabindex="-1"><a class="header-anchor" href="#add" aria-hidden="true">#</a> ADD</h4><p>基本和COPY是一致的.但是他俩的使用建议遵守一个原则 文件复制使用<code>COPY</code>,需要解压缩使用<code>ADD</code></p><h4 id="cmd" tabindex="-1"><a class="header-anchor" href="#cmd" aria-hidden="true">#</a> CMD</h4><p>此命令类似<code>RUN</code> 支持两种格式 <code>shell</code> 和 <code>exec</code> shell 格式: <code>CMD &lt;命令&gt;</code> exec格式: <code>CMD [&quot;可执行文件&quot;, &quot;参数1&quot;, &quot;参数2&quot;...]</code><br> 参数列表格式: <code>CMD[&quot;参数1&quot;, &quot;参数2&quot;...]</code>在指定了 <code>ENTRYPOINT</code> 指令后,用 CMD指定具体的参数。</p><p>Docker不是虚拟机,容器是进程.所以容器的启动需要指定运行程序和参数.<code>CMD</code> 就是用于指定默认容易主进程的启动命令 或者这样理解,<code>CMD</code> 执行的是默认容器启动后执行的命令以及参数.一般<code>只允许使用一次CMD,常用于文件最后</code></p><p>命令格式上推荐使用<code>exec</code> , 默认情况下 shell 是会被封装成为<code>sh -c</code> 如: <code>CMD echo $HOME</code> --&gt; <code>CMD [&quot;sh&quot;, &quot;-c&quot;, &quot;echo $HOME&quot;]</code> 注意! <code>exec</code>格式 一定要用双引号!因为在解析时会被解析成<code>json</code></p><p>docker不是虚拟机,容器的应用也应该是以前台执行的,容器不存在后台的概念.不能以虚拟机的方式去执行后台服务等 所以 <code>CMD service nginx start</code>肯定是错误的.会转换为 <code>CMD [&quot;sh&quot;, &quot;-c&quot;, &quot;service nginx start&quot;]</code> 显而易见,主进程是<code>sh</code>,所以这种格式的命令,会导致容器退出. 正确的方式 是<code>CMD [&quot;nginx&quot;,&quot;-g&quot;,&quot;daemon off&quot;]</code></p><h4 id="entrypoint" tabindex="-1"><a class="header-anchor" href="#entrypoint" aria-hidden="true">#</a> ENTRYPOINT</h4><p>同样支持两种格式: <code>exec</code> 和<code>shell</code></p><p>当指定了<code>ENTRYPOINT</code>后<code>CMD</code>的含义就发生了变化,它不在直接运行命令,而是将内容传送给<code>ENTYRPOINT</code>运行 同<code>CMD</code>,一个文件只写一次.</p><h4 id="env" tabindex="-1"><a class="header-anchor" href="#env" aria-hidden="true">#</a> ENV</h4><p>环境变量 <code>ENV KEY VALUE</code> <code>ENV KEY=VALUE</code> 两种方式都可以 下列指令可以支持环境变量展开： <code>ADD、COPY、ENV、EXPOSE、LABEL、USER、WORKDIR、VOLUME、STOPSIGNAL、ONBUILD</code> 例:(node官方)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ENV NODE_VERSION 7.2.0

RUN curl -SLO &quot;https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz&quot; \\
  &amp;&amp; curl -SLO &quot;https://nodejs.org/dist/v$NODE_VERSION/SHASUMS256.txt.asc&quot; \\
  &amp;&amp; gpg --batch --decrypt --output SHASUMS256.txt SHASUMS256.txt.asc \\
  &amp;&amp; grep &quot; node-v$NODE_VERSION-linux-x64.tar.xz\\$&quot; SHASUMS256.txt | sha256sum -c - \\
  &amp;&amp; tar -xJf &quot;node-v$NODE_VERSION-linux-x64.tar.xz&quot; -C /usr/local --strip-components=1 \\
  &amp;&amp; rm &quot;node-v$NODE_VERSION-linux-x64.tar.xz&quot; SHASUMS256.txt.asc SHASUMS256.txt \\
  &amp;&amp; ln -s /usr/local/bin/node /usr/local/bin/nodejs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="arg变量" tabindex="-1"><a class="header-anchor" href="#arg变量" aria-hidden="true">#</a> ARG变量</h4><p><code>ARG key </code> <code>ARG key=value </code> ARG指令定义的参数，在docker build命令中以--build-arg key=value形式赋值。 ARG变量不像ENV变量始终存在于镜像中。不过ARG变量会以类似的方式对构建缓存产生影响。如果Dockerfile中定义的ARG变量的值与之前定义的变量值不一样，那么就有可能产生“cache miss”。比如RUN指令使用ARG定义的变量时，ARG变量的值变了之后，就会导致缓存失效。</p><h4 id="volume" tabindex="-1"><a class="header-anchor" href="#volume" aria-hidden="true">#</a> VOLUME</h4><p><code>VOLUME path</code> <code>VOLUME [&quot;path1&quot;,&quot;path2&quot;]</code> 容器运行,尽量让存储层不发生写操作,通常数据都存放在卷中,此命令可实现指定挂载某目录,以防用户忘记将动态文件目录挂载为卷.这样可以保证容器的正常运行,并且不会向存储写数据</p><h4 id="expose" tabindex="-1"><a class="header-anchor" href="#expose" aria-hidden="true">#</a> EXPOSE</h4><p><code>EXPOSE 80</code><code>EXPOSE 22</code> 声明运行容器时提供服务端口,单单只是声明,并不会真的去开启这个端口.当使用<code>docker run -P</code>时,会自动随机映射EXPOSE的端口</p><h4 id="workdir" tabindex="-1"><a class="header-anchor" href="#workdir" aria-hidden="true">#</a> WORKDIR</h4><p>指定工作目录 <code>WORKDIR dir</code> 用来指定工作目录,WORKDIR类似命令cd。 WORKDIR参数后可以是相对路径或者带/的绝对路径，使用相对路径就依据上一个WORKDIR参数决定下面的Dockerfile工作目录。 可以重复定义，以切换Dockerfile的工作目录。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>RUN cd  /app
RUN echo    &quot;hello&quot; &gt;   world.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>两个RUN 其实是运行了两个容器.第一个RUN并不会对第二个产生任何影响.所以第二个将会找不到路径,此时就需要设置工作目录 <code>WORKDIR /app</code></p><h4 id="onbuild" tabindex="-1"><a class="header-anchor" href="#onbuild" aria-hidden="true">#</a> ONBUILD</h4><p>该命令实际上是个触发器,其参数是任意一个Dockerfile 指令 <code>ONBUILD RUN mkdir /testdir</code> 当我们在一个Dockerfile文件中加上ONBUILD指令，该指令对利用该Dockerfile构建镜像（比如为A镜像）不会产生实质性影响。 但是当我们编写一个新的Dockerfile文件来基于A镜像构建一个镜像（比如为B镜像）时，这时构造A镜像的Dockerfile文件中的ONBUILD指令就生效了.</p><h4 id="user" tabindex="-1"><a class="header-anchor" href="#user" aria-hidden="true">#</a> USER</h4><p><code>USER username</code><code>USER</code>会改变以后命令的执行用户.或者说,他就是切换用户的.前提,用户是存在的,否则失败.</p><p>如果以 root 执行的脚本，在执行期间希望改变身份，比如希望以某个已经建立好的用户来运行某个服务进程 不要使用 su 或者 sudo，这些都需要比较麻烦的配置，而且在 TTY 缺失的环境下经常出错。建议使用 gosu。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 建立 redis 用户，并使用 gosu 换另一个用户执行命令
RUN groupadd -r redis &amp;&amp; useradd -r -g redis redis
# 下载 gosu
RUN wget -O /usr/local/bin/gosu &quot;https://github.com/tianon/gosu/releases/download/1.7/gosu-amd64&quot; \\
    &amp;&amp; chmod +x /usr/local/bin/gosu \\
    &amp;&amp; gosu nobody true
# 设置 CMD，并以另外的用户执行
CMD [ &quot;exec&quot;, &quot;gosu&quot;, &quot;redis&quot;, &quot;redis-server&quot; ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="healthcheck" tabindex="-1"><a class="header-anchor" href="#healthcheck" aria-hidden="true">#</a> HEALTHCHECK</h4><p><code>HEALTHCHECK [option] CMD &lt;command&gt;</code><code>HEALTHCHECK NONE</code> 可屏蔽基础镜像的健康检测指令</p><p>其命令和ENTTYPOINT类似. <code>--interval</code> 间隔时间,两次检测时间间隔,默认30s <code>--timeout</code> 超时.健康检测运行超时时间.默认30s <code>--retries</code> 重试.默认3次. 返回值:<code>0</code>:成功,<code>1</code>:失败 <code>2</code>:保留</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>FROM    nginx
RUN apt-get update  &amp;&amp;  apt-get install -y  curl    &amp;&amp;  rm  -rf /var/lib/apt/lists/*
HEALTHCHECK --interval=15s  --timeout=5s    \\
        CMD curl    -fs http://localhost/   ||  exit    1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="dockerfile多阶段构建" tabindex="-1"><a class="header-anchor" href="#dockerfile多阶段构建" aria-hidden="true">#</a> Dockerfile多阶段构建</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>FROM muninn/glide:alpine AS build-env
ADD . /go/src/app
WORKDIR /go/src/app
RUN glide install
RUN go build -v -o /go/src/app/app-server

FROM alpine
RUN apk add -U tzdata
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai  /etc/localtime
COPY --from=build-env /go/src/app/app-server /usr/local/bin/app-server
EXPOSE 80
CMD [&quot;app-server&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先，第一个 <code>FROM</code> 后边多了个 <code>AS</code> 关键字，可以给这个阶段起个名字。 第二部分用了官方的 alpine 镜像，改变时区到中国 注意<code>COPY</code> 关键字，它现在可以接受 --from= 这样的参数，从上个我们起名字的阶段复制文件过来。</p><h3 id="dockerfile文件解析" tabindex="-1"><a class="header-anchor" href="#dockerfile文件解析" aria-hidden="true">#</a> Dockerfile文件解析</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#docker build -t centos_nginx:v5 .
#docker run --name web_5 -d -p 85:80 centos_nginx:v5 


FROM centos

MAINTAINER zili.li

ADD nginx-1.12.2.tar.gz /usr/local/src

RUN buildDeps=&#39;gcc gcc-c++ glib make autoconf openssl openssl-devel libxslt-devel gd gd-devel GeoIP GeoIP-devel pcre pcre-devel wget curl&#39; \\ 
                &amp;&amp; yum -y install $buildDeps \\
                &amp;&amp; useradd -M -s /sbin/nologin nginx
#多个用逗号分隔
#docker inspect web_5 的 Mounts下可看到文件挂载信息.
#docker exec -it web_5 /bin/bash 进入容器可查看到挂载的目录,其内容和Mounts是同步的
VOLUME [&quot;/usr/local/nginx/html&quot;]

WORKDIR /usr/local/src/nginx-1.12.2

RUN ./configure --user=nginx --group=nginx --prefix=/usr/local/nginx --with-file-aio --with-http_ssl_module --with-http_realip_module --with-http_addition_module --with-http_xslt_module --with-http_image_filter_module --with-http_geoip_module --with-http_sub_module --with-http_dav_module --with-http_flv_module --with-http_mp4_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_auth_request_module --with-http_random_index_module --with-http_secure_link_module --with-http_degradation_module --with-http_stub_status_module \\
                &amp;&amp; make \\
                &amp;&amp; make install \\
                &amp;&amp; rm -rf /usr/local/src/nginx-1.12.2

#指定了环境变量,所以生成容器的时候 不用在指定路径.直接nginx 即可
ENV PATH /usr/local/nginx/sbin:$PATH                

EXPOSE 80

#当ENTRYPOINT和CMD连用时，CMD的命令是ENTRYPOINT命令的参数，两者连用相当于nginx -g &quot;daemon off;&quot;
#如果CMD [&quot;-g&quot;,&quot;daemon on;&quot;] 那么生成的容器将不会处于up状态.但是执行run的时候加入 -g &quot;daemon off;&quot;此参数将会传入给ENTRYPOINT
#容器中的应用都应该以前台执行,容器没有后台概念,-d 表示的后台,是程序的后台,程序完毕容器停止,而不是容器后台.容器都是前台的.
ENTRYPOINT [&quot;nginx&quot;]

#CMD service nginx start 这是初学经常搞模糊的地方!
#对于容器而言，其启动程序就是容器应用进程，容器就是为了主进程而存在的，主进程退出，容器就失去了存在的意义，从而退出.
# CMD service nginx start 会被理解为 CMD [ &quot;sh&quot;, &quot;-c&quot;, &quot;service nginx start&quot;]
#因此主进程实际上是 sh,那么当 service nginx start 命令结束后，sh 也就结束，sh作为主进程退出了自然就会令容器退出
#正确的做法是直接执行 nginx 可执行文件，并且要求以前台形式运行。比如：CMD [&quot;nginx&quot;, &quot;-g&quot;, &quot;daemon off;&quot;],或CMD /bin/sh -c &#39;nginx -g &quot;daemon off;&quot;&#39;
CMD [&quot;-g&quot;,&quot;daemon off;&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="container" tabindex="-1"><a class="header-anchor" href="#container" aria-hidden="true">#</a> container</h2><h3 id="新建容器" tabindex="-1"><a class="header-anchor" href="#新建容器" aria-hidden="true">#</a> 新建容器</h3><p><code>docker run</code> 此命令是用来新建容器 例如： <code>docker run ubuntu /bin/echo &#39;test&#39;</code> 会输出test后终止容器，终止容器并不是删除容器，所以容器还是存在的，添加<code>--rm</code> 则会临时性的执行，完后删除容器<code>docker run --rm ....</code></p><p><code>docker run -it ubuntu /bin/bash</code> 会生成一个伪终端。可通过终端进行简单的操作。同样，此容器也是存在的。docker ps -a查看</p><p>docker run流程</p><ul><li>检查本地是否存在指定的镜像，不存在就从公有仓库下载</li><li>利用镜像创建并启动一个容器</li><li>分配一个文件系统，并在只读的镜像层外面挂载一层可读写层</li><li>从宿主主机配置的网桥接口中桥接一个虚拟接口到容器中去</li><li>从地址池配置一个 ip 地址给容器</li><li>执行用户指定的应用程序</li><li>执行完毕后容器被终止,并不是删除，容器还可以再次启动</li></ul><h3 id="启动容器" tabindex="-1"><a class="header-anchor" href="#启动容器" aria-hidden="true">#</a> 启动容器</h3><p><code>docker container start -i container_id</code>会重新启动一个已终止的容器。</p><p><strong>docker container 还有很多命令，建议使用 --help查看使用说明</strong></p><h3 id="容器后台运行" tabindex="-1"><a class="header-anchor" href="#容器后台运行" aria-hidden="true">#</a> 容器后台运行</h3><p><code>docker run -d</code> 不是用后台运行时，结果输出会到当前主机</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@zili ~]# docker run ubuntu /bin/sh -c &quot;while true; do echo test -d; sleep 1; done&quot;
test -d
test -d
test -d
test -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用后台运行时候,容器将后台运行，那么如何查看结果呢？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@zili ~]# docker run -d ubuntu /bin/sh -c &quot;while true; do echo test -d; sleep 1; done&quot;
69931b53bfea873daf9cfeb82c926be84980e41a3c0f62f966b039ffbaa0b1c1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>docker container log container_id</code> 可以来查看相关的容器输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@zili ~]# docker container logs 699
test -d
test -d
test -d
test -d
test -d
test -d
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，容器是否能长久运行和指定的命令有关系，也就是说，命令结束，容器停止，和<code>-d</code>参数并无关系，它只是用来让容器后台运行而已。 停止容器运行使用<code>docker container stop container_id</code></p><h3 id="进入容器" tabindex="-1"><a class="header-anchor" href="#进入容器" aria-hidden="true">#</a> 进入容器</h3><p><code>docker attach</code></p><p>不建议使用,因为使用此命令,如果容器是<code>-d</code>后台运行,stdin退出时,容器运行状态将终止.也就是说,此命令进入容器,退出时会导致后台运行的容器终止</p><p><code>docker exec -it </code> 不会导致后台运行中的容器终止.推荐使用~! 参数说明请使用 <code>docker exec --help</code></p><h3 id="导入和导出" tabindex="-1"><a class="header-anchor" href="#导入和导出" aria-hidden="true">#</a> 导入和导出</h3><p><code>docker container export</code> 导出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]# docker ps -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                      PORTS               NAMES
0828d964cc2f        ubuntu:16.04        &quot;/bin/bash&quot;         29 minutes ago      Exited (0) 29 minutes ago                       attach
[root@docker ~]# docker container export attach &gt; attach.tar
[root@docker ~]# ls
anaconda-ks.cfg  attach.tar  docker  myip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>docker image import</code> 导入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]# cat attach.tar | docker import - test/ubuntu
sha256:e9b17f2d8f7546a1d3e143f684b234ebf2301b95193782d8685d2cdb2f05b2f5
[root@docker ~]# docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
test/ubuntu         latest              e9b17f2d8f75        4 seconds ago       98.4MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以通过URL导入 <code>docker import http://example.com/exampleimage.tgz example/imagerepo</code></p><h3 id="删除容器" tabindex="-1"><a class="header-anchor" href="#删除容器" aria-hidden="true">#</a> 删除容器</h3><p><code>docker rm</code><code>docker rm -f</code> 删除运行中的容器 <code>docker container prune</code> 删除所有终止的容器</p><h3 id="其他命令" tabindex="-1"><a class="header-anchor" href="#其他命令" aria-hidden="true">#</a> 其他命令</h3><p><code>docker diff container name</code> 查看容器变化 <code>docker history container:tag</code> 查看container 历史</p><h2 id="repository" tabindex="-1"><a class="header-anchor" href="#repository" aria-hidden="true">#</a> Repository</h2>`,129),p={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},b=s('<p><code>docker search</code> 命令查找官方repository的镜像. <code>docker pull</code> 命令把镜像拉取下来</p><p><code>docker login</code> 登录docker hub <code>docker logout</code> 退出docker hub <code>docker push</code> 推送镜像</p><h3 id="私有仓库" tabindex="-1"><a class="header-anchor" href="#私有仓库" aria-hidden="true">#</a> 私有仓库</h3>',3),h={href:"https://yeasy.gitbooks.io/docker_practice/content/repository/registry.html",target:"_blank",rel:"noopener noreferrer"},g=s(`<h2 id="数据管理" tabindex="-1"><a class="header-anchor" href="#数据管理" aria-hidden="true">#</a> 数据管理</h2><p>容器管理数据主要有两种方式,数据卷（Volumes）和挂载主机目录(Bind mounts)</p><h3 id="数据卷-volumes" tabindex="-1"><a class="header-anchor" href="#数据卷-volumes" aria-hidden="true">#</a> 数据卷(Volumes)</h3><p>数据卷可以在容器之间共享和重用, 数据卷 的修改会立马生效且数据卷 的更新，不会影响镜像 数据卷 默认会一直存在，即使容器被删除</p><ul><li>注意：数据卷 的使用，类似于 Linux 下对目录或文件进行 mount，镜像中的被指定为挂载点的目录中的文件会隐藏掉，能显示看的是挂载的 数据卷。</li></ul><p>数据卷有 <code>--mount</code> <code>-v</code> 或者 <code>--volume</code> 但是推荐使用 <code>--mount</code> 参数</p><h3 id="创建-删除volume" tabindex="-1"><a class="header-anchor" href="#创建-删除volume" aria-hidden="true">#</a> 创建/删除volume</h3><p><code>docker volume create webtest</code> 创建一个webtest的数据卷 <code>docker volume inspect webtest</code> 查看数据卷</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]# docker volume inspect webtest
[
    {
        &quot;CreatedAt&quot;: &quot;2018-04-15T10:54:40+08:00&quot;,
        &quot;Driver&quot;: &quot;local&quot;,
        &quot;Labels&quot;: {},
        &quot;Mountpoint&quot;: &quot;/var/lib/docker/volumes/webtest/_data&quot;,
        &quot;Name&quot;: &quot;webtest&quot;,
        &quot;Options&quot;: {},
        &quot;Scope&quot;: &quot;local&quot;
    }
]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>docker volume rm webtest</code> 删除数据卷,前提数据卷没有被容器使用</p><p>数据卷是独立于容器的,用来做数据初始化的,所以容器的删除不会影响数据卷,若删除容器时想要删除数据卷 则使用<code>docker rm -v</code> 清理无主的数据卷 <code>docker volume prune</code></p><p>涉及删除的操作,<code>思之,慎之而行之</code></p><h3 id="启动挂载数据卷的容器" tabindex="-1"><a class="header-anchor" href="#启动挂载数据卷的容器" aria-hidden="true">#</a> 启动挂载数据卷的容器</h3><p><code>docker run</code>时，使用 <code>--mount</code> 标记来将数据卷挂载到容器里,在一次 docker run 中可以挂载多个数据卷</p><p><code>-v后面的映射关系是&quot;宿主机文件/目录:容器里对应的文件/目录&quot;，其中，宿主机上的文件/目录是要提前存在的，容器里对应的文件/目录会自动创建。</code></p><p>两种方式本质上没有区别,mount更加清晰直观. <code> docker run -it --name web -d -p 80:80 --mount source=webtest,target=/webdir nginx</code><code>docker run -it --name web -d -p 80:80 -v webtest:/webdir nginx</code></p><p><strong>查看数据卷具体信息</strong><code>docker inspect web</code> 数据卷的信息在Mounts下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;Mounts&quot;: [
            {
                &quot;Type&quot;: &quot;volume&quot;,
                &quot;Name&quot;: &quot;webtest&quot;,
                &quot;Source&quot;: &quot;/var/lib/docker/volumes/webtest/_data&quot;,
                &quot;Destination&quot;: &quot;/webdir&quot;,
                &quot;Driver&quot;: &quot;local&quot;,
                &quot;Mode&quot;: &quot;z&quot;,
                &quot;RW&quot;: true,
                &quot;Propagation&quot;: &quot;&quot;
            }
        ],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>docker exec -it container /bin/bash</code> 可进入容器查看挂载的目录并新建文件等</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root@f24f73d240d9:/# cd webdir/
root@f24f73d240d9:/webdir# touch 123
root@f24f73d240d9:/webdir# df -h
Filesystem              Size  Used Avail Use%   Mounted on
/dev/mapper/centos-root  50G  1.8G   49G   4%   /webdir

然后退出可在宿主机上看到此文件
[root@docker ~]# cd /var/lib/docker/volumes/webtest/_data/
[root@docker _data]# ls
123

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="挂载目录-bind-mounts" tabindex="-1"><a class="header-anchor" href="#挂载目录-bind-mounts" aria-hidden="true">#</a> 挂载目录(Bind mounts)</h3><p>多个目录的挂载 多写几次<code>--mount</code>即可</p><p><code>[root@docker web]# docker run --name dirbind -d -p 80:80 --mount type=bind,source=/root/web,target=/usr/share/nginx/html nginx</code> 首先我在root下新建web目录并写个index.html文件将其挂到由nginx镜像生成的容器<code>dirbind</code>的html下.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker web]# docker run --name dirbind -d -p 80:80 --mount type=bind,source=/root/web,target=/usr/share/nginx/html nginx
2648c6f9e8ff3660e37dc64b0483bc906e5987082224fb0f8604e2bceef2da65
[root@docker web]# docker exec -it 264 /bin/bash
#此时已进入容器
root@2648c6f9e8ff:/# cd /usr/share/nginx/html
root@2648c6f9e8ff:/usr/share/nginx/html# ls
index.html
#index文件已经挂载上来了. 再次访问nginx就能看到index的内容了.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看容器信息 <code>docker inspect dirbind</code> #Mounts部分可看到挂载信息,注意这里,<code>RW: true</code> 说明是读写权限的,其实还可以挂载个只读的文件.后有说明.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;Mounts&quot;: [
            {
                &quot;Type&quot;: &quot;bind&quot;,
                &quot;Source&quot;: &quot;/root/web&quot;,
                &quot;Destination&quot;: &quot;/usr/share/nginx/html&quot;,
                &quot;Mode&quot;: &quot;&quot;,
                &quot;RW&quot;: true,
                &quot;Propagation&quot;: &quot;rprivate&quot;
            }
        ],

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只读目录挂载 <code>docker run --name dirbind -d -p 80:80 --mount type=bind,source=/root/web,target=/usr/share/nginx/html,readonly nginx</code></p><h3 id="挂载单个文件" tabindex="-1"><a class="header-anchor" href="#挂载单个文件" aria-hidden="true">#</a> 挂载单个文件</h3><p><code>docker run --name bindfile -d -p 80:80 \\ --mount type=bind,source=/root/web,target=/usr/share/nginx/html \\ --mount type=bind,source=/root/a.html,target=/usr/share/nginx/html/index.html nginx</code> 第二个<code>--mount</code>是挂载单个文件,其会覆盖挂载的第一个目录下的index文件.</p><ul><li>单个文件的挂载要求容器内必须也存在此文件</li></ul><h2 id="docker网络" tabindex="-1"><a class="header-anchor" href="#docker网络" aria-hidden="true">#</a> docker网络</h2><p>docker 网络分为 外部访问和容器互联两种情况</p><h3 id="外部访问" tabindex="-1"><a class="header-anchor" href="#外部访问" aria-hidden="true">#</a> 外部访问</h3><p>这个已经并不陌生了就是在<code>docker run</code>的时候加上<code>-p</code>参数即可指定本地端口和容器端口 一个指定端口上只可以绑定一个容器 格式有<code> ip:hostPort:containerPort | ip::containerPort | hostPort:containerPort</code> 还可以指定端口格式(tcp或udp)<code>127.0.0.1:1111:1111/udp</code></p><ul><li>注意:若需多个端口绑定,重复只用<code>-p</code> 即可</li></ul><p><code>docker port container_id</code> 可查看容器端口映射情况</p><p>使用<code>-P</code> 大写的P默认会自动分配端口进行映射.</p><h3 id="容器互联" tabindex="-1"><a class="header-anchor" href="#容器互联" aria-hidden="true">#</a> 容器互联</h3><p><strong>新建网络</strong><code>docker network create -d bridge web-net</code> 新建一个<code>web-net</code>的网络 <code>-d</code> 参数指定 Docker 网络类型，有 <code>bridge</code> <code>overlay</code>。其中 <code>overlay</code> 网络类型用于 <code>Swarm mode</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]# docker network create -d bridge web-net
3a06ef1bde3ea75c16afe1d3024d1a161d33c3c9499646521f30a74992607407
[root@docker ~]# docker network inspect web-net
[
    {
        &quot;Name&quot;: &quot;web-net&quot;,
        &quot;Id&quot;: &quot;3a06ef1bde3ea75c16afe1d3024d1a161d33c3c9499646521f30a74992607407&quot;,
        &quot;Created&quot;: &quot;2018-04-15T14:08:13.044203584+08:00&quot;,
        &quot;Scope&quot;: &quot;local&quot;,
        &quot;Driver&quot;: &quot;bridge&quot;,
        &quot;EnableIPv6&quot;: false,
        &quot;IPAM&quot;: {
            &quot;Driver&quot;: &quot;default&quot;,
            &quot;Options&quot;: {},
            &quot;Config&quot;: [
                {
                    &quot;Subnet&quot;: &quot;172.18.0.0/16&quot;,
                    &quot;Gateway&quot;: &quot;172.18.0.1&quot;
                }
            ]
        },
        &quot;Internal&quot;: false,
        &quot;Attachable&quot;: false,
        &quot;Ingress&quot;: false,
        &quot;ConfigFrom&quot;: {
            &quot;Network&quot;: &quot;&quot;
        },
        &quot;ConfigOnly&quot;: false,
        &quot;Containers&quot;: {},
        &quot;Options&quot;: {},
        &quot;Labels&quot;: {}
    }
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>容器关联网络</strong> 通过<code>--network</code> 参数指定容器网络 <code>docker run --name web1 -d -P --network web-net nginx</code><code>docker run --name web2 -d -P --network web-net nginx</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]# docker network inspect web-net
[
    {
        &quot;Name&quot;: &quot;web-net&quot;,
        &quot;Id&quot;: &quot;3a06ef1bde3ea75c16afe1d3024d1a161d33c3c9499646521f30a74992607407&quot;,
        &quot;Created&quot;: &quot;2018-04-15T14:08:13.044203584+08:00&quot;,
        &quot;Scope&quot;: &quot;local&quot;,
        &quot;Driver&quot;: &quot;bridge&quot;,
        &quot;EnableIPv6&quot;: false,
        &quot;IPAM&quot;: {
            &quot;Driver&quot;: &quot;default&quot;,
            &quot;Options&quot;: {},
            &quot;Config&quot;: [
                {
                    &quot;Subnet&quot;: &quot;172.18.0.0/16&quot;,
                    &quot;Gateway&quot;: &quot;172.18.0.1&quot;
                }
            ]
        },
        &quot;Internal&quot;: false,
        &quot;Attachable&quot;: false,
        &quot;Ingress&quot;: false,
        &quot;ConfigFrom&quot;: {
            &quot;Network&quot;: &quot;&quot;
        },
        &quot;ConfigOnly&quot;: false,
        &quot;Containers&quot;: {
            &quot;21250caa4838de429eeda541aab9d4e6e0697a4b9038d9656e0ee318db9f2636&quot;: {
                &quot;Name&quot;: &quot;web2&quot;,
                &quot;EndpointID&quot;: &quot;46cac28abeef408daa1351bd2c376376928c82c1bb2836cb729adcd7379022ce&quot;,
                &quot;MacAddress&quot;: &quot;02:42:ac:12:00:02&quot;,
                &quot;IPv4Address&quot;: &quot;172.18.0.2/16&quot;,
                &quot;IPv6Address&quot;: &quot;&quot;
            },
            &quot;aca3aa6558188c41a2ab1f79993d845d6cea392fcc8c61d8acc0bc9864550834&quot;: {
                &quot;Name&quot;: &quot;web1&quot;,
                &quot;EndpointID&quot;: &quot;26e27856326d3bc04f29ecaf083dab789c80b0f64ce7c09159df31e896052ca6&quot;,
                &quot;MacAddress&quot;: &quot;02:42:ac:12:00:03&quot;,
                &quot;IPv4Address&quot;: &quot;172.18.0.3/16&quot;,
                &quot;IPv6Address&quot;: &quot;&quot;
            }
        },
        &quot;Options&quot;: {},
        &quot;Labels&quot;: {}
    }
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入容器中<code>docker exec -it /bin/bash</code> ubuntu容器没有ping则安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt-get update
apt install net-tools       # ifconfig
apt install iputils-ping     # ping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root@0b8f77731024:~# ping web2
PING net2 (172.18.0.2) 56(84) bytes of data.
64 bytes from web2.web-net (172.18.0.2): icmp_seq=1 ttl=64 time=0.085 ms
64 bytes from web2.web-net (172.18.0.2): icmp_seq=2 ttl=64 time=0.043 ms

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果有过个容器要互联,如果你有多个容器之间需要互相连接，<code>Docker Compose</code>了解一下.</p><h3 id="dns" tabindex="-1"><a class="header-anchor" href="#dns" aria-hidden="true">#</a> DNS</h3><p>进入容器中执行<code>mount</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root@0b8f77731024:~# mount
/dev/mapper/centos-root on /etc/resolv.conf type xfs (rw,relatime,attr2,inode64,noquota)
/dev/mapper/centos-root on /etc/hostname type xfs (rw,relatime,attr2,inode64,noquota)
/dev/mapper/centos-root on /etc/hosts type xfs (rw,relatime,attr2,inode64,noquota)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到,dns,主机名,hosts文件是被挂载上去的,这样只要宿主机有变更,那么容器就能立即得到更新. 同理,如果有需要可单独见文件进行挂载,并指向容器内相关文件.</p><p><strong>还有一种方式</strong> 通过<code>/etc/docker/daemon.json</code>来配置,这样影响所有容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;dns&quot; : [
    &quot;114.114.114.114&quot;,
    &quot;8.8.8.8&quot;
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想要手动指定的话.在<code>docker run</code>的时候可以添加参数 <code>-h HOSTNAME </code>或者 <code>--hostname=HOSTNAME </code>设定容器的主机名,但它在容器外部看不到，既不会在 docker container ls 中显示，也不会在其他的容器的 /etc/hosts 看到。 <code>--dns=IP_ADDRESS</code> 添加 DNS 服务器到容器的<code> /etc/resolv.conf</code> 中，让容器用这个服务器来解析所有不在 /etc/hosts 中的主机名。 <code>--dns-search=DOMAIN </code>设定容器的搜索域，当设定搜索域为 <code>.example.com </code>时，在搜索一个名为 host 的主机时，DNS 不仅搜索 host，还会搜索 <code>host.example.com</code></p><h3 id="高级网络配置" tabindex="-1"><a class="header-anchor" href="#高级网络配置" aria-hidden="true">#</a> 高级网络配置</h3>`,54),x={href:"https://yeasy.gitbooks.io/docker_practice/content/advanced_network/",target:"_blank",rel:"noopener noreferrer"},q=s(`<h2 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> Docker Compose</h2><p>Docker Compose 是 Docker 官方编排（Orchestration）项目之一，负责快速的部署分布式应用</p><p>我们知道通过Dockerfile可以实现单独的一个应用容器. 实际,一个项目可能需要多个容器相互配合来完成.比如一个动态网站,除了页面还有数据库等等.</p><p>compose两个重要的概念: - 服务(service) : 一个应用容器，实际上可以包括若干运行相同镜像的容器实例 - 项目(project) :　一组关联容器组成的完整业务单元</p><h3 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h3><p>二进制安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo curl -L https://github.com/docker/compose/releases/download/1.17.1/docker-compose-\`uname -s\`-\`uname -m\` &gt; /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pip安装 <code>sudo pip install -U docker-compose</code></p><p>容器中执行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -L https://github.com/docker/compose/releases/download/1.8.0/run.sh &gt; /usr/local/bin/docker-compose

chmod +x /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── docker_compose
│   ├── app.py
│   ├── docker-compose.yml
│   └── Dockerfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>app.py</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from flask import Flask
from redis import Redis

app = Flask(__name__)
redis = Redis(host=&#39;redis&#39;, port=6379)

@app.route(&#39;/&#39;)
def hello():
    count = redis.incr(&#39;hits&#39;)
    return &#39;Hello World! 该页面已被访问 {} 次。\\n&#39;.format(count)

if __name__ == &quot;__main__&quot;:
    app.run(host=&quot;0.0.0.0&quot;, debug=True)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Dockerfile</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>FROM python:3.6-alpine
ADD . /code
WORKDIR /code
RUN pip install redis flask
CMD [&quot;python&quot;, &quot;app.py&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>docker-compose.yml</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &#39;3&#39;
services:

  web:
    build: .
    ports:
     - &quot;5000:5000&quot;

  redis:
    image: &quot;redis:alpine&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后执行<code>docker-compose up</code> 即可</p><h3 id="命令参数说明" tabindex="-1"><a class="header-anchor" href="#命令参数说明" aria-hidden="true">#</a> 命令参数说明</h3><p>docker-compose</p><pre><code>- \`-f, --file FILE\` 指定使用的 Compose 模板文件，默认为 \`docker-compose.yml\`，可以多次指定。
- \`-p, --project-name NAME\` 指定项目名称，默认将使用所在目录名称作为项目名。
- \`--x-networking\` 使用 Docker 的可拔插网络后端特性
- \`--x-network-driver DRIVER\` 指定网络后端的驱动，默认为 bridge
- \`--verbose\` 输出更多调试信息
- \`-v, --version\` 打印版本并退出
</code></pre><p>docker-compose <code>build</code> 用来创建或重新创建服务使用的镜像 docker-compose build service_a 创建一个镜像名叫service_a</p><p>docker-compose <code>kill</code> 用于通过容器发送SIGKILL信号强行停止服务</p><p>docker-compose <code>logs</code> 显示service的日志信息</p><p>docker-compose pause/unpause docker-compose pause #暂停服务 docker-compose unpause #恢复被暂停的服务</p><p>docker-compose <code>port</code> 用于查看服务中的端口与物理机的映射关系 docker-compose port nginx_web 80 查看服务中80端口映射到物理机上的那个端口</p><p>dokcer-compose <code>ps</code> 用于显示当前项目下的容器 注意，此命令与docker ps不同作用，此命令会显示停止后的容器（状态为Exited），只征对某个项目。</p><p>docker-compose <code>pull</code> 用于拉取服务依赖的镜像</p><p>docker-compose <code>restart</code> 用于重启某个服务中的所有容器 docker-compose restart service_name 只有正在运行的服务可以使用重启命令，停止的服务是不可以重启</p><p>docker-compose <code>rm</code> 删除停止的服务（服务里的容器）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-f #强制删除
-v #删除与容器相关的卷（volumes）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>docker-compose <code>run</code> 用于在服务中运行一个一次性的命令。这个命令会新建一个容器，它的配置和srvice的配置相同。 但两者之间还是有两点不同之处</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、run指定的命令会直接覆盖掉service配置中指定的命令
2、run命令启动的容器不会创建在service配置中指定的端口，如果需要指定使用--service-ports指定
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>docker-compose start/stop docker-compose start 启动运行某个服务的所有容器 docker-compose stop 启动运行某个服务的所有容器</p><p>docker-compose scale 指定某个服务启动的容器个数</p><h3 id="实例一" tabindex="-1"><a class="header-anchor" href="#实例一" aria-hidden="true">#</a> 实例一</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker web-nginx]# tree
.
├── docker-compose.yml
├── nginx
│   └── nginx.conf
└── webserver
    └── index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>nginx.conf</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#user  nginx;
worker_processes  1;
error_log  /var/log/nginx_error.log warn;
pid        /var/run/nginx.pid;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    access_log  /var/log/nginx_access.log  main;
    client_max_body_size 10m;  
    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

server {
    listen       80;
    server_name  localhost;

    location / {
        root   /webserver;
        index  index.html index.htm;
    }

}
    #include /usr/local/nginx/conf.d/*.conf;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>index.html</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;welcome to nginx web stie&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
   &lt;h2&gt;compose test1---1&lt;/h2&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>docker-compose.yml</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &quot;3&quot; #指定语法版本
services: #定义服务
  nginx:
    container_name: web-nginx #容器名字
    image: centos_nginx:v5 #依赖镜像
    restart: always
    ports:  #端口映射
      - 80:80
    volumes:
      #映射文件到容器.第一个是web的,在nginx通过root指定路径.第二个是配置文件.
      #如果不想指定web,可直接映射到nginx默认html路径.nginx配置不需要指定路径了
      #- ./webserver:/usr/local/nginx/html
      - ./webserver:/webserver
      - ./nginx/nginx.conf:/usr/local/nginx/conf/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例二" tabindex="-1"><a class="header-anchor" href="#实例二" aria-hidden="true">#</a> 实例二</h3><p>创建自定义网络test<code>docker network create --subnet=172.88.0.0/16 test</code> 网络名test和ip会在docker-compose中使用,用来指定网络和IP,同时IP与nginx负载有关</p><h4 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── docker-compose.yml
├── etc
│   └── localtime
├── nginx
│   ├── Dockerfile
│   ├── nginx-1.12.2.tar.gz
│   └── nginx.conf
├── tomcat
│   ├── apache-tomcat-8.5.24.tar.gz
│   ├── Dockerfile
│   └── jdk-8u45-linux-x64.tar.gz
└── webserver
    ├── tomcatA
    │   └── index.jsp
    └── tomcatB
        └── index.jsp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h4><p><code>nginx.conf</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#user  nginx;
worker_processes  1;
error_log  /var/log/nginx_error.log warn;
pid        /var/run/nginx.pid;

events {
    worker_connections  1024;
}

http {
    upstream tomcat  { 
      server 172.88.0.11:8080; 
      server 172.88.0.22:8080; 
    }

    include       mime.types;
    default_type  application/octet-stream;

    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    access_log  /var/log/nginx_access.log  main;
    client_max_body_size 10m;  
    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    server {
        listen       80;
        server_name  tomcat;

        location / {
            #root   /webserver;
            proxy_pass http://tomcat;
        }

    }
    #include /usr/local/nginx/conf.d/*.conf;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Dcokerfile</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>FROM centos

MAINTAINER zili.li

ADD nginx-1.12.2.tar.gz /usr/local/src

RUN buildDeps=&#39;gcc gcc-c++ glib make autoconf openssl openssl-devel libxslt-devel gd gd-devel GeoIP GeoIP-devel pcre pcre-devel wget curl&#39; \\ 
                &amp;&amp; yum -y install $buildDeps \\
                &amp;&amp; useradd -M -s /sbin/nologin nginx

VOLUME [&quot;/usr/local/nginx/html&quot;]

WORKDIR /usr/local/src/nginx-1.12.2

RUN ./configure --user=nginx --group=nginx --prefix=/usr/local/nginx --with-file-aio --with-http_ssl_module --with-http_realip_module --with-http_addition_module --with-http_xslt_module --with-http_image_filter_module --with-http_geoip_module --with-http_sub_module --with-http_dav_module --with-http_flv_module --with-http_mp4_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_auth_request_module --with-http_random_index_module --with-http_secure_link_module --with-http_degradation_module --with-http_stub_status_module \\
                &amp;&amp; make \\
                &amp;&amp; make install \\
                &amp;&amp; rm -rf /usr/local/src/nginx-1.12.2

ENV PATH /usr/local/nginx/sbin:$PATH                

EXPOSE 80

ENTRYPOINT [&quot;nginx&quot;]

CMD [&quot;-g&quot;,&quot;daemon off;&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tomcat" tabindex="-1"><a class="header-anchor" href="#tomcat" aria-hidden="true">#</a> tomcat</h4><p><code>Dcokerfile</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>FROM centos

ADD jdk-8u45-linux-x64.tar.gz /usr/local

ENV RUN_AS_USER=root
ENV JAVA_HOME /usr/local/jdk1.8.0_45
ENV CLASS_HOME=/usr/local/jdk1.8.0_45/lib:$JAVA_HOME/jre/lib
ENV CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib:$CLASSPATH
ENV PATH=$PATH:$JAVA_HOME/bin

ADD apache-tomcat-8.5.24.tar.gz /usr/local

EXPOSE 8080
ENTRYPOINT [&quot;/usr/local/apache-tomcat-8.5.24/bin/catalina.sh&quot;, &quot;run&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="docker-compose-1" tabindex="-1"><a class="header-anchor" href="#docker-compose-1" aria-hidden="true">#</a> docker-compose</h4><p><code>docker-compose.yml</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &quot;3&quot;
services:
  nginx:
    hostname: nginx
    build: ./nginx
    restart: always
    ports:
      - 80:80
    networks:
      test:
        ipv4_address: 172.88.0.88
    volumes:
      - ./nginx/nginx.conf:/usr/local/nginx/conf/nginx.conf
      - ./etc/localtime:/etc/localtime
    depends_on:
      - tomcat1
      - tomcat2

  tomcat1:
    hostname: tomcat1
    build: ./tomcat
    restart: always
    volumes:
      - ./webserver/tomcatA:/usr/local/apache-tomcat-8.5.24/webapps/ROOT
      - ./etc/localtime:/etc/localtime
    networks:
      test:
        ipv4_address: 172.88.0.11

  tomcat2:
    hostname: tomcat2
    build: ./tomcat
    restart: always
    volumes:
      - ./webserver/tomcatB/index.jsp:/usr/local/apache-tomcat-8.5.24/webapps/ROOT/index.jsp
      - ./etc/localtime:/etc/localtime
    networks:
      test:
        ipv4_address: 172.88.0.22

networks:
  test:
    external: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>docker-compose up</code></p><h2 id="docker-machine" tabindex="-1"><a class="header-anchor" href="#docker-machine" aria-hidden="true">#</a> docker machine</h2><h3 id="安装-2" tabindex="-1"><a class="header-anchor" href="#安装-2" aria-hidden="true">#</a> 安装</h3>`,62),k={href:"https://github.com/docker/machine/releases",target:"_blank",rel:"noopener noreferrer"},f=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ sudo curl -L https://github.com/docker/machine/releases/download/v0.13.0/docker-machine-\`uname -s\`-\`uname -m\` &gt; /usr/local/bin/docker-machine
$ sudo chmod +x /usr/local/bin/docker-machine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1" aria-hidden="true">#</a> 使用</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker-machine create \\
    --driver vmwarevsphere \\
    --vmwarevsphere-vcenter=xxx.xxx.xxx.xxx \\
    --vmwarevsphere-username=xxxxx \\
    --vmwarevsphere-password=xxxxxxx \\
    --vmwarevsphere-cpu-count=1 \\
    --vmwarevsphere-memory-size=512 \\
    --vmwarevsphere-disk-size=10240 \\
    TestDcokerMa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>driver vmwarevsphere</code> 我们的虚拟机 host 上安装的是 vmware 的产品 vSphere，因此需要给 Docker Machine 提供对应的驱动，这样才能够在上面安装新的虚拟机。 <code>--vmwarevsphere-vcenter=xxx.xxx.xxx.xxx</code><code>--vmwarevsphere-username=root </code><code>--vmwarevsphere-password=12345678</code> 上面三行分别指定了虚拟机 host 的 IP 地址、用户名和密码。</p><p><code>--vmwarevsphere-cpu-count=1</code><code>--vmwarevsphere-memory-size=512</code><code>--vmwarevsphere-disk-size=10240</code> 上面三行则分别指定了新创建的虚拟机占用的 cpu、内存和磁盘资源。 <code>TestDcokerMa</code> 最后一个参数则是新建虚拟机的名称。</p>`,5),_={href:"https://docs.docker.com/machine/",target:"_blank",rel:"noopener noreferrer"};function w(D,R){const i=l("ExternalLinkIcon");return o(),r("div",null,[t,e("p",null,[n("不同系统安装方式不同，"),e("a",u,[n("详见"),d(i)]),n(" 以"),v,n("为例(仅支持64位kernel >=3.10)建议使用国内源")]),m,e("p",null,[n("官方repository "),e("a",p,[n("Docker hub"),d(i)])]),b,e("p",null,[e("a",h,[n("略"),d(i)])]),g,e("p",null,[e("a",x,[n("略，参考链接"),d(i)])]),q,e("ul",null,[e("li",null,[n("linux "),e("a",k,[n("官网"),d(i)]),n("下载相关安装包,安装即可 .")])]),f,e("p",null,[e("a",_,[n("详细使用参考官网"),d(i)]),n(" ​")])])}const N=a(c,[["render",w],["__file","Docker学习.html.vue"]]);export{N as default};
