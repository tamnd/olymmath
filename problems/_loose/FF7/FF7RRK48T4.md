---
tag: FF7RRK48T4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190867
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $I \subset \mathbb{R}$ be an open interval which contains 0 , and $f: I \rightarrow \mathbb{R}$ be a function of class $C^{2016}(I)$ such that $f(0)=0, f^{\prime}(0)=1, f^{\prime \prime}(0)=f^{\prime \prime \prime}(0)=\ldots=f^{(2015)}(0)=0, f^{(2016)}(0)0$ such that

$$
0<f(x)<x, \forall x \in(0, \delta)
$$

ii) With $\delta$ determined as in $i$ ), define the sequence ( $\left.a_{n}\right)$ by

$$
a_{1}=\frac{\delta}{2}, a_{n+1}=f\left(a_{n}\right), \forall n \geq 1
$$

Study the convergence of the series $\sum_{n=1}^{\infty} a_{n}^{r}$, for $r \in \mathbb{R}$.
