---
tag: QEZ4D9H93B
kind: solution
problem: NPHCP70GBP
origin: human
author:
  display: Just a user
source: mathse
url: https://math.stackexchange.com/a/5038523
zone: Z1
lang: en
complete: false
---
- The leading coefficients of $Q(x)\pm i P(x)$ both are the leading coefficeint of $Q(x)$, say $a$, hence the leading coefficient of $(Q(x)+iP(x))(Q(x)-iP(x))=x^{2n}+1$ is $a^2=1$, so $a=\pm 1$.

 - Since $Q(x)+iP(x)$ has degree $n$, say $r_1, \cdots, r_n$ are all of its roots, then $\overline{r_1}, \cdots, \overline{r_n}$ are all the roots of $Q(x)-iP(x)$. If $r$ and $\bar r$ are roots of the first polynomial, then since $\bar r$ must be the root of the second polynomial, we must have $x^{2n}+1$ has a repeated root $\bar r$, which is not true.

- $\{e^{\frac{2\pi i k}{2n}}\}$ are roots of $x^{2n}=1$, not $x^{2n}=-1$.

- There are exactly $n$ pairs in the form $\{e^{\frac{k+1/2}{n} \pi i}, e^{-\frac{k+1/2}{n} \pi i}\}$ where $k=0, \cdots, n-1$. For each pair $\{e^{\frac{k+1/2}{n} \pi i}, e^{-\frac{k+1/2}{n} \pi i}\}$, we can pick one from it as a root of $Q+iP$, and there are in total $2^n$ choices. To get $Q(x)+iP(x)$, we are left to pick a leading coefficient from $\pm 1$, and there are $2$ choices. Put together, there are $2^{n+1}$ different possible $Q+iP$.
