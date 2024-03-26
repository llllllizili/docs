import{_ as e,X as i,Y as n,$ as s}from"./framework-7663974c.js";const d={},a=s(`<div class="hint-container warning"><p class="hint-container-title">请注意</p><p>文章内容较久远，请注意内容的有效性。</p></div><h2 id="db权限" tabindex="-1"><a class="header-anchor" href="#db权限" aria-hidden="true">#</a> DB权限</h2><ol><li>在客户端的mysql里添加权限,使用zabbix账号连接本地的mysql</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> grant all on *.* to zabbix@<span class="token string">&#39;localhost&#39;</span> identified by &quot;zabbix”<span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> flush privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编辑-my-cnf" tabindex="-1"><a class="header-anchor" href="#编辑-my-cnf" aria-hidden="true">#</a> 编辑 my.cnf</h2><p><code>/etc/zabbix/etc/my.cnf</code> (需新建)</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>#zabbix Agent
[mysql]
host=localhost
user=zabbix
password=zabbix
socket=/var/lib/mysql/mysql.sock  #具体根据个人情况
[mysqladmin]
host=localhost
user=zabbix
password=zabbix
socket=/var/lib/mysql/mysql.sock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改agentd" tabindex="-1"><a class="header-anchor" href="#修改agentd" aria-hidden="true">#</a> 修改agentd</h2><p><code>/etc/zabbix/zabbix_agentd.d/userparameter_mysql.conf</code></p><p><code>HOME=/var/lib/zabbix </code> 修改为 <code>HOME=/etc/zabbix/etc/</code></p><p>其他</p><p><code>zabbix_agentd.conf</code>配置文件中 <code>Include</code>选择要包含 <code>zabbix_agentd.d</code></p><p>重启</p><p><code>service zabbix-agent restart</code></p><p>去web端口,添加主机 套用内置mysql模板就可以了.</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>userparameter_mysql.conf，还有一种配置</p><h3 id="新建脚本" tabindex="-1"><a class="header-anchor" href="#新建脚本" aria-hidden="true">#</a> 新建脚本</h3><p><code>vim /etc/zabbix/chk_mysql.sh</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# 用户名
MYSQL_USER=&#39;zabbix&#39;
# 密码
MYSQL_PWD=&#39;zabbix&#39;
# 主机地址/IP
MYSQL_HOST=&#39;127.0.0.1&#39;
# 端口
MYSQL_PORT=&#39;3306&#39;
# 数据连接
MYSQL_CONN=&quot;/usr/bin/mysqladmin -u\${MYSQL_USER} -p\${MYSQL_PWD} -h\${MYSQL_HOST} -P\${MYSQL_PORT}&quot;
# 参数是否正确
if [ $# -ne &quot;1&quot; ];then 
    echo &quot;arg error!&quot; 
fi 
# 获取数据
case $1 in 
    Uptime) 
        result=\`\${MYSQL_CONN} status|cut -f2 -d&quot;:&quot;|cut -f1 -d&quot;T&quot;\` 
        echo $result 
        ;; 
    Com_update) 
        result=\`\${MYSQL_CONN} extended-status |grep -w &quot;Com_update&quot;|cut -d&quot;|&quot; -f3\` 
        echo $result 
        ;; 
    Slow_queries) 
        result=\`\${MYSQL_CONN} status |cut -f5 -d&quot;:&quot;|cut -f1 -d&quot;O&quot;\` 
        echo $result 
        ;; 
    Com_select) 
        result=\`\${MYSQL_CONN} extended-status |grep -w &quot;Com_select&quot;|cut -d&quot;|&quot; -f3\` 
        echo $result 
                ;; 
    Com_rollback) 
        result=\`\${MYSQL_CONN} extended-status |grep -w &quot;Com_rollback&quot;|cut -d&quot;|&quot; -f3\` 
                echo $result 
                ;; 
    Questions) 
        result=\`\${MYSQL_CONN} status|cut -f4 -d&quot;:&quot;|cut -f1 -d&quot;S&quot;\` 
                echo $result 
                ;; 
    Com_insert) 
        result=\`\${MYSQL_CONN} extended-status |grep -w &quot;Com_insert&quot;|cut -d&quot;|&quot; -f3\` 
                echo $result 
                ;; 
    Com_delete) 
        result=\`\${MYSQL_CONN} extended-status |grep -w &quot;Com_delete&quot;|cut -d&quot;|&quot; -f3\` 
                echo $result 
                ;; 
    Com_commit) 
        result=\`\${MYSQL_CONN} extended-status |grep -w &quot;Com_commit&quot;|cut -d&quot;|&quot; -f3\` 
                echo $result 
                ;; 
    Bytes_sent) 
        result=\`\${MYSQL_CONN} extended-status |grep -w &quot;Bytes_sent&quot; |cut -d&quot;|&quot; -f3\` 
                echo $result 
                ;; 
    Bytes_received) 
        result=\`\${MYSQL_CONN} extended-status |grep -w &quot;Bytes_received&quot; |cut -d&quot;|&quot; -f3\` 
                echo $result 
                ;; 
    Com_begin) 
        result=\`\${MYSQL_CONN} extended-status |grep -w &quot;Com_begin&quot;|cut -d&quot;|&quot; -f3\` 
                echo $result 
                ;; 

        *) 
        echo &quot;Usage:$0(Uptime|Com_update|Slow_queries|Com_select|Com_rollback|Questions|Com_insert|Com_delete|Com_commit|Bytes_sent|Bytes_received|Com_begin)&quot; 
        ;; 
esac
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改配置" tabindex="-1"><a class="header-anchor" href="#修改配置" aria-hidden="true">#</a> 修改配置</h3><p>vim /etc/zabbix/zabbix_agentd.d/userparameter_mysql.conf</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>
#UserParameter=mysql.status[*],echo &quot;show global status where Variable_name=&#39;$1&#39;;&quot; | HOME=/var/lib/zabbix mysql -N | awk &#39;{print $$2}&#39;
UserParameter=mysql.status[*],/etc/zabbix/chk_mysql.sh $1

#UserParameter=mysql.size[*],bash -c &#39;echo &quot;select sum($(case &quot;$3&quot; in both|&quot;&quot;) echo &quot;data_length+index_length&quot;;; data|index) echo &quot;$3_length&quot;;; free) echo &quot;data_free&quot;;; esac)) from information_schema.tables$([[ &quot;$1&quot; = &quot;all&quot; || ! &quot;$1&quot; ]] || echo &quot; where table_schema=\\&quot;$1\\&quot;&quot;)$([[ &quot;$2&quot; = &quot;all&quot; || ! &quot;$2&quot; ]] || echo &quot;and table_name=\\&quot;$2\\&quot;&quot;);&quot; | HOME=/var/lib/zabbix mysql -N&#39;

#UserParameter=mysql.ping,HOME=/var/lib/zabbix mysqladmin ping | grep -c alive
UserParameter=mysql.ping,mysqladmin -uzabbix -pzabbix -P3306 -h127.0.0.1  ping | grep -c alive

UserParameter=mysql.version,mysql -V

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),l=[a];function t(u,r){return i(),n("div",null,l)}const o=e(d,[["render",t],["__file","Zabbix-mysql.html.vue"]]);export{o as default};
