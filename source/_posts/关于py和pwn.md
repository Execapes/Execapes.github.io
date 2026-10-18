---
title: 关于py和pwn
date: 2026-010-18 21:52:40
tags:
- 随笔
- 周报
---
这周。。。可以说是这两周吧，我学的不算很多，总感觉精力有限了，大学生原来不是像我以前看见的说是无所事事。。。总之，这两周来说，大部分时间在忙碌于各种活动和课程之间，只腾出了部分时间来进行py和pwn的学习。。。
##平台选择
python的学习其实在上上周就有涉及了，对于py的了解，从开始的时候是只有在高中的时候在为数不多的微机课中也为数不多的几次不打游戏的课上听了一听，基本上等于0基础。
做题平台我选择了**exercism**，这是一个涵盖一百多种语言的免费练题网站，我从py开始用这个平台，他的介绍非常详尽，[点这里跳转](https://exercism.org/),分为练习模式和学习模式，学习模式会有超级详尽的介绍和测试。
##关于python
###基础内容学习
按照exercism的概念提示，基础内容分为四个内容
- 名称赋值（变量与常量）
- 函数（def 关键字和 return 关键字）
- 注释
- 文档字符串
对于名称赋值，这也是我觉得为何py比c和c++更加方便和简易的原因，py的赋值非常的简单
在 Python 中，创建变量或常量时不使用任何关键字（比如c的int <>）。程序员可以用赋值运算符 = 把名称（也叫_变量_）绑定到任意类型的对象上：<name> = <value>。一个名称在其生命周期内可以被重新赋值（或重新绑定）为不同的值（不同的对象类型）。
比如：
```c
int c = 100;
float b = 10.23;
```
在python中只需要
```py
c = 100
b = 10.23
```
~~是的，他甚至连分号都不用打，天天搞混记错~~

简单的地方还有函数的定义：在 Python 中，函数的定义只需要def <函数名> (传入数据)，如：
```py
def add_two_numbers(number_one, number_two):
  total = number_one + number_two
  print(total)  
```
这样就可以在后面直接调用这个代码组了。代码的逻辑方面和c基本一样，就是比较省事。

然后就是注释，这个我不怎么用，Python 中的注释以 # 开头，这个 # 不能是字符串的一部分，注释到行尾结束。和许多其他编程语言不同，Python 不支持多行注释标记。注释块的每一行都必须以 # 字符开头。（类比汇编是；开头）

关于文档字符串，编程系统天天叫我加上头注释，我一般都不理他。。。好像蛮有用，以下是描述
函数体的第一条语句可以（但不是必须）是一个文档字符串，它简洁地概述函数或对象的用途。文档字符串用三引号（"""）声明，并与代码块保持在相同的缩进层级：
```py
"""Form a complex number.

    Keyword Arguments:
        real (float): The real part of the number (default 0.0)
        imag (float): The imaginary part of the number (default 0.0)
        
"""
```
这种类型的，放在文件的最开头（没错最开头不需要声明标准库），和函数的第一行。写明你到底要几把干啥
###值类型
py有和c类似的值类型，整数（int）、浮点数（float）和复数（complex）。分数（fractions.Fraction）和十进制数（decimal.Decimal）。~~后面俩没用过~~
算术运算也基本上和c没什么区别，二元算术运算符（+、-、*、/、// 和 %），不过还是有部分不太一样，c根据整数类型变为整除不留小数点，而py是自动转换为更宽的范围，C 里两个 int 相除结果还是 int，1/2 的结果是 0，新手经常写出 average = sum/count 然后“为什么一直是 0”；取整方向不同（C 向零，Python 向负无穷），负数除法结果不一样。
还有取模 %：负数时结果不同，py结果符号跟除数，如-7 % 3   >>输出 2，而c输出-1
最后就是最大的区别了，整数溢出：Python 没有，C 天天有，~~就c这个最烦md~~
C 的每个整数类型都是固定字节数的存储格：char 1 字节、short 2 字节、int 4 字节、long 8 字节。算超了就死，根本看不出来。py啥都不用管，往里豪完了。c还有个什么unsigned int，不知道何意味。。。

py里有一个bool值，c里貌似没用到过。它是int的子类。这个类型里只有两个布尔值：True和False。这些值可以赋值给变量，也可以和布尔运算符（and、or、not）组合使用：
and是左右有一个不对就都不对，or是两边有一个对就可以，not等于反对，在开头加上就是反义词。

还有个不得不说的就是类型转换，py里是int(变量)的格式，而c是(int)变量，天天搞错，nnd

###分支循环语句
在 Python 中，if、elif（由 “else and if” 缩写而来）和else语句用于控制程序的执行流程，让程序能够做出判断。 与许多其他编程语言不同，Python 3.9 及更早的版本没有提供正式的 switch 语句，而是用多个elif语句来实现类似的功能。最主要的是格式要求很简单，不用搞那么多框（说的就是你c）。写着很舒适啊。
for好像完全变成遍历专用了，while倒是基本上一样 。
对于py的for来说不再是循环，而是遍历一个容器。如：
```py
for i in range(10):
    print(i)

for s in ["a", "b", "c"]:
    print(s)

for c in "pwn": #真的只用打冒号
    print(c)
```
C中的for循环可以说是一个while代码的限定小范围缩写，如：
```c
char s[] = "pwn";
for (int i = 0; i < 3; i++) {
    printf("%c\n", s[i]);
}
```
和：
```c
char s[] = "pwn";
int i = 0;
while (i < 3) {
    printf("%c\n", s[i]);
    i++;
}
```
好像一个作用吧。。。
while就不多说了，好像完全一样来的（指的是作用）

py目前很熟悉的就这么多了，其他的类似数组字符串拼接只是用过的程度。
##pwn环境配置
对于pwn的了解我也不算很多，这个周末我也只是抽出来了两个小时多进行了一个环境的配置，我用的是wsl2 + ubuntu,听说还有vmware的装法，但是介于glm跟我说wsl较为轻量，而且可以和win系统文件互通，卸载也干净（最重要的），于是我选择了wsl
先进行```sudo apt update```的时候就发现了问题，所有进度条都是百分之0，甩给codex告诉我是代理混乱，我win挂了梯子，wsl没有。好在有个mirror模式，开启之后wsl和win环境走一个代理（应该吧）
问题是加了.wsconfig之后，mirror已开启，还是一样不行，先以为是官方网站太慢换了清华官方镜像源，结果发现好像是wsl运行apt指令时自动创建了代理配置，而默认的懂得都懂。于是我关掉了自动生成DNS配置文件，换成了国内dns，跑了一遍还是不行，重启两遍，好了？神秘windows11发力了
然后运行了```sudo apt install -y build-essential gdb git python3-pip socat ruby file```，包含：
build-essential	gcc、g++、make 等编译工具链。你在 WSL 里编译 Linux ELF 测试程序用的就是它（和 MSYS2 的 gcc 完全是两套，互不替代）
gdb	调试器，Pwn 动态调试的核心。你计划里第 1 项「gdb + pwndbg 调试」的主角
git	下载 pwndbg 仓库用
python3-pip	装 pwntools 用
socat	把本地程序挂到 TCP 端口，模拟 CTF 远程服务，练 remote() 打法时用
ruby	one_gadget 是 Ruby 写的，需要它
file	看题目文件类型（32/64 位、动态/静态链接）
（来源于codex glm5.3）

接着下载pwntools + ROPgadget,运行
```cmd
pip3 install pwntools ROPgadget
```

然后下载了pwndbg，一个插件，运行
```cmd
git clone https://github.com/pwndbg/pwndbg ~/pwndbg
cd ~/pwndbg && ./setup.sh
```
好像是一个工具，~~给gdb上颜色看看~~

其他的都没怎么搞了，有空的时候打打ctf看看能不能用上这个东西吧（雾）