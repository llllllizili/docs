import{_ as p,X as i,Y as l,a0 as n,a1 as s,a2 as t,$ as a,F as o}from"./framework-7663974c.js";const c={},d=a('<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><div class="hint-container danger"><p class="hint-container-title">请注意</p><p>文章写于2017年，请注意内容的有效性。</p></div><h2 id="django简介" tabindex="-1"><a class="header-anchor" href="#django简介" aria-hidden="true">#</a> Django简介</h2><p><strong>urls.py</strong></p><blockquote><p>网址入口，关联到对应的view.py中的一个函数（或者generic类），访问网址就对应一个函数</p></blockquote><p><strong>view.py</strong></p><blockquote><p>处理用户发出的请求，从urls.py中对应过来，通过选人templates中的网页，可将内容显示，比如，登陆后的用户名，用户请求的数据，输出到网页</p></blockquote><p><strong>models.py</strong></p><blockquote><p>与数据库关联，存入或读取数据的时候会用到这个</p></blockquote><p><strong>forms.py</strong></p><blockquote><p>表单，用户在浏览器上输入数据提交，对数据的验证工作以及输入框的生成等工作</p></blockquote><p><strong>templates</strong>文件夹</p><blockquote><p>views.py 中的函数渲染templates中的Html模板，得到动态内容的网页，当然可以用缓存来提高速度。</p></blockquote><p><strong>admin.py</strong></p><blockquote><p>后台，可以用很少的代码量，拥有一个强大的后台</p></blockquote><p><strong>settings.py</strong></p><blockquote><p>Django 的设置，配置文件，比如Debug开关，静态文件位置等</p></blockquote><h2 id="django环境搭建" tabindex="-1"><a class="header-anchor" href="#django环境搭建" aria-hidden="true">#</a> Django环境搭建</h2><blockquote><p>Django 1.5.x 支持 Python 2.6.5 Python 2.7, Python 3.2 和 3.3.</p><p>Django 1.6.x 支持 Python 2.6.X, 2.7.X, 3.2.X 和 3.3.X</p><p>Django 1.7.x 支持 Python 2.7, 3.2, 3.3, 和 3.4 （注意：Python 2.6 不支持了）</p><p><strong>Django 1.8.x 支持 Python 2.7, 3.2, 3.3, 3.4 和 3.5. （长期支持版本 LTS)</strong></p><p>Django 1.9.x 支持 Python 2.7, 3.4 和 3.5. 不支持 3.3 了</p><p>Django 1.10.x 支持 Python 2.7, 3.4 和 3.5.</p><p><strong>Django 1.11.x 下一个长期支持版本，将于2017年4月发布</strong></p></blockquote>',19),u={href:"https://www.djangoproject.com/download/",target:"_blank",rel:"noopener noreferrer"},r=a(`<blockquote><p>使用最新版本的问题就是，可能要用到的一些第三方插件没有及时更新，无法正常使用这些三方包。</p></blockquote><blockquote><p>如果是学习，可以选择目前的 Django 1.8.x 来进行，遇到问题也容易找到答案。</p><p>当然如果需要新版本的功能也可以使用新版本，毕竟 Django 1.9 以后admin界面还是更漂亮些</p></blockquote><h3 id="django基础部分" tabindex="-1"><a class="header-anchor" href="#django基础部分" aria-hidden="true">#</a> Django基础部分</h3><h2 id="安装django" tabindex="-1"><a class="header-anchor" href="#安装django" aria-hidden="true">#</a> 安装Django</h2><p>安装pip</p><p>ubuntu <code>sudo apt-get install python-pip</code></p><p>centos <code>yum -y install python-pip</code></p><p>升级pip</p><p><code>pip install --upgrade pip</code></p><p>利用pip安装Django</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>（sudo<span class="token punctuation">)</span> pip <span class="token function">install</span> Django
或者 <span class="token punctuation">(</span>sudo<span class="token punctuation">)</span> pip <span class="token function">install</span> <span class="token assign-left variable">Django</span><span class="token operator">==</span><span class="token number">1.8</span>.16 或者 pip <span class="token function">install</span> <span class="token assign-left variable">Django</span><span class="token operator">==</span><span class="token number">1.10</span>.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="搭建多个互不干扰的开发环境" tabindex="-1"><a class="header-anchor" href="#搭建多个互不干扰的开发环境" aria-hidden="true">#</a> 搭建多个互不干扰的开发环境</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装:</span>
<span class="token punctuation">(</span>sudo<span class="token punctuation">)</span> pip <span class="token function">install</span> virtualenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> myproject
<span class="token builtin class-name">cd</span> myproject

virtualenv --no-site-packages <span class="token builtin class-name">test</span>

<span class="token comment">#命令virtualenv就可以创建一个独立的Python运行环境，我们还加上了参数--no-site-packages，这样，已经安装到系统Python环境中的所有第三方包都不会复制过来，这样，我们就得到了一个不带任何第三方包的“干净”的Python运行环境。</span>

<span class="token builtin class-name">source</span> test/bin/activate
<span class="token comment">#命令行提示符的最前方，会提示当前所在的python环境</span>

<span class="token comment">#然后就可以在此环境下	进行开发/测试等</span>

deactivate  <span class="token comment">#退出环境</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>##Django的基本命令（请牢牢记住，不能tab）</p><h3 id="新建一个django-project" tabindex="-1"><a class="header-anchor" href="#新建一个django-project" aria-hidden="true">#</a> 新建一个django project</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>django-admin.py startproject zixue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="新建app" tabindex="-1"><a class="header-anchor" href="#新建app" aria-hidden="true">#</a> 新建app</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python manage.py startapp app-name
或 django-admin.py startapp app-name

<span class="token comment">#一般一个项目有多个app, 当然通用的app也可以在多个项目中使用。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="同步数据库" tabindex="-1"><a class="header-anchor" href="#同步数据库" aria-hidden="true">#</a> 同步数据库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python manage.py syncdb
 
<span class="token comment">#注意：Django 1.7.1及以上的版本需要用以下命令</span>
python manage.py makemigrations
python manage.py migrate

<span class="token comment">#这种方法可以创建表，当你在models.py中新增了类时，运行它就可以自动在数据库中创建表了，不用手动创建。</span>

<span class="token comment">#备注：对已有的 models 进行修改，Django 1.7之前的版本的Django都是无法自动更改表结构的，不过有第三方工具 south,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用开发服务器" tabindex="-1"><a class="header-anchor" href="#使用开发服务器" aria-hidden="true">#</a> 使用开发服务器</h3><p>开发服务器，即开发时使用，一般修改代码后会自动重启，方便调试和开发，但是由于性能问题，建议只用来测试，不要用在生产环境。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python manage.py runserver
 
<span class="token comment"># 当提示端口被占用的时候，可以用其它端口：</span>
python manage.py runserver <span class="token number">8001</span>
python manage.py runserver <span class="token number">9999</span>
（当然也可以kill掉占用端口的进程）
 
<span class="token comment"># 监听所有可用 ip （电脑可能有一个或多个内网ip，一个或多个外网ip，即有多个ip地址）</span>
python manage.py runserver <span class="token number">0.0</span>.0.0:8000
<span class="token comment"># 如果是外网或者局域网电脑上可以用其它电脑查看开发服务器</span>
<span class="token comment"># 访问对应的 ip加端口，比如 http://172.16.20.2:8000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="清空数据库" tabindex="-1"><a class="header-anchor" href="#清空数据库" aria-hidden="true">#</a> 清空数据库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python manage.py flush
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建超级管理员" tabindex="-1"><a class="header-anchor" href="#创建超级管理员" aria-hidden="true">#</a> 创建超级管理员</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python manage.py createsuperuser
 
<span class="token comment"># 按照提示输入用户名和对应的密码就好了邮箱可以留空，用户名和密码必填</span>
 
<span class="token comment"># 修改 用户密码可以用：</span>
python manage.py changepassword username
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导入导出数据</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python manage.py dumpdata appname <span class="token operator">&gt;</span> appname.json
python manage.py loaddata appname.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="django羡慕的环境终端" tabindex="-1"><a class="header-anchor" href="#django羡慕的环境终端" aria-hidden="true">#</a> Django羡慕的环境终端</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python manage.py shell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="数据库命令行" tabindex="-1"><a class="header-anchor" href="#数据库命令行" aria-hidden="true">#</a> 数据库命令行</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python manage.py dbshell

Django 会自动进入在settings.py中设置的数据库，如果是 MySQL 或 postgreSQL,会要求输入数据库用户密码。
在这个终端可以执行数据库的SQL语句。如果您对SQL比较熟悉，可能喜欢这种方式。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更多命令" tabindex="-1"><a class="header-anchor" href="#更多命令" aria-hidden="true">#</a> 更多命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>终端上输入 python manage.py 可以看到详细的列表，在忘记子名称的时候特别有用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="django的视图与网址" tabindex="-1"><a class="header-anchor" href="#django的视图与网址" aria-hidden="true">#</a> Django的视图与网址</h2><h3 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h3><div class="language-SHELL line-numbers-mode" data-ext="SHELL"><pre class="language-SHELL"><code>django-admin.py startproject mysite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建成功后，目录如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysite
├── manage.py
└── mysite
    ├── __init__.py
    ├── settings.py
    ├── urls.py
    └── wsgi.py
    
新建了一个 mysite 目录，其中还有一个 mysite 目录，这个子目录 mysite 中是一些项目的设置settings.py 文件，总的urls配置文件 urls.py 以及部署服务器时用到的 wsgi.py 文件， __init__.py 是python包的目录结构必须的，与调用有关。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新建应用-app-名字叫learn" tabindex="-1"><a class="header-anchor" href="#新建应用-app-名字叫learn" aria-hidden="true">#</a> 新建应用（app） 名字叫learn</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python manage.py startapp learn   #learn只是一个app的名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>把我们新定义的app加到settings.py中的INSTALL_APPS</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>mysite<span class="token operator">/</span>mysite<span class="token operator">/</span>settings<span class="token punctuation">.</span>py

INSTALLED_APPS <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token string">&#39;django.contrib.admin&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;django.contrib.auth&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;django.contrib.contenttypes&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;django.contrib.sessions&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;django.contrib.messages&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;django.contrib.staticfiles&#39;</span><span class="token punctuation">,</span>
 
    <span class="token string">&#39;learn&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token comment">#备注,这一步是干什么呢? 新建的 app 如果不加到 INSTALL_APPS 中的话, django 就不能自动找到app中的模板文件(app-name/templates/下的文件)和静态文件(app-name/static/中的文件) , 后面你会学习到它们分别用来干什么.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义视图函数-访问页面的内容" tabindex="-1"><a class="header-anchor" href="#定义视图函数-访问页面的内容" aria-hidden="true">#</a> 定义视图函数 （访问页面的内容）</h3><p>修改 应用 learn 中的view.py</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#coding:utf-8</span>
<span class="token keyword">from</span> django<span class="token punctuation">.</span>http <span class="token keyword">import</span> HttpResponse

<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">return</span> HttpResponse<span class="token punctuation">(</span><span class="token string">u&#39;欢迎&#39;</span><span class="token punctuation">)</span>
	
<span class="token comment">#第一行是声明编码为utf-8, 因为我们在代码中用到了中文,如果不声明就报错.</span>
<span class="token comment">#第二行引入HttpResponse，它是用来向网页返回内容的，就像Python中的 print 一样，只不过 HttpResponse 是把内容显示到网页上。</span>
<span class="token comment">#我们定义了一个index()函数，第一个参数必须是 request，与网页发来的请求有关，request 变量里面包含get或post的内容，用户浏览器，系统等信息#在里面（后面会讲，先了解一下就可以）。</span>
<span class="token comment">#函数返回了一个 HttpResponse 对象，可以经过一些处理，最终显示几个字到网页上。</span>
<span class="token comment">#那问题来了，我们访问什么网址才能看到刚才写的这个函数呢？怎么让网址和函数关联起来呢？</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义视图函数相关的url-即-访问什么网址-对应什么内容" tabindex="-1"><a class="header-anchor" href="#定义视图函数相关的url-即-访问什么网址-对应什么内容" aria-hidden="true">#</a> 定义视图函数相关的URL（即，访问什么网址，对应什么内容）</h3><p>打开mysite下的urls.py</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#Django 1.7</span>

<span class="token keyword">from</span> django<span class="token punctuation">.</span>conf<span class="token punctuation">.</span>urls <span class="token keyword">import</span> patterns<span class="token punctuation">,</span> include<span class="token punctuation">,</span> url
<span class="token keyword">from</span> django<span class="token punctuation">.</span>contrib <span class="token keyword">import</span> admin
admin<span class="token punctuation">.</span>autodiscover<span class="token punctuation">(</span><span class="token punctuation">)</span>
 
urlpatterns <span class="token operator">=</span> patterns<span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    url<span class="token punctuation">(</span><span class="token string">r&#39;^$&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;learn.views.index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment"># new</span>
    <span class="token comment"># url(r&#39;^blog/&#39;, include(&#39;blog.urls&#39;)),</span>
 
    url<span class="token punctuation">(</span><span class="token string">r&#39;^admin/&#39;</span><span class="token punctuation">,</span> include<span class="token punctuation">(</span>admin<span class="token punctuation">.</span>site<span class="token punctuation">.</span>urls<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#Django1.8 以上</span>

<span class="token keyword">from</span> django<span class="token punctuation">.</span>conf<span class="token punctuation">.</span>urls <span class="token keyword">import</span> url
<span class="token keyword">from</span> django<span class="token punctuation">.</span>contrib <span class="token keyword">import</span> admin

<span class="token keyword">from</span> learn <span class="token keyword">import</span> views <span class="token keyword">as</span> learn_views  <span class="token comment"># new</span>
 
urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    url<span class="token punctuation">(</span><span class="token string">r&#39;^$&#39;</span><span class="token punctuation">,</span> learn_views<span class="token punctuation">.</span>index<span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment"># new</span>
    url<span class="token punctuation">(</span><span class="token string">r&#39;^admin/&#39;</span><span class="token punctuation">,</span> admin<span class="token punctuation">.</span>site<span class="token punctuation">.</span>urls<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#开启python测试</span>
python manage<span class="token punctuation">.</span>py runserver
<span class="token comment">#允许远程访问</span>
python manager<span class="token punctuation">.</span>py runserver <span class="token number">0.0</span><span class="token number">.0</span><span class="token number">.0</span><span class="token punctuation">:</span><span class="token number">8000</span> （指定IP和端口<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="视图与网址进阶" tabindex="-1"><a class="header-anchor" href="#视图与网址进阶" aria-hidden="true">#</a> 视图与网址进阶</h2><h3 id="新建项目" tabindex="-1"><a class="header-anchor" href="#新建项目" aria-hidden="true">#</a> 新建项目</h3><h3 id="新建应用" tabindex="-1"><a class="header-anchor" href="#新建应用" aria-hidden="true">#</a> 新建应用</h3><p>同上</p><h3 id="修改应用下的views-py" tabindex="-1"><a class="header-anchor" href="#修改应用下的views-py" aria-hidden="true">#</a> 修改应用下的views.py</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>shortcuts <span class="token keyword">import</span> render
<span class="token keyword">from</span> django<span class="token punctuation">.</span>http <span class="token keyword">import</span> HttpResponse
 
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    a <span class="token operator">=</span> request<span class="token punctuation">.</span>GET<span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span>
    b <span class="token operator">=</span> request<span class="token punctuation">.</span>GET<span class="token punctuation">[</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span>
    c <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token operator">+</span><span class="token builtin">int</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
    <span class="token keyword">return</span> HttpResponse<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span>
    
    <span class="token comment">#注：request.GET 类似于一个字典，更好的办法是用 request.GET.get(&#39;a&#39;, 0) 当没有传递 a 的时候默认 a 为 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改项目下的urls-py" tabindex="-1"><a class="header-anchor" href="#修改项目下的urls-py" aria-hidden="true">#</a> 修改项目下的urls.py</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>conf<span class="token punctuation">.</span>urls <span class="token keyword">import</span> url
<span class="token keyword">from</span> django<span class="token punctuation">.</span>contrib <span class="token keyword">import</span> admin

<span class="token keyword">from</span> learn <span class="token keyword">import</span> views <span class="token keyword">as</span> learn_views
<span class="token keyword">from</span> calc <span class="token keyword">import</span> views <span class="token keyword">as</span> calc_views

urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    url<span class="token punctuation">(</span><span class="token string">r&#39;^add/$&#39;</span><span class="token punctuation">,</span>calc_views<span class="token punctuation">.</span>add<span class="token punctuation">,</span>name<span class="token operator">=</span><span class="token string">&#39;add&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    url<span class="token punctuation">(</span><span class="token string">r&#39;^$&#39;</span><span class="token punctuation">,</span>learn_views<span class="token punctuation">.</span>index<span class="token punctuation">)</span><span class="token punctuation">,</span>
    url<span class="token punctuation">(</span><span class="token string">r&#39;^admin/&#39;</span><span class="token punctuation">,</span> admin<span class="token punctuation">.</span>site<span class="token punctuation">.</span>urls<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打开网址" tabindex="-1"><a class="header-anchor" href="#打开网址" aria-hidden="true">#</a> 打开网址</h3><p>IP:8000/add/?a=1&amp;b=2</p><h3 id="采用add-2-4的方式" tabindex="-1"><a class="header-anchor" href="#采用add-2-4的方式" aria-hidden="true">#</a> 采用add/2/4的方式</h3><p>进入cala/views.py 定义函数</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">add2</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">:</span>
	c <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token builtin">int</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
	<span class="token keyword">return</span> HttpResponse<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改项目下的urls.py</p><p>Django 1.7.X</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    url<span class="token punctuation">(</span><span class="token string">r&#39;^add/(\\d+)/(\\d+)/$&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;calc.views.add2&#39;</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&#39;add2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Django 1.8+</p><p>我们可以看到网址中多了 (\\d+), 正则表达式中 \\d 代表一个数字，+ 代表一个或多个前面的字符，写在一起 \\d+ 就是一个或多个数字，用括号括起来的意思是保存为一个子组（更多知识请参见 Python 正则表达式），每一个子组将作为一个参数，被 views.py 中的对应视图函数接收。</p><p>访问 http://127.0.0.1:8000/add/4/5/ 就可以看到和刚才同样的效果</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    url<span class="token punctuation">(</span><span class="token string">r&#39;^add/(\\d+)/(\\d+)/$&#39;</span><span class="token punctuation">,</span> calc_views<span class="token punctuation">.</span>add2<span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&#39;add2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="url-name详解" tabindex="-1"><a class="header-anchor" href="#url-name详解" aria-hidden="true">#</a> URL name详解</h2><p><code>url(r&#39;^add/$&#39;, calc_views.add,name=&#39;add&#39;), 这里的name=&#39;add&#39; 是用来干什么的呢？</code></p><p><strong>简单的来说，name可以在template,models，views中得到对应的网址，相当于给网址去了名字，只要名字不变，网址变不变都是可以获取到的</strong></p><p>修改calc/views.py (应用calc已经在setting.py中INSTALLED_APPS导入,不然模板是找不到的)</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>http <span class="token keyword">import</span> HttpResponse
<span class="token keyword">from</span> django<span class="token punctuation">.</span>shortcuts <span class="token keyword">import</span> render
 
<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">&#39;home.html&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token comment">#render 是渲染模板</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后新建<strong>templates</strong>文件夹,在新建home.html</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>自强学堂<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/add/4/5/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>计算 4+5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改项目中的urls.py</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">from</span> learn <span class="token keyword">import</span> views <span class="token keyword">as</span> learn_views
<span class="token keyword">from</span> calc <span class="token keyword">import</span> views <span class="token keyword">as</span> calc_views

urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    url<span class="token punctuation">(</span><span class="token string">r&#39;^$&#39;</span><span class="token punctuation">,</span>calc_views<span class="token punctuation">.</span>index<span class="token punctuation">,</span>name<span class="token operator">=</span><span class="token string">&#39;home&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    url<span class="token punctuation">(</span><span class="token string">r&#39;^add/$&#39;</span><span class="token punctuation">,</span>calc_views<span class="token punctuation">.</span>add<span class="token punctuation">,</span>name<span class="token operator">=</span><span class="token string">&#39;add&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    url<span class="token punctuation">(</span><span class="token string">r&#39;^add/(\\d+)/(\\d+)/$&#39;</span><span class="token punctuation">,</span>calc_views<span class="token punctuation">.</span>add2<span class="token punctuation">,</span>name<span class="token operator">=</span><span class="token string">&#39;add2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    url<span class="token punctuation">(</span><span class="token string">r&#39;^admin/&#39;</span><span class="token punctuation">,</span> admin<span class="token punctuation">.</span>site<span class="token punctuation">.</span>urls<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后运行服务,访问页面就会出现 计算4+5 的链接</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/add/4/5/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>计算 4+5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果这样写“死网址”，会使得在改了网址（正则）后，模板（template)，视图(views.py，用以用于跳转)，模型(models.py，可以用用于获取对象对应的地址）用了此网址的，都得进行相应的更改，修改的代价很大，一不小心，有的地方没改过来，就不能用了。</p><p>那么有没有更优雅的方式来解决这个问题呢？</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>不带参数的：
{% url &#39;name&#39; %}
带参数的：参数可以是变量名
{% url &#39;name&#39; 参数 %}
 
例如：
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{% url &#39;add2&#39; 4 5 %}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当 urls.py 进行更改，前提是不改 name（这个参数设定好后不要轻易改），获取的网址也会动态地跟着变，比如改成：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>url<span class="token punctuation">(</span><span class="token string">r&#39;^new_add/(\\d+)/(\\d+)/$&#39;</span><span class="token punctuation">,</span> calc_views<span class="token punctuation">.</span>add2<span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&#39;add2&#39;</span><span class="token punctuation">)</span>

<span class="token comment">#add 变成了 new_add，但是后面的 name=&#39;add2&#39; 没改，这时 {% url &#39;add2&#39; 4 5 %} 就会渲染对应的网址成 /new_add/4/5/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，比如用户收藏夹中收藏的URL是旧的，如何让以前的 /add/3/4/自动跳转到现在新的网址呢？</p><p><strong>要知道Django不会帮你做这个，这个需要自己来写一个跳转方法</strong>：</p><p>具体思路是，在 views.py 写一个跳转的函数：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>http <span class="token keyword">import</span> HttpResponseRedirect
<span class="token keyword">from</span> django<span class="token punctuation">.</span>core<span class="token punctuation">.</span>urlresolvers <span class="token keyword">import</span> reverse  <span class="token comment"># django 1.4.x - django 1.10.x</span>
<span class="token comment">#  from django.urls import reverse  # new in django 1.10.x</span>
 
<span class="token keyword">def</span> <span class="token function">old_add2_redirect</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> HttpResponseRedirect<span class="token punctuation">(</span>
        reverse<span class="token punctuation">(</span><span class="token string">&#39;add2&#39;</span><span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>urls.py中</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>url<span class="token punctuation">(</span><span class="token string">r&#39;^add/(\\d+)/(\\d+)/$&#39;</span><span class="token punctuation">,</span> calc_views<span class="token punctuation">.</span>old_add2_redirect<span class="token punctuation">)</span><span class="token punctuation">,</span>
url<span class="token punctuation">(</span><span class="token string">r&#39;^new_add/(\\d+)/(\\d+)/$&#39;</span><span class="token punctuation">,</span> calc_views<span class="token punctuation">.</span>add2<span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&#39;add2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，<strong>假如用户收藏夹中</strong>有 /add/4/5/ ，访问时就会自动跳转到新的 /new_add/4/5/ 了</p><h2 id="templates" tabindex="-1"><a class="header-anchor" href="#templates" aria-hidden="true">#</a> templates</h2><p>创建一个项目和app</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>django<span class="token operator">-</span>admin<span class="token punctuation">.</span>py startproject zqxt_tmpl
cd zqxt_tmpl
python manage<span class="token punctuation">.</span>py startapp learn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把 learn 加入到 settings.INSTALLED_APPS中</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>INSTALLED_APPS <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token string">&#39;django.contrib.admin&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;django.contrib.auth&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;django.contrib.contenttypes&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;django.contrib.sessions&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;django.contrib.messages&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;django.contrib.staticfiles&#39;</span><span class="token punctuation">,</span>
 
    <span class="token string">&#39;learn&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开 learn/views.py 写一个首页的视图</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>shortcuts <span class="token keyword">import</span> render
 
<span class="token keyword">def</span> <span class="token function">home</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">&#39;home.html&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建templates/home.html</p><p>然后将输入和网址对应</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>conf<span class="token punctuation">.</span>urls <span class="token keyword">import</span> include<span class="token punctuation">,</span> url
<span class="token keyword">from</span> django<span class="token punctuation">.</span>contrib <span class="token keyword">import</span> admin
<span class="token keyword">from</span> learn <span class="token keyword">import</span> views <span class="token keyword">as</span> learn_views
 
 
urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    url<span class="token punctuation">(</span><span class="token string">r&#39;^$&#39;</span><span class="token punctuation">,</span> learn_views<span class="token punctuation">.</span>home<span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&#39;home&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    url<span class="token punctuation">(</span><span class="token string">r&#39;^admin/&#39;</span><span class="token punctuation">,</span> include<span class="token punctuation">(</span>admin<span class="token punctuation">.</span>site<span class="token punctuation">.</span>urls<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token comment">#Django1.10+</span>
<span class="token comment">#url(r&#39;^admin/&#39;, admin.site.urls),  #include</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="项目中有多个应用-所以就会有多个templates以及多个index-html" tabindex="-1"><a class="header-anchor" href="#项目中有多个应用-所以就会有多个templates以及多个index-html" aria-hidden="true">#</a> 项目中有多个应用,所以就会有多个templates以及多个index.html</h3><p>默认情况下Django是不会去区分的,最先找到那个就显示那个,所以如果为了区分的话</p><p>就在各个应用的templates下进行在划分</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>project
├── app1
<span class="token operator">|</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
│   ├── templates
│   │   └── app1
│   │       ├── index.html
│   │       └── search.html
├── app2
<span class="token operator">|</span><span class="token punctuation">..</span><span class="token punctuation">..</span>.
│   ├── templates
│   │   └── app2
│   │       ├── index.html
│   │       └── poll.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模版补充知识点" tabindex="-1"><a class="header-anchor" href="#模版补充知识点" aria-hidden="true">#</a> 模版补充知识点</h3><p>网站模板的设计，一般的，我们做网站有一些通用的部分，比如<strong>导航，底部，访问统计代码等等</strong></p><blockquote><p>可以写一个 base.html 来包含这些通用文件（include)</p></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>{% block title %}默认标题{% endblock %} - test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
 
{% include &#39;nav.html&#39; %}
 
{% block content %}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>这里是默认内容，所有继承自这个模板的，如果不覆盖就显示这里的默认内容。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
{% endblock %}
 
{% include &#39;bottom.html&#39; %}
 
{% include &#39;tongji.html&#39; %}
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>


#如果需要，写足够多的 block 以便继承的模板可以重写该部分，include 是包含其它文件的内容，就是把一些网页共用的部分拿出来，重复利用，改动的时候也方便一些，还可以把广告代码放在一个单独的html中，改动也方便一些，在用到的地方include进去。其它的页面继承自 base.html 就好了，继承后的模板也可以在 block 块中 include 其它的模板文件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="templatesde-进阶" tabindex="-1"><a class="header-anchor" href="#templatesde-进阶" aria-hidden="true">#</a> templatesde 进阶</h2><p><strong>主要讲解模板中的循环，条件判断，常用的标签，过滤器的使用</strong></p><h3 id="基本字节的显示" tabindex="-1"><a class="header-anchor" href="#基本字节的显示" aria-hidden="true">#</a> 基本字节的显示</h3><ul><li>views.py</li></ul><p>在视图中我们传递了一个字符串名称是 string(引号内的表示可悲html调用的) 到模板 home.html</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token keyword">from</span> django<span class="token punctuation">.</span>shortcuts <span class="token keyword">import</span> render
 
<span class="token keyword">def</span> <span class="token function">home</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    string <span class="token operator">=</span> <span class="token string">u&quot;学习Django，用它来建网站&quot;</span>
    <span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">&#39;home.html&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;string&#39;</span><span class="token punctuation">:</span> string<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>home.html</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token punctuation">{</span><span class="token punctuation">{</span> string <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="for循环" tabindex="-1"><a class="header-anchor" href="#for循环" aria-hidden="true">#</a> for循环</h3><p>views.py</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">home</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    TutorialList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;HTML&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;CSS&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jQuery&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Python&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Django&quot;</span><span class="token punctuation">]</span>
    <span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">&#39;home.html&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;TutorialList&#39;</span><span class="token punctuation">:</span> TutorialList<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>home.html</p><p>for循环要有个结束标记</p><p>一般的变量声明使用 <code>{{ }}</code></p><p>功能性的 比如循环，条件判断等使用<code>{% %}</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token punctuation">{</span><span class="token operator">%</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> TutorialList <span class="token operator">%</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token punctuation">{</span> i <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token operator">%</span> endfor <span class="token operator">%</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示字典的内容" tabindex="-1"><a class="header-anchor" href="#显示字典的内容" aria-hidden="true">#</a> 显示字典的内容</h3><p>views.py</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">home</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    info_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;site&#39;</span><span class="token punctuation">:</span> <span class="token string">u&#39;学堂&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;content&#39;</span><span class="token punctuation">:</span> <span class="token string">u&#39;IT技术教程&#39;</span><span class="token punctuation">}</span>
    <span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">&#39;home.html&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;info_dict&#39;</span><span class="token punctuation">:</span> info_dict<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>home.html</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>站点：{{ info_dict.site }} 内容：{{ info_dict.content }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>遍历字典</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>{% for key, value in info_dict.items %}
    {{ key }}: {{ value }}
{% endfor %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="条件判断和-for-循环" tabindex="-1"><a class="header-anchor" href="#条件判断和-for-循环" aria-hidden="true">#</a> 条件判断和 for 循环</h3><p>views.py</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">home</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    List <span class="token operator">=</span> <span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">,</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># 一个长度为100的 List</span>
    <span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">&#39;home.html&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;List&#39;</span><span class="token punctuation">:</span> List<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>home.html</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>{% for item in List %}
    {{ item }}, #每次结束都会在值得后面添加最后，最后一个依然会添加 99,
{% endfor %}	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以，如何判读是不是最后一次遍历呢</p><blockquote><p>forloop.last变量 判断是否为最后一项，如果是则为真，反之。</p></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>{% for item in List %}
    {{ item }}{% if not forloop.last %}, {% endif %} ##判断不是最后一个则加逗号
{% endfor %}	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>for循环的其他变量</p><table><thead><tr><th>变量</th><th>描述</th></tr></thead><tbody><tr><td>forloop.counter</td><td>索引从1开始计算</td></tr><tr><td>forloop.counter0</td><td>索引从0开始计算</td></tr><tr><td>forloop.revcounter</td><td>索引最大长度到1</td></tr><tr><td>forloop.revcounter0</td><td>索引最大长度到0</td></tr><tr><td>forloop.first</td><td>遍历元素为第一项时，返回真</td></tr><tr><td>forloop.last</td><td>遍历元素为最后一项，返回真</td></tr><tr><td>forloop.parentloop</td><td>用在嵌套for循环中，获取上一层for循环的forloop</td></tr></tbody></table><p><strong>当列表可能为空的时候用 for empty</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
{% for athlete in athlete_list %}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>{{ athlete.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
{% empty %}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>抱歉，列表为空<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
{% endfor %}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模板上得到视图对应的网址" tabindex="-1"><a class="header-anchor" href="#模板上得到视图对应的网址" aria-hidden="true">#</a> 模板上得到视图对应的网址</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># views.py</span>
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    c <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token builtin">int</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
    <span class="token keyword">return</span> HttpResponse<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># urls.py</span>
urlpatterns <span class="token operator">=</span> patterns<span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    url<span class="token punctuation">(</span><span class="token string">r&#39;^add/(\\d+)/(\\d+)/$&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;app.views.add&#39;</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&#39;add&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
 
<span class="token comment"># template html</span>
<span class="token punctuation">{</span><span class="token operator">%</span> url <span class="token string">&#39;add&#39;</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token operator">%</span><span class="token punctuation">}</span>

<span class="token comment">#name 的方便之处。</span>
<span class="token comment">#当urls文件发生改变的生后，并不需要去修改html</span>
<span class="token comment">#因为html中我们使用的是name   也就是add</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以使用 as 语句将内容取别名（相当于定义一个变量）</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>{% url &#39;some-url-name&#39; arg arg2 as the_url %}
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ the_url }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>链接到：{{ the_url }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模板中使用逻辑操作" tabindex="-1"><a class="header-anchor" href="#模板中使用逻辑操作" aria-hidden="true">#</a> 模板中使用逻辑操作</h3><p>==, !=, &gt;=, &lt;=, &gt;, &lt; 这些比较都可以在模板中使用</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token punctuation">{</span><span class="token operator">%</span> <span class="token keyword">if</span> var <span class="token operator">&gt;=</span> <span class="token number">90</span> <span class="token operator">%</span><span class="token punctuation">}</span>
成绩优秀，自强学堂你没少去吧！学得不错
<span class="token punctuation">{</span><span class="token operator">%</span> <span class="token keyword">elif</span> var <span class="token operator">&gt;=</span> <span class="token number">80</span> <span class="token operator">%</span><span class="token punctuation">}</span>
成绩良好
<span class="token punctuation">{</span><span class="token operator">%</span> <span class="token keyword">elif</span> var <span class="token operator">&gt;=</span> <span class="token number">70</span> <span class="token operator">%</span><span class="token punctuation">}</span>
成绩一般
<span class="token punctuation">{</span><span class="token operator">%</span> <span class="token keyword">elif</span> var <span class="token operator">&gt;=</span> <span class="token number">60</span> <span class="token operator">%</span><span class="token punctuation">}</span>
需要努力
<span class="token punctuation">{</span><span class="token operator">%</span> <span class="token keyword">else</span> <span class="token operator">%</span><span class="token punctuation">}</span>
不及格啊，大哥！多去自强学堂学习啊！
<span class="token punctuation">{</span><span class="token operator">%</span> endif <span class="token operator">%</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>and, or, not, in, not in 也可以在模板中使用</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token punctuation">{</span><span class="token operator">%</span> <span class="token keyword">if</span> num <span class="token operator">&lt;=</span> <span class="token number">100</span> <span class="token keyword">and</span> num <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">%</span><span class="token punctuation">}</span>
num在<span class="token number">0</span>到<span class="token number">100</span>之间
<span class="token punctuation">{</span><span class="token operator">%</span> <span class="token keyword">else</span> <span class="token operator">%</span><span class="token punctuation">}</span>
数值不在范围之内！
<span class="token punctuation">{</span><span class="token operator">%</span> endif <span class="token operator">%</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>判断是否在某个列表中</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>{% if &#39;ZILI&#39; in List %}
自强学堂在名单中
{% endif %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模板中获取当前网址-当前用户名等" tabindex="-1"><a class="header-anchor" href="#模板中获取当前网址-当前用户名等" aria-hidden="true">#</a> 模板中获取当前网址，当前用户名等</h3><p><strong>修改setting</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>TEMPLATES <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">&#39;BACKEND&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;django.template.backends.django.DjangoTemplates&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;DIRS&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&#39;APP_DIRS&#39;</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">,</span>
        <span class="token string">&#39;OPTIONS&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">&#39;context_processors&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
                <span class="token string">&#39;django.template.context_processors.request&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在模板中就可以调用了</p><p>获取用户</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>{{ request.user }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>判断登录</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>{% if request.user.is_authenticated %}
    {{ request.user.username }}，您好！
{% else %}
    请登陆，这里放登陆链接
{% endif %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取网址</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>{{ request.path}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取当前get 参数</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>{{ request.GET.urlencode}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>合并到一起举例</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;a href=&quot;{{ request.path }}?{{ request.GET.urlencode }}&amp;delete=1&quot;&gt;当前网址加参数 delete&lt;/a&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="模型-数据库" tabindex="-1"><a class="header-anchor" href="#模型-数据库" aria-hidden="true">#</a> 模型（数据库）</h2><blockquote><p>Django模型适合数据库相关的，与数据库相关的代码一般写在models.py中，Django支持 sqlite3，Mysql，PostgreSQL等数据库，只要在setting.py中进行配置即可</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>django-admin.py startproject learn_models <span class="token comment"># 新建一个项目</span>
<span class="token builtin class-name">cd</span> learn_models <span class="token comment"># 进入到该项目的文件夹</span>
django-admin.py startapp people <span class="token comment"># 新建一个 people 应用（app)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>一个项目包含多个应用，一个应用也可以在多个项目中</strong></p><blockquote><p>添加新的项目到settings.py -- INSTALLED_APPS下</p></blockquote><h3 id="修改models-py" tabindex="-1"><a class="header-anchor" href="#修改models-py" aria-hidden="true">#</a> 修改models.py</h3><p>与数据库相关的代码一般写在models.py中</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>db <span class="token keyword">import</span> models
 
<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">(</span>models<span class="token punctuation">.</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    name <span class="token operator">=</span> models<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">)</span>
    age <span class="token operator">=</span> models<span class="token punctuation">.</span>IntegerField<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
<span class="token comment">#新建了一个Person类，继承自models.Model, 一个人有姓名和年龄。这里用到了Field，</span>


<span class="token comment">#上面代码其实就相当于原生sql</span>

CREATE TABLE myapp_person <span class="token punctuation">(</span>
    <span class="token string">&quot;id&quot;</span> serial NOT NULL PRIMARY KEY<span class="token punctuation">,</span>
    <span class="token string">&quot;name&quot;</span> varchar<span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> NOT NULL<span class="token punctuation">,</span>
    <span class="token string">&quot;age&quot;</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token punctuation">)</span> NOT NULL
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>表名person_person由Django自动生成：<strong>项目名称+下划线+小写类名</strong></p></blockquote><h3 id="同步数据库-1" tabindex="-1"><a class="header-anchor" href="#同步数据库-1" aria-hidden="true">#</a> 同步数据库</h3><p>（默认使用SQLite3.0 无需配置）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Django <span class="token number">1.9</span> 默认使用
python manage<span class="token punctuation">.</span>py makemigrations
python manage<span class="token punctuation">.</span>py migrate
<span class="token comment">#同步数据库 migrate代替老版本的syscdb</span>
<span class="token comment">#这两行命令会对models.py 进行检测，自动发现需要更改的，应用到数据库中去。</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">:</span><span class="token number">8000</span><span class="token operator">/</span>admin就可以看到简易的CMS系统了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>同步数据库命令返回值</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root/myProject/learn_models<span class="token punctuation">]</span> <span class="token punctuation">]</span><span class="token variable">$python</span> manage.py makemigrations
Migrations <span class="token keyword">for</span> <span class="token string">&#39;people&#39;</span><span class="token builtin class-name">:</span>
  0001_initial.py:
    - Create model Person
<span class="token punctuation">[</span>root/myProject/learn_models<span class="token punctuation">]</span> <span class="token punctuation">]</span><span class="token variable">$python</span> manage.py migrate
Operations to perform:
  Apply all migrations: people, sessions, auth, contenttypes, admin
Running migrations:
  Rendering model states<span class="token punctuation">..</span>. DONE
  Applying contenttypes.0001_initial<span class="token punctuation">..</span>. OK
  Applying auth.0001_initial<span class="token punctuation">..</span>. OK
  Applying admin.0001_initial<span class="token punctuation">..</span>. OK
  Applying admin.0002_logentry_remove_auto_add<span class="token punctuation">..</span>. OK
  Applying contenttypes.0002_remove_content_type_name<span class="token punctuation">..</span>. OK
  Applying auth.0002_alter_permission_name_max_length<span class="token punctuation">..</span>. OK
  Applying auth.0003_alter_user_email_max_length<span class="token punctuation">..</span>. OK
  Applying auth.0004_alter_user_username_opts<span class="token punctuation">..</span>. OK
  Applying auth.0005_alter_user_last_login_null<span class="token punctuation">..</span>. OK
  Applying auth.0006_require_contenttypes_0002<span class="token punctuation">..</span>. OK
  Applying auth.0007_alter_validators_add_error_messages<span class="token punctuation">..</span>. OK
  Applying people.0001_initial<span class="token punctuation">..</span>. OK
  Applying sessions.0001_initial<span class="token punctuation">..</span>. OK
<span class="token punctuation">[</span>root/myProject/learn_models<span class="token punctuation">]</span> <span class="token punctuation">]</span>$


<span class="token comment">#创建superuser</span>
python manage.py createsuperuser
Username <span class="token punctuation">(</span>leave blank to use <span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span>: 
Email address: ****@qq.com
Password: 
Password <span class="token punctuation">(</span>again<span class="token punctuation">)</span>: 
Superuser created successfully.

<span class="token comment">#此时我们登录 ipaddress:8000/admin  就能看到简单的CMS</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="django-shell操作数据表" tabindex="-1"><a class="header-anchor" href="#django-shell操作数据表" aria-hidden="true">#</a> Django shell操作数据表</h3><blockquote><p>Django中的交互式shell来进行数据库的增删改查等操作</p></blockquote><h4 id="增加-查询" tabindex="-1"><a class="header-anchor" href="#增加-查询" aria-hidden="true">#</a> 增加 查询</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python manage.py shell
<span class="token comment">#数据增加</span>
In <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: from people.models <span class="token function">import</span> Person

In <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>: Person.objects.create<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&#39;lizili&#39;</span>,age<span class="token operator">=</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token comment">#新加数据</span>
Out<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>: <span class="token operator">&lt;</span>Person: Person object<span class="token operator">&gt;</span>
<span class="token comment">#数据库查询</span>
<span class="token comment">#查询所有，返回一个列表，无对象返回空</span>
In <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span>: Person.objects.all<span class="token punctuation">(</span><span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span>: <span class="token punctuation">[</span><span class="token operator">&lt;</span>Person: Person object<span class="token operator">&gt;</span><span class="token punctuation">]</span>

<span class="token comment">#查询指定对象</span>
In <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span>: <span class="token assign-left variable">a</span><span class="token operator">=</span>Person.objects.get<span class="token punctuation">(</span>id<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
In <span class="token punctuation">[</span><span class="token number">17</span><span class="token punctuation">]</span>: a.name
Out<span class="token punctuation">[</span><span class="token number">17</span><span class="token punctuation">]</span>: <span class="token string">&#39;lizili&#39;</span>

<span class="token comment">#每次都要赋值才能查找，很麻烦，所以可以去modules.py中对语句进行修改</span>
from django.db <span class="token function">import</span> models
<span class="token comment"># Create your models here.</span>
class Person<span class="token punctuation">(</span>models.Model<span class="token punctuation">)</span>:
    name <span class="token operator">=</span>models.CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">)</span>
    age <span class="token operator">=</span> models.IntegerField<span class="token punctuation">(</span><span class="token punctuation">)</span>
    def __str__<span class="token punctuation">(</span>self<span class="token punctuation">)</span>:
        <span class="token builtin class-name">return</span> u<span class="token string">&#39;name:%s , age:%s&#39;</span> % <span class="token punctuation">(</span>self.name,self.age<span class="token punctuation">)</span>

<span class="token comment">#这样每次就可以直接查询了</span>
In <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: from people.models <span class="token function">import</span> Person
In <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>: Person.objects.get<span class="token punctuation">(</span>id<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>: <span class="token operator">&lt;</span>Person: name:lizili , age:2<span class="token operator"><span class="token file-descriptor important">6</span>&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="新建数据" tabindex="-1"><a class="header-anchor" href="#新建数据" aria-hidden="true">#</a> 新建数据</h4><div class="language-SHELL line-numbers-mode" data-ext="SHELL"><pre class="language-SHELL"><code>#1
Person.objects.create(name=name,age=age)
#2
p = Person(name=&quot;WZ&quot;, age=23)
p.save()
#3
p = Person(name=&quot;TWZ&quot;)
p.age = 23
p.save()

#4这种方法是防止重复很好的方法，但速度要相对慢些
#返回一个元组，第一个为Person对象，第二个为True或False, 新建时返回的是True, 已经存在时返回False.
Person.objects.get_or_create(name=&quot;WZT&quot;, age=23)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查询数据" tabindex="-1"><a class="header-anchor" href="#查询数据" aria-hidden="true">#</a> 查询数据</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Person.objects.all<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">#查询所有</span>
Person.objects.all<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>:10<span class="token punctuation">]</span> <span class="token comment">#切片操作，获取10个人，不支持负索引，切片可以节约内存</span>
Person.objects.get<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&#39;lizili&#39;</span><span class="token punctuation">)</span> <span class="token comment">#关键字</span>

<span class="token comment">#get方法</span>
<span class="token comment">#get是用来获取一个对象的，如果需要获取满足条件的一些人，就要用到filter</span>

<span class="token comment">#filter方法</span>
Person.objects.filter<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 等于Person.objects.filter(name__exact=&quot;abc&quot;) 名称严格等于 &quot;abc&quot; 的人</span>
Person.objects.filter<span class="token punctuation">(</span>name__iexact<span class="token operator">=</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 名称为 abc 但是不区分大小写，可以找到 ABC, Abc, aBC，这些都符合条件</span>
Person.objects.filter<span class="token punctuation">(</span>name__contains<span class="token operator">=</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 名称中包含 &quot;abc&quot;的人</span>
Person.objects.filter<span class="token punctuation">(</span>name__icontains<span class="token operator">=</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span> <span class="token comment">#名称中包含 &quot;abc&quot;，且abc不区分大小写</span>
Person.objects.filter<span class="token punctuation">(</span>name__regex<span class="token operator">=</span><span class="token string">&quot;^abc&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 正则表达式查询</span>
Person.objects.filter<span class="token punctuation">(</span>name__iregex<span class="token operator">=</span><span class="token string">&quot;^abc&quot;</span><span class="token punctuation">)</span><span class="token comment"># 正则表达式不区分大小写</span>
<span class="token comment">#filter是找出满足条件的，当然也有排除符合某条件的</span>
Person.objects.exclude<span class="token punctuation">(</span>name__contains<span class="token operator">=</span><span class="token string">&quot;WZ&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 排除包含 WZ 的Person对象</span>
Person.objects.filter<span class="token punctuation">(</span>name__contains<span class="token operator">=</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span>.exclude<span class="token punctuation">(</span>age<span class="token operator">=</span><span class="token number">23</span><span class="token punctuation">)</span> <span class="token comment"># 找出名称含有abc, 但是排除年龄是23岁的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义field" tabindex="-1"><a class="header-anchor" href="#自定义field" aria-hidden="true">#</a> 自定义Field</h3>`,197),v={href:"https://docs.djangoproject.com/en/1.10/ref/models/fields/",target:"_blank",rel:"noopener noreferrer"},m=a(`<blockquote><p>以后补</p></blockquote><h3 id="数据表的更改" tabindex="-1"><a class="header-anchor" href="#数据表的更改" aria-hidden="true">#</a> 数据表的更改</h3><blockquote><p>当数据库设计完后，发现不满意，需要更改，添加/删除字段。</p></blockquote><p>Django 1.7+</p><div class="language-SHELL line-numbers-mode" data-ext="SHELL"><pre class="language-SHELL"><code>#直接修改models.py 然后执行以下语句即可
python manage.py makemigrations
python manage.py migrate

#会出现一下提示，选 1
# 1) Provide a one-off default now (will be set on all existing rows)
# 2) Quit, and let me add a default in models.py
#新增了字段，但是原来已经的数据没有这个字段，
#当你这个字段没有默认值，又不能为空的时候它就不知道怎么做
#需要选择 1 来指定一个 “一次性的值” 给已有字段。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="queryset-api" tabindex="-1"><a class="header-anchor" href="#queryset-api" aria-hidden="true">#</a> QuerySet API</h3><blockquote><p><strong>数据库接口</strong>相关的接口（QuerySet API)</p><p>从数据库中查询出来的结果一般是一个集合，这个集合叫做 QuerySet</p></blockquote>`,7);function k(b,g){const e=o("ExternalLinkIcon");return i(),l("div",null,[d,n("p",null,[s("**更详细的可以"),n("a",u,[s("参考这里"),t(e)]),s("**一般来说，选择长期支持版本比较好。")]),r,n("p",null,[n("a",v,[s("更多Field"),t(e)])]),m])}const y=p(c,[["render",k],["__file","Django-基础学习.html.vue"]]);export{y as default};
