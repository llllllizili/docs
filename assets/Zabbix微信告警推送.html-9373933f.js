import{_ as s,X as l,Y as d,Z as a,$ as e,a0 as i,a1 as r,a3 as t,F as v}from"./framework-abbf9d44.js";const u="/assets/zabbix-text-066728f2.jpg",c="/assets/zabbix-2-2faa0b49.png",o="/assets/zabbix-3-3e28e54c.jpg",m="/assets/zabbix-4-455ccb0e.jpg",b="/assets/zabbix-5-103393fa.jpg",_="/assets/zabbix-6-90d66dc5.jpg",p="/assets/zabbix-7-06c0afc5.jpg",g={},q=e("div",{class:"hint-container danger"},[e("p",{class:"hint-container-title"},"请注意"),e("p",null,"本文内容可能已过时，部分接口，参数等，存在变更的可能，请自行甄别。")],-1),E=e("figure",null,[e("img",{src:u,alt:"文本告警",tabindex:"0",loading:"lazy"}),e("figcaption",null,"文本告警")],-1),f=e("p",null,[e("strong",null,"前言")],-1),h=e("p",null,"zabbx告警结合微信,可以更及时对故障进行响应和处理。",-1),x=e("p",null,"另：文末有进阶版实现效果",-1),T=t('<hr><p><strong>告警的模式分为两种,第一种就是本文消息的直接推送,第二种是图文推送,可做到交互,本文主要介绍第一种</strong></p><h2 id="前提条件" tabindex="-1"><a class="header-anchor" href="#前提条件" aria-hidden="true">#</a> 前提条件</h2><blockquote><ol><li>zabbix</li><li>企业号</li><li>脚本</li></ol></blockquote><h2 id="企业号" tabindex="-1"><a class="header-anchor" href="#企业号" aria-hidden="true">#</a> 企业号</h2><p>申请，略</p><h3 id="获取信息" tabindex="-1"><a class="header-anchor" href="#获取信息" aria-hidden="true">#</a> 获取信息</h3><p>取得企业号的部门ID,应用ID, CorpID,Secret</p><figure><img src="'+c+`" alt="企业号信息" tabindex="0" loading="lazy"><figcaption>企业号信息</figcaption></figure><h2 id="脚本" tabindex="-1"><a class="header-anchor" href="#脚本" aria-hidden="true">#</a> 脚本</h2><p>脚本可以推送两种格式,文本和新闻.</p><h3 id="推送文本" tabindex="-1"><a class="header-anchor" href="#推送文本" aria-hidden="true">#</a> 推送文本</h3><p><strong>来自网上, 视情况修改4处 <code>self.__corpid</code> 和<code>self.__secret</code> <code>toparty</code> <code>agentid</code></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/usr/bin/env python
# coding: utf-8

import urllib,urllib2,json
import sys
reload(sys)
sys.setdefaultencoding( &quot;utf-8&quot; )

class WeChat(object):
    __token_id = &#39;&#39;
    # init attribute
    def __init__(self,url):
        self.__url = url.rstrip(&#39;/&#39;)
        #CorpID
        self.__corpid = &#39;wx643f**********&#39;   
        #Secret 
        self.__secret = &#39;YQOu7Qzad********hGJ9xHlby****_v1oF2WpBOlsy****TivMKAL***voA3MwKH&#39;

    # Get TokenID
    def authID(self):
        params = {&#39;corpid&#39;:self.__corpid, &#39;corpsecret&#39;:self.__secret}
        data = urllib.urlencode(params)

        content = self.getToken(data)

        try:
            self.__token_id = content[&#39;access_token&#39;]
            # print content[&#39;access_token&#39;]
        except KeyError:
            raise KeyError

    # Establish a connection
    def getToken(self,data,url_prefix=&#39;/&#39;):
        url = self.__url + url_prefix + &#39;gettoken?&#39;
        try:
            response = urllib2.Request(url + data)
        except KeyError:
            raise KeyError
        result = urllib2.urlopen(response)
        content = json.loads(result.read())
        return content

    # Get sendmessage url
    def postData(self,data,url_prefix=&#39;/&#39;):
        url = self.__url + url_prefix + &#39;message/send?access_token=%s&#39; % self.__token_id
        request = urllib2.Request(url,data)
        try:
            result = urllib2.urlopen(request)
        except urllib2.HTTPError as e:
            if hasattr(e,&#39;reason&#39;):
                print &#39;reason&#39;,e.reason
            elif hasattr(e,&#39;code&#39;):
                print &#39;code&#39;,e.code
            return 0
        else:
            content = json.loads(result.read())
            result.close()
        return content

    # send message
    def sendMessage(self,touser,message):

        self.authID()

# 具体可查看wechat接口文档http://qydev.weixin.qq.com/
        data = json.dumps({
            #&#39;touser&#39;:touser, #企业号中的用户帐号,如果没,则按部门推送.
            &#39;toparty&#39;:&quot;3&quot;,  #部门ID 
            &#39;msgtype&#39;:&quot;text&quot;,
            &#39;agentid&#39;:&quot;1&quot;, #应用ID
            &#39;text&#39;:{
                &#39;content&#39;:message
            },
            &#39;safe&#39;:&quot;0&quot;
        },ensure_ascii=False)
        response = self.postData(data)
        print response
if __name__ == &#39;__main__&#39;:
    a = WeChat(&#39;https://qyapi.weixin.qq.com/cgi-bin&#39;)
    a.sendMessage(sys.argv[1], sys.argv[3])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="推送news" tabindex="-1"><a class="header-anchor" href="#推送news" aria-hidden="true">#</a> 推送news</h3><p><strong>同样的脚本,需要修改如下</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>##图文格式(推荐),修改脚本的data如下
        data = json.dumps({
            &#39;touser&#39;:touser, #企业号中的用户帐号
            &#39;toparty&#39;:&quot;3&quot;,  #部门ID 
            &#39;msgtype&#39;:&quot;news&quot;,
            &#39;agentid&#39;:&quot;1&quot;, #应用ID
            &#39;news&#39;:{
                &quot;articles&quot;:[{
                    &quot;title&quot;:title,
                    &quot;description&quot;:message
                        }]
                },   
            &quot;safe&quot;:0
        },ensure_ascii=False)
##end
##修改
1：import re

2：
def sendMessage(self,touser,message): 修改为
def sendMessage(self,touser,title,message):

3：
if __name__ == &#39;__main__&#39;:
    a = WeChat(&#39;https://qyapi.weixin.qq.com/cgi-bin&#39;)
    a.sendMessage(sys.argv[1], sys.argv[3])
修改为
if __name__ == &#39;__main__&#39;:
    a = WeChat(&#39;https://qyapi.weixin.qq.com/cgi-bin&#39;)
    info = sys.argv[3]
    info2 = re.split(&#39;[&amp;&amp;]&#39;,info)
    a.sendMessage(sys.argv[1],info2[0],info2[2])

4：
zabbix页面的动作-默认信息中添加&amp;&amp; 用来进行信息分割
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>脚本放至zbx脚本目录下即可</p><h2 id="zabbix" tabindex="-1"><a class="header-anchor" href="#zabbix" aria-hidden="true">#</a> zabbix</h2><h3 id="媒介配置" tabindex="-1"><a class="header-anchor" href="#媒介配置" aria-hidden="true">#</a> 媒介配置</h3><blockquote><p>管理 ---&gt; 媒介---&gt; 新建 名称随便,这里命名wechat 脚本名称要和上面的一致wechat.py 脚本参数要依次填写以下三个 这三个参数就是传给脚本的sys.argv[]</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{ALERT.SENDTO}
{ALERT.SUBJECT}
{ALERT.MESSAGE}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+'" alt="zabbix媒介" tabindex="0" loading="lazy"><figcaption>zabbix媒介</figcaption></figure><h3 id="用户" tabindex="-1"><a class="header-anchor" href="#用户" aria-hidden="true">#</a> 用户</h3><blockquote><p>创建一个wechat用户,给予相关用户媒介权限(刚刚创建的媒介) 注意收件人,这个是脚本的第一个参数.也就是说这里要填写的是应该是微信用户，或者部门ID，这里填写部门ID 这样wechat.py脚本才能取得正确的值</p></blockquote><figure><img src="'+m+`" alt="zabbix用户" tabindex="0" loading="lazy"><figcaption>zabbix用户</figcaption></figure><h3 id="动作" tabindex="-1"><a class="header-anchor" href="#动作" aria-hidden="true">#</a> 动作</h3><blockquote><p>动作的 操作选项--&gt;选发送消息,添加相应的用户 或者群组就行了. 我是发送给wechat用户的,因为他关联了wechat.py媒介.所以所有的消息将传递给他,他的媒介连接脚本,脚本连接企业微信,整个流程就打通了.</p></blockquote><h2 id="参考配置" tabindex="-1"><a class="header-anchor" href="#参考配置" aria-hidden="true">#</a> 参考配置</h2><p>告警:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{TRIGGER.SEVERITY} : {TRIGGER.NAME}&amp;&amp;
-------------------------------------------
ID：{EVENT.ID}
主机名称:{HOST.NAME}
主机地址:{HOST.IP}
告警时间:{EVENT.DATE}  -  {EVENT.TIME}

告警描述:{TRIGGER.DESCRIPTION}
---------------------------------
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>恢复:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>恢复 :  {TRIGGER.NAME}&amp;&amp;
-------------------------------------------
ID：{EVENT.ID}
主机名称:{HOST.NAME}
主机地址:{HOST.IP}
告警时间:{EVENT.DATE}  -  {EVENT.TIME}
恢复时间:{EVENT.RECOVERY.DATE}  -  {EVENT.RECOVERY.TIME}
持续时间:{EVENT.AGE}

告警等级: {TRIGGER.SEVERITY}
告警描述:{TRIGGER.DESCRIPTION}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+b+`" alt="zabbix动作" tabindex="0" loading="lazy"><figcaption>zabbix动作</figcaption></figure><h2 id="图文-参考" tabindex="-1"><a class="header-anchor" href="#图文-参考" aria-hidden="true">#</a> 图文(参考)</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/usr/bin/env python3
# coding: utf-8
import sys
import requests
from time import sleep
import json
import time

WX_CORPID = r&quot;wx643f8***********&quot;
WX_CORPSECRET = r&quot;qwojyG*******************&quot;
WX_TOKEN_FILE = &quot;/tmp/accesstoken&quot;
AGENT_ID = &#39;100000*&#39;
TOPARTY=&#39;*&#39;
LOG_FILE=&quot;/tmp/zabbix_send_log&quot;
def c_log(msg):
    try:
        perameter_file=open(LOG_FILE,&#39;a&#39;)
        perameter_file.write(msg+&quot;\\n&quot;)
    except:
        exit(1)
    finally:
        perameter_file.close()
def refresh_token(corpid=WX_CORPID, corpsecrt=WX_CORPSECRET):
    get_url = r&quot;https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=&quot; + WX_CORPID + &quot;&amp;corpsecret=&quot; + WX_CORPSECRET
    for i in range(3):
        try:
            req_ret = requests.get(get_url, timeout=6)
            jso_ret = req_ret.json()
            file_tok = open(WX_TOKEN_FILE, &quot;w&quot;)
            file_tok.write(jso_ret[&quot;access_token&quot;])
            file_tok.close()
            return jso_ret[&quot;access_token&quot;]
        except requests.exceptions.ConnectTimeout:
            sleep(10)
        except Exception as exc:
            print(exc.args)
            return None
    return None

def get_token(corpid=WX_CORPID, corpsecrt=WX_CORPSECRET):
    try:
        file_tok = open(WX_TOKEN_FILE, &quot;r&quot;)
        token = file_tok.read()
        file_tok.close()
        if len(token) !=64:
            raise FileNotFoundError(r&quot;token length !=64&quot;)
        return token
    except FileNotFoundError:
        get_url = r&quot;https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=&quot; + WX_CORPID + &quot;&amp;corpsecret=&quot; + WX_CORPSECRET
        for i in range(3):
            try:
              req_ret = requests.get(get_url, timeout=6)
              jso_ret = req_ret.json()
              file_tok = open(WX_TOKEN_FILE, &quot;w&quot;)
              file_tok.write(jso_ret[&quot;access_token&quot;])
              file_tok.close()
              return jso_ret[&quot;access_token&quot;]
            except requests.exceptions.ConnectTimeout:
                sleep(10)
            except Exception as exc:
                print(exc.args)
                return None
    except Exception as exc:
            print(exc.args)
    return None

def create_articles():
    msg_argv=sys.argv[3].split(&quot;&amp;&amp;&quot;)
    if(msg_argv[0]==&quot;PROBLEM&quot;):
        if(msg_argv[1]==&quot;灾难&quot;):
            pic_url=&quot;图片地址&quot;
        elif(msg_argv[1]==&quot;一般严重&quot;):
            pic_url=&quot;图片地址&quot;
        elif(msg_argv[1]==&quot;严重&quot;):
            pic_url=&quot;图片地址&quot;
        elif(msg_argv[1]==&quot;警告&quot;):
            pic_url=&quot;图片地址&quot;
        elif(msg_argv[1]==&quot;通知&quot;):
            pic_url=&quot;图片地址&quot;
        else:
            pic_url=&quot;图片地址&quot;
        ret = [
            {
                &quot;title&quot;: &quot;%s&quot;%(msg_argv[2]),
                &quot;description&quot;:&quot;ID:%s\\n告警时间: %s&quot;%(msg_argv[3],msg_argv[7]),
            },
            {
                &quot;title&quot;:&quot;主机分类: %s \\n主机名称: %s \\n主机地址: %s&quot;%(msg_argv[4],msg_argv[5],msg_argv[6]),
                &quot;picurl&quot;: &quot;%s&quot;%pic_url
            },
            {
                &quot;title&quot;:&quot;告警描述:\\n%s&quot;%(msg_argv[8]),
            }
        ]
        return ret
    elif(msg_argv[0]==&quot;OK&quot;):
        if(msg_argv[1]==&quot;通知&quot;):
            return None
        else:
            pic_url=&quot;图片地址&quot;
            return [
                {
                &quot;title&quot;: &quot;恢复-%s&quot;%(msg_argv[2]),
                &quot;description&quot;:&quot;ID: %s\\n持续时长：%s\\n恢复时间: %s\\n告警时间: %s&quot;%(msg_argv[3],msg_argv[10],msg_argv[7],msg_argv[9]),
                },
                {
                &quot;title&quot;:&quot;主机分类: %s\\n主机名称: %s\\n主机地址: %s&quot;%(msg_argv[4],msg_argv[5],msg_argv[6]),
                &quot;picurl&quot;: &quot;%s&quot;%pic_url
                },
                {
                &quot;title&quot;:&quot;告警等级: %s\\n告警描述: %s&quot;%(msg_argv[1],msg_argv[8])
                }
            ]
    return None

#def send_news(type,target,arti):
def send_news(arti):
    access_token = get_token()
    if access_token == None:
        return 1
    send_msg_url = r&quot;https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=&quot;+access_token
    msg_josn ={}
    msg_josn[&quot;toparty&quot;] = TOPARTY
    msg_josn[&quot;msgtype&quot;] = &quot;news&quot;
    msg_josn[&quot;agentid&quot;] = AGENT_ID

    msg_josn[&quot;news&quot;] = {&quot;articles&quot;: arti}
    #print (msg_josn)
    send_data = json.dumps(msg_josn, ensure_ascii=False).encode(encoding=&#39;UTF8&#39;,)   
    #print(send_data)
    for i in range(4):
        try:
            if i &gt;= 4:
                return 1
            req_ret = requests.post(send_msg_url, data=send_data, timeout=5)
            c_log(req_ret.text)
            jos_ret = req_ret.json()

            if jos_ret[&quot;errcode&quot;] == 0:
                return 0
            elif jos_ret[&quot;errcode&quot;] == 40014:
                token = refresh_token(WX_CORPID, WX_CORPSECRET)
                if token == None:
                    return 1
                access_token = token
                send_msg_url = r&quot;https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=&quot; + access_token
            else:
                return 1
        except requests.exceptions.ConnectTimeout:
            sleep(2)
        except Exception as exc:
            return 1
    return 1

if __name__==&quot;__main__&quot;:
    articles=create_articles()
    #if(articles==None):
     #   exit(1)
    #send_news(0,sys.argv[1],articles)
#    send_news(articles)
    if(send_news(articles)!=0):
        exit(1)

#告警
{TRIGGER.STATUS}&amp;&amp;{TRIGGER.SEVERITY}&amp;&amp;{HOST.NAME}-{TRIGGER.NAME}&amp;&amp;{EVENT.ID}&amp;&amp;{TRIGGER.HOSTGROUP.NAME}&amp;&amp;{HOST.NAME}&amp;&amp;{HOST.IP}&amp;&amp;{EVENT.DATE}-{EVENT.TIME}&amp;&amp;{TRIGGER.DESCRIPTION}

#恢复
{TRIGGER.STATUS}&amp;&amp;{TRIGGER.SEVERITY}&amp;&amp;{HOST.NAME}-{TRIGGER.NAME}&amp;&amp;{EVENT.ID}&amp;&amp;{TRIGGER.HOSTGROUP.NAME}&amp;&amp;{HOST.NAME}&amp;&amp;{HOST.IP}&amp;&amp;{EVENT.DATE}  -  {EVENT.TIME}&amp;&amp;{TRIGGER.DESCRIPTION}&amp;&amp;{EVENT.RECOVERY.DATE}  -  {EVENT.RECOVERY.TIME}&amp;&amp;{EVENT.AGE}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可推送出类似如下格式的告警</p><figure><img src="`+_+'" alt="告警推动01" width="300" height="600" tabindex="0" loading="lazy"><figcaption>告警推动01</figcaption></figure><h2 id="工程项目" tabindex="-1"><a class="header-anchor" href="#工程项目" aria-hidden="true">#</a> 工程项目</h2>',39),I={href:"https://github.com/llllllizili/zbx-wechat",target:"_blank",rel:"noopener noreferrer"},R=e("blockquote",null,[e("p",null,"对web开发有一定了解,熟悉python,zabbix API,微信API,用Django做后台处理交互.可推出如下告警.")],-1),k=e("figure",null,[e("img",{src:p,alt:"告警推动02",width:"300",height:"600",tabindex:"0",loading:"lazy"}),e("figcaption",null,"告警推动02")],-1);function y(N,O){const n=v("ExternalLinkIcon");return l(),d("div",null,[q,E,f,h,x,a("more"),T,e("p",null,[i("工程项目可实现了，告警的筛选，处理的交互，消息的聚合，通知的升级等，详情见"),e("a",I,[i("代码仓库"),r(n)])]),R,k])}const D=s(g,[["render",y],["__file","Zabbix微信告警推送.html.vue"]]);export{D as default};
