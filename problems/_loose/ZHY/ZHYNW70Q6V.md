---
tag: ZHYNW70Q6V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269229
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a,b\in\mathbb R$, $a\le b$. Assume that $f:[a,b]\to[a,b]$ satisfies $f(x)-f(y)\le|x-y|$ for every $x,y\in[a,b]$. Choose an $x_1\in[a,b]$ and define
$$x_{n+1}=\frac{x_n+f(x_n)}2, n=1,2,3,\ldots.$$Show that $\{x_n\}^\infty_{n=1}$ converges to some fixed point of $f$.
