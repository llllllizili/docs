import{_ as s,X as a,Y as t,Z as p,$ as n,a3 as e}from"./framework-abbf9d44.js";const o={},c=n("p",null,"由于之前的分析系统和大屏的展示数据是基于MySQL进行开发和设置的，不支持其他的数据库，就导致最新的Zabbix数据无法进入到系统中，所以需要定时刷一下数据到MySQL中。",-1),l=n("p",null,"这里主要用 pymysql 和threading。",-1),i=n("ul",null,[n("li",null,"pymysql 用来做CRUD"),n("li",null,"threading 用来处理并发")],-1),u=e(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/python3</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token keyword">import</span> requests
<span class="token keyword">import</span> logging
<span class="token keyword">import</span> pymysql
<span class="token keyword">from</span> threading <span class="token keyword">import</span> Thread

<span class="token comment">#</span>
DBHOST <span class="token operator">=</span> <span class="token string">&quot;192.168.1.32&quot;</span>
DBUSRE <span class="token operator">=</span> <span class="token string">&quot;root&quot;</span>
DBPASSWORD <span class="token operator">=</span> <span class="token string">&quot;xxxxxx&quot;</span>
DBPORT <span class="token operator">=</span> <span class="token number">3306</span>
PROMETHEUS <span class="token operator">=</span> <span class="token string">&quot;http://192.168.3.130:9090/&quot;</span>

<span class="token comment"># db: jkprometheus</span>
<span class="token comment"># table: alert_history_data</span>

logging<span class="token punctuation">.</span>basicConfig<span class="token punctuation">(</span><span class="token builtin">format</span><span class="token operator">=</span><span class="token string">&#39;%(asctime)s - %(pathname)s[line:%(lineno)d] - %(levelname)s: %(message)s&#39;</span><span class="token punctuation">,</span>
                    level<span class="token operator">=</span>logging<span class="token punctuation">.</span>INFO<span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">DBConnect</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> host<span class="token punctuation">,</span> user<span class="token punctuation">,</span> password<span class="token punctuation">,</span> port<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>host <span class="token operator">=</span> host
        self<span class="token punctuation">.</span>user <span class="token operator">=</span> user
        self<span class="token punctuation">.</span>password <span class="token operator">=</span> password
        self<span class="token punctuation">.</span>port <span class="token operator">=</span> port

    <span class="token keyword">def</span> <span class="token function">db_init</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>

        create_db <span class="token operator">=</span> <span class="token string">&quot;CREATE DATABASE &quot;</span> \\
                    <span class="token string">&quot;IF NOT EXISTS jkprometheus  &quot;</span> \\
                    <span class="token string">&quot;DEFAULT CHARSET utf8 &quot;</span> \\
                    <span class="token string">&quot;COLLATE utf8_general_ci&quot;</span>

        conn <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>host<span class="token operator">=</span>self<span class="token punctuation">.</span>host<span class="token punctuation">,</span> user<span class="token operator">=</span>self<span class="token punctuation">.</span>user<span class="token punctuation">,</span> password<span class="token operator">=</span>self<span class="token punctuation">.</span>password<span class="token punctuation">,</span> port<span class="token operator">=</span>self<span class="token punctuation">.</span>port<span class="token punctuation">)</span>
        cursor <span class="token operator">=</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
        cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>create_db<span class="token punctuation">)</span>
        conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">table_init</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        use_db <span class="token operator">=</span> <span class="token string">&quot;USE jkprometheus&quot;</span>
        alert_history_data <span class="token operator">=</span> <span class="token string">&quot;CREATE TABLE &quot;</span> \\
                       <span class="token string">&quot;IF NOT EXISTS alert_history_data&quot;</span> \\
                       <span class="token string">&quot;( &quot;</span> \\
                       <span class="token string">&quot;id int primary key auto_increment, &quot;</span> \\
                       <span class="token string">&quot;project varchar(30) not null default &#39;河南县域&#39;, &quot;</span> \\
                       <span class="token string">&quot;instance varchar(30), &quot;</span> \\
                       <span class="token string">&quot;job varchar(100), &quot;</span> \\
                       <span class="token string">&quot;created datetime not null default CURRENT_TIMESTAMP, &quot;</span> \\
                       <span class="token string">&quot;description varchar(2222),&quot;</span> \\
                       <span class="token string">&quot;summary varchar(2222),&quot;</span> \\
                       <span class="token string">&quot;alert_state varchar(2222),&quot;</span> \\
                       <span class="token string">&quot;severity varchar(11),&quot;</span> \\
                       <span class="token string">&quot;active_at varchar(100)&quot;</span> \\
                       <span class="token string">&quot;)&quot;</span>
        conn <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>host<span class="token operator">=</span>self<span class="token punctuation">.</span>host<span class="token punctuation">,</span> user<span class="token operator">=</span>self<span class="token punctuation">.</span>user<span class="token punctuation">,</span> password<span class="token operator">=</span>self<span class="token punctuation">.</span>password<span class="token punctuation">,</span> port<span class="token operator">=</span>self<span class="token punctuation">.</span>port<span class="token punctuation">)</span>
        cursor <span class="token operator">=</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
        cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>use_db<span class="token punctuation">)</span>
        cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>alert_history_data<span class="token punctuation">)</span>
        conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">run_sql</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> sql<span class="token punctuation">)</span><span class="token punctuation">:</span>
        use_db <span class="token operator">=</span> <span class="token string">&quot;USE jkprometheus&quot;</span>
        conn <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>host<span class="token operator">=</span>self<span class="token punctuation">.</span>host<span class="token punctuation">,</span> user<span class="token operator">=</span>self<span class="token punctuation">.</span>user<span class="token punctuation">,</span> password<span class="token operator">=</span>self<span class="token punctuation">.</span>password<span class="token punctuation">,</span> port<span class="token operator">=</span>self<span class="token punctuation">.</span>port<span class="token punctuation">)</span>
        cursor <span class="token operator">=</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
        cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>use_db<span class="token punctuation">)</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            result <span class="token operator">=</span> cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
            conn<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">True</span><span class="token punctuation">,</span> result
        <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
            logging<span class="token punctuation">.</span>error<span class="token punctuation">(</span><span class="token builtin">repr</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token builtin">repr</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
        conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">JkPrometheus</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> username<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> password<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> server<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> verify<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>username <span class="token operator">=</span> username
        self<span class="token punctuation">.</span>password <span class="token operator">=</span> password
        self<span class="token punctuation">.</span>server <span class="token operator">=</span> server

        self<span class="token punctuation">.</span>_login <span class="token operator">=</span> <span class="token boolean">False</span>
        self<span class="token punctuation">.</span>_token <span class="token operator">=</span> <span class="token boolean">None</span>
        self<span class="token punctuation">.</span>_header <span class="token operator">=</span> <span class="token boolean">None</span>

    <span class="token decorator annotation punctuation">@staticmethod</span>
    <span class="token keyword">def</span> <span class="token function">set_header</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> k<span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>_header<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> v

    <span class="token keyword">def</span> <span class="token function">login</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>set_header<span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">)</span>

        <span class="token keyword">return</span> <span class="token boolean">True</span>

    <span class="token keyword">def</span> <span class="token function">_is_login</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># get_token_url = &#39;{}/oauth/token&#39;.format(self._server)</span>

        self<span class="token punctuation">.</span>_login <span class="token operator">=</span> <span class="token boolean">True</span> <span class="token keyword">if</span> self<span class="token punctuation">.</span>login<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token boolean">False</span>

    <span class="token keyword">def</span> <span class="token function">alert_data</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        url <span class="token operator">=</span> <span class="token string">&quot;{}/api/v1/alerts&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>server<span class="token punctuation">)</span>
        response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># logging.info(response)</span>

        <span class="token keyword">if</span> response<span class="token punctuation">[</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;alerts&#39;</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
            alerts <span class="token operator">=</span> response<span class="token punctuation">[</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;alerts&#39;</span><span class="token punctuation">]</span>

            <span class="token keyword">return</span> <span class="token boolean">True</span><span class="token punctuation">,</span> alerts
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span><span class="token punctuation">,</span> <span class="token boolean">None</span>


    <span class="token keyword">def</span> <span class="token function">alert_history_insert</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> job<span class="token punctuation">,</span> description<span class="token punctuation">,</span> summary<span class="token punctuation">,</span>active_at<span class="token punctuation">,</span> alert_state<span class="token punctuation">,</span> severity<span class="token punctuation">)</span><span class="token punctuation">:</span>


        sql <span class="token operator">=</span> <span class="token string">&#39;select id from alert_history_data where active_at=\\&quot;{}\\&quot; and alert_state=\\&quot;{}\\&quot;&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>active_at<span class="token punctuation">,</span>alert_state<span class="token punctuation">)</span>

        success<span class="token punctuation">,</span> data <span class="token operator">=</span>  DBConnect<span class="token punctuation">(</span>user<span class="token operator">=</span>DBUSRE<span class="token punctuation">,</span> password<span class="token operator">=</span>DBPASSWORD<span class="token punctuation">,</span> host<span class="token operator">=</span>DBHOST<span class="token punctuation">,</span> port<span class="token operator">=</span>DBPORT<span class="token punctuation">)</span><span class="token punctuation">.</span>run_sql<span class="token punctuation">(</span>sql<span class="token operator">=</span>sql<span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token keyword">not</span> data<span class="token punctuation">:</span>
            sql <span class="token operator">=</span> <span class="token string">&#39;INSERT INTO alert_history_data(instance, job, description, summary,active_at,alert_state,severity) &#39;</span> \\
                  <span class="token string">&#39;VALUES (\\&quot;{}\\&quot;,\\&quot;{}\\&quot;,\\&quot;{}\\&quot;,\\&quot;{}\\&quot;,\\&quot;{}\\&quot;,\\&quot;{}\\&quot;,\\&quot;{}\\&quot;&#39;</span> \\
                  <span class="token string">&#39;);&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>
                        instance<span class="token punctuation">,</span>
                        job<span class="token punctuation">,</span>
                        description<span class="token punctuation">,</span>
                        summary<span class="token punctuation">,</span>
                        active_at<span class="token punctuation">,</span>
                        alert_state<span class="token punctuation">,</span>
                        severity
                <span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            sql <span class="token operator">=</span> <span class="token string">&#39;UPDATE alert_history_data SET  severity=\\&quot;{}\\&quot; WHERE active_at=\\&quot;{}\\&quot; and alert_state=\\&quot;{}\\&quot;&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>severity<span class="token punctuation">,</span>active_at<span class="token punctuation">,</span>alert_state<span class="token punctuation">)</span>

        DBConnect<span class="token punctuation">(</span>user<span class="token operator">=</span>DBUSRE<span class="token punctuation">,</span> password<span class="token operator">=</span>DBPASSWORD<span class="token punctuation">,</span> host<span class="token operator">=</span>DBHOST<span class="token punctuation">,</span> port<span class="token operator">=</span>DBPORT<span class="token punctuation">)</span><span class="token punctuation">.</span>run_sql<span class="token punctuation">(</span>sql<span class="token operator">=</span>sql<span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>

    logging<span class="token punctuation">.</span>info<span class="token punctuation">(</span><span class="token string">&#39;alert_data - start&#39;</span><span class="token punctuation">)</span>

    threads <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    DBConnect<span class="token punctuation">(</span>user<span class="token operator">=</span>DBUSRE<span class="token punctuation">,</span> password<span class="token operator">=</span>DBPASSWORD<span class="token punctuation">,</span> host<span class="token operator">=</span>DBHOST<span class="token punctuation">,</span> port<span class="token operator">=</span>DBPORT<span class="token punctuation">)</span><span class="token punctuation">.</span>db_init<span class="token punctuation">(</span><span class="token punctuation">)</span>
    DBConnect<span class="token punctuation">(</span>user<span class="token operator">=</span>DBUSRE<span class="token punctuation">,</span> password<span class="token operator">=</span>DBPASSWORD<span class="token punctuation">,</span> host<span class="token operator">=</span>DBHOST<span class="token punctuation">,</span> port<span class="token operator">=</span>DBPORT<span class="token punctuation">)</span><span class="token punctuation">.</span>table_init<span class="token punctuation">(</span><span class="token punctuation">)</span>

    prom <span class="token operator">=</span> JkPrometheus<span class="token punctuation">(</span>server<span class="token operator">=</span>PROMETHEUS<span class="token punctuation">)</span>
    success<span class="token punctuation">,</span> alerts <span class="token operator">=</span> prom<span class="token punctuation">.</span>alert_data<span class="token punctuation">(</span><span class="token punctuation">)</span>


    <span class="token keyword">def</span> <span class="token function">prom_to_mysql</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> job<span class="token punctuation">,</span> description<span class="token punctuation">,</span> summary<span class="token punctuation">,</span> active_at<span class="token punctuation">,</span> alert_state<span class="token punctuation">,</span> severity<span class="token punctuation">)</span><span class="token punctuation">:</span>
        prom<span class="token punctuation">.</span>alert_history_insert<span class="token punctuation">(</span>
            instance<span class="token operator">=</span>instance<span class="token punctuation">,</span>
            job<span class="token operator">=</span>job<span class="token punctuation">,</span>
            description<span class="token operator">=</span>description<span class="token punctuation">,</span>
            summary<span class="token operator">=</span>summary<span class="token punctuation">,</span>
            active_at<span class="token operator">=</span>active_at<span class="token punctuation">,</span>
            alert_state<span class="token operator">=</span>alert_state<span class="token punctuation">,</span>
            severity<span class="token operator">=</span>severity
        <span class="token punctuation">)</span>

    <span class="token keyword">for</span> alert <span class="token keyword">in</span> alerts<span class="token punctuation">:</span>
        instance <span class="token operator">=</span> alert<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;labels&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;instance&#39;</span><span class="token punctuation">)</span>
        severity <span class="token operator">=</span> alert<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;labels&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;severity&#39;</span><span class="token punctuation">)</span>
        job <span class="token operator">=</span> alert<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;labels&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;job&#39;</span><span class="token punctuation">)</span>
        description <span class="token operator">=</span> alert<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;annotations&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;description&#39;</span><span class="token punctuation">)</span>
        summary <span class="token operator">=</span> alert<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;annotations&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;summary&#39;</span><span class="token punctuation">)</span>
        active_at <span class="token operator">=</span> alert<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;activeAt&#39;</span><span class="token punctuation">)</span>
        alert_state <span class="token operator">=</span> alert<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;state&#39;</span><span class="token punctuation">)</span>
        threads<span class="token punctuation">.</span>append<span class="token punctuation">(</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>prom_to_mysql<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> job<span class="token punctuation">,</span> description<span class="token punctuation">,</span> summary<span class="token punctuation">,</span>active_at<span class="token punctuation">,</span> alert_state<span class="token punctuation">,</span>severity <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        threads<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> thread <span class="token keyword">in</span> threads<span class="token punctuation">:</span>
        thread<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>

    logging<span class="token punctuation">.</span>info<span class="token punctuation">(</span><span class="token string">&#39;alert_data - done&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function r(k,d){return a(),t("div",null,[c,l,i,p(" more "),u])}const m=s(o,[["render",r],["__file","同步pgsql数据到mysql.html.vue"]]);export{m as default};
