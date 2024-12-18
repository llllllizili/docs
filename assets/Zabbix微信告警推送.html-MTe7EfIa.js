import{_ as n,c as a,a as e,b as s,f as i,o as p}from"./app-BfCDUtKQ.js";const l="/assets/zabbix-text-ByrjBhJh.jpg",c="/assets/zabbix-2-Cx8sXLEk.png",r="/assets/zabbix-3-DBDkD4it.jpg",d="/assets/zabbix-4-yCszR6mg.jpg",t="/assets/zabbix-5--NVaGVM-.jpg",v="/assets/zabbix-6-Dw-9EUXq.jpg",o="/assets/zabbix-7-BypA0lOQ.jpg",u={},m=s("div",{class:"hint-container caution"},[s("p",{class:"hint-container-title"},"请注意"),s("p",null,"本文内容可能已过时，部分接口，参数等，存在变更的可能，请自行甄别。")],-1),b=s("figure",null,[s("img",{src:l,alt:"文本告警",tabindex:"0",loading:"lazy"}),s("figcaption",null,"文本告警")],-1),g=s("p",null,[s("strong",null,"前言")],-1),_=s("p",null,"zabbx告警结合微信,可以更及时对故障进行响应和处理。",-1),q=s("p",null,"另：文末有进阶版实现效果",-1),h=i('<hr><p><strong>告警的模式分为两种,第一种就是本文消息的直接推送,第二种是图文推送,可做到交互,本文主要介绍第一种</strong></p><h2 id="前提条件" tabindex="-1"><a class="header-anchor" href="#前提条件"><span>前提条件</span></a></h2><blockquote><ol><li>zabbix</li><li>企业号</li><li>脚本</li></ol></blockquote><h2 id="企业号" tabindex="-1"><a class="header-anchor" href="#企业号"><span>企业号</span></a></h2><p>申请，略</p><h3 id="获取信息" tabindex="-1"><a class="header-anchor" href="#获取信息"><span>获取信息</span></a></h3><p>取得企业号的部门ID,应用ID, CorpID,Secret</p><figure><img src="'+c+`" alt="企业号信息" tabindex="0" loading="lazy"><figcaption>企业号信息</figcaption></figure><h2 id="脚本" tabindex="-1"><a class="header-anchor" href="#脚本"><span>脚本</span></a></h2><p>脚本可以推送两种格式,文本和新闻.</p><h3 id="推送文本" tabindex="-1"><a class="header-anchor" href="#推送文本"><span>推送文本</span></a></h3><p><strong>来自网上, 视情况修改4处 <code>self.__corpid</code> 和<code>self.__secret</code> <code>toparty</code> <code>agentid</code></strong></p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>#!/usr/bin/env python</span></span>
<span class="line"><span># coding: utf-8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import urllib,urllib2,json</span></span>
<span class="line"><span>import sys</span></span>
<span class="line"><span>reload(sys)</span></span>
<span class="line"><span>sys.setdefaultencoding( &quot;utf-8&quot; )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class WeChat(object):</span></span>
<span class="line"><span>    __token_id = &#39;&#39;</span></span>
<span class="line"><span>    # init attribute</span></span>
<span class="line"><span>    def __init__(self,url):</span></span>
<span class="line"><span>        self.__url = url.rstrip(&#39;/&#39;)</span></span>
<span class="line"><span>        #CorpID</span></span>
<span class="line"><span>        self.__corpid = &#39;wx643f**********&#39;   </span></span>
<span class="line"><span>        #Secret </span></span>
<span class="line"><span>        self.__secret = &#39;YQOu7Qzad********hGJ9xHlby****_v1oF2WpBOlsy****TivMKAL***voA3MwKH&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # Get TokenID</span></span>
<span class="line"><span>    def authID(self):</span></span>
<span class="line"><span>        params = {&#39;corpid&#39;:self.__corpid, &#39;corpsecret&#39;:self.__secret}</span></span>
<span class="line"><span>        data = urllib.urlencode(params)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        content = self.getToken(data)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        try:</span></span>
<span class="line"><span>            self.__token_id = content[&#39;access_token&#39;]</span></span>
<span class="line"><span>            # print content[&#39;access_token&#39;]</span></span>
<span class="line"><span>        except KeyError:</span></span>
<span class="line"><span>            raise KeyError</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # Establish a connection</span></span>
<span class="line"><span>    def getToken(self,data,url_prefix=&#39;/&#39;):</span></span>
<span class="line"><span>        url = self.__url + url_prefix + &#39;gettoken?&#39;</span></span>
<span class="line"><span>        try:</span></span>
<span class="line"><span>            response = urllib2.Request(url + data)</span></span>
<span class="line"><span>        except KeyError:</span></span>
<span class="line"><span>            raise KeyError</span></span>
<span class="line"><span>        result = urllib2.urlopen(response)</span></span>
<span class="line"><span>        content = json.loads(result.read())</span></span>
<span class="line"><span>        return content</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # Get sendmessage url</span></span>
<span class="line"><span>    def postData(self,data,url_prefix=&#39;/&#39;):</span></span>
<span class="line"><span>        url = self.__url + url_prefix + &#39;message/send?access_token=%s&#39; % self.__token_id</span></span>
<span class="line"><span>        request = urllib2.Request(url,data)</span></span>
<span class="line"><span>        try:</span></span>
<span class="line"><span>            result = urllib2.urlopen(request)</span></span>
<span class="line"><span>        except urllib2.HTTPError as e:</span></span>
<span class="line"><span>            if hasattr(e,&#39;reason&#39;):</span></span>
<span class="line"><span>                print &#39;reason&#39;,e.reason</span></span>
<span class="line"><span>            elif hasattr(e,&#39;code&#39;):</span></span>
<span class="line"><span>                print &#39;code&#39;,e.code</span></span>
<span class="line"><span>            return 0</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            content = json.loads(result.read())</span></span>
<span class="line"><span>            result.close()</span></span>
<span class="line"><span>        return content</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # send message</span></span>
<span class="line"><span>    def sendMessage(self,touser,message):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        self.authID()</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 具体可查看wechat接口文档http://qydev.weixin.qq.com/</span></span>
<span class="line"><span>        data = json.dumps({</span></span>
<span class="line"><span>            #&#39;touser&#39;:touser, #企业号中的用户帐号,如果没,则按部门推送.</span></span>
<span class="line"><span>            &#39;toparty&#39;:&quot;3&quot;,  #部门ID </span></span>
<span class="line"><span>            &#39;msgtype&#39;:&quot;text&quot;,</span></span>
<span class="line"><span>            &#39;agentid&#39;:&quot;1&quot;, #应用ID</span></span>
<span class="line"><span>            &#39;text&#39;:{</span></span>
<span class="line"><span>                &#39;content&#39;:message</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            &#39;safe&#39;:&quot;0&quot;</span></span>
<span class="line"><span>        },ensure_ascii=False)</span></span>
<span class="line"><span>        response = self.postData(data)</span></span>
<span class="line"><span>        print response</span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    a = WeChat(&#39;https://qyapi.weixin.qq.com/cgi-bin&#39;)</span></span>
<span class="line"><span>    a.sendMessage(sys.argv[1], sys.argv[3])</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="推送news" tabindex="-1"><a class="header-anchor" href="#推送news"><span>推送news</span></a></h3><p><strong>同样的脚本,需要修改如下</strong></p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>##图文格式(推荐),修改脚本的data如下</span></span>
<span class="line"><span>        data = json.dumps({</span></span>
<span class="line"><span>            &#39;touser&#39;:touser, #企业号中的用户帐号</span></span>
<span class="line"><span>            &#39;toparty&#39;:&quot;3&quot;,  #部门ID </span></span>
<span class="line"><span>            &#39;msgtype&#39;:&quot;news&quot;,</span></span>
<span class="line"><span>            &#39;agentid&#39;:&quot;1&quot;, #应用ID</span></span>
<span class="line"><span>            &#39;news&#39;:{</span></span>
<span class="line"><span>                &quot;articles&quot;:[{</span></span>
<span class="line"><span>                    &quot;title&quot;:title,</span></span>
<span class="line"><span>                    &quot;description&quot;:message</span></span>
<span class="line"><span>                        }]</span></span>
<span class="line"><span>                },   </span></span>
<span class="line"><span>            &quot;safe&quot;:0</span></span>
<span class="line"><span>        },ensure_ascii=False)</span></span>
<span class="line"><span>##end</span></span>
<span class="line"><span>##修改</span></span>
<span class="line"><span>1：import re</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2：</span></span>
<span class="line"><span>def sendMessage(self,touser,message): 修改为</span></span>
<span class="line"><span>def sendMessage(self,touser,title,message):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3：</span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    a = WeChat(&#39;https://qyapi.weixin.qq.com/cgi-bin&#39;)</span></span>
<span class="line"><span>    a.sendMessage(sys.argv[1], sys.argv[3])</span></span>
<span class="line"><span>修改为</span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    a = WeChat(&#39;https://qyapi.weixin.qq.com/cgi-bin&#39;)</span></span>
<span class="line"><span>    info = sys.argv[3]</span></span>
<span class="line"><span>    info2 = re.split(&#39;[&amp;&amp;]&#39;,info)</span></span>
<span class="line"><span>    a.sendMessage(sys.argv[1],info2[0],info2[2])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4：</span></span>
<span class="line"><span>zabbix页面的动作-默认信息中添加&amp;&amp; 用来进行信息分割</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>脚本放至zbx脚本目录下即可</p><h2 id="zabbix" tabindex="-1"><a class="header-anchor" href="#zabbix"><span>zabbix</span></a></h2><h3 id="媒介配置" tabindex="-1"><a class="header-anchor" href="#媒介配置"><span>媒介配置</span></a></h3><blockquote><p>管理 ---&gt; 媒介---&gt; 新建<br> 名称随便,这里命名wechat<br><a href="http://xn--wechat-9m7itcs24ekgbq86j3qzbkkjsizw3csx7b2k3c.py" target="_blank" rel="noopener noreferrer">脚本名称要和上面的一致wechat.py</a><br> 脚本参数要依次填写以下三个<br> 这三个参数就是传给脚本的sys.argv[]</p></blockquote><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>{ALERT.SENDTO}</span></span>
<span class="line"><span>{ALERT.SUBJECT}</span></span>
<span class="line"><span>{ALERT.MESSAGE}</span></span></code></pre></div><figure><img src="`+r+'" alt="zabbix媒介" tabindex="0" loading="lazy"><figcaption>zabbix媒介</figcaption></figure><h3 id="用户" tabindex="-1"><a class="header-anchor" href="#用户"><span>用户</span></a></h3><blockquote><p>创建一个wechat用户,给予相关用户媒介权限(刚刚创建的媒介)<br> 注意收件人,这个是脚本的第一个参数.也就是说这里要填写的是应该是微信用户，或者部门ID，这里填写部门ID 这样wechat.py脚本才能取得正确的值</p></blockquote><figure><img src="'+d+`" alt="zabbix用户" tabindex="0" loading="lazy"><figcaption>zabbix用户</figcaption></figure><h3 id="动作" tabindex="-1"><a class="header-anchor" href="#动作"><span>动作</span></a></h3><blockquote><p>动作的 操作选项--&gt;选发送消息,添加相应的用户 或者群组就行了.<br> 我是发送给wechat用户的,因为他关联了wechat.py媒介.所以所有的消息将传递给他,他的媒介连接脚本,脚本连接企业微信,整个流程就打通了.</p></blockquote><h2 id="参考配置" tabindex="-1"><a class="header-anchor" href="#参考配置"><span>参考配置</span></a></h2><p>告警:</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>{TRIGGER.SEVERITY} : {TRIGGER.NAME}&amp;&amp;</span></span>
<span class="line"><span>-------------------------------------------</span></span>
<span class="line"><span>ID：{EVENT.ID}</span></span>
<span class="line"><span>主机名称:{HOST.NAME}</span></span>
<span class="line"><span>主机地址:{HOST.IP}</span></span>
<span class="line"><span>告警时间:{EVENT.DATE}  -  {EVENT.TIME}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>告警描述:{TRIGGER.DESCRIPTION}</span></span>
<span class="line"><span>---------------------------------</span></span></code></pre></div><p>恢复:</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>恢复 :  {TRIGGER.NAME}&amp;&amp;</span></span>
<span class="line"><span>-------------------------------------------</span></span>
<span class="line"><span>ID：{EVENT.ID}</span></span>
<span class="line"><span>主机名称:{HOST.NAME}</span></span>
<span class="line"><span>主机地址:{HOST.IP}</span></span>
<span class="line"><span>告警时间:{EVENT.DATE}  -  {EVENT.TIME}</span></span>
<span class="line"><span>恢复时间:{EVENT.RECOVERY.DATE}  -  {EVENT.RECOVERY.TIME}</span></span>
<span class="line"><span>持续时间:{EVENT.AGE}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>告警等级: {TRIGGER.SEVERITY}</span></span>
<span class="line"><span>告警描述:{TRIGGER.DESCRIPTION}</span></span></code></pre></div><figure><img src="`+t+`" alt="zabbix动作" tabindex="0" loading="lazy"><figcaption>zabbix动作</figcaption></figure><h2 id="图文-参考" tabindex="-1"><a class="header-anchor" href="#图文-参考"><span>图文(参考)</span></a></h2><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span># coding: utf-8</span></span>
<span class="line"><span>import sys</span></span>
<span class="line"><span>import requests</span></span>
<span class="line"><span>from time import sleep</span></span>
<span class="line"><span>import json</span></span>
<span class="line"><span>import time</span></span>
<span class="line"><span></span></span>
<span class="line"><span>WX_CORPID = r&quot;wx643f8***********&quot;</span></span>
<span class="line"><span>WX_CORPSECRET = r&quot;qwojyG*******************&quot;</span></span>
<span class="line"><span>WX_TOKEN_FILE = &quot;/tmp/accesstoken&quot;</span></span>
<span class="line"><span>AGENT_ID = &#39;100000*&#39;</span></span>
<span class="line"><span>TOPARTY=&#39;*&#39;</span></span>
<span class="line"><span>LOG_FILE=&quot;/tmp/zabbix_send_log&quot;</span></span>
<span class="line"><span>def c_log(msg):</span></span>
<span class="line"><span>    try:</span></span>
<span class="line"><span>        perameter_file=open(LOG_FILE,&#39;a&#39;)</span></span>
<span class="line"><span>        perameter_file.write(msg+&quot;\\n&quot;)</span></span>
<span class="line"><span>    except:</span></span>
<span class="line"><span>        exit(1)</span></span>
<span class="line"><span>    finally:</span></span>
<span class="line"><span>        perameter_file.close()</span></span>
<span class="line"><span>def refresh_token(corpid=WX_CORPID, corpsecrt=WX_CORPSECRET):</span></span>
<span class="line"><span>    get_url = r&quot;https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=&quot; + WX_CORPID + &quot;&amp;corpsecret=&quot; + WX_CORPSECRET</span></span>
<span class="line"><span>    for i in range(3):</span></span>
<span class="line"><span>        try:</span></span>
<span class="line"><span>            req_ret = requests.get(get_url, timeout=6)</span></span>
<span class="line"><span>            jso_ret = req_ret.json()</span></span>
<span class="line"><span>            file_tok = open(WX_TOKEN_FILE, &quot;w&quot;)</span></span>
<span class="line"><span>            file_tok.write(jso_ret[&quot;access_token&quot;])</span></span>
<span class="line"><span>            file_tok.close()</span></span>
<span class="line"><span>            return jso_ret[&quot;access_token&quot;]</span></span>
<span class="line"><span>        except requests.exceptions.ConnectTimeout:</span></span>
<span class="line"><span>            sleep(10)</span></span>
<span class="line"><span>        except Exception as exc:</span></span>
<span class="line"><span>            print(exc.args)</span></span>
<span class="line"><span>            return None</span></span>
<span class="line"><span>    return None</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def get_token(corpid=WX_CORPID, corpsecrt=WX_CORPSECRET):</span></span>
<span class="line"><span>    try:</span></span>
<span class="line"><span>        file_tok = open(WX_TOKEN_FILE, &quot;r&quot;)</span></span>
<span class="line"><span>        token = file_tok.read()</span></span>
<span class="line"><span>        file_tok.close()</span></span>
<span class="line"><span>        if len(token) !=64:</span></span>
<span class="line"><span>            raise FileNotFoundError(r&quot;token length !=64&quot;)</span></span>
<span class="line"><span>        return token</span></span>
<span class="line"><span>    except FileNotFoundError:</span></span>
<span class="line"><span>        get_url = r&quot;https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=&quot; + WX_CORPID + &quot;&amp;corpsecret=&quot; + WX_CORPSECRET</span></span>
<span class="line"><span>        for i in range(3):</span></span>
<span class="line"><span>            try:</span></span>
<span class="line"><span>              req_ret = requests.get(get_url, timeout=6)</span></span>
<span class="line"><span>              jso_ret = req_ret.json()</span></span>
<span class="line"><span>              file_tok = open(WX_TOKEN_FILE, &quot;w&quot;)</span></span>
<span class="line"><span>              file_tok.write(jso_ret[&quot;access_token&quot;])</span></span>
<span class="line"><span>              file_tok.close()</span></span>
<span class="line"><span>              return jso_ret[&quot;access_token&quot;]</span></span>
<span class="line"><span>            except requests.exceptions.ConnectTimeout:</span></span>
<span class="line"><span>                sleep(10)</span></span>
<span class="line"><span>            except Exception as exc:</span></span>
<span class="line"><span>                print(exc.args)</span></span>
<span class="line"><span>                return None</span></span>
<span class="line"><span>    except Exception as exc:</span></span>
<span class="line"><span>            print(exc.args)</span></span>
<span class="line"><span>    return None</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def create_articles():</span></span>
<span class="line"><span>    msg_argv=sys.argv[3].split(&quot;&amp;&amp;&quot;)</span></span>
<span class="line"><span>    if(msg_argv[0]==&quot;PROBLEM&quot;):</span></span>
<span class="line"><span>        if(msg_argv[1]==&quot;灾难&quot;):</span></span>
<span class="line"><span>            pic_url=&quot;图片地址&quot;</span></span>
<span class="line"><span>        elif(msg_argv[1]==&quot;一般严重&quot;):</span></span>
<span class="line"><span>            pic_url=&quot;图片地址&quot;</span></span>
<span class="line"><span>        elif(msg_argv[1]==&quot;严重&quot;):</span></span>
<span class="line"><span>            pic_url=&quot;图片地址&quot;</span></span>
<span class="line"><span>        elif(msg_argv[1]==&quot;警告&quot;):</span></span>
<span class="line"><span>            pic_url=&quot;图片地址&quot;</span></span>
<span class="line"><span>        elif(msg_argv[1]==&quot;通知&quot;):</span></span>
<span class="line"><span>            pic_url=&quot;图片地址&quot;</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            pic_url=&quot;图片地址&quot;</span></span>
<span class="line"><span>        ret = [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;title&quot;: &quot;%s&quot;%(msg_argv[2]),</span></span>
<span class="line"><span>                &quot;description&quot;:&quot;ID:%s\\n告警时间: %s&quot;%(msg_argv[3],msg_argv[7]),</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;title&quot;:&quot;主机分类: %s \\n主机名称: %s \\n主机地址: %s&quot;%(msg_argv[4],msg_argv[5],msg_argv[6]),</span></span>
<span class="line"><span>                &quot;picurl&quot;: &quot;%s&quot;%pic_url</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;title&quot;:&quot;告警描述:\\n%s&quot;%(msg_argv[8]),</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>        return ret</span></span>
<span class="line"><span>    elif(msg_argv[0]==&quot;OK&quot;):</span></span>
<span class="line"><span>        if(msg_argv[1]==&quot;通知&quot;):</span></span>
<span class="line"><span>            return None</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            pic_url=&quot;图片地址&quot;</span></span>
<span class="line"><span>            return [</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                &quot;title&quot;: &quot;恢复-%s&quot;%(msg_argv[2]),</span></span>
<span class="line"><span>                &quot;description&quot;:&quot;ID: %s\\n持续时长：%s\\n恢复时间: %s\\n告警时间: %s&quot;%(msg_argv[3],msg_argv[10],msg_argv[7],msg_argv[9]),</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                &quot;title&quot;:&quot;主机分类: %s\\n主机名称: %s\\n主机地址: %s&quot;%(msg_argv[4],msg_argv[5],msg_argv[6]),</span></span>
<span class="line"><span>                &quot;picurl&quot;: &quot;%s&quot;%pic_url</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                &quot;title&quot;:&quot;告警等级: %s\\n告警描述: %s&quot;%(msg_argv[1],msg_argv[8])</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>    return None</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#def send_news(type,target,arti):</span></span>
<span class="line"><span>def send_news(arti):</span></span>
<span class="line"><span>    access_token = get_token()</span></span>
<span class="line"><span>    if access_token == None:</span></span>
<span class="line"><span>        return 1</span></span>
<span class="line"><span>    send_msg_url = r&quot;https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=&quot;+access_token</span></span>
<span class="line"><span>    msg_josn ={}</span></span>
<span class="line"><span>    msg_josn[&quot;toparty&quot;] = TOPARTY</span></span>
<span class="line"><span>    msg_josn[&quot;msgtype&quot;] = &quot;news&quot;</span></span>
<span class="line"><span>    msg_josn[&quot;agentid&quot;] = AGENT_ID</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    msg_josn[&quot;news&quot;] = {&quot;articles&quot;: arti}</span></span>
<span class="line"><span>    #print (msg_josn)</span></span>
<span class="line"><span>    send_data = json.dumps(msg_josn, ensure_ascii=False).encode(encoding=&#39;UTF8&#39;,)   </span></span>
<span class="line"><span>    #print(send_data)</span></span>
<span class="line"><span>    for i in range(4):</span></span>
<span class="line"><span>        try:</span></span>
<span class="line"><span>            if i &gt;= 4:</span></span>
<span class="line"><span>                return 1</span></span>
<span class="line"><span>            req_ret = requests.post(send_msg_url, data=send_data, timeout=5)</span></span>
<span class="line"><span>            c_log(req_ret.text)</span></span>
<span class="line"><span>            jos_ret = req_ret.json()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if jos_ret[&quot;errcode&quot;] == 0:</span></span>
<span class="line"><span>                return 0</span></span>
<span class="line"><span>            elif jos_ret[&quot;errcode&quot;] == 40014:</span></span>
<span class="line"><span>                token = refresh_token(WX_CORPID, WX_CORPSECRET)</span></span>
<span class="line"><span>                if token == None:</span></span>
<span class="line"><span>                    return 1</span></span>
<span class="line"><span>                access_token = token</span></span>
<span class="line"><span>                send_msg_url = r&quot;https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=&quot; + access_token</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                return 1</span></span>
<span class="line"><span>        except requests.exceptions.ConnectTimeout:</span></span>
<span class="line"><span>            sleep(2)</span></span>
<span class="line"><span>        except Exception as exc:</span></span>
<span class="line"><span>            return 1</span></span>
<span class="line"><span>    return 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__==&quot;__main__&quot;:</span></span>
<span class="line"><span>    articles=create_articles()</span></span>
<span class="line"><span>    #if(articles==None):</span></span>
<span class="line"><span>     #   exit(1)</span></span>
<span class="line"><span>    #send_news(0,sys.argv[1],articles)</span></span>
<span class="line"><span>#    send_news(articles)</span></span>
<span class="line"><span>    if(send_news(articles)!=0):</span></span>
<span class="line"><span>        exit(1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#告警</span></span>
<span class="line"><span>{TRIGGER.STATUS}&amp;&amp;{TRIGGER.SEVERITY}&amp;&amp;{HOST.NAME}-{TRIGGER.NAME}&amp;&amp;{EVENT.ID}&amp;&amp;{TRIGGER.HOSTGROUP.NAME}&amp;&amp;{HOST.NAME}&amp;&amp;{HOST.IP}&amp;&amp;{EVENT.DATE}-{EVENT.TIME}&amp;&amp;{TRIGGER.DESCRIPTION}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#恢复</span></span>
<span class="line"><span>{TRIGGER.STATUS}&amp;&amp;{TRIGGER.SEVERITY}&amp;&amp;{HOST.NAME}-{TRIGGER.NAME}&amp;&amp;{EVENT.ID}&amp;&amp;{TRIGGER.HOSTGROUP.NAME}&amp;&amp;{HOST.NAME}&amp;&amp;{HOST.IP}&amp;&amp;{EVENT.DATE}  -  {EVENT.TIME}&amp;&amp;{TRIGGER.DESCRIPTION}&amp;&amp;{EVENT.RECOVERY.DATE}  -  {EVENT.RECOVERY.TIME}&amp;&amp;{EVENT.AGE}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可推送出类似如下格式的告警</p><figure><img src="`+v+'" alt="告警推动01" width="300" height="600" tabindex="0" loading="lazy"><figcaption>告警推动01</figcaption></figure><h2 id="工程项目" tabindex="-1"><a class="header-anchor" href="#工程项目"><span>工程项目</span></a></h2><p>工程项目可实现了，告警的筛选，处理的交互，消息的聚合，通知的升级等，详情见<a href="https://github.com/llllllizili/zbx-wechat" target="_blank" rel="noopener noreferrer">代码仓库</a></p><blockquote><p>对web开发有一定了解,熟悉python,zabbix API,微信API,用Django做后台处理交互.可推出如下告警.</p></blockquote><figure><img src="'+o+'" alt="告警推动02" width="300" height="600" tabindex="0" loading="lazy"><figcaption>告警推动02</figcaption></figure>',42);function E(f,k){return p(),a("div",null,[m,b,g,_,q,e("more"),h])}const T=n(u,[["render",E],["__file","Zabbix微信告警推送.html.vue"]]),y=JSON.parse(`{"path":"/ops/monitor/zabbix/Zabbix%E5%BE%AE%E4%BF%A1%E5%91%8A%E8%AD%A6%E6%8E%A8%E9%80%81.html","title":"告警推送(ZBX-微信)","lang":"zh-CN","frontmatter":{"article":false,"title":"告警推送(ZBX-微信)","order":1,"index":true,"category":["监控"],"tag":["zabbix","消息通知"],"description":"请注意 本文内容可能已过时，部分接口，参数等，存在变更的可能，请自行甄别。 文本告警文本告警 前言 zabbx告警结合微信,可以更及时对故障进行响应和处理。 另：文末有进阶版实现效果 告警的模式分为两种,第一种就是本文消息的直接推送,第二种是图文推送,可做到交互,本文主要介绍第一种 前提条件 zabbix 企业号 脚本 企业号 申请，略 获取信息 取得...","head":[["meta",{"property":"og:url","content":"https://docs.lizili.online/ops/monitor/zabbix/Zabbix%E5%BE%AE%E4%BF%A1%E5%91%8A%E8%AD%A6%E6%8E%A8%E9%80%81.html"}],["meta",{"property":"og:site_name","content":"lzz's Blog"}],["meta",{"property":"og:title","content":"告警推送(ZBX-微信)"}],["meta",{"property":"og:description","content":"请注意 本文内容可能已过时，部分接口，参数等，存在变更的可能，请自行甄别。 文本告警文本告警 前言 zabbx告警结合微信,可以更及时对故障进行响应和处理。 另：文末有进阶版实现效果 告警的模式分为两种,第一种就是本文消息的直接推送,第二种是图文推送,可做到交互,本文主要介绍第一种 前提条件 zabbix 企业号 脚本 企业号 申请，略 获取信息 取得..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-23T05:06:11.000Z"}],["meta",{"property":"article:author","content":"z"}],["meta",{"property":"article:tag","content":"zabbix"}],["meta",{"property":"article:tag","content":"消息通知"}],["meta",{"property":"article:modified_time","content":"2024-04-23T05:06:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"告警推送(ZBX-微信)\\",\\"description\\":\\"请注意 本文内容可能已过时，部分接口，参数等，存在变更的可能，请自行甄别。 文本告警文本告警 前言 zabbx告警结合微信,可以更及时对故障进行响应和处理。 另：文末有进阶版实现效果 告警的模式分为两种,第一种就是本文消息的直接推送,第二种是图文推送,可做到交互,本文主要介绍第一种 前提条件 zabbix 企业号 脚本 企业号 申请，略 获取信息 取得...\\"}"]]},"headers":[{"level":2,"title":"前提条件","slug":"前提条件","link":"#前提条件","children":[]},{"level":2,"title":"企业号","slug":"企业号","link":"#企业号","children":[{"level":3,"title":"获取信息","slug":"获取信息","link":"#获取信息","children":[]}]},{"level":2,"title":"脚本","slug":"脚本","link":"#脚本","children":[{"level":3,"title":"推送文本","slug":"推送文本","link":"#推送文本","children":[]},{"level":3,"title":"推送news","slug":"推送news","link":"#推送news","children":[]}]},{"level":2,"title":"zabbix","slug":"zabbix","link":"#zabbix","children":[{"level":3,"title":"媒介配置","slug":"媒介配置","link":"#媒介配置","children":[]},{"level":3,"title":"用户","slug":"用户","link":"#用户","children":[]},{"level":3,"title":"动作","slug":"动作","link":"#动作","children":[]}]},{"level":2,"title":"参考配置","slug":"参考配置","link":"#参考配置","children":[]},{"level":2,"title":"图文(参考)","slug":"图文-参考","link":"#图文-参考","children":[]},{"level":2,"title":"工程项目","slug":"工程项目","link":"#工程项目","children":[]}],"git":{"createdTime":1680433735000,"updatedTime":1713848771000,"contributors":[{"name":"lizili","email":"cn.zili.lee@outlook.com","commits":2}]},"readingTime":{"minutes":5.36,"words":1608},"filePathRelative":"ops/monitor/zabbix/Zabbix微信告警推送.md","localizedDate":"2023年4月2日","excerpt":"<div class=\\"hint-container caution\\">\\n<p class=\\"hint-container-title\\">请注意</p>\\n<p>本文内容可能已过时，部分接口，参数等，存在变更的可能，请自行甄别。</p>\\n</div>\\n<figure><figcaption>文本告警</figcaption></figure>\\n<p><strong>前言</strong></p>\\n<p>zabbx告警结合微信,可以更及时对故障进行响应和处理。</p>\\n<p>另：文末有进阶版实现效果</p>\\n<!--more-->\\n<hr>\\n<p><strong>告警的模式分为两种,第一种就是本文消息的直接推送,第二种是图文推送,可做到交互,本文主要介绍第一种</strong></p>","autoDesc":true}`);export{T as comp,y as data};
