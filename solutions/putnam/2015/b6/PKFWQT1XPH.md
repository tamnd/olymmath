---
tag: PKFWQT1XPH
kind: solution
problem: 9271H6QRQY
origin: human
author:
  display: Eric Naslund
source: mathse
url: https://math.stackexchange.com/a/1567598
zone: Z1
lang: en
complete: false
---
>We have that $$\sum_{k=1}^\infty (-1)^{k-1}\frac{A(k)}{k}=\left(\sum_{k=1}^\infty \frac{(-1)^{k-1}}{2k-1}\right)^2=\frac{\pi^2}{16}.$$

Firstly, we would like to rearrange the terms in this series, but we have to be very careful in doing so as this is a conditionally convergent series. To do things rigorously, we have to truncate and take limits, and so define $$T(x)=\sum_{k\leq x}(-1)^{k-1}\frac{A(k)}{k}$$
 so that $T=\lim_{x\rightarrow\infty}T(x)$ is the series in question. Writing $$A(k)=\sum_{\begin{array}{c}
d|k,\ d\text{ odd}\\
d\leq\sqrt{2k}
\end{array}}1$$
 and switching the order of summation we  obtain $$T(x)=\sum_{k\leq x}\frac{(-1)^{k-1}}{k}\sum_{\begin{array}{c}
d|k,\ d\text{ odd}\\
d<\sqrt{2k}
\end{array}}1=\sum_{\begin{array}{c}
d<\sqrt{2x}\\
d\text{ odd}
\end{array}}\sum_{\begin{array}{c}
d^{2}/2<k\leq x\\
d|k
\end{array}}\frac{(-1)^{k-1}}{k}=\sum_{\begin{array}{c}
d<\sqrt{2x}\\
d\text{ odd}
\end{array}}\frac{1}{d}\sum_{\frac{d}{2}<k\leq\frac{x}{d}}\frac{(-1)^{k-1}}{k}.$$ Let $S(x)=\sum_{k\leq x}\frac{(-1)^{k-1}}{k}$
  and note that $S\left(\frac{x}{d}\right)=\log2+O\left(\frac{d}{x}\right)$. Hence $$T(x)=\sum_{\begin{array}{c}
d\leq\sqrt{2x}\\
d\text{ odd}
\end{array}}\frac{1}{d}\left[S\left(\frac{x}{d}\right)-S\left(\frac{d}{2}\right)\right]=\sum_{\begin{array}{c}
d\leq\sqrt{2x}\\
d\text{ odd}
\end{array}}\frac{1}{d}\left[\log2-S\left(\frac{d}{2}\right)\right]+O\left(\frac{1}{\sqrt{x}}\right)$$ and so upon taking $x\rightarrow \infty$ we have that $$T=\sum_{d\text{ odd}}\frac{1}{d}\sum_{k>\frac{d}{2}}\frac{(-1)^{k-1}}{k}=\sum_{k=1}^{\infty}\frac{(-1)^{k-1}}{k}\sum_{\begin{array}{c}
d<2k\\
d\text{ odd}
\end{array}}\frac{1}{d}.$$ Now, we can write this as $$\frac{1}{2}\sum_{k=1}^{\infty}\frac{(-1)^{k-1}}{k}\sum_{j=1}^{k}\left(\frac{1}{2j-1}+\frac{1}{2k-(2j-1)}\right).$$ Truncating the first sum at $k=N$, we have $$T=\lim_{N\rightarrow \infty}\sum_{j=1}^{N}\sum_{k=j}^{N}\frac{(-1)^{k-1}}{(2j-1)(2k-(2j-1))}.$$
Shifting the second sum to start at $k=1$, this becomes $$T=\lim_{N\rightarrow\infty}\sum_{j=1}^{N}\frac{(-1)^{j-1}}{(2j-1)}\sum_{k=1}^{N-j+1}\frac{(-1)^{k-1}}{(2k-1)}= \lim_{N\rightarrow\infty}\left(\sum_{j=1}^{N}\frac{(-1)^{j-1}}{(2j-1)}\right)^2-\lim_{N\rightarrow \infty}\sum_{j=1}^{N}\frac{(-1)^{j-1}}{(2j-1)}\sum_{N-j+2}^{N}\frac{(-1)^{k-1}}{(2k-1)}.$$ Now, the second term goes to zero, and the first term is the square of the well known [Leibniz series for $\pi/4$][1]. Thus $$\sum_{k=1}^\infty (-1)^{k-1}\frac{A(k)}{k}=\frac{\pi^2}{16}.$$


  [1]: https://en.wikipedia.org/wiki/Leibniz_formula_for_%CF%80
