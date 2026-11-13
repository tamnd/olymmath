---
tag: 2YWQ3CMWME
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=124325
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x=\left(x_{1}, x_{2}, \cdots, x_{n}\right), y=\left(y_{1}, y_{2}, \cdots, y_{n}\right)$ be two $n$-dimensional vectors. If $x=y$ or $x_{1}=y_{1}$ for $n-1$ values of $i$, then $y$ is said to cover $x$. Let $X$ denote the set of $p^{n}$ vectors $\left(x_{1}, x_{2}, \cdots, x_{n}\right)$, where $x_{1} \in\{1,2, \cdots, p\}, i=1,2, \cdots, n$. If each vector in $X$ is covered by at least one vector in $Y$, prove that $|Y| \geq \frac{p^{n}}{n(p-1)+1}$, and when $n=2$, $\min |Y|=p$.
