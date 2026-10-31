---
tag: P6RMXTFCQT
kind: solution
problem: TYW1RQK4TB
origin: human
author:
  display: koreagerman
source: mathse
url: https://math.stackexchange.com/a/52913
zone: Z1
lang: en
complete: false
---
This is my solution:
$$f(f(x)) = f(y+f(x)-y) \le (f(x)-y).f(y) + f(f(y)),\forall x, y (1)$$
swap $x, y$, we have:
$$f(f(y))\le (f(y)-x)f(x)+f(f(x)), \forall x, y (2)$$
(1), (2) $\Rightarrow 0 \le 2f(x)f(y)-xf(x)-yf(y),  \forall x, y.$

$\Rightarrow -xf(x) \ge (y-2f(x))f(y), \forall x, y \Rightarrow -xf(x)\ge 0, \forall x (*)$ (using $y=2f(x)$)

In the other hand: $f(y)=f(x+y-x)\le (y-x)f(x)+f(f(x)), \forall x, y$. Suppose that there exist $x: f(x)>0$, then $\lim\limits_{y\to-\infty}(y-x)f(x)=-\infty \Rightarrow \lim\limits_{y\to-\infty}f(y)=-\infty \Rightarrow \lim\limits_{x\to-\infty}(-xf(x))=-\infty$! (absurd from $(*)$).

Therefore $f(x) \le 0, \forall x (**)$

From $(*), (**) \Rightarrow\forall x<0: -xf(x)\ge 0 \Rightarrow f(x)\ge 0 \Rightarrow f(x)=0.$

The last one: $0=f(-1)\le f(f(-1))=f(0)\Rightarrow f(0)=0.$
[End of proof]

koreagerman.
