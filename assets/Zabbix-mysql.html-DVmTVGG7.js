import{_ as s,c as n,o as a,f as e}from"./app-BfCDUtKQ.js";const l={},i=e(`<div class="hint-container caution"><p class="hint-container-title">请注意</p><p>本文内容可能已过时，请自行甄别。</p></div><h2 id="db权限" tabindex="-1"><a class="header-anchor" href="#db权限"><span>DB权限</span></a></h2><ol><li>在客户端的mysql里添加权限,使用zabbix账号连接本地的mysql</li></ol><div class="language-shell" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">mysql</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#98C379;--shiki-dark:#98C379;">grant</span><span style="color:#98C379;--shiki-dark:#98C379;"> all</span><span style="color:#98C379;--shiki-dark:#98C379;"> on</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> *</span><span style="color:#98C379;--shiki-dark:#98C379;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">*</span><span style="color:#98C379;--shiki-dark:#98C379;"> to</span><span style="color:#98C379;--shiki-dark:#98C379;"> zabbix@&#39;localhost&#39;</span><span style="color:#98C379;--shiki-dark:#98C379;"> identified</span><span style="color:#98C379;--shiki-dark:#98C379;"> by</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;zabbix”;</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">mysql&gt; flush privileges;</span></span></code></pre></div><h2 id="编辑-my-cnf" tabindex="-1"><a class="header-anchor" href="#编辑-my-cnf"><span>编辑 my.cnf</span></a></h2><p><code>/etc/zabbix/etc/my.cnf</code> (需新建)</p><div class="language-conf" data-ext="conf" data-title="conf"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>#zabbix Agent</span></span>
<span class="line"><span>[mysql]</span></span>
<span class="line"><span>host=localhost</span></span>
<span class="line"><span>user=zabbix</span></span>
<span class="line"><span>password=zabbix</span></span>
<span class="line"><span>socket=/var/lib/mysql/mysql.sock  #具体根据个人情况</span></span>
<span class="line"><span>[mysqladmin]</span></span>
<span class="line"><span>host=localhost</span></span>
<span class="line"><span>user=zabbix</span></span>
<span class="line"><span>password=zabbix</span></span>
<span class="line"><span>socket=/var/lib/mysql/mysql.sock</span></span></code></pre></div><h2 id="修改agentd" tabindex="-1"><a class="header-anchor" href="#修改agentd"><span>修改agentd</span></a></h2><p><code>/etc/zabbix/zabbix_agentd.d/userparameter_mysql.conf</code></p><p><code>HOME=/var/lib/zabbix </code> 修改为 <code>HOME=/etc/zabbix/etc/</code></p><p>其他</p><p><code>zabbix_agentd.conf</code>配置文件中 <code>Include</code>选择要包含 <code>zabbix_agentd.d</code></p><p>重启</p><p><code>service zabbix-agent restart</code></p><p>去web端口,添加主机 套用内置mysql模板就可以了.</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><p>userparameter_mysql.conf，还有一种配置</p><h3 id="新建脚本" tabindex="-1"><a class="header-anchor" href="#新建脚本"><span>新建脚本</span></a></h3><p><code>vim /etc/zabbix/chk_mysql.sh</code></p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># 用户名</span></span>
<span class="line"><span>MYSQL_USER=&#39;zabbix&#39;</span></span>
<span class="line"><span># 密码</span></span>
<span class="line"><span>MYSQL_PWD=&#39;zabbix&#39;</span></span>
<span class="line"><span># 主机地址/IP</span></span>
<span class="line"><span>MYSQL_HOST=&#39;127.0.0.1&#39;</span></span>
<span class="line"><span># 端口</span></span>
<span class="line"><span>MYSQL_PORT=&#39;3306&#39;</span></span>
<span class="line"><span># 数据连接</span></span>
<span class="line"><span>MYSQL_CONN=&quot;/usr/bin/mysqladmin -u\${MYSQL_USER} -p\${MYSQL_PWD} -h\${MYSQL_HOST} -P\${MYSQL_PORT}&quot;</span></span>
<span class="line"><span># 参数是否正确</span></span>
<span class="line"><span>if [ $# -ne &quot;1&quot; ];then </span></span>
<span class="line"><span>    echo &quot;arg error!&quot; </span></span>
<span class="line"><span>fi </span></span>
<span class="line"><span># 获取数据</span></span>
<span class="line"><span>case $1 in </span></span>
<span class="line"><span>    Uptime) </span></span>
<span class="line"><span>        result=\`\${MYSQL_CONN} status|cut -f2 -d&quot;:&quot;|cut -f1 -d&quot;T&quot;\` </span></span>
<span class="line"><span>        echo $result </span></span>
<span class="line"><span>        ;; </span></span>
<span class="line"><span>    Com_update) </span></span>
<span class="line"><span>        result=\`\${MYSQL_CONN} extended-status |grep -w &quot;Com_update&quot;|cut -d&quot;|&quot; -f3\` </span></span>
<span class="line"><span>        echo $result </span></span>
<span class="line"><span>        ;; </span></span>
<span class="line"><span>    Slow_queries) </span></span>
<span class="line"><span>        result=\`\${MYSQL_CONN} status |cut -f5 -d&quot;:&quot;|cut -f1 -d&quot;O&quot;\` </span></span>
<span class="line"><span>        echo $result </span></span>
<span class="line"><span>        ;; </span></span>
<span class="line"><span>    Com_select) </span></span>
<span class="line"><span>        result=\`\${MYSQL_CONN} extended-status |grep -w &quot;Com_select&quot;|cut -d&quot;|&quot; -f3\` </span></span>
<span class="line"><span>        echo $result </span></span>
<span class="line"><span>                ;; </span></span>
<span class="line"><span>    Com_rollback) </span></span>
<span class="line"><span>        result=\`\${MYSQL_CONN} extended-status |grep -w &quot;Com_rollback&quot;|cut -d&quot;|&quot; -f3\` </span></span>
<span class="line"><span>                echo $result </span></span>
<span class="line"><span>                ;; </span></span>
<span class="line"><span>    Questions) </span></span>
<span class="line"><span>        result=\`\${MYSQL_CONN} status|cut -f4 -d&quot;:&quot;|cut -f1 -d&quot;S&quot;\` </span></span>
<span class="line"><span>                echo $result </span></span>
<span class="line"><span>                ;; </span></span>
<span class="line"><span>    Com_insert) </span></span>
<span class="line"><span>        result=\`\${MYSQL_CONN} extended-status |grep -w &quot;Com_insert&quot;|cut -d&quot;|&quot; -f3\` </span></span>
<span class="line"><span>                echo $result </span></span>
<span class="line"><span>                ;; </span></span>
<span class="line"><span>    Com_delete) </span></span>
<span class="line"><span>        result=\`\${MYSQL_CONN} extended-status |grep -w &quot;Com_delete&quot;|cut -d&quot;|&quot; -f3\` </span></span>
<span class="line"><span>                echo $result </span></span>
<span class="line"><span>                ;; </span></span>
<span class="line"><span>    Com_commit) </span></span>
<span class="line"><span>        result=\`\${MYSQL_CONN} extended-status |grep -w &quot;Com_commit&quot;|cut -d&quot;|&quot; -f3\` </span></span>
<span class="line"><span>                echo $result </span></span>
<span class="line"><span>                ;; </span></span>
<span class="line"><span>    Bytes_sent) </span></span>
<span class="line"><span>        result=\`\${MYSQL_CONN} extended-status |grep -w &quot;Bytes_sent&quot; |cut -d&quot;|&quot; -f3\` </span></span>
<span class="line"><span>                echo $result </span></span>
<span class="line"><span>                ;; </span></span>
<span class="line"><span>    Bytes_received) </span></span>
<span class="line"><span>        result=\`\${MYSQL_CONN} extended-status |grep -w &quot;Bytes_received&quot; |cut -d&quot;|&quot; -f3\` </span></span>
<span class="line"><span>                echo $result </span></span>
<span class="line"><span>                ;; </span></span>
<span class="line"><span>    Com_begin) </span></span>
<span class="line"><span>        result=\`\${MYSQL_CONN} extended-status |grep -w &quot;Com_begin&quot;|cut -d&quot;|&quot; -f3\` </span></span>
<span class="line"><span>                echo $result </span></span>
<span class="line"><span>                ;; </span></span>
<span class="line"><span></span></span>
<span class="line"><span>        *) </span></span>
<span class="line"><span>        echo &quot;Usage:$0(Uptime|Com_update|Slow_queries|Com_select|Com_rollback|Questions|Com_insert|Com_delete|Com_commit|Bytes_sent|Bytes_received|Com_begin)&quot; </span></span>
<span class="line"><span>        ;; </span></span>
<span class="line"><span>esac</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改配置" tabindex="-1"><a class="header-anchor" href="#修改配置"><span>修改配置</span></a></h3><p>vim /etc/zabbix/zabbix_agentd.d/userparameter_mysql.conf</p><div class="language-conf" data-ext="conf" data-title="conf"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>#UserParameter=mysql.status[*],echo &quot;show global status where Variable_name=&#39;$1&#39;;&quot; | HOME=/var/lib/zabbix mysql -N | awk &#39;{print $$2}&#39;</span></span>
<span class="line"><span>UserParameter=mysql.status[*],/etc/zabbix/chk_mysql.sh $1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#UserParameter=mysql.size[*],bash -c &#39;echo &quot;select sum($(case &quot;$3&quot; in both|&quot;&quot;) echo &quot;data_length+index_length&quot;;; data|index) echo &quot;$3_length&quot;;; free) echo &quot;data_free&quot;;; esac)) from information_schema.tables$([[ &quot;$1&quot; = &quot;all&quot; || ! &quot;$1&quot; ]] || echo &quot; where table_schema=\\&quot;$1\\&quot;&quot;)$([[ &quot;$2&quot; = &quot;all&quot; || ! &quot;$2&quot; ]] || echo &quot;and table_name=\\&quot;$2\\&quot;&quot;);&quot; | HOME=/var/lib/zabbix mysql -N&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#UserParameter=mysql.ping,HOME=/var/lib/zabbix mysqladmin ping | grep -c alive</span></span>
<span class="line"><span>UserParameter=mysql.ping,mysqladmin -uzabbix -pzabbix -P3306 -h127.0.0.1  ping | grep -c alive</span></span>
<span class="line"><span></span></span>
<span class="line"><span>UserParameter=mysql.version,mysql -V</span></span></code></pre></div>`,23),p=[i];function t(c,o){return a(),n("div",null,p)}const r=s(l,[["render",t],["__file","Zabbix-mysql.html.vue"]]),u=JSON.parse(`{"path":"/ops/monitor/zabbix/Zabbix-mysql.html","title":"Zabbix-mysql监控","lang":"zh-CN","frontmatter":{"article":false,"title":"Zabbix-mysql监控","order":1,"index":true,"category":["监控"],"tag":["zabbix","mysql"],"description":"请注意 本文内容可能已过时，请自行甄别。 DB权限 在客户端的mysql里添加权限,使用zabbix账号连接本地的mysql 编辑 my.cnf /etc/zabbix/etc/my.cnf (需新建) 修改agentd /etc/zabbix/zabbix_agentd.d/userparameter_mysql.conf HOME=/var/lib...","head":[["meta",{"property":"og:url","content":"https://docs.lizili.online/ops/monitor/zabbix/Zabbix-mysql.html"}],["meta",{"property":"og:site_name","content":"lzz's Blog"}],["meta",{"property":"og:title","content":"Zabbix-mysql监控"}],["meta",{"property":"og:description","content":"请注意 本文内容可能已过时，请自行甄别。 DB权限 在客户端的mysql里添加权限,使用zabbix账号连接本地的mysql 编辑 my.cnf /etc/zabbix/etc/my.cnf (需新建) 修改agentd /etc/zabbix/zabbix_agentd.d/userparameter_mysql.conf HOME=/var/lib..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-23T05:06:11.000Z"}],["meta",{"property":"article:author","content":"z"}],["meta",{"property":"article:tag","content":"zabbix"}],["meta",{"property":"article:tag","content":"mysql"}],["meta",{"property":"article:modified_time","content":"2024-04-23T05:06:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Zabbix-mysql监控\\",\\"description\\":\\"请注意 本文内容可能已过时，请自行甄别。 DB权限 在客户端的mysql里添加权限,使用zabbix账号连接本地的mysql 编辑 my.cnf /etc/zabbix/etc/my.cnf (需新建) 修改agentd /etc/zabbix/zabbix_agentd.d/userparameter_mysql.conf HOME=/var/lib...\\"}"]]},"headers":[{"level":2,"title":"DB权限","slug":"db权限","link":"#db权限","children":[]},{"level":2,"title":"编辑 my.cnf","slug":"编辑-my-cnf","link":"#编辑-my-cnf","children":[]},{"level":2,"title":"修改agentd","slug":"修改agentd","link":"#修改agentd","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"新建脚本","slug":"新建脚本","link":"#新建脚本","children":[]},{"level":3,"title":"修改配置","slug":"修改配置","link":"#修改配置","children":[]}]}],"git":{"createdTime":1709524122000,"updatedTime":1713848771000,"contributors":[{"name":"lizili","email":"cn.zili.lee@outlook.com","commits":2}]},"readingTime":{"minutes":1.67,"words":500},"filePathRelative":"ops/monitor/zabbix/Zabbix-mysql.md","localizedDate":"2024年3月4日","excerpt":"<div class=\\"hint-container caution\\">\\n<p class=\\"hint-container-title\\">请注意</p>\\n<p>本文内容可能已过时，请自行甄别。</p>\\n</div>\\n<h2>DB权限</h2>\\n<ol>\\n<li>在客户端的mysql里添加权限,使用zabbix账号连接本地的mysql</li>\\n</ol>\\n<div class=\\"language-shell\\" data-ext=\\"shell\\" data-title=\\"shell\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">mysql</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt; </span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">grant</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> all</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> on</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\"> *</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">.</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">*</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> to</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> zabbix@'localhost'</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> identified</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> by</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\"> \\"zabbix”;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#98C379;--shiki-dark:#98C379\\">mysql&gt; flush privileges;</span></span></code></pre>\\n</div>","autoDesc":true}`);export{r as comp,u as data};
