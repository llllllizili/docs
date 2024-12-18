import{_ as s,c as a,o as n,f as i}from"./app-BfCDUtKQ.js";const l={},o=i(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>mysql</span></a></h2><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">pip</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#98C379;--shiki-dark:#98C379;"> mysqlclient==</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1.4.4</span></span></code></pre></div><p>安装 mysqlclient 会出现下面的问题：</p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mysql_config</span><span style="color:#98C379;--shiki-dark:#98C379;"> not</span><span style="color:#98C379;--shiki-dark:#98C379;"> found</span></span></code></pre></div><p>若不需要安装mysql服务，直接安装客户端即可</p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">brew</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#98C379;--shiki-dark:#98C379;"> mysql-client</span><span style="color:#98C379;--shiki-dark:#98C379;"> pkg-config</span></span></code></pre></div><p>安装完成后，检查命令是否可执行</p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">which</span><span style="color:#98C379;--shiki-dark:#98C379;"> mysql_config</span></span></code></pre></div><p>箬笠报错如下</p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Exception:</span><span style="color:#98C379;--shiki-dark:#98C379;"> Can</span><span style="color:#98C379;--shiki-dark:#98C379;"> not</span><span style="color:#98C379;--shiki-dark:#98C379;"> find</span><span style="color:#98C379;--shiki-dark:#98C379;"> valid</span><span style="color:#98C379;--shiki-dark:#98C379;"> pkg-config</span><span style="color:#98C379;--shiki-dark:#98C379;"> name.</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      Specify</span><span style="color:#98C379;--shiki-dark:#98C379;"> MYSQLCLIENT_CFLAGS</span><span style="color:#98C379;--shiki-dark:#98C379;"> and</span><span style="color:#98C379;--shiki-dark:#98C379;"> MYSQLCLIENT_LDFLAGS</span><span style="color:#98C379;--shiki-dark:#98C379;"> env</span><span style="color:#98C379;--shiki-dark:#98C379;"> vars</span><span style="color:#98C379;--shiki-dark:#98C379;"> manually</span></span></code></pre></div><p>修改环境变量</p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> MYSQLCLIENT_CFLAGS</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">$(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mysql_config</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --cflags</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> MYSQLCLIENT_LDFLAGS</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">$(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mysql_config</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --libs</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div><p>此时继续安装 mysqlclient</p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">pip</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#98C379;--shiki-dark:#98C379;"> mysqlclient==</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1.4.4</span></span></code></pre></div><p>若报错如下</p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    ld:</span><span style="color:#98C379;--shiki-dark:#98C379;"> library</span><span style="color:#98C379;--shiki-dark:#98C379;"> not</span><span style="color:#98C379;--shiki-dark:#98C379;"> found</span><span style="color:#98C379;--shiki-dark:#98C379;"> for</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -lzstd</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    clang:</span><span style="color:#98C379;--shiki-dark:#98C379;"> error:</span><span style="color:#98C379;--shiki-dark:#98C379;"> linker</span><span style="color:#98C379;--shiki-dark:#98C379;"> command</span><span style="color:#98C379;--shiki-dark:#98C379;"> failed</span><span style="color:#98C379;--shiki-dark:#98C379;"> with</span><span style="color:#98C379;--shiki-dark:#98C379;"> exit</span><span style="color:#98C379;--shiki-dark:#98C379;"> code</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (use </span><span style="color:#D19A66;--shiki-dark:#D19A66;">-v</span><span style="color:#98C379;--shiki-dark:#98C379;"> to</span><span style="color:#98C379;--shiki-dark:#98C379;"> see</span><span style="color:#98C379;--shiki-dark:#98C379;"> invocation</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    error:</span><span style="color:#98C379;--shiki-dark:#98C379;"> command</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;/usr/bin/gcc&#39;</span><span style="color:#98C379;--shiki-dark:#98C379;"> failed</span><span style="color:#98C379;--shiki-dark:#98C379;"> with</span><span style="color:#98C379;--shiki-dark:#98C379;"> exit</span><span style="color:#98C379;--shiki-dark:#98C379;"> code</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span></span></code></pre></div><p>安装zstd</p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">brew</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#98C379;--shiki-dark:#98C379;"> zstd</span></span></code></pre></div><p>修改环境变量</p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> CFLAGS</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;-I$(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">brew</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --prefix</span><span style="color:#98C379;--shiki-dark:#98C379;">)/include&quot;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> LDFLAGS</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;-L$(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">brew</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --prefix</span><span style="color:#98C379;--shiki-dark:#98C379;">)/lib&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 若不生效，则使用</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> LDFLAGS</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;-L/opt/homebrew/Cellar/zstd/1.5.6/lib&quot;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#具体版本以安装的版本为准</span></span></code></pre></div><p>再次安装即可</p><h2 id="postgre" tabindex="-1"><a class="header-anchor" href="#postgre"><span>postgre</span></a></h2><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  ×</span><span style="color:#98C379;--shiki-dark:#98C379;"> python</span><span style="color:#98C379;--shiki-dark:#98C379;"> setup.py</span><span style="color:#98C379;--shiki-dark:#98C379;"> egg_info</span><span style="color:#98C379;--shiki-dark:#98C379;"> did</span><span style="color:#98C379;--shiki-dark:#98C379;"> not</span><span style="color:#98C379;--shiki-dark:#98C379;"> run</span><span style="color:#98C379;--shiki-dark:#98C379;"> successfully.</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  │</span><span style="color:#98C379;--shiki-dark:#98C379;"> exit</span><span style="color:#98C379;--shiki-dark:#98C379;"> code:</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  ╰─</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; [23 </span><span style="color:#98C379;--shiki-dark:#98C379;">lines</span><span style="color:#98C379;--shiki-dark:#98C379;"> of</span><span style="color:#98C379;--shiki-dark:#98C379;"> output]</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      running</span><span style="color:#98C379;--shiki-dark:#98C379;"> egg_info</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      creating</span><span style="color:#98C379;--shiki-dark:#98C379;"> /private/var/folders/bp/jkzx65zj6sq1xj6bb5bkt03w0000gn/T/pip-pip-egg-info-37d85hev/psycopg2.egg-info</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      writing</span><span style="color:#98C379;--shiki-dark:#98C379;"> /private/var/folders/bp/jkzx65zj6sq1xj6bb5bkt03w0000gn/T/pip-pip-egg-info-37d85hev/psycopg2.egg-info/PKG-INFO</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      writing</span><span style="color:#98C379;--shiki-dark:#98C379;"> dependency_links</span><span style="color:#98C379;--shiki-dark:#98C379;"> to</span><span style="color:#98C379;--shiki-dark:#98C379;"> /private/var/folders/bp/jkzx65zj6sq1xj6bb5bkt03w0000gn/T/pip-pip-egg-info-37d85hev/psycopg2.egg-info/dependency_links.txt</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      writing</span><span style="color:#98C379;--shiki-dark:#98C379;"> top-level</span><span style="color:#98C379;--shiki-dark:#98C379;"> names</span><span style="color:#98C379;--shiki-dark:#98C379;"> to</span><span style="color:#98C379;--shiki-dark:#98C379;"> /private/var/folders/bp/jkzx65zj6sq1xj6bb5bkt03w0000gn/T/pip-pip-egg-info-37d85hev/psycopg2.egg-info/top_level.txt</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      writing</span><span style="color:#98C379;--shiki-dark:#98C379;"> manifest</span><span style="color:#98C379;--shiki-dark:#98C379;"> file</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;/private/var/folders/bp/jkzx65zj6sq1xj6bb5bkt03w0000gn/T/pip-pip-egg-info-37d85hev/psycopg2.egg-info/SOURCES.txt&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      </span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      Error:</span><span style="color:#98C379;--shiki-dark:#98C379;"> pg_config</span><span style="color:#98C379;--shiki-dark:#98C379;"> executable</span><span style="color:#98C379;--shiki-dark:#98C379;"> not</span><span style="color:#98C379;--shiki-dark:#98C379;"> found.</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      </span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      pg_config</span><span style="color:#98C379;--shiki-dark:#98C379;"> is</span><span style="color:#98C379;--shiki-dark:#98C379;"> required</span><span style="color:#98C379;--shiki-dark:#98C379;"> to</span><span style="color:#98C379;--shiki-dark:#98C379;"> build</span><span style="color:#98C379;--shiki-dark:#98C379;"> psycopg2</span><span style="color:#98C379;--shiki-dark:#98C379;"> from</span><span style="color:#98C379;--shiki-dark:#98C379;"> source.</span><span style="color:#98C379;--shiki-dark:#98C379;">  Please</span><span style="color:#98C379;--shiki-dark:#98C379;"> add</span><span style="color:#98C379;--shiki-dark:#98C379;"> the</span><span style="color:#98C379;--shiki-dark:#98C379;"> directory</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      containing</span><span style="color:#98C379;--shiki-dark:#98C379;"> pg_config</span><span style="color:#98C379;--shiki-dark:#98C379;"> to</span><span style="color:#98C379;--shiki-dark:#98C379;"> the</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> $PATH</span><span style="color:#98C379;--shiki-dark:#98C379;"> or</span><span style="color:#98C379;--shiki-dark:#98C379;"> specify</span><span style="color:#98C379;--shiki-dark:#98C379;"> the</span><span style="color:#98C379;--shiki-dark:#98C379;"> full</span><span style="color:#98C379;--shiki-dark:#98C379;"> executable</span><span style="color:#98C379;--shiki-dark:#98C379;"> path</span><span style="color:#98C379;--shiki-dark:#98C379;"> with</span><span style="color:#98C379;--shiki-dark:#98C379;"> the</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      option:</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      </span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">          python</span><span style="color:#98C379;--shiki-dark:#98C379;"> setup.py</span><span style="color:#98C379;--shiki-dark:#98C379;"> build_ext</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --pg-config</span><span style="color:#98C379;--shiki-dark:#98C379;"> /path/to/pg_config</span><span style="color:#98C379;--shiki-dark:#98C379;"> build</span><span style="color:#98C379;--shiki-dark:#98C379;"> ...</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      </span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      or</span><span style="color:#98C379;--shiki-dark:#98C379;"> with</span><span style="color:#98C379;--shiki-dark:#98C379;"> the</span><span style="color:#98C379;--shiki-dark:#98C379;"> pg_config</span><span style="color:#98C379;--shiki-dark:#98C379;"> option</span><span style="color:#98C379;--shiki-dark:#98C379;"> in</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;setup.cfg&#39;.</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      </span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      If</span><span style="color:#98C379;--shiki-dark:#98C379;"> you</span><span style="color:#98C379;--shiki-dark:#98C379;"> prefer</span><span style="color:#98C379;--shiki-dark:#98C379;"> to</span><span style="color:#98C379;--shiki-dark:#98C379;"> avoid</span><span style="color:#98C379;--shiki-dark:#98C379;"> building</span><span style="color:#98C379;--shiki-dark:#98C379;"> psycopg2</span><span style="color:#98C379;--shiki-dark:#98C379;"> from</span><span style="color:#98C379;--shiki-dark:#98C379;"> source,</span><span style="color:#98C379;--shiki-dark:#98C379;"> please</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#98C379;--shiki-dark:#98C379;"> the</span><span style="color:#98C379;--shiki-dark:#98C379;"> PyPI</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      &#39;psycopg2-binary&#39;</span><span style="color:#98C379;--shiki-dark:#98C379;"> package</span><span style="color:#98C379;--shiki-dark:#98C379;"> instead.</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      </span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      For</span><span style="color:#98C379;--shiki-dark:#98C379;"> further</span><span style="color:#98C379;--shiki-dark:#98C379;"> information</span><span style="color:#98C379;--shiki-dark:#98C379;"> please</span><span style="color:#98C379;--shiki-dark:#98C379;"> check</span><span style="color:#98C379;--shiki-dark:#98C379;"> the</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;doc/src/install.rst&#39;</span><span style="color:#98C379;--shiki-dark:#98C379;"> file</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (also </span><span style="color:#98C379;--shiki-dark:#98C379;">at</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      &lt;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">https://www.psycopg.org/docs/install.html</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;).</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      [end of output]</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  note:</span><span style="color:#98C379;--shiki-dark:#98C379;"> This</span><span style="color:#98C379;--shiki-dark:#98C379;"> error</span><span style="color:#98C379;--shiki-dark:#98C379;"> originates</span><span style="color:#98C379;--shiki-dark:#98C379;"> from</span><span style="color:#98C379;--shiki-dark:#98C379;"> a</span><span style="color:#98C379;--shiki-dark:#98C379;"> subprocess,</span><span style="color:#98C379;--shiki-dark:#98C379;"> and</span><span style="color:#98C379;--shiki-dark:#98C379;"> is</span><span style="color:#98C379;--shiki-dark:#98C379;"> likely</span><span style="color:#98C379;--shiki-dark:#98C379;"> not</span><span style="color:#98C379;--shiki-dark:#98C379;"> a</span><span style="color:#98C379;--shiki-dark:#98C379;"> problem</span><span style="color:#98C379;--shiki-dark:#98C379;"> with</span><span style="color:#98C379;--shiki-dark:#98C379;"> pip.</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">error:</span><span style="color:#98C379;--shiki-dark:#98C379;"> metadata-generation-failed</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">×</span><span style="color:#98C379;--shiki-dark:#98C379;"> Encountered</span><span style="color:#98C379;--shiki-dark:#98C379;"> error</span><span style="color:#98C379;--shiki-dark:#98C379;"> while</span><span style="color:#98C379;--shiki-dark:#98C379;"> generating</span><span style="color:#98C379;--shiki-dark:#98C379;"> package</span><span style="color:#98C379;--shiki-dark:#98C379;"> metadata.</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">╰─</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">See</span><span style="color:#98C379;--shiki-dark:#98C379;"> above</span><span style="color:#98C379;--shiki-dark:#98C379;"> for</span><span style="color:#98C379;--shiki-dark:#98C379;"> output.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">note:</span><span style="color:#98C379;--shiki-dark:#98C379;"> This</span><span style="color:#98C379;--shiki-dark:#98C379;"> is</span><span style="color:#98C379;--shiki-dark:#98C379;"> an</span><span style="color:#98C379;--shiki-dark:#98C379;"> issue</span><span style="color:#98C379;--shiki-dark:#98C379;"> with</span><span style="color:#98C379;--shiki-dark:#98C379;"> the</span><span style="color:#98C379;--shiki-dark:#98C379;"> package</span><span style="color:#98C379;--shiki-dark:#98C379;"> mentioned</span><span style="color:#98C379;--shiki-dark:#98C379;"> above,</span><span style="color:#98C379;--shiki-dark:#98C379;"> not</span><span style="color:#98C379;--shiki-dark:#98C379;"> pip.</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">hint:</span><span style="color:#98C379;--shiki-dark:#98C379;"> See</span><span style="color:#98C379;--shiki-dark:#98C379;"> above</span><span style="color:#98C379;--shiki-dark:#98C379;"> for</span><span style="color:#98C379;--shiki-dark:#98C379;"> details.</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://stackoverflow.com/questions/66888087/cannot-install-psycopg2-with-pip3-on-m1-mac" target="_blank" rel="noopener noreferrer">https://stackoverflow.com/questions/66888087/cannot-install-psycopg2-with-pip3-on-m1-mac</a></p><p>安装pgsql</p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> brew</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#98C379;--shiki-dark:#98C379;"> postgresql@16</span></span></code></pre></div><p>导入环境变量</p><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> PATH</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;/opt/homebrew/opt/postgresql@16/bin:</span><span style="color:#E06C75;--shiki-dark:#E06C75;">$PATH</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> LDFLAGS</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;-L/opt/homebrew/opt/postgresql@16/lib&quot;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> CPPFLAGS</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;-I/opt/homebrew/opt/postgresql@16/include&quot;</span></span></code></pre></div>`,29),e=[o];function p(r,t){return n(),a("div",null,e)}const c=s(l,[["render",p],["__file","install db client on m1 mac.html.vue"]]),d=JSON.parse(`{"path":"/coder/faq/install%20db%20client%20on%20m1%20mac.html","title":"db client (M1)","lang":"zh-CN","frontmatter":{"title":"db client (M1)","order":99,"index":true,"article":true,"category":["数据库"],"tag":["MySQL"],"description":"mysql 安装 mysqlclient 会出现下面的问题： 若不需要安装mysql服务，直接安装客户端即可 安装完成后，检查命令是否可执行 箬笠报错如下 修改环境变量 此时继续安装 mysqlclient 若报错如下 安装zstd 修改环境变量 再次安装即可 postgre https://stackoverflow.com/questions/66...","head":[["meta",{"property":"og:url","content":"https://docs.lizili.online/coder/faq/install%20db%20client%20on%20m1%20mac.html"}],["meta",{"property":"og:site_name","content":"lzz's Blog"}],["meta",{"property":"og:title","content":"db client (M1)"}],["meta",{"property":"og:description","content":"mysql 安装 mysqlclient 会出现下面的问题： 若不需要安装mysql服务，直接安装客户端即可 安装完成后，检查命令是否可执行 箬笠报错如下 修改环境变量 此时继续安装 mysqlclient 若报错如下 安装zstd 修改环境变量 再次安装即可 postgre https://stackoverflow.com/questions/66..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-10T04:16:31.000Z"}],["meta",{"property":"article:author","content":"z"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:modified_time","content":"2024-11-10T04:16:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"db client (M1)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-10T04:16:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"z\\",\\"url\\":\\"https://docs.lizili.online\\"}]}"]]},"headers":[{"level":2,"title":"mysql","slug":"mysql","link":"#mysql","children":[]},{"level":2,"title":"postgre","slug":"postgre","link":"#postgre","children":[]}],"git":{"createdTime":1716553790000,"updatedTime":1731212191000,"contributors":[{"name":"lizili","email":"cn.zili.lee@outlook.com","commits":1}]},"readingTime":{"minutes":1.49,"words":448},"filePathRelative":"coder/faq/install db client on m1 mac.md","localizedDate":"2024年5月24日","excerpt":"\\n<h2>mysql</h2>\\n<div class=\\"language-shell\\" data-ext=\\"shell\\" data-title=\\"shell\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">pip</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> install</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> mysqlclient==</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">1.4.4</span></span></code></pre>\\n</div>","autoDesc":true}`);export{c as comp,d as data};