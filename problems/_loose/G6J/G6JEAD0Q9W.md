---
tag: G6JEAD0Q9W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220558
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p>1,\frac1p+\frac1q=1$ and $r>1$. If $u(x,y),v(x,y)>0$, and $f(x,y),g(x,y)$ are continuous functions on $[a,b]\times[c,d]$, then prove
$$\left(\frac{\left(\int^b_a\int^d_c(f(x,y)+g(x,y))^rdxdy\right)^{1/r}}{(u(x,y)+v(x,y))^{1/q}}\right)^p\le\left(\frac{\left(\int^b_a\int^d_cf(x,y)^rdxdy\right)^{1/r}}{u(x,y)^{1/q}}\right)^p+\left(\frac{\left(\int^b_a\int^d_cg(x,y)^rdxdy\right)^{1/r}}{v(x,y)^{1/q}}\right)^p,$$
with equality if and only if either
$$\left(\lVert f(x,y)\rVert^r_r,\lVert g(x,y)\rVert^r_r\right)=\alpha\left(\lVert u(x,y)\rVert^r_r,\lVert v(x,y)\rVert^r_r\right)$$
for some $\alpha>0$ or $\lVert f(x,y)\rVert^r_r=\lVert g(x,y)\rVert^r_r=0$.

*Proposed by Chang-Jian Zhao*
