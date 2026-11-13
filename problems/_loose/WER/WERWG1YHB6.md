---
tag: WERWG1YHB6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239496
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose $S$ is a finite subset of $\mathbb{R}$. If $f: S \rightarrow S$ is a function such that,
$$
\left|f\left(s_{1}\right)-f\left(s_{2}\right)\right| \leq \frac{1}{2}\left|s_{1}-s_{2}\right|, \forall s_{1}, s_{2} \in S
$$
Prove that, there exists a $x \in S$ such that $f(x)=x$
