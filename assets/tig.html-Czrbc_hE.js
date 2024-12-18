import{_ as e,c as t,o,f as c}from"./app-BfCDUtKQ.js";const i="/assets/2024-08-10-22-32-43-D6rr9GuV.png",a={},r=c('<p>简单来说，tig 是 Git 的文本模式界面（text-mode interface for Git）。</p><p>官方文档对它的说明如下：</p><blockquote><p>Tig is an ncurses-based text-mode interface for git. It functions mainly as a Git repository browser, but can also assist in staging changes for commit at chunk level and act as a pager for output from various Git commands.</p></blockquote><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果你使用的是 Windows 系统，那么在安装 Git 时应该已经内置安装了 tig。通常在 <code>&lt;Git&gt;/usr/bin</code> 目录下可以找到。</p><p>其他系统安装命令如下：</p><ul><li>MacOS: <code>brew install tig</code></li><li>Ubuntu/Debian: <code>sudo apt install tig</code></li><li>Fedora/RHEL: <code>sudo dnf install tig</code></li></ul><blockquote><p>tig 布局通常是这样，包含一个状态窗口（最后那行）和一个或多个视图。默认通常只显示一个视图，当然也可以分屏显示多个视图（下面对主视图的介绍中就可以看到分屏显示的情况）。</p></blockquote><p>目前，tig 有 13 种视图，我们从主视图入手，因为它是 tig 的默认视图。</p><p>在终端执行 <code>tig</code> 命令即可进入 tig 的主视图，主视图中显示的是当前工作目录所在的 Git 仓库的提交日志。默认高亮选中第一行，即最后的日志。</p><blockquote><p>注意，这是一个可滚动浏览的提交日志列表，你可以通过快捷键在列表中进行导航。其操作方式类似于 vi，如果你熟悉 vi，那么应该可以快速上手。</p></blockquote><p><code>j</code>/<code>k</code> 键：可以让光标上下移动选中相应的提交日志行。</p><p><code>Enter</code> 键：选中某条提交日志行的状态下按 <code>Enter</code> 键，终端窗口会被分屏，左屏仍显示提交日志列表，右屏显示被选中的提交日志的详细信息。此时，焦点会自动切换到右屏中，即<code>j</code>/<code>k</code> 键将在右屏进行导航。</p><p><code>J</code>/<code>K</code>：如果此时需要在左屏各条提交日志间进行导航，可使用 <code>J</code>/<code>K</code>，右屏内容会随着选中的提交日志而即时改变。</p><blockquote><p>也可以使用上下方向键进行左屏导航。</p></blockquote><p><code>Tab</code> 键：当然，也可以按 <code>Tab</code> 键将焦点切换回左屏，使用 <code>j</code>/<code>k</code> 键进行导航。</p><p><code>Q</code>/<code>Ctrl + c</code>：退出 tig。</p><p>很显然，快捷键很多，而这只是一小部分。因此，通常你不可能记住所有快捷键，好在在 tig 的任一视图你都可以按下 <code>h</code> 键来查看帮助视图，其中完整列出了所有快捷键。</p><blockquote><p>一种操作对应的快捷键通常也不止一个，因此，你不需要记住所有快捷键，只需要选择性记住适合自己习惯的那个。</p></blockquote><p>按 <code>r</code> 键进入引用视图，该视图会显示分支、远程节点和标签。</p><p><code>j</code>/<code>k</code> 键：与主视图类似，上下移动光标导航。</p><p><code>Enter</code> 键：类似地，分屏显示选中引用的提交日志。</p><p><code>C</code> ：当焦点在引用视图上时，会询问是否执行 <code>git checkout</code> 命令，即切换分支；焦点在日志视图上时，会询问是否执行 <code>git cherry-pick</code> 命令。</p><p>按 <code>s</code>/<code>S</code> 键进入状态视图，该视图会分组显示暂存（暂存待提交）、未暂存（修改未暂存）和不跟踪的文件。</p><p><code>j</code>/<code>k</code> 键：仍是上下导航。</p><p><code>Enter</code> 键：如果选中的是暂存或未暂存文件，将分屏显示差异视图；如果选中的是未跟踪的文件，将分屏显示文件内容。</p><p><code>u</code> 键：如果选中的是暂存文件，则会取消暂存，这可能让其回到未暂存或不跟踪的文件列表；如果选中的是未暂存或不跟踪的文件，则会将其暂存。</p><p><code>!</code> 键：选中的是未暂存文件，丢弃文件修改。其他状态文件不能执行该操作。</p><p><code>C</code>：提交。</p><p>日志视图（<code>l</code>）：显示完整日志信息和差异统计。</p><p>差异视图（<code>d</code>）：显示当前工作副本与上次提交之间的差异，如果当前工作副本是干净的，则显示上次提交的更改。</p><p>树视图（<code>t</code>）：以目录方式展示仓库结构，并在其中导航查看文件内容。</p><p>暂存视图（<code>c</code>）：显示（未）暂存文件的更改以及不跟踪的文件的内容。</p><p>贮藏视图（<code>y</code>）：显示贮藏列表。</p><p>正则视图（<code>g</code>）：正则查找，匹配文件名及文本内容。</p><p>分页器视图（<code>p</code>）</p><p>帮助视图（<code>h</code>）：键绑定快速查看帮助。</p><p><a href="https://jonas.github.io/tig/" target="_blank" rel="noopener noreferrer">官方主页 - GitHub Pages</a></p><p><a href="https://jonas.github.io/tig/doc/manual.html" target="_blank" rel="noopener noreferrer">官方手册 - GitHub Pages</a></p><p><a href="https://github.com/jonas/tig/" target="_blank" rel="noopener noreferrer">Tig GitHub Repository</a></p>',40),d=[r];function p(n,s){return o(),t("div",null,d)}const g=e(a,[["render",p],["__file","tig.html.vue"]]),u=JSON.parse(`{"path":"/tools/tig.html","title":"tig介绍和使用","lang":"zh-CN","frontmatter":{"title":"tig介绍和使用","order":100,"index":true,"article":true,"category":["效率"],"tag":["工具"],"description":"简单来说，tig 是 Git 的文本模式界面（text-mode interface for Git）。 官方文档对它的说明如下： Tig is an ncurses-based text-mode interface for git. It functions mainly as a Git repository browser, but can a...","head":[["meta",{"property":"og:url","content":"https://docs.lizili.online/tools/tig.html"}],["meta",{"property":"og:site_name","content":"lzz's Blog"}],["meta",{"property":"og:title","content":"tig介绍和使用"}],["meta",{"property":"og:description","content":"简单来说，tig 是 Git 的文本模式界面（text-mode interface for Git）。 官方文档对它的说明如下： Tig is an ncurses-based text-mode interface for git. It functions mainly as a Git repository browser, but can a..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-10T14:38:44.000Z"}],["meta",{"property":"article:author","content":"z"}],["meta",{"property":"article:tag","content":"工具"}],["meta",{"property":"article:modified_time","content":"2024-08-10T14:38:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"tig介绍和使用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-10T14:38:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"z\\",\\"url\\":\\"https://docs.lizili.online\\"}]}"]]},"headers":[],"git":{"createdTime":1723300724000,"updatedTime":1723300724000,"contributors":[{"name":"lizili","email":"cn.zili.lee@outlook.com","commits":1}]},"readingTime":{"minutes":3.91,"words":1174},"filePathRelative":"tools/tig.md","localizedDate":"2024年8月10日","excerpt":"<p>简单来说，tig 是 Git 的文本模式界面（text-mode interface for Git）。</p>\\n<p>官方文档对它的说明如下：</p>\\n<blockquote>\\n<p>Tig is an ncurses-based text-mode interface for git. It functions mainly as a Git repository browser, but can also assist in staging changes for commit at chunk level and act as a pager for output from various Git commands.</p>\\n</blockquote>","autoDesc":true}`);export{g as comp,u as data};
