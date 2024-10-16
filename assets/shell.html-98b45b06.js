import{_ as t,X as p,Y as l,$ as n,a0 as s,a1 as e,Z as i,a3 as c,F as o}from"./framework-abbf9d44.js";const r={},d={class:"hint-container info"},u=n("p",{class:"hint-container-title"},"🔔",-1),m={href:"https://github.com/liquanzhou/ops_doc",target:"_blank",rel:"noopener noreferrer"},v=c(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h2 id="文件" tabindex="-1"><a class="header-anchor" href="#文件" aria-hidden="true">#</a> 文件</h2><h3 id="基础命令" tabindex="-1"><a class="header-anchor" href="#基础命令" aria-hidden="true">#</a> 基础命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token function">ls</span> <span class="token parameter variable">-rtl</span>                 <span class="token comment"># 按时间倒叙列出所有目录和文件 ll -rt</span>
    <span class="token function">touch</span> <span class="token function">file</span>              <span class="token comment"># 创建空白文件</span>
    <span class="token function">rm</span> <span class="token parameter variable">-rf</span> 目录名            <span class="token comment"># 不提示删除非空目录(-r:递归删除 -f强制)</span>
    dos2unix                <span class="token comment"># windows文本转linux文本</span>
    unix2dos                <span class="token comment"># linux文本转windows文本</span>
    enca filename           <span class="token comment"># 查看编码  安装 yum install -y enca</span>
    md5sum                  <span class="token comment"># 查看md5值</span>
    <span class="token function">ln</span> 源文件 目标文件         <span class="token comment"># 硬链接</span>
    <span class="token function">ln</span> <span class="token parameter variable">-s</span> 源文件 目标文件      <span class="token comment"># 符号连接</span>
    readlink <span class="token parameter variable">-f</span> /data       <span class="token comment"># 查看连接真实目录</span>
    <span class="token function">cat</span> <span class="token function">file</span> <span class="token operator">|</span> <span class="token function">nl</span> <span class="token operator">|</span><span class="token function">less</span>     <span class="token comment"># 查看上下翻页且显示行号  q退出</span>
    <span class="token function">head</span>                    <span class="token comment"># 查看文件开头内容</span>
    <span class="token function">head</span> <span class="token parameter variable">-c</span> 10m             <span class="token comment"># 截取文件中10M内容</span>
    <span class="token function">split</span> <span class="token parameter variable">-C</span> 10M            <span class="token comment"># 将文件切割大小为10M -C按行</span>
    <span class="token function">tail</span> <span class="token parameter variable">-f</span> <span class="token function">file</span>            <span class="token comment"># 查看结尾 监视日志文件</span>
    <span class="token function">tail</span> <span class="token parameter variable">-F</span> <span class="token function">file</span>            <span class="token comment"># 监视日志并重试, 针对文件被mv的情况可以持续读取</span>
    <span class="token function">file</span>                    <span class="token comment"># 检查文件类型</span>
    <span class="token builtin class-name">umask</span>                   <span class="token comment"># 更改默认权限</span>
    <span class="token function">uniq</span>                    <span class="token comment"># 删除重复的行</span>
    <span class="token function">uniq</span> <span class="token parameter variable">-c</span>                 <span class="token comment"># 重复的行出现次数</span>
    <span class="token function">uniq</span> <span class="token parameter variable">-u</span>                 <span class="token comment"># 只显示不重复行</span>
    <span class="token function">paste</span> a b               <span class="token comment"># 将两个文件合并用tab键分隔开</span>
    <span class="token function">paste</span> -d<span class="token string">&#39;+&#39;</span> a b         <span class="token comment"># 将两个文件合并指定&#39;+&#39;符号隔开</span>
    <span class="token function">paste</span> <span class="token parameter variable">-s</span> a              <span class="token comment"># 将多行数据合并到一行用tab键隔开</span>
    chattr +i /etc/passwd   <span class="token comment"># 不得任意改变文件或目录 -i去掉锁 -R递归</span>
    <span class="token function">more</span>                    <span class="token comment"># 向下分面器</span>
    <span class="token function">locate</span> 字符串            <span class="token comment"># 搜索</span>
    <span class="token function">wc</span> <span class="token parameter variable">-l</span> <span class="token function">file</span>              <span class="token comment"># 查看行数</span>
    <span class="token function">cp</span> filename<span class="token punctuation">{</span>,.bak<span class="token punctuation">}</span>      <span class="token comment"># 快速备份一个文件</span>
    <span class="token punctuation">\\</span>cp a b                 <span class="token comment"># 拷贝不提示 既不使用别名 cp -i</span>
    <span class="token function">rev</span>                     <span class="token comment"># 将行中的字符逆序排列</span>
    <span class="token function">comm</span> <span class="token parameter variable">-12</span> <span class="token number">2</span> <span class="token number">3</span>            <span class="token comment"># 行和行比较匹配</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;10.45aa&quot;</span> <span class="token operator">|</span><span class="token function">cksum</span>                   <span class="token comment"># 字符串转数字编码，可做校验，也可用于文件校验</span>
    <span class="token function">iconv</span> <span class="token parameter variable">-f</span> gbk <span class="token parameter variable">-t</span> utf8 原.txt <span class="token operator">&gt;</span> 新.txt     <span class="token comment"># 转换编码</span>
    xxd /boot/grub/stage1                   <span class="token comment"># 16进制查看</span>
    hexdump <span class="token parameter variable">-C</span> /boot/grub/stage1            <span class="token comment"># 16进制查看</span>
    <span class="token function">rename</span> 原模式 目标模式 文件                 <span class="token comment"># 重命名 可正则</span>
    <span class="token function">watch</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token string">&#39;df; ls -FlAt /path&#39;</span>      <span class="token comment"># 实时某个目录下查看最新改动过的文件</span>
    <span class="token function">cp</span> <span class="token parameter variable">-v</span>  /dev/dvd  /rhel4.6.iso9660       <span class="token comment"># 制作镜像</span>
    <span class="token function">diff</span> suzu.c suzu2.c  <span class="token operator">&gt;</span> sz.patch         <span class="token comment"># 制作补丁</span>
    patch suzu.c <span class="token operator">&lt;</span> sz.patch                 <span class="token comment"># 安装补丁</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sort排序" tabindex="-1"><a class="header-anchor" href="#sort排序" aria-hidden="true">#</a> sort排序</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token parameter variable">-t</span>  <span class="token comment"># 指定排序时所用的栏位分隔字符</span>
    <span class="token parameter variable">-n</span>  <span class="token comment"># 依照数值的大小排序</span>
    <span class="token parameter variable">-r</span>  <span class="token comment"># 以相反的顺序来排序</span>
    <span class="token parameter variable">-f</span>  <span class="token comment"># 排序时，将小写字母视为大写字母</span>
    <span class="token parameter variable">-d</span>  <span class="token comment"># 排序时，处理英文字母、数字及空格字符外，忽略其他的字符</span>
    <span class="token parameter variable">-c</span>  <span class="token comment"># 检查文件是否已经按照顺序排序</span>
    <span class="token parameter variable">-b</span>  <span class="token comment"># 忽略每行前面开始处的空格字符</span>
    <span class="token parameter variable">-M</span>  <span class="token comment"># 前面3个字母依照月份的缩写进行排序</span>
    <span class="token parameter variable">-k</span>  <span class="token comment"># 指定域</span>
    <span class="token parameter variable">-m</span>  <span class="token comment"># 将几个排序好的文件进行合并</span>
    <span class="token parameter variable">-T</span>  <span class="token comment"># 指定临时文件目录,默认在/tmp</span>
    +<span class="token operator">&lt;</span>起始栏位<span class="token operator">&gt;</span>-<span class="token operator">&lt;</span>结束栏位<span class="token operator">&gt;</span>   <span class="token comment"># 以指定的栏位来排序，范围由起始栏位到结束栏位的前一栏位。</span>
    <span class="token parameter variable">-o</span>  <span class="token comment"># 将排序后的结果存入指定的文</span>

    <span class="token function">sort</span> <span class="token parameter variable">-n</span>               <span class="token comment"># 按数字排序</span>
    <span class="token function">sort</span> <span class="token parameter variable">-nr</span>              <span class="token comment"># 按数字倒叙</span>
    <span class="token function">sort</span> <span class="token parameter variable">-u</span>               <span class="token comment"># 过滤重复行</span>
    <span class="token function">sort</span> <span class="token parameter variable">-m</span> a.txt c.txt   <span class="token comment"># 将两个文件内容整合到一起</span>
    <span class="token function">sort</span> <span class="token parameter variable">-n</span> -t<span class="token string">&#39; &#39;</span> <span class="token parameter variable">-k</span> <span class="token number">2</span> <span class="token parameter variable">-k</span> <span class="token number">3</span> a.txt     <span class="token comment"># 第二域相同，将从第三域进行升降处理</span>
    <span class="token function">sort</span> <span class="token parameter variable">-n</span> -t<span class="token string">&#39;:&#39;</span> <span class="token parameter variable">-k</span> 3r a.txt         <span class="token comment"># 以:为分割域的第三域进行倒叙排列</span>
    <span class="token function">sort</span> <span class="token parameter variable">-k</span> <span class="token number">1.3</span> a.txt                 <span class="token comment"># 从第三个字母起进行排序</span>
    <span class="token function">sort</span> -t<span class="token string">&quot; &quot;</span> <span class="token parameter variable">-k</span> 2n <span class="token parameter variable">-u</span>  a.txt        <span class="token comment"># 以第二域进行排序，如果遇到重复的，就删除</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="find查找" tabindex="-1"><a class="header-anchor" href="#find查找" aria-hidden="true">#</a> find查找</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token comment"># linux文件无创建时间</span>
    <span class="token comment"># Access 使用时间</span>
    <span class="token comment"># Modify 内容修改时间</span>
    <span class="token comment"># Change 状态改变时间(权限、属主)</span>
    <span class="token comment"># 时间默认以24小时为单位,当前时间到向前24小时为0天,向前48-72小时为2天</span>
    <span class="token comment"># -and 且 匹配两个条件 参数可以确定时间范围 -mtime +2 -and -mtime -4</span>
    <span class="token comment"># -or 或 匹配任意一个条件</span>

    <span class="token function">find</span> /etc <span class="token parameter variable">-name</span> <span class="token string">&quot;*http*&quot;</span>     <span class="token comment"># 按文件名查找</span>
    <span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f               <span class="token comment"># 查找某一类型文件</span>
    <span class="token function">find</span> / <span class="token parameter variable">-perm</span>                 <span class="token comment"># 按照文件权限查找</span>
    <span class="token function">find</span> / <span class="token parameter variable">-user</span>                 <span class="token comment"># 按照文件属主查找</span>
    <span class="token function">find</span> / <span class="token parameter variable">-group</span>                <span class="token comment"># 按照文件所属的组来查找文件</span>
    <span class="token function">find</span> / <span class="token parameter variable">-atime</span> <span class="token parameter variable">-n</span>             <span class="token comment"># 文件使用时间在N天以内</span>
    <span class="token function">find</span> / <span class="token parameter variable">-atime</span> +n             <span class="token comment"># 文件使用时间在N天以前</span>
    <span class="token function">find</span> / <span class="token parameter variable">-mtime</span> +n             <span class="token comment"># 文件内容改变时间在N天以前</span>
    <span class="token function">find</span> / <span class="token parameter variable">-ctime</span> +n             <span class="token comment"># 文件状态改变时间在N天前</span>
    <span class="token function">find</span> / <span class="token parameter variable">-mmin</span> +30             <span class="token comment"># 按分钟查找内容改变</span>
    <span class="token function">find</span> / <span class="token parameter variable">-size</span> +1000000c <span class="token parameter variable">-print</span>                           <span class="token comment"># 查找文件长度大于1M字节的文件</span>
    <span class="token function">find</span> /etc <span class="token parameter variable">-name</span> <span class="token string">&quot;*passwd*&quot;</span> <span class="token parameter variable">-exec</span> <span class="token function">grep</span> <span class="token string">&quot;xuesong&quot;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>   <span class="token comment"># 按名字查找文件传递给-exec后命令</span>
    <span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-name</span> <span class="token string">&#39;t*&#39;</span> <span class="token parameter variable">-exec</span> <span class="token function">basename</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>                  <span class="token comment"># 查找文件名,不取路径</span>
    <span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;err*&quot;</span> <span class="token parameter variable">-exec</span>  <span class="token function">rename</span> err ERR <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span> <span class="token comment"># 批量改名(查找err 替换为 ERR {}文件</span>
    <span class="token function">find</span> 路径 <span class="token parameter variable">-name</span> *name1* <span class="token parameter variable">-or</span> <span class="token parameter variable">-name</span> *name2*               <span class="token comment"># 查找任意一个关键字</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vim编辑" tabindex="-1"><a class="header-anchor" href="#vim编辑" aria-hidden="true">#</a> vim编辑</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
    gconf-editor           <span class="token comment"># 配置编辑器</span>
    /etc/vimrc             <span class="token comment"># 配置文件路径</span>
    <span class="token function">vim</span> +24 <span class="token function">file</span>           <span class="token comment"># 打开文件定位到指定行</span>
    <span class="token function">vim</span> file1 file2        <span class="token comment"># 打开多个文件</span>
    <span class="token function">vim</span> <span class="token parameter variable">-O2</span> file1 file2    <span class="token comment"># 垂直分屏</span>
    <span class="token function">vim</span> <span class="token parameter variable">-on</span> file1 file2    <span class="token comment"># 水平分屏</span>
    Ctrl+ U                <span class="token comment"># 向前翻页</span>
    Ctrl+ D                <span class="token comment"># 向后翻页</span>
    Ctrl+ww                <span class="token comment"># 在窗口间切换</span>
    Ctrl+w +or-or<span class="token operator">=</span>         <span class="token comment"># 增减高度</span>
    :sp filename           <span class="token comment"># 上下分割打开新文件</span>
    :vs filename           <span class="token comment"># 左右分割打开新文件</span>
    :set nu                <span class="token comment"># 打开行号</span>
    :set nonu              <span class="token comment"># 取消行号</span>
    :nohl                  <span class="token comment"># 取消高亮</span>
    :set <span class="token function">paste</span>             <span class="token comment"># 取消缩进</span>
    :set autoindent        <span class="token comment"># 设置自动缩进</span>
    :set ff                <span class="token comment"># 查看文本格式</span>
    :set binary            <span class="token comment"># 改为unix格式</span>
    :%s/字符1/字符2/g       <span class="token comment"># 全部替换</span>
    :200                   <span class="token comment"># 跳转到200  1 文件头</span>
    G                      <span class="token comment"># 跳到行尾</span>
    <span class="token function">dd</span>                     <span class="token comment"># 删除当前行 并复制 可直接p粘贴</span>
    11111dd                <span class="token comment"># 删除11111行，可用来清空文件</span>
    r                      <span class="token comment"># 替换单个字符</span>
    R                      <span class="token comment"># 替换多个字符</span>
    u                      <span class="token comment"># 撤销上次操作</span>
    *                      <span class="token comment"># 全文匹配当前光标所在字符串</span>
    $                      <span class="token comment"># 行尾</span>
    <span class="token number">0</span>                      <span class="token comment"># 行首</span>
    X                      <span class="token comment"># 文档加密</span>
    <span class="token function">v</span> <span class="token operator">=</span>                    <span class="token comment"># 自动格式化代码</span>
    Ctrl+v                 <span class="token comment"># 可视模式</span>
    Ctrl+v I ESC           <span class="token comment"># 多行操作</span>
    Ctrl+v s ESC           <span class="token comment"># 批量取消注释</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="归档压缩" tabindex="-1"><a class="header-anchor" href="#归档压缩" aria-hidden="true">#</a> 归档压缩</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token function">tar</span> zxvpf gz.tar.gz <span class="token parameter variable">-C</span> 放到指定目录 包中的目录       <span class="token comment"># 解包tar.gz 不指定目录则全解压</span>
    <span class="token function">tar</span> zcvpf /<span class="token variable">$path</span>/gz.tar.gz * <span class="token comment"># 打包gz 注意*最好用相对路径</span>
    <span class="token function">tar</span> zcf /<span class="token variable">$path</span>/gz.tar.gz *   <span class="token comment"># 打包正确不提示</span>
    <span class="token function">tar</span> ztvpf gz.tar.gz          <span class="token comment"># 查看gz</span>
    <span class="token function">tar</span> xvf <span class="token number">1</span>.tar <span class="token parameter variable">-C</span> 目录         <span class="token comment"># 解包tar</span>
    <span class="token function">tar</span> <span class="token parameter variable">-cvf</span> <span class="token number">1</span>.tar *             <span class="token comment"># 打包tar</span>
    <span class="token function">tar</span> tvf <span class="token number">1</span>.tar                <span class="token comment"># 查看tar</span>
    <span class="token function">tar</span> <span class="token parameter variable">-rvf</span> <span class="token number">1</span>.tar 文件名         <span class="token comment"># 给tar追加文件</span>
    <span class="token function">tar</span> <span class="token parameter variable">--exclude</span><span class="token operator">=</span>/home/dmtsai <span class="token parameter variable">--exclude</span><span class="token operator">=</span>*.tar <span class="token parameter variable">-zcvf</span> myfile.tar.gz /home/* /etc      <span class="token comment"># 打包/home, /etc ，但排除 /home/dmtsai</span>
    <span class="token function">tar</span> <span class="token parameter variable">-N</span> <span class="token string">&quot;2005/06/01&quot;</span> <span class="token parameter variable">-zcvf</span> home.tar.gz /home      <span class="token comment"># 在 /home 当中，比 2005/06/01 新的文件才备份</span>
    <span class="token function">tar</span> <span class="token parameter variable">-zcvfh</span> home.tar.gz /home                     <span class="token comment"># 打包目录中包括连接目录</span>
    <span class="token function">tar</span> zcf - ./ <span class="token operator">|</span> <span class="token function">ssh</span> root@IP <span class="token string">&quot;tar zxf - -C /xxxx&quot;</span>  <span class="token comment"># 一边压缩一边解压</span>
    zgrep 字符 <span class="token number">1</span>.gz               <span class="token comment"># 查看压缩包中文件字符行</span>
    <span class="token function">bzip2</span>  <span class="token parameter variable">-dv</span> <span class="token number">1</span>.tar.bz2         <span class="token comment"># 解压bzip2</span>
    <span class="token function">bzip2</span> <span class="token parameter variable">-v</span> <span class="token number">1</span>.tar               <span class="token comment"># bzip2压缩</span>
    bzcat                        <span class="token comment"># 查看bzip2</span>
    <span class="token function">gzip</span> A                       <span class="token comment"># 直接压缩文件 # 压缩后源文件消失</span>
    gunzip A.gz                  <span class="token comment"># 直接解压文件 # 解压后源文件消失</span>
    <span class="token function">gzip</span> <span class="token parameter variable">-dv</span> <span class="token number">1</span>.tar.gz            <span class="token comment"># 解压gzip到tar</span>
    <span class="token function">gzip</span> <span class="token parameter variable">-v</span> <span class="token number">1</span>.tar                <span class="token comment"># 压缩tar到gz</span>
    <span class="token function">unzip</span> zip.zip                <span class="token comment"># 解压zip</span>
    <span class="token function">zip</span> zip.zip *                <span class="token comment"># 压缩zip</span>
    <span class="token comment"># rar3.6下载:  http://www.rarsoft.com/rar/rarlinux-3.6.0.tar.gz</span>
    <span class="token function">rar</span> a rar.rar *.jpg          <span class="token comment"># 压缩文件为rar包</span>
    <span class="token function">unrar</span> x rar.rar              <span class="token comment"># 解压rar包</span>
    7z a 7z.7z *                 <span class="token comment"># 7z压缩</span>
    7z e 7z.7z                   <span class="token comment"># 7z解压	</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件acl控制" tabindex="-1"><a class="header-anchor" href="#文件acl控制" aria-hidden="true">#</a> 文件ACL控制</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>getfacl <span class="token number">1</span>.test                      <span class="token comment"># 查看文件ACL权限</span>
setfacl <span class="token parameter variable">-R</span> <span class="token parameter variable">-m</span> u:xuesong:rw- <span class="token number">1</span>.test  <span class="token comment"># 对文件增加用户的读写权限 -R 递归</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git操作" tabindex="-1"><a class="header-anchor" href="#git操作" aria-hidden="true">#</a> git操作</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 编译安装git-1.8.4.4</span>
./configure --with-curl --with-expat
<span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>

<span class="token function">git</span> clone git@10.10.10.10:gittest.git  ./gittest/  <span class="token comment"># 克隆项目到指定目录</span>
<span class="token function">git</span> status                                         <span class="token comment"># Show the working tree(工作树) status</span>
<span class="token function">git</span> log <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token parameter variable">--stat</span>                                <span class="token comment"># 查看最后一次日志文件</span>
<span class="token function">git</span> branch <span class="token parameter variable">-a</span>                                      <span class="token comment"># 列出远程跟踪分支(remote-tracking branches)和本地分支</span>
<span class="token function">git</span> checkout developing                            <span class="token comment"># 切换到developing分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> release                            <span class="token comment"># 切换分支没有从当前分支创建</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> release origin/master              <span class="token comment"># 从远程分支创建本地镜像分支</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> release                   <span class="token comment"># 从远端删除分区，服务端有可能设置保护不允许删除</span>
<span class="token function">git</span> push origin release                            <span class="token comment"># 把本地分支提交到远程</span>
<span class="token function">git</span> pull                                           <span class="token comment"># 更新项目 需要cd到项目目录中</span>
<span class="token function">git</span> fetch                                          <span class="token comment"># 抓取远端代码但不合并到当前</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> origin/master                     <span class="token comment"># 和远端同步分支</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>                                          <span class="token comment"># 更新所有文件</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;gittest up&quot;</span>                         <span class="token comment"># 提交操作并添加备注</span>
<span class="token function">git</span> push                                           <span class="token comment"># 正式提交到远程git服务器</span>
<span class="token function">git</span> push <span class="token punctuation">[</span>-u origin master<span class="token punctuation">]</span>                        <span class="token comment"># 正式提交到远程git服务器(master分支)</span>
<span class="token function">git</span> tag <span class="token punctuation">[</span>-a<span class="token punctuation">]</span> dev-v-0.11.54 <span class="token punctuation">[</span>-m <span class="token string">&#39;fix #67&#39;</span><span class="token punctuation">]</span>          <span class="token comment"># 创建tag,名为dev-v-0.11.54,备注fix #67</span>
<span class="token function">git</span> tag <span class="token parameter variable">-l</span> dev-v-0.11.54                           <span class="token comment"># 查看tag(dev-v-0.11.5)</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--tags</span>                             <span class="token comment"># 提交tag</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span>                                   <span class="token comment"># 本地恢复整个项目</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">--cached</span>  ./img                       <span class="token comment"># -n执行命令时,不会删除任何文件,而是展示此命令要删除的文件列表预览</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span>  ./img                          <span class="token comment"># 执行删除命令 需要commit和push让远程生效</span>
<span class="token function">git</span> init <span class="token parameter variable">--bare</span> smc-content-check.git              <span class="token comment"># 初始化新git项目  需要手动创建此目录并给git用户权限 chown -R git:git smc-content-check.git</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> credential.helper store        <span class="token comment"># 记住密码</span>
<span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.name <span class="token string">&quot;your name&quot;</span>        <span class="token comment"># 设置你的用户名, 希望在一个特定的项目中使用不同的用户或e-mail地址, 不要--global选项</span>
<span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.email <span class="token string">&quot;your email&quot;</span>      <span class="token comment"># 设置你的e-mail地址, 每次Git提交都会使用该信息</span>
<span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.name                    <span class="token comment"># 查看用户名</span>
<span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.email                   <span class="token comment"># 查看用户e-mail</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--edit</span>                         <span class="token comment"># 编辑~/.gitconfig(User-specific)配置文件, 值优先级高于/etc/gitconfig(System-wide)</span>
<span class="token function">git</span> config <span class="token parameter variable">--edit</span>                                  <span class="token comment"># 编辑.git/config(Repository specific)配置文件, 值优先级高于~/.gitconfig</span>
<span class="token function">git</span> cherry-pick  <span class="token operator">&lt;</span>commit id<span class="token operator">&gt;</span>                       <span class="token comment"># 用于把另一个本地分支的commit修改应用到当前分支 需要push到远程</span>
<span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&#39;%h: %s&#39;</span> 9378b62<span class="token punctuation">..</span>HEAD     <span class="token comment"># 查看指定范围更新操作 commit id</span>

从远端拉一份新的<span class="token punctuation">{</span>
<span class="token comment"># You have not concluded your merge (MERGE_HEAD exists)  git拉取失败</span>
<span class="token function">git</span> fetch <span class="token parameter variable">--hard</span> origin/master
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> origin/master
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rm删除文件恢复" tabindex="-1"><a class="header-anchor" href="#rm删除文件恢复" aria-hidden="true">#</a> rm删除文件恢复</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># debugfs针对 ext2   # ext3grep针对 ext3   # extundelete针对 ext4</span>
<span class="token function">df</span> <span class="token parameter variable">-T</span>   <span class="token comment"># 首先查看磁盘分区格式</span>
<span class="token function">umount</span> /data/     <span class="token comment"># 卸载挂载,数据丢失请首先卸载挂载,或重新挂载只读</span>
ext3grep /dev/sdb1 <span class="token parameter variable">--ls</span> <span class="token parameter variable">--inode</span> <span class="token number">2</span>         <span class="token comment"># 记录信息继续查找目录下文件inode信息</span>
ext3grep /dev/sdb1 <span class="token parameter variable">--ls</span> <span class="token parameter variable">--inode</span> <span class="token number">131081</span>    <span class="token comment"># 此处是inode</span>
ext3grep /dev/sdb1 --restore-inode <span class="token number">49153</span>  <span class="token comment"># 记录下inode信息开始恢复目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="软件" tabindex="-1"><a class="header-anchor" href="#软件" aria-hidden="true">#</a> 软件</h2><h3 id="rpm" tabindex="-1"><a class="header-anchor" href="#rpm" aria-hidden="true">#</a> rpm</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> <span class="token function">lynx</span>          <span class="token comment"># rpm安装</span>
<span class="token function">rpm</span> <span class="token parameter variable">-e</span> <span class="token function">lynx</span>            <span class="token comment"># 卸载包</span>
<span class="token function">rpm</span> <span class="token parameter variable">-e</span> <span class="token function">lynx</span> <span class="token parameter variable">--nodeps</span>   <span class="token comment"># 强制卸载</span>
<span class="token function">rpm</span> <span class="token parameter variable">-qa</span>                <span class="token comment"># 查看所有安装的rpm包</span>
<span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">lynx</span>    <span class="token comment"># 查找包是否安装</span>
<span class="token function">rpm</span> <span class="token parameter variable">-ql</span>                <span class="token comment"># 软件包路径</span>
<span class="token function">rpm</span> <span class="token parameter variable">-Uvh</span>               <span class="token comment"># 升级包</span>
<span class="token function">rpm</span> <span class="token parameter variable">--test</span> <span class="token function">lynx</span>        <span class="token comment"># 测试</span>
<span class="token function">rpm</span> <span class="token parameter variable">-qc</span>                <span class="token comment"># 软件包配置文档</span>
<span class="token function">rpm</span> <span class="token parameter variable">--import</span>  /etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-6     <span class="token comment"># 导入rpm的签名信息</span>
<span class="token function">rpm</span> <span class="token parameter variable">--initdb</span>           <span class="token comment"># 初始化rpm 数据库</span>
<span class="token function">rpm</span> <span class="token parameter variable">--rebuilddb</span>        <span class="token comment"># 重建rpm数据库  在rpm和yum无响应的情况使用 先 rm -f /var/lib/rpm/__db.00* 在重建</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="yum" tabindex="-1"><a class="header-anchor" href="#yum" aria-hidden="true">#</a> yum</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum list                 <span class="token comment"># 所有软件列表</span>
yum <span class="token function">install</span> 包名          <span class="token comment"># 安装包和依赖包</span>
yum <span class="token parameter variable">-y</span> update            <span class="token comment"># 升级所有包版本,依赖关系，系统版本内核都升级</span>
yum <span class="token parameter variable">-y</span> update 软件包名    <span class="token comment"># 升级指定的软件包</span>
yum <span class="token parameter variable">-y</span> upgrade           <span class="token comment"># 不改变软件设置更新软件，系统版本升级，内核不改变</span>
yum search mail          <span class="token comment"># yum搜索相关包</span>
yum grouplist            <span class="token comment"># 软件包组</span>
yum <span class="token parameter variable">-y</span> groupinstall <span class="token string">&quot;Virtualization&quot;</span>   <span class="token comment"># 安装软件包组</span>
repoquery <span class="token parameter variable">-ql</span> gstreamer  <span class="token comment"># 不安装软件查看包含文件</span>
yum clean all            <span class="token comment"># 清除var下缓存</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编译" tabindex="-1"><a class="header-anchor" href="#编译" aria-hidden="true">#</a> 编译</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>源码安装<span class="token punctuation">{</span>

    ./configure <span class="token parameter variable">--help</span>                   <span class="token comment"># 查看所有编译参数</span>
    ./configure  <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/    <span class="token comment"># 配置参数</span>
    <span class="token function">make</span>                                 <span class="token comment"># 编译</span>
    <span class="token comment"># make -j 8                          # 多线程编译,速度较快,但有些软件不支持</span>
    <span class="token function">make</span> <span class="token function">install</span>                         <span class="token comment"># 安装包</span>
    <span class="token function">make</span> clean                           <span class="token comment"># 清除编译结果</span>

<span class="token punctuation">}</span>

perl程序编译<span class="token punctuation">{</span>

    perl Makefile.PL
    <span class="token function">make</span>
    <span class="token function">make</span> <span class="token builtin class-name">test</span>
    <span class="token function">make</span> <span class="token function">install</span>

<span class="token punctuation">}</span>

python程序编译<span class="token punctuation">{</span>

    python file.py

    <span class="token comment"># 源码包编译安装</span>
    python setup.py build
    python setup.py <span class="token function">install</span>

<span class="token punctuation">}</span>

编译c程序<span class="token punctuation">{</span>

    gcc <span class="token parameter variable">-g</span> hello.c <span class="token parameter variable">-o</span> hello

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="系统" tabindex="-1"><a class="header-anchor" href="#系统" aria-hidden="true">#</a> 系统</h2><h3 id="基础命令-1" tabindex="-1"><a class="header-anchor" href="#基础命令-1" aria-hidden="true">#</a> 基础命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wall        　  　                            <span class="token comment"># 给其它用户发消息</span>
<span class="token function">whereis</span> <span class="token function">ls</span>                                    <span class="token comment"># 查找命令的目录</span>
<span class="token function">which</span>                                         <span class="token comment"># 查看当前要执行的命令所在的路径</span>
<span class="token function">clear</span>                                         <span class="token comment"># 清空整个屏幕</span>
reset                                         <span class="token comment"># 重新初始化屏幕</span>
<span class="token function">cal</span>                                           <span class="token comment"># 显示月历</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token number">123456</span> <span class="token operator">|</span> md5sum                       <span class="token comment"># md5加密</span>
mkpasswd                                      <span class="token comment"># 随机生成密码   -l位数系统org: public ntp time server for everyone(http://www.pool.ntp.org/zh/)</span>
tzselect                                      <span class="token comment"># 选择时区 #+8=(5 9 1 1) # (TZ=&#39;Asia/Shanghai&#39;; export TZ)括号内写入 /etc/profile</span>
/sbin/hwclock <span class="token parameter variable">-w</span>                              <span class="token comment"># 时间保存到硬件</span>
/etc/shadow                                   <span class="token comment"># 账户影子文件</span>
<span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>en                                       <span class="token comment"># 修改语言</span>
<span class="token function">vim</span> /etc/sysconfig/i18n                       <span class="token comment"># 修改编码  LANG=&quot;en_US.UTF-8&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LC_ALL</span></span><span class="token operator">=</span>C                               <span class="token comment"># 强制字符集</span>
<span class="token function">vi</span> /etc/hosts                                 <span class="token comment"># 查询静态主机名</span>
<span class="token builtin class-name">alias</span>                                         <span class="token comment"># 别名</span>
<span class="token function">watch</span> <span class="token function">uptime</span>                                  <span class="token comment"># 监测命令动态刷新 监视</span>
ipcs <span class="token parameter variable">-a</span>                                       <span class="token comment"># 查看Linux系统当前单个共享内存段的最大值</span>
ldconfig                                      <span class="token comment"># 动态链接库管理命令</span>
ldd <span class="token variable"><span class="token variable">\`</span><span class="token function">which</span> cmd<span class="token variable">\`</span></span>                               <span class="token comment"># 查看命令的依赖库</span>
dist-upgrade                                  <span class="token comment"># 会改变配置文件,改变旧的依赖关系，改变系统版本</span>
/boot/grub/grub.conf                          <span class="token comment"># grub启动项配置</span>
<span class="token function">ps</span> <span class="token parameter variable">-mfL</span> <span class="token operator">&lt;</span>PID<span class="token operator">&gt;</span>                                 <span class="token comment"># 查看指定进程启动的线程 线程数受 max user processes 限制</span>
<span class="token function">ps</span> uxm <span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span>                                 <span class="token comment"># 查看当前用户占用的进程数 [包括线程]  max user processes</span>
<span class="token function">top</span> <span class="token parameter variable">-p</span>  PID <span class="token parameter variable">-H</span>                                <span class="token comment"># 查看指定PID进程及线程</span>
<span class="token function">lsof</span> <span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span>                                   <span class="token comment"># 查看当前文件句柄数使用数量  open files</span>
<span class="token function">lsof</span> <span class="token operator">|</span><span class="token function">grep</span> /lib                               <span class="token comment"># 查看加载库文件</span>
<span class="token function">sysctl</span> <span class="token parameter variable">-a</span>                                     <span class="token comment"># 查看当前所有系统内核参数</span>
<span class="token function">sysctl</span> <span class="token parameter variable">-p</span>                                     <span class="token comment"># 修改内核参数/etc/sysctl.conf，让/etc/rc.d/rc.sysinit读取生效</span>
<span class="token function">strace</span> <span class="token parameter variable">-p</span> pid                                 <span class="token comment"># 跟踪系统调用</span>
<span class="token function">ps</span> <span class="token parameter variable">-eo</span> <span class="token string">&quot;%p %C  %z  %a&quot;</span><span class="token operator">|</span><span class="token function">sort</span> <span class="token parameter variable">-k3</span> <span class="token parameter variable">-n</span>            <span class="token comment"># 把进程按内存使用大小排序</span>
<span class="token function">strace</span> <span class="token function">uptime</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span><span class="token operator">|</span><span class="token function">grep</span> <span class="token function">open</span>                  <span class="token comment"># 查看命令打开的相关文件</span>
<span class="token function">grep</span> Hugepagesize /proc/meminfo               <span class="token comment"># 内存分页大小</span>
mkpasswd <span class="token parameter variable">-l</span> <span class="token number">8</span>  <span class="token parameter variable">-C</span> <span class="token number">2</span> <span class="token parameter variable">-c</span> <span class="token number">2</span> <span class="token parameter variable">-d</span> <span class="token number">4</span> <span class="token parameter variable">-s</span> <span class="token number">0</span>            <span class="token comment"># 随机生成指定类型密码</span>
<span class="token builtin class-name">echo</span> <span class="token number">1</span> <span class="token operator">&gt;</span> /proc/sys/net/ipv4/tcp_syncookies    <span class="token comment"># 使TCP SYN Cookie 保护生效  # &quot;SYN Attack&quot;是一种拒绝服务的攻击方式</span>
<span class="token function">grep</span> Swap  /proc/25151/smaps <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{a+=$2}END{print a}&#39;</span>    <span class="token comment"># 查询某pid使用的swap大小</span>
redir <span class="token parameter variable">--lport</span><span class="token operator">=</span><span class="token number">33060</span> <span class="token parameter variable">--caddr</span><span class="token operator">=</span><span class="token number">10.10</span>.10.78 <span class="token parameter variable">--cport</span><span class="token operator">=</span><span class="token number">3306</span>       <span class="token comment"># 端口映射 yum安装 用supervisor守护</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开机启动脚本顺序" tabindex="-1"><a class="header-anchor" href="#开机启动脚本顺序" aria-hidden="true">#</a> 开机启动脚本顺序</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/etc/profile
/etc/profile.d/*.sh
~/bash_profile
~/.bashrc
/etc/bashrc

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="进程管理" tabindex="-1"><a class="header-anchor" href="#进程管理" aria-hidden="true">#</a> 进程管理</h3><h4 id="常用" tabindex="-1"><a class="header-anchor" href="#常用" aria-hidden="true">#</a> 常用</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-eaf</span>               <span class="token comment"># 查看所有进程</span>
<span class="token function">kill</span> <span class="token parameter variable">-9</span> PID           <span class="token comment"># 强制终止某个PID进程</span>
<span class="token function">kill</span> <span class="token parameter variable">-15</span> PID          <span class="token comment"># 安全退出 需程序内部处理信号</span>
cmd <span class="token operator">&amp;</span>                 <span class="token comment"># 命令后台运行</span>
<span class="token function">nohup</span> cmd <span class="token operator">&amp;</span>           <span class="token comment"># 后台运行不受shell退出影响</span>
ctrl+z                <span class="token comment"># 将前台放入后台(暂停)</span>
<span class="token function">jobs</span>                  <span class="token comment"># 查看后台运行程序</span>
<span class="token function">bg</span> <span class="token number">2</span>                  <span class="token comment"># 启动后台暂停进程</span>
<span class="token function">fg</span> <span class="token number">2</span>                  <span class="token comment"># 调回后台进程</span>
pstree                <span class="token comment"># 进程树</span>
<span class="token function">vmstat</span> <span class="token number">1</span> <span class="token number">9</span>            <span class="token comment"># 每隔一秒报告系统性能信息9次</span>
sar                   <span class="token comment"># 查看cpu等状态</span>
<span class="token function">lsof</span> <span class="token function">file</span>             <span class="token comment"># 显示打开指定文件的所有进程</span>
<span class="token function">lsof</span> <span class="token parameter variable">-i:32768</span>         <span class="token comment"># 查看端口的进程</span>
<span class="token function">renice</span> +1 <span class="token number">180</span>         <span class="token comment"># 把180号进程的优先级加1</span>
<span class="token builtin class-name">exec</span> <span class="token function">sh</span> a.sh          <span class="token comment"># 子进程替换原来程序的pid， 避免supervisor无法强制杀死进程</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="top" tabindex="-1"><a class="header-anchor" href="#top" aria-hidden="true">#</a> top</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>前五行是系统整体的统计信息。
第一行: 任务队列信息，同 <span class="token function">uptime</span> 命令的执行结果。内容如下：
    01:06:48 当前时间
    up <span class="token number">1</span>:22 系统运行时间，格式为时:分
    <span class="token number">1</span> user 当前登录用户数
    load average: <span class="token number">0.06</span>, <span class="token number">0.60</span>, <span class="token number">0.48</span> 系统负载，即任务队列的平均长度。
    三个数值分别为 <span class="token number">1</span>分钟、5分钟、15分钟前到现在的平均值。

第二、三行:为进程和CPU的信息。当有多个CPU时，这些内容可能会超过两行。内容如下：
    Tasks: <span class="token number">29</span> total 进程总数
    <span class="token number">1</span> running 正在运行的进程数
    <span class="token number">28</span> sleeping 睡眠的进程数
    <span class="token number">0</span> stopped 停止的进程数
    <span class="token number">0</span> zombie 僵尸进程数
    Cpu<span class="token punctuation">(</span>s<span class="token punctuation">)</span>: <span class="token number">0.3</span>% us 用户空间占用CPU百分比
    <span class="token number">1.0</span>% sy 内核空间占用CPU百分比
    <span class="token number">0.0</span>% ni 用户进程空间内改变过优先级的进程占用CPU百分比
    <span class="token number">98.7</span>% <span class="token function">id</span> 空闲CPU百分比
    <span class="token number">0.0</span>% wa 等待输入输出的CPU时间百分比
    <span class="token number">0.0</span>% hi
    <span class="token number">0.0</span>% si

第四、五行:为内存信息。内容如下：
    Mem: 191272k total 物理内存总量
    173656k used 使用的物理内存总量
    17616k <span class="token function">free</span> 空闲内存总量
    22052k buffers 用作内核缓存的内存量
    Swap: 192772k total 交换区总量
    0k used 使用的交换区总量
    192772k <span class="token function">free</span> 空闲交换区总量
    123988k cached 缓冲的交换区总量。
    内存中的内容被换出到交换区，而后又被换入到内存，但使用过的交换区尚未被覆盖，
    该数值即为这些内容已存在于内存中的交换区的大小。
    相应的内存再次被换出时可不必再对交换区写入。

进程信息区,各列的含义如下:  <span class="token comment"># 显示各个进程的详细信息</span>

序号 列名    含义
a   PID      进程id
b   <span class="token environment constant">PPID</span>     父进程id
c   RUSER    Real user name
d   <span class="token environment constant">UID</span>      进程所有者的用户id
e   <span class="token environment constant">USER</span>     进程所有者的用户名
f   GROUP    进程所有者的组名
g   TTY      启动进程的终端名。不是从终端启动的进程则显示为 ?
h   PR       优先级
i   NI       nice值。负值表示高优先级，正值表示低优先级
j   P        最后使用的CPU，仅在多CPU环境下有意义
k   %CPU     上次更新到现在的CPU时间占用百分比
l   TIME     进程使用的CPU时间总计，单位秒
m   TIME+    进程使用的CPU时间总计，单位1/100秒
n   %MEM     进程使用的物理内存百分比
o   VIRT     进程使用的虚拟内存总量，单位kb。VIRT<span class="token operator">=</span>SWAP+RES
p   SWAP     进程使用的虚拟内存中，被换出的大小，单位kb。
q   RES      进程使用的、未被换出的物理内存大小，单位kb。RES<span class="token operator">=</span>CODE+DATA
r   CODE     可执行代码占用的物理内存大小，单位kb
s   DATA     可执行代码以外的部分<span class="token punctuation">(</span>数据段+栈<span class="token punctuation">)</span>占用的物理内存大小，单位kb
t   SHR      共享内存大小，单位kb
u   nFLT     页面错误次数
<span class="token function">v</span>   nDRT     最后一次写入到现在，被修改过的页面数。
w   S        进程状态。
    <span class="token assign-left variable">D</span><span class="token operator">=</span>不可中断的睡眠状态
    <span class="token assign-left variable">R</span><span class="token operator">=</span>运行
    <span class="token assign-left variable">S</span><span class="token operator">=</span>睡眠
    <span class="token assign-left variable">T</span><span class="token operator">=</span>跟踪/停止
    <span class="token assign-left variable">Z</span><span class="token operator">=</span>僵尸进程 父进程在但并不等待子进程
x   COMMAND  命令名/命令行
y   WCHAN    若该进程在睡眠，则显示睡眠中的系统函数名
z   Flags    任务标志，参考 sched.h

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ps" tabindex="-1"><a class="header-anchor" href="#ps" aria-hidden="true">#</a> ps</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> aux <span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token environment constant">USER</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-nk</span> +4 <span class="token operator">|</span> <span class="token function">tail</span>       <span class="token comment"># 显示消耗内存最多的10个运行中的进程，以内存使用量排序.cpu +3</span>
<span class="token comment"># USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND</span>
%CPU     <span class="token comment"># 进程的cpu占用率</span>
%MEM     <span class="token comment"># 进程的内存占用率</span>
VSZ      <span class="token comment"># 进程虚拟大小,单位K(即总占用内存大小,包括真实内存和虚拟内存)</span>
RSS      <span class="token comment"># 进程使用的驻留集大小即实际物理内存大小</span>
START    <span class="token comment"># 进程启动时间和日期</span>
占用的虚拟内存大小 <span class="token operator">=</span> VSZ - RSS

<span class="token function">ps</span> <span class="token parameter variable">-eo</span> pid,lstart,etime,args         <span class="token comment"># 查看进程启动时间</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="列出占用sawp的进程" tabindex="-1"><a class="header-anchor" href="#列出占用sawp的进程" aria-hidden="true">#</a> 列出占用sawp的进程</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;PID<span class="token entity" title="\\t">\\t</span><span class="token entity" title="\\t">\\t</span>Swap<span class="token entity" title="\\t">\\t</span><span class="token entity" title="\\t">\\t</span>Proc_Name&quot;</span>
<span class="token comment"># 拿出/proc目录下所有以数字为名的目录（进程名是数字才是进程，其他如sys,net等存放的是其他信息）</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">pid</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span> <span class="token parameter variable">-l</span> /proc <span class="token operator">|</span> <span class="token function">grep</span> ^d <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ print $9 }&#39;</span><span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token punctuation">[</span>^0-9<span class="token punctuation">]</span><span class="token variable">\`</span></span>
<span class="token keyword">do</span>
    <span class="token comment"># 让进程释放swap的方法只有一个：就是重启该进程。或者等其自动释放。放</span>
    <span class="token comment"># 如果进程会自动释放，那么我们就不会写脚本来找他了，找他都是因为他没有自动释放。</span>
    <span class="token comment"># 所以我们要列出占用swap并需要重启的进程，但是init这个进程是系统里所有进程的祖先进程</span>
    <span class="token comment"># 重启init进程意味着重启系统，这是万万不可以的，所以就不必检测他了，以免对系统造成影响。</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$pid</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span> <span class="token builtin class-name">continue</span><span class="token punctuation">;</span><span class="token keyword">fi</span>
    <span class="token function">grep</span> <span class="token parameter variable">-q</span> <span class="token string">&quot;Swap&quot;</span> /proc/<span class="token variable">$pid</span>/smaps <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token assign-left variable">swap</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">grep</span> Swap /proc/$pid/smaps <span class="token punctuation">\\</span>
            <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;{ sum+=$2;} END{ print sum }&#39;</span><span class="token variable">)</span></span>
        <span class="token assign-left variable">proc_name</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-w</span> <span class="token string">&quot;<span class="token variable">$pid</span>&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token punctuation">\\</span>
            <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ for(i=11;i&lt;=NF;i++){ printf(&quot;%s &quot;,$i); }}&#39;</span><span class="token variable">)</span></span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$swap</span> <span class="token parameter variable">-gt</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token variable">\${pid}</span><span class="token entity" title="\\t">\\t</span><span class="token variable">\${swap}</span><span class="token entity" title="\\t">\\t</span><span class="token variable">\${proc_name}</span>&quot;</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">fi</span>
<span class="token keyword">done</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-k2</span> <span class="token parameter variable">-n</span> <span class="token operator">|</span> <span class="token function">awk</span> -F<span class="token string">&#39;\\t&#39;</span> <span class="token string">&#39;{
    pid[NR]=$1;
    size[NR]=$2;
    name[NR]=$3;
}
END{
    for(id=1;id&lt;=length(pid);id++)
    {
        if(size[id]&lt;1024)
            printf(&quot;%-10s\\t%15sKB\\t%s\\n&quot;,pid[id],size[id],name[id]);
        else if(size[id]&lt;1048576)
            printf(&quot;%-10s\\t%15.2fMB\\t%s\\n&quot;,pid[id],size[id]/1024,name[id]);
        else
            printf(&quot;%-10s\\t%15.2fGB\\t%s\\n&quot;,pid[id],size[id]/1048576,name[id]);
    }
}&#39;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="系统信号" tabindex="-1"><a class="header-anchor" href="#系统信号" aria-hidden="true">#</a> 系统信号</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">kill</span> <span class="token parameter variable">-l</span>                    <span class="token comment"># 查看linux提供的信号</span>
<span class="token builtin class-name">trap</span> <span class="token string">&quot;echo aaa&quot;</span>  <span class="token number">2</span> <span class="token number">3</span> <span class="token number">15</span>    <span class="token comment"># shell使用 trap 捕捉退出信号</span>

<span class="token comment"># 发送信号一般有两种原因:</span>
<span class="token comment">#   1(被动式)  内核检测到一个系统事件.例如子进程退出会像父进程发送SIGCHLD信号.键盘按下control+c会发送SIGINT信号</span>
<span class="token comment">#   2(主动式)  通过系统调用kill来向指定进程发送信号</span>
<span class="token comment"># 进程结束信号 SIGTERM 和 SIGKILL 的区别:  SIGTERM 比较友好，进程能捕捉这个信号，根据您的需要来关闭程序。在关闭程序之前，您可以结束打开的记录文件和完成正在做的任务。在某些情况下，假如进程正在进行作业而且不能中断，那么进程可以忽略这个SIGTERM信号。</span>
<span class="token comment"># 如果一个进程收到一个SIGUSR1信号，然后执行信号绑定函数，第二个SIGUSR2信号又来了，第一个信号没有被处理完毕的话，第二个信号就会丢弃。</span>

SIGHUP  <span class="token number">1</span>          A     <span class="token comment"># 终端挂起或者控制进程终止</span>
SIGINT  <span class="token number">2</span>          A     <span class="token comment"># 键盘终端进程(如control+c)</span>
SIGQUIT <span class="token number">3</span>          C     <span class="token comment"># 键盘的退出键被按下</span>
SIGILL  <span class="token number">4</span>          C     <span class="token comment"># 非法指令</span>
SIGABRT <span class="token number">6</span>          C     <span class="token comment"># 由abort(3)发出的退出指令</span>
SIGFPE  <span class="token number">8</span>          C     <span class="token comment"># 浮点异常</span>
SIGKILL <span class="token number">9</span>          AEF   <span class="token comment"># Kill信号  立刻停止</span>
SIGSEGV <span class="token number">11</span>         C     <span class="token comment"># 无效的内存引用</span>
SIGPIPE <span class="token number">13</span>         A     <span class="token comment"># 管道破裂: 写一个没有读端口的管道</span>
SIGALRM <span class="token number">14</span>         A     <span class="token comment"># 闹钟信号 由alarm(2)发出的信号</span>
SIGTERM <span class="token number">15</span>         A     <span class="token comment"># 终止信号,可让程序安全退出 kill -15</span>
SIGUSR1 <span class="token number">30,10</span>,16   A     <span class="token comment"># 用户自定义信号1</span>
SIGUSR2 <span class="token number">31,12</span>,17   A     <span class="token comment"># 用户自定义信号2</span>
SIGCHLD <span class="token number">20,17</span>,18   B     <span class="token comment"># 子进程结束自动向父进程发送SIGCHLD信号</span>
SIGCONT <span class="token number">19,18</span>,25         <span class="token comment"># 进程继续（曾被停止的进程）</span>
SIGSTOP <span class="token number">17,19</span>,23   DEF   <span class="token comment"># 终止进程</span>
SIGTSTP <span class="token number">18,20</span>,24   D     <span class="token comment"># 控制终端（tty）上按下停止键</span>
SIGTTIN <span class="token number">21,21</span>,26   D     <span class="token comment"># 后台进程企图从控制终端读</span>
SIGTTOU <span class="token number">22,22</span>,27   D     <span class="token comment"># 后台进程企图从控制终端写</span>

缺省处理动作一项中的字母含义如下:
    A  缺省的动作是终止进程
    B  缺省的动作是忽略此信号，将该信号丢弃，不做处理
    C  缺省的动作是终止进程并进行内核映像转储<span class="token punctuation">(</span>dump core<span class="token punctuation">)</span>,内核映像转储是指将进程数据在内存的映像和进程在内核结构中的部分内容以一定格式转储到文件系统，并且进程退出执行，这样做的好处是为程序员提供了方便，使得他们可以得到进程当时执行时的数据值，允许他们确定转储的原因，并且可以调试他们的程序。
    D  缺省的动作是停止进程，进入停止状况以后还能重新进行下去，一般是在调试的过程中（例如ptrace系统调用）
    E  信号不能被捕获
    F  信号不能被忽略
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="系统性能状态" tabindex="-1"><a class="header-anchor" href="#系统性能状态" aria-hidden="true">#</a> 系统性能状态</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vmstat</span> <span class="token number">1</span> <span class="token number">9</span>

r      <span class="token comment"># 等待执行的任务数。当这个值超过了cpu线程数，就会出现cpu瓶颈。</span>
b      <span class="token comment"># 等待IO的进程数量,表示阻塞的进程。</span>
swpd   <span class="token comment"># 虚拟内存已使用的大小，如大于0，表示机器物理内存不足，如不是程序内存泄露，那么该升级内存。</span>
<span class="token function">free</span>   <span class="token comment"># 空闲的物理内存的大小</span>
buff   <span class="token comment"># 已用的buff大小，对块设备的读写进行缓冲</span>
cache  <span class="token comment"># cache直接用来记忆我们打开的文件,给文件做缓冲，(把空闲的物理内存的一部分拿来做文件和目录的缓存，是为了提高 程序执行的性能，当程序使用内存时，buffer/cached会很快地被使用。)</span>
inact  <span class="token comment"># 非活跃内存大小，即被标明可回收的内存，区别于free和active -a选项时显示</span>
active <span class="token comment"># 活跃的内存大小 -a选项时显示</span>
si   <span class="token comment"># 每秒从磁盘读入虚拟内存的大小，如果这个值大于0，表示物理内存不够用或者内存泄露，要查找耗内存进程解决掉。</span>
so   <span class="token comment"># 每秒虚拟内存写入磁盘的大小，如果这个值大于0，同上。</span>
bi   <span class="token comment"># 块设备每秒接收的块数量，这里的块设备是指系统上所有的磁盘和其他块设备，默认块大小是1024byte</span>
bo   <span class="token comment"># 块设备每秒发送的块数量，例如读取文件，bo就要大于0。bi和bo一般都要接近0，不然就是IO过于频繁，需要调整。</span>
<span class="token keyword">in</span>   <span class="token comment"># 每秒CPU的中断次数，包括时间中断。in和cs这两个值越大，会看到由内核消耗的cpu时间会越多</span>
cs   <span class="token comment"># 每秒上下文切换次数，例如我们调用系统函数，就要进行上下文切换，线程的切换，也要进程上下文切换，这个值要越小越好，太大了，要考虑调低线程或者进程的数目,例如在apache和nginx这种web服务器中，我们一般做性能测试时会进行几千并发甚至几万并发的测试，选择web服务器的进程可以由进程或者线程的峰值一直下调，压测，直到cs到一个比较小的值，这个进程和线程数就是比较合适的值了。系统调用也是，每次调用系统函数，我们的代码就会进入内核空间，导致上下文切换，这个是很耗资源，也要尽量避免频繁调用系统函数。上下文切换次数过多表示你的CPU大部分浪费在上下文切换，导致CPU干正经事的时间少了，CPU没有充分利用。</span>
us   <span class="token comment"># 用户进程执行消耗cpu时间(user time)  us的值比较高时，说明用户进程消耗的cpu时间多，但是如果长期超过50%的使用，那么我们就该考虑优化程序算法或其他措施</span>
sy   <span class="token comment"># 系统CPU时间，如果太高，表示系统调用时间长，例如是IO操作频繁。</span>
<span class="token function">id</span>   <span class="token comment"># 空闲 CPU时间，一般来说，id + us + sy = 100,一般认为id是空闲CPU使用率，us是用户CPU使用率，sy是系统CPU使用率。</span>
wt   <span class="token comment"># 等待IOCPU时间。Wa过高时，说明io等待比较严重，这可能是由于磁盘大量随机访问造成的，也有可能是磁盘的带宽出现瓶颈。</span>

如果 r 经常大于4，且id经常少于40，表示cpu的负荷很重。
如果 pi po 长期不等于0，表示内存不足。
如果 b 队列经常大于3，表示io性能不好。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日志管理" tabindex="-1"><a class="header-anchor" href="#日志管理" aria-hidden="true">#</a> 日志管理</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">history</span>                      <span class="token comment"># 历时命令默认1000条</span>
<span class="token assign-left variable">HISTTIMEFORMAT</span><span class="token operator">=</span><span class="token string">&quot;%Y-%m-%d %H:%M:%S &quot;</span>   <span class="token comment"># 让history命令显示具体时间</span>
<span class="token function">history</span>  <span class="token parameter variable">-c</span>                  <span class="token comment"># 清除记录命令</span>
<span class="token function">cat</span> <span class="token environment constant">$HOME</span>/.bash_history      <span class="token comment"># 历史命令记录文件</span>
lastb <span class="token parameter variable">-a</span>                     <span class="token comment"># 列出登录系统失败的用户相关信息  清空二进制日志记录文件 echo &gt; /var/log/btmp</span>
last                         <span class="token comment"># 查看登陆过的用户信息  清空二进制日志记录文件 echo &gt; /var/log/wtmp   默认打开乱码</span>
<span class="token function">who</span> /var/log/wtmp            <span class="token comment"># 查看登陆过的用户信息</span>
lastlog                      <span class="token comment"># 用户最后登录的时间</span>
<span class="token function">tail</span> <span class="token parameter variable">-f</span> /var/log/messages    <span class="token comment"># 系统日志</span>
<span class="token function">tail</span> <span class="token parameter variable">-f</span> /var/log/secure      <span class="token comment"># ssh日志</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="selinux" tabindex="-1"><a class="header-anchor" href="#selinux" aria-hidden="true">#</a> selinux</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sestatus <span class="token parameter variable">-v</span>                    <span class="token comment"># 查看selinux状态</span>
getenforce                     <span class="token comment"># 查看selinux模式</span>
setenforce <span class="token number">0</span>                   <span class="token comment"># 设置selinux为宽容模式(可避免阻止一些操作)</span>
semanage port <span class="token parameter variable">-l</span>               <span class="token comment"># 查看selinux端口限制规则</span>
semanage port <span class="token parameter variable">-a</span> <span class="token parameter variable">-t</span> http_port_t <span class="token parameter variable">-p</span> tcp <span class="token number">8000</span>  <span class="token comment"># 在selinux中注册端口类型</span>
<span class="token function">vi</span> /etc/selinux/config         <span class="token comment"># selinux配置文件</span>
<span class="token assign-left variable">SELINUX</span><span class="token operator">=</span>enfoceing              <span class="token comment"># 关闭selinux 把其修改为  SELINUX=disabled</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="系统信息" tabindex="-1"><a class="header-anchor" href="#系统信息" aria-hidden="true">#</a> 系统信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">uname</span> <span class="token parameter variable">-a</span>              <span class="token comment"># 查看Linux内核版本信息</span>
<span class="token function">cat</span> /proc/version     <span class="token comment"># 查看内核版本</span>
<span class="token function">cat</span> /etc/issue        <span class="token comment"># 查看系统版本</span>
lsb_release <span class="token parameter variable">-a</span>        <span class="token comment"># 查看系统版本  需安装 centos-release</span>
locale <span class="token parameter variable">-a</span>             <span class="token comment"># 列出所有语系</span>
locale                <span class="token comment"># 当前环境变量中所有编码</span>
hwclock               <span class="token comment"># 查看时间</span>
<span class="token function">who</span>                   <span class="token comment"># 当前在线用户</span>
w                     <span class="token comment"># 当前在线用户</span>
<span class="token function">whoami</span>                <span class="token comment"># 查看当前用户名</span>
<span class="token function">logname</span>               <span class="token comment"># 查看初始登陆用户名</span>
<span class="token function">uptime</span>                <span class="token comment"># 查看服务器启动时间</span>
sar <span class="token parameter variable">-n</span> DEV <span class="token number">1</span> <span class="token number">10</span>       <span class="token comment"># 查看网卡网速流量</span>
<span class="token function">dmesg</span>                 <span class="token comment"># 显示开机信息</span>
lsmod                 <span class="token comment"># 查看内核模块</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="硬件信息" tabindex="-1"><a class="header-anchor" href="#硬件信息" aria-hidden="true">#</a> 硬件信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">more</span> /proc/cpuinfo                                       <span class="token comment"># 查看cpu信息</span>
lscpu                                                    <span class="token comment"># 查看cpu信息</span>
<span class="token function">cat</span> /proc/cpuinfo <span class="token operator">|</span> <span class="token function">grep</span> name <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-f2</span> -d: <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span>    <span class="token comment"># 查看cpu型号和逻辑核心数</span>
getconf LONG_BIT                                         <span class="token comment"># cpu运行的位数</span>
<span class="token function">cat</span> /proc/cpuinfo <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;physical id&#39;</span> <span class="token operator">|</span><span class="token function">sort</span><span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span>    <span class="token comment"># 物理cpu个数</span>
<span class="token function">cat</span> /proc/cpuinfo <span class="token operator">|</span> <span class="token function">grep</span> flags <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39; lm &#39;</span> <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>     <span class="token comment"># 结果大于0支持64位</span>
<span class="token function">cat</span> /proc/cpuinfo<span class="token operator">|</span><span class="token function">grep</span> flags                             <span class="token comment"># 查看cpu是否支持虚拟化   pae支持半虚拟化  IntelVT 支持全虚拟化</span>
<span class="token function">more</span> /proc/meminfo                                       <span class="token comment"># 查看内存信息</span>
dmidecode                                                <span class="token comment"># 查看全面硬件信息</span>
dmidecode <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;Product Name&quot;</span>                          <span class="token comment"># 查看服务器型号</span>
dmidecode <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-P</span> <span class="token parameter variable">-A5</span> <span class="token string">&quot;Memory\\s+Device&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> Size <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> Range       <span class="token comment"># 查看内存插槽</span>
<span class="token function">cat</span> /proc/mdstat                                         <span class="token comment"># 查看软raid信息</span>
<span class="token function">cat</span> /proc/scsi/scsi                                      <span class="token comment"># 查看Dell硬raid信息(IBM、HP需要官方检测工具)</span>
lspci                                                    <span class="token comment"># 查看硬件信息</span>
lspci<span class="token operator">|</span><span class="token function">grep</span> RAID                                          <span class="token comment"># 查看是否支持raid</span>
lspci <span class="token parameter variable">-vvv</span> <span class="token operator">|</span><span class="token function">grep</span> Ethernet                                <span class="token comment"># 查看网卡型号</span>
lspci <span class="token parameter variable">-vvv</span> <span class="token operator">|</span><span class="token function">grep</span> Kernel<span class="token operator">|</span><span class="token function">grep</span> driver                      <span class="token comment"># 查看驱动模块</span>
modinfo tg2                                              <span class="token comment"># 查看驱动版本(驱动模块)</span>
<span class="token function">ethtool</span> <span class="token parameter variable">-i</span> em1                                           <span class="token comment"># 查看网卡驱动版本</span>
<span class="token function">ethtool</span> em1                                              <span class="token comment"># 查看网卡带宽</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="limits-conf" tabindex="-1"><a class="header-anchor" href="#limits-conf" aria-hidden="true">#</a> limits.conf</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">ulimit</span> <span class="token parameter variable">-SHn</span> <span class="token number">65535</span>  <span class="token comment"># 临时设置文件描述符大小 进程最大打开文件柄数 还有socket最大连接数, 等同配置 nofile</span>
<span class="token builtin class-name">ulimit</span> <span class="token parameter variable">-SHu</span> <span class="token number">65535</span>  <span class="token comment"># 临时设置用户最大进程数</span>
<span class="token builtin class-name">ulimit</span> <span class="token parameter variable">-a</span>          <span class="token comment"># 查看</span>

/etc/security/limits.conf

<span class="token comment"># 文件描述符大小  open files</span>
<span class="token comment"># lsof |wc -l   查看当前文件句柄数使用数量</span>
* soft nofile <span class="token number">16384</span>         <span class="token comment"># 设置太大，进程使用过多会把机器拖死</span>
* hard nofile <span class="token number">32768</span>

<span class="token comment"># 用户最大进程数  max user processes</span>
<span class="token comment"># echo $((\`ps uxm |wc -l\`-\`ps ux |wc -l\`))  查看当前用户占用的进程数 [包括线程]</span>
user soft nproc <span class="token number">16384</span>
user hard nproc <span class="token number">32768</span>

<span class="token comment"># 如果/etc/security/limits.d/有配置文件，将会覆盖/etc/security/limits.conf里的配置</span>
<span class="token comment"># 即/etc/security/limits.d/的配置文件里就不要有同样的参量设置</span>
/etc/security/limits.d/90-nproc.conf    <span class="token comment"># centos6.3的默认这个文件会覆盖 limits.conf</span>
user soft nproc <span class="token number">16384</span>
user hard nproc <span class="token number">32768</span>

<span class="token function">sysctl</span> <span class="token parameter variable">-p</span>    <span class="token comment"># 修改配置文件后让系统生效</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="libc-so故障修复" tabindex="-1"><a class="header-anchor" href="#libc-so故障修复" aria-hidden="true">#</a> libc.so故障修复</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 由于升级glibc导致libc.so不稳定,突然报错,幸好还有未退出的终端</span>
grep: error <span class="token keyword">while</span> loading shared libraries: /lib64/libc.so.6: ELF <span class="token function">file</span> OS ABI invalid

<span class="token comment"># 看看当前系统有多少版本 libc.so</span>
<span class="token function">ls</span> /lib64/libc-<span class="token punctuation">[</span>tab<span class="token punctuation">]</span>

<span class="token comment"># 更改环境变量指向其他 libc.so 文件测试</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">LD_PRELOAD</span><span class="token operator">=</span>/lib64/libc-2.7.so    <span class="token comment"># 如果不改变LD_PRELOAD变量,ln不能用,需要使用 /sbin/sln 命令做链接</span>

<span class="token comment"># 当前如果好使了，在执行下面强制替换软链接。如不好使，测试其他版本的libc.so文件</span>
<span class="token function">ln</span> <span class="token parameter variable">-f</span> <span class="token parameter variable">-s</span> /lib64/libc-2.7.so /lib64/libc.so.6

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sudo" tabindex="-1"><a class="header-anchor" href="#sudo" aria-hidden="true">#</a> sudo</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> myPassword <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token parameter variable">-S</span> <span class="token function">ls</span> /tmp  <span class="token comment"># 直接输入sudo的密码非交互,从标准输入读取密码而不是终端设备</span>
visudo                             <span class="token comment"># sudo命令权限添加  /etc/sudoers</span>
用户  别名<span class="token punctuation">(</span>可用all<span class="token punctuation">)</span><span class="token operator">=</span>NOPASSWD:命令1,命令2
user  <span class="token assign-left variable">ALL</span><span class="token operator">=</span>NOPASSWD:/bin/su         <span class="token comment"># 免root密码切换root身份</span>
wangming <span class="token assign-left variable">linuxfan</span><span class="token operator">=</span>NOPASSWD:/sbin/apache start,/sbin/apache restart
UserName <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span> ALL
UserName <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span> NOPASSWD: ALL
peterli        <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span>       NOPASSWD:/sbin/service
Defaults requiretty                <span class="token comment"># sudo不允许后台运行,注释此行既允许</span>
Defaults <span class="token operator">!</span>visiblepw                
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="iptables" tabindex="-1"><a class="header-anchor" href="#iptables" aria-hidden="true">#</a> iptables</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>内建三个表：nat mangle 和 filter
filter预设规则表，有INPUT、FORWARD 和 OUTPUT 三个规则链
vi /etc/sysconfig/iptables    # 配置文件
INPUT    # 进入
FORWARD  # 转发
OUTPUT   # 出去
ACCEPT   # 将封包放行
REJECT   # 拦阻该封包
DROP     # 丢弃封包不予处理
-A       # 在所选择的链(INPUT等)末添加一条或更多规则
-D       # 删除一条
-E       # 修改
-p       # tcp、udp、icmp    0相当于所有all    !取反
-P       # 设置缺省策略(与所有链都不匹配强制使用此策略)
-s       # IP/掩码    (IP/24)    主机名、网络名和清楚的IP地址 !取反
-j       # 目标跳转，立即决定包的命运的专用内建目标
-i       # 进入的（网络）接口 [名称] eth0
-o       # 输出接口[名称]
-m       # 模块
--sport  # 源端口
--dport  # 目标端口

iptables -F                        # 将防火墙中的规则条目清除掉  # 注意: iptables -P INPUT ACCEPT
iptables-restore &lt; 规则文件        # 导入防火墙规则
/etc/init.d/iptables save          # 保存防火墙设置
/etc/init.d/iptables restart       # 重启防火墙服务
iptables -L -n                     # 查看规则
iptables -t nat -nL                # 查看转发

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="iptables实例" tabindex="-1"><a class="header-anchor" href="#iptables实例" aria-hidden="true">#</a> iptables实例</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>iptables <span class="token parameter variable">-L</span> INPUT                   <span class="token comment"># 列出某规则链中的所有规则</span>
iptables <span class="token parameter variable">-X</span> allowed                 <span class="token comment"># 删除某个规则链 ,不加规则链，清除所有非内建的</span>
iptables <span class="token parameter variable">-Z</span> INPUT                   <span class="token comment"># 将封包计数器归零</span>
iptables <span class="token parameter variable">-N</span> allowed                 <span class="token comment"># 定义新的规则链</span>
iptables <span class="token parameter variable">-P</span> INPUT DROP              <span class="token comment"># 定义过滤政策</span>
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-s</span> <span class="token number">192.168</span>.1.1    <span class="token comment"># 比对封包的来源IP   # ! 192.168.0.0/24  ! 反向对比</span>
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-d</span> <span class="token number">192.168</span>.1.1    <span class="token comment"># 比对封包的目的地IP</span>
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-i</span> eth0           <span class="token comment"># 比对封包是从哪片网卡进入</span>
iptables <span class="token parameter variable">-A</span> FORWARD <span class="token parameter variable">-o</span> eth0         <span class="token comment"># 比对封包要从哪片网卡送出 eth+表示所有的网卡</span>
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-p</span> tcp            <span class="token comment"># -p ! tcp 排除tcp以外的udp、icmp。-p all所有类型</span>
iptables <span class="token parameter variable">-D</span> INPUT <span class="token number">8</span>                 <span class="token comment"># 从某个规则链中删除一条规则</span>
iptables <span class="token parameter variable">-D</span> INPUT <span class="token parameter variable">--dport</span> <span class="token number">80</span> <span class="token parameter variable">-j</span> DROP         <span class="token comment"># 从某个规则链中删除一条规则</span>
iptables <span class="token parameter variable">-R</span> INPUT <span class="token number">8</span> <span class="token parameter variable">-s</span> <span class="token number">192.168</span>.0.1 <span class="token parameter variable">-j</span> DROP   <span class="token comment"># 取代现行规则</span>
iptables <span class="token parameter variable">-I</span> INPUT <span class="token number">8</span> <span class="token parameter variable">--dport</span> <span class="token number">80</span> <span class="token parameter variable">-j</span> ACCEPT     <span class="token comment"># 插入一条规则</span>
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-i</span> eth0 <span class="token parameter variable">-j</span> DROP            <span class="token comment"># 其它情况不允许</span>
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-s</span> IP <span class="token parameter variable">-j</span> DROP       <span class="token comment"># 禁止指定IP访问</span>
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-s</span> IP <span class="token parameter variable">--dport</span> port <span class="token parameter variable">-j</span> DROP               <span class="token comment"># 禁止指定IP访问端口</span>
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-s</span> IP <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> port <span class="token parameter variable">-j</span> ACCEPT             <span class="token comment"># 允许在IP访问指定端口</span>
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">22</span> <span class="token parameter variable">-j</span> DROP                       <span class="token comment"># 禁止使用某端口</span>
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-i</span> eth0 <span class="token parameter variable">-p</span> icmp <span class="token parameter variable">-m</span> icmp --icmp-type <span class="token number">8</span> <span class="token parameter variable">-j</span> DROP   <span class="token comment"># 禁止icmp端口</span>
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-i</span> eth0 <span class="token parameter variable">-p</span> icmp <span class="token parameter variable">-j</span> DROP                         <span class="token comment"># 禁止icmp端口</span>
iptables <span class="token parameter variable">-t</span> filter <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-i</span> eth0 <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--syn</span> <span class="token parameter variable">-j</span> DROP                  <span class="token comment"># 阻止所有没有经过你系统授权的TCP连接</span>
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-f</span> <span class="token parameter variable">-m</span> limit <span class="token parameter variable">--limit</span> <span class="token number">100</span>/s --limit-burst <span class="token number">100</span> <span class="token parameter variable">-j</span> ACCEPT   <span class="token comment"># IP包流量限制</span>
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-i</span> eth0 <span class="token parameter variable">-s</span> <span class="token number">192.168</span>.62.1/32 <span class="token parameter variable">-p</span> icmp <span class="token parameter variable">-m</span> icmp --icmp-type <span class="token number">8</span> <span class="token parameter variable">-j</span> ACCEPT  <span class="token comment"># 除192.168.62.1外，禁止其它人ping我的主机</span>
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">80</span> <span class="token parameter variable">-m</span> state <span class="token parameter variable">--state</span> NEW <span class="token parameter variable">-m</span> recent <span class="token parameter variable">--update</span> <span class="token parameter variable">--seconds</span> <span class="token number">5</span> <span class="token parameter variable">--hitcount</span> <span class="token number">20</span> <span class="token parameter variable">--rttl</span> <span class="token parameter variable">--name</span> WEB <span class="token parameter variable">--rsource</span> <span class="token parameter variable">-j</span> DROP  <span class="token comment"># 可防御cc攻击(未测试)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常用配置实例" tabindex="-1"><a class="header-anchor" href="#常用配置实例" aria-hidden="true">#</a> 常用配置实例</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 允许某段IP访问任何端口</span>
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-s</span> <span class="token number">192.168</span>.0.3/24 <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-j</span> ACCEPT
<span class="token comment"># 设定预设规则 (拒绝所有的数据包，再允许需要的,如只做WEB服务器.还是推荐三个链都是DROP)</span>
iptables <span class="token parameter variable">-P</span> INPUT DROP
iptables <span class="token parameter variable">-P</span> FORWARD DROP
iptables <span class="token parameter variable">-P</span> OUTPUT ACCEPT
<span class="token comment"># 注意: 直接设置这三条会掉线</span>
<span class="token comment"># 开启22端口</span>
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">22</span> <span class="token parameter variable">-j</span> ACCEPT
<span class="token comment"># 如果OUTPUT 设置成DROP的，要写上下面一条</span>
iptables <span class="token parameter variable">-A</span> OUTPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--sport</span> <span class="token number">22</span> <span class="token parameter variable">-j</span> ACCEPT
<span class="token comment"># 注:不写导致无法SSH.其他的端口一样,OUTPUT设置成DROP的话,也要添加一条链</span>
<span class="token comment"># 如果开启了web服务器,OUTPUT设置成DROP的话,同样也要添加一条链</span>
iptables <span class="token parameter variable">-A</span> OUTPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--sport</span> <span class="token number">80</span> <span class="token parameter variable">-j</span> ACCEPT
<span class="token comment"># 做WEB服务器,开启80端口 ,其他同理</span>
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">80</span> <span class="token parameter variable">-j</span> ACCEPT
<span class="token comment"># 做邮件服务器,开启25,110端口</span>
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">110</span> <span class="token parameter variable">-j</span> ACCEPT
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">25</span> <span class="token parameter variable">-j</span> ACCEPT
<span class="token comment"># 允许icmp包通过,允许ping</span>
iptables <span class="token parameter variable">-A</span> OUTPUT <span class="token parameter variable">-p</span> icmp <span class="token parameter variable">-j</span> ACCEPT <span class="token punctuation">(</span>OUTPUT设置成DROP的话<span class="token punctuation">)</span>
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-p</span> icmp <span class="token parameter variable">-j</span> ACCEPT  <span class="token punctuation">(</span>INPUT设置成DROP的话<span class="token punctuation">)</span>
<span class="token comment"># 允许loopback!(不然会导致DNS无法正常关闭等问题)</span>
IPTABLES <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-i</span> lo <span class="token parameter variable">-p</span> all <span class="token parameter variable">-j</span> ACCEPT <span class="token punctuation">(</span>如果是INPUT DROP<span class="token punctuation">)</span>
IPTABLES <span class="token parameter variable">-A</span> OUTPUT <span class="token parameter variable">-o</span> lo <span class="token parameter variable">-p</span> all <span class="token parameter variable">-j</span> ACCEPT<span class="token punctuation">(</span>如果是OUTPUT DROP<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="网段转发" tabindex="-1"><a class="header-anchor" href="#网段转发" aria-hidden="true">#</a> 网段转发</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 例如通过vpn上网
echo 1 &gt; /proc/sys/net/ipv4/ip_forward       # 在内核里打开ip转发功能
iptables -t nat -A POSTROUTING -s 10.8.0.0/24 -j MASQUERADE  # 添加网段转发
iptables -t nat -A POSTROUTING -s 10.0.0.0/255.0.0.0 -o eth0 -j SNAT --to 192.168.10.158  # 原IP网段经过哪个网卡IP出去
iptables -t nat -nL                # 查看转发

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="端口映射" tabindex="-1"><a class="header-anchor" href="#端口映射" aria-hidden="true">#</a> 端口映射</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 内网通过有外网IP的机器映射端口</span>
<span class="token comment"># 内网主机添加路由</span>
route <span class="token function">add</span> <span class="token parameter variable">-net</span> <span class="token number">10.10</span>.20.0 netmask <span class="token number">255.255</span>.255.0 gw <span class="token number">10.10</span>.20.111     <span class="token comment"># 内网需要添加默认网关，并且网关开启转发</span>
<span class="token comment"># 网关主机</span>
<span class="token builtin class-name">echo</span> <span class="token number">1</span> <span class="token operator">&gt;</span> /proc/sys/net/ipv4/ip_forward       <span class="token comment"># 在内核里打开ip转发功能</span>
iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-A</span> PREROUTING <span class="token parameter variable">-d</span> 外网IP  <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">9999</span> <span class="token parameter variable">-j</span> DNAT <span class="token parameter variable">--to</span> <span class="token number">10.10</span>.20.55:22    <span class="token comment"># 进入</span>
iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-A</span> POSTROUTING <span class="token parameter variable">-s</span> <span class="token number">10.10</span>.20.0/24 <span class="token parameter variable">-j</span> SNAT <span class="token parameter variable">--to</span> 外网IP                         <span class="token comment"># 转发回去</span>
iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-nL</span>                <span class="token comment"># 查看转发</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="网络" tabindex="-1"><a class="header-anchor" href="#网络" aria-hidden="true">#</a> 网络</h2><h3 id="常用-1" tabindex="-1"><a class="header-anchor" href="#常用-1" aria-hidden="true">#</a> 常用</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rz                                                                    <span class="token comment"># 通过ssh上传小文件</span>
sz                                                                    <span class="token comment"># 通过ssh下载小文件</span>
<span class="token function">ifconfig</span> eth0 down                                                    <span class="token comment"># 禁用网卡</span>
<span class="token function">ifconfig</span> eth0 up                                                      <span class="token comment"># 启用网卡</span>
<span class="token function">ifup</span> eth0:0                                                           <span class="token comment"># 启用网卡</span>
mii-tool em1                                                          <span class="token comment"># 查看网线是否连接</span>
<span class="token function">traceroute</span> www.baidu.com                                              <span class="token comment"># 测试跳数</span>
<span class="token function">vi</span> /etc/resolv.conf                                                   <span class="token comment"># 设置DNS  nameserver IP 定义DNS服务器的IP地址</span>
<span class="token function">nslookup</span> www.moon.com                                                 <span class="token comment"># 解析域名IP</span>
<span class="token function">dig</span> <span class="token parameter variable">-x</span> www.baidu.com                                                  <span class="token comment"># 解析域名IP</span>
<span class="token function">dig</span> +trace <span class="token parameter variable">-t</span> A domainname                                            <span class="token comment"># 跟踪dns</span>
<span class="token function">dig</span> +short txt hacker.wp.dg.cx                                        <span class="token comment"># 通过 DNS 来读取 Wikipedia 的hacker词条</span>
<span class="token function">host</span> <span class="token parameter variable">-t</span> txt hacker.wp.dg.cx                                           <span class="token comment"># 通过 DNS 来读取 Wikipedia 的hacker词条</span>
<span class="token function">lynx</span>                                                                  <span class="token comment"># 文本上网</span>
<span class="token function">wget</span> <span class="token parameter variable">-P</span> path <span class="token parameter variable">-O</span> name url                                              <span class="token comment"># 下载  包名:wgetrc   -q 安静 -c 续传</span>
dhclient eth1                                                         <span class="token comment"># 自动获取IP</span>
<span class="token function">mtr</span> <span class="token parameter variable">-r</span> www.baidu.com                                                  <span class="token comment"># 测试网络链路节点响应时间 # trace ping 结合</span>
ipcalc <span class="token parameter variable">-m</span> <span class="token string">&quot;<span class="token variable">$ip</span>&quot;</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;<span class="token variable">$num</span>&quot;</span>                                             <span class="token comment"># 根据IP和主机最大数计算掩码</span>
<span class="token function">curl</span> <span class="token parameter variable">-I</span> www.baidu.com                                                 <span class="token comment"># 查看网页http头</span>
<span class="token function">curl</span> <span class="token parameter variable">-s</span> www.baidu.com                                                 <span class="token comment"># 不显示进度</span>
queryperf <span class="token parameter variable">-d</span> list <span class="token parameter variable">-s</span> DNS_IP <span class="token parameter variable">-l</span> <span class="token number">2</span>                                      <span class="token comment"># BIND自带DNS压力测试  [list 文件格式:www.turku.fi A]</span>
telnet <span class="token function">ip</span> port                                                        <span class="token comment"># 测试端口是否开放,有些服务可直接输入命令得到返回状态</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;show &quot;</span> <span class="token operator">|</span><span class="token function">nc</span> <span class="token variable">$ip</span> <span class="token variable">$port</span>                                            <span class="token comment"># 适用于telnet一类登录得到命令返回</span>
<span class="token function">nc</span> <span class="token parameter variable">-l</span> <span class="token parameter variable">-p</span> port                                                         <span class="token comment"># 监听指定端口</span>
<span class="token function">nc</span> <span class="token parameter variable">-nv</span> <span class="token parameter variable">-z</span> <span class="token number">10.10</span>.10.11 <span class="token number">1080</span> <span class="token operator">|</span><span class="token function">grep</span> succeeded                            <span class="token comment"># 检查主机端口是否开放</span>
<span class="token function">curl</span> <span class="token parameter variable">-o</span> /dev/null <span class="token parameter variable">-s</span> <span class="token parameter variable">-m</span> <span class="token number">10</span> --connect-timeout <span class="token number">10</span> <span class="token parameter variable">-w</span> %<span class="token punctuation">{</span>http_code<span class="token punctuation">}</span> <span class="token variable">$URL</span>  <span class="token comment"># 检查页面状态</span>
<span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">-d</span> <span class="token string">&quot;user=xuesong&amp;pwd=123&quot;</span> http://www.abc.cn/Result       <span class="token comment"># 提交POST请求</span>
<span class="token function">curl</span> <span class="token parameter variable">-s</span> http://20140507.ip138.com/ic.asp                              <span class="token comment"># 通过IP138取本机出口外网IP</span>
<span class="token function">curl</span> http://IP/ <span class="token parameter variable">-H</span> <span class="token string">&quot;X-Forwarded-For: ip&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Host: www.ttlsa.com&quot;</span>     <span class="token comment"># 连到指定IP的响应主机,HTTPserver只看 Host字段</span>
<span class="token function">ifconfig</span> eth0:0 <span class="token number">192.168</span>.1.221 netmask <span class="token number">255.255</span>.255.0                   <span class="token comment"># 增加逻辑IP地址</span>
<span class="token builtin class-name">echo</span> <span class="token number">1</span> <span class="token operator">&gt;</span> /proc/sys/net/ipv4/icmp_echo_ignore_all                      <span class="token comment"># 禁ping</span>
net rpc <span class="token function">shutdown</span> <span class="token parameter variable">-I</span> IP_ADDRESS <span class="token parameter variable">-U</span> username%password                   <span class="token comment"># 远程关掉一台WINDOWS机器</span>
<span class="token function">wget</span> --random-wait <span class="token parameter variable">-r</span> <span class="token parameter variable">-p</span> <span class="token parameter variable">-e</span> <span class="token assign-left variable">robots</span><span class="token operator">=</span>off <span class="token parameter variable">-U</span> Mozilla www.example.com     <span class="token comment"># 递归方式下载整个网站</span>
sshpass <span class="token parameter variable">-p</span> <span class="token string">&quot;<span class="token variable">$pwd</span>&quot;</span> <span class="token function">rsync</span> <span class="token parameter variable">-avzP</span> /dir  user@<span class="token variable">$IP</span>:/dir/                    <span class="token comment"># 指定密码避免交互同步目录</span>
<span class="token function">rsync</span> <span class="token parameter variable">-avzP</span> <span class="token parameter variable">--delete</span> /dir user@<span class="token variable">$IP</span>:/dir                               <span class="token comment"># 无差同步目录 可以快速清空大目录</span>
<span class="token function">rsync</span> <span class="token parameter variable">-avzP</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;ssh -p 22 -e -o StrictHostKeyChecking=no&quot;</span> /dir user@<span class="token variable">$IP</span>:/dir         <span class="token comment"># 指定ssh参数同步</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="网卡流量查看" tabindex="-1"><a class="header-anchor" href="#网卡流量查看" aria-hidden="true">#</a> 网卡流量查看</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">watch</span> <span class="token function">more</span> /proc/net/dev    <span class="token comment"># 实时监控流量文件系统 累计值</span>
iptraf                      <span class="token comment"># 网卡流量查看工具</span>
nethogs <span class="token parameter variable">-d</span> <span class="token number">5</span> eth0 eth1      <span class="token comment"># 按进程实时统计网络流量 epel源nethogs</span>
iftop <span class="token parameter variable">-i</span> eth0 <span class="token parameter variable">-n</span> <span class="token parameter variable">-P</span>         <span class="token comment"># 实时流量监控</span>

sar <span class="token punctuation">{</span>
-n参数有6个不同的开关: DEV <span class="token operator">|</span> EDEV <span class="token operator">|</span> NFS <span class="token operator">|</span> NFSD <span class="token operator">|</span> SOCK <span class="token operator">|</span> ALL
DEV显示网络接口信息
EDEV显示关于网络错误的统计数据
NFS统计活动的NFS客户端的信息
NFSD统计NFS服务器的信息
SOCK显示套 接字信息
ALL显示所有5个开关

sar <span class="token parameter variable">-n</span> DEV <span class="token number">1</span> <span class="token number">10</span>

rxpck/s   <span class="token comment"># 每秒钟接收的数据包</span>
txpck/s   <span class="token comment"># 每秒钟发送的数据包</span>
rxbyt/s   <span class="token comment"># 每秒钟接收的字节数</span>
txbyt/s   <span class="token comment"># 每秒钟发送的字节数</span>
rxcmp/s   <span class="token comment"># 每秒钟接收的压缩数据包</span>
txcmp/s   <span class="token comment"># 每秒钟发送的压缩数据包</span>
rxmcst/s  <span class="token comment"># 每秒钟接收的多播数据包</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ss" tabindex="-1"><a class="header-anchor" href="#ss" aria-hidden="true">#</a> ss</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># netstat是遍历/proc下面每个PID目录，ss直接读/proc/net下面的统计信息。所以ss执行的时候消耗资源以及消耗的时间都比netstat少很多</span>
ss <span class="token parameter variable">-s</span>                          <span class="token comment"># 列出当前socket详细信息</span>
ss <span class="token parameter variable">-l</span>                          <span class="token comment"># 显示本地打开的所有端口</span>
ss <span class="token parameter variable">-tnlp</span>                       <span class="token comment"># 显示每个进程具体打开的socket</span>
ss <span class="token parameter variable">-ant</span>                        <span class="token comment"># 显示所有TCP socket</span>
ss <span class="token parameter variable">-u</span> <span class="token parameter variable">-a</span>                       <span class="token comment"># 显示所有UDP Socekt</span>
ss dst <span class="token number">192.168</span>.119.113         <span class="token comment"># 匹配远程地址</span>
ss dst <span class="token number">192.168</span>.119.113:http    <span class="token comment"># 匹配远程地址和端口号</span>
ss dst <span class="token number">192.168</span>.119.113:3844    <span class="token comment"># 匹配远程地址和端口号</span>
ss src <span class="token number">192.168</span>.119.103:16021   <span class="token comment"># 匹配本地地址和端口号</span>
ss <span class="token parameter variable">-o</span> state established <span class="token string">&#39;( dport = :smtp or sport = :smtp )&#39;</span>        <span class="token comment"># 显示所有已建立的SMTP连接</span>
ss <span class="token parameter variable">-o</span> state established <span class="token string">&#39;( dport = :http or sport = :http )&#39;</span>        <span class="token comment"># 显示所有已建立的HTTP连接</span>
ss <span class="token parameter variable">-x</span> src /tmp/.X11-unix/*         <span class="token comment"># 找出所有连接X服务器的进程</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ssh" tabindex="-1"><a class="header-anchor" href="#ssh" aria-hidden="true">#</a> ssh</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-p</span> <span class="token number">22</span> user@192.168.1.209                            <span class="token comment"># 从linux ssh登录另一台linux</span>
<span class="token function">ssh</span> <span class="token parameter variable">-p</span> <span class="token number">22</span> root@192.168.1.209 CMD                        <span class="token comment"># 利用ssh操作远程主机</span>
<span class="token function">scp</span> <span class="token parameter variable">-P</span> <span class="token number">22</span> <span class="token function">file</span> root@ip:/dir                             <span class="token comment"># 把本地文件拷贝到远程主机</span>
<span class="token function">scp</span> <span class="token parameter variable">-l</span> <span class="token number">100000</span>  <span class="token function">file</span> root@ip:/dir                        <span class="token comment"># 传输文件到远程，限制速度100M</span>
sshpass <span class="token parameter variable">-p</span> <span class="token string">&#39;pwd&#39;</span> <span class="token function">ssh</span> <span class="token parameter variable">-n</span> root@<span class="token variable">$IP</span> <span class="token string">&quot;echo hello&quot;</span>           <span class="token comment"># 指定密码远程操作</span>
<span class="token function">ssh</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no <span class="token variable">$IP</span>                     <span class="token comment"># ssh连接不提示yes</span>
<span class="token function">ssh</span> <span class="token parameter variable">-t</span> <span class="token string">&quot;su -&quot;</span>                                           <span class="token comment"># 指定伪终端 客户端以交互模式工作</span>
<span class="token function">scp</span> root@192.168.1.209:/RemoteDir /localDir             <span class="token comment"># 把远程指定文件拷贝到本地</span>
pscp <span class="token parameter variable">-h</span> host.ip /a.sh /opt/sbin/                        <span class="token comment"># 批量传输文件</span>
<span class="token function">ssh</span> <span class="token parameter variable">-N</span> -L2001:remotehost:80 user@somemachine            <span class="token comment"># 用SSH创建端口转发通道</span>
<span class="token function">ssh</span> <span class="token parameter variable">-t</span> host_A <span class="token function">ssh</span> host_B                                <span class="token comment"># 嵌套使用SSH</span>
<span class="token function">ssh</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">-p</span> <span class="token number">22</span> <span class="token variable">$user</span>@<span class="token variable">$Ip</span> /bin/su - root <span class="token parameter variable">-c</span> <span class="token punctuation">{</span><span class="token variable">$Cmd</span><span class="token punctuation">}</span><span class="token punctuation">;</span>        <span class="token comment"># 远程su执行命令 Cmd=&quot;\\&quot;/sbin/ifconfig eth0\\&quot;&quot;</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa                                       <span class="token comment"># 生成密钥</span>
ssh-copy-id <span class="token parameter variable">-i</span> xuesong@10.10.10.133                     <span class="token comment"># 传送key</span>
<span class="token function">vi</span> <span class="token environment constant">$HOME</span>/.ssh/authorized_keys                           <span class="token comment"># 公钥存放位置</span>
sshfs name@server:/path/to/folder /path/to/mount/point  <span class="token comment"># 通过ssh挂载远程主机上的文件夹</span>
fusermount <span class="token parameter variable">-u</span> /path/to/mount/point                      <span class="token comment"># 卸载ssh挂载的目录</span>
<span class="token function">ssh</span> user@host <span class="token function">cat</span> /path/to/remotefile <span class="token operator">|</span> <span class="token function">diff</span> /path/to/localfile -                <span class="token comment"># 用DIFF对比远程文件跟本地文件</span>
<span class="token function">su</span> - user <span class="token parameter variable">-c</span> <span class="token string">&quot;ssh user@192.168.1.1 <span class="token entity" title="\\&quot;">\\&quot;</span>echo -e aa |mail -s test mail@163.com<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>    <span class="token comment"># 切换用户登录远程发送邮件</span>
pssh <span class="token parameter variable">-h</span> ip.txt <span class="token parameter variable">-i</span> <span class="token function">uptime</span>                                <span class="token comment"># 批量执行ssh yum install pssh</span>

SSH反向连接<span class="token punctuation">{</span>

<span class="token comment"># 外网A要控制内网B</span>

<span class="token function">ssh</span> <span class="token parameter variable">-NfR</span> <span class="token number">1234</span>:localhost:2223 user1@123.123.123.123 <span class="token parameter variable">-p22</span>    <span class="token comment"># 将A主机的1234端口和B主机的2223端口绑定，相当于远程端口映射</span>
ss <span class="token parameter variable">-ant</span>   <span class="token comment"># 这时在A主机上sshd会listen本地1234端口</span>
<span class="token comment"># LISTEN     0    128    127.0.0.1:1234       *:*</span>
<span class="token function">ssh</span> localhost <span class="token parameter variable">-p1234</span>    <span class="token comment"># 在A主机连接本地1234端口</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>route                           # 查看路由表
route add default  gw 192.168.1.1  dev eth0                        # 添加默认路由
route add -net 172.16.0.0 netmask 255.255.0.0 gw 10.39.111.254     # 添加静态路由网关
route del -net 172.16.0.0 netmask 255.255.0.0 gw 10.39.111.254     # 删除静态路由网关


    静态路由{

        vim /etc/sysconfig/static-routes
        any net 192.168.12.0/24 gw 192.168.0.254
        any net 192.168.13.0/24 gw 192.168.0.254

    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="磁盘" tabindex="-1"><a class="header-anchor" href="#磁盘" aria-hidden="true">#</a> 磁盘</h2><h3 id="常用-2" tabindex="-1"><a class="header-anchor" href="#常用-2" aria-hidden="true">#</a> 常用</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">df</span> <span class="token parameter variable">-Ph</span>                                          <span class="token comment"># 查看硬盘容量</span>
<span class="token function">df</span> <span class="token parameter variable">-T</span>                                           <span class="token comment"># 查看磁盘分区格式</span>
<span class="token function">df</span> <span class="token parameter variable">-i</span>                                           <span class="token comment"># 查看inode节点   如果inode用满后无法创建文件</span>
<span class="token function">du</span> <span class="token parameter variable">-h</span> <span class="token function">dir</span>                                       <span class="token comment"># 检测目录下所有文件大小</span>
<span class="token function">du</span> <span class="token parameter variable">-sh</span> *                                        <span class="token comment"># 显示当前目录中子目录的大小</span>
<span class="token function">mount</span> <span class="token parameter variable">-l</span>                                        <span class="token comment"># 查看分区挂载情况</span>
<span class="token function">fdisk</span> <span class="token parameter variable">-l</span>                                        <span class="token comment"># 查看磁盘分区状态</span>
<span class="token function">fdisk</span> /dev/hda3                                 <span class="token comment"># 分区</span>
<span class="token function">mkfs</span> <span class="token parameter variable">-t</span> ext3  /dev/hda3                         <span class="token comment"># 格式化分区</span>
<span class="token function">fsck</span> <span class="token parameter variable">-y</span> /dev/sda6                               <span class="token comment"># 对文件系统修复</span>
<span class="token function">lsof</span> <span class="token operator">|</span><span class="token function">grep</span> delete                               <span class="token comment"># 释放进程占用磁盘空间  列出进程后，查看文件是否存在，不存在则kill掉此进程</span>
tmpwatch <span class="token parameter variable">-afv</span> <span class="token number">10</span>   /tmp                         <span class="token comment"># 删除10小时内未使用的文件  勿在重要目录使用</span>
<span class="token function">cat</span> /proc/filesystems                           <span class="token comment"># 查看当前系统支持文件系统</span>
<span class="token function">mount</span> <span class="token parameter variable">-o</span> remount,rw /                           <span class="token comment"># 修改只读文件系统为读写</span>
iotop                                           <span class="token comment"># 进程占用磁盘IO情况   yum install iotop</span>
smartctl <span class="token parameter variable">-H</span> /dev/sda                            <span class="token comment"># 检测硬盘状态  # yum install smartmontools</span>
smartctl <span class="token parameter variable">-i</span> /dev/sda                            <span class="token comment"># 检测硬盘信息</span>
smartctl <span class="token parameter variable">-a</span> /dev/sda                            <span class="token comment"># 检测所有信息</span>
e2label /dev/sda5                               <span class="token comment"># 查看卷标</span>
e2label /dev/sda5 new-label                     <span class="token comment"># 创建卷标</span>
ntfslabel <span class="token parameter variable">-v</span> /dev/sda8 new-label                <span class="token comment"># NTFS添加卷标</span>
tune2fs <span class="token parameter variable">-j</span> /dev/sda                             <span class="token comment"># ext2分区转ext3分区</span>
tune2fs <span class="token parameter variable">-l</span> /dev/sda                             <span class="token comment"># 查看文件系统信息</span>
<span class="token function">mke2fs</span> <span class="token parameter variable">-b</span> <span class="token number">2048</span> /dev/sda5                        <span class="token comment"># 指定索引块大小</span>
dumpe2fs <span class="token parameter variable">-h</span> /dev/sda5                           <span class="token comment"># 查看超级块的信息</span>
<span class="token function">mount</span> <span class="token parameter variable">-t</span> iso9660 /dev/dvd  /mnt                 <span class="token comment"># 挂载光驱</span>
<span class="token function">mount</span> <span class="token parameter variable">-t</span> ntfs-3g /dev/sdc1 /media/yidong        <span class="token comment"># 挂载ntfs硬盘</span>
<span class="token function">mount</span> <span class="token parameter variable">-t</span> nfs <span class="token number">10.0</span>.0.3:/opt /images  /data/img   <span class="token comment"># 挂载nfs 需要重载 /etc/init.d/nfs reload  重启需要先启动 portmap 服务</span>
<span class="token function">mount</span> <span class="token parameter variable">-o</span> loop  /software/rhel4.6.iso   /mnt/    <span class="token comment"># 挂载镜像文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="io系能" tabindex="-1"><a class="header-anchor" href="#io系能" aria-hidden="true">#</a> IO系能</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>iostat -x 1 10

% user       # 显示了在用户级(应用程序)执行时生成的 CPU 使用率百分比。
% system     # 显示了在系统级(内核)执行时生成的 CPU 使用率百分比。
% idle       # 显示了在 CPU 空闲并且系统没有未完成的磁盘 I/O 请求时的时间百分比。
% iowait     # 显示了 CPU 空闲期间系统有未完成的磁盘 I/O 请求时的时间百分比。

rrqm/s       # 每秒进行 merge 的读操作数目。即 delta(rmerge)/s
wrqm/s       # 每秒进行 merge 的写操作数目。即 delta(wmerge)/s
r/s          # 每秒完成的读 I/O 设备次数。即 delta(rio)/s
w/s          # 每秒完成的写 I/O 设备次数。即 delta(wio)/s
rsec/s       # 每秒读扇区数。即 delta(rsect)/s
wsec/s       # 每秒写扇区数。即 delta(wsect)/s
rkB/s        # 每秒读K字节数。是 rsect/s 的一半，因为每扇区大小为512字节。(需要计算)
wkB/s        # 每秒写K字节数。是 wsect/s 的一半。(需要计算)
avgrq-sz     # 平均每次设备I/O操作的数据大小 (扇区)。delta(rsect+wsect)/delta(rio+wio)
avgqu-sz     # 平均I/O队列长度。即 delta(aveq)/s/1000 (因为aveq的单位为毫秒)。
await        # 平均每次设备I/O操作的等待时间 (毫秒)。即 delta(ruse+wuse)/delta(rio+wio)
svctm        # 平均每次设备I/O操作的服务时间 (毫秒)。即 delta(use)/delta(rio+wio)
%util        # 一秒中有百分之多少的时间用于 I/O 操作，或者说一秒中有多少时间 I/O 队列是非空的。即 delta(use)/s/1000 (因为use的单位为毫秒)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>标准</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、 如果 %util 接近 100%，说明产生的I/O请求太多，I/O系统已经满负荷，该磁盘可能存在瓶颈。
2、 idle 小于70% IO压力就较大了,一般读取速度有较多的wait.
3、 同时可以结合 vmstat 查看查看b参数(等待资源的进程数)和wa参数(IO等待所占用的CPU时间的百分比,高过30%时IO压力高)
4、 svctm 一般要小于 await (因为同时等待的请求的等待时间被重复计算了),svctm 的大小一般和磁盘性能有关,CPU/内存的负荷也会对其有影响,请求过多也会间接导致 svctm 的增加. await 的大小一般取决于服务时间(svctm) 以及 I/O 队列的长度和 I/O 请求的发出模式. 如果 svctm 比较接近 await,说明 I/O 几乎没有等待时间;如果 await 远大于 svctm,说明 I/O 队列太长,应用得到的响应时间变慢,如果响应时间超过了用户可以容许的范围,这时可以考虑更换更快的磁盘,调整内核 elevator 算法,优化应用,或者升级 CPU
5、 队列长度(avgqu-sz)也可作为衡量系统 I/O 负荷的指标，但由于 avgqu-sz 是按照单位时间的平均值，所以不能反映瞬间的 I/O 洪水。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="iotop" tabindex="-1"><a class="header-anchor" href="#iotop" aria-hidden="true">#</a> iotop</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 监视进程磁盘I/O</span>

yum <span class="token function">install</span> iotop

<span class="token parameter variable">-o</span>        <span class="token comment"># 只显示有io操作的进程</span>
<span class="token parameter variable">-b</span>        <span class="token comment"># 批量显示，无交互，主要用作记录到文件。</span>
<span class="token parameter variable">-n</span> NUM    <span class="token comment"># 显示NUM次，主要用于非交互式模式。</span>
<span class="token parameter variable">-d</span> SEC    <span class="token comment"># 间隔SEC秒显示一次。</span>
<span class="token parameter variable">-p</span> PID    <span class="token comment"># 监控的进程pid。</span>
<span class="token parameter variable">-u</span> <span class="token environment constant">USER</span>   <span class="token comment"># 监控的进程用户。</span>

<span class="token comment"># 左右箭头：改变排序方式，默认是按IO排序。</span>
r         <span class="token comment"># 改变排序顺序。</span>
o         <span class="token comment"># 只显示有IO输出的进程。</span>
p         <span class="token comment"># 进程/线程的显示方式的切换。</span>
a         <span class="token comment"># 显示累积使用量。</span>
q         <span class="token comment"># 退出。</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建swap文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/zero <span class="token assign-left variable">of</span><span class="token operator">=</span>/swap <span class="token assign-left variable">bs</span><span class="token operator">=</span><span class="token number">1024</span> <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">4096000</span>            <span class="token comment"># 创建一个足够大的文件</span>
<span class="token comment"># count的值等于1024 x 你想要的文件大小, 4096000是4G</span>
<span class="token function">mkswap</span> /swap                      <span class="token comment"># 把这个文件变成swap文件</span>
<span class="token function">swapon</span> /swap                      <span class="token comment"># 启用这个swap文件</span>
/swap swap swap defaults <span class="token number">0</span> <span class="token number">0</span>      <span class="token comment"># 在每次开机的时候自动加载swap文件, 需要在 /etc/fstab 文件中增加一行</span>
<span class="token function">cat</span> /proc/swaps                   <span class="token comment"># 查看swap</span>
swapoff <span class="token parameter variable">-a</span>                        <span class="token comment"># 关闭swap</span>
<span class="token function">swapon</span> <span class="token parameter variable">-a</span>                         
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新硬盘挂载" tabindex="-1"><a class="header-anchor" href="#新硬盘挂载" aria-hidden="true">#</a> 新硬盘挂载</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">fdisk</span> /dev/sdc
p    <span class="token comment">#  打印分区</span>
d    <span class="token comment">#  删除分区</span>
n    <span class="token comment">#  创建分区，（一块硬盘最多4个主分区，扩展占一个主分区位置。p主分区 e扩展）</span>
w    <span class="token comment">#  保存退出</span>
mkfs.ext4 <span class="token parameter variable">-L</span> 卷标  /dev/sdc1            <span class="token comment"># 格式化相应分区</span>
<span class="token function">mount</span> /dev/sdc1  /mnt                  <span class="token comment"># 挂载</span>
<span class="token function">vi</span> /etc/fstab                          <span class="token comment"># 添加开机挂载分区</span>
<span class="token assign-left variable">LABEL</span><span class="token operator">=</span>/data            /data                   ext4    defaults        <span class="token number">1</span> <span class="token number">2</span>      <span class="token comment"># 用卷标挂载</span>
/dev/sdb1              /data4                  ext4    defaults        <span class="token number">1</span> <span class="token number">2</span>      <span class="token comment"># 用真实分区挂载</span>
/dev/sdb2              /data4                  ext4    noatime,defaults        <span class="token number">1</span> <span class="token number">2</span>

第一个数字<span class="token string">&quot;1&quot;</span>该选项被<span class="token string">&quot;dump&quot;</span>命令使用来检查一个文件系统应该以多快频率进行转储，若不需要转储就设置该字段为0
第二个数字<span class="token string">&quot;2&quot;</span>该字段被fsck命令用来决定在启动时需要被扫描的文件系统的顺序，根文件系统<span class="token string">&quot;/&quot;</span>对应该字段的值应该为1，其他文件系统应该为2。若该文件系统无需在启动时扫描则设置该字段为0
当以 noatime 选项加载（mount）文件系统时，对文件的读取不会更新文件属性中的atime信息。设置noatime的重要性是消除了文件系统对文件的写操作，文件只是简单地被系统读取。由于写操作相对读来说要更消耗系统资源，所以这样设置可以明显提高服务器的性能.wtime信息仍然有效，任何时候文件被写，该信息仍被更新。

<span class="token function">mount</span> <span class="token parameter variable">-a</span>    <span class="token comment"># 自动加载 fstab 文件挂载，避免配置错误，系统无法重启</span>






<span class="token comment">#centos6</span>
<span class="token function">fdisk</span> <span class="token parameter variable">-l</span> /dev/sda
<span class="token function">fdisk</span> /dev/sda
n p <span class="token number">3</span> enter enter  w
partx <span class="token parameter variable">-a</span> /dev/sda
pvcreate /dev/sda3
vgextend vg_centos6 /dev/sda3
lvextend /dev/vg_centos6/lv_root /dev/sda3
resize2fs /dev/vg_centos6/lv_root

<span class="token comment">#centos7</span>
<span class="token function">fdisk</span> <span class="token parameter variable">-l</span> /dev/sda
<span class="token function">fdisk</span> /dev/sda
n p <span class="token number">3</span> enter enter t <span class="token number">3</span> 8e w
partprobe
<span class="token function">mkfs</span> <span class="token parameter variable">-t</span> xfs /dev/sda3
pvcreate /dev/sda3
vgextend centos /dev/sda3
lvextend <span class="token parameter variable">-L</span> +399.99G /dev/centos/root /dev/sda3
xfs_growfs /dev/centos/root

lvcreate <span class="token parameter variable">-l</span> <span class="token number">100</span>%FREE /dev/vg_adj



<span class="token comment">##添加硬盘不重启</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;- - -&quot;</span> <span class="token operator">&gt;</span> /sys/class/scsi_host/host0/scan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2t和16t分区" tabindex="-1"><a class="header-anchor" href="#_2t和16t分区" aria-hidden="true">#</a> 2T和16T分区</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">parted</span> /dev/sdb                <span class="token comment"># 针对磁盘分区</span>
<span class="token punctuation">(</span>parted<span class="token punctuation">)</span> mklabel gpt           <span class="token comment"># 设置为 gpt</span>
<span class="token punctuation">(</span>parted<span class="token punctuation">)</span> print
<span class="token punctuation">(</span>parted<span class="token punctuation">)</span> mkpart  primary 0KB <span class="token number">22</span>.0TB        <span class="token comment"># 指定分区大小</span>
Is this still acceptable to you?
Yes/No? Yes
Ignore/Cancel? Ignore
<span class="token punctuation">(</span>parted<span class="token punctuation">)</span> print
Model: LSI MR9271-8i <span class="token punctuation">(</span>scsi<span class="token punctuation">)</span>
Disk /dev/sdb: <span class="token number">22</span>.0TB
Sector size <span class="token punctuation">(</span>logical/physical<span class="token punctuation">)</span>: 512B/512B
Partition Table: gpt
Number  Start   End     Size    File system  Name     Flags
<span class="token number">1</span>      <span class="token number">17</span>.4kB  <span class="token number">22</span>.0TB  <span class="token number">22</span>.0TB               primary
<span class="token punctuation">(</span>parted<span class="token punctuation">)</span> quit

mkfs.ext4 /dev/sdb1        <span class="token comment"># e2fsprogs升级后支持大于16T硬盘</span>

<span class="token comment"># 大于16T的单个分区ext4格式化报错，需要升级e2fsprogs</span>
Size of device /dev/sdb1 too big to be expressed <span class="token keyword">in</span> <span class="token number">32</span> bits using a blocksize of <span class="token number">4096</span>.

yum <span class="token parameter variable">-y</span> <span class="token function">install</span> xfsprogs
mkfs.xfs <span class="token parameter variable">-f</span> /dev/sdb1              <span class="token comment"># 大于16T单个分区也可以使用XFS分区,但inode占用很大,对大量的小文件支持不太好</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="raid原理" tabindex="-1"><a class="header-anchor" href="#raid原理" aria-hidden="true">#</a> raid原理</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        raid0至少2块硬盘.吞吐量大,性能好,同时读写,但损坏一个就完蛋
        raid1至少2块硬盘.相当镜像,一个存储,一个备份.安全性比较高.但是性能比0弱
        raid5至少3块硬盘.分别存储校验信息和数据，坏了一个根据校验信息能恢复
        raid6至少4块硬盘.两个独立的奇偶系统,可坏两块磁盘,写性能非常差

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用户" tabindex="-1"><a class="header-anchor" href="#用户" aria-hidden="true">#</a> 用户</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">users</span>                                      <span class="token comment"># 显示所有的登录用户</span>
<span class="token function">groups</span>                                     <span class="token comment"># 列出当前用户和他所属的组</span>
<span class="token function">who</span> <span class="token parameter variable">-q</span>                                     <span class="token comment"># 显示所有的登录用户</span>
<span class="token function">groupadd</span>                                   <span class="token comment"># 添加组</span>
<span class="token function">useradd</span> user                               <span class="token comment"># 建立用户</span>
<span class="token function">passwd</span> username                            <span class="token comment"># 修改密码</span>
<span class="token function">userdel</span> <span class="token parameter variable">-r</span>                                 <span class="token comment"># 删除帐号及家目录</span>
<span class="token function">chown</span> <span class="token parameter variable">-R</span> user:group                        <span class="token comment"># 修改目录拥有者(R递归)</span>
<span class="token function">chown</span> y<span class="token punctuation">\\</span>.li:mysql                          <span class="token comment"># 修改所有者用户中包含点&quot;.&quot;</span>
<span class="token builtin class-name">umask</span>                                      <span class="token comment"># 设置用户文件和目录的文件创建缺省屏蔽值</span>
<span class="token function">chgrp</span>                                      <span class="token comment"># 修改用户组</span>
finger                                     <span class="token comment"># 查找用户显示信息</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;xuesong&quot;</span> <span class="token operator">|</span> <span class="token function">passwd</span> user <span class="token parameter variable">--stdin</span>       <span class="token comment"># 非交互修改密码</span>
<span class="token function">useradd</span> <span class="token parameter variable">-g</span> www <span class="token parameter variable">-M</span>  <span class="token parameter variable">-s</span> /sbin/nologin  www   <span class="token comment"># 指定组并不允许登录的用户,nologin允许使用服务</span>
<span class="token function">useradd</span> <span class="token parameter variable">-g</span> www <span class="token parameter variable">-M</span>  <span class="token parameter variable">-s</span> /bin/false  www      <span class="token comment"># 指定组并不允许登录的用户,false最为严格</span>
<span class="token function">useradd</span> <span class="token parameter variable">-d</span> /data/song <span class="token parameter variable">-g</span> song song         <span class="token comment"># 创建用户并指定家目录和组</span>
<span class="token function">usermod</span> <span class="token parameter variable">-l</span> newuser olduser                 <span class="token comment"># 修改用户名</span>
<span class="token function">usermod</span> <span class="token parameter variable">-g</span> user group                      <span class="token comment"># 修改用户所属组</span>
<span class="token function">usermod</span> <span class="token parameter variable">-d</span> <span class="token function">dir</span> <span class="token parameter variable">-m</span> user                     <span class="token comment"># 修改用户家目录</span>
<span class="token function">usermod</span> <span class="token parameter variable">-G</span> group user                      <span class="token comment"># 将用户添加到附加组</span>
gpasswd <span class="token parameter variable">-d</span> user group                      <span class="token comment"># 从组中删除用户</span>
<span class="token function">su</span> - user <span class="token parameter variable">-c</span> <span class="token string">&quot; #cmd1; &quot;</span>                    <span class="token comment"># 切换用户执行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="恢复密码" tabindex="-1"><a class="header-anchor" href="#恢复密码" aria-hidden="true">#</a> 恢复密码</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 即进入单用户模式: 在linux出现grub后，在安装的系统上面按&quot;e&quot;，然后出现grub的配置文件，按键盘移动光标到第二行&quot;Ker……&quot;，再按&quot;e&quot;，然后在这一行的结尾加上：空格 single或者空格1回车，然后按&quot;b&quot;重启，就进入了&quot;单用户模式&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="特殊权限" tabindex="-1"><a class="header-anchor" href="#特殊权限" aria-hidden="true">#</a> 特殊权限</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>s或 S （SUID）：对应数值4
s或 S （SGID）：对应数值2
t或 T ：对应数值1
大S：代表拥有root权限，但是没有执行权限
小s：拥有特权且拥有执行权限，这个文件可以访问系统任何root用户可以访问的资源
T或T（Sticky）：/tmp和 /var/tmp目录供所有用户暂时存取文件，亦即每位用户皆拥有完整的权限进入该目录，去浏览、删除和移动文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="脚本" tabindex="-1"><a class="header-anchor" href="#脚本" aria-hidden="true">#</a> 脚本</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh                             # 在脚本第一行脚本头 # sh为当前系统默认shell,可指定为bash等shell</span>
<span class="token builtin class-name">shopt</span>                                 <span class="token comment"># 显示和设置shell中的行为选项</span>
<span class="token function">sh</span> <span class="token parameter variable">-x</span>                                 <span class="token comment"># 执行过程</span>
<span class="token function">sh</span> <span class="token parameter variable">-n</span>                                 <span class="token comment"># 检查语法</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>                                <span class="token comment"># 若指令传回值不等于0，则立即退出shell</span>
<span class="token punctuation">(</span>a<span class="token operator">=</span>bbk<span class="token punctuation">)</span>                               <span class="token comment"># 括号创建子shell运行</span>
<span class="token function">basename</span> /a/b/c                       <span class="token comment"># 从全路径中保留最后一层文件名或目录</span>
<span class="token function">dirname</span>                               <span class="token comment"># 取路径</span>
<span class="token environment constant">$RANDOM</span>                               <span class="token comment"># 随机数</span>
<span class="token variable">$$</span>                                    <span class="token comment"># 进程号</span>
<span class="token builtin class-name">source</span> FileName                       <span class="token comment"># 在当前bash环境下读取并执行FileName中的命令  # 等同 . FileName</span>
<span class="token function">sleep</span> <span class="token number">5</span>                               <span class="token comment"># 间隔睡眠5秒</span>
<span class="token builtin class-name">trap</span>                                  <span class="token comment"># 在接收到信号后将要采取的行动</span>
<span class="token builtin class-name">trap</span> <span class="token string">&quot;&quot;</span> <span class="token number">2</span> <span class="token number">3</span>                           <span class="token comment"># 禁止ctrl+c</span>
<span class="token environment constant">$PWD</span>                                  <span class="token comment"># 当前目录</span>
<span class="token environment constant">$HOME</span>                                 <span class="token comment"># 家目录</span>
<span class="token environment constant">$OLDPWD</span>                               <span class="token comment"># 之前一个目录的路径</span>
<span class="token builtin class-name">cd</span> -                                  <span class="token comment"># 返回上一个目录路径</span>
<span class="token builtin class-name">local</span> ret                             <span class="token comment"># 局部变量</span>
<span class="token function">yes</span>                                   <span class="token comment"># 重复打印</span>
<span class="token function">yes</span> <span class="token operator">|</span><span class="token function">rm</span> <span class="token parameter variable">-i</span> *                          <span class="token comment"># 自动回答y或者其他</span>
<span class="token function">ls</span> <span class="token parameter variable">-p</span> /home                           <span class="token comment"># 区分目录和文件夹</span>
<span class="token function">ls</span> <span class="token parameter variable">-d</span> /home/                          <span class="token comment"># 查看匹配完整路径</span>
<span class="token function">time</span> a.sh                             <span class="token comment"># 测试程序执行时间</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> aa<span class="token punctuation">;</span><span class="token builtin class-name">echo</span> bb                    <span class="token comment"># 不换行执行下一句话 将字符串原样输出</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;s<span class="token entity" title="\\t">\\t</span>ss<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\n">\\n</span>&quot;</span>                 <span class="token comment"># 使转义生效</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$a</span> <span class="token operator">|</span> <span class="token function">cut</span> -c2-6                   <span class="token comment"># 取字符串中字元</span>
<span class="token builtin class-name">echo</span> <span class="token punctuation">{</span>a,b,c<span class="token punctuation">}</span><span class="token punctuation">{</span>a,b,c<span class="token punctuation">}</span><span class="token punctuation">{</span>a,b,c<span class="token punctuation">}</span>            <span class="token comment"># 排列组合(括号内一个元素分别和其他括号内元素组合)</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span><span class="token number">2</span>#<span class="token number">11010</span><span class="token variable">))</span></span>                     <span class="token comment"># 二进制转10进制</span>
<span class="token builtin class-name">echo</span> aaa <span class="token operator">|</span> <span class="token function">tee</span> <span class="token function">file</span>                   <span class="token comment"># 打印同时写入文件 默认覆盖 -a追加</span>
<span class="token builtin class-name">echo</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">10</span><span class="token punctuation">}</span>                          <span class="token comment"># 打印10个字符</span>
<span class="token builtin class-name">printf</span> <span class="token string">&#39;%10s\\n&#39;</span><span class="token operator">|</span><span class="token function">tr</span> <span class="token string">&quot; &quot;</span> a              <span class="token comment"># 打印10个字符</span>
<span class="token builtin class-name">pwd</span> <span class="token operator">|</span> <span class="token function">awk</span> -F/ <span class="token string">&#39;{ print $2 }&#39;</span>          <span class="token comment"># 返回目录名</span>
<span class="token function">tac</span> <span class="token function">file</span> <span class="token operator">|</span><span class="token function">sed</span> <span class="token number">1</span>,3d<span class="token operator">|</span><span class="token function">tac</span>                <span class="token comment"># 倒置读取文件  # 删除最后3行</span>
<span class="token function">tail</span> <span class="token parameter variable">-3</span> <span class="token function">file</span>                          <span class="token comment"># 取最后3行</span>
<span class="token assign-left variable">outtmp</span><span class="token operator">=</span>/tmp/<span class="token variable">$$</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%s%N<span class="token variable">\`</span></span>.outtmp     <span class="token comment"># 临时文件定义</span>
:<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token builtin class-name">:</span><span class="token operator">|</span><span class="token builtin class-name">:</span><span class="token operator">&amp;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token builtin class-name">:</span>                         <span class="token comment"># fork炸弹,系统执行海量的进程,直到系统僵死</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\e">\\e</span>[32mcolour<span class="token entity" title="\\e">\\e</span>[0m&quot;</span>           <span class="token comment"># 打印颜色</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32mcolour<span class="token entity" title="\\033">\\033</span>[m&quot;</span>        <span class="token comment"># 打印颜色</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[0;31mL<span class="token entity" title="\\033">\\033</span>[0;32mO<span class="token entity" title="\\033">\\033</span>[0;33mV<span class="token entity" title="\\033">\\033</span>[0;34mE<span class="token entity" title="\\t">\\t</span><span class="token entity" title="\\033">\\033</span>[0;35mY<span class="token entity" title="\\033">\\033</span>[0;36mO<span class="token entity" title="\\033">\\033</span>[0;32mU<span class="token entity" title="\\e">\\e</span>[m&quot;</span>    <span class="token comment"># 打印颜色</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式" aria-hidden="true">#</a> 正则表达式</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    ^                       <span class="token comment"># 行首定位</span>
    $                       <span class="token comment"># 行尾定位</span>
    <span class="token builtin class-name">.</span>                       <span class="token comment"># 匹配除换行符以外的任意字符</span>
    *                       <span class="token comment"># 匹配0或多个重复字符</span>
    +                       <span class="token comment"># 重复一次或更多次</span>
    ?                       <span class="token comment"># 重复零次或一次</span>
    ?                       <span class="token comment"># 结束贪婪因子 .*? 表示最小匹配</span>
    <span class="token punctuation">[</span><span class="token punctuation">]</span>                      <span class="token comment"># 匹配一组中任意一个字符</span>
    <span class="token punctuation">[</span>^<span class="token punctuation">]</span>                     <span class="token comment"># 匹配不在指定组内的字符</span>
    <span class="token punctuation">\\</span>                       <span class="token comment"># 用来转义元字符</span>
    <span class="token operator">&lt;</span>                       <span class="token comment"># 词首定位符(支持vi和grep)  &lt;love</span>
    <span class="token operator">&gt;</span>                       <span class="token comment"># 词尾定位符(支持vi和grep)  love&gt;</span>
    x<span class="token punctuation">\\</span><span class="token punctuation">{</span>m<span class="token punctuation">\\</span><span class="token punctuation">}</span>                  <span class="token comment"># 重复出现m次</span>
    x<span class="token punctuation">\\</span><span class="token punctuation">{</span>m,<span class="token punctuation">\\</span><span class="token punctuation">}</span>                 <span class="token comment"># 重复出现至少m次</span>
    x<span class="token punctuation">\\</span><span class="token punctuation">{</span>m,n<span class="token punctuation">\\</span><span class="token punctuation">}</span>                <span class="token comment"># 重复出现至少m次不超过n次</span>
    X?                      <span class="token comment"># 匹配出现零次或一次的大写字母 X</span>
    X+                      <span class="token comment"># 匹配一个或多个字母 X</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span>                      <span class="token comment"># 括号内的字符为一组</span>
    <span class="token punctuation">(</span>ab<span class="token operator">|</span>de<span class="token punctuation">)</span>+                <span class="token comment"># 匹配一连串的（最少一个） abc 或 def；abc 和 def 将匹配</span>
    <span class="token punctuation">[</span><span class="token punctuation">[</span>:alpha:<span class="token punctuation">]</span><span class="token punctuation">]</span>             <span class="token comment"># 代表所有字母不论大小写</span>
    <span class="token punctuation">[</span><span class="token punctuation">[</span>:lower:<span class="token punctuation">]</span><span class="token punctuation">]</span>             <span class="token comment"># 表示小写字母</span>
    <span class="token punctuation">[</span><span class="token punctuation">[</span>:upper:<span class="token punctuation">]</span><span class="token punctuation">]</span>             <span class="token comment"># 表示大写字母</span>
    <span class="token punctuation">[</span><span class="token punctuation">[</span>:digit:<span class="token punctuation">]</span><span class="token punctuation">]</span>             <span class="token comment"># 表示数字字符</span>
    <span class="token punctuation">[</span><span class="token punctuation">[</span>:digit:<span class="token punctuation">]</span><span class="token punctuation">[</span>:lower:<span class="token punctuation">]</span><span class="token punctuation">]</span>    <span class="token comment"># 表示数字字符加小写字母</span>

元字符<span class="token punctuation">{</span>

    <span class="token punctuation">\\</span>d       <span class="token comment"># 匹配任意一位数字</span>
    <span class="token punctuation">\\</span>D       <span class="token comment"># 匹配任意单个非数字字符</span>
    <span class="token punctuation">\\</span>w       <span class="token comment"># 匹配任意单个字母数字下划线字符，同义词是 [:alnum:]</span>
    <span class="token punctuation">\\</span>W       <span class="token comment"># 匹配非数字型的字符</span>

<span class="token punctuation">}</span>

字符类:空白字符<span class="token punctuation">{</span>

    <span class="token punctuation">\\</span>s       <span class="token comment"># 匹配任意的空白符</span>
    <span class="token punctuation">\\</span>S       <span class="token comment"># 匹配非空白字符</span>
    <span class="token punctuation">\\</span>b       <span class="token comment"># 匹配单词的开始或结束</span>
    <span class="token punctuation">\\</span>n       <span class="token comment"># 匹配换行符</span>
    <span class="token punctuation">\\</span>r       <span class="token comment"># 匹配回车符</span>
    <span class="token punctuation">\\</span>t       <span class="token comment"># 匹配制表符</span>
    <span class="token punctuation">\\</span>b       <span class="token comment"># 匹配退格符</span>
    <span class="token punctuation">\\</span><span class="token number">0</span>       <span class="token comment"># 匹配空值字符</span>

<span class="token punctuation">}</span>

字符类:锚定字符<span class="token punctuation">{</span>

    <span class="token punctuation">\\</span>b       <span class="token comment"># 匹配字边界(不在[]中时)</span>
    <span class="token punctuation">\\</span>B       <span class="token comment"># 匹配非字边界</span>
    <span class="token punctuation">\\</span>A       <span class="token comment"># 匹配字符串开头</span>
    <span class="token punctuation">\\</span>Z       <span class="token comment"># 匹配字符串或行的末尾</span>
    <span class="token punctuation">\\</span>z       <span class="token comment"># 只匹配字符串末尾</span>
    <span class="token punctuation">\\</span>G       <span class="token comment"># 匹配前一次m//g离开之处</span>

<span class="token punctuation">}</span>

捕获<span class="token punctuation">{</span>

    <span class="token punctuation">(</span>exp<span class="token punctuation">)</span>                <span class="token comment"># 匹配exp,并捕获文本到自动命名的组里</span>
    <span class="token punctuation">(</span>?<span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>exp<span class="token punctuation">)</span>         <span class="token comment"># 匹配exp,并捕获文本到名称为name的组里，也可以写成(?&#39;name&#39;exp)</span>
    <span class="token punctuation">(</span>?:exp<span class="token punctuation">)</span>              <span class="token comment"># 匹配exp,不捕获匹配的文本，也不给此分组分配组号</span>

<span class="token punctuation">}</span>

零宽断言<span class="token punctuation">{</span>

    <span class="token punctuation">(</span>?<span class="token operator">=</span>exp<span class="token punctuation">)</span>              <span class="token comment"># 匹配exp前面的位置</span>
    <span class="token punctuation">(</span>?<span class="token operator">&lt;=</span>exp<span class="token punctuation">)</span>             <span class="token comment"># 匹配exp后面的位置</span>
    <span class="token punctuation">(</span>?<span class="token operator">!</span>exp<span class="token punctuation">)</span>              <span class="token comment"># 匹配后面跟的不是exp的位置</span>
    <span class="token punctuation">(</span>?<span class="token operator">&lt;</span><span class="token operator">!</span>exp<span class="token punctuation">)</span>             <span class="token comment"># 匹配前面不是exp的位置</span>
    <span class="token punctuation">(</span>?<span class="token comment">#comment)          # 注释不对正则表达式的处理产生任何影响，用于注释</span>

<span class="token punctuation">}</span>

特殊字符<span class="token punctuation">{</span>

    http://en.wikipedia.org/wiki/Ascii_table
    ^H  <span class="token punctuation">\\</span>010 <span class="token punctuation">\\</span>b
    ^M  <span class="token punctuation">\\</span>015 <span class="token punctuation">\\</span>r
    匹配特殊字符: ctrl+V ctrl不放在按H或M 即可输出^H,用于匹配

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="流程结构" tabindex="-1"><a class="header-anchor" href="#流程结构" aria-hidden="true">#</a> 流程结构</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>if判断<span class="token punctuation">{</span>

    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token operator">==</span> <span class="token variable">$b</span> <span class="token punctuation">]</span>
    <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;等于&quot;</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;不等于&quot;</span>
    <span class="token keyword">fi</span>

<span class="token punctuation">}</span>

case分支选择<span class="token punctuation">{</span>

    <span class="token keyword">case</span> <span class="token variable">$xs</span> <span class="token keyword">in</span>
    <span class="token number">0</span><span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;0&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token number">1</span><span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;1&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;其他&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>

<span class="token punctuation">}</span>

while循环<span class="token punctuation">{</span>

    <span class="token comment"># while true  等同   while :</span>
    <span class="token comment"># 读文件为整行读入</span>
    <span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token number">1</span>
    <span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$num</span> <span class="token parameter variable">-lt</span> <span class="token number">10</span> <span class="token punctuation">]</span>
    <span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$num</span>
    <span class="token variable"><span class="token punctuation">((</span>num<span class="token operator">=</span>$num<span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">))</span></span>
    <span class="token keyword">done</span>
    <span class="token comment">###########################</span>
    <span class="token function">grep</span> a  a.txt <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> a
    <span class="token keyword">do</span>
        <span class="token builtin class-name">echo</span> <span class="token variable">$a</span>
    <span class="token keyword">done</span>
    <span class="token comment">###########################</span>
    <span class="token keyword">while</span> <span class="token builtin class-name">read</span> a
    <span class="token keyword">do</span>
        <span class="token builtin class-name">echo</span> <span class="token variable">$a</span>
    <span class="token keyword">done</span> <span class="token operator">&lt;</span> a.txt

<span class="token punctuation">}</span>

for循环<span class="token punctuation">{</span>

    <span class="token comment"># 读文件已空格分隔</span>
    <span class="token assign-left variable">w</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;:&quot;</span> <span class="token string">&#39;{print $1}&#39;</span> c<span class="token variable">\`</span></span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">d</span> <span class="token keyword">in</span> <span class="token variable">$w</span>
    <span class="token keyword">do</span>
        <span class="token variable">$d</span>
    <span class="token keyword">done</span>
    <span class="token comment">###########################</span>
    <span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>\${#o[<span class="token operator">*</span>]}<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span>
    <span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">\${o<span class="token punctuation">[</span>$i<span class="token punctuation">]</span>}</span>
    <span class="token keyword">done</span>

<span class="token punctuation">}</span>

until循环<span class="token punctuation">{</span>

    <span class="token comment">#  当command不为0时循环</span>
    <span class="token keyword">until</span> <span class="token builtin class-name">command</span>
    <span class="token keyword">do</span>
        body
    <span class="token keyword">done</span>

<span class="token punctuation">}</span>

流程控制<span class="token punctuation">{</span>

    <span class="token builtin class-name">break</span> N     <span class="token comment">#  跳出几层循环</span>
    <span class="token builtin class-name">continue</span> N  <span class="token comment">#  跳出几层循环，循环次数不变</span>
    <span class="token builtin class-name">continue</span>    <span class="token comment">#  重新循环次数不变</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">A</span><span class="token operator">=</span><span class="token string">&quot;a b c def&quot;</span>           <span class="token comment"># 将字符串复制给变量</span>
<span class="token assign-left variable">A</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>cmd<span class="token variable">\`</span></span>                 <span class="token comment"># 将命令结果赋给变量</span>
<span class="token assign-left variable">A</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>cmd<span class="token variable">)</span></span>                <span class="token comment"># 将命令结果赋给变量</span>
<span class="token builtin class-name">eval</span> <span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token punctuation">\\</span><span class="token variable">$$</span>a             <span class="token comment"># 间接调用</span>
<span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">2</span><span class="token operator">&amp;&amp;</span><span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span>i<span class="token operator">+</span><span class="token number">3</span><span class="token variable">))</span></span>      <span class="token comment"># 计算后打印新变量结果</span>
<span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">2</span><span class="token operator">&amp;&amp;</span><span class="token builtin class-name">echo</span> $<span class="token punctuation">[</span>i+3<span class="token punctuation">]</span>        <span class="token comment"># 计算后打印新变量结果</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token number">2</span><span class="token operator">&gt;</span><span class="token number">6</span><span class="token operator">?</span><span class="token number">5</span><span class="token operator">:</span><span class="token number">8</span><span class="token variable">))</span></span>          <span class="token comment"># 判断两个值满足条件的赋值给变量</span>
<span class="token variable">$1</span>  <span class="token variable">$2</span>  <span class="token variable">$*</span>              <span class="token comment"># 位置参数 *代表所有</span>
<span class="token function">env</span>                     <span class="token comment"># 查看环境变量</span>
<span class="token function">env</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;name&quot;</span>       <span class="token comment"># 查看定义的环境变量</span>
<span class="token builtin class-name">set</span>                     <span class="token comment"># 查看环境变量和本地变量</span>
<span class="token builtin class-name">read</span> name               <span class="token comment"># 输入变量</span>
<span class="token builtin class-name">readonly</span> name           <span class="token comment"># 把name这个变量设置为只读变量,不允许再次设置</span>
<span class="token builtin class-name">readonly</span>                <span class="token comment"># 查看系统存在的只读文件</span>
<span class="token builtin class-name">export</span> name             <span class="token comment"># 变量name由本地升为环境</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;RedHat&quot;</span>    <span class="token comment"># 直接定义name为环境变量</span>
<span class="token builtin class-name">export</span> Stat<span class="token variable">$nu</span><span class="token operator">=</span><span class="token number">2222</span>     <span class="token comment"># 变量引用变量赋值</span>
<span class="token builtin class-name">unset</span> name              <span class="token comment"># 变量清除</span>
<span class="token builtin class-name">export</span> <span class="token parameter variable">-n</span> name          <span class="token comment"># 去掉只读变量</span>
<span class="token builtin class-name">shift</span>                   <span class="token comment"># 用于移动位置变量,调整位置变量,使$3的值赋给$2.$2的值赋予$1</span>
name + <span class="token number">0</span>                <span class="token comment"># 将字符串转换为数字</span>
number <span class="token string">&quot; &quot;</span>              <span class="token comment"># 将数字转换成字符串</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token string">&#39;ee&#39;</span><span class="token punctuation">;</span><span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">;</span><span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">!</span>b}</span> <span class="token comment"># 间接引用name变量的值</span>
<span class="token builtin class-name">:</span> <span class="token variable">\${a=&quot;cc&quot;}</span>             <span class="token comment"># 如果a有值则不改变,如果a无值则赋值a变量为cc</span>

数组<span class="token punctuation">{</span>

    <span class="token assign-left variable">A</span><span class="token operator">=</span><span class="token punctuation">(</span>a b c def<span class="token punctuation">)</span>         <span class="token comment"># 将变量定义为数組</span>
    <span class="token variable">\${<span class="token operator">#</span>A<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>              <span class="token comment"># 数组个数</span>
    <span class="token variable">\${A<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>               <span class="token comment"># 数组所有元素,大字符串</span>
    <span class="token variable">\${A<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>               <span class="token comment"># 数组所有元素,类似列表可迭代</span>
    <span class="token variable">\${A<span class="token punctuation">[</span>2<span class="token punctuation">]</span>}</span>               <span class="token comment"># 脚本的一个参数或数组第三位</span>

<span class="token punctuation">}</span>

定义变量类型<span class="token punctuation">{</span>

    <span class="token builtin class-name">declare</span> 或 <span class="token builtin class-name">typeset</span>
    <span class="token parameter variable">-r</span> 只读<span class="token punctuation">(</span>readonly一样<span class="token punctuation">)</span>
    <span class="token parameter variable">-i</span> 整形
    <span class="token parameter variable">-a</span> 数组
    <span class="token parameter variable">-f</span> 函数
    <span class="token parameter variable">-x</span> <span class="token builtin class-name">export</span>
    <span class="token builtin class-name">declare</span> <span class="token parameter variable">-i</span> <span class="token assign-left variable">n</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token punctuation">}</span>

系统变量<span class="token punctuation">{</span>

    <span class="token variable">$0</span>   <span class="token comment">#  脚本启动名(包括路径)</span>
    <span class="token variable">$n</span>   <span class="token comment">#  第n个参数,n=1,2,…9</span>
    <span class="token variable">$*</span>   <span class="token comment">#  所有参数列表(不包括脚本本身)</span>
    <span class="token variable">$@</span>   <span class="token comment">#  所有参数列表(独立字符串)</span>
    <span class="token variable">$#</span>   <span class="token comment">#  参数个数(不包括脚本本身)</span>
    <span class="token variable">$$</span>   <span class="token comment">#  当前程式的PID</span>
    <span class="token variable">$!</span>   <span class="token comment">#  执行上一个指令的PID</span>
    <span class="token variable">$?</span>   <span class="token comment">#  执行上一个指令的返回值</span>

<span class="token punctuation">}</span>

变量引用技巧<span class="token punctuation">{</span>

    <span class="token variable">\${name<span class="token operator">:+</span>value}</span>        <span class="token comment"># 如果设置了name,就把value显示,未设置则为空</span>
    <span class="token variable">\${name<span class="token operator">:-</span>value}</span>        <span class="token comment"># 如果设置了name,就显示它,未设置就显示value</span>
    <span class="token variable">\${name<span class="token operator">:?</span>value}</span>        <span class="token comment"># 未设置提示用户错误信息value </span>
    <span class="token variable">\${name<span class="token operator">:=</span>value}</span>        <span class="token comment"># 如未设置就把value设置并显示&lt;写入本地中&gt;</span>
    <span class="token variable">\${<span class="token operator">#</span>A}</span>                 <span class="token comment"># 可得到变量中字节</span>
    <span class="token variable">\${A<span class="token operator">:</span>4<span class="token operator">:</span>9}</span>              <span class="token comment"># 取变量中第4位到后面9位</span>
    <span class="token variable">\${A<span class="token operator">:</span>(-1)}</span>             <span class="token comment"># 倒叙取最后一个字符</span>
    <span class="token variable">\${A<span class="token operator">/</span>www<span class="token operator">/</span>http}</span>         <span class="token comment"># 取变量并且替换每行第一个关键字</span>
    <span class="token variable">\${A<span class="token operator">/</span><span class="token operator">/</span>www<span class="token operator">/</span>http}</span>        <span class="token comment"># 取变量并且全部替换每行关键字</span>

    定义了一个变量： <span class="token assign-left variable">file</span><span class="token operator">=</span>/dir1/dir2/dir3/my.file.txt
    <span class="token variable">\${file<span class="token operator">#</span>*<span class="token operator">/</span>}</span>     <span class="token comment"># 去掉第一条 / 及其左边的字串：dir1/dir2/dir3/my.file.txt</span>
    <span class="token variable">\${file<span class="token operator">##</span>*<span class="token operator">/</span>}</span>    <span class="token comment"># 去掉最后一条 / 及其左边的字串：my.file.txt</span>
    <span class="token variable">\${file<span class="token operator">#</span>*.}</span>     <span class="token comment"># 去掉第一个 .  及其左边的字串：file.txt</span>
    <span class="token variable">\${file<span class="token operator">##</span>*.}</span>    <span class="token comment"># 去掉最后一个 .  及其左边的字串：txt</span>
    <span class="token variable">\${file<span class="token operator">%</span><span class="token operator">/</span>*}</span>     <span class="token comment"># 去掉最后条 / 及其右边的字串：/dir1/dir2/dir3</span>
    <span class="token variable">\${file<span class="token operator">%%</span><span class="token operator">/</span>*}</span>    <span class="token comment"># 去掉第一条 / 及其右边的字串：(空值)</span>
    <span class="token variable">\${file<span class="token operator">%</span>.*}</span>     <span class="token comment"># 去掉最后一个 .  及其右边的字串：/dir1/dir2/dir3/my.file</span>
    <span class="token variable">\${file<span class="token operator">%%</span>.*}</span>    <span class="token comment"># 去掉第一个 .  及其右边的字串：/dir1/dir2/dir3/my</span>
    <span class="token comment">#   # 是去掉左边(在键盘上 # 在 $ 之左边)</span>
    <span class="token comment">#   % 是去掉右边(在键盘上 % 在 $ 之右边)</span>
    <span class="token comment">#   单一符号是最小匹配﹔两个符号是最大匹配</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="test判断" tabindex="-1"><a class="header-anchor" href="#test判断" aria-hidden="true">#</a> test判断</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 符号 [ ] 等同  test命令</span>

expression为字符串操作<span class="token punctuation">{</span>

    <span class="token parameter variable">-n</span> str   <span class="token comment"># 字符串str是否不为空</span>
    <span class="token parameter variable">-z</span> str   <span class="token comment"># 字符串str是否为空</span>

<span class="token punctuation">}</span>

expression为文件操作<span class="token punctuation">{</span>

    <span class="token parameter variable">-a</span>     <span class="token comment"># 并且，两条件为真</span>
    <span class="token parameter variable">-b</span>     <span class="token comment"># 是否块文件</span>
    <span class="token parameter variable">-p</span>     <span class="token comment"># 文件是否为一个命名管道</span>
    <span class="token parameter variable">-c</span>     <span class="token comment"># 是否字符文件</span>
    <span class="token parameter variable">-r</span>     <span class="token comment"># 文件是否可读</span>
    <span class="token parameter variable">-d</span>     <span class="token comment"># 是否一个目录</span>
    <span class="token parameter variable">-s</span>     <span class="token comment"># 文件的长度是否不为零</span>
    <span class="token parameter variable">-e</span>     <span class="token comment"># 文件是否存在</span>
    <span class="token parameter variable">-S</span>     <span class="token comment"># 是否为套接字文件</span>
    <span class="token parameter variable">-f</span>     <span class="token comment"># 是否普通文件</span>
    <span class="token parameter variable">-x</span>     <span class="token comment"># 文件是否可执行，则为真</span>
    <span class="token parameter variable">-g</span>     <span class="token comment"># 是否设置了文件的 SGID 位</span>
    <span class="token parameter variable">-u</span>     <span class="token comment"># 是否设置了文件的 SUID 位</span>
    <span class="token parameter variable">-G</span>     <span class="token comment"># 文件是否存在且归该组所有</span>
    <span class="token parameter variable">-w</span>     <span class="token comment"># 文件是否可写，则为真</span>
    <span class="token parameter variable">-k</span>     <span class="token comment"># 文件是否设置了的粘贴位</span>
    <span class="token parameter variable">-t</span> fd  <span class="token comment"># fd 是否是个和终端相连的打开的文件描述符（fd 默认为 1）</span>
    <span class="token parameter variable">-o</span>     <span class="token comment"># 或，一个条件为真</span>
    <span class="token parameter variable">-O</span>     <span class="token comment"># 文件是否存在且归该用户所有</span>
    <span class="token operator">!</span>      <span class="token comment"># 取反</span>

<span class="token punctuation">}</span>

expression为整数操作<span class="token punctuation">{</span>

    expr1 <span class="token parameter variable">-a</span> expr2   <span class="token comment"># 如果 expr1 和 expr2 评估为真，则为真</span>
    expr1 <span class="token parameter variable">-o</span> expr2   <span class="token comment"># 如果 expr1 或 expr2 评估为真，则为真</span>

<span class="token punctuation">}</span>

两值比较<span class="token punctuation">{</span>

    整数     字符串
    <span class="token parameter variable">-lt</span>      <span class="token operator">&lt;</span>         <span class="token comment"># 小于</span>
    <span class="token parameter variable">-gt</span>      <span class="token operator">&gt;</span>         <span class="token comment"># 大于</span>
    <span class="token parameter variable">-le</span>      <span class="token operator">&lt;=</span>        <span class="token comment"># 小于或等于</span>
    <span class="token parameter variable">-ge</span>      <span class="token operator">&gt;=</span>        <span class="token comment"># 大于或等于</span>
    <span class="token parameter variable">-eq</span>      <span class="token operator">==</span>        <span class="token comment"># 等于</span>
    <span class="token parameter variable">-ne</span>      <span class="token operator">!=</span>        <span class="token comment"># 不等于</span>

<span class="token punctuation">}</span>

<span class="token builtin class-name">test</span> <span class="token number">10</span> <span class="token parameter variable">-lt</span> <span class="token number">5</span>       <span class="token comment"># 判断大小</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>             <span class="token comment"># 查看上句test命令返回状态  # 结果0为真,1为假</span>
<span class="token builtin class-name">test</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;hello&quot;</span>     <span class="token comment"># 判断字符串长度是否为0</span>
<span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;success&quot;</span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span>　　　<span class="token comment"># 判断成功提示,失败则退出</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重定向" tabindex="-1"><a class="header-anchor" href="#重定向" aria-hidden="true">#</a> 重定向</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#  标准输出 stdout 和 标准错误 stderr  标准输入stdin</span>
cmd <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> fiel              <span class="token comment"># 把 标准输出 重定向到 file 文件中</span>
cmd <span class="token operator">&gt;</span> <span class="token function">file</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>          <span class="token comment"># 把 标准输出 和 标准错误 一起重定向到 file 文件中</span>
cmd <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> <span class="token function">file</span>              <span class="token comment"># 把 标准错误 重定向到 file 文件中</span>
cmd <span class="token operator"><span class="token file-descriptor important">2</span>&gt;&gt;</span> <span class="token function">file</span>             <span class="token comment"># 把 标准错误 重定向到 file 文件中(追加)</span>
cmd <span class="token operator">&gt;&gt;</span> <span class="token function">file</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>         <span class="token comment"># 把 标准输出 和 标准错误 一起重定向到 file 文件中(追加)</span>
cmd <span class="token operator">&lt;</span> <span class="token function">file</span> <span class="token operator">&gt;</span>file2        <span class="token comment"># cmd 命令以 file 文件作为 stdin(标准输入)，以 file2 文件作为 标准输出</span>
<span class="token function">cat</span> <span class="token operator">&lt;&gt;</span>file               <span class="token comment"># 以读写的方式打开 file</span>
cmd <span class="token operator">&lt;</span> <span class="token function">file</span> cmd           <span class="token comment"># 命令以 file 文件作为 stdin</span>
cmd <span class="token operator">&lt;&lt;</span> <span class="token string">delimiter
cmd; #从 stdin 中读入，直至遇到 delimiter 分界符
delimiter</span>

<span class="token operator">&gt;&amp;</span>n    <span class="token comment"># 使用系统调用 dup (2) 复制文件描述符 n 并把结果用作标准输出</span>
<span class="token operator">&lt;&amp;</span>n    <span class="token comment"># 标准输入复制自文件描述符 n</span>
<span class="token operator">&lt;&amp;</span>-    <span class="token comment"># 关闭标准输入（键盘）</span>
<span class="token operator">&gt;&amp;</span>-    <span class="token comment"># 关闭标准输出</span>
n<span class="token operator">&lt;&amp;</span>-   <span class="token comment"># 表示将 n 号输入关闭</span>
n<span class="token operator">&gt;&amp;</span>-   <span class="token comment"># 表示将 n 号输出关闭</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
$<span class="token punctuation">[</span><span class="token punctuation">]</span>等同于<span class="token punctuation">$((</span><span class="token punctuation">))</span>  <span class="token comment"># $[]表示形式告诉shell求中括号中的表达式的值</span>
~var            <span class="token comment"># 按位取反运算符,把var中所有的二进制为1的变为0,为0的变为1</span>
var<span class="token punctuation">\\</span><span class="token operator">&lt;&lt;</span>str       <span class="token comment"># 左移运算符,把var中的二进制位向左移动str位,忽略最左端移出的各位,最右端的各位上补上0值,每做一次按位左移就有var乘2</span>
var<span class="token operator">&gt;&gt;</span>str        <span class="token comment"># 右移运算符,把var中所有的二进制位向右移动str位,忽略最右移出的各位,最左的各位上补0,每次做一次右移就有实现var除以2</span>
var<span class="token operator">&amp;</span>str         <span class="token comment"># 与比较运算符,var和str对应位,对于每个二进制来说,如果二都为1,结果为1.否则为0</span>
var^str         <span class="token comment"># 异或运算符,比较var和str对应位,对于二进制来说如果二者互补,结果为1,否则为0</span>
var<span class="token operator">|</span>str         <span class="token comment"># 或运算符,比较var和str的对应位,对于每个二进制来说,如二都该位有一个1或都是1,结果为1,否则为0</span>

运算符优先级<span class="token punctuation">{</span>
    级别      运算符                                  说明
    <span class="token number">1</span>      <span class="token operator">=</span>,<span class="token operator">+=</span>,-<span class="token operator">=</span>,/<span class="token operator">=</span>,%<span class="token operator">=</span>,*<span class="token operator">=</span>,<span class="token operator">&amp;</span><span class="token operator">=</span>,^<span class="token operator">=</span>,<span class="token operator">|</span><span class="token operator">=</span>,<span class="token operator">&lt;&lt;</span><span class="token operator">=</span>,<span class="token operator">&gt;&gt;</span><span class="token operator">=</span>      <span class="token comment"># 赋值运算符</span>
    <span class="token number">2</span>         <span class="token operator">||</span>                                  <span class="token comment"># 逻辑或 前面不成功执行</span>
    <span class="token number">3</span>         <span class="token operator">&amp;&amp;</span>                                  <span class="token comment"># 逻辑与 前面成功后执行</span>
    <span class="token number">4</span>         <span class="token operator">|</span>                                   <span class="token comment"># 按位或</span>
    <span class="token number">5</span>         ^                                   <span class="token comment"># 按位异或</span>
    <span class="token number">6</span>         <span class="token operator">&amp;</span>                                   <span class="token comment"># 按位与</span>
    <span class="token number">7</span>         <span class="token operator">==</span>,<span class="token operator">!=</span>                               <span class="token comment"># 等于/不等于</span>
    <span class="token number">8</span>         <span class="token operator">&lt;=</span>,<span class="token operator">&gt;=</span>,<span class="token operator">&lt;</span>,<span class="token operator">&gt;</span>                           <span class="token comment"># 小于或等于/大于或等于/小于/大于</span>
    <span class="token number">9</span>        <span class="token punctuation">\\</span><span class="token operator">&lt;&lt;</span>,<span class="token operator">&gt;&gt;</span>                               <span class="token comment"># 按位左移/按位右移 (无转意符号)</span>
    <span class="token number">10</span>        +,-                                 <span class="token comment"># 加减</span>
    <span class="token number">11</span>        *,/,%                               <span class="token comment"># 乘,除,取余</span>
    <span class="token number">12</span>        <span class="token operator">!</span> ,~                                <span class="token comment"># 逻辑非,按位取反或补码</span>
    <span class="token number">13</span>        -,+                                 <span class="token comment"># 正负</span>
<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数学运算" tabindex="-1"><a class="header-anchor" href="#数学运算" aria-hidden="true">#</a> 数学运算</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token variable"><span class="token variable">$((</span> <span class="token variable">))</span></span>        <span class="token comment"># 整数运算</span>
+ - * / **    <span class="token comment"># 分別为 &quot;加、減、乘、除、密运算&quot;</span>
<span class="token operator">&amp;</span> <span class="token operator">|</span> ^ <span class="token operator">!</span>       <span class="token comment"># 分別为 &quot;AND、OR、XOR、NOT&quot; 运算</span>
%             <span class="token comment"># 余数运算</span>

let<span class="token punctuation">{</span>

    <span class="token builtin class-name">let</span> <span class="token comment"># 运算</span>
    <span class="token builtin class-name">let</span> <span class="token assign-left variable">x</span><span class="token operator">=</span><span class="token number">16</span>/4
    <span class="token builtin class-name">let</span> <span class="token assign-left variable">x</span><span class="token operator">=</span><span class="token number">5</span>**5

<span class="token punctuation">}</span>

expr<span class="token punctuation">{</span>

    <span class="token function">expr</span> <span class="token number">14</span> % <span class="token number">9</span>                    <span class="token comment"># 整数运算</span>
    <span class="token assign-left variable">SUM</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> <span class="token number">2</span> <span class="token punctuation">\\</span>* <span class="token number">3</span><span class="token variable">\`</span></span>              <span class="token comment"># 乘后结果赋值给变量</span>
    <span class="token assign-left variable">LOOP</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $LOOP + <span class="token number">1</span><span class="token variable">\`</span></span>          <span class="token comment"># 增量计数(加循环即可) LOOP=0</span>
    <span class="token function">expr</span> length <span class="token string">&quot;bkeep zbb&quot;</span>        <span class="token comment"># 计算字串长度</span>
    <span class="token function">expr</span> substr <span class="token string">&quot;bkeep zbb&quot;</span> <span class="token number">4</span> <span class="token number">9</span>    <span class="token comment"># 抓取字串</span>
    <span class="token function">expr</span> index <span class="token string">&quot;bkeep zbb&quot;</span> e       <span class="token comment"># 抓取第一个字符数字串出现的位置</span>
    <span class="token function">expr</span> <span class="token number">30</span> / <span class="token number">3</span> / <span class="token number">2</span>                <span class="token comment"># 运算符号有空格</span>
    <span class="token function">expr</span> bkeep.doc <span class="token builtin class-name">:</span> <span class="token string">&#39;.*&#39;</span>          <span class="token comment"># 模式匹配(可以使用expr通过指定冒号选项计算字符串中字符数)</span>
    <span class="token function">expr</span> bkeep.doc <span class="token builtin class-name">:</span> <span class="token string">&#39;\\(.*\\).doc&#39;</span>  <span class="token comment"># 在expr中可以使用字符串匹配操作，这里使用模式抽取.doc文件附属名</span>

    数值测试<span class="token punctuation">{</span>

        <span class="token comment">#如果试图计算非整数，则会返回错误</span>
        <span class="token assign-left variable">rr</span><span class="token operator">=</span><span class="token number">3.4</span>
        <span class="token function">expr</span> <span class="token variable">$rr</span> + <span class="token number">1</span>
        expr: non-numeric argument
        <span class="token assign-left variable">rr</span><span class="token operator">=</span><span class="token number">5</span>
        <span class="token function">expr</span> <span class="token variable">$rr</span> + <span class="token number">1</span>
        <span class="token number">6</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

bc<span class="token punctuation">{</span>

    <span class="token builtin class-name">echo</span> <span class="token string">&quot;m^n&quot;</span><span class="token operator">|</span><span class="token function">bc</span>            <span class="token comment"># 次方计算</span>
    <span class="token function">seq</span> <span class="token parameter variable">-s</span> <span class="token string">&#39;+&#39;</span> <span class="token number">1000</span> <span class="token operator">|</span><span class="token function">bc</span>      <span class="token comment"># 从1加到1000</span>
    <span class="token function">seq</span> <span class="token number">1</span> <span class="token number">1000</span> <span class="token operator">|</span><span class="token function">tr</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token string">&quot;+&quot;</span><span class="token operator">|</span><span class="token function">sed</span> <span class="token string">&#39;s/+$/\\n/&#39;</span><span class="token operator">|</span><span class="token function">bc</span>   <span class="token comment"># 从1加到1000</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="grep" tabindex="-1"><a class="header-anchor" href="#grep" aria-hidden="true">#</a> grep</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-c</span>    <span class="token comment"># 显示匹配到得行的数目，不显示内容</span>
<span class="token parameter variable">-h</span>    <span class="token comment"># 不显示文件名</span>
<span class="token parameter variable">-i</span>    <span class="token comment"># 忽略大小写</span>
<span class="token parameter variable">-l</span>    <span class="token comment"># 只列出匹配行所在文件的文件名</span>
<span class="token parameter variable">-n</span>    <span class="token comment"># 在每一行中加上相对行号</span>
<span class="token parameter variable">-s</span>    <span class="token comment"># 无声操作只显示报错，检查退出状态</span>
<span class="token parameter variable">-v</span>    <span class="token comment"># 反向查找</span>
<span class="token parameter variable">-e</span>    <span class="token comment"># 使用正则表达式</span>
<span class="token parameter variable">-w</span>    <span class="token comment"># 精确匹配</span>
<span class="token parameter variable">-wc</span>   <span class="token comment"># 精确匹配次数</span>
<span class="token parameter variable">-o</span>    <span class="token comment"># 查询所有匹配字段</span>
<span class="token parameter variable">-P</span>    <span class="token comment"># 使用perl正则表达式</span>
<span class="token parameter variable">-A3</span>   <span class="token comment"># 打印匹配行和下三行</span>
<span class="token parameter variable">-B3</span>   <span class="token comment"># 打印匹配行和上三行</span>
<span class="token parameter variable">-C3</span>   <span class="token comment"># 打印匹配行和上下三行</span>

<span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token string">&quot;a&quot;</span> txt                              <span class="token comment"># 过滤关键字符行</span>
<span class="token function">grep</span> <span class="token parameter variable">-w</span> <span class="token string">&#39;a\\&gt;&#39;</span> txt                            <span class="token comment"># 精确匹配字符串</span>
<span class="token function">grep</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;a&quot;</span> txt                              <span class="token comment"># 大小写敏感</span>
<span class="token function">grep</span>  <span class="token string">&quot;a[bB]&quot;</span> txt                            <span class="token comment"># 同时匹配大小写</span>
<span class="token function">grep</span> <span class="token string">&#39;[0-9]\\{3\\}&#39;</span> txt                        <span class="token comment"># 查找0-9重复三次的所在行</span>
<span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&quot;word1|word2|word3&quot;</span>   <span class="token function">file</span>           <span class="token comment"># 任意条件匹配</span>
<span class="token function">grep</span> word1 <span class="token function">file</span> <span class="token operator">|</span> <span class="token function">grep</span> word2 <span class="token operator">|</span><span class="token function">grep</span> word3     <span class="token comment"># 同时匹配三个</span>
<span class="token builtin class-name">echo</span> quan@163.com <span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-Po</span> <span class="token string">&#39;(?&lt;=@.).*(?=.$)&#39;</span>                           <span class="token comment"># 零宽断言截取字符串  #　63.co</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;I&#39;m singing while you&#39;re dancing&quot;</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-Po</span> <span class="token string">&#39;\\b\\w+(?=ing\\b)&#39;</span>      <span class="token comment"># 零宽断言匹配</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;Rx Optical Power: -5.01dBm, Tx Optical Power: -2.41dBm&#39;</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-Po</span> <span class="token string">&#39;(?&lt;=:).*?(?=d)&#39;</span>           <span class="token comment"># 取出d前面数字 # ?为最小匹配</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;Rx Optical Power: -5.01dBm, Tx Optical Power: -2.41dBm&#39;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-Po</span> <span class="token string">&#39;[-0-9.]+&#39;</span>                <span class="token comment"># 取出d前面数字 # ?为最小匹配</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;[&quot;mem&quot;,ok],[&quot;hardware&quot;,false],[&quot;filesystem&quot;,false]&#39;</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-Po</span> <span class="token string">&#39;[^&quot;]+(?=&quot;,false)&#39;</span>             <span class="token comment"># 取出false前面的字母</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;[&quot;mem&quot;,ok],[&quot;hardware&quot;,false],[&quot;filesystem&quot;,false]&#39;</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-Po</span> <span class="token string">&#39;\\w+&quot;,false&#39;</span><span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-Po</span> <span class="token string">&#39;^\\w+&#39;</span>   <span class="token comment"># 取出false前面的字母</span>

grep用于if判断<span class="token punctuation">{</span>

    <span class="token keyword">if</span> <span class="token builtin class-name">echo</span> abc <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;a&quot;</span>  <span class="token operator">&gt;</span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
    <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;abc&quot;</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;null&quot;</span>
    <span class="token keyword">fi</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tr" tabindex="-1"><a class="header-anchor" href="#tr" aria-hidden="true">#</a> tr</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token parameter variable">-c</span>          <span class="token comment"># 用字符串1中字符集的补集替换此字符集，要求字符集为ASCII</span>
<span class="token parameter variable">-d</span>          <span class="token comment"># 删除字符串1中所有输入字符</span>
<span class="token parameter variable">-s</span>          <span class="token comment"># 删除所有重复出现字符序列，只保留第一个:即将重复出现字符串压缩为一个字符串</span>
<span class="token punctuation">[</span>a-z<span class="token punctuation">]</span>       <span class="token comment"># a-z内的字符组成的字符串</span>
<span class="token punctuation">[</span>A-Z<span class="token punctuation">]</span>       <span class="token comment"># A-Z内的字符组成的字符串</span>
<span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span>       <span class="token comment"># 数字串</span>
<span class="token punctuation">\\</span>octal      <span class="token comment"># 一个三位的八进制数，对应有效的ASCII字符</span>
<span class="token punctuation">[</span>O*n<span class="token punctuation">]</span>       <span class="token comment"># 表示字符O重复出现指定次数n。因此[O*2]匹配OO的字符串</span>

tr中特定控制字符表达方式<span class="token punctuation">{</span>

    <span class="token punctuation">\\</span>a Ctrl-G    <span class="token punctuation">\\</span>007    <span class="token comment"># 铃声</span>
    <span class="token punctuation">\\</span>b Ctrl-H    <span class="token punctuation">\\</span>010    <span class="token comment"># 退格符</span>
    <span class="token punctuation">\\</span>f Ctrl-L    <span class="token punctuation">\\</span>014    <span class="token comment"># 走行换页</span>
    <span class="token punctuation">\\</span>n Ctrl-J    <span class="token punctuation">\\</span>012    <span class="token comment"># 新行</span>
    <span class="token punctuation">\\</span>r Ctrl-M    <span class="token punctuation">\\</span>015    <span class="token comment"># 回车</span>
    <span class="token punctuation">\\</span>t Ctrl-I    <span class="token punctuation">\\</span>011    <span class="token comment"># tab键</span>
    <span class="token punctuation">\\</span>v Ctrl-X    <span class="token punctuation">\\</span>030

<span class="token punctuation">}</span>

<span class="token function">tr</span> A-Z a-z                             <span class="token comment"># 将所有大写转换成小写字母</span>
<span class="token function">tr</span> <span class="token string">&quot; &quot;</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>                            <span class="token comment"># 将空格替换为换行</span>
<span class="token function">tr</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;[<span class="token entity" title="\\012">\\012</span>]&quot;</span> <span class="token operator">&lt;</span> plan.txt              <span class="token comment"># 删除空行</span>
<span class="token function">tr</span> <span class="token parameter variable">-s</span> <span class="token punctuation">[</span><span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> plan.txt                <span class="token comment"># 删除空行</span>
<span class="token function">tr</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;[<span class="token entity" title="\\015">\\015</span>]&quot;</span> <span class="token string">&quot;[<span class="token entity" title="\\n">\\n</span>]&quot;</span> <span class="token operator">&lt;</span> <span class="token function">file</span>           <span class="token comment"># 删除文件中的^M，并代之以换行</span>
<span class="token function">tr</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;[<span class="token entity" title="\\r">\\r</span>]&quot;</span> <span class="token string">&quot;[<span class="token entity" title="\\n">\\n</span>]&quot;</span> <span class="token operator">&lt;</span> <span class="token function">file</span>             <span class="token comment"># 删除文件中的^M，并代之以换行</span>
<span class="token function">tr</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;[:]&quot;</span> <span class="token string">&quot;[<span class="token entity" title="\\011">\\011</span>]&quot;</span> <span class="token operator">&lt;</span> /etc/passwd     <span class="token comment"># 替换passwd文件中所有冒号，代之以tab键</span>
<span class="token function">tr</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;[:]&quot;</span> <span class="token string">&quot;[<span class="token entity" title="\\t">\\t</span>]&quot;</span> <span class="token operator">&lt;</span> /etc/passwd       <span class="token comment"># 替换passwd文件中所有冒号，代之以tab键</span>
<span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">&quot;:&quot;</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>               <span class="token comment"># 增加显示路径可读性</span>
<span class="token number">1</span>,<span class="token variable">$!</span><span class="token function">tr</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;\\t&#39;</span>                         <span class="token comment"># tr在vi内使用，在tr前加处理行范围和感叹号(&#39;$&#39;表示最后一行)</span>
<span class="token function">tr</span> <span class="token string">&quot;<span class="token entity" title="\\r">\\r</span>&quot;</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span><span class="token operator">&lt;</span>macfile <span class="token operator">&gt;</span> unixfile        <span class="token comment"># Mac -&gt; UNIX</span>
<span class="token function">tr</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token string">&quot;<span class="token entity" title="\\r">\\r</span>&quot;</span><span class="token operator">&lt;</span>unixfile <span class="token operator">&gt;</span> macfile        <span class="token comment"># UNIX -&gt; Mac</span>
<span class="token function">tr</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token entity" title="\\r">\\r</span>&quot;</span><span class="token operator">&lt;</span>dosfile <span class="token operator">&gt;</span> unixfile          <span class="token comment"># DOS -&gt; UNIX  Microsoft DOS/Windows 约定，文本的每行以回车字符(\\r)并后跟换行符(\\n)结束</span>
<span class="token function">awk</span> <span class="token string">&#39;{ print $0&quot;\\r&quot; }&#39;</span><span class="token operator">&lt;</span>unixfile <span class="token operator">&gt;</span> dosfile   <span class="token comment"># UNIX -&gt; DOS：在这种情况下，需要用awk，因为tr不能插入两个字符来替换一个字符</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="seq" tabindex="-1"><a class="header-anchor" href="#seq" aria-hidden="true">#</a> seq</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 不指定起始数值，则默认为 1</span>
<span class="token parameter variable">-s</span>   <span class="token comment"># 选项主要改变输出的分格符, 预设是 \\n</span>
<span class="token parameter variable">-w</span>   <span class="token comment"># 等位补全，就是宽度相等，不足的前面补 0</span>
<span class="token parameter variable">-f</span>   <span class="token comment"># 格式化输出，就是指定打印的格式</span>

<span class="token function">seq</span> <span class="token number">10</span> <span class="token number">100</span>               <span class="token comment"># 列出10-100</span>
<span class="token function">seq</span> <span class="token number">1</span> <span class="token number">10</span> <span class="token operator">|</span><span class="token function">tac</span>            <span class="token comment"># 倒叙列出</span>
<span class="token function">seq</span> <span class="token parameter variable">-s</span> <span class="token string">&#39;+&#39;</span> <span class="token number">90</span> <span class="token number">100</span> <span class="token operator">|</span><span class="token function">bc</span>    <span class="token comment"># 从90加到100</span>
<span class="token function">seq</span> <span class="token parameter variable">-f</span> <span class="token string">&#39;dir%g&#39;</span> <span class="token number">1</span> <span class="token number">10</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">mkdir</span>     <span class="token comment"># 创建dir1-10</span>
<span class="token function">seq</span> <span class="token parameter variable">-f</span> <span class="token string">&#39;dir%03g&#39;</span> <span class="token number">1</span> <span class="token number">10</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">mkdir</span>   <span class="token comment"># 创建dir001-010</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="trap" tabindex="-1"><a class="header-anchor" href="#trap" aria-hidden="true">#</a> trap</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>信号         说明
HUP<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>     <span class="token comment"># 挂起，通常因终端掉线或用户退出而引发</span>
INT<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>     <span class="token comment"># 中断，通常因按下Ctrl+C组合键而引发</span>
QUIT<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>    <span class="token comment"># 退出，通常因按下Ctrl+\\组合键而引发</span>
ABRT<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>    <span class="token comment"># 中止，通常因某些严重的执行错误而引发</span>
ALRM<span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">)</span>   <span class="token comment"># 报警，通常用来处理超时</span>
<span class="token environment constant">TERM</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span>   <span class="token comment"># 终止，通常在系统关机时发送</span>

trap捕捉到信号之后，可以有三种反应方式：
    <span class="token number">1</span>、执行一段程序来处理这一信号
    <span class="token number">2</span>、接受信号的默认操作
    <span class="token number">3</span>、忽视这一信号

第一种形式的trap命令在shell接收到 signal list 清单中数值相同的信号时，将执行双引号中的命令串：
<span class="token builtin class-name">trap</span> <span class="token string">&#39;commands&#39;</span> signal-list   <span class="token comment"># 单引号，要在shell探测到信号来的时候才执行命令和变量的替换，时间一直变</span>
<span class="token builtin class-name">trap</span> <span class="token string">&quot;commands&quot;</span> signal-list   <span class="token comment"># 双引号，shell第一次设置信号的时候就执行命令和变量的替换，时间不变</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="awk" tabindex="-1"><a class="header-anchor" href="#awk" aria-hidden="true">#</a> awk</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 默认是执行打印全部 print $0</span>
<span class="token comment"># 1为真 打印$0</span>
<span class="token comment"># 0为假 不打印</span>

<span class="token parameter variable">-F</span>   <span class="token comment"># 改变FS值(分隔符)</span>
~    <span class="token comment"># 域匹配</span>
<span class="token operator">==</span>   <span class="token comment"># 变量匹配</span>
<span class="token operator">!</span>~   <span class="token comment"># 匹配不包含</span>
<span class="token operator">=</span>    <span class="token comment"># 赋值</span>
<span class="token operator">!=</span>   <span class="token comment"># 不等于</span>
<span class="token operator">+=</span>   <span class="token comment"># 叠加</span>

<span class="token punctuation">\\</span>b   <span class="token comment"># 退格</span>
<span class="token punctuation">\\</span>f   <span class="token comment"># 换页</span>
<span class="token punctuation">\\</span>n   <span class="token comment"># 换行</span>
<span class="token punctuation">\\</span>r   <span class="token comment"># 回车</span>
<span class="token punctuation">\\</span>t   <span class="token comment"># 制表符Tab</span>
<span class="token punctuation">\\</span>c   <span class="token comment"># 代表任一其他字符</span>

-F<span class="token string">&quot;[ ]+|[%]+&quot;</span>  <span class="token comment"># 多个空格或多个%为分隔符</span>
<span class="token punctuation">[</span>a-z<span class="token punctuation">]</span>+         <span class="token comment"># 多个小写字母</span>
<span class="token punctuation">[</span>a-Z<span class="token punctuation">]</span>          <span class="token comment"># 代表所有大小写字母(aAbB...zZ)</span>
<span class="token punctuation">[</span>a-z<span class="token punctuation">]</span>          <span class="token comment"># 代表所有大小写字母(ab...z)</span>
<span class="token punctuation">[</span>:alnum:<span class="token punctuation">]</span>      <span class="token comment"># 字母数字字符</span>
<span class="token punctuation">[</span>:alpha:<span class="token punctuation">]</span>      <span class="token comment"># 字母字符</span>
<span class="token punctuation">[</span>:cntrl:<span class="token punctuation">]</span>      <span class="token comment"># 控制字符</span>
<span class="token punctuation">[</span>:digit:<span class="token punctuation">]</span>      <span class="token comment"># 数字字符</span>
<span class="token punctuation">[</span>:graph:<span class="token punctuation">]</span>      <span class="token comment"># 非空白字符(非空格、控制字符等)</span>
<span class="token punctuation">[</span>:lower:<span class="token punctuation">]</span>      <span class="token comment"># 小写字母</span>
<span class="token punctuation">[</span>:print:<span class="token punctuation">]</span>      <span class="token comment"># 与[:graph:]相似，但是包含空格字符</span>
<span class="token punctuation">[</span>:punct:<span class="token punctuation">]</span>      <span class="token comment"># 标点字符</span>
<span class="token punctuation">[</span>:space:<span class="token punctuation">]</span>      <span class="token comment"># 所有的空白字符(换行符、空格、制表符)</span>
<span class="token punctuation">[</span>:upper:<span class="token punctuation">]</span>      <span class="token comment"># 大写字母</span>
<span class="token punctuation">[</span>:xdigit:<span class="token punctuation">]</span>     <span class="token comment"># 十六进制的数字(0-9a-fA-F)</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span>:digit:<span class="token punctuation">]</span><span class="token punctuation">[</span>:lower:<span class="token punctuation">]</span><span class="token punctuation">]</span>    <span class="token comment"># 数字和小写字母(占一个字符)</span>


内建变量<span class="token punctuation">{</span>
    <span class="token variable">$n</span>            <span class="token comment"># 当前记录的第 n 个字段，字段间由 FS 分隔</span>
    <span class="token variable">$0</span>            <span class="token comment"># 完整的输入记录</span>
    ARGC          <span class="token comment"># 命令行参数的数目</span>
    ARGIND        <span class="token comment"># 命令行中当前文件的位置 ( 从 0 开始算 )</span>
    ARGV          <span class="token comment"># 包含命令行参数的数组</span>
    CONVFMT       <span class="token comment"># 数字转换格式 ( 默认值为 %.6g)</span>
    ENVIRON       <span class="token comment"># 环境变量关联数组</span>
    ERRNO         <span class="token comment"># 最后一个系统错误的描述</span>
    FIELDWIDTHS   <span class="token comment"># 字段宽度列表 ( 用空格键分隔 )</span>
    FILENAME      <span class="token comment"># 当前文件名</span>
    FNR           <span class="token comment"># 同 NR ，但相对于当前文件</span>
    FS            <span class="token comment"># 字段分隔符 ( 默认是任何空格 )</span>
    IGNORECASE    <span class="token comment"># 如果为真（即非 0 值），则进行忽略大小写的匹配</span>
    NF            <span class="token comment"># 当前记录中的字段数(列)</span>
    NR            <span class="token comment"># 当前行数</span>
    OFMT          <span class="token comment"># 数字的输出格式 ( 默认值是 %.6g)</span>
    OFS           <span class="token comment"># 输出字段分隔符 ( 默认值是一个空格 )</span>
    ORS           <span class="token comment"># 输出记录分隔符 ( 默认值是一个换行符 )</span>
    RLENGTH       <span class="token comment"># 由 match 函数所匹配的字符串的长度</span>
    RS            <span class="token comment"># 记录分隔符 ( 默认是一个换行符 )</span>
    RSTART        <span class="token comment"># 由 match 函数所匹配的字符串的第一个位置</span>
    SUBSEP        <span class="token comment"># 数组下标分隔符 ( 默认值是 /034)</span>
    BEGIN         <span class="token comment"># 先处理(可不加文件参数)</span>
    END           <span class="token comment"># 结束时处理</span>
<span class="token punctuation">}</span>

内置函数<span class="token punctuation">{</span>
    gsub<span class="token punctuation">(</span>r,s<span class="token punctuation">)</span>          <span class="token comment"># 在整个$0中用s替代r   相当于 sed &#39;s///g&#39;</span>
    gsub<span class="token punctuation">(</span>r,s,t<span class="token punctuation">)</span>        <span class="token comment"># 在整个t中用s替代r</span>
    index<span class="token punctuation">(</span>s,t<span class="token punctuation">)</span>         <span class="token comment"># 返回s中字符串t的第一位置</span>
    length<span class="token punctuation">(</span>s<span class="token punctuation">)</span>          <span class="token comment"># 返回s长度</span>
    match<span class="token punctuation">(</span>s,r<span class="token punctuation">)</span>         <span class="token comment"># 测试s是否包含匹配r的字符串</span>
    split<span class="token punctuation">(</span>s,a,fs<span class="token punctuation">)</span>      <span class="token comment"># 在fs上将s分成序列a</span>
    sprint<span class="token punctuation">(</span>fmt,exp<span class="token punctuation">)</span>    <span class="token comment"># 返回经fmt格式化后的exp</span>
    sub<span class="token punctuation">(</span>r,s<span class="token punctuation">)</span>           <span class="token comment"># 用$0中最左边最长的子串代替s   相当于 sed &#39;s///&#39;</span>
    substr<span class="token punctuation">(</span>s,p<span class="token punctuation">)</span>        <span class="token comment"># 返回字符串s中从p开始的后缀部分</span>
    substr<span class="token punctuation">(</span>s,p,n<span class="token punctuation">)</span>      <span class="token comment"># 返回字符串s中从p开始长度为n的后缀部分</span>
<span class="token punctuation">}</span>

awk判断<span class="token punctuation">{</span>
    <span class="token function">awk</span> <span class="token string">&#39;{print ($1&gt;$2)?&quot;第一排&quot;$1:&quot;第二排&quot;$2}&#39;</span>      <span class="token comment"># 条件判断 括号代表if语句判断 &quot;?&quot;代表then &quot;:&quot;代表else</span>
    <span class="token function">awk</span> <span class="token string">&#39;{max=($1&gt;$2)? $1 : $2; print max}&#39;</span>          <span class="token comment"># 条件判断 如果$1大于$2,max值为为$1,否则为$2</span>
    <span class="token function">awk</span> <span class="token string">&#39;{if ( $6 &gt; 50) print $1 &quot; Too high&quot; ;\\
    else print &quot;Range is OK&quot;}&#39;</span> <span class="token function">file</span>
    <span class="token function">awk</span> <span class="token string">&#39;{if ( $6 &gt; 50) { count++;print $3 } \\
    else { x+5; print $2 } }&#39;</span> <span class="token function">file</span>
<span class="token punctuation">}</span>

awk循环<span class="token punctuation">{</span>
    <span class="token function">awk</span> <span class="token string">&#39;{i = 1; while ( i &lt;= NF ) { print NF, $i ; i++ } }&#39;</span> <span class="token function">file</span>
    <span class="token function">awk</span> <span class="token string">&#39;{ for ( i = 1; i &lt;= NF; i++ ) print NF,$i }&#39;</span> <span class="token function">file</span>
<span class="token punctuation">}</span>

<span class="token function">awk</span> <span class="token string">&#39;/Tom/&#39;</span> <span class="token function">file</span>               <span class="token comment"># 打印匹配到得行</span>
<span class="token function">awk</span> <span class="token string">&#39;/^Tom/{print $1}&#39;</span>         <span class="token comment"># 匹配Tom开头的行 打印第一个字段</span>
<span class="token function">awk</span> <span class="token string">&#39;$1 !~ /ly$/&#39;</span>              <span class="token comment"># 显示所有第一个字段不是以ly结尾的行</span>
<span class="token function">awk</span> <span class="token string">&#39;$3 &lt;40&#39;</span>                   <span class="token comment"># 如果第三个字段值小于40才打印</span>
<span class="token function">awk</span> <span class="token string">&#39;$4==90{print $5}&#39;</span>         <span class="token comment"># 取出第四列等于90的第五列</span>
<span class="token function">awk</span> <span class="token string">&#39;/^(no|so)/&#39;</span> <span class="token builtin class-name">test</span>          <span class="token comment"># 打印所有以模式no或so开头的行</span>
<span class="token function">awk</span> <span class="token string">&#39;$3 * $4 &gt; 500&#39;</span>            <span class="token comment"># 算术运算(第三个字段和第四个字段乘积大于500则显示)</span>
<span class="token function">awk</span> <span class="token string">&#39;{print NR&quot; &quot;$0}&#39;</span>          <span class="token comment"># 加行号</span>
<span class="token function">awk</span> <span class="token string">&#39;/tom/,/suz/&#39;</span>              <span class="token comment"># 打印tom到suz之间的行</span>
<span class="token function">awk</span> <span class="token string">&#39;{a+=$1}END{print a}&#39;</span>      <span class="token comment"># 列求和</span>
<span class="token function">awk</span> <span class="token string">&#39;sum+=$1{print sum}&#39;</span>       <span class="token comment"># 将$1的值叠加后赋给sum</span>
<span class="token function">awk</span> <span class="token string">&#39;{a+=$1}END{print a/NR}&#39;</span>   <span class="token comment"># 列求平均值</span>
<span class="token function">awk</span> <span class="token string">&#39;!s[$1 $3]++&#39;</span> <span class="token function">file</span>         <span class="token comment"># 根据第一列和第三列过滤重复行</span>
<span class="token function">awk</span> -F<span class="token string">&#39;[ :\\t]&#39;</span> <span class="token string">&#39;{print $1,$2}&#39;</span>           <span class="token comment"># 以空格、:、制表符Tab为分隔符</span>
<span class="token function">awk</span> <span class="token string">&#39;{print &quot;&#39;</span>&quot;<span class="token variable">$a</span><span class="token string">&quot;&#39;&quot;</span>,<span class="token string">&quot;&#39;&quot;</span><span class="token variable">$b</span><span class="token string">&quot;&#39;&quot;</span><span class="token punctuation">}</span><span class="token string">&#39;          # 引用外部变量
awk &#39;</span><span class="token punctuation">{</span>if<span class="token punctuation">(</span>NR<span class="token operator">==</span><span class="token number">52</span><span class="token punctuation">)</span><span class="token punctuation">{</span>print<span class="token punctuation">;</span>exit<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token string">&#39;           # 显示第52行
awk &#39;</span>/关键字/<span class="token punctuation">{</span>a<span class="token operator">=</span>NR+2<span class="token punctuation">}</span>a<span class="token operator">==</span>NR <span class="token punctuation">{</span>print<span class="token punctuation">}</span><span class="token string">&#39;      # 取关键字下第几行
awk &#39;</span>gsub<span class="token punctuation">(</span>/liu/,<span class="token string">&quot;aaaa&quot;</span>,<span class="token variable">$1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>print <span class="token variable">$0</span><span class="token punctuation">}</span><span class="token string">&#39;    # 只打印匹配替换后的行
ll | awk -F&#39;</span><span class="token punctuation">[</span> <span class="token punctuation">]</span>+<span class="token operator">|</span><span class="token punctuation">[</span> <span class="token punctuation">]</span><span class="token punctuation">[</span> <span class="token punctuation">]</span>+<span class="token string">&#39; &#39;</span>/^$/<span class="token punctuation">{</span>print <span class="token variable">$8</span><span class="token punctuation">}</span><span class="token string">&#39;             # 提取时间,空格不固定
awk &#39;</span><span class="token punctuation">{</span><span class="token variable">$1</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">;</span><span class="token variable">$2</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">;</span><span class="token variable">$3</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>print<span class="token punctuation">}</span><span class="token string">&#39;                        # 去掉前三列
echo aada:aba|awk &#39;</span>/d/<span class="token operator">||</span>/b/<span class="token punctuation">{</span>print<span class="token punctuation">}</span><span class="token string">&#39;                    # 匹配两内容之一
echo aada:abaa|awk -F: &#39;</span><span class="token variable">$1</span>~/d/<span class="token operator">||</span><span class="token variable">$2</span>~/b/<span class="token punctuation">{</span>print<span class="token punctuation">}</span><span class="token string">&#39;         # 关键列匹配两内容之一
echo Ma asdas|awk &#39;</span><span class="token variable">$1</span>~/^<span class="token punctuation">[</span>a-Z<span class="token punctuation">]</span><span class="token punctuation">[</span>a-Z<span class="token punctuation">]</span>$/<span class="token punctuation">{</span>print <span class="token punctuation">}</span><span class="token string">&#39;          # 第一个域匹配正则
echo aada:aaba|awk &#39;</span>/d/<span class="token operator">&amp;&amp;</span>/b/<span class="token punctuation">{</span>print<span class="token punctuation">}</span><span class="token string">&#39;                   # 同时匹配两条件
awk &#39;</span>length<span class="token punctuation">(</span><span class="token variable">$1</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token string">&quot;4&quot;</span><span class="token punctuation">{</span>print <span class="token variable">$1</span><span class="token punctuation">}</span><span class="token string">&#39;                        # 字符串位数
awk &#39;</span><span class="token punctuation">{</span>if<span class="token punctuation">(</span><span class="token variable">$2</span><span class="token operator">&gt;</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span>system <span class="token punctuation">(</span><span class="token string">&quot;touch &quot;</span><span class="token variable">$1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token string">&#39;                  # 执行系统命令
awk &#39;</span><span class="token punctuation">{</span>sub<span class="token punctuation">(</span>/Mac/,<span class="token string">&quot;Macintosh&quot;</span>,<span class="token variable">$0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>print<span class="token punctuation">}</span><span class="token string">&#39;                # 用Macintosh替换Mac
awk &#39;</span><span class="token punctuation">{</span>gsub<span class="token punctuation">(</span>/Mac/,<span class="token string">&quot;MacIntosh&quot;</span>,<span class="token variable">$1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> print<span class="token punctuation">}</span><span class="token string">&#39;              # 第一个域内用Macintosh替换Mac
awk -F &#39;</span>&#39; <span class="token string">&#39;{ for(i=1;i&lt;NF+1;i++)a+=$i  ;print a}&#39;</span>      <span class="token comment"># 多位数算出其每位数的总和.比如 1234， 得到 10</span>
<span class="token function">awk</span> <span class="token string">&#39;{ i=$1%10;if ( i == 0 ) {print i}}&#39;</span>               <span class="token comment"># 判断$1是否整除(awk中定义变量引用时不能带 $ )</span>
<span class="token function">awk</span> <span class="token string">&#39;BEGIN{a=0}{if ($1&gt;a) a=$1 fi}END{print a}&#39;</span>        <span class="token comment"># 列求最大值  设定一个变量开始为0，遇到比该数大的值，就赋值给该变量，直到结束</span>
<span class="token function">awk</span> <span class="token string">&#39;BEGIN{a=11111}{if ($1&lt;a) a=$1 fi}END{print a}&#39;</span>    <span class="token comment"># 求最小值</span>
<span class="token function">awk</span> <span class="token string">&#39;{if(A)print;A=0}/regexp/{A=1}&#39;</span>                    <span class="token comment"># 查找字符串并将匹配行的下一行显示出来，但并不显示匹配行</span>
<span class="token function">awk</span> <span class="token string">&#39;/regexp/{print A}{A=$0}&#39;</span>                          <span class="token comment"># 查找字符串并将匹配行的上一行显示出来，但并不显示匹配行</span>
<span class="token function">awk</span> <span class="token string">&#39;{if(!/mysql/)gsub(/1/,&quot;a&quot;);print $0}&#39;</span>             <span class="token comment"># 将1替换成a，并且只在行中未出现字串mysql的情况下替换</span>
<span class="token function">awk</span> <span class="token string">&#39;BEGIN{srand();fr=int(100*rand());print fr;}&#39;</span>      <span class="token comment"># 获取随机数</span>
<span class="token function">awk</span> <span class="token string">&#39;{if(NR==3)F=1}{if(F){i++;if(i%7==1)print}}&#39;</span>       <span class="token comment"># 从第3行开始，每7行显示一次</span>
<span class="token function">awk</span> <span class="token string">&#39;{if(NF&lt;1){print i;i=0} else {i++;print $0}}&#39;</span>      <span class="token comment"># 显示空行分割各段的行数</span>
<span class="token builtin class-name">echo</span> +null:null  <span class="token operator">|</span><span class="token function">awk</span> -F: <span class="token string">&#39;$1!~&quot;^+&quot;&amp;&amp;$2!=&quot;null&quot;{print $0}&#39;</span>       <span class="token comment"># 关键列同时匹配</span>
<span class="token function">awk</span> <span class="token parameter variable">-v</span> <span class="token assign-left variable">RS</span><span class="token operator">=</span>@ <span class="token string">&#39;NF{for(i=1;i&lt;=NF;i++)if($i) printf $i;print &quot;&quot;}&#39;</span>    <span class="token comment"># 指定记录分隔符</span>
<span class="token function">awk</span> <span class="token string">&#39;{b[$1]=b[$1]$2}END{for(i in b){print i,b[i]}}&#39;</span>              <span class="token comment"># 列叠加</span>
<span class="token function">awk</span> <span class="token string">&#39;{ i=($1%100);if ( $i &gt;= 0 ) {print $0,$i}}&#39;</span>                 <span class="token comment"># 求余数</span>
<span class="token function">awk</span> <span class="token string">&#39;{b=a;a=$1; if(NR&gt;1){print a-b}}&#39;</span>                            <span class="token comment"># 当前行减上一行</span>
<span class="token function">awk</span> <span class="token string">&#39;{a[NR]=$1}END{for (i=1;i&lt;=NR;i++){print a[i]-a[i-1]}}&#39;</span>      <span class="token comment"># 当前行减上一行</span>
<span class="token function">awk</span> -F: <span class="token string">&#39;{name[x++]=$1};END{for(i=0;i&lt;NR;i++)print i,name[i]}&#39;</span>   <span class="token comment"># END只打印最后的结果,END块里面处理数组内容</span>
<span class="token function">awk</span> <span class="token string">&#39;{sum2+=$2;count=count+1}END{print sum2,sum2/count}&#39;</span>         <span class="token comment"># $2的总和  $2总和除个数(平均值)</span>
<span class="token function">awk</span> <span class="token parameter variable">-v</span> <span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">0</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;B&#39;</span> <span class="token string">&#39;{for (i=1;i&lt;NF;i++){ a=a+length($i)+1;print a  }}&#39;</span>     <span class="token comment"># 打印所以B的所在位置</span>
<span class="token function">awk</span> <span class="token string">&#39;BEGIN{ &quot;date&quot; | getline d; split(d,mon) ; print mon[2]}&#39;</span> <span class="token function">file</span>        <span class="token comment"># 将date值赋给d，并将d设置为数组mon，打印mon数组中第2个元素</span>
<span class="token function">awk</span> <span class="token string">&#39;BEGIN{info=&quot;this is a test2010test!&quot;;print substr(info,4,10);}&#39;</span>      <span class="token comment"># 截取字符串(substr使用)</span>
<span class="token function">awk</span> <span class="token string">&#39;BEGIN{info=&quot;this is a test2010test!&quot;;print index(info,&quot;test&quot;)?&quot;ok&quot;:&quot;no found&quot;;}&#39;</span>      <span class="token comment"># 匹配字符串(index使用)</span>
<span class="token function">awk</span> <span class="token string">&#39;BEGIN{info=&quot;this is a test2010test!&quot;;print match(info,/[0-9]+/)?&quot;ok&quot;:&quot;no found&quot;;}&#39;</span>    <span class="token comment"># 正则表达式匹配查找(match使用)</span>
<span class="token function">awk</span> <span class="token string">&#39;{for(i=1;i&lt;=4;i++)printf $i&quot;&quot;FS; for(y=10;y&lt;=13;y++)  printf $y&quot;&quot;FS;print &quot;&quot;}&#39;</span>        <span class="token comment"># 打印前4列和后4列</span>
<span class="token function">awk</span> <span class="token string">&#39;BEGIN{for(n=0;n++&lt;9;){for(i=0;i++&lt;n;)printf i&quot;x&quot;n&quot;=&quot;i*n&quot; &quot;;print &quot;&quot;}}&#39;</span>                <span class="token comment"># 乘法口诀</span>
<span class="token function">awk</span> <span class="token string">&#39;BEGIN{info=&quot;this is a test&quot;;split(info,tA,&quot; &quot;);print length(tA);for(k in tA){print k,tA[k];}}&#39;</span>             <span class="token comment"># 字符串分割(split使用)</span>
<span class="token function">awk</span> <span class="token string">&#39;{if (system (&quot;grep &quot;$2&quot; tmp/* &gt; /dev/null 2&gt;&amp;1&quot;) == 0 ) {print $1,&quot;Y&quot;} else {print $1,&quot;N&quot;} }&#39;</span> a            <span class="token comment"># 执行系统命令判断返回状态</span>
<span class="token function">awk</span>  <span class="token string">&#39;{for(i=1;i&lt;=NF;i++) a[i,NR]=$i}END{for(i=1;i&lt;=NF;i++) {for(j=1;j&lt;=NR;j++) printf a[i,j] &quot; &quot;;print &quot;&quot;}}&#39;</span>   <span class="token comment"># 将多行转多列</span>
<span class="token function">netstat</span> -an<span class="token operator">|</span><span class="token function">awk</span> <span class="token parameter variable">-v</span> <span class="token assign-left variable">A</span><span class="token operator">=</span><span class="token variable">$IP</span> <span class="token parameter variable">-v</span> <span class="token assign-left variable">B</span><span class="token operator">=</span><span class="token variable">$PORT</span> <span class="token string">&#39;BEGIN{print &quot;Clients\\tGuest_ip&quot;}$4~A&quot;:&quot;B{split($5,ip,&quot;:&quot;);a[ip[1]]++}END{for(i in a)print a[i]&quot;\\t&quot;i|&quot;sort -nr&quot;}&#39;</span>    <span class="token comment"># 统计IP连接个数</span>
<span class="token function">cat</span> <span class="token number">1</span>.txt<span class="token operator">|</span><span class="token function">awk</span> -F<span class="token string">&quot; # &quot;</span> <span class="token string">&#39;{print &quot;insert into user (user,password,email)values(&quot;&quot;&#39;</span><span class="token punctuation">\\</span>&#39;<span class="token string">&#39;&quot;$1&quot;&#39;</span><span class="token punctuation">\\</span>&#39;<span class="token punctuation">\\</span>,<span class="token string">&#39;&quot;&quot;&#39;</span><span class="token punctuation">\\</span>&#39;<span class="token string">&#39;&quot;$2&quot;&#39;</span><span class="token punctuation">\\</span>&#39;<span class="token punctuation">\\</span>,<span class="token string">&#39;&quot;&quot;&#39;</span><span class="token punctuation">\\</span>&#39;<span class="token string">&#39;&quot;$3&quot;&#39;</span><span class="token punctuation">\\</span>&#39;<span class="token punctuation">\\</span><span class="token punctuation">)</span><span class="token punctuation">\\</span><span class="token punctuation">;</span><span class="token string">&#39;&quot;}&#39;</span> <span class="token operator">&gt;&gt;</span>insert_1.txt     <span class="token comment"># 处理sql语句</span>
<span class="token function">awk</span> <span class="token string">&#39;BEGIN{printf &quot;what is your name?&quot;;getline name &lt; &quot;/dev/tty&quot; } $1 ~name {print &quot;FOUND&quot; name &quot; on line &quot;, NR &quot;.&quot;} END{print &quot;see you,&quot; name &quot;.&quot;}&#39;</span> <span class="token function">file</span>  <span class="token comment"># 两文件匹配</span>

取本机IP<span class="token punctuation">{</span>
    /sbin/ifconfig <span class="token operator">|</span><span class="token function">awk</span> <span class="token parameter variable">-v</span> <span class="token assign-left variable">RS</span><span class="token operator">=</span><span class="token string">&quot;Bcast:&quot;</span> <span class="token string">&#39;{print $NF}&#39;</span><span class="token operator">|</span><span class="token function">awk</span> -F: <span class="token string">&#39;/addr/{print $2}&#39;</span>
    /sbin/ifconfig <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;/inet/&amp;&amp;$2!~&quot;127.0.0.1&quot;{split($2,a,&quot;:&quot;);print a[2]}&#39;</span>
    /sbin/ifconfig <span class="token operator">|</span><span class="token function">awk</span> <span class="token parameter variable">-v</span> <span class="token assign-left variable">RS</span><span class="token operator">=</span><span class="token string">&#39;inet addr:&#39;</span> <span class="token string">&#39;$1!=&quot;eth0&quot;&amp;&amp;$1!=&quot;127.0.0.1&quot;{print $1}&#39;</span><span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{printf&quot;%s|&quot;,$0}&#39;</span>
    /sbin/ifconfig <span class="token operator">|</span><span class="token function">awk</span>  <span class="token string">&#39;{printf(&quot;line %d,%s\\n&quot;,NR,$0)}&#39;</span>         <span class="token comment"># 指定类型(%d数字,%s字符)</span>
<span class="token punctuation">}</span>

查看磁盘空间<span class="token punctuation">{</span>
    <span class="token function">df</span> -h<span class="token operator">|</span><span class="token function">awk</span> -F<span class="token string">&quot;[ ]+|%&quot;</span> <span class="token string">&#39;$5&gt;14{print $5}&#39;</span>
    <span class="token function">df</span> -h<span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;NR!=1{if ( NF == 6 ) {print $5} else if ( NF == 5) {print $4} }&#39;</span>
    <span class="token function">df</span> -h<span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;NR!=1 &amp;&amp; /%/{sub(/%/,&quot;&quot;);print $(NF-1)}&#39;</span>
    <span class="token function">df</span> -h<span class="token operator">|</span><span class="token function">sed</span> <span class="token string">&#39;1d;/ /!N;s/\\n//;s/ \\+/ /;&#39;</span>    <span class="token comment">#将磁盘分区整理成一行   可直接用 df -P</span>
<span class="token punctuation">}</span>

排列打印<span class="token punctuation">{</span>
    <span class="token function">awk</span> <span class="token string">&#39;END{printf &quot;%-10s%-10s\\n%-10s%-10s\\n%-10s%-10s\\n&quot;,&quot;server&quot;,&quot;name&quot;,&quot;123&quot;,&quot;12345&quot;,&quot;234&quot;,&quot;1234&quot;}&#39;</span> txt
    <span class="token function">awk</span> <span class="token string">&#39;BEGIN{printf &quot;|%-10s|%-10s|\\n|%-10s|%-10s|\\n|%-10s|%-10s|\\n&quot;,&quot;server&quot;,&quot;name&quot;,&quot;123&quot;,&quot;12345&quot;,&quot;234&quot;,&quot;1234&quot;}&#39;</span>
    <span class="token function">awk</span> <span class="token string">&#39;BEGIN{
    print &quot;   *** 开 始 ***   &quot;;
    print &quot;+-----------------+&quot;;
    printf &quot;|%-5s|%-5s|%-5s|\\n&quot;,&quot;id&quot;,&quot;name&quot;,&quot;ip&quot;;
    }
    $1!=1 &amp;&amp; NF==4{printf &quot;|%-5s|%-5s|%-5s|\\n&quot;,$1,$2,$3&quot; &quot;$11}
    END{
    print &quot;+-----------------+&quot;;
    print &quot;   *** 结 束 ***   &quot;
    }&#39;</span> txt
<span class="token punctuation">}</span>

awk经典题<span class="token punctuation">{</span>
    分析图片服务日志，把日志（每个图片访问次数*图片大小的总和）排行，也就是计算每个url的总访问大小
    说明：本题生产环境应用：这个功能可以用于IDC网站流量带宽很高，然后通过分析服务器日志哪些元素占用流量过大，进而进行优化或裁剪该图片，压缩js等措施。
    本题需要输出三个指标： 【被访问次数】    【访问次数*单个被访问文件大小】   【文件名（带URL）】
    测试数据
    <span class="token number">59.33</span>.26.105 - - <span class="token punctuation">[</span>08/Dec/2010:15:43:56 +0800<span class="token punctuation">]</span> <span class="token string">&quot;GET /static/images/photos/2.jpg HTTP/1.1&quot;</span> <span class="token number">200</span> <span class="token number">11299</span>

    <span class="token function">awk</span> <span class="token string">&#39;{array_num[$7]++;array_size[$7]+=$10}END{for(i in array_num) {print array_num[i]&quot; &quot;array_size[i]&quot; &quot;i}}&#39;</span>
<span class="token punctuation">}</span>

awk练习题<span class="token punctuation">{</span>

    wang     <span class="token number">4</span>
    cui      <span class="token number">3</span>
    zhao     <span class="token number">4</span>
    liu      <span class="token number">3</span>
    liu      <span class="token number">3</span>
    chang    <span class="token number">5</span>
    li       <span class="token number">2</span>

    <span class="token number">1</span> 通过第一个域找出字符长度为4的
    <span class="token number">2</span> 当第二列值大于3时，创建空白文件，文件名为当前行第一个域<span class="token variable">$1</span> <span class="token punctuation">(</span>touch <span class="token variable">$1</span><span class="token punctuation">)</span>
    <span class="token number">3</span> 将文档中 liu 字符串替换为 hong
    <span class="token number">4</span> 求第二列的和
    <span class="token number">5</span> 求第二列的平均值
    <span class="token number">6</span> 求第二列中的最大值
    <span class="token number">7</span> 将第一列过滤重复后，列出每一项，每一项的出现次数，每一项的大小总和

    <span class="token number">1</span>、字符串长度
        <span class="token function">awk</span> <span class="token string">&#39;length($1)==&quot;4&quot;{print $1}&#39;</span>
    <span class="token number">2</span>、执行系统命令
        <span class="token function">awk</span> <span class="token string">&#39;{if($2&gt;3){system (&quot;touch &quot;$1)}}&#39;</span>
    <span class="token number">3</span>、gsub<span class="token punctuation">(</span>/r/,<span class="token string">&quot;s&quot;</span>,域<span class="token punctuation">)</span> 在指定域<span class="token punctuation">(</span>默认<span class="token variable">$0</span><span class="token punctuation">)</span>中用s替代r  <span class="token punctuation">(</span>sed <span class="token string">&#39;s///g&#39;</span><span class="token punctuation">)</span>
        <span class="token function">awk</span> <span class="token string">&#39;{gsub(/liu/,&quot;hong&quot;,$1);print $0}&#39;</span> a.txt
    <span class="token number">4</span>、列求和
        <span class="token function">awk</span> <span class="token string">&#39;{a+=$2}END{print a}&#39;</span>
    <span class="token number">5</span>、列求平均值
        <span class="token function">awk</span> <span class="token string">&#39;{a+=$2}END{print a/NR}&#39;</span>
        <span class="token function">awk</span> <span class="token string">&#39;{a+=$2;b++}END{print a,a/b}&#39;</span>
    <span class="token number">6</span>、列求最大值
        <span class="token function">awk</span> <span class="token string">&#39;BEGIN{a=0}{if($2&gt;a) a=$2 }END{print a}&#39;</span>
    <span class="token number">7</span>、将第一列过滤重复列出每一项，每一项的出现次数，每一项的大小总和
        <span class="token function">awk</span> <span class="token string">&#39;{a[$1]++;b[$1]+=$2}END{for(i in a){print i,a[i],b[i]}}&#39;</span>
<span class="token punctuation">}</span>

awk处理复杂日志<span class="token punctuation">{</span>
    <span class="token number">6.19</span>：
    DHB_014_号百总机服务业务日报：广州 到达数异常！
    DHB_023_号百漏话提醒日报：珠海 到达数异常！
    <span class="token number">6.20</span>：
    DHB_014_号百总机服务业务日报：广州 到达数异常！到

    <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;[_ ：]+&#39;</span> <span class="token string">&#39;NF&gt;2{print $4,$1&quot;_&quot;$2,b |&quot;sort&quot;;next}{b=$1}&#39;</span>

    <span class="token comment"># 当前行NF小于等于2 只针对{print $4,$1&quot;_&quot;$2,b |&quot;sort&quot;;next} 有效 即 6.19：行跳过此操作,  {b=$1} 仍然执行</span>
    <span class="token comment"># 当前行NF大于2 执行到 next 强制跳过本行，即跳过后面的 {b=$1}</span>

    广州 DHB_014 <span class="token number">6.19</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sed" tabindex="-1"><a class="header-anchor" href="#sed" aria-hidden="true">#</a> sed</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 先读取资料、存入模式空间、对其进行编辑、再输出、再用下一行替换模式空间内容</span>
<span class="token comment"># 调试工具sedsed (参数 -d)   http://aurelio.net/sedsed/sedsed-1.0</span>

<span class="token parameter variable">-n</span>   <span class="token comment"># 输出由编辑指令控制(取消默认的输出,必须与编辑指令一起配合)</span>
<span class="token parameter variable">-i</span>   <span class="token comment"># 直接对文件操作</span>
<span class="token parameter variable">-e</span>   <span class="token comment"># 多重编辑</span>
<span class="token parameter variable">-r</span>   <span class="token comment"># 正则可不转移特殊字符</span>

b    <span class="token comment"># 跳过匹配的行</span>
p    <span class="token comment"># 打印</span>
d    <span class="token comment"># 删除</span>
s    <span class="token comment"># 替换</span>
g    <span class="token comment"># 配合s全部替换</span>
i    <span class="token comment"># 行前插入</span>
a    <span class="token comment"># 行后插入</span>
r    <span class="token comment"># 读</span>
y    <span class="token comment"># 转换</span>
q    <span class="token comment"># 退出</span>

<span class="token operator">&amp;</span>    <span class="token comment"># 代表查找的串内容</span>
*    <span class="token comment"># 任意多个 前驱字符(前导符)</span>
?    <span class="token comment"># 0或1个 最小匹配 没加-r参数需转义 \\?</span>
$    <span class="token comment"># 最后一行</span>
.*   <span class="token comment"># 匹配任意多个字符</span>
<span class="token punctuation">\\</span><span class="token punctuation">(</span>a<span class="token punctuation">\\</span><span class="token punctuation">)</span>   <span class="token comment"># 保存a作为标签1(\\1)</span>

模式空间<span class="token punctuation">{</span>

    <span class="token comment"># 模式空间(两行两行处理) 模式匹配的范围，一般而言，模式空间是输入文本中某一行，但是可以通过使用N函数把多于一行读入模式空间</span>
    <span class="token comment"># 暂存空间里默认存储一个空行</span>
    n   <span class="token comment"># 读入下一行(覆盖上一行)</span>
    h   <span class="token comment"># 把模式空间里的行拷贝到暂存空间</span>
    H   <span class="token comment"># 把模式空间里的行追加到暂存空间</span>
    g   <span class="token comment"># 用暂存空间的内容替换模式空间的行</span>
    G   <span class="token comment"># 把暂存空间的内容追加到模式空间的行后</span>
    x   <span class="token comment"># 将暂存空间的内容于模式空间里的当前行互换</span>
    ！  <span class="token comment"># 对其前面的要匹配的范围取反</span>
    D   <span class="token comment"># 删除当前模式空间中直到并包含第一个换行符的所有字符(/.*/匹配模式空间中所有内容，匹配到就执行D,没匹配到就结束D)</span>
    N   <span class="token comment"># 追加下一个输入行到模式空间后面并在第二者间嵌入一个换行符，改变当前行号码,模式匹配可以延伸跨域这个内嵌换行</span>
    p   <span class="token comment"># 打印模式空间中的直到并包含第一个换行的所有字符</span>

<span class="token punctuation">}</span>

标签函数<span class="token punctuation">{</span>

    <span class="token builtin class-name">:</span> lable <span class="token comment"># 建立命令标记，配合b，t函数使用跳转</span>
    b lable <span class="token comment"># 分支到脚本中带有标记的地方，如果分支不存在则分支到脚本的末尾。</span>
    t labe  <span class="token comment"># 判断分支，从最后一行开始，条件一旦满足或者T,t命令，将导致分支到带有标号的命令出，或者到脚本末尾。与b函数不同在于t在执行跳转前会先检查其前一个替换命令是否成功，如成功，则执行跳转。</span>

    <span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;{:p1;/A/s/A/AA/;/B/s/B/BB/;/[AB]\\{10\\}/b;b p1;}&#39;</span>     <span class="token comment"># 文件内容第一行A第二行B:建立标签p1;两个替换函数(A替换成AA,B替换成BB)当A或者B达到10个以后调用b,返回</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;sd  f   f   [a    b      c    cddd    eee]&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;:n;s#\\(\\[[^ ]*\\)  *#\\1#;tn&#39;</span>  <span class="token comment"># 标签函数t使用方法,替换[]里的空格</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;198723124.03&quot;</span><span class="token operator">|</span><span class="token function">sed</span> <span class="token parameter variable">-r</span> <span class="token string">&#39;:a;s/([0-9]+)([0-9]{3})/\\1,\\2/;ta&#39;</span>  <span class="token comment"># 每三个字符加一个逗号</span>

<span class="token punctuation">}</span>

引用外部变量<span class="token punctuation">{</span>

    <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;&#39;</span><span class="token variable">$a</span><span class="token string">&#39;,10p&#39;</span>
    <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;&quot;</span><span class="token variable">$a</span><span class="token string">&quot;,10p&quot;</span>

<span class="token punctuation">}</span>

<span class="token function">sed</span> 10q                                       <span class="token comment"># 显示文件中的前10行 (模拟&quot;head&quot;)</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;$=&#39;</span>                                   <span class="token comment"># 计算行数(模拟 &quot;wc -l&quot;)</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;5,/^no/p&#39;</span>                             <span class="token comment"># 打印从第5行到以no开头行之间的所有行</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;/^<span class="token variable">$f</span>/d&quot;</span> a     　　                  　 <span class="token comment"># 删除匹配行</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;/aaa/,$d&#39;</span>                             <span class="token comment"># 删除匹配行到末尾</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/=/:/&quot;</span> c                             <span class="token comment"># 直接对文本替换</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;/^pearls/s/$/j/&quot;</span>                      <span class="token comment"># 找到pearls开头在行尾加j</span>
<span class="token function">sed</span> <span class="token string">&#39;/1/,/3/p&#39;</span> <span class="token function">file</span>                           <span class="token comment"># 打印1和3之间的行</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;1p&#39;</span> <span class="token function">file</span>                              <span class="token comment"># 取出指定行</span>
<span class="token function">sed</span> <span class="token string">&#39;5i\\aaa&#39;</span> <span class="token function">file</span>                             <span class="token comment"># 在第5行之前插入行</span>
<span class="token function">sed</span> <span class="token string">&#39;5a\\aaa&#39;</span> <span class="token function">file</span>                             <span class="token comment"># 在第5行之后抽入行</span>
<span class="token builtin class-name">echo</span> a<span class="token operator">|</span><span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;/a/i\\b&#39;</span>                        <span class="token comment"># 在匹配行前插入一行</span>
<span class="token builtin class-name">echo</span> a<span class="token operator">|</span><span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;/a/a\\b&#39;</span>                        <span class="token comment"># 在匹配行后插入一行</span>
<span class="token builtin class-name">echo</span> a<span class="token operator">|</span><span class="token function">sed</span> <span class="token string">&#39;s/a/&amp;\\nb/g&#39;</span>                       <span class="token comment"># 在匹配行后插入一行</span>
<span class="token function">seq</span> <span class="token number">10</span><span class="token operator">|</span> <span class="token function">sed</span> -e<span class="token punctuation">{</span><span class="token number">1,3</span><span class="token punctuation">}</span><span class="token string">&#39;s/./a/&#39;</span>                   <span class="token comment"># 匹配1和3行替换</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/regexp/!p&#39;</span>                           <span class="token comment"># 只显示不匹配正则表达式的行</span>
<span class="token function">sed</span> <span class="token string">&#39;/regexp/d&#39;</span>                               <span class="token comment"># 只显示不匹配正则表达式的行</span>
<span class="token function">sed</span> <span class="token string">&#39;$!N;s/\\n//&#39;</span>                              <span class="token comment"># 将每两行连接成一行</span>
<span class="token function">sed</span> <span class="token string">&#39;/baz/s/foo/bar/g&#39;</span>                        <span class="token comment"># 只在行中出现字串&quot;baz&quot;的情况下将&quot;foo&quot;替换成&quot;bar&quot;</span>
<span class="token function">sed</span> <span class="token string">&#39;/baz/!s/foo/bar/g&#39;</span>                       <span class="token comment"># 将&quot;foo&quot;替换成&quot;bar&quot;，并且只在行中未出现字串&quot;baz&quot;的情况下替换</span>
<span class="token builtin class-name">echo</span> a<span class="token operator">|</span><span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;s/a/#&amp;/g&#39;</span>                      <span class="token comment"># 在a前面加#号</span>
<span class="token function">sed</span> <span class="token string">&#39;s/foo/bar/4&#39;</span>                             <span class="token comment"># 只替换每一行中的第四个字串</span>
<span class="token function">sed</span> <span class="token string">&#39;s/\\(.*\\)foo/\\1bar/&#39;</span>                      <span class="token comment"># 替换每行最后一个字符串</span>
<span class="token function">sed</span> <span class="token string">&#39;s/\\(.*\\)foo\\(.*foo\\)/\\1bar\\2/&#39;</span>           <span class="token comment"># 替换倒数第二个字符串</span>
<span class="token function">sed</span> <span class="token string">&#39;s/[0-9][0-9]$/&amp;5&#39;</span>                        <span class="token comment"># 在以[0-9][0-9]结尾的行后加5</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39; /^eth\\|em[01][^:]/{n;p;}&#39;</span>            <span class="token comment"># 匹配多个关键字</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-r</span> <span class="token string">&#39; /eth|em[01][^:]/{n;p;}&#39;</span>           <span class="token comment"># 匹配多个关键字</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;1<span class="token entity" title="\\n">\\n</span>2&quot;</span><span class="token operator">|</span><span class="token function">xargs</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-t</span> <span class="token function">sed</span> <span class="token string">&#39;s/^/1/&#39;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>    <span class="token comment"># 同时处理多个文件</span>
<span class="token function">sed</span> <span class="token string">&#39;/west/,/east/s/$/*VACA*/&#39;</span>                <span class="token comment"># 修改west和east之间的所有行，在结尾处加*VACA*</span>
<span class="token function">sed</span>  <span class="token string">&#39;s/[^1-9]*\\([0-9]\\+\\).*/\\1/&#39;</span>             <span class="token comment"># 取出第一组数字，并且忽略掉开头的0</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/regexp/{g;1!p;};h&#39;</span>                   <span class="token comment"># 查找字符串并将匹配行的上一行显示出来，但并不显示匹配行</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39; /regexp/{n;p;}&#39;</span>                      <span class="token comment"># 查找字符串并将匹配行的下一行显示出来，但并不显示匹配行</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;s/\\(mar\\)got/\\1ianne/p&#39;</span>               <span class="token comment"># 保存\\(mar\\)作为标签1</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;s/\\([0-9]\\+\\).*\\(t\\)/\\2\\1/p&#39;</span>          <span class="token comment"># 保存多个标签</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;1,3d&#39;</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;s/1/2/&#39;</span>                  <span class="token comment"># 多重编辑(先删除1-3行，在将1替换成2)</span>
<span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;s/@.*//g&#39;</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;/^$/d&#39;</span>                  <span class="token comment"># 删除掉@后面所有字符，和空行</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;{s/^ *[0-9]*//p}&quot;</span>                  <span class="token comment"># 打印并删除正则表达式的那部分内容</span>
<span class="token builtin class-name">echo</span> abcd<span class="token operator">|</span><span class="token function">sed</span> <span class="token string">&#39;y/bd/BE/&#39;</span>                      <span class="token comment"># 匹配字符替换</span>
<span class="token function">sed</span> <span class="token string">&#39;/^#/b;y/y/P/&#39;</span> <span class="token number">2</span>                          <span class="token comment"># 非#号开头的行替换字符</span>
<span class="token function">sed</span> <span class="token string">&#39;/suan/r readfile&#39;</span>                        <span class="token comment"># 找到含suan的行，在后面加上读入的文件内容</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/no/w writefile&#39;</span>                      <span class="token comment"># 找到含no的行，写入到指定文件中</span>
<span class="token function">sed</span> <span class="token string">&#39;/regex/G&#39;</span>                                <span class="token comment"># 在匹配式样行之后插入一空行</span>
<span class="token function">sed</span> <span class="token string">&#39;/regex/{x;p;x;G;}&#39;</span>                       <span class="token comment"># 在匹配式样行之前和之后各插入一空行</span>
<span class="token function">sed</span> <span class="token string">&#39;n;d&#39;</span>                                     <span class="token comment"># 删除所有偶数行</span>
<span class="token function">sed</span> <span class="token string">&#39;G;G&#39;</span>                                     <span class="token comment"># 在每一行后面增加两空行</span>
<span class="token function">sed</span> <span class="token string">&#39;/^$/d;G&#39;</span>                                 <span class="token comment"># 在输出的文本中每一行后面将有且只有一空行</span>
<span class="token function">sed</span> <span class="token string">&#39;n;n;n;n;G;&#39;</span>                              <span class="token comment"># 在每5行后增加一空白行</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;5~5p&#39;</span>                                 <span class="token comment"># 只打印行号为5的倍数</span>
<span class="token function">seq</span> <span class="token number">1</span> <span class="token number">30</span><span class="token operator">|</span><span class="token function">sed</span>  <span class="token string">&#39;5~5s/.*/a/&#39;</span>                    <span class="token comment"># 倍数行执行替换</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;3,\${p;n;n;n;n;n;n;}&#39;</span>                  <span class="token comment"># 从第3行开始，每7行显示一次</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;h;n;G;p&#39;</span>                              <span class="token comment"># 奇偶调换</span>
<span class="token function">seq</span> <span class="token number">1</span> <span class="token number">10</span><span class="token operator">|</span><span class="token function">sed</span> <span class="token string">&#39;1!G;h;$!d&#39;</span>                      <span class="token comment"># 倒叙排列</span>
<span class="token function">ls</span> -l<span class="token operator">|</span><span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/^.rwx.*/p&#39;</span>                     <span class="token comment"># 查找属主权限为7的文件</span>
<span class="token function">sed</span> <span class="token operator">=</span> filename <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;N;s/\\n/\\t/&#39;</span>             <span class="token comment"># 为文件中的每一行进行编号(简单的左对齐方式)</span>
<span class="token function">sed</span> <span class="token string">&#39;s/^[ \\t]*//&#39;</span>                             <span class="token comment"># 将每一行前导的&quot;空白字符&quot;(空格，制表符)删除,使之左对齐</span>
<span class="token function">sed</span> <span class="token string">&#39;s/^[ \\t]*//;s/[ \\t]*$//&#39;</span>                 <span class="token comment"># 将每一行中的前导和拖尾的空白字符删除</span>
<span class="token function">sed</span> <span class="token string">&#39;/{abc,def\\}\\/\\[111,222]/s/^/00000/&#39;</span>      <span class="token comment"># 匹配需要转行的字符: } / [</span>
<span class="token builtin class-name">echo</span> abcd<span class="token punctuation">\\</span><span class="token punctuation">\\</span>nabcde <span class="token operator">|</span><span class="token function">sed</span> <span class="token string">&#39;s/\\\\n/@/g&#39;</span> <span class="token operator">|</span><span class="token function">tr</span> <span class="token string">&#39;@&#39;</span> <span class="token string">&#39;\\n&#39;</span>        <span class="token comment"># 将换行符转换为换行</span>
<span class="token function">cat</span> tmp<span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token operator">|</span><span class="token function">sort</span> -n<span class="token operator">|</span><span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;$p&#39;</span>           <span class="token comment"># 取一列最大值</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;{s/^[^\\/]*//;s/\\:.*//;p}&#39;</span> /etc/passwd          <span class="token comment"># 取用户家目录(匹配不为/的字符和匹配:到结尾的字符全部删除)</span>
<span class="token function">sed</span> <span class="token operator">=</span> filename <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;N;s/^/      /; s/ *\\(.\\{6,\\}\\)\\n/\\1   /&#39;</span>   <span class="token comment"># 对文件中的所有行编号(行号在左，文字右端对齐)</span>
/sbin/ifconfig <span class="token operator">|</span><span class="token function">sed</span> <span class="token string">&#39;s/.*inet addr:\\(.*\\) Bca.*/\\1/g&#39;</span> <span class="token operator">|</span><span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/eth/{n;p}&#39;</span>   <span class="token comment"># 取所有IP</span>

修改keepalive配置剔除后端服务器<span class="token punctuation">{</span>

    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;/real_server.*10.0.1.158.*8888/,+8 s/^/#/&#39;</span> keepalived.conf
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;/real_server.*10.0.1.158.*8888/,+8 s/^#//&#39;</span> keepalived.conf

<span class="token punctuation">}</span>

模仿rev功能<span class="token punctuation">{</span>

    <span class="token builtin class-name">echo</span> <span class="token number">123</span> <span class="token operator">|</span><span class="token function">sed</span> <span class="token string">&#39;/\\n/!G;s/\\(.\\)\\(.*\\n\\)/&amp;\\2\\1/;//D;s/.//;&#39;</span>
    /<span class="token punctuation">\\</span>n/<span class="token operator">!</span>G<span class="token punctuation">;</span>         　　　　　　<span class="token comment"># 没有\\n换行符，要执行G,因为保留空间中为空，所以在模式空间追加一空行</span>
    s/<span class="token punctuation">\\</span><span class="token punctuation">(</span>.<span class="token punctuation">\\</span><span class="token punctuation">)</span><span class="token punctuation">\\</span><span class="token punctuation">(</span>.*<span class="token punctuation">\\</span>n<span class="token punctuation">\\</span><span class="token punctuation">)</span>/<span class="token operator">&amp;</span><span class="token punctuation">\\</span><span class="token number">2</span><span class="token punctuation">\\</span><span class="token number">1</span>/<span class="token punctuation">;</span>     <span class="token comment"># 标签替换 &amp;\\n23\\n1$ (关键在于&amp; ,可以让后面//匹配到空行)</span>
    //D<span class="token punctuation">;</span>            　　　　　　<span class="token comment"># D 命令会引起循环删除模式空间中的第一部分，如果删除后，模式空间中还有剩余行，则返回 D 之前的命令，重新执行，如果 D 后，模式空间中没有任何内容，则将退出。  //D 匹配空行执行D,如果上句s没有匹配到,//也无法匹配到空行, &quot;//D;&quot;命令结束</span>
    s/.//<span class="token punctuation">;</span>          　　　　　　<span class="token comment"># D结束后,删除开头的 \\n</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="xargs" tabindex="-1"><a class="header-anchor" href="#xargs" aria-hidden="true">#</a> xargs</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 命令替换</span>
<span class="token parameter variable">-t</span> 先打印命令，然后再执行
<span class="token parameter variable">-i</span> 用每项替换 <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token function">find</span> / <span class="token parameter variable">-perm</span> +7000 <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">ls</span> <span class="token parameter variable">-l</span>                    <span class="token comment"># 将前面的内容，作为后面命令的参数</span>
<span class="token function">seq</span> <span class="token number">1</span> <span class="token number">10</span> <span class="token operator">|</span><span class="token function">xargs</span>  <span class="token parameter variable">-i</span> <span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;{} days &quot;</span> +%Y-%m-%d    <span class="token comment"># 列出10天日期</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dialog菜单" tabindex="-1"><a class="header-anchor" href="#dialog菜单" aria-hidden="true">#</a> dialog菜单</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 默认将所有输出用 stderr 输出，不显示到屏幕   使用参数  --stdout 可将选择赋给变量</span>
<span class="token comment"># 退出状态  0正确  1错误</span>

窗体类型<span class="token punctuation">{</span>
    <span class="token parameter variable">--calendar</span>          <span class="token comment"># 日历</span>
    <span class="token parameter variable">--checklist</span>         <span class="token comment"># 允许你显示一个选项列表，每个选项都可以被单独的选择 (复选框)</span>
    <span class="token parameter variable">--form</span>              <span class="token comment"># 表单,允许您建立一个带标签的文本字段，并要求填写</span>
    <span class="token parameter variable">--fselect</span>           <span class="token comment"># 提供一个路径，让你选择浏览的文件</span>
    <span class="token parameter variable">--gauge</span>             <span class="token comment"># 显示一个表，呈现出完成的百分比，就是显示出进度条。</span>
    <span class="token parameter variable">--infobox</span>           <span class="token comment"># 显示消息后，（没有等待响应）对话框立刻返回，但不清除屏幕(信息框)</span>
    <span class="token parameter variable">--inputbox</span>          <span class="token comment"># 让用户输入文本(输入框)</span>
    <span class="token parameter variable">--inputmenu</span>         <span class="token comment"># 提供一个可供用户编辑的菜单（可编辑的菜单框）</span>
    <span class="token parameter variable">--menu</span>              <span class="token comment"># 显示一个列表供用户选择(菜单框)</span>
    --msgbox<span class="token punctuation">(</span>message<span class="token punctuation">)</span>   <span class="token comment"># 显示一条消息,并要求用户选择一个确定按钮(消息框)</span>
    <span class="token parameter variable">--password</span>          <span class="token comment"># 密码框，显示一个输入框，它隐藏文本</span>
    <span class="token parameter variable">--pause</span>             <span class="token comment"># 显示一个表格用来显示一个指定的暂停期的状态</span>
    <span class="token parameter variable">--radiolist</span>         <span class="token comment"># 提供一个菜单项目组，但是只有一个项目，可以选择(单选框)</span>
    <span class="token parameter variable">--tailbox</span>           <span class="token comment"># 在一个滚动窗口文件中使用tail命令来显示文本</span>
    <span class="token parameter variable">--tailboxbg</span>         <span class="token comment"># 跟tailbox类似，但是在background模式下操作</span>
    <span class="token parameter variable">--textbox</span>           <span class="token comment"># 在带有滚动条的文本框中显示文件的内容  (文本框)</span>
    <span class="token parameter variable">--timebox</span>           <span class="token comment"># 提供一个窗口，选择小时，分钟，秒</span>
    --yesno<span class="token punctuation">(</span>yes/no<span class="token punctuation">)</span>     <span class="token comment"># 提供一个带有yes和no按钮的简单信息框</span>
<span class="token punctuation">}</span>

窗体参数<span class="token punctuation">{</span>
    --separate-output          <span class="token comment"># 对于chicklist组件,输出结果一次输出一行,得到结果不加引号</span>
    --ok-label <span class="token string">&quot;提交&quot;</span>          <span class="token comment"># 确定按钮名称</span>
    --cancel-label <span class="token string">&quot;取消&quot;</span>      <span class="token comment"># 取消按钮名称</span>
    <span class="token parameter variable">--title</span> <span class="token string">&quot;标题&quot;</span>             <span class="token comment"># 标题名称</span>
    <span class="token parameter variable">--stdout</span>                   <span class="token comment"># 将所有输出用 stdout 输出</span>
    <span class="token parameter variable">--backtitle</span> <span class="token string">&quot;上标&quot;</span>         <span class="token comment"># 窗体上标</span>
    --no-shadow                <span class="token comment"># 去掉窗体阴影</span>
    <span class="token parameter variable">--menu</span> <span class="token string">&quot;菜单名&quot;</span> <span class="token number">20</span> <span class="token number">60</span> <span class="token number">14</span>   <span class="token comment"># 菜单及窗口大小</span>
    <span class="token parameter variable">--clear</span>                    <span class="token comment"># 完成后清屏操作</span>
    --no-cancel                <span class="token comment"># 不显示取消项</span>
    <span class="token parameter variable">--insecure</span>                 <span class="token comment"># 使用星号来代表每个字符</span>
    <span class="token parameter variable">--begin</span> <span class="token operator">&lt;</span>y<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>x<span class="token operator">&gt;</span>            <span class="token comment"># 指定对话框左上角在屏幕的上的做坐标</span>
    <span class="token parameter variable">--timeout</span> <span class="token operator">&lt;</span>秒<span class="token operator">&gt;</span>             <span class="token comment"># 超时,返回的错误代码255,如果用户在指定的时间内没有给出相应动作,就按超时处理</span>
    <span class="token parameter variable">--defaultno</span>                <span class="token comment"># 使选择默认为no</span>
    --default-item <span class="token operator">&lt;</span>str<span class="token operator">&gt;</span>       <span class="token comment"># 设置在一份清单，表格或菜单中的默认项目。通常在框中的第一项是默认</span>
    <span class="token parameter variable">--sleep</span> <span class="token number">5</span>                  <span class="token comment"># 在处理完一个对话框后静止(延迟)的时间(秒)</span>
    --max-input size           <span class="token comment"># 限制输入的字符串在给定的大小之内。如果没有指定，默认是2048</span>
    --keep-window              <span class="token comment"># 退出时不清屏和重绘窗口。当几个组件在同一个程序中运行时，对于保留窗口内容很有用的</span>
<span class="token punctuation">}</span>

dialog <span class="token parameter variable">--title</span> <span class="token string">&quot;Check me&quot;</span> <span class="token parameter variable">--checklist</span> <span class="token string">&quot;Pick Numbers&quot;</span> <span class="token number">15</span> <span class="token number">25</span> <span class="token number">3</span> <span class="token number">1</span> <span class="token string">&quot;one&quot;</span> <span class="token string">&quot;off&quot;</span> <span class="token number">2</span> <span class="token string">&quot;two&quot;</span> <span class="token string">&quot;on&quot;</span>         <span class="token comment"># 多选界面[方括号]</span>
dialog <span class="token parameter variable">--title</span> <span class="token string">&quot;title&quot;</span> <span class="token parameter variable">--radiolist</span> <span class="token string">&quot;checklist&quot;</span> <span class="token number">20</span> <span class="token number">60</span> <span class="token number">14</span> tag1 <span class="token string">&quot;item1&quot;</span> on tag2 <span class="token string">&quot;item2&quot;</span> off        <span class="token comment"># 单选界面(圆括号)</span>
dialog <span class="token parameter variable">--title</span> <span class="token string">&quot;title&quot;</span> <span class="token parameter variable">--menu</span> <span class="token string">&quot;MENU&quot;</span> <span class="token number">20</span> <span class="token number">60</span> <span class="token number">14</span> tag1 <span class="token string">&quot;item1&quot;</span> tag2 <span class="token string">&quot;item2&quot;</span>                         <span class="token comment"># 单选界面</span>
dialog <span class="token parameter variable">--title</span> <span class="token string">&quot;Installation&quot;</span> <span class="token parameter variable">--backtitle</span> <span class="token string">&quot;Star Linux&quot;</span> <span class="token parameter variable">--gauge</span> <span class="token string">&quot;Linux Kernel&quot;</span>  <span class="token number">10</span> <span class="token number">60</span> <span class="token number">50</span>         <span class="token comment"># 进度条</span>
dialog <span class="token parameter variable">--title</span> <span class="token string">&quot;标题&quot;</span> <span class="token parameter variable">--backtitle</span> <span class="token string">&quot;Dialog&quot;</span> <span class="token parameter variable">--yesno</span> <span class="token string">&quot;说明&quot;</span> <span class="token number">20</span> <span class="token number">60</span>                                 <span class="token comment"># 选择yes/no</span>
dialog <span class="token parameter variable">--title</span> <span class="token string">&quot;公告标题&quot;</span> <span class="token parameter variable">--backtitle</span> <span class="token string">&quot;Dialog&quot;</span> <span class="token parameter variable">--msgbox</span> <span class="token string">&quot;内容&quot;</span> <span class="token number">20</span> <span class="token number">60</span>                            <span class="token comment"># 公告</span>
dialog <span class="token parameter variable">--title</span> <span class="token string">&quot;hey&quot;</span> <span class="token parameter variable">--backtitle</span> <span class="token string">&quot;Dialog&quot;</span> <span class="token parameter variable">--infobox</span> <span class="token string">&quot;Is everything okay?&quot;</span> <span class="token number">10</span> <span class="token number">60</span>                 <span class="token comment"># 显示讯息后立即离开</span>
dialog <span class="token parameter variable">--title</span> <span class="token string">&quot;hey&quot;</span> <span class="token parameter variable">--backtitle</span> <span class="token string">&quot;Dialog&quot;</span> <span class="token parameter variable">--inputbox</span> <span class="token string">&quot;Is okay?&quot;</span> <span class="token number">10</span> <span class="token number">60</span> <span class="token string">&quot;yes&quot;</span>                     <span class="token comment"># 输入对话框</span>
dialog <span class="token parameter variable">--title</span> <span class="token string">&quot;Array 30&quot;</span> <span class="token parameter variable">--backtitle</span> <span class="token string">&quot;All &quot;</span> <span class="token parameter variable">--textbox</span> /root/txt <span class="token number">20</span> <span class="token number">75</span>                          <span class="token comment"># 显示文档内容</span>
dialog <span class="token parameter variable">--title</span> <span class="token string">&quot;Add&quot;</span> <span class="token parameter variable">--form</span> <span class="token string">&quot;input&quot;</span> <span class="token number">12</span> <span class="token number">40</span> <span class="token number">4</span> <span class="token string">&quot;user&quot;</span> <span class="token number">1</span> <span class="token number">1</span> <span class="token string">&quot;&quot;</span> <span class="token number">1</span> <span class="token number">15</span> <span class="token number">15</span> <span class="token number">0</span> <span class="token string">&quot;name&quot;</span> <span class="token number">2</span> <span class="token number">1</span> <span class="token string">&quot;&quot;</span> <span class="token number">2</span> <span class="token number">15</span> <span class="token number">15</span> <span class="token number">0</span>     <span class="token comment"># 多条输入对话框</span>
dialog <span class="token parameter variable">--title</span>  <span class="token string">&quot;Password&quot;</span>  <span class="token parameter variable">--insecure</span>  <span class="token parameter variable">--passwordbox</span>  <span class="token string">&quot;请输入密码&quot;</span>  <span class="token number">10</span>  <span class="token number">35</span>                     <span class="token comment"># 星号显示输入--insecure</span>
dialog <span class="token parameter variable">--stdout</span> <span class="token parameter variable">--title</span> <span class="token string">&quot;日历&quot;</span>  <span class="token parameter variable">--calendar</span> <span class="token string">&quot;请选择&quot;</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">9</span> <span class="token number">1</span> <span class="token number">2010</span>                                <span class="token comment"># 选择日期</span>
dialog <span class="token parameter variable">--title</span> <span class="token string">&quot;title&quot;</span> <span class="token parameter variable">--menu</span> <span class="token string">&quot;MENU&quot;</span> <span class="token number">20</span> <span class="token number">60</span> <span class="token number">14</span> tag1 <span class="token string">&quot;item1&quot;</span> tag2 <span class="token string">&quot;item2&quot;</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>tmp                   <span class="token comment"># 取到结果放到文件中(以标准错误输出结果)</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>dialog <span class="token parameter variable">--title</span> <span class="token string">&quot;title&quot;</span>  <span class="token parameter variable">--stdout</span> <span class="token parameter variable">--menu</span> <span class="token string">&quot;MENU&quot;</span> <span class="token number">20</span> <span class="token number">60</span> <span class="token number">14</span> tag1 <span class="token string">&quot;item1&quot;</span> tag2 <span class="token string">&quot;item2&quot;</span><span class="token variable">\`</span></span>           <span class="token comment"># 选择操作赋给变量(使用标准输出)</span>

dialog菜单实例<span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token builtin class-name">:</span>
    <span class="token keyword">do</span>
    <span class="token function">clear</span>
    <span class="token assign-left variable">menu</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>dialog <span class="token parameter variable">--title</span> <span class="token string">&quot;title&quot;</span>  <span class="token parameter variable">--stdout</span> <span class="token parameter variable">--menu</span> <span class="token string">&quot;MENU&quot;</span> <span class="token number">20</span> <span class="token number">60</span> <span class="token number">14</span> <span class="token number">1</span> system <span class="token number">2</span> custom<span class="token variable">\`</span></span>
    <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$menu</span>&quot;</span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span>         <span class="token comment"># 判断dialog执行,取消退出</span>
        <span class="token keyword">while</span> <span class="token builtin class-name">:</span>
        <span class="token keyword">do</span>
            <span class="token keyword">case</span> <span class="token variable">$menu</span> <span class="token keyword">in</span>
            <span class="token number">1</span><span class="token punctuation">)</span>
                <span class="token assign-left variable">list</span><span class="token operator">=</span><span class="token string">&quot;1a &quot;</span>item1<span class="token string">&quot; 2a &quot;</span>item2<span class="token string">&quot;&quot;</span>     <span class="token comment"># 定义菜单列表变量</span>
            <span class="token punctuation">;</span><span class="token punctuation">;</span>
            <span class="token number">2</span><span class="token punctuation">)</span>
                <span class="token assign-left variable">list</span><span class="token operator">=</span><span class="token string">&quot;1b &quot;</span>item3<span class="token string">&quot; 2b &quot;</span>item4<span class="token string">&quot;&quot;</span>
            <span class="token punctuation">;</span><span class="token punctuation">;</span>
            <span class="token keyword">esac</span>
            <span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>dialog <span class="token parameter variable">--title</span> <span class="token string">&quot;title&quot;</span>  <span class="token parameter variable">--stdout</span> <span class="token parameter variable">--menu</span> <span class="token string">&quot;MENU&quot;</span> <span class="token number">20</span> <span class="token number">60</span> <span class="token number">14</span> $list<span class="token variable">\`</span></span>
            <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$result</span>&quot;</span> <span class="token operator">||</span> <span class="token builtin class-name">break</span>    <span class="token comment"># 判断dialog执行,取消返回菜单,注意:配合上层菜单循环</span>
            <span class="token builtin class-name">read</span>
        <span class="token keyword">done</span>
    <span class="token keyword">done</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="select菜单" tabindex="-1"><a class="header-anchor" href="#select菜单" aria-hidden="true">#</a> select菜单</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>        <span class="token comment"># 输入项不在菜单自动会提示重新输入</span>
        <span class="token keyword">select</span> <span class="token for-or-select variable">menuitem</span> <span class="token keyword">in</span> pick1 pick2 pick3 退出
        <span class="token keyword">do</span>
            <span class="token builtin class-name">echo</span> <span class="token variable">$menuitem</span>
            <span class="token keyword">case</span> <span class="token variable">$menuitem</span> <span class="token keyword">in</span>
            退出<span class="token punctuation">)</span>
                <span class="token builtin class-name">exit</span>
            <span class="token punctuation">;</span><span class="token punctuation">;</span>
            *<span class="token punctuation">)</span>
                <span class="token keyword">select</span> <span class="token for-or-select variable">area</span> <span class="token keyword">in</span> area1 area2 area3 返回
                <span class="token keyword">do</span>
                    <span class="token builtin class-name">echo</span> <span class="token variable">$area</span>
                    <span class="token keyword">case</span> <span class="token variable">$area</span> <span class="token keyword">in</span>
                    返回<span class="token punctuation">)</span>
                        <span class="token builtin class-name">break</span>
                    <span class="token punctuation">;</span><span class="token punctuation">;</span>
                    *<span class="token punctuation">)</span>
                        <span class="token builtin class-name">echo</span> <span class="token string">&quot;对<span class="token variable">$area</span>操作&quot;</span>
                    <span class="token punctuation">;</span><span class="token punctuation">;</span>
                    <span class="token keyword">esac</span>
                <span class="token keyword">done</span>
            <span class="token punctuation">;</span><span class="token punctuation">;</span>
            <span class="token keyword">esac</span>
        <span class="token keyword">done</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shift" tabindex="-1"><a class="header-anchor" href="#shift" aria-hidden="true">#</a> shift</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./cs.sh <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>
<span class="token comment">#!/bin/sh</span>
<span class="token keyword">until</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;第一个参数为: <span class="token variable">$1</span> 参数个数为: <span class="token variable">$#</span>&quot;</span>
    <span class="token comment">#shift 命令执行前变量 $1 的值在shift命令执行后不可用</span>
    <span class="token builtin class-name">shift</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getopts" tabindex="-1"><a class="header-anchor" href="#getopts" aria-hidden="true">#</a> getopts</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>
<span class="token keyword">while</span> <span class="token builtin class-name">getopts</span> :ab: name
<span class="token keyword">do</span>
    <span class="token keyword">case</span> <span class="token variable">$name</span> <span class="token keyword">in</span>
    a<span class="token punctuation">)</span>
        <span class="token assign-left variable">aflag</span><span class="token operator">=</span><span class="token number">1</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    b<span class="token punctuation">)</span>
        <span class="token assign-left variable">bflag</span><span class="token operator">=</span><span class="token number">1</span>
        <span class="token assign-left variable">bval</span><span class="token operator">=</span><span class="token variable">$OPTARG</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token punctuation">\\</span>?<span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;USAGE:<span class="token variable"><span class="token variable">\`</span><span class="token function">basename</span> $0<span class="token variable">\`</span></span> [-a] [-b value]&quot;</span>
        <span class="token builtin class-name">exit</span>  <span class="token number">1</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
<span class="token keyword">done</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-z</span> <span class="token variable">$aflag</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;option -a specified&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$aflag</span>&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token environment constant">$OPTIND</span>&quot;</span>
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-z</span> <span class="token variable">$bflag</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span>  <span class="token string">&quot;option -b specified&quot;</span>
    <span class="token builtin class-name">echo</span>  <span class="token string">&quot;<span class="token variable">$bflag</span>&quot;</span>
    <span class="token builtin class-name">echo</span>  <span class="token string">&quot;<span class="token variable">$bval</span>&quot;</span>
    <span class="token builtin class-name">echo</span>  <span class="token string">&quot;<span class="token environment constant">$OPTIND</span>&quot;</span>
<span class="token keyword">fi</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;here  <span class="token environment constant">$OPTIND</span>&quot;</span>
<span class="token builtin class-name">shift</span> <span class="token variable"><span class="token variable">$((</span>$OPTIND <span class="token operator">-</span><span class="token number">1</span><span class="token variable">))</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token environment constant">$OPTIND</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot; <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">shift</span> <span class="token punctuation">$((</span><span class="token environment constant">$OPTIND</span> -1<span class="token punctuation">))</span><span class="token variable">\`</span></span>  &quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tclsh" tabindex="-1"><a class="header-anchor" href="#tclsh" aria-hidden="true">#</a> tclsh</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> foo <span class="token string">&quot;a bc&quot;</span>                   <span class="token comment"># 定义变量</span>
<span class="token builtin class-name">set</span> b <span class="token punctuation">{</span><span class="token variable">$a</span><span class="token punctuation">}</span><span class="token punctuation">;</span>                      <span class="token comment"># 转义  b的值为&quot; $a &quot; ,而不是变量结果</span>
<span class="token builtin class-name">set</span> a <span class="token number">3</span><span class="token punctuation">;</span> incr a <span class="token number">3</span><span class="token punctuation">;</span>               <span class="token comment"># 数字的自增.  将a加3,如果要减3,则为 incr a –3;</span>
<span class="token builtin class-name">set</span> c <span class="token punctuation">[</span>expr <span class="token number">20</span>/5<span class="token punctuation">]</span><span class="token punctuation">;</span>               <span class="token comment"># 计算  c的值为4</span>
puts <span class="token variable">$foo</span><span class="token punctuation">;</span>                       <span class="token comment"># 打印变量</span>
<span class="token builtin class-name">set</span> qian<span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span> f<span class="token punctuation">;</span>                 <span class="token comment"># 定义数组</span>
<span class="token builtin class-name">set</span> qian<span class="token punctuation">(</span><span class="token number">1,1</span>,1<span class="token punctuation">)</span> fs<span class="token punctuation">;</span>              <span class="token comment"># 多维数组</span>
parray qian<span class="token punctuation">;</span>                     <span class="token comment"># 打印数组的所有信息</span>
string length <span class="token variable">$qian</span><span class="token punctuation">;</span>             <span class="token comment"># 将返回变量qian的长度</span>
string option string1 string2<span class="token punctuation">;</span>   <span class="token comment"># 字符相关串操作</span>
<span class="token comment"># option 的操作选项:</span>
<span class="token comment"># compare           按照字典的排序方式进行比较。根据string1 &lt;,=,&gt;string2分别返回-1,0,1</span>
<span class="token comment"># first             返回string2中第一次出现string1的位置，如果没有出现string1则返回-1</span>
<span class="token comment"># last              和first相反</span>
<span class="token comment"># trim              从string1中删除开头和结尾的出现在string2中的字符</span>
<span class="token comment"># tolower           返回string1中的所有字符被转换为小写字符后的新字符串</span>
<span class="token comment"># toupper           返回string1中的所有字符串转换为大写后的字符串</span>
<span class="token comment"># length            返回string1的长度</span>
<span class="token builtin class-name">set</span> a <span class="token number">1</span><span class="token punctuation">;</span><span class="token keyword">while</span> <span class="token punctuation">{</span><span class="token variable">$a</span> <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">}</span> <span class="token punctuation">{</span> <span class="token builtin class-name">set</span> a <span class="token punctuation">[</span>incr a <span class="token number">1</span><span class="token punctuation">;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>puts <span class="token variable">$a</span>    <span class="token comment"># 判断变量a小于3既循环</span>
<span class="token keyword">for</span> <span class="token punctuation">{</span>initialization<span class="token punctuation">}</span> <span class="token punctuation">{</span>condition<span class="token punctuation">}</span> <span class="token punctuation">{</span>increment<span class="token punctuation">}</span> <span class="token punctuation">{</span>body<span class="token punctuation">}</span>      <span class="token comment"># 初始化变量,条件,增量,具体操作</span>
<span class="token keyword">for</span> <span class="token punctuation">{</span>set i <span class="token number">0</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token variable">$i</span> <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>incr i<span class="token punctuation">}</span> <span class="token punctuation">{</span>puts <span class="token variable">$i</span><span class="token punctuation">;</span><span class="token punctuation">}</span>              <span class="token comment"># 将打印出0到9</span>
<span class="token keyword">if</span> <span class="token punctuation">{</span> 表达式 <span class="token punctuation">}</span> <span class="token punctuation">{</span>
        <span class="token comment">#运算;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">#其他运算;</span>
<span class="token punctuation">}</span>
switch <span class="token variable">$x</span> <span class="token punctuation">{</span>
    字符串1 <span class="token punctuation">{</span> 操作1 <span class="token punctuation">;</span><span class="token punctuation">}</span>
    字符串2 <span class="token punctuation">{</span> 操作2 <span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
foreach element <span class="token punctuation">{</span><span class="token number">0</span> m n b v<span class="token punctuation">}</span> <span class="token punctuation">{</span>
<span class="token comment"># 将在一组变元中进行循环，并且每次都将执行他的循环体</span>
        switch <span class="token variable">$element</span> <span class="token punctuation">{</span>
                <span class="token comment"># 判断element的值</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="expect交互" tabindex="-1"><a class="header-anchor" href="#expect交互" aria-hidden="true">#</a> expect交互</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> 
exp_continue         <span class="token comment"># 多个spawn命令时并行</span>
interact             <span class="token comment"># 执行完成后保持交互状态，把控制权交给控制台</span>
<span class="token function">expect</span> <span class="token string">&quot;password:&quot;</span>   <span class="token comment"># 判断关键字符</span>
send <span class="token string">&quot;passwd<span class="token entity" title="\\r">\\r</span>&quot;</span>      <span class="token comment"># 执行交互动作，与手工输入密码的动作等效。字符串结尾加&quot;\\r&quot;</span>

ssh后sudo<span class="token punctuation">{</span>

    <span class="token comment">#!/bin/bash</span>
    <span class="token comment">#sudo注释下行允许后台运行</span>
    <span class="token comment">#Defaults requiretty</span>
    <span class="token comment">#sudo去掉!允许远程</span>
    <span class="token comment">#Defaults !visiblepw</span>

    /usr/bin/expect <span class="token parameter variable">-c</span> <span class="token string">&#39;
    set timeout 5
    spawn ssh -o StrictHostKeyChecking=no xuesong1@192.168.42.128 &quot;sudo grep xuesong1 /etc/passwd&quot;
    expect {
        &quot;passphrase&quot; {
            send_user &quot;sshkey\\n&quot;
            send &quot;xuesong\\r&quot;;
            expect {
                &quot;sudo&quot; {
                send_user &quot;sudo\\n&quot;
                send &quot;xuesong\\r&quot;
                interact
                }
                eof {
                send_user &quot;sudo eof\\n&quot;
                }
            }
        }
        &quot;password:&quot; {
            send_user &quot;ssh\\n&quot;
            send &quot;xuesong\\r&quot;;
            expect {
                &quot;sudo&quot; {
                send_user &quot;sudo\\n&quot;
                send &quot;xuesong\\r&quot;
                interact
                }
                eof {
                send_user &quot;sudo eof\\n&quot;
                }
            }
        }
        &quot;sudo&quot; {
                send_user &quot;sudo\\n&quot;
                send &quot;xuesong\\r&quot;
                interact
                }
        eof {
            send_user &quot;ssh eof\\n&quot;
        }
    }
    &#39;</span>

<span class="token punctuation">}</span>

ssh执行命令操作<span class="token punctuation">{</span>

    /usr/bin/expect <span class="token parameter variable">-c</span> <span class="token string">&quot;
    proc jiaohu {} {
        send_user expect_start
        expect {
            password {
                send <span class="token variable">\${RemotePasswd}</span><span class="token entity" title="\\r">\\r</span>;
                send_user expect_eof
                expect {
                    <span class="token entity" title="\\&quot;">\\&quot;</span>does not exist<span class="token entity" title="\\&quot;">\\&quot;</span> {
                        send_user expect_failure
                        exit 10
                    }
                    password {
                        send_user expect_failure
                        exit 5
                    }
                    Password {
                        send <span class="token variable">\${RemoteRootPasswd}</span><span class="token entity" title="\\r">\\r</span>;
                        send_user expect_eof
                        expect {
                            incorrect {
                                send_user expect_failure
                                exit 6
                            }
                            eof
                        }
                    }
                    eof
                }
            }
            passphrase {
                send <span class="token variable">\${KeyPasswd}</span><span class="token entity" title="\\r">\\r</span>;
                send_user expect_eof
                expect {
                    <span class="token entity" title="\\&quot;">\\&quot;</span>does not exist<span class="token entity" title="\\&quot;">\\&quot;</span> {
                        send_user expect_failure
                        exit 10
                    }
                    passphrase{
                        send_user expect_failure
                        exit 7
                    }
                    Password {
                        send <span class="token variable">\${RemoteRootPasswd}</span><span class="token entity" title="\\r">\\r</span>;
                        send_user expect_eof
                        expect {
                            incorrect {
                                send_user expect_failure
                                exit 6
                            }
                            eof
                        }
                    }
                    eof
                }
            }
            Password {
                send <span class="token variable">\${RemoteRootPasswd}</span><span class="token entity" title="\\r">\\r</span>;
                send_user expect_eof
                expect {
                    incorrect {
                        send_user expect_failure
                        exit 6
                    }
                    eof
                }
            }
            <span class="token entity" title="\\&quot;">\\&quot;</span>No route to host<span class="token entity" title="\\&quot;">\\&quot;</span> {
                send_user expect_failure
                exit 4
            }
            <span class="token entity" title="\\&quot;">\\&quot;</span>Invalid argument<span class="token entity" title="\\&quot;">\\&quot;</span> {
                send_user expect_failure
                exit 8
            }
            <span class="token entity" title="\\&quot;">\\&quot;</span>Connection refused<span class="token entity" title="\\&quot;">\\&quot;</span> {
                send_user expect_failure
                exit 9
            }
            <span class="token entity" title="\\&quot;">\\&quot;</span>does not exist<span class="token entity" title="\\&quot;">\\&quot;</span> {
                send_user expect_failure
                exit 10
            }

            <span class="token entity" title="\\&quot;">\\&quot;</span>Connection timed out<span class="token entity" title="\\&quot;">\\&quot;</span> {
                send_user expect_failure
                exit 11
            }
            timeout {
                send_user expect_failure
                exit 3
            }
            eof
        }
    }
    set timeout <span class="token variable">$TimeOut</span>
    switch <span class="token variable">$1</span> {
        Ssh_Cmd {
            spawn ssh -t -p <span class="token variable">$Port</span> -o StrictHostKeyChecking=no <span class="token variable">$RemoteUser</span>@<span class="token variable">$Ip</span> /bin/su - root -c <span class="token entity" title="\\\\">\\\\</span><span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$Cmd</span><span class="token entity" title="\\\\">\\\\</span><span class="token entity" title="\\&quot;">\\&quot;</span>
            jiaohu
        }
        Ssh_Script {
            spawn scp -P <span class="token variable">$Port</span> -o StrictHostKeyChecking=no <span class="token variable">$ScriptPath</span> <span class="token variable">$RemoteUser</span>@<span class="token variable">$Ip</span>:/tmp/<span class="token variable">\${ScriptPath<span class="token operator">##</span>*<span class="token operator">/</span>}</span>;
            jiaohu
            spawn ssh -t -p <span class="token variable">$Port</span> -o StrictHostKeyChecking=no <span class="token variable">$RemoteUser</span>@<span class="token variable">$Ip</span> /bin/su - root -c  <span class="token entity" title="\\\\">\\\\</span><span class="token entity" title="\\&quot;">\\&quot;</span>/bin/sh /tmp/<span class="token variable">\${ScriptPath<span class="token operator">##</span>*<span class="token operator">/</span>}</span><span class="token entity" title="\\\\">\\\\</span><span class="token entity" title="\\&quot;">\\&quot;</span> ;
            jiaohu
        }
        Scp_File {
            spawn scp -P <span class="token variable">$Port</span> -o StrictHostKeyChecking=no -r <span class="token variable">$ScpPath</span> <span class="token variable">$RemoteUser</span>@<span class="token variable">$Ip</span>:<span class="token variable">\${ScpRemotePath}</span>;
            jiaohu
        }
    }
    &quot;</span>
    <span class="token assign-left variable">state</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $?<span class="token variable">\`</span></span>

<span class="token punctuation">}</span>

交互双引号引用较长变量<span class="token punctuation">{</span>

    <span class="token comment">#!/bin/bash</span>
    <span class="token assign-left variable">RemoteUser</span><span class="token operator">=</span>xuesong12
    <span class="token assign-left variable">Ip</span><span class="token operator">=</span><span class="token number">192.168</span>.1.2
    <span class="token assign-left variable">RemotePasswd</span><span class="token operator">=</span>xuesong
    <span class="token assign-left variable">Cmd</span><span class="token operator">=</span><span class="token string">&quot;/bin/echo &quot;</span><span class="token variable">$PubKey</span><span class="token string">&quot; &gt; &quot;</span><span class="token variable">$RemoteKey</span><span class="token string">&quot;/authorized_keys&quot;</span>

    /usr/bin/expect <span class="token parameter variable">-c</span> <span class="token string">&quot;
    set timeout 10
    spawn ssh -o StrictHostKeyChecking=no <span class="token variable">$RemoteUser</span>@<span class="token variable">$Ip</span> {<span class="token variable">$Cmd</span>};
    expect {
        password: {
            send_user RemotePasswd<span class="token entity" title="\\n">\\n</span>
            send <span class="token variable">\${RemotePasswd}</span><span class="token entity" title="\\r">\\r</span>;
            interact;
        }
        eof {
            send_user eof<span class="token entity" title="\\n">\\n</span>
        }
    }
    &quot;</span>

<span class="token punctuation">}</span>

telnet交互<span class="token punctuation">{</span>

    <span class="token comment">#!/bin/bash</span>
    <span class="token assign-left variable">Ip</span><span class="token operator">=</span><span class="token string">&quot;10.0.1.53&quot;</span>
    <span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token string">&quot;\\{\\&#39;method\\&#39;\\:\\&#39;doLogin\\&#39;\\,\\&#39;params\\&#39;\\:\\{\\&#39;uName\\&#39;\\:\\&#39;bobbietest\\&#39;\\}&quot;</span>
    /usr/bin/expect -c<span class="token string">&quot;
            set timeout 15
            spawn telnet <span class="token variable">\${Ip}</span> 8000
            expect &quot;</span>Escape<span class="token string">&quot;
            send &quot;</span><span class="token variable">\${a}</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>r<span class="token string">&quot;
            expect {
                    -re &quot;</span><span class="token punctuation">\\</span>&quot;err.*none<span class="token punctuation">\\</span>&quot;<span class="token string">&quot; {
                            exit 0
                    }
                    timeout {
                            exit 1
                    }
                    eof {
                            exit 2
                    }
            }
    &quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$?</span>

<span class="token punctuation">}</span>

模拟ssh登录<span class="token punctuation">{</span>
    <span class="token comment">#好处:可加载环境变量</span>

    <span class="token comment">#!/bin/bash</span>
    <span class="token assign-left variable">Ip</span><span class="token operator">=</span><span class="token string">&#39;192.168.1.6&#39;</span>            <span class="token comment"># 循环就行</span>
    <span class="token assign-left variable">RemoteUser</span><span class="token operator">=</span><span class="token string">&#39;user&#39;</span>           <span class="token comment"># 普通用户</span>
    <span class="token assign-left variable">RemotePasswd</span><span class="token operator">=</span><span class="token string">&#39;userpasswd&#39;</span>   <span class="token comment"># 普通用户的密码</span>
    <span class="token assign-left variable">RemoteRootPasswd</span><span class="token operator">=</span><span class="token string">&#39;rootpasswd&#39;</span>
    /usr/bin/expect <span class="token parameter variable">-c</span> <span class="token string">&quot;
    set timeout -1
    spawn ssh -t -p <span class="token variable">$Port</span> -o StrictHostKeyChecking=no <span class="token variable">$RemoteUser</span>@<span class="token variable">$Ip</span>
    expect {
        password {
            send_user RemotePasswd
            send <span class="token variable">\${RemotePasswd}</span><span class="token entity" title="\\r">\\r</span>;
            expect {
                <span class="token entity" title="\\&quot;">\\&quot;</span>does not exist<span class="token entity" title="\\&quot;">\\&quot;</span> {
                    send_user <span class="token entity" title="\\&quot;">\\&quot;</span>root user does not exist<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\&quot;">\\&quot;</span>
                    exit 10
                }
                password {
                    send_user <span class="token entity" title="\\&quot;">\\&quot;</span>user passwd error<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\&quot;">\\&quot;</span>
                    exit 5
                }
                Last {
                    send <span class="token entity" title="\\&quot;">\\&quot;</span>su - batch<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\&quot;">\\&quot;</span>
                    expect {
                        Password {
                            send_user RemoteRootPasswd
                            send <span class="token variable">\${RemoteRootPasswd}</span><span class="token entity" title="\\r">\\r</span>;
                            expect {
                                <span class="token entity" title="\\&quot;">\\&quot;</span>]#<span class="token entity" title="\\&quot;">\\&quot;</span> {
                                    send <span class="token entity" title="\\&quot;">\\&quot;</span>sh /tmp/update.sh update<span class="token entity" title="\\n">\\n</span> <span class="token entity" title="\\&quot;">\\&quot;</span>
                                    expect {
                                        <span class="token entity" title="\\&quot;">\\&quot;</span>]#<span class="token entity" title="\\&quot;">\\&quot;</span> {
                                            send_user <span class="token variable">\${Ip}</span>_Update_Done<span class="token entity" title="\\n">\\n</span>
                                        }
                                        eof
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        <span class="token entity" title="\\&quot;">\\&quot;</span>No route to host<span class="token entity" title="\\&quot;">\\&quot;</span> {
            send_user <span class="token entity" title="\\&quot;">\\&quot;</span>host not found<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\&quot;">\\&quot;</span>
            exit 4
        }
        <span class="token entity" title="\\&quot;">\\&quot;</span>Invalid argument<span class="token entity" title="\\&quot;">\\&quot;</span> {
            send_user <span class="token entity" title="\\&quot;">\\&quot;</span>incorrect parameter<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\&quot;">\\&quot;</span>
            exit 8
        }
        <span class="token entity" title="\\&quot;">\\&quot;</span>Connection refused<span class="token entity" title="\\&quot;">\\&quot;</span> {
            send_user <span class="token entity" title="\\&quot;">\\&quot;</span>invalid port parameters<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\&quot;">\\&quot;</span>
            exit 9
        }
        <span class="token entity" title="\\&quot;">\\&quot;</span>does not exist<span class="token entity" title="\\&quot;">\\&quot;</span> {
            send_user <span class="token entity" title="\\&quot;">\\&quot;</span>root user does not exist<span class="token entity" title="\\&quot;">\\&quot;</span>
            exit 10
        }
        timeout {
            send_user <span class="token entity" title="\\&quot;">\\&quot;</span>connection timeout <span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\&quot;">\\&quot;</span>
            exit 3
        }
        eof
    }
    &quot;</span>
    <span class="token assign-left variable">state</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $?<span class="token variable">\`</span></span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h2><h3 id="从1叠加到100" tabindex="-1"><a class="header-anchor" href="#从1叠加到100" aria-hidden="true">#</a> 从1叠加到100</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> $<span class="token punctuation">[</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> +<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">100</span><span class="token punctuation">}</span><span class="token variable">)</span></span><span class="token punctuation">]</span>
<span class="token builtin class-name">echo</span> $<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token number">100</span>+1<span class="token punctuation">)</span>*<span class="token punctuation">(</span><span class="token number">100</span>/2<span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token function">seq</span> <span class="token parameter variable">-s</span> <span class="token string">&#39;+&#39;</span> <span class="token number">100</span> <span class="token operator">|</span><span class="token function">bc</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断参数是否为空-空退出并打印null" tabindex="-1"><a class="header-anchor" href="#判断参数是否为空-空退出并打印null" aria-hidden="true">#</a> 判断参数是否为空-空退出并打印null</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">#!/bin/sh</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$1</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token variable">\${1<span class="token operator">:?</span>&quot;null&quot;}</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$name</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环数组" tabindex="-1"><a class="header-anchor" href="#循环数组" aria-hidden="true">#</a> 循环数组</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>\${#o[<span class="token operator">*</span>]}<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">\${o<span class="token punctuation">[</span>$i<span class="token punctuation">]</span>}</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断路径" tabindex="-1"><a class="header-anchor" href="#判断路径" aria-hidden="true">#</a> 判断路径</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> /root/Desktop/text/123 <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;找到了123&quot;</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> /root/Desktop/text <span class="token punctuation">]</span>
    <span class="token keyword">then</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;找到了text&quot;</span>
    <span class="token keyword">else</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;没找到text&quot;</span>
    <span class="token keyword">fi</span>
<span class="token keyword">else</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;没找到123文件夹&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="找出出现次数最多" tabindex="-1"><a class="header-anchor" href="#找出出现次数最多" aria-hidden="true">#</a> 找出出现次数最多</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span> <span class="token function">file</span><span class="token operator">|</span><span class="token function">sort</span> <span class="token operator">|</span><span class="token function">uniq</span> -c<span class="token operator">|</span><span class="token function">sort</span> <span class="token parameter variable">-k1r</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="判断脚本参数是否正确" tabindex="-1"><a class="header-anchor" href="#判断脚本参数是否正确" aria-hidden="true">#</a> 判断脚本参数是否正确</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./test.sh  <span class="token parameter variable">-p</span> <span class="token number">123</span> <span class="token parameter variable">-P</span> <span class="token number">3306</span> <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-u</span> root
<span class="token comment">#!/bin/sh</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-ne</span> <span class="token number">8</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;USAGE: <span class="token variable">$0</span> -u user -p passwd -P port -h host&quot;</span>
    <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>

<span class="token keyword">while</span> <span class="token builtin class-name">getopts</span> :u:p:P:h: name
<span class="token keyword">do</span>
    <span class="token keyword">case</span> <span class="token variable">$name</span> <span class="token keyword">in</span>
    u<span class="token punctuation">)</span>
        <span class="token assign-left variable">mysql_user</span><span class="token operator">=</span><span class="token variable">$OPTARG</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    p<span class="token punctuation">)</span>
        <span class="token assign-left variable">mysql_passwd</span><span class="token operator">=</span><span class="token variable">$OPTARG</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    P<span class="token punctuation">)</span>
        <span class="token assign-left variable">mysql_port</span><span class="token operator">=</span><span class="token variable">$OPTARG</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    h<span class="token punctuation">)</span>
        <span class="token assign-left variable">mysql_host</span><span class="token operator">=</span><span class="token variable">$OPTARG</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;USAGE: <span class="token variable">$0</span> -u user -p passwd -P port -h host&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">1</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
<span class="token keyword">done</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">$mysql_user</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">$mysql_passwd</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">$mysql_port</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">$mysql_host</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;USAGE: <span class="token variable">$0</span> -u user -p passwd -P port -h host&quot;</span>
    <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span> <span class="token variable">$mysql_user</span> <span class="token variable">$mysql_passwd</span> <span class="token variable">$mysql_port</span>  <span class="token variable">$mysql_host</span>
<span class="token comment">#结果 root 123 3306 127.0.0.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="正则匹配邮箱" tabindex="-1"><a class="header-anchor" href="#正则匹配邮箱" aria-hidden="true">#</a> 正则匹配邮箱</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>        ^<span class="token punctuation">[</span>_a-z0-9-<span class="token punctuation">]</span>+<span class="token punctuation">(</span><span class="token punctuation">\\</span>.<span class="token punctuation">[</span>_a-z0-9-<span class="token punctuation">]</span>+<span class="token punctuation">)</span>*@<span class="token punctuation">[</span>a-z0-9-<span class="token punctuation">]</span>+<span class="token punctuation">(</span><span class="token punctuation">\\</span>.<span class="token punctuation">[</span>a-z0-9-<span class="token punctuation">]</span>+<span class="token punctuation">)</span>*<span class="token punctuation">(</span><span class="token punctuation">\\</span>.<span class="token punctuation">[</span>a-z<span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">2,4</span><span class="token punctuation">}</span><span class="token punctuation">)</span>$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="打印表格" tabindex="-1"><a class="header-anchor" href="#打印表格" aria-hidden="true">#</a> 打印表格</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>
<span class="token function">clear</span>
<span class="token function">awk</span> <span class="token string">&#39;BEGIN{
print &quot;+--------------------+--------------------+&quot;;
printf &quot;|%-20s|%-20s|\\n&quot;,&quot;Name&quot;,&quot;Number&quot;;
print &quot;+--------------------+--------------------+&quot;;
}&#39;</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">grep</span> <span class="token string">&quot;^[A-Z]&quot;</span> a.txt <span class="token operator">|</span><span class="token function">sort</span> +1 <span class="token parameter variable">-n</span> <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $1&quot;:&quot;$2}&#39;</span><span class="token variable">\`</span></span>
<span class="token comment">#cat a.txt |sort +1 -n |while read list</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">list</span> <span class="token keyword">in</span> <span class="token variable">$a</span>
<span class="token keyword">do</span>
    <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $list <span class="token operator">|</span><span class="token function">awk</span> -F: <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">\`</span></span>
    <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $list <span class="token operator">|</span><span class="token function">awk</span> -F: <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
    <span class="token function">awk</span> <span class="token string">&#39;BEGIN{printf &quot;|%-20s|%-20s|\\n&quot;,&quot;&#39;</span>&quot;<span class="token variable">$name</span><span class="token string">&quot;&#39;&quot;</span>,<span class="token string">&quot;&#39;&quot;</span><span class="token variable">$number</span><span class="token string">&quot;&#39;&quot;</span><span class="token punctuation">;</span>
    print <span class="token string">&quot;+--------------------+--------------------+&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token string">&#39;
done
awk &#39;</span>BEGIN<span class="token punctuation">{</span>
print <span class="token string">&quot;              *** The End ***              &quot;</span>
print <span class="token string">&quot;                                           &quot;</span>
<span class="token punctuation">}</span>&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断日期是否合法" tabindex="-1"><a class="header-anchor" href="#判断日期是否合法" aria-hidden="true">#</a> 判断日期是否合法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>
<span class="token keyword">while</span> <span class="token builtin class-name">read</span> a
<span class="token keyword">do</span>
    <span class="token keyword">if</span> <span class="token builtin class-name">echo</span> <span class="token variable">$a</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-q</span> <span class="token string">&quot;-&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token variable">$a</span> +%Y%m%d <span class="token operator">&gt;</span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
    <span class="token keyword">then</span>
    <span class="token keyword">if</span> <span class="token builtin class-name">echo</span> <span class="token variable">$a</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;^[0-9]\\{4\\}-[01][0-9]-[0-3][0-9]$&#39;</span>
    <span class="token keyword">then</span>
        <span class="token builtin class-name">break</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;您输入的日期不合法，请从新输入！&quot;</span>
    <span class="token keyword">fi</span>
    <span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;您输入的日期不合法，请从新输入！&quot;</span>
    <span class="token keyword">fi</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;日期为<span class="token variable">$a</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打印日期段所有日期" tabindex="-1"><a class="header-anchor" href="#打印日期段所有日期" aria-hidden="true">#</a> 打印日期段所有日期</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">qsrq</span><span class="token operator">=</span><span class="token number">20010101</span>
<span class="token assign-left variable">jsrq</span><span class="token operator">=</span><span class="token number">20010227</span>
<span class="token assign-left variable">n</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token operator">&gt;</span>tmp
<span class="token keyword">while</span> <span class="token builtin class-name">:</span><span class="token punctuation">;</span><span class="token keyword">do</span>
<span class="token assign-left variable">current</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y%m%d -d<span class="token string">&quot;<span class="token variable">$n</span> day <span class="token variable">$qsrq</span>&quot;</span><span class="token variable">)</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$current</span> <span class="token operator">==</span> <span class="token variable">$jsrq</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$current</span> <span class="token operator">&gt;&gt;</span>tmp<span class="token punctuation">;</span><span class="token builtin class-name">break</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$current</span> <span class="token operator">&gt;&gt;</span>tmp
    <span class="token variable"><span class="token punctuation">((</span>n<span class="token operator">++</span><span class="token punctuation">))</span></span>
<span class="token keyword">fi</span>
<span class="token keyword">done</span>
<span class="token assign-left variable">rq</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">awk</span> <span class="token string">&#39;NR==1{print}&#39;</span> tmp<span class="token variable">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数学计算的小算法" tabindex="-1"><a class="header-anchor" href="#数学计算的小算法" aria-hidden="true">#</a> 数学计算的小算法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>
<span class="token assign-left variable">A</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">B</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$A</span> <span class="token parameter variable">-le</span> <span class="token number">10</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token assign-left variable">SUM</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $A <span class="token punctuation">\\</span>* $B<span class="token variable">\`</span></span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$SUM</span>&quot;</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$A</span> <span class="token operator">=</span> <span class="token number">10</span> <span class="token punctuation">]</span>
    <span class="token keyword">then</span>
        <span class="token assign-left variable">B</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $B + <span class="token number">1</span><span class="token variable">\`</span></span>
        <span class="token assign-left variable">A</span><span class="token operator">=</span><span class="token number">1</span>
    <span class="token keyword">fi</span>
    <span class="token assign-left variable">A</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $A + <span class="token number">1</span><span class="token variable">\`</span></span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多行合并" tabindex="-1"><a class="header-anchor" href="#多行合并" aria-hidden="true">#</a> 多行合并</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;{N;s/\\n//}&#39;</span> <span class="token function">file</span>                   <span class="token comment"># 将两行合并一行(去掉换行符)</span>
<span class="token function">awk</span> <span class="token string">&#39;{printf(NR%2!=0)?$0&quot; &quot;:$0&quot; \\n&quot;}&#39;</span>   <span class="token comment"># 将两行合并一行</span>
<span class="token function">awk</span> <span class="token string">&#39;{printf&quot;%s &quot;,$0}&#39;</span>                  <span class="token comment"># 将所有行合并</span>
<span class="token function">awk</span> <span class="token string">&#39;{if (NR%4==0){print $0} else {printf&quot;%s &quot;,$0}}&#39;</span> <span class="token function">file</span>    <span class="token comment"># 将4行合并为一行(可扩展)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="横竖转换" tabindex="-1"><a class="header-anchor" href="#横竖转换" aria-hidden="true">#</a> 横竖转换</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> a.txt <span class="token operator">|</span> <span class="token function">xargs</span>           <span class="token comment"># 列转行</span>
<span class="token function">cat</span> a.txt <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-n1</span>       <span class="token comment"># 行转列</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="竖行转横行" tabindex="-1"><a class="header-anchor" href="#竖行转横行" aria-hidden="true">#</a> 竖行转横行</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token function">file</span><span class="token operator">|</span><span class="token function">tr</span> <span class="token string">&#39;\\n&#39;</span> <span class="token string">&#39; &#39;</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> <span class="token function">file</span><span class="token variable">)</span></span>

<span class="token comment">#!/bin/sh</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> <span class="token function">file</span><span class="token variable">\`</span></span>
<span class="token keyword">do</span>
        <span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable">\${a}</span><span class="token string">&quot; &quot;</span><span class="token variable">\${i}</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="取用户的根目录" tabindex="-1"><a class="header-anchor" href="#取用户的根目录" aria-hidden="true">#</a> 取用户的根目录</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#! /bin/bash</span>
<span class="token keyword">while</span> <span class="token builtin class-name">read</span> name pass uid gid gecos home shell
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$home</span>
<span class="token keyword">done</span> <span class="token operator">&lt;</span> /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="远程打包" tabindex="-1"><a class="header-anchor" href="#远程打包" aria-hidden="true">#</a> 远程打包</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-n</span> <span class="token variable">$ip</span> <span class="token string">&#39;find &#39;</span><span class="token variable">$path</span><span class="token string">&#39; /data /opt -type f  -name &quot;*.sh&quot; -or -name &quot;*.py&quot; -or -name &quot;*.pl&quot; |xargs tar zcvpf /tmp/data_backup.tar.gz&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="把汉字转成encode格式" tabindex="-1"><a class="header-anchor" href="#把汉字转成encode格式" aria-hidden="true">#</a> 把汉字转成encode格式</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> 论坛 <span class="token operator">|</span> <span class="token function">tr</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token operator">|</span> xxd <span class="token parameter variable">-i</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;s/ 0x/%/g&quot;</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token parameter variable">-d</span> <span class="token string">&quot; ,<span class="token entity" title="\\n">\\n</span>&quot;</span>
%c2%db%cc%b3
<span class="token builtin class-name">echo</span> 论坛 <span class="token operator">|</span> <span class="token function">tr</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token operator">|</span> xxd <span class="token parameter variable">-i</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;s/ 0x/%/g&quot;</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token parameter variable">-d</span> <span class="token string">&quot; ,<span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">&quot;[a-f]&quot;</span> <span class="token string">&quot;[A-F]&quot;</span>  <span class="token comment"># 大写的</span>
%C2%DB%CC%B3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="把目录带有大写字母的文件名改为全部小写" tabindex="-1"><a class="header-anchor" href="#把目录带有大写字母的文件名改为全部小写" aria-hidden="true">#</a> 把目录带有大写字母的文件名改为全部小写</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">f</span> <span class="token keyword">in</span> *<span class="token punctuation">;</span><span class="token keyword">do</span>
    <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $f <span class="token operator">|</span><span class="token function">tr</span> <span class="token string">&quot;[A-Z]&quot;</span> <span class="token string">&quot;[a-z]&quot;</span><span class="token variable">\`</span></span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找连续多行-在不连续的行前插入" tabindex="-1"><a class="header-anchor" href="#查找连续多行-在不连续的行前插入" aria-hidden="true">#</a> 查找连续多行，在不连续的行前插入</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#/bin/bash</span>
<span class="token assign-left variable">lastrow</span><span class="token operator">=</span>null
<span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token function">cat</span> incl<span class="token operator">|</span><span class="token keyword">while</span> <span class="token builtin class-name">read</span> line
<span class="token keyword">do</span>
<span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $i + <span class="token number">1</span><span class="token variable">\`</span></span>
<span class="token keyword">if</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$lastrow</span>&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;#include &lt;[A-Z].h&gt;&quot;</span>
<span class="token keyword">then</span>
    <span class="token keyword">if</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$line</span>&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span>  <span class="token string">&quot;#include &lt;[A-Z].h&gt;&quot;</span>
    <span class="token keyword">then</span>
        <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;&#39;</span><span class="token variable">$i</span><span class="token string">&#39;i\\\\/\\/All header files are include&#39;</span> incl
        <span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $i + <span class="token number">1</span><span class="token variable">\`</span></span>
    <span class="token keyword">fi</span>
<span class="token keyword">fi</span>
<span class="token assign-left variable">lastrow</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$line</span>&quot;</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询数据库其它引擎" tabindex="-1"><a class="header-anchor" href="#查询数据库其它引擎" aria-hidden="true">#</a> 查询数据库其它引擎</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#/bin/bash</span>
<span class="token assign-left variable">path1</span><span class="token operator">=</span>/data/mysql/data/
<span class="token assign-left variable">dbpasswd</span><span class="token operator">=</span>db123
<span class="token comment">#MyISAM或InnoDB</span>
<span class="token assign-left variable">engine</span><span class="token operator">=</span>InnoDB

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token variable">$path1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>

<span class="token assign-left variable">dir</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span> <span class="token parameter variable">-p</span> $path1 <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;/\\/$/&#39;</span><span class="token operator">|</span><span class="token function">awk</span> -F<span class="token string">&#39;/&#39;</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">\`</span></span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">db</span> <span class="token keyword">in</span> <span class="token variable">$dir</span>
    <span class="token keyword">do</span>
    <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>mysql <span class="token parameter variable">-uroot</span> -p$dbpasswd <span class="token parameter variable">-A</span> <span class="token parameter variable">-S</span> <span class="token string">&quot;<span class="token variable">$path1</span>&quot;</span>mysql.sock <span class="token parameter variable">-e</span> <span class="token string">&quot;use <span class="token variable">\${db}</span>;show table status;&quot;</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-c</span> $engine<span class="token variable">\`</span></span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$number</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${db}</span>&quot;</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">done</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="批量修改数据库引擎" tabindex="-1"><a class="header-anchor" href="#批量修改数据库引擎" aria-hidden="true">#</a> 批量修改数据库引擎</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#/bin/bash</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">db</span> <span class="token keyword">in</span> <span class="token builtin class-name">test</span> test1 test3
<span class="token keyword">do</span>
    <span class="token assign-left variable">tables</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-pdb123</span> <span class="token parameter variable">-A</span> <span class="token parameter variable">-S</span> /data/mysql/data/mysql.sock <span class="token parameter variable">-e</span> <span class="token string">&quot;use <span class="token variable">$db</span>;show tables;&quot;</span> <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;NR != 1{print}&#39;</span><span class="token variable">\`</span></span>

    <span class="token keyword">for</span> <span class="token for-or-select variable">table</span> <span class="token keyword">in</span> <span class="token variable">$tables</span>
    <span class="token keyword">do</span>
        mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-pdb123</span> <span class="token parameter variable">-A</span> <span class="token parameter variable">-S</span> /data/mysql/data/mysql.sock <span class="token parameter variable">-e</span> <span class="token string">&quot;use <span class="token variable">$db</span>;alter table <span class="token variable">$table</span> engine=MyISAM;&quot;</span>
    <span class="token keyword">done</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将shell取到的数据插入mysql数据库" tabindex="-1"><a class="header-anchor" href="#将shell取到的数据插入mysql数据库" aria-hidden="true">#</a> 将shell取到的数据插入mysql数据库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql -u<span class="token variable">$username</span> -p<span class="token variable">$passwd</span> -h<span class="token variable">$dbhost</span> -P<span class="token variable">$dbport</span> <span class="token parameter variable">-A</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;
use <span class="token variable">$dbname</span>;
insert into data values (&#39;&#39;,&#39;<span class="token variable">$ip</span>&#39;,&#39;<span class="token variable">$date</span>&#39;,&#39;<span class="token variable">$time</span>&#39;,&#39;<span class="token variable">$data</span>&#39;)
&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="两日期间隔天数" tabindex="-1"><a class="header-anchor" href="#两日期间隔天数" aria-hidden="true">#</a> 两日期间隔天数</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">D1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;20070409&#39;</span> +<span class="token string">&quot;%s&quot;</span><span class="token variable">\`</span></span>
<span class="token assign-left variable">D2</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;20070304 &#39;</span> +<span class="token string">&quot;%s&quot;</span><span class="token variable">\`</span></span>
<span class="token assign-left variable">D3</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$D1 <span class="token operator">-</span> $D2<span class="token variable">))</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span>$D3<span class="token operator">/</span><span class="token number">60</span><span class="token operator">/</span><span class="token number">60</span><span class="token operator">/</span><span class="token number">24</span><span class="token variable">))</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="while执行ssh只循环一次" tabindex="-1"><a class="header-anchor" href="#while执行ssh只循环一次" aria-hidden="true">#</a> while执行ssh只循环一次</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> -    <span class="token comment"># 让cat读连接文件stdin的信息</span>
<span class="token function">seq</span> <span class="token number">10</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> line<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">ssh</span> localhost <span class="token string">&quot;cat -&quot;</span><span class="token punctuation">;</span> <span class="token keyword">done</span>        <span class="token comment"># 显示的9次是被ssh吃掉的</span>
<span class="token function">seq</span> <span class="token number">10</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> line<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">ssh</span> <span class="token parameter variable">-n</span> localhost <span class="token string">&quot;cat -&quot;</span><span class="token punctuation">;</span> <span class="token keyword">done</span>     <span class="token comment"># ssh加上-n参数可避免只循环一次</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ssh批量执行命令" tabindex="-1"><a class="header-anchor" href="#ssh批量执行命令" aria-hidden="true">#</a> ssh批量执行命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#版本1</span>
<span class="token comment">#!/bin/bash</span>
<span class="token keyword">while</span> <span class="token builtin class-name">read</span> line
<span class="token keyword">do</span>
<span class="token assign-left variable">Ip</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $line<span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">\`</span></span>
<span class="token assign-left variable">Passwd</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $line<span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
<span class="token function">ssh</span> <span class="token parameter variable">-n</span> localhost <span class="token string">&quot;cat -&quot;</span>
sshpass <span class="token parameter variable">-p</span> <span class="token string">&quot;<span class="token variable">$Passwd</span>&quot;</span> <span class="token function">ssh</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no root@<span class="token variable">$Ip</span> <span class="token string">&quot;id&quot;</span>
done<span class="token operator">&lt;</span>iplist.txt

<span class="token comment">#版本2</span>
<span class="token comment">#!/bin/bash</span>
<span class="token assign-left variable">Iplist</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span> iplist.txt<span class="token variable">\`</span></span>
<span class="token keyword">for</span> <span class="token for-or-select variable">Ip</span> <span class="token keyword">in</span> <span class="token variable">$Iplist</span>
<span class="token keyword">do</span>
<span class="token assign-left variable">Passwd</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">awk</span> <span class="token string">&#39;/&#39;</span>$Ip<span class="token string">&#39;/{print $2}&#39;</span> iplist.txt<span class="token variable">\`</span></span>
sshpass <span class="token parameter variable">-p</span> <span class="token string">&quot;<span class="token variable">$Passwd</span>&quot;</span> <span class="token function">ssh</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no root@<span class="token variable">$Ip</span> <span class="token string">&quot;id&quot;</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在同一位置打印字符" tabindex="-1"><a class="header-anchor" href="#在同一位置打印字符" aria-hidden="true">#</a> 在同一位置打印字符</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-ne</span> <span class="token string">&quot;<span class="token entity" title="\\t">\\t</span>&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">seq</span> <span class="token parameter variable">-w</span> <span class="token number">100</span> <span class="token parameter variable">-1</span> <span class="token number">1</span><span class="token variable">\`</span></span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-ne</span> <span class="token string">&quot;<span class="token variable">$i</span><span class="token entity" title="\\b">\\b</span><span class="token entity" title="\\b">\\b</span><span class="token entity" title="\\b">\\b</span>&quot;</span><span class="token punctuation">;</span>      <span class="token comment"># 关键\\b退格</span>
    <span class="token function">sleep</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多进程后台并发简易控制" tabindex="-1"><a class="header-anchor" href="#多进程后台并发简易控制" aria-hidden="true">#</a> 多进程后台并发简易控制</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>        <span class="token comment">#!/bin/bash</span>
        <span class="token function-name function">test</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token builtin class-name">echo</span> <span class="token variable">$a</span>
            <span class="token function">sleep</span> <span class="token number">5</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token for-or-select variable">a</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">seq</span> <span class="token number">1</span> <span class="token number">30</span><span class="token variable">\`</span></span>
        <span class="token keyword">do</span>
            <span class="token builtin class-name">test</span> <span class="token operator">&amp;</span>
            <span class="token builtin class-name">echo</span> <span class="token variable">$!</span>
            <span class="token variable"><span class="token punctuation">((</span>num<span class="token operator">++</span><span class="token punctuation">))</span></span>
            <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$num</span> <span class="token parameter variable">-eq</span> <span class="token number">6</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;wait...&quot;</span>
            <span class="token function">wait</span>
            <span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token number">0</span>
            <span class="token keyword">fi</span>
        <span class="token keyword">done</span>
        <span class="token function">wait</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shell并发" tabindex="-1"><a class="header-anchor" href="#shell并发" aria-hidden="true">#</a> shell并发</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">tmpfile</span><span class="token operator">=</span><span class="token variable">$$</span>.fifo   <span class="token comment"># 创建管道名称</span>
<span class="token function">mkfifo</span> <span class="token variable">$tmpfile</span>   <span class="token comment"># 创建管道</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">4</span>&lt;&gt;</span><span class="token variable">$tmpfile</span>  <span class="token comment"># 创建文件标示4，以读写方式操作管道$tmpfile</span>
<span class="token function">rm</span> <span class="token variable">$tmpfile</span>       <span class="token comment"># 将创建的管道文件清除</span>
<span class="token assign-left variable">thred</span><span class="token operator">=</span><span class="token number">4</span>           <span class="token comment"># 指定并发个数</span>
<span class="token assign-left variable">seq</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span> <span class="token number">9</span> <span class="token number">21</span> <span class="token number">22</span> <span class="token number">23</span> <span class="token number">24</span> <span class="token number">25</span> <span class="token number">31</span> <span class="token number">32</span> <span class="token number">33</span> <span class="token number">34</span> <span class="token number">35</span><span class="token punctuation">)</span> <span class="token comment"># 创建任务列表</span>

<span class="token comment"># 为并发线程创建相应个数的占位</span>
<span class="token punctuation">{</span>
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>\${thred}<span class="token punctuation">;</span>i<span class="token operator">++</span> <span class="token punctuation">))</span></span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span><span class="token punctuation">;</span>  <span class="token comment"># 因为read命令一次读取一行，一个echo默认输出一个换行符，所以为每个线程输出一个占位换行</span>
<span class="token keyword">done</span>
<span class="token punctuation">}</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;4</span>      <span class="token comment"># 将占位信息写入管道</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">id</span> <span class="token keyword">in</span> <span class="token variable">\${seq}</span>  <span class="token comment"># 从任务列表 seq 中按次序获取每一个任务</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">read</span>  <span class="token comment"># 读取一行，即fd4中的一个占位符</span>
    <span class="token punctuation">(</span>./ur_command <span class="token variable">\${id}</span><span class="token punctuation">;</span><span class="token builtin class-name">echo</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;4</span> <span class="token punctuation">)</span> <span class="token operator">&amp;</span>   <span class="token comment"># 在后台执行任务ur_command 并将任务 \${id} 赋给当前任务；任务执行完后在fd4种写入一个占位符</span>
<span class="token keyword">done</span> <span class="token operator">&lt;</span><span class="token file-descriptor important">&amp;4</span>    <span class="token comment"># 指定fd4为整个for的标准输入</span>
<span class="token function">wait</span>        <span class="token comment"># 等待所有在此shell脚本中启动的后台任务完成</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">4</span>&gt;&amp;</span>-   <span class="token comment"># 关闭管道</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shell并发函数" tabindex="-1"><a class="header-anchor" href="#shell并发函数" aria-hidden="true">#</a> shell并发函数</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">ConCurrentCmd</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">#进程数</span>
    <span class="token assign-left variable">Thread</span><span class="token operator">=</span><span class="token number">30</span>

    <span class="token comment">#列表文件</span>
    <span class="token assign-left variable">CurFileName</span><span class="token operator">=</span>iplist.txt

    <span class="token comment">#定义fifo文件</span>
    <span class="token assign-left variable">FifoFile</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$$</span>.fifo&quot;</span>

    <span class="token comment">#新建一个fifo类型的文件</span>
    <span class="token function">mkfifo</span> <span class="token variable">$FifoFile</span>

    <span class="token comment">#将fd6与此fifo类型文件以读写的方式连接起来</span>
    <span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">6</span>&lt;&gt;</span><span class="token variable">$FifoFile</span>
    <span class="token function">rm</span> <span class="token variable">$FifoFile</span>

    <span class="token comment">#事实上就是在文件描述符6中放置了$Thread个回车符</span>
    <span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>$Thread<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token keyword">do</span> <span class="token builtin class-name">echo</span><span class="token punctuation">;</span><span class="token keyword">done</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;6</span>

    <span class="token comment">#此后标准输入将来自fd5</span>
    <span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">5</span>&lt;</span><span class="token variable">$CurFileName</span>

    <span class="token comment">#开始循环读取文件列表中的行</span>
    <span class="token assign-left variable">Count</span><span class="token operator">=</span><span class="token number">0</span>
    <span class="token keyword">while</span> <span class="token builtin class-name">read</span> <span class="token parameter variable">-u5</span> line
    <span class="token keyword">do</span>
        <span class="token builtin class-name">read</span> <span class="token parameter variable">-u6</span>
        <span class="token builtin class-name">let</span> <span class="token assign-left variable">Count</span><span class="token operator">+=</span><span class="token number">1</span>
        <span class="token comment"># 此处定义一个子进程放到后台执行</span>
        <span class="token comment"># 一个read -u6命令执行一次,就从fd6中减去一个回车符，然后向下执行</span>
        <span class="token comment"># fd6中没有回车符的时候,就停在这了,从而实现了进程数量控制</span>
        <span class="token punctuation">{</span>
            <span class="token builtin class-name">echo</span> <span class="token variable">$Count</span>

            <span class="token comment">#这段代码框就是执行具体的操作了</span>
            <span class="token keyword">function</span>

            <span class="token builtin class-name">echo</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;6</span>
            <span class="token comment">#当进程结束以后,再向fd6中追加一个回车符,即补上了read -u6减去的那个</span>
        <span class="token punctuation">}</span> <span class="token operator">&amp;</span>
    <span class="token keyword">done</span>

    <span class="token comment">#等待所有后台子进程结束</span>
    <span class="token function">wait</span>

    <span class="token comment">#关闭fd6</span>
    <span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">6</span>&gt;&amp;</span>-

    <span class="token comment">#关闭fd5</span>
    <span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">5</span>&gt;&amp;</span>-
<span class="token punctuation">}</span>

并发例子<span class="token punctuation">{</span>

    <span class="token comment">#!/bin/bash</span>

    <span class="token assign-left variable">pnum</span><span class="token operator">=</span><span class="token number">3</span>

    <span class="token function-name function">task</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$u</span> start&quot;</span>
        <span class="token function">sleep</span> <span class="token number">5</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$u</span> done&quot;</span>
    <span class="token punctuation">}</span>

    <span class="token assign-left variable">FifoFile</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$$</span>.fifo&quot;</span>
    <span class="token function">mkfifo</span> <span class="token variable">$FifoFile</span>
    <span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">6</span>&lt;&gt;</span><span class="token variable">$FifoFile</span>
    <span class="token function">rm</span> <span class="token variable">$FifoFile</span>
    
    <span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>$pnum<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token keyword">do</span> <span class="token builtin class-name">echo</span><span class="token punctuation">;</span><span class="token keyword">done</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;6</span>

    <span class="token keyword">for</span> <span class="token for-or-select variable">u</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">seq</span> <span class="token number">1</span> <span class="token number">20</span><span class="token variable">\`</span></span>
    <span class="token keyword">do</span>
        <span class="token builtin class-name">read</span> <span class="token parameter variable">-u6</span>
        <span class="token punctuation">{</span>
            task
            <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${u}</span> 次成功&quot;</span> <span class="token operator">||</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${u}</span> 次失败&quot;</span>
            <span class="token builtin class-name">echo</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;6</span>
        <span class="token punctuation">}</span> <span class="token operator">&amp;</span>
    <span class="token keyword">done</span>
    <span class="token function">wait</span>
    <span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">6</span>&gt;&amp;</span>-

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function-name function">ip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;a 1&quot;</span><span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;$1==&quot;&#39;</span>&quot;<span class="token variable">$1</span><span class="token string">&quot;&#39;&quot;</span><span class="token punctuation">{</span>print <span class="token variable">$2</span><span class="token punctuation">}</span>&#39;
<span class="token punctuation">}</span>
<span class="token assign-left variable">web</span><span class="token operator">=</span>a
<span class="token function">ip</span> <span class="token variable">$web</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="检测软件包是否存在" tabindex="-1"><a class="header-anchor" href="#检测软件包是否存在" aria-hidden="true">#</a> 检测软件包是否存在</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-q</span> dialog <span class="token operator">&gt;</span>/dev/null
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$?</span>&quot;</span> <span class="token parameter variable">-ge</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;install dialog,Please wait...&quot;</span>
    yum <span class="token parameter variable">-y</span> <span class="token function">install</span> dialog
    <span class="token function">rpm</span> <span class="token parameter variable">-q</span> dialog <span class="token operator">&gt;</span>/dev/null
    <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-ge</span> <span class="token number">1</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;dialog installation failure,exit&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;dialog done&quot;</span>
    <span class="token builtin class-name">read</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="游戏维护菜单-修改配置文件" tabindex="-1"><a class="header-anchor" href="#游戏维护菜单-修改配置文件" aria-hidden="true">#</a> 游戏维护菜单-修改配置文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">conf</span><span class="token operator">=</span>serverlist.xml
<span class="token assign-left variable">AreaList</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;&quot;&#39;</span> <span class="token string">&#39;/&lt;s/{print $2}&#39;</span> $conf<span class="token variable">\`</span></span>

<span class="token keyword">select</span> <span class="token for-or-select variable">area</span> <span class="token keyword">in</span> <span class="token variable">$AreaList</span> 全部 退出
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$area</span>
    <span class="token keyword">case</span> <span class="token variable">$area</span> <span class="token keyword">in</span>
    退出<span class="token punctuation">)</span>
        <span class="token builtin class-name">exit</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span>
        <span class="token keyword">select</span> <span class="token for-or-select variable">operate</span> <span class="token keyword">in</span> <span class="token string">&quot;修改版本号&quot;</span> <span class="token string">&quot;添加维护中&quot;</span> <span class="token string">&quot;删除维护中&quot;</span> <span class="token string">&quot;返回菜单&quot;</span>
        <span class="token keyword">do</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
            <span class="token builtin class-name">echo</span> <span class="token variable">$operate</span>
            <span class="token keyword">case</span> <span class="token variable">$operate</span> <span class="token keyword">in</span>
            修改版本号<span class="token punctuation">)</span>
                <span class="token builtin class-name">echo</span> 请输入版本号
                <span class="token keyword">while</span> <span class="token builtin class-name">read</span> version
                <span class="token keyword">do</span>
                    <span class="token keyword">if</span> <span class="token builtin class-name">echo</span> <span class="token variable">$version</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-w</span> <span class="token number">10</span><span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span>
                    <span class="token keyword">then</span>
                        <span class="token builtin class-name">break</span>
                    <span class="token keyword">fi</span>
                    <span class="token builtin class-name">echo</span> 请从新输入正确的版本号
                <span class="token keyword">done</span>
                <span class="token keyword">case</span> <span class="token variable">$area</span> <span class="token keyword">in</span>
                全部<span class="token punctuation">)</span>
                    <span class="token keyword">case</span> <span class="token variable">$version</span> <span class="token keyword">in</span>
                    <span class="token number">101</span>*<span class="token punctuation">)</span>
                        <span class="token builtin class-name">echo</span> <span class="token string">&quot;请确认操作对 <span class="token variable">$area</span> 体验区 <span class="token variable">$operate</span>&quot;</span>
                        <span class="token builtin class-name">read</span>
                        <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/101[0-9][0-9][0-9][0-9][0-9][0-9]/&#39;</span><span class="token variable">$version</span><span class="token string">&#39;/&#39;</span> <span class="token variable">$conf</span>
                    <span class="token punctuation">;</span><span class="token punctuation">;</span>
                    <span class="token number">102</span>*<span class="token punctuation">)</span>
                        <span class="token builtin class-name">echo</span> <span class="token string">&quot;请确认操作对 <span class="token variable">$area</span> 正式区 <span class="token variable">$operate</span>&quot;</span>
                        <span class="token builtin class-name">read</span>
                        <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/102[0-9][0-9][0-9][0-9][0-9][0-9]/&#39;</span><span class="token variable">$version</span><span class="token string">&#39;/&#39;</span> <span class="token variable">$conf</span>
                    <span class="token punctuation">;</span><span class="token punctuation">;</span>
                    <span class="token keyword">esac</span>
                <span class="token punctuation">;</span><span class="token punctuation">;</span>
                *<span class="token punctuation">)</span>
                    <span class="token assign-left variable">type</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;&quot;&#39;</span> <span class="token string">&#39;/&#39;</span>$area<span class="token string">&#39;/{print $14}&#39;</span> $conf <span class="token operator">|</span><span class="token function">cut</span> -c1-3<span class="token variable">\`</span></span>
                    <span class="token assign-left variable">readtype</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $version <span class="token operator">|</span><span class="token function">cut</span> -c1-3<span class="token variable">\`</span></span>
                    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$type</span> <span class="token operator">!=</span> <span class="token variable">$readtype</span> <span class="token punctuation">]</span>
                    <span class="token keyword">then</span>
                        <span class="token builtin class-name">echo</span> <span class="token string">&quot;版本号不对应，请从新操作&quot;</span>
                        <span class="token builtin class-name">continue</span>
                    <span class="token keyword">fi</span>

                    <span class="token builtin class-name">echo</span> <span class="token string">&quot;请确认操作对 <span class="token variable">$area</span> 区 <span class="token variable">$operate</span>&quot;</span>
                    <span class="token builtin class-name">read</span>

                    <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;&quot;&#39;</span> <span class="token string">&#39;/&#39;</span><span class="token variable">$area</span><span class="token string">&#39;/{print $12}&#39;</span> <span class="token variable">$conf</span> <span class="token operator">|</span><span class="token function">xargs</span> <span class="token parameter variable">-i</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token string">&#39;/s/10[12][0-9][0-9][0-9][0-9][0-9][0-9]/&#39;</span><span class="token variable">$version</span><span class="token string">&#39;/&#39;</span> <span class="token variable">$conf</span>
                <span class="token punctuation">;</span><span class="token punctuation">;</span>
                <span class="token keyword">esac</span>
            <span class="token punctuation">;</span><span class="token punctuation">;</span>
            添加维护中<span class="token punctuation">)</span>
                <span class="token keyword">case</span> <span class="token variable">$area</span> <span class="token keyword">in</span>
                全部<span class="token punctuation">)</span>
                    <span class="token builtin class-name">echo</span> <span class="token string">&quot;请确认操作对 <span class="token variable">$area</span> 区 <span class="token variable">$operate</span>&quot;</span>
                    <span class="token builtin class-name">read</span>
                    <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;&quot;&#39;</span> <span class="token string">&#39;/&lt;s/{print $2}&#39;</span> <span class="token variable">$conf</span> <span class="token operator">|</span><span class="token function">xargs</span> <span class="token parameter variable">-i</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/&#39;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token string">&#39;/&amp;维护中/&#39;</span> <span class="token variable">$conf</span>
                <span class="token punctuation">;</span><span class="token punctuation">;</span>
                *<span class="token punctuation">)</span>
                    <span class="token builtin class-name">echo</span> <span class="token string">&quot;请确认操作对 <span class="token variable">$area</span> 区 <span class="token variable">$operate</span>&quot;</span>
                    <span class="token builtin class-name">read</span>
                    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/&#39;</span><span class="token variable">$area</span><span class="token string">&#39;/&amp;维护中/&#39;</span> <span class="token variable">$conf</span>
                <span class="token punctuation">;</span><span class="token punctuation">;</span>
                <span class="token keyword">esac</span>
            <span class="token punctuation">;</span><span class="token punctuation">;</span>
            删除维护中<span class="token punctuation">)</span>
                <span class="token keyword">case</span> <span class="token variable">$area</span> <span class="token keyword">in</span>
                全部<span class="token punctuation">)</span>
                    <span class="token builtin class-name">echo</span> <span class="token string">&quot;请确认操作对 <span class="token variable">$area</span> 区 <span class="token variable">$operate</span>&quot;</span>
                    <span class="token builtin class-name">read</span>
                    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/维护中//&#39;</span> <span class="token variable">$conf</span>
                <span class="token punctuation">;</span><span class="token punctuation">;</span>
                *<span class="token punctuation">)</span>
                    <span class="token builtin class-name">echo</span> <span class="token string">&quot;请确认操作对 <span class="token variable">$area</span> 区 <span class="token variable">$operate</span>&quot;</span>
                    <span class="token builtin class-name">read</span>
                    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;/&#39;</span><span class="token variable">$area</span><span class="token string">&#39;/s/维护中//&#39;</span> <span class="token variable">$conf</span>
                <span class="token punctuation">;</span><span class="token punctuation">;</span>
                <span class="token keyword">esac</span>
            <span class="token punctuation">;</span><span class="token punctuation">;</span>
            返回菜单<span class="token punctuation">)</span>
                <span class="token builtin class-name">break</span>
            <span class="token punctuation">;</span><span class="token punctuation">;</span>
            <span class="token keyword">esac</span>
        <span class="token keyword">done</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;回车重新选择区&quot;</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="keepalive剔除后端服务" tabindex="-1"><a class="header-anchor" href="#keepalive剔除后端服务" aria-hidden="true">#</a> keepalive剔除后端服务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#行数请自定义,默认8行</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> X<span class="token variable">$2</span> <span class="token operator">==</span> X <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;error: IP null&quot;</span>
    <span class="token builtin class-name">read</span>
    <span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>
<span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>
del<span class="token punctuation">)</span>
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;/real_server.*&#39;</span><span class="token variable">$2</span><span class="token string">&#39;.*8888/,+8 s/^/#/&#39;</span> /etc/keepalived/keepalived.conf
    /etc/init.d/keepalived reload
<span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token function">add</span><span class="token punctuation">)</span>
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;/real_server.*&#39;</span><span class="token variable">$2</span><span class="token string">&#39;.*8888/,+8 s/^#//&#39;</span> /etc/keepalived/keepalived.conf
    /etc/init.d/keepalived reload
<span class="token punctuation">;</span><span class="token punctuation">;</span>
*<span class="token punctuation">)</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Parameter error&quot;</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="抓取系统中负载最高的进程" tabindex="-1"><a class="header-anchor" href="#抓取系统中负载最高的进程" aria-hidden="true">#</a> 抓取系统中负载最高的进程</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>C
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/sbin:/usr/sbin:/bin:/usr/bin
<span class="token assign-left variable">interval</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">length</span><span class="token operator">=</span><span class="token number">86400</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">seq</span> <span class="token number">1</span> <span class="token punctuation">$(</span>expr $<span class="token punctuation">{</span>length<span class="token punctuation">}</span> / $<span class="token punctuation">{</span>interval<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token variable">)</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
<span class="token function">date</span>
<span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>C <span class="token function">ps</span> <span class="token parameter variable">-eT</span> -o%cpu,pid,tid,ppid,comm <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> CPU <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-r</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-20</span>
<span class="token function">date</span>
<span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>C <span class="token function">cat</span> /proc/loadavg
<span class="token punctuation">{</span> <span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>C <span class="token function">ps</span> <span class="token parameter variable">-eT</span> -o%cpu,pid,tid,ppid,comm <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;s/^ *//&#39;</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token parameter variable">-s</span> <span class="token string">&#39; &#39;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> CPU <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-r</span> <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&#39; &#39;</span> <span class="token parameter variable">-f</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token function">xargs</span> -I<span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;{} + &quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39; 0&#39;</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token function">bc</span> <span class="token parameter variable">-l</span>
<span class="token function">sleep</span> <span class="token variable">\${interval}</span>
<span class="token keyword">done</span>
<span class="token function">fuser</span> <span class="token parameter variable">-k</span> <span class="token variable">$0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="申诉中国反垃圾邮件联盟黑名单" tabindex="-1"><a class="header-anchor" href="#申诉中国反垃圾邮件联盟黑名单" aria-hidden="true">#</a> 申诉中国反垃圾邮件联盟黑名单</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">IpList</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">awk</span> <span class="token string">&#39;$1!~&quot;^#&quot;&amp;&amp;$1!=&quot;&quot;{print $1}&#39;</span> host.list<span class="token variable">\`</span></span>

<span class="token assign-left variable">QueryAdd</span><span class="token operator">=</span><span class="token string">&#39;http://www.anti-spam.org.cn/Rbl/Query/Result&#39;</span>
<span class="token assign-left variable">ComplaintAdd</span><span class="token operator">=</span><span class="token string">&#39;http://www.anti-spam.org.cn/Rbl/Getout/Submit&#39;</span>

<span class="token assign-left variable">CONTENT</span><span class="token operator">=</span><span class="token string">&#39;我们是一家正规的XXX。xxxxxxx。恳请将我们的发送服务器IP移出黑名单。谢谢！
处理措施：
1.XXXX。
2.XXXX。&#39;</span>
<span class="token assign-left variable">CORP</span><span class="token operator">=</span><span class="token string">&#39;abc.com&#39;</span>
<span class="token assign-left variable">WWW</span><span class="token operator">=</span><span class="token string">&#39;www.abc.cm&#39;</span>
<span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token string">&#39;def&#39;</span>
<span class="token assign-left variable">MAIL</span><span class="token operator">=</span><span class="token string">&#39;def@163.com.cn&#39;</span>
<span class="token assign-left variable">TEL</span><span class="token operator">=</span><span class="token string">&#39;010-50000000&#39;</span>
<span class="token assign-left variable">LEVEL</span><span class="token operator">=</span><span class="token string">&#39;0&#39;</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">Ip</span> <span class="token keyword">in</span> <span class="token variable">$IpList</span>
<span class="token keyword">do</span>
    <span class="token assign-left variable">Status</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">curl</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;IP=<span class="token variable">$Ip</span>&quot;</span> $QueryAdd <span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&#39;Getout/ShowForm?IP=&#39;</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-wc</span> <span class="token string">&#39;申诉脱离&#39;</span><span class="token variable">\`</span></span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$Status</span> <span class="token parameter variable">-ge</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token assign-left variable">IpStatus</span><span class="token operator">=</span><span class="token string">&quot;黑名单中&quot;</span>
        <span class="token assign-left variable">results</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">curl</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;IP=<span class="token variable">\${Ip}</span>&amp;CONTENT=<span class="token variable">\${CONTENT}</span>&amp;CORP=<span class="token variable">\${CORP}</span>&amp;WWW=<span class="token variable">\${WWW}</span>&amp;NAME=<span class="token variable">\${NAME}</span>&amp;MAIL=<span class="token variable">\${MAIL}</span>&amp;TEL=<span class="token variable">\${TEL}</span>&amp;LEVEL=<span class="token variable">\${LEVEL}</span>&quot;</span> $ComplaintAdd <span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;您的黑名单脱离申请已提交|该IP的脱离申请已被他人提交|申请由于近期内有被拒绝的记录&#39;</span><span class="token variable">\`</span></span>
        <span class="token builtin class-name">echo</span> <span class="token variable">$results</span>
        <span class="token keyword">if</span> <span class="token builtin class-name">echo</span> <span class="token variable">$results</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;您的黑名单脱离申请已提交&#39;</span>  <span class="token operator">&gt;</span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
        <span class="token keyword">then</span>
            <span class="token assign-left variable">complaint</span><span class="token operator">=</span><span class="token string">&#39;申诉成功&#39;</span>
        <span class="token keyword">elif</span> <span class="token builtin class-name">echo</span> <span class="token variable">$results</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;该IP的脱离申请已被他人提交&#39;</span>  <span class="token operator">&gt;</span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
        <span class="token keyword">then</span>
            <span class="token assign-left variable">complaint</span><span class="token operator">=</span><span class="token string">&#39;申诉重复&#39;</span>
        <span class="token keyword">elif</span> <span class="token builtin class-name">echo</span> <span class="token variable">$results</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;申请由于近期内有被拒绝的记录&#39;</span>  <span class="token operator">&gt;</span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
        <span class="token keyword">then</span>
            <span class="token assign-left variable">complaint</span><span class="token operator">=</span><span class="token string">&#39;申诉拒绝&#39;</span>
        <span class="token keyword">else</span>
            <span class="token assign-left variable">complaint</span><span class="token operator">=</span><span class="token string">&#39;异常&#39;</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">else</span>
        <span class="token assign-left variable">IpStatus</span><span class="token operator">=</span><span class="token string">&#39;正常&#39;</span>
        <span class="token assign-left variable">complaint</span><span class="token operator">=</span><span class="token string">&#39;无需申诉&#39;</span>
    <span class="token keyword">fi</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$Ip</span>    <span class="token variable">$IpStatus</span>    <span class="token variable">$complaint</span>&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y%m%d_%H%M%S<span class="token variable">)</span></span>.log
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="web-server-in-awk" tabindex="-1"><a class="header-anchor" href="#web-server-in-awk" aria-hidden="true">#</a> Web Server in Awk</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#gawk -f file</span>
BEGIN <span class="token punctuation">{</span>
    x        <span class="token operator">=</span> <span class="token number">1</span>                         <span class="token comment"># script exits if x &lt; 1</span>
    port     <span class="token operator">=</span> <span class="token number">8080</span>                      <span class="token comment"># port number</span>
    <span class="token function">host</span>     <span class="token operator">=</span> <span class="token string">&quot;/inet/tcp/&quot;</span> port <span class="token string">&quot;/0/0&quot;</span>  <span class="token comment"># host string</span>
    url      <span class="token operator">=</span> <span class="token string">&quot;http://localhost:&quot;</span> port  <span class="token comment"># server url</span>
    status   <span class="token operator">=</span> <span class="token number">200</span>                       <span class="token comment"># 200 == OK</span>
    reason   <span class="token operator">=</span> <span class="token string">&quot;OK&quot;</span>                      <span class="token comment"># server response</span>
    RS <span class="token operator">=</span> ORS <span class="token operator">=</span> <span class="token string">&quot;<span class="token entity" title="\\r">\\r</span><span class="token entity" title="\\n">\\n</span>&quot;</span>                    <span class="token comment"># header line terminators</span>
    doc      <span class="token operator">=</span> Setup<span class="token punctuation">(</span><span class="token punctuation">)</span>                   <span class="token comment"># html document</span>
    len      <span class="token operator">=</span> length<span class="token punctuation">(</span>doc<span class="token punctuation">)</span> + length<span class="token punctuation">(</span>ORS<span class="token punctuation">)</span> <span class="token comment"># length of document</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$1</span> <span class="token operator">==</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">)</span> RunApp<span class="token punctuation">(</span>substr<span class="token punctuation">(</span><span class="token variable">$2</span>, <span class="token number">2</span><span class="token punctuation">))</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span> x<span class="token punctuation">)</span> <span class="token builtin class-name">break</span>
        print <span class="token string">&quot;HTTP/1.0&quot;</span>, status, reason <span class="token operator">|&amp;</span> <span class="token function">host</span>
        print <span class="token string">&quot;Connection: Close&quot;</span>        <span class="token operator">|&amp;</span> <span class="token function">host</span>
        print <span class="token string">&quot;Pragma: no-cache&quot;</span>         <span class="token operator">|&amp;</span> <span class="token function">host</span>
        print <span class="token string">&quot;Content-length:&quot;</span>, len     <span class="token operator">|&amp;</span> <span class="token function">host</span>
        print ORS doc                    <span class="token operator">|&amp;</span> <span class="token function">host</span>
        close<span class="token punctuation">(</span>host<span class="token punctuation">)</span>     <span class="token comment"># close client connection</span>
        <span class="token function">host</span> <span class="token operator">|&amp;</span> getline <span class="token comment"># wait for new client request</span>
    <span class="token punctuation">}</span>
    <span class="token comment"># server terminated...</span>
    doc <span class="token operator">=</span> Bye<span class="token punctuation">(</span><span class="token punctuation">)</span>
    len <span class="token operator">=</span> length<span class="token punctuation">(</span>doc<span class="token punctuation">)</span> + length<span class="token punctuation">(</span>ORS<span class="token punctuation">)</span>
    print <span class="token string">&quot;HTTP/1.0&quot;</span>, status, reason <span class="token operator">|&amp;</span> <span class="token function">host</span>
    print <span class="token string">&quot;Connection: Close&quot;</span>        <span class="token operator">|&amp;</span> <span class="token function">host</span>
    print <span class="token string">&quot;Pragma: no-cache&quot;</span>         <span class="token operator">|&amp;</span> <span class="token function">host</span>
    print <span class="token string">&quot;Content-length:&quot;</span>, len     <span class="token operator">|&amp;</span> <span class="token function">host</span>
    print ORS doc                    <span class="token operator">|&amp;</span> <span class="token function">host</span>
    close<span class="token punctuation">(</span>host<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">Setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    tmp <span class="token operator">=</span> <span class="token string">&quot;&lt;html&gt;\\
    &lt;head&gt;&lt;title&gt;Simple gawk server&lt;/title&gt;&lt;/head&gt;\\
    &lt;body&gt;\\
    &lt;p&gt;&lt;a href=&quot;</span> url <span class="token string">&quot;/xterm&gt;xterm&lt;/a&gt;\\
    &lt;p&gt;&lt;a href=&quot;</span> url <span class="token string">&quot;/xcalc&gt;xcalc&lt;/a&gt;\\
    &lt;p&gt;&lt;a href=&quot;</span> url <span class="token string">&quot;/xload&gt;xload&lt;/a&gt;\\
    &lt;p&gt;&lt;a href=&quot;</span> url <span class="token string">&quot;/exit&gt;terminate script&lt;/a&gt;\\
    &lt;/body&gt;\\
    &lt;/html&gt;&quot;</span>
    <span class="token builtin class-name">return</span> tmp
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">Bye</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    tmp <span class="token operator">=</span> <span class="token string">&quot;&lt;html&gt;\\
    &lt;head&gt;&lt;title&gt;Simple gawk server&lt;/title&gt;&lt;/head&gt;\\
    &lt;body&gt;&lt;p&gt;Script Terminated...&lt;/body&gt;\\
    &lt;/html&gt;&quot;</span>
    <span class="token builtin class-name">return</span> tmp
<span class="token punctuation">}</span>

<span class="token keyword">function</span> RunApp<span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>app <span class="token operator">==</span> <span class="token string">&quot;xterm&quot;</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>system<span class="token punctuation">(</span><span class="token string">&quot;xterm&amp;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> return<span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>app <span class="token operator">==</span> <span class="token string">&quot;xcalc&quot;</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>system<span class="token punctuation">(</span><span class="token string">&quot;xcalc&amp;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> return<span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>app <span class="token operator">==</span> <span class="token string">&quot;xload&quot;</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>system<span class="token punctuation">(</span><span class="token string">&quot;xload&amp;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> return<span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>app <span class="token operator">==</span> <span class="token string">&quot;exit&quot;</span><span class="token punctuation">)</span>   <span class="token punctuation">{</span>x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="经验" tabindex="-1"><a class="header-anchor" href="#经验" aria-hidden="true">#</a> 经验</h2><p>1.服务上线,在启动注册流量时大量报错, 下游服务摘除,重启后, 上游还用原有的链接去链接, 导致请求失败.</p><p>2.systemd守护的进程,在tmp下找不到对应文件, 配置安全tmp项PrivateTmp改为false PrivateTmp=false</p><p>3.统一服务内部调用关系,一个服务对应一个域名</p><p>4.统一服务服务返回的状态码,报警只需要针对5xx就可以发现问题.</p><p>5.在服务雪崩后,恢复服务,用户可能有大量重试,所以放流量也要小比例放流量,逐步恢复</p><h2 id="原文" tabindex="-1"><a class="header-anchor" href="#原文" aria-hidden="true">#</a> 原文</h2>`,223),k={href:"https://github.com/liquanzhou/ops_doc",target:"_blank",rel:"noopener noreferrer"};function b(g,f){const a=o("ExternalLinkIcon");return p(),l("div",null,[n("div",d,[u,n("p",null,[s("个人在线查询使用，"),n("a",m,[s("原文地址"),e(a)])])]),i("more"),v,n("p",null,[n("a",k,[s("https://github.com/liquanzhou/ops_doc"),e(a)])])])}const q=t(r,[["render",b],["__file","shell.html.vue"]]);export{q as default};
