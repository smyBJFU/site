---
title: 安装指南
description: 如何安装和配置项目
---


# JAVA
| 姓名 | 年龄 | 城市 |
| :--- | :--- | :--- |
| 张三 | 25 | 北京 |
| 李四 | 30 | 上海 |

当 $a \ne 0$ 时，方程 $ax^2 + bx + c = 0$ 有两个解，它们是：
```
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$
```


::: tip 提示
这是一个提示信息。
:::

::: warning 警告
这是一个警告信息。
:::

::: danger 危险
这是一个危险信息。
:::

::: details 详情
点击展开查看详情。
:::

这是一个新功能 <Badge type="tip" text="New" />

<Tabs>
  <TabItem value="apple">
    苹果是红色的。
  </TabItem>
  <TabItem value="banana">
    香蕉是黄色的。
  </TabItem>
</Tabs>

- 特性一 <Badge type="tip" text="New" />
- 特性二 <Badge type="warning" text="Beta" />
- 特性三 <Badge type="danger" text="Deprecated" />
- 文档 <Badge icon="github" link="https://github.com" text="GitHub" />


<CodeGroup>
  <CodeBlock title="npm" active>
    ```bash
    npm install vitepress
</CodeBlock>
<CodeBlock title="yarn">
```bash
yarn add vitepress
```
</CodeBlock>
<CodeBlock title="pnpm">
```bash
pnpm add vitepress
```
</CodeBlock>
</CodeGroup>


<Tabs defaultValue="apple">
  <TabItem value="apple" label="苹果">
    苹果是红色的。
  </TabItem>
  <TabItem value="banana" label="香蕉">
    香蕉是黄色的。
  </TabItem>
  <TabItem value="orange" label="橘子">
    橘子是橙色的。
  </TabItem>
</Tabs>


<details>
  <summary>点击展开查看更多</summary>
  <div>
    这是隐藏的详细内容。
    <ul>
      <li>要点一</li>
      <li>要点二</li>
    </ul>
  </div>
</details>

访问我们的 GitHub 仓库 <OutboundLink />






