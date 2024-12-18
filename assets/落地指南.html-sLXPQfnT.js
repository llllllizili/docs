import{_ as l,c as o,a as e,e as n,h as i,b as a,f as s,o as r,g as p}from"./app-BfCDUtKQ.js";const g="/assets/%E8%BF%90%E7%BB%B4%E6%9E%B6%E6%9E%84%E6%A6%82%E8%A7%88-DH2D1kaB.jpg",c="/assets/git-workflow-BJ5l3x4F.png",d="/assets/kubernetes%E9%83%A8%E7%BD%B2%E6%9E%B6%E6%9E%84-CJn6paAF.jpg",h="/assets/%E4%BB%A3%E7%A0%81%E4%BB%93%E5%BA%93-DHwehiWF.png",f="/assets/git%E7%A0%94%E5%8F%91%E6%B5%81%E7%A8%8B-DNCTjuAf.png",u="/assets/%E8%BF%90%E7%BB%B4%E5%B7%A5%E7%A8%8B%E9%A1%B9%E7%9B%AE-BCGVGA_P.png",b="/assets/git-ci%E6%96%87%E4%BB%B6-qIeZO-0F.png",m="/assets/%E8%BF%90%E7%BB%B4%E9%A1%B9%E7%9B%AE-%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84-Cjm1atOU.png",_="/assets/CI-gradle-atkD16Dq.png",x="/assets/b998489c-2ed2-4cd9-93a0-544469f2d041-DUF3p_1y.png",E="/assets/98469e4b-3b70-4911-b156-9c4b2f83a4be-C93lDyDR.png",k="/assets/fd9cadd0-6413-4e3d-9a90-d5732d14d5b8-CTF0OKls.png",y="/assets/c5464b5a-f7f8-4637-9b79-dc857c10da7c-CThAJh5D.png",B="/assets/5d5707b1-f6b9-4d09-955e-49abf00189b3-BRmxe6yn.png",z="/assets/ff0ff3f8-469b-4244-a9ab-3ce5f9d2588d-BITTWEAk.png",A="/assets/33672f3e-85e7-4ece-8729-2bd296367e02-CbsFMsR6.png",D="/assets/97297a65-9e17-46e9-8a8a-b4a07167b0a0-D9ELRu47.png",C="/assets/d5c191a2-9a87-4a9f-9b5e-5aae0b4085f0-BMkdZxZr.png",v="/assets/4d6dbe80-dcd9-425e-a1be-0610e99bed50-kN2CoNFc.png",O="/assets/246a9de5-c431-4d2e-bf76-61c46d387888-DcTaRLgD.png",G="/assets/d0e81148-fc5f-43d7-9040-b8a28ab1351a-BBmVjSo2.png",w="/assets/720b2764-e541-4877-ac29-8190205747f0-Ffd_3gqj.png",j="/assets/a2810f85-b574-4fdb-9704-8f1c9d608ac8-CTTKTqGh.png",F={},T=a("h1",{id:"",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#"},[a("span")])],-1),R=a("p",null,"通过GitOps的设计与落地，来满足云原生环境下业务的持续交付，建立标准的开发、 测试、生产环境， 形成统一的规范，完善自动化，为业务快速交付赋能。",-1),M=a("h2",{id:"整体架构",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#整体架构"},[a("span",null,"整体架构")])],-1),N=a("figure",null,[a("img",{src:g,alt:"运维架构概览",tabindex:"0",loading:"lazy"}),a("figcaption",null,"运维架构概览")],-1),V=s('<h2 id="整理流程" tabindex="-1"><a class="header-anchor" href="#整理流程"><span>整理流程</span></a></h2><figure><img src="'+c+'" alt="workflow" tabindex="0" loading="lazy"><figcaption>workflow</figcaption></figure><h2 id="基础环境" tabindex="-1"><a class="header-anchor" href="#基础环境"><span>基础环境</span></a></h2><ul><li><p>IDC机房</p><ul><li><p>AMD服务器</p></li><li><p>ARM服务器 <strong>（资源采购&amp;预算）</strong></p></li><li><p>存储服务</p></li></ul></li><li><p>域名</p></li><li><p>证书</p></li></ul><h2 id="kubernetes" tabindex="-1"><a class="header-anchor" href="#kubernetes"><span>Kubernetes</span></a></h2><p>运行环境支持AMD和ARMv8</p><figure><img src="'+d+'" alt="kubernetes部署架构" tabindex="0" loading="lazy"><figcaption>kubernetes部署架构</figcaption></figure><p>原则: <strong>集群隔离</strong>。一个环境一个集群，互不干扰。</p><p>目前已有四套集群，提供给研发、测试、生产以及Hotfix、poc使用。</p><p>预估信创适配需3-4套ARM集群环境。</p><p>后续共需管理7-8个集群环境</p><h1 id="运维管理" tabindex="-1"><a class="header-anchor" href="#运维管理"><span>运维管理</span></a></h1><h2 id="代码仓库" tabindex="-1"><a class="header-anchor" href="#代码仓库"><span>代码仓库</span></a></h2><p>通过流程管理，进行仓库的开通或变更，以产品组进行划分和管理，建立起唯一授信源，为后续Pipeline设计做好基础建设</p><figure><img src="'+h+'" alt="代码仓库" tabindex="0" loading="lazy"><figcaption>代码仓库</figcaption></figure><h2 id="gitops" tabindex="-1"><a class="header-anchor" href="#gitops"><span>GitOps</span></a></h2><p><strong>原则： 采用<strong><strong>一切皆代码</strong></strong>的原则，进行基础服务和业务项目的维护管理。</strong></p><h3 id="流程设计" tabindex="-1"><a class="header-anchor" href="#流程设计"><span>流程设计</span></a></h3><p>从代码提交到项目上线全流程</p><figure><img src="'+f+'" alt="研发Git 管理流程" tabindex="0" loading="lazy"><figcaption>研发Git 管理流程</figcaption></figure><h3 id="仓库规划" tabindex="-1"><a class="header-anchor" href="#仓库规划"><span>仓库规划</span></a></h3><p><strong>运维工程项目</strong></p><figure><img src="'+u+'" alt="运维工程项目" tabindex="0" loading="lazy"><figcaption>运维工程项目</figcaption></figure><ol><li><p><strong>cicd</strong> : 用来做产品的的打包和部署管理, 产线内gitlab-ci直接引用即可，做到研发和运维代码管理上的解耦</p></li><li><p><a href="https://docs.gitlab.com/ee/ci/yaml/gitlab_ci_yaml.html" target="_blank" rel="noopener noreferrer"><strong>gitlab-ci.yaml</strong></a>文件<br><img src="'+b+'" alt="gitlab-ci" loading="lazy"><br> gitlab规定的固定命名文件，用来触发git pipeline，其内容编写遵循gitlab的编排语法，作用类似jenkinsfile</p></li><li><p><strong>gitops</strong>： 用来做运维管理，如基础设施、中间件等</p></li><li><p><strong>misc</strong>：试验性的临时功能。未集成到标准编排中的尝试性功能，均在此处编排和管理</p></li><li><p><strong>playbook</strong>：Ansible剧本编排服务，目前提供基于rke工具拉起Kubernetes集群功能 <strong>(未支持arm)</strong></p></li><li><p><strong>template</strong>: git pipeline 通用模板文件，现已弃用，迁移至cicd中</p></li><li><p><strong>utils</strong>： 运维工具、程序管理，如mysql备份任务，kubernetes调试工具等</p></li></ol><h3 id="工程目录详解" tabindex="-1"><a class="header-anchor" href="#工程目录详解"><span>工程目录详解</span></a></h3><figure><img src="'+m+'" alt="运维项目-目录结构" tabindex="0" loading="lazy"><figcaption>运维项目-目录结构</figcaption></figure><p>gitlab-ci: 项目的持续集成管理 <strong>（ARM环境的制品产出，主要是在这里作适配）</strong></p><ul><li><p>gitlab-runner：ci任务的执行者，负责 ci 编排文件的处理和脚本的执行</p></li><li><p>template： CI编排文件</p><ol><li><p>job： 提供通用基础服务，如gradle、maven、golang 、artifacts等pipeline节点服务</p></li><li><p>projects： 按产线进行归类，按服务进行单独的编排管理，针对不同的服务，可在此进行模板的引用和特性的扩展</p></li></ol></li></ul><h5 id="ci" tabindex="-1"><a class="header-anchor" href="#ci"><span>CI</span></a></h5><p>制品构建的所有操作均在此处调整</p><p>如新增(<strong>XC_TONG_WEB_ENABLED</strong>)以区分<strong>东方通</strong> jar依赖等，通过逻辑判断和处理，产出不同的制品。</p><figure><img src="'+_+'" alt="gradle" tabindex="0" loading="lazy"><figcaption>gradle</figcaption></figure><p><strong>如何产出多环境下的制品？</strong></p><ul><li>使用不同环境的runner</li></ul><h5 id="cd" tabindex="-1"><a class="header-anchor" href="#cd"><span>CD</span></a></h5><p><strong>通过ArgoCD 实现多环境的管理与发布</strong></p><ul><li>argocd是基于kubernetes的声明式的CD工具</li></ul><figure><img src="https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/G1wvqrWM40xpOako/img/8f4c5f68-2a01-48cb-bdc5-5a34e38ca4f5.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>通过argo应用的创建和声明，来监控编排文件的变化，从而实现产品的CD操作</p><figure><img src="'+x+'" alt="argo编排" tabindex="0" loading="lazy"><figcaption>argo编排</figcaption></figure><p>Argo 下产品应用服务编排 <strong>（ARM的部署，在这里作适配）</strong></p><ul><li><p>命名的区分</p></li><li><p>运行环境指定</p><ul><li>可区分不同的环境发布到不同的集群内，达到多环境的隔离</li></ul></li><li><p>编排文件指定</p><ul><li><p>可以指定应用的编排文件，后续在编排中通过申请的通配域名，即可实现多环境的访问切换，如</p><ul><li><p><a href="https://aaa.example.com/" target="_blank" rel="noopener noreferrer">https://aaa.example.com/</a></p></li><li><p><a href="https://bbb.example.com/" target="_blank" rel="noopener noreferrer">https://bbb.example.com/</a></p></li></ul></li></ul></li></ul><figure><img src="'+E+'" alt="argocd" tabindex="0" loading="lazy"><figcaption>argocd</figcaption></figure><p>编排文件对应的就是ArgoCD声明的仓库路径，从而实现了域名和环境的区分，产品的发布只需要修改这里即可，这样后续在pipeline中就可以实现自动化</p><figure><img src="'+k+'" alt="argocd" tabindex="0" loading="lazy"><figcaption>argocd</figcaption></figure><h4 id="运维仓库" tabindex="-1"><a class="header-anchor" href="#运维仓库"><span>运维仓库</span></a></h4><figure><img src="'+y+'" alt="git repo" tabindex="0" loading="lazy"><figcaption>git repo</figcaption></figure>',47),q=a("li",null,[a("p",null,"common:  公共服务管理，比如SQL审计平台 bytebase，研发文档服务docs 等")],-1),L=a("li",null,[a("p",null,"infra： 基础设施服务，和kubernetes集群相关，如SLB (metallb)，存储服务等")],-1),I=a("li",null,[a("p",null,"middleware: 中间件服务，产品依赖中间件的编排均在此维护")],-1),K=a("li",null,[a("p",null,[a("strong",null,"xxx-charts （项目外单独维护）")]),a("ol",null,[a("li",null,"按产线归类，所有的产品运行编排服务均在此仓库进行维护和管理")])],-1),S=a("ol",null,[a("li",null,[i("产品运行环境归类，基于业务编排模板，进行差异化修改和管理，之后可由"),a("strong",null,"Argo-cd"),i("发布到对应的集群环境中")])],-1),P=s('<h5 id="charts和app介绍" tabindex="-1"><a class="header-anchor" href="#charts和app介绍"><span>charts和app介绍</span></a></h5><figure><img src="'+B+'" alt="charts和app" tabindex="0" loading="lazy"><figcaption>charts和app</figcaption></figure><p>如图</p><p>apps中的服务按环境进行区分管理，通过差异化配置供ArgoCD使用，从而发布到不同环境。其核心编排均来自服务编排模板，优势在于</p><ul><li><p><strong>避免多环境操作同一个文件，管理混乱</strong></p></li><li><p><strong>避免多环境同时发布，同文件的冲突</strong></p></li><li><p><strong>工程文件和基础环境保持了一致</strong></p></li><li><p><strong>文件改动少，便于自动化</strong></p></li></ul><h4 id="其他目录" tabindex="-1"><a class="header-anchor" href="#其他目录"><span>其他目录</span></a></h4><p>和cicd关系不大，暂不详细介绍</p><h2 id="镜像管理" tabindex="-1"><a class="header-anchor" href="#镜像管理"><span>镜像管理</span></a></h2><p>通过harbor管理所有的编排文件和制品镜像 <strong>（Harbor需升级用来支持ARM制品的保存）</strong></p><h3 id="版本上报" tabindex="-1"><a class="header-anchor" href="#版本上报"><span>版本上报</span></a></h3><figure><img src="'+z+'" alt="版本上报" tabindex="0" loading="lazy"><figcaption>版本上报</figcaption></figure><h3 id="制品上传" tabindex="-1"><a class="header-anchor" href="#制品上传"><span>制品上传</span></a></h3><figure><img src="'+A+'" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>规则：</p><p>1. jkstack/&lt;产品&gt;/服务名:版本   <strong>（jkstack-charts也在此项目中）</strong></p><p>2. middleware/[registry]/服务名:版本</p><p>3. infra/[分类]/服务名:版本</p><figure><img src="'+D+'" alt="制品上传" tabindex="0" loading="lazy"><figcaption>制品上传</figcaption></figure><figure><img src="'+C+'" alt="制品上传" tabindex="0" loading="lazy"><figcaption>制品上传</figcaption></figure><figure><img src="'+v+'" alt="制品上传" tabindex="0" loading="lazy"><figcaption>制品上传</figcaption></figure><h2 id="流水线" tabindex="-1"><a class="header-anchor" href="#流水线"><span>流水线</span></a></h2><p>具备以上条件后后，通过git pipeline 即可将产品的CICD串联起来，实现了多环境的发版控制</p><figure><img src="'+O+'" alt="流水线" tabindex="0" loading="lazy"><figcaption>流水线</figcaption></figure><figure><img src="'+G+'" alt="流水线" tabindex="0" loading="lazy"><figcaption>流水线</figcaption></figure><figure><img src="'+w+'" alt="流水线" tabindex="0" loading="lazy"><figcaption>流水线</figcaption></figure><figure><img src="'+j+'" alt="流水线" tabindex="0" loading="lazy"><figcaption>流水线</figcaption></figure><h2 id="自动化" tabindex="-1"><a class="header-anchor" href="#自动化"><span>自动化</span></a></h2><ol><li><p>版本管理平台</p></li><li><p>离线交付-部署客户端</p></li><li><p>Kubernetes集群部署</p></li></ol><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><p><a href="https://www.qikqiak.com/post/gitops-devops-on-k8s/" target="_blank" rel="noopener noreferrer">GitOps - 在 Kubernetes 中进行 DevOps 的方式</a></p><p><a href="https://icloudnative.io/posts/what-is-gitops/" target="_blank" rel="noopener noreferrer">什么是GitOps</a></p>',31);function Z(W,H){const t=p("Badge");return r(),o("div",null,[e(' <PDF url="/assets/pdf/SRE-GitOps设计.pdf" no-toolbar /> '),T,R,e("more"),e(" ![封面图](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/a/dzV0LxOEYFnw4502/957a72b936d248f9956c2b5d270867700714.png) "),M,N,n(t,{text:"蓝色代表-ARM适配",type:"info"}),i(),V,a("ol",null,[q,L,I,K,a("li",null,[n(t,{text:"**xxx-apps ",type:"danger"}),i(" （项目外单独维护）** "),S])]),P])}const Y=l(F,[["render",Z],["__file","落地指南.html.vue"]]),U=JSON.parse(`{"path":"/ops/GitOps/%E8%90%BD%E5%9C%B0%E6%8C%87%E5%8D%97.html","title":"落地指南","lang":"zh-CN","frontmatter":{"article":true,"title":"落地指南","icon":"git","order":1,"index":true,"category":["工作分享","gitops"],"tag":["gitops"],"description":"通过GitOps的设计与落地，来满足云原生环境下业务的持续交付，建立标准的开发、 测试、生产环境， 形成统一的规范，完善自动化，为业务快速交付赋能。 整体架构 运维架构概览运维架构概览","head":[["meta",{"property":"og:url","content":"https://docs.lizili.online/ops/GitOps/%E8%90%BD%E5%9C%B0%E6%8C%87%E5%8D%97.html"}],["meta",{"property":"og:site_name","content":"lzz's Blog"}],["meta",{"property":"og:title","content":"落地指南"}],["meta",{"property":"og:description","content":"通过GitOps的设计与落地，来满足云原生环境下业务的持续交付，建立标准的开发、 测试、生产环境， 形成统一的规范，完善自动化，为业务快速交付赋能。 整体架构 运维架构概览运维架构概览"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/a/dzV0LxOEYFnw4502/957a72b936d248f9956c2b5d270867700714.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-12T03:42:17.000Z"}],["meta",{"property":"article:author","content":"z"}],["meta",{"property":"article:tag","content":"gitops"}],["meta",{"property":"article:modified_time","content":"2024-03-12T03:42:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"落地指南\\",\\"image\\":[\\"https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/a/dzV0LxOEYFnw4502/957a72b936d248f9956c2b5d270867700714.png\\",\\"https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/G1wvqrWM40xpOako/img/8f4c5f68-2a01-48cb-bdc5-5a34e38ca4f5.png\\"],\\"dateModified\\":\\"2024-03-12T03:42:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"z\\",\\"url\\":\\"https://docs.lizili.online\\"}]}"]]},"headers":[{"level":2,"title":"整体架构","slug":"整体架构","link":"#整体架构","children":[]},{"level":2,"title":"整理流程","slug":"整理流程","link":"#整理流程","children":[]},{"level":2,"title":"基础环境","slug":"基础环境","link":"#基础环境","children":[]},{"level":2,"title":"Kubernetes","slug":"kubernetes","link":"#kubernetes","children":[]},{"level":2,"title":"代码仓库","slug":"代码仓库","link":"#代码仓库","children":[]},{"level":2,"title":"GitOps","slug":"gitops","link":"#gitops","children":[{"level":3,"title":"流程设计","slug":"流程设计","link":"#流程设计","children":[]},{"level":3,"title":"仓库规划","slug":"仓库规划","link":"#仓库规划","children":[]},{"level":3,"title":"工程目录详解","slug":"工程目录详解","link":"#工程目录详解","children":[]}]},{"level":2,"title":"镜像管理","slug":"镜像管理","link":"#镜像管理","children":[{"level":3,"title":"版本上报","slug":"版本上报","link":"#版本上报","children":[]},{"level":3,"title":"制品上传","slug":"制品上传","link":"#制品上传","children":[]}]},{"level":2,"title":"流水线","slug":"流水线","link":"#流水线","children":[]},{"level":2,"title":"自动化","slug":"自动化","link":"#自动化","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1680412460000,"updatedTime":1710214937000,"contributors":[{"name":"lizili","email":"cn.zili.lee@outlook.com","commits":2}]},"readingTime":{"minutes":5.5,"words":1650},"filePathRelative":"ops/GitOps/落地指南.md","localizedDate":"2023年4月2日","excerpt":"<!-- <PDF url=\\"/assets/pdf/SRE-GitOps设计.pdf\\" no-toolbar /> -->\\n<h1></h1>\\n<p>通过GitOps的设计与落地，来满足云原生环境下业务的持续交付，建立标准的开发、&nbsp;测试、生产环境，&nbsp;形成统一的规范，完善自动化，为业务快速交付赋能。</p>\\n<!--more-->\\n<!-- ![封面图](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/a/dzV0LxOEYFnw4502/957a72b936d248f9956c2b5d270867700714.png) -->","autoDesc":true}`);export{Y as comp,U as data};
