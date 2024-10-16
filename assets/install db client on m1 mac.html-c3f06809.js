import{_ as e,X as i,Y as l,$ as s,a0 as t,a1 as p,a3 as n,F as o}from"./framework-abbf9d44.js";const c={},r=n(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> mysql</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> <span class="token assign-left variable">mysqlclient</span><span class="token operator">==</span><span class="token number">1.4</span>.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装 mysqlclient 会出现下面的问题：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql_config not found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>若不需要安装mysql服务，直接安装客户端即可</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> mysql-client pkg-config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完成后，检查命令是否可执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">which</span> mysql_config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>箬笠报错如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Exception: Can not <span class="token function">find</span> valid pkg-config name.
      Specify MYSQLCLIENT_CFLAGS and MYSQLCLIENT_LDFLAGS <span class="token function">env</span> vars manually
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改环境变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">MYSQLCLIENT_CFLAGS</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mysql_config <span class="token parameter variable">--cflags</span><span class="token variable">)</span></span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MYSQLCLIENT_LDFLAGS</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mysql_config <span class="token parameter variable">--libs</span><span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此时继续安装 mysqlclient</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> <span class="token assign-left variable">mysqlclient</span><span class="token operator">==</span><span class="token number">1.4</span>.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>若报错如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    ld: library not found <span class="token keyword">for</span> <span class="token parameter variable">-lzstd</span>
    clang: error: linker <span class="token builtin class-name">command</span> failed with <span class="token builtin class-name">exit</span> code <span class="token number">1</span> <span class="token punctuation">(</span>use <span class="token parameter variable">-v</span> to see invocation<span class="token punctuation">)</span>
    error: <span class="token builtin class-name">command</span> <span class="token string">&#39;/usr/bin/gcc&#39;</span> failed with <span class="token builtin class-name">exit</span> code <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装zstd</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> zstd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改环境变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">CFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-I<span class="token variable"><span class="token variable">$(</span>brew <span class="token parameter variable">--prefix</span><span class="token variable">)</span></span>/include&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">LDFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-L<span class="token variable"><span class="token variable">$(</span>brew <span class="token parameter variable">--prefix</span><span class="token variable">)</span></span>/lib&quot;</span>

<span class="token comment"># 若不生效，则使用</span>

<span class="token builtin class-name">export</span> <span class="token assign-left variable">LDFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-L/opt/homebrew/Cellar/zstd/1.5.6/lib&quot;</span>
<span class="token comment">#具体版本以安装的版本为准 </span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次安装即可</p><h2 id="postgre" tabindex="-1"><a class="header-anchor" href="#postgre" aria-hidden="true">#</a> postgre</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  × python setup.py egg_info did not run successfully.
  │ <span class="token builtin class-name">exit</span> code: <span class="token number">1</span>
  ╰─<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">23</span> lines of output<span class="token punctuation">]</span>
      running egg_info
      creating /private/var/folders/bp/jkzx65zj6sq1xj6bb5bkt03w0000gn/T/pip-pip-egg-info-37d85hev/psycopg2.egg-info
      writing /private/var/folders/bp/jkzx65zj6sq1xj6bb5bkt03w0000gn/T/pip-pip-egg-info-37d85hev/psycopg2.egg-info/PKG-INFO
      writing dependency_links to /private/var/folders/bp/jkzx65zj6sq1xj6bb5bkt03w0000gn/T/pip-pip-egg-info-37d85hev/psycopg2.egg-info/dependency_links.txt
      writing top-level names to /private/var/folders/bp/jkzx65zj6sq1xj6bb5bkt03w0000gn/T/pip-pip-egg-info-37d85hev/psycopg2.egg-info/top_level.txt
      writing manifest <span class="token function">file</span> <span class="token string">&#39;/private/var/folders/bp/jkzx65zj6sq1xj6bb5bkt03w0000gn/T/pip-pip-egg-info-37d85hev/psycopg2.egg-info/SOURCES.txt&#39;</span>
      
      Error: pg_config executable not found.
      
      pg_config is required to build psycopg2 from source.  Please <span class="token function">add</span> the directory
      containing pg_config to the <span class="token environment constant">$PATH</span> or specify the full executable path with the
      option:
      
          python setup.py build_ext --pg-config /path/to/pg_config build <span class="token punctuation">..</span>.
      
      or with the pg_config option <span class="token keyword">in</span> <span class="token string">&#39;setup.cfg&#39;</span><span class="token builtin class-name">.</span>
      
      If you prefer to avoid building psycopg2 from source, please <span class="token function">install</span> the PyPI
      <span class="token string">&#39;psycopg2-binary&#39;</span> package instead.
      
      For further information please check the <span class="token string">&#39;doc/src/install.rst&#39;</span> <span class="token function">file</span> <span class="token punctuation">(</span>also at
      <span class="token operator">&lt;</span>https://www.psycopg.org/docs/install.html<span class="token operator">&gt;</span><span class="token punctuation">)</span>.
      
      <span class="token punctuation">[</span>end of output<span class="token punctuation">]</span>
  
  note: This error originates from a subprocess, and is likely not a problem with pip.
error: metadata-generation-failed

× Encountered error <span class="token keyword">while</span> generating package metadata.
╰─<span class="token operator">&gt;</span> See above <span class="token keyword">for</span> output.

note: This is an issue with the package mentioned above, not pip.
hint: See above <span class="token keyword">for</span> details.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),d={href:"https://stackoverflow.com/questions/66888087/cannot-install-psycopg2-with-pip3-on-m1-mac",target:"_blank",rel:"noopener noreferrer"},v=n(`<p>安装pgsql</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> brew <span class="token function">install</span> postgresql@16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>导入环境变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;/opt/homebrew/opt/postgresql@16/bin:<span class="token environment constant">$PATH</span>&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">LDFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-L/opt/homebrew/opt/postgresql@16/lib&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CPPFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-I/opt/homebrew/opt/postgresql@16/include&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function u(b,m){const a=o("ExternalLinkIcon");return i(),l("div",null,[r,s("p",null,[s("a",d,[t("https://stackoverflow.com/questions/66888087/cannot-install-psycopg2-with-pip3-on-m1-mac"),p(a)])]),v])}const k=e(c,[["render",u],["__file","install db client on m1 mac.html.vue"]]);export{k as default};
