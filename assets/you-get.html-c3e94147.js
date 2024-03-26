import{_ as a,X as s,Y as d,a0 as e,a1 as n,a2 as l,$ as r,F as t}from"./framework-7663974c.js";const o={},c=e("h2",{id:"介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),n(" 介绍")],-1),v=e("blockquote",null,[e("p",null,"you-get是一个开源的命令行工具,用于从网络上下载视频、音频和图片 （claude ai）")],-1),u={href:"https://you-get.org/",target:"_blank",rel:"noopener noreferrer"},m=r(`<p>MacOS平台，其他方式查看官网。 我通常用来下载Bilibili的视频</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="you-get" tabindex="-1"><a class="header-anchor" href="#you-get" aria-hidden="true">#</a> you-get</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> you-get
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="ffmpeg" tabindex="-1"><a class="header-anchor" href="#ffmpeg" aria-hidden="true">#</a> ffmpeg</h3><blockquote><p>官方： ffmpeg is a required dependency, for downloading and joining videos streamed in multiple parts (e.g. on some sites like Youku), and for YouTube videos of 1080p or high resolution.</p></blockquote><p>所以，建议安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> ffmpeg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>you-get <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>you-get: version 0.4.1555, a tiny downloader that scrapes the web.
usage: you-get [OPTION]... URL...

A tiny downloader that scrapes the web

options:
  -V, --version         Print version and exit
  -h, --help            Print this help message and exit

Dry-run options:
  (no actual downloading)

  -i, --info            Print extracted information
  -u, --url             Print extracted information with URLs
  --json                Print extracted URLs in JSON format

Download options:
  -n, --no-merge        Do not merge video parts
  --no-caption          Do not download captions (subtitles, lyrics, danmaku, ...)
  -f, --force           Force overwriting existing files
  --skip-existing-file-size-check
                        Skip existing file without checking file size
  -F STREAM_ID, --format STREAM_ID
                        Set video format to STREAM_ID
  -O FILE, --output-filename FILE
                        Set output filename
  -o DIR, --output-dir DIR
                        Set output directory
  -p PLAYER, --player PLAYER
                        Stream extracted URL to a PLAYER
  -c COOKIES_FILE, --cookies COOKIES_FILE
                        Load cookies.txt or cookies.sqlite
  -t SECONDS, --timeout SECONDS
                        Set socket timeout
  -d, --debug           Show traceback and other debug info
  -I FILE, --input-file FILE
                        Read non-playlist URLs from FILE
  -P PASSWORD, --password PASSWORD
                        Set video visit password to PASSWORD
  -l, --playlist        Prefer to download a playlist
  -a, --auto-rename     Auto rename same name different files
  -k, --insecure        ignore ssl errors

Playlist optional options:
  --first FIRST         the first number
  --last LAST           the last number
  --size PAGE_SIZE, --page-size PAGE_SIZE
                        the page size number

Proxy options:
  -x HOST:PORT, --http-proxy HOST:PORT
                        Use an HTTP proxy for downloading
  -y HOST:PORT, --extractor-proxy HOST:PORT
                        Use an HTTP proxy for extracting only
  --no-proxy            Never use a proxy
  -s HOST:PORT or USERNAME:PASSWORD@HOST:PORT, --socks-proxy HOST:PORT or USERNAME:PASSWORD@HOST:PORT
                        Use an SOCKS5 proxy for downloading
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>you-get <span class="token parameter variable">-i</span> 网址URL   <span class="token comment">#查看视频的信息包括：格式、画质、大小等</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>单个视频下载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>you-get <span class="token parameter variable">--format</span><span class="token operator">=</span>dash-flv480 <span class="token parameter variable">-o</span> ~/Download/xxx  https://www.bilibili.com/xxxxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>列表下载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>you-get <span class="token parameter variable">--format</span><span class="token operator">=</span>dash-flv480 <span class="token parameter variable">-o</span> ~/Download/xxx <span class="token parameter variable">-l</span> https://www.bilibili.com/video/BV1xxxxxxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>列表-单个视频下载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>you-get <span class="token parameter variable">--format</span><span class="token operator">=</span>flv360 https://www.bilibili.com/xxxxx?p<span class="token operator">=</span>x （第几个视频，x就是几）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="更新" tabindex="-1"><a class="header-anchor" href="#更新" aria-hidden="true">#</a> 更新</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew upgrade you-get ffmpeg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,21);function b(p,h){const i=t("ExternalLinkIcon");return s(),d("div",null,[c,v,e("p",null,[e("a",u,[n("官网you-get"),l(i)])]),m])}const x=a(o,[["render",b],["__file","you-get.html.vue"]]);export{x as default};
