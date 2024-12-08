import{_ as s,X as n,Y as a,a3 as e}from"./framework-abbf9d44.js";const t="/assets/2024-05-13-20-30-58-f719ba75.png",i="/assets/2024-05-14-18-45-27-041153f3.png",p="/assets/2024-05-14-20-17-05-7b906ec5.png",l={},c=e(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h2 id="常用类型和操作" tabindex="-1"><a class="header-anchor" href="#常用类型和操作" aria-hidden="true">#</a> 常用类型和操作</h2><h3 id="认证登录" tabindex="-1"><a class="header-anchor" href="#认证登录" aria-hidden="true">#</a> 认证登录</h3><p>客户端工具redis-di登录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-cli
redis-cli <span class="token parameter variable">-h</span> redisd <span class="token function">ip</span>
redis-cli <span class="token parameter variable">-h</span> xxx <span class="token parameter variable">-p</span> xxx

<span class="token comment"># redis的认证</span>
<span class="token operator">&gt;</span>auth password

redis-cli <span class="token parameter variable">-a</span> password

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h3><p>常见的有字符串、列表、集合、等</p><h4 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>›set name aaa

›keys *

<span class="token operator">&gt;</span>get name

<span class="token operator">&gt;</span>set name bbb

<span class="token operator">&gt;</span> del name

<span class="token comment">#增加key并赋值 #混示所有的key #获取key的佶 ＃重新绘key赋佶 #别除key</span>

命令不区分大小写：<span class="token operator">&gt;</span>GET name

key区分大小写：<span class="token operator">&gt;</span>get Name

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> rpush name aaa  <span class="token comment"># rpush 依次在右边添加，lpush反之</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> rpush name bbb
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> rpush name vvv
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> rpush name ccc
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get name
<span class="token punctuation">(</span>error<span class="token punctuation">)</span> WRONGTYPE Operation against a key holding the wrong kind of value
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> scan <span class="token number">0</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;0&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;name&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> llen name
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange name <span class="token number">0</span> <span class="token number">4</span>  <span class="token comment"># 列表需要使用lrange查看</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;aaa&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;bbb&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;vvv&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;ccc&quot;</span>

<span class="token comment"># 删除第三个值</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrem name <span class="token number">3</span> vvv
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange name <span class="token number">0</span> <span class="token number">4</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;aaa&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;bbb&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;ccc&quot;</span>

<span class="token comment"># 弹出</span>
lpop 左弹出
rpop 右弹出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="集合" tabindex="-1"><a class="header-anchor" href="#集合" aria-hidden="true">#</a> 集合</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> sadd <span class="token builtin class-name">set</span> s1
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> SMEMBERS <span class="token builtin class-name">set</span>  <span class="token comment"># 列出集合的元素</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;s1&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> sadd <span class="token builtin class-name">set</span> s2
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> SMEMBERS <span class="token builtin class-name">set</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;s1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;s2&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> srem <span class="token builtin class-name">set</span> s1  <span class="token comment"># 删除</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> SMEMBERS <span class="token builtin class-name">set</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;s2&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span>

spop 随机删除1个
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="hash哈希" tabindex="-1"><a class="header-anchor" href="#hash哈希" aria-hidden="true">#</a> hash哈希</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hset <span class="token builtin class-name">hash</span> name zhangsan
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hset <span class="token builtin class-name">hash</span> age <span class="token number">18</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hgetall <span class="token builtin class-name">hash</span> <span class="token comment"># 获取全部值</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;name&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;zhangsan&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;age&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;18&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hget <span class="token builtin class-name">hash</span> name <span class="token comment"># 获取单个值</span>
<span class="token string">&quot;zhangsan&quot;</span>

<span class="token comment"># 删除</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hdel <span class="token builtin class-name">hash</span> name
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hgetall <span class="token builtin class-name">hash</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;age&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;18&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> del <span class="token builtin class-name">hash</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hgetall <span class="token builtin class-name">hash</span>
<span class="token punctuation">(</span>empty array<span class="token punctuation">)</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="发布和订阅" tabindex="-1"><a class="header-anchor" href="#发布和订阅" aria-hidden="true">#</a> 发布和订阅</h4><figure><img src="`+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="切库-运维命令" tabindex="-1"><a class="header-anchor" href="#切库-运维命令" aria-hidden="true">#</a> 切库&amp;运维命令</h2><p>redis 有 0~15 共16个数据库，默认登录的为 0，不同的数据库，数据相互之前是独立的</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token keyword">select</span> <span class="token number">1</span>
OK
<span class="token number">127.0</span>.0.1:6379<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token number">16</span>
<span class="token punctuation">(</span>error<span class="token punctuation">)</span> ERR DB index is out of range
<span class="token number">127.0</span>.0.1:6379<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token number">0</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运维命令" tabindex="-1"><a class="header-anchor" href="#运维命令" aria-hidden="true">#</a> 运维命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> RANDOMKEY <span class="token comment">#随机获取一个key</span>

<span class="token operator">&gt;</span> KEYS * <span class="token comment">#查看所有key，注意阻寨，如果key量特别大时候，容易卡死阻塞，上千万上百万时候容易阻塞 #建议使用，每次获取11个key，可以循环获取，直到获取所有key</span>

<span class="token operator">&gt;</span> SCAN O <span class="token comment">#从编号0开始，中间会有一个编号提示（类似索引编号），按编号提示依次循环获取，直到编号为0即表示获取完所有的key</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看当前状态</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> root@c93f2576f844:/data<span class="token comment"># redis-cli -a 123456 --stat</span>

Warning: Using a password with <span class="token string">&#39;-a&#39;</span> or <span class="token string">&#39;-u&#39;</span> option on the <span class="token builtin class-name">command</span> line interface may not be safe.
------- data ------ --------------------- load -------------------- - child -
keys       mem      clients blocked requests            connections
<span class="token number">0</span>          <span class="token number">907</span>.06K  <span class="token number">2</span>       <span class="token number">0</span>       <span class="token number">139</span> <span class="token punctuation">(</span>+0<span class="token punctuation">)</span>            <span class="token number">18</span>
<span class="token number">0</span>          <span class="token number">907</span>.06K  <span class="token number">2</span>       <span class="token number">0</span>       <span class="token number">140</span> <span class="token punctuation">(</span>+1<span class="token punctuation">)</span>            <span class="token number">18</span>
<span class="token number">0</span>          <span class="token number">907</span>.06K  <span class="token number">2</span>       <span class="token number">0</span>       <span class="token number">141</span> <span class="token punctuation">(</span>+1<span class="token punctuation">)</span>            <span class="token number">18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DB操作监控</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>root@c93f2576f844:/data<span class="token comment"># redis-cli -a 123qweASD monitor</span>
Warning: Using a password with <span class="token string">&#39;-a&#39;</span> or <span class="token string">&#39;-u&#39;</span> option on the <span class="token builtin class-name">command</span> line interface may not be safe.
OK
<span class="token number">1715600382.635851</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">127.0</span>.0.1:55854<span class="token punctuation">]</span> <span class="token string">&quot;auth&quot;</span> <span class="token string">&quot;(redacted)&quot;</span>
<span class="token number">1715600402.673287</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">127.0</span>.0.1:55854<span class="token punctuation">]</span> <span class="token string">&quot;set&quot;</span> <span class="token string">&quot;monitor&quot;</span> <span class="token string">&quot;test&quot;</span>
<span class="token number">1715600419.683035</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">127.0</span>.0.1:55854<span class="token punctuation">]</span> <span class="token string">&quot;del&quot;</span> <span class="token string">&quot;monitor&quot;</span>
<span class="token number">1715600424.181185</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">127.0</span>.0.1:55854<span class="token punctuation">]</span> <span class="token string">&quot;scan&quot;</span> <span class="token string">&quot;0&quot;</span>
<span class="token number">1715600426.952836</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">127.0</span>.0.1:55854<span class="token punctuation">]</span> <span class="token string">&quot;get&quot;</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">1715600430.453308</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">127.0</span>.0.1:55854<span class="token punctuation">]</span> <span class="token string">&quot;get&quot;</span> <span class="token string">&quot;name&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>redis info查询</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>root@c93f2576f844:/data<span class="token comment"># redis-cli -a 123456 info # 查看所有</span>
Warning: Using a password with <span class="token string">&#39;-a&#39;</span> or <span class="token string">&#39;-u&#39;</span> option on the <span class="token builtin class-name">command</span> line interface may not be safe.
<span class="token comment"># Server</span>
redis_version:6.2.6
redis_git_sha1:00000000
redis_git_dirty:0

root@c93f2576f844:/data<span class="token comment"># redis-cli -a 123456 info cpu # 查看某一个</span>
Warning: Using a password with <span class="token string">&#39;-a&#39;</span> or <span class="token string">&#39;-u&#39;</span> option on the <span class="token builtin class-name">command</span> line interface may not be safe.
<span class="token comment"># CPU</span>
used_cpu_sys:14.208219
used_cpu_user:12.923262
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置动态更新" tabindex="-1"><a class="header-anchor" href="#配置动态更新" aria-hidden="true">#</a> 配置动态更新</h2><p>无需重启，修改配置并生效</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> config get requirepass
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;requirepass&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;123xxxxxx&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> config <span class="token builtin class-name">set</span> requirepass <span class="token number">123456</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> config rewrite   <span class="token comment"># 写入配置文件 避免服务重启，配置丢失</span>
<span class="token punctuation">(</span>error<span class="token punctuation">)</span> ERR Rewriting config file: Permission denied  
<span class="token comment"># 出现这个错误，需要对redis.conf赋权 chown USRE:USER redis.conf</span>


<span class="token comment"># 测试一下</span>

root@c93f2576f844:/data<span class="token comment"># redis-cli -a 123xxxx info cpu</span>
Warning: Using a password with <span class="token string">&#39;-a&#39;</span> or <span class="token string">&#39;-u&#39;</span> option on the <span class="token builtin class-name">command</span> line interface may not be safe.
AUTH failed: WRONGPASS invalid username-password pair or user is disabled.
root@c93f2576f844:/data<span class="token comment"># redis-cli -a 123456 info cpu</span>
Warning: Using a password with <span class="token string">&#39;-a&#39;</span> or <span class="token string">&#39;-u&#39;</span> option on the <span class="token builtin class-name">command</span> line interface may not be safe.
<span class="token comment"># CPU</span>
used_cpu_sys:7.469806
used_cpu_user:6.857815
used_cpu_sys_children:0.012113
used_cpu_user_children:0.002291
used_cpu_sys_main_thread:7.467573
used_cpu_user_main_thread:6.857429
root@c93f2576f844:/data<span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>所有配置操作结束，记得<code>config rewrite</code></p></div><h2 id="多用户管理" tabindex="-1"><a class="header-anchor" href="#多用户管理" aria-hidden="true">#</a> 多用户管理</h2><p>redis6 默认已有用户名，默认为default（超级用户）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> acl list <span class="token comment"># 列出所有用户</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;user default on #8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92 ~* &amp;* +@all&quot;</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> acl getuser default <span class="token comment"># 查看某个用户</span>
 <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;flags&quot;</span>
 <span class="token number">2</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;on&quot;</span>
    <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;allkeys&quot;</span>
    <span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;allchannels&quot;</span>
    <span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;allcommands&quot;</span>
 <span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;passwords&quot;</span>
 <span class="token number">4</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92&quot;</span>
 <span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;commands&quot;</span>
 <span class="token number">6</span><span class="token punctuation">)</span> <span class="token string">&quot;+@all&quot;</span>
 <span class="token number">7</span><span class="token punctuation">)</span> <span class="token string">&quot;keys&quot;</span>
 <span class="token number">8</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;*&quot;</span>
 <span class="token number">9</span><span class="token punctuation">)</span> <span class="token string">&quot;channels&quot;</span>
<span class="token number">10</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;*&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>权限查看</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> acl <span class="token function">cat</span>  <span class="token comment"># 查看 权限列表</span>
 <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;keyspace&quot;</span>
 <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;read&quot;</span>
 <span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;write&quot;</span>
 <span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;set&quot;</span>
 <span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;sortedset&quot;</span>
 <span class="token number">6</span><span class="token punctuation">)</span> <span class="token string">&quot;list&quot;</span>
 <span class="token number">7</span><span class="token punctuation">)</span> <span class="token string">&quot;hash&quot;</span>
 <span class="token number">8</span><span class="token punctuation">)</span> <span class="token string">&quot;string&quot;</span>
 <span class="token number">9</span><span class="token punctuation">)</span> <span class="token string">&quot;bitmap&quot;</span>
<span class="token number">10</span><span class="token punctuation">)</span> <span class="token string">&quot;hyperloglog&quot;</span>
<span class="token number">11</span><span class="token punctuation">)</span> <span class="token string">&quot;geo&quot;</span>
<span class="token number">12</span><span class="token punctuation">)</span> <span class="token string">&quot;stream&quot;</span>
<span class="token number">13</span><span class="token punctuation">)</span> <span class="token string">&quot;pubsub&quot;</span>
<span class="token number">14</span><span class="token punctuation">)</span> <span class="token string">&quot;admin&quot;</span>
<span class="token number">15</span><span class="token punctuation">)</span> <span class="token string">&quot;fast&quot;</span>
<span class="token number">16</span><span class="token punctuation">)</span> <span class="token string">&quot;slow&quot;</span>
<span class="token number">17</span><span class="token punctuation">)</span> <span class="token string">&quot;blocking&quot;</span>
<span class="token number">18</span><span class="token punctuation">)</span> <span class="token string">&quot;dangerous&quot;</span>
<span class="token number">19</span><span class="token punctuation">)</span> <span class="token string">&quot;connection&quot;</span>
<span class="token number">20</span><span class="token punctuation">)</span> <span class="token string">&quot;transaction&quot;</span>
<span class="token number">21</span><span class="token punctuation">)</span> <span class="token string">&quot;scripting&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建用户</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">#创建test用户，密码：testpwd 赋给get命令的权限，只对name开头的有get权限 </span>
<span class="token operator">&gt;</span>ACL SETUSER <span class="token builtin class-name">test</span> on testpwd name* +get

<span class="token comment">#给test用户增加read权限，设置只对name开头的key有read权限</span>
›ACL SETUSER <span class="token builtin class-name">test</span> on testpwd name* + @read

 <span class="token comment">#查看test用户的相关信息</span>
›ACL getuser <span class="token builtin class-name">test</span>

<span class="token comment">#对所有key都有get权限</span>
<span class="token operator">&gt;</span>ACL SETUSER t1 on <span class="token operator">&gt;</span>t1pwd ~* +get
<span class="token comment">#对所有key都有read权限</span>
<span class="token operator">&gt;</span>ACL SETUSER t1 on <span class="token operator">&gt;</span>t1pwd ~* +@read

<span class="token operator">&gt;</span>ACL Getuser t1

<span class="token comment"># 删除用户</span>
<span class="token operator">&gt;</span>ACL DELUSRE t1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常见赋权</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建用户赋给所有权限：</span>
<span class="token operator">&gt;</span> ACL SETUSER testl on <span class="token operator">&gt;</span>testipwd ~* +@all <span class="token comment">#用户名：test1密码：testlpwd </span>
<span class="token operator">&gt;</span> ACL GETUSER test1

<span class="token comment"># 去除config命令后的所有权限</span>
<span class="token operator">&gt;</span> ACL SETUSER test2 on <span class="token operator">&gt;</span>test2pwd ~* +@all <span class="token parameter variable">-config</span>
<span class="token operator">&gt;</span> ACL GETUSER test2

<span class="token comment"># 创建一个用户，只给info和momitoy命令权限</span>
<span class="token operator">&gt;</span>ACL SETUSER monitor on <span class="token operator">&gt;</span>monitorpwd ~* +info +monitor 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="慢日志-key有效期" tabindex="-1"><a class="header-anchor" href="#慢日志-key有效期" aria-hidden="true">#</a> 慢日志&amp;key有效期</h2><p>系统慢常见外题：</p><ol><li>内存使用情况</li><li>CPU负载</li><li>磁盘空间</li><li>慢日志</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> CONFIG GET slow*
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;slowlog-max-len&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;128&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;slowlog-log-slower-than&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;10000&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span>

<span class="token comment"># 模拟慢日志，调整时间 slowlog-log-slower-than</span>
config <span class="token builtin class-name">set</span> slowlog-log-slower-than <span class="token number">1000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模拟大量key插入</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">seq</span> <span class="token parameter variable">-w</span> <span class="token number">100000</span><span class="token variable">)</span></span><span class="token punctuation">;</span><span class="token keyword">do</span> redis-cli <span class="token parameter variable">-a</span> <span class="token number">123456</span> <span class="token builtin class-name">set</span> name<span class="token variable"><span class="token variable">$(</span>i<span class="token variable">)</span></span> <span class="token builtin class-name">test</span><span class="token variable"><span class="token variable">$(</span>i<span class="token variable">)</span></span><span class="token punctuation">;</span> <span class="token keyword">done</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>慢日志查询</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>SLOWLOG get  <span class="token comment">#默认获取最近10条</span>
<span class="token operator">&gt;</span>SLOWLOG get <span class="token number">5</span> <span class="token comment">#获取5条</span>
<span class="token operator">&gt;</span>SLOWLOG len   <span class="token comment">#慢日志量，查看慢日志的条数 </span>
<span class="token operator">&gt;</span>SLOWLOG reset <span class="token comment">#清空慢日志</span>


<span class="token comment">#产生慢日志的命令，一般是当数据量太多时候，运行keys *命令会比较慢</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> SLOWLOG get
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span> <span class="token comment">#慢日志的id，从0开始，第2个id</span>
   <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1715676722</span> <span class="token comment">#时间戳，慢日志产生的时间点，可以通过 date -d @1668215297 获取慢日志产生的时间</span>
   <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3143</span>  <span class="token comment">#慢日志运行的时间3毫秒</span>
   <span class="token number">4</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;keys&quot;</span>
      <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;*&quot;</span>
   <span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;127.0.0.1:55966&quot;</span>
   <span class="token number">6</span><span class="token punctuation">)</span> <span class="token string">&quot;&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="有效期" tabindex="-1"><a class="header-anchor" href="#有效期" aria-hidden="true">#</a> 有效期</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> exk <span class="token builtin class-name">test</span> ex <span class="token number">10</span> <span class="token comment"># 10秒有效</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get exk
<span class="token string">&quot;test&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ttl exk
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ttl exk
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ttl exk <span class="token comment"># 失效</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token parameter variable">-2</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> name zz
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get name
<span class="token string">&quot;zz&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ttl name <span class="token comment"># -1 永久有效</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token parameter variable">-1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> EXPIRE name <span class="token number">22</span>  <span class="token comment"># 给已存在的key 设置有效时间</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ttl name
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">19</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ttl name
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">17</span>\`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="持久化" tabindex="-1"><a class="header-anchor" href="#持久化" aria-hidden="true">#</a> 持久化</h2><h3 id="rdb" tabindex="-1"><a class="header-anchor" href="#rdb" aria-hidden="true">#</a> RDB</h3><p>RDB即RedisDB的缩写，即将整个Redis内存数据持久化到一个文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> save <span class="token comment"># 阻塞保存</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> bgsave <span class="token comment"># 后台保存</span>
Background saving started
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span>

<span class="token comment">#</span>
root@c93f2576f844:/data<span class="token comment"># ls  # 保存后，会多出个dump.rdb文件</span>
access.log  appendonly.aof  dump.rdb  s.sh
root@c93f2576f844:/data<span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外一种方式就是配置文件，Redis默认开启。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> save <span class="token number">900</span> <span class="token number">1</span>  //900s有一个key被修改时保存
 save <span class="token number">300</span> <span class="token number">10</span>  //300s内有10个key被修改时保存
 save <span class="token number">60</span> <span class="token number">10000</span> //60s内有10000个key被修改时保存
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>RBD的优点是，全量数据二进制文件，数据恢复快。 缺点是，可能会丢数据。</p><h3 id="aof" tabindex="-1"><a class="header-anchor" href="#aof" aria-hidden="true">#</a> AOF</h3><p>将redis中每一步对数据修改的操作记录（日志）append到相应的文件中</p><p>配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>appendonly <span class="token function">yes</span>
<span class="token comment"># The name of the append only file (default: &quot;appendonly.aof&quot;)</span>
appendfilename <span class="token string">&quot;appendonly.aof&quot;</span>


<span class="token comment"># 查看配置</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> CONFIG GET appen*
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;appendonly&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;yes&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;appendfilename&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;appendonly.aof&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;appendfsync&quot;</span>
<span class="token number">6</span><span class="token punctuation">)</span> <span class="token string">&quot;everysec&quot;</span>

<span class="token comment"># 可通过config set 更改配置</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了降低IO消耗，AOF写文件时，会先将数据写到缓冲区，然后再把缓冲区的内容 flush 到磁盘，这个过程叫做 fsync。</p><p>频率有三种：</p><blockquote><p>appendfsync always //每次写操作都flush，影响性能 appendfsync everysec //每秒flush appendfsync no //消极等待OS刷新(一般30s),可能丢失数据</p></blockquote><h3 id="重写" tabindex="-1"><a class="header-anchor" href="#重写" aria-hidden="true">#</a> 重写</h3><p>当AOF文件增大到一定程度，我们可以对他进行重写，重写AOF文件可以减小AOF文件的大小，数据不会减少</p><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> CONFIG GET *aof*
 <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;aof-rewrite-incremental-fsync&quot;</span>
 <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;yes&quot;</span>
 <span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;aof-load-truncated&quot;</span>
 <span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;yes&quot;</span>
 <span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;aof-use-rdb-preamble&quot;</span>
 <span class="token number">6</span><span class="token punctuation">)</span> <span class="token string">&quot;no&quot;</span>
 <span class="token number">7</span><span class="token punctuation">)</span> <span class="token string">&quot;aof_rewrite_cpulist&quot;</span>
 <span class="token number">8</span><span class="token punctuation">)</span> <span class="token string">&quot;&quot;</span>
 <span class="token number">9</span><span class="token punctuation">)</span> <span class="token string">&quot;auto-aof-rewrite-percentage&quot;</span>  <span class="token comment"># 达到100增量的时候，触发AOF重写</span>
<span class="token number">10</span><span class="token punctuation">)</span> <span class="token string">&quot;100&quot;</span>
<span class="token number">11</span><span class="token punctuation">)</span> <span class="token string">&quot;auto-aof-rewrite-min-size&quot;</span> <span class="token comment"># &gt; 64M ,触发重写</span>
<span class="token number">12</span><span class="token punctuation">)</span> <span class="token string">&quot;67108864&quot;</span>
<span class="token number">13</span><span class="token punctuation">)</span> <span class="token string">&quot;replicaof&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="混合模式" tabindex="-1"><a class="header-anchor" href="#混合模式" aria-hidden="true">#</a> 混合模式</h3><p>bgrewirteof（background+rewrite+aof），可以解决，文件过大的问题，但对历史命令的合并是非常耗费性能的，尤其是数据量非的情况下。因此，4.0后，出现混合模式。即执行bgrewirteof之后，将当前数据全量以RDB的方式写入appendonly文件的前半部分，之后的命令再以 append 的方式进行追加。</p><p>配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>aof-use-rdb-preamble <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>触发条件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>auto-aof-rewrite-percentage <span class="token number">100</span>
auto-aof-rewrite-min-size 64mb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bigkey" tabindex="-1"><a class="header-anchor" href="#bigkey" aria-hidden="true">#</a> bigkey</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>root@2318c3d768a7:/data<span class="token comment"># redis-cli -a 123qweASD --bigkeys</span>
Warning: Using a password with <span class="token string">&#39;-a&#39;</span> or <span class="token string">&#39;-u&#39;</span> option on the <span class="token builtin class-name">command</span> line interface may not be safe.

<span class="token comment"># Scanning the entire keyspace to find biggest keys as well as</span>
<span class="token comment"># average sizes per key type.  You can use -i 0.1 to sleep 0.1 sec</span>
<span class="token comment"># per 100 SCAN commands (not usually needed).</span>

<span class="token punctuation">[</span>00.00%<span class="token punctuation">]</span> Biggest string found so far <span class="token string">&#39;&quot;name&quot;&#39;</span> with <span class="token number">3</span> bytes

-------- summary -------

Sampled <span class="token number">1</span> keys <span class="token keyword">in</span> the keyspace<span class="token operator">!</span>
Total key length <span class="token keyword">in</span> bytes is <span class="token number">4</span> <span class="token punctuation">(</span>avg len <span class="token number">4.00</span><span class="token punctuation">)</span>

Biggest string found <span class="token string">&#39;&quot;name&quot;&#39;</span> has <span class="token number">3</span> bytes

<span class="token number">1</span> strings with <span class="token number">3</span> bytes <span class="token punctuation">(</span><span class="token number">100.00</span>% of keys, avg size <span class="token number">3.00</span><span class="token punctuation">)</span>
<span class="token number">0</span> lists with <span class="token number">0</span> items <span class="token punctuation">(</span>00.00% of keys, avg size <span class="token number">0.00</span><span class="token punctuation">)</span>
<span class="token number">0</span> hashs with <span class="token number">0</span> fields <span class="token punctuation">(</span>00.00% of keys, avg size <span class="token number">0.00</span><span class="token punctuation">)</span>
<span class="token number">0</span> streams with <span class="token number">0</span> entries <span class="token punctuation">(</span>00.00% of keys, avg size <span class="token number">0.00</span><span class="token punctuation">)</span>
<span class="token number">0</span> sets with <span class="token number">0</span> members <span class="token punctuation">(</span>00.00% of keys, avg size <span class="token number">0.00</span><span class="token punctuation">)</span>
<span class="token number">0</span> zsets with <span class="token number">0</span> members <span class="token punctuation">(</span>00.00% of keys, avg size <span class="token number">0.00</span><span class="token punctuation">)</span>
root@2318c3d768a7:/data<span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主从" tabindex="-1"><a class="header-anchor" href="#主从" aria-hidden="true">#</a> 主从</h2><p>从redis需要增加下面这两项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>slave of <span class="token number">192.168</span>.27.128 <span class="token number">6379</span> <span class="token comment">#指定主redis的ip和端口 </span>
masterauth <span class="token string">&quot;password&quot;</span> <span class="token comment"># #指定主redis的密码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>角色查看</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> info   <span class="token comment"># 通过info命令可查看出，当前的节点是什么角色等信息</span>
<span class="token punctuation">..</span>.
<span class="token punctuation">..</span>.
Replication
role: slave
master_host: <span class="token number">192.168</span>.27.128 master_port: <span class="token number">6379</span>
master_link_status:up
master_last. _io_seconds_ago: <span class="token number">6</span> master_sync_in_progress:0
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="哨兵" tabindex="-1"><a class="header-anchor" href="#哨兵" aria-hidden="true">#</a> 哨兵</h2><p>Redis提供Sentinel工具实现主从自动切换，实现redis的高可用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-sentinel /etc/sentinel.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>主挂掉后，从库自动提升为主库，主生恢复后，自动转为从库</p><p>要求主从都需要设置<code>masterauth</code> 连接主redis的密码</p><blockquote><p>因为是高可用模式，主也有可能宕机，当它宿机后，即使再恢复后也是作为从角色，为了防止作为从角色时候， 连接主时候认证不了，需要提前加上连接主服务器的认证密码</p></blockquote><p>为了防止哨兵的单节点故障，一般哨兵也做成高可用形式，即多个哨兵同时监控redis的状态，当其中一个哨兵故障时候，其他哨兵也能继续监控。</p><p>为了方便哨兵的选举，一般哨兵也是设置成奇数个。一般3个哨兵就没问题。</p><p>注意：一般哨兵的部署尽量不要和redis部署在同一台，防止这一台机器挂了后，redis和哨兵同时挂掉，哨兵起不到哨兵的作用了。当然多台机器， 多个哨兵时候也不影响，一台哨兵挂了，还有其它哨兵。</p><h3 id="配置哨兵" tabindex="-1"><a class="header-anchor" href="#配置哨兵" aria-hidden="true">#</a> 配置哨兵</h3><p>sentinel.conf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">bind</span> <span class="token number">0.0</span>.0.0
daemonize <span class="token function">yes</span>
port <span class="token number">26379</span> <span class="token comment">#服务端口</span>
<span class="token function">dir</span> <span class="token string">&quot;/tmp&quot;</span>
logfile <span class="token string">&quot;sentinel.log&quot;</span>
sentinel monitor testmaster <span class="token number">192.168</span>.27.128 <span class="token number">6379</span> <span class="token number">2</span> <span class="token comment"># master地址，2代表至少2个哨兵认为有问题，才进行切换</span>
sentinel auth-pass testmaster password 
sentinel down-after-milliseconds testmaster <span class="token number">5000</span>  <span class="token comment"># 5s未响应，则认为故障</span>
sentinel failover-timeout testmaster <span class="token number">20000</span> <span class="token comment"># 20秒内，完成切换操作。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集群" tabindex="-1"><a class="header-anchor" href="#集群" aria-hidden="true">#</a> 集群</h2><p>分片存储，提高redis吞吐量。建议最少三主三从</p><h3 id="主节点" tabindex="-1"><a class="header-anchor" href="#主节点" aria-hidden="true">#</a> 主节点</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">-a</span> password <span class="token parameter variable">--cluster</span> create <span class="token number">192.168</span>.x.x:7000 <span class="token number">192.168</span>.x.x:7001 <span class="token number">192.168</span>.x.x:7002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>查看集群状态</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token comment"># redis-cli -a password -p 7000 cluster info</span>

cluster_state:ok
cluster_slots_assigned: <span class="token number">16384</span>
cluster_slots_ok: <span class="token number">16384</span>
cluster_slots_pfail:0
cluster_slots_fail:0
cluster _known_nodes: <span class="token number">3</span>
cluster_size: <span class="token number">3</span>
cluster_current _epoch: <span class="token number">3</span>
cluster_my_epoch: <span class="token number">1</span>
cluster_stats_messages_ping_sent:32
cluster_stats_messages_pong_sent:34 
cluster_stats_messages_sent: <span class="token number">66</span>
cluster_stats_messages_ping_received: <span class="token number">32</span>
cluster_stats_messages_pong_received: <span class="token number">32</span> 
cluster_stats_messages_meet_received: <span class="token number">2</span>
cluster_stats_messages_received: <span class="token number">66</span>


<span class="token operator">&gt;</span> <span class="token comment"># redis-cli -a password -p 7000 cluster nodes</span>
查看集群节点信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写入数据</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 集群操作需要加-c参数</span>
redis-cli <span class="token parameter variable">-p</span> <span class="token number">7000</span> <span class="token parameter variable">-a</span> password <span class="token comment">#不加-C参数，表示不是以集群方式写入，无法写入 </span>
redis-cli <span class="token parameter variable">-p</span> <span class="token number">7000</span> <span class="token parameter variable">-a</span> password <span class="token parameter variable">-c</span> <span class="token comment">#增加-C参数，表示是以集群方式写入，可以写入</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="从节点" tabindex="-1"><a class="header-anchor" href="#从节点" aria-hidden="true">#</a> 从节点</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">-a</span> password <span class="token parameter variable">--cluster</span> add-node --cluster-slave --cluster-master-id <span class="token number">7001</span>的master-id <span class="token number">192.168</span>.x.x:8002 <span class="token number">192.168</span>.x.x.:7001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>命令中后面两个ip顺序不能颠倒，分别对应的一组主从，ip顺序为：从redis的ip：从端口 主redis的ip：主端口</p></div><blockquote><p>手动将原主库提升为主库，可用命令 CLUSTER FAILOVER</p></blockquote><h3 id="节点增" tabindex="-1"><a class="header-anchor" href="#节点增" aria-hidden="true">#</a> 节点增</h3><p>使用add-node命令新增一个主节点</p><p>新增集群主节点</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">-a</span> password <span class="token parameter variable">--cluster</span> add-node 新节点IP:端口 已存在节点IP:端口（任意节点均可）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>新增集群从节点</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">-a</span> password <span class="token parameter variable">--cluster</span> add-node --cluster-slave --cluster-master-id <span class="token punctuation">[</span>MASTER ID<span class="token punctuation">]</span> 新节点IP:端口 主节点IP:端口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>分配 <code>slot</code> 槽。找到集群中的任意一个主节点，对其进行重新分片工作</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">-a</span> password <span class="token parameter variable">--cluster</span> reshard 已存在节点IP:端口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="节点减" tabindex="-1"><a class="header-anchor" href="#节点减" aria-hidden="true">#</a> 节点减</h3><p>从库可以直接删除</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">-a</span> password <span class="token parameter variable">--cluster</span> del-node 对应主库的ip:端口 从库的id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>主库的删除，需要做数据的迁移。使用槽位分配即可。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">-a</span> password <span class="token parameter variable">--cluster</span> reshard 已存在节点IP:端口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除master节点</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">-a</span> password <span class="token parameter variable">--cluster</span> del-node 对应主库的ip:端口 主库的id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,122),o=[c];function r(d,u){return n(),a("div",null,o)}const v=s(l,[["render",r],["__file","redis.html.vue"]]);export{v as default};
