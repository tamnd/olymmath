---
tag: QXN8E3TH3P
kind: solution
problem: TYW1RQK4TB
origin: human
author:
  display: Yuval Filmus
source: mathse
url: https://math.stackexchange.com/a/52469
zone: Z1
lang: en
complete: false
---
First, we show that $f(x) \leq 0$ for all $x$.

Suppose that $f(z) > 0$ for some $z$. The functional inequality implies that $$\lim_{x \to -\infty} f(x) = -\infty,$$
since $f$ is bounded by a strictly increasing linear function.
We also have
$$ f(y) = f(0+y) \leq f(0)y + f(f(0)). $$
Using this for $y = f(x)$,
$$ f(0) = f(x-x) \leq -xf(x) + f(f(x)) \leq (f(0) - x)f(x) + f(f(0)).$$
As $x \to -\infty$, the right-hand side tends to $-\infty$, leading to a contradiction.

Second, let $x > 0$. Note that
$$ f(0) \leq x f(-x) + f(f(-x)) \leq xf(-x). $$
Thus $f(-x) \geq f(0)/x$. As $x\to\infty$, the righthand side tends to zero. Since
$$ f(-x) = f(-x+0) \leq f(f(-x)), $$
we get that there is a sequence of points $x_n = -f(-n)$ tending to zero such that $f(-x_n) \to 0$.

Suppose that $f(f(0)) < 0$. Then
$$f(-x_n) = f(0-x_n) \leq -f(0)x_n + f(f(0)).$$
Since $x_n\to 0$, the righthand side tends to $f(f(0)) < 0$, contradiction.

We conclude that $f(f(0)) = 0$. This implies that
$$0 = f(f(0)) \leq f(f(f(0))) = f(0), $$
and so $f(0) = 0$.

Third, as noted above, for $x > 0$ we have $$xf(-x) \geq f(0) = 0.$$
Thus $f(-x) = 0$ for all $x \geq 0$.

Addendum: Putting $g(x) = -f(x)$, the functional inequality reduces to
$$ g(x+y) \geq yg(x), $$
where now $g\colon \mathbb{R}_+ \to \mathbb{R}_+$. An example is the function $g(x) = \exp(x)$.
