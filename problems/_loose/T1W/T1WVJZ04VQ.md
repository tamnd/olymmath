---
tag: T1WVJZ04VQ
kind: problem
type: answer
answer: \mathrm{D}Y\geqslantp(1-p)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33902
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(See [73].) Let $X$ be a Bernoulli random variable,

$$
\mathrm{P}(X=1)=p, \mathrm{P}(X=0)=1-p
$$

(a) Show that there exist random variables $Y$ independent of $X$ such that the distribution of their sum is symmetric, i.e., $X+Y \stackrel{d}{=}-(X+Y)$.

(b) Establish that the minimum variance $\mathrm{D} Y$ over all such $Y$ is $p(1-p)$ for $p \neq 1 / 2$ and 0 for $p=1 / 2$. To this end, assume that for $p \neq 1 / 2$ there exists an odd function $f=f(y)$ such that

$$
(1-p) f(y)+p f(1+y) \leqslant y^{2}-p, y \in \mathbb{R}
$$

Remark. As the function $f$, one can take a piecewise linear function

$$
f(y)=\frac{g(y)}{1-2 p}-y, y \in \mathbb{R}
$$

where the odd function $g$ is defined by the formula $g(y)=\arcsin \sin \pi y$. With this definition, $g(1+y)=-g(y), y \in \mathbb{R}$, and the inequality

$$
(1-p) f(y)+p f(1+y) \leqslant y^{2}-p
$$

is equivalent to $g(y) \leqslant y^{2}+y$. The latter is established by elementary verification.
