---
tag: D4PN8TGH8M
kind: solution
problem: E984NAYTW2
origin: human
author:
  display: almagest
source: mathse
url: https://math.stackexchange.com/a/1788740
zone: Z1
lang: en
complete: false
---
The repunits are $\frac{10^1-1}{9}=1,\frac{10^2-1}{9}=11,\frac{10^3-1}{9}=111,\dots$. 

So if $n$ is a power of $10$, then $\frac{n-1}{9}$ is a repunit, so $f(\frac{n-1}{9})$ is a repunit, and hence $9f(\frac{n-1}{9})+1$ is a power of $10$.

But if $f(x)$ is a polynomial, then $g(x)=9f(\frac{x-1}{9})+1$ is also a polynomial. Suppose its leading term is $ax^k$.

Then $\lim_{x\to\infty}\frac{g(x)}{x^k}=a>0$. But the sequence $x_m=10^m$ tends to infinity and each term $\frac{g(x_m)}{x_m^k}$ is a power of $10$. The only limit point of the (positive and negative) powers of $10$ is $0$. So $\frac{g(x_m)}{x_m^k}$ must equal $a$ for all sufficiently large $m$ and $a$ must be a power of $10$. Suppose $a=10^h$ (where $h\in\mathbb{Z}$). Then $g(x)-10^hx^k$ has infinitely many zeros, so it must be identically zero. 

Hence $g(x)=10^hx^k$ for some $h\in\mathbb{Z}$ and $k$ a non-negative integer. Hence $f(x)=\frac{1}{9}(g(9x+1)-1)=\frac{1}{9}\left(10^h(9x+1)^k-1\right)$. That gives $f(1)=\frac{1}{9}(10^{h+k}-1)$, so we require $h\ge1-k$.

A few examples may help:

$k=0$ just gives the constant polynomials (where the constant is a repunit).

$k=1$ gives the polynomials $x,10x+1,100x+11$ etc. 

$k=2$ gives $\frac{1}{10}(9x^2+2x-1)$, $9x^2+2x$, $90x^2+20x+1$, $900x^2+200x+11$ etc.

$k=3$ gives $\frac{1}{100}(81x^3+27x^2+3x-11)$, $\frac{1}{10}(81x^3+27x^2+3x-1)$, $81x^3+27x^2+3x$, $810x^3+270x^2+30x+1$ etc
