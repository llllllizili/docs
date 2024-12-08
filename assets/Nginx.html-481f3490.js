import{_ as s,X as a,Y as i,$ as e,a0 as l,a1 as d,a3 as r,F as t}from"./framework-abbf9d44.js";const o="/assets/2023-07-22-11-21-04-7dcd5067.png",c={},u=r(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><div class="hint-container warning"><p class="hint-container-title">请注意</p><p>本文内容可能已过时，请自行甄别。</p></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><blockquote><p>安装Nginx</p></blockquote><p><strong>nginx默认使用80端口，请确保80未被使用</strong></p><p>Nginx安装包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> http://www.nginx.org/download/nginx-<span class="token punctuation">[</span>version<span class="token punctuation">]</span>.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Nginx cache purge 模块(可选)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># wget http://labs.frickle.com/files/ngx_cache_purge-[version].tar.gz</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编译安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./configure <span class="token punctuation">\\</span>
<span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx-<span class="token punctuation">[</span>version<span class="token punctuation">]</span> <span class="token punctuation">\\</span>
--with-http_stub_status_module <span class="token punctuation">\\</span>
--with-http_ssl_module <span class="token punctuation">\\</span>
--with-http_realip_module <span class="token punctuation">\\</span> 
--add-module<span class="token operator">=</span><span class="token punctuation">..</span>/ngx_cache_purge-1.3

<span class="token comment"># make</span>
<span class="token comment"># make install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/local/nginx-<span class="token punctuation">[</span>version<span class="token punctuation">]</span>/sbin/nginx   <span class="token comment">#启动</span>
/usr/local/nginx-<span class="token punctuation">[</span>version<span class="token punctuation">]</span>/sbin/nginx <span class="token parameter variable">-t</span> <span class="token comment">#测试，检测配置</span>
/usr/local/nginx-<span class="token punctuation">[</span>version<span class="token punctuation">]</span>/sbin/nginx <span class="token parameter variable">-s</span> stop
/usr/local/nginx-<span class="token punctuation">[</span>version<span class="token punctuation">]</span>/sbin/nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开浏览器，访问nginx地址，出现welcome nginx则配置成功</p><h2 id="日志格式" tabindex="-1"><a class="header-anchor" href="#日志格式" aria-hidden="true">#</a> 日志格式</h2><p>日志变量(log_format)</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>$args                    #请求中的参数值
$query_string            #同 $args
$arg_NAME                #GET请求中NAME的值
$is_args                 #如果请求中有参数，值为&quot;?&quot;，否则为空字符串
$uri                     #请求中的当前URI(不带请求参数，参数位于$args)，可以不同于浏览器传递的$request_uri的值，它可以通过内部重定向，或者使用index指令进行修改，$uri不包含主机名，如&quot;/foo/bar.html&quot;。
$document_uri            #同 $uri
$document_root           #当前请求的文档根目录或别名
$host                    #优先级：HTTP请求行的主机名&gt;&quot;HOST&quot;请求头字段&gt;符合请求的服务器名.请求中的主机头字段，如果请求中的主机头不可用，则为服务器处理请求的服务器名称
$hostname                #主机名
$https                   #如果开启了SSL安全模式，值为&quot;on&quot;，否则为空字符串。
$binary_remote_addr      #客户端地址的二进制形式，固定长度为4个字节
$body_bytes_sent         #传输给客户端的字节数，响应头不计算在内；这个变量和Apache的mod_log_config模块中的&quot;%B&quot;参数保持兼容
$bytes_sent              #传输给客户端的字节数
$connection              #TCP连接的序列号
$connection_requests     #TCP连接当前的请求数量
$content_length          #&quot;Content-Length&quot; 请求头字段
$content_type            #&quot;Content-Type&quot; 请求头字段
$cookie_name             #cookie名称
$limit_rate              #用于设置响应的速度限制
$msec                    #当前的Unix时间戳
$nginx_version           #nginx版本
$pid                     #工作进程的PID
$pipe                    #如果请求来自管道通信，值为&quot;p&quot;，否则为&quot;.&quot;
$proxy_protocol_addr     #获取代理访问服务器的客户端地址，如果是直接访问，该值为空字符串
$realpath_root           #当前请求的文档根目录或别名的真实路径，会将所有符号连接转换为真实路径
$remote_addr             #客户端地址
$remote_port             #客户端端口
$remote_user             #用于HTTP基础认证服务的用户名
$request                 #代表客户端的请求地址
$request_body            #客户端的请求主体：此变量可在location中使用，将请求主体通过proxy_pass，fastcgi_pass，uwsgi_pass和scgi_pass传递给下一级的代理服务器
$request_body_file       #将客户端请求主体保存在临时文件中。文件处理结束后，此文件需删除。如果需要之一开启此功能，需要设置client_body_in_file_only。如果将次文件传 递给后端的代理服务器，需要禁用request body，即设置proxy_pass_request_body off，fastcgi_pass_request_body off，uwsgi_pass_request_body off，or scgi_pass_request_body off
$request_completion      #如果请求成功，值为&quot;OK&quot;，如果请求未完成或者请求不是一个范围请求的最后一部分，则为空
$request_filename        #当前连接请求的文件路径，由root或alias指令与URI请求生成
$request_length          #请求的长度 (包括请求的地址，http请求头和请求主体)
$request_method          #HTTP请求方法，通常为&quot;GET&quot;或&quot;POST&quot;
$request_time            #处理客户端请求使用的时间,单位为秒，精度毫秒； 从读入客户端的第一个字节开始，直到把最后一个字符发送给客户端后进行日志写入为止。
$request_uri             #这个变量等于包含一些客户端请求参数的原始URI，它无法修改，请查看$uri更改或重写URI，不包含主机名，例如：&quot;/cnphp/test.php?arg=freemouse&quot;
$scheme                  #请求使用的Web协议，&quot;http&quot; 或 &quot;https&quot;
$server_addr             #服务器端地址，需要注意的是：为了避免访问linux系统内核，应将ip地址提前设置在配置文件中
$server_name             #服务器名
$server_port             #服务器端口
$server_protocol         #服务器的HTTP版本，通常为 &quot;HTTP/1.0&quot; 或 &quot;HTTP/1.1&quot;
$status                  #HTTP响应代码
$time_iso8601            #服务器时间的ISO 8610格式
$time_local              #服务器时间（LOG Format 格式）
$cookie_NAME             #客户端请求Header头中的cookie变量，前缀&quot;$cookie_&quot;加上cookie名称的变量，该变量的值即为cookie名称的值
$http_NAME               #匹配任意请求头字段；变量名中的后半部分NAME可以替换成任意请求头字段，如在配置文件中需要获取http请求头：&quot;Accept-Language&quot;，$http_accept_language即可
$http_cookie
$http_host               #请求地址，即浏览器中你输入的地址（IP或域名）
$http_referer            #url跳转来源,用来记录从那个页面链接访问过来的
$http_user_agent         #用户终端浏览器等信息
$http_x_forwarded_for  #客户端地址(有反向代理时使用)
$sent_http_NAME          #可以设置任意http响应头字段；变量名中的后半部分NAME可以替换成任意响应头字段，如需要设置响应头Content-length，$sent_http_content_length即可
$sent_http_cache_control
$sent_http_connection
$sent_http_content_type
$sent_http_keep_alive
$sent_http_last_modified
$sent_http_location
$sent_http_transfer_encoding
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认日志格式</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot;;

#main为日志格式名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以根据自己的情况定义不同的log格式.然后在日志的 path后调用 access_log logs/it_access.log main;</p><p>当日志文件中记录的值为&quot;-&quot;时，表示为空 .</p><h3 id="自定义的格式" tabindex="-1"><a class="header-anchor" href="#自定义的格式" aria-hidden="true">#</a> 自定义的格式</h3><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>log_format logstash &#39;$remote_addr|$http_host|$request|$http_referer|$status |$http_user_agent|$request_time|$remote_user&#39;;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lua获取请求参数" tabindex="-1"><a class="header-anchor" href="#lua获取请求参数" aria-hidden="true">#</a> lua获取请求参数</h2><figure><img src="`+o+`" alt="conf" width="300" height="200" tabindex="0" loading="lazy"><figcaption>conf</figcaption></figure><blockquote><p>下载的所有包，放在了/opt/packages目录下</p></blockquote><h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc gcc-c++ glib* <span class="token function">make</span> autoconf openssl openssl-devel <span class="token punctuation">\\</span>
libxslt-devel gd gd-devel pcre pcre-devel  readline-devel  <span class="token function">wget</span> <span class="token function">curl</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下载安装包" tabindex="-1"><a class="header-anchor" href="#下载安装包" aria-hidden="true">#</a> 下载安装包</h3><h4 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">wget</span> http://nginx.org/download/nginx-1.12.2.tar.gz

<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> nginx-1.12.2.tar.gz

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ngx-devel-kit" tabindex="-1"><a class="header-anchor" href="#ngx-devel-kit" aria-hidden="true">#</a> ngx_devel_kit</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://github.com/simplresty/ngx_devel_kit/archive/v0.3.0.tar.gz
<span class="token function">tar</span> zxvf v0.3.0.tar.gz

<span class="token comment"># 放着，一会编译ngxin时导入。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="lua-nginx-module" tabindex="-1"><a class="header-anchor" href="#lua-nginx-module" aria-hidden="true">#</a> lua-nginx-module</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://github.com/openresty/lua-nginx-module/archive/v0.10.13.tar.gz
<span class="token function">tar</span> zxvf v0.10.13.tar.gz

<span class="token comment"># 放着，一会编译ngxin时导入。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装luajit" tabindex="-1"><a class="header-anchor" href="#安装luajit" aria-hidden="true">#</a> 安装LuaJIT</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> http://luajit.org/download/LuaJIT-2.0.5.tar.gz
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span>  LuaJIT-2.0.5.tar.gz
<span class="token builtin class-name">cd</span> LuaJIT-2.0.5
<span class="token function">make</span> <span class="token function">install</span> <span class="token assign-left variable">PREFIX</span><span class="token operator">=</span>/usr/local/LuaJIT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出 以下内容则成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">==</span><span class="token operator">==</span> Successfully installed LuaJIT <span class="token number">2.0</span>.5 to /usr/local/LuaJIT <span class="token operator">==</span><span class="token operator">==</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改环境变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">LUAJIT_LIB</span><span class="token operator">=</span>/usr/local/LuaJIT/lib
<span class="token builtin class-name">export</span> <span class="token assign-left variable">LUAJIT_INC</span><span class="token operator">=</span>/usr/local/LuaJIT/include/luajit-2.0

<span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编译安装nginx" tabindex="-1"><a class="header-anchor" href="#编译安装nginx" aria-hidden="true">#</a> 编译安装nginx</h3><p>查看编译参数, 避免之前的模块路径错误</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-V</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>新建用户，不新建，configure时取消参数--user=nginx</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">useradd</span> <span class="token parameter variable">-M</span> <span class="token parameter variable">-s</span> /sbin/nologin nginx 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编译安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./configure <span class="token parameter variable">--user</span><span class="token operator">=</span>nginx <span class="token parameter variable">--group</span><span class="token operator">=</span>nginx <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx --with-file-aio <span class="token punctuation">\\</span>
--with-http_ssl_module --with-http_realip_module --with-http_addition_module <span class="token punctuation">\\</span>
--with-http_xslt_module --with-http_image_filter_module --with-http_sub_module <span class="token punctuation">\\</span>
--with-http_dav_module --with-http_flv_module --with-http_mp4_module <span class="token punctuation">\\</span>
--with-http_gunzip_module --with-http_gzip_static_module <span class="token punctuation">\\</span>
--with-http_auth_request_module --with-http_random_index_module <span class="token punctuation">\\</span>
--with-http_secure_link_module --with-http_degradation_module <span class="token punctuation">\\</span>
--with-http_stub_status_module <span class="token punctuation">\\</span>
--with-ld-opt<span class="token operator">=</span>-Wl,-rpath,/usr/local/LuaJIT/lib <span class="token punctuation">\\</span>
--add-module<span class="token operator">=</span>/opt/packages/ngx_devel_kit-0.3.0 <span class="token punctuation">\\</span>
--add-module<span class="token operator">=</span>/opt/packages/lua-nginx-module-0.10.13
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> <span class="token parameter variable">-j2</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="测试lua" tabindex="-1"><a class="header-anchor" href="#测试lua" aria-hidden="true">#</a> 测试lua</h3><p>修改<code>nginx.conf</code> 的<code>server</code> 添加如下</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>location /lua { 
    default_type &#39;text/plain&#39;; 
    content_by_lua &#39;ngx.say(&quot;lua install success&quot;)&#39;; 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重载nginx</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>请求</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> http://127.0.0.1/lua

<span class="token comment"># lua install success </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-cjson" tabindex="-1"><a class="header-anchor" href="#安装-cjson" aria-hidden="true">#</a> 安装 cjson</h3><p><mark>如果需要lua解析json，可安装此模块</mark></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> http://www.kyne.com.au/~mark/software/download/lua-cjson-2.1.0.tar.gz

<span class="token function">tar</span> xvf lua-cjson-2.1.0.ta.gz

<span class="token builtin class-name">cd</span> lua-cjson-2.1.0

<span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如若报错如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cc <span class="token parameter variable">-c</span> <span class="token parameter variable">-O3</span> <span class="token parameter variable">-Wall</span> <span class="token parameter variable">-pedantic</span> <span class="token parameter variable">-DNDEBUG</span>  -I/usr/local/include <span class="token parameter variable">-fpic</span> <span class="token parameter variable">-o</span> lua_cjson.o lua_cjson.c
lua_cjson.c:43:17: 致命错误：lua.h：没有那个文件或目录
 <span class="token comment">#include &lt;lua.h&gt;</span>
                 ^
编译中断。
make: *** <span class="token punctuation">[</span>lua_cjson.o<span class="token punctuation">]</span> 错误 <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改<code>Makefile</code> 这两处</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PREFIX <span class="token operator">=</span>            /usr/local/LuaJIT
LUA_INCLUDE_DIR <span class="token operator">=</span>   <span class="token variable"><span class="token variable">$(</span>PREFIX<span class="token variable">)</span></span>/include/luajit-2.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>复制<code>cjson.so</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">cp</span> cjson.so /usr/local/LuaJIT/lib/lua/5.1/
 <span class="token function">chmod</span> <span class="token number">755</span> /usr/local/LuaJIT/lib/lua/5.1/cjson.so 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用lua-去rewrite路由" tabindex="-1"><a class="header-anchor" href="#使用lua-去rewrite路由" aria-hidden="true">#</a> 使用lua 去rewrite路由</h3><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>location /ztest {
	# 请求体的size大于nginx配置里的client_body_buffer_size
	# 则会导致请求体被缓冲到磁盘临时文件里，client_body_buffer_size默认是8k或者16k
	# 如果考虑性能，可以使用ngx.req.get_body_file()，见后续
	
	client_max_body_size  100m ;
    client_body_buffer_size  100m ;
    set $proxy &#39;&#39;;
        rewrite_by_lua_block {
            local request_method = ngx.var.request_method
            if request_method == &quot;GET&quot; then
                local arg = ngx.req.get_uri_args()[&quot;proxy&quot;] or 0
                ngx.var.proxy = arg
            elseif request_method == &quot;POST&quot; then
                ngx.req.read_body()
                local jkdata = ngx.req.get_body_data()
                --ngx.print(jkdata)
                if jkdata then
                	--如果传进来的是 json 通过这种方式解析，
                    --cjson = require &quot;cjson&quot;
                    --jkval = cjson.decode(jkdata)
                    --ngx.var.proxy = valp[&quot;proxy&quot;]
                    # 这里测试下，使用正则去匹配了IP
                    ngx.var.proxy = jkdata:match(&quot;(%d+%.%d+%.%d+%.%d+)&quot;)
                    --ngx.var.proxy = jkval[&quot;proxy&quot;]
                end
            end
        }
    include     /usr/local/nginx/conf/uwsgi_params;
    proxy_pass  $proxy:18001;
    access_log logs/aaa_access.log;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ngx.req.get_body_file()</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>ngx.req.read_body()
body_data = ngx.req.get_body_data()
if not body_data then
    local datafile = ngx.req.get_body_file()
    if not datafile then
        error_code = 1
        error_msg = &quot;no request body found&quot;
    else
        local fh, err = io.open(datafile, &quot;r&quot;)
        if not fh then
            error_code = 2
            error_msg = &quot;failed to open &quot; .. tostring(datafile) .. &quot;for reading: &quot; .. tostring(err)
        else
            fh:seek(&quot;set&quot;)
            body_data = fh:read(&quot;*a&quot;)
            fh:close()
            if body_data == &quot;&quot; then
                error_code = 3
                error_msg = &quot;request body is empty&quot;
            end
        end
    end
 end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="相关包" tabindex="-1"><a class="header-anchor" href="#相关包" aria-hidden="true">#</a> 相关包</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>链接: https://pan.baidu.com/s/1nq9pOQO7uj88DwfHaT0EDg 提取码: p3fh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="nginx负载与反代" tabindex="-1"><a class="header-anchor" href="#nginx负载与反代" aria-hidden="true">#</a> nginx负载与反代</h2><blockquote><p>nginx 负载</p></blockquote><p>新建配置文件blance-test.conf</p><p><strong>在nginx.conf 中include blance-test.conf</strong></p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>upstream blance-test {
    server 192.168.1.11:80;
    server 192.168.1.22:80;
}
server
{
    listen 80;
    server_name www.example.com; 
    location / {
        proxy_redirect off;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; 
        proxy_pass http://blance-test;
    }
    access_log logs/blance-test_access.log;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>⚠️ <code>proxy_set_header....</code></p><p>重点看下proxy_set_header X-Forwarded-For,当使用了代理时，web服务器无法取得真实IP，为了避免这个情况，代理服务器通常会增加一个叫做x_forwarded_for的头信息，连接它的客户端IP（即客户端IP）加到这个头信息里，这样就能保证网站的web服务器能获取到真实IP</p><p><code>$host</code>: 请求中的主机头(Host)字段，如果请求中的主机头不可用或者空，则为处理请求的server名称(处理请求的server的server_name的值)。小写，不含端口。</p><p><code>$remote_addr;</code> 客户端的IP地址（中间无代理则是真实客户端IP，有代理则是代理IP）</p><p><code>$proxy_add_x_forwarded_for;</code> 就是<code>$http_x_forwarded_for</code>加上<code>$remote_addr </code></p><p>官方解释</p><blockquote><p>$proxy_add_x_forwarded_for</p><p>the “X-Forwarded-For” client request header field with the $remote_addr variable appended to it, separated by a comma. If the “X-Forwarded-For” field is not present in the client request header, the $proxy_add_x_forwarded_for variable is equal to the $remote_addr variable.</p></blockquote><blockquote><p>nginx 反向代理</p></blockquote><p><em><strong>可选配置，与http同级</strong></em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   client_max_body_size 50m; #缓冲区代理缓冲用户端请求的最大字节数
    client_body_buffer_size 256k;
    client_header_timeout 3m;
    client_body_timeout 3m;
    send_timeout 3m;
    proxy_connect_timeout 300s; #nginx跟后端服务器连接超时时间(代理连接超时)
    proxy_read_timeout 300s; #连接成功后，后端服务器响应时间(代理接收超时)
    proxy_send_timeout 300s;
    proxy_buffer_size 64k; #设置代理服务器（nginx）保存用户头信息的缓冲区大小
    proxy_buffers 4 32k; #proxy_buffers缓冲区，网页平均在32k以下的话，这样设置
    proxy_busy_buffers_size 64k; #高负荷下缓冲大小（proxy_buffers*2）
    proxy_temp_file_write_size 64k; #设定缓存文件夹大小，大于这个值，将从upstream服务器传递请求，而不缓冲到磁盘
    proxy_ignore_client_abort on; #不允许代理端主动关闭连接

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建配置文件reverse-proxy.conf<em><strong>然后在nginx.conf 中include reverse-proxy.conf</strong></em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    server {
        listen          7001;
        server_name     192.168.1.202:7001;
        charset utf-8;
        location /console {
           # proxy_set_header Host $host:$proxy_port;
            proxy_set_header Host $http_host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; 
            proxy_pass http://192.168.1.11:7001;
        }
        access_log logs/192.168.1.11:7001_access.log;
    }
    server {
        listen          8001;
        server_name     192.168.1.202:8001;
        charset utf-8;
        location / {
            proxy_set_header Host $host:$proxy_port;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; 
            proxy_pass http://192.168.1.11:8001;
        }
        access_log logs/192.168.1.11:8001_access.log;
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里要说明下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server_name 
#主要用于配置基于名称的虚拟主机，可匹配正则，如果没有域名可填写IP，不填或随便填写一个
#nginx 根据 server_name 匹配 HTTP 请求头的 host，去决定使用那个 server
#如果都没有匹配则使用默认的。如果没有默认就是第一个server

$http_host 和 $host的区别

$host 上边描述过，主机头(Host)字段，如果不可用或空就是server_name的值。
$http_host  可以理解请求地址，即浏览器中你输入的地址（IP或域名）
那么这两个使用哪个好一些呢？
如果Host请求头部没有出现在请求头中，则$http_host值为空，但是$host值为主域名，
一般而言，会用$host代替$http_host，避免http请求中丢失Host头部的情况下Host不被重写。
如果对端口又要求可加上 :$proxy_port
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,90),v={href:"http://nginx.org/en/docs/http/ngx_http_proxy_module.html#.24proxy_add_x_forwarded_for",target:"_blank",rel:"noopener noreferrer"},p=e("blockquote",null,[e("p",null,"Nginx访问日志 IP统计 awk '{print $1}' access.log | sort | uniq -c|sort -n")],-1);function m(b,h){const n=t("ExternalLinkIcon");return a(),i("div",null,[u,e("p",null,[e("a",v,[l("官方关于nginx 代理模块的文章"),d(n)])]),p])}const g=s(c,[["render",m],["__file","Nginx.html.vue"]]);export{g as default};
