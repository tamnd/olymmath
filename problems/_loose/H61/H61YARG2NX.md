---
tag: H61YARG2NX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131314
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Bernoulli Summation Formula) Let $f(n)$ be defined for $n \in \mathbf{N}_{+}$, then
$$
\sum_{i=1}^{n} f(i)=C_{n}^{1} f(1)+C_{n}^{2} \Delta f(1)+\cdots+C_{n}^{n} \Delta^{n-1} f(1) \text {. }
$$

In particular, when $f(n)$ is a polynomial of degree $r$ in $n$, we have
$$
\sum_{i=1}^{n} f(i)=C_{n}^{1} f(1)+C_{n}^{2} \Delta f(1)+\cdots+C_{n}^{r+1} \Delta^{\prime} f(1)
$$

which is a polynomial of degree $r+1$ in $n$.
