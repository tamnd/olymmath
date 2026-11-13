---
tag: M5NR4Y1ZQS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102646
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left\{x_{n}\right\}$ is defined as follows: $x_{1}=1, x_{2}=a$, where $a$ is a given real number greater than 1; if for some integer $n \geqslant 1$, the first $2^{n}$ terms of the sequence have been defined, then for $2^{n}+1 \leqslant k \leqslant 2^{n+1}$, define $x_{k}=a x_{k-2^{n}}$. Thus, the terms of the sequence $\left\{x_{n}\right\}$ are $1, a, a, a^{2}, a, a^{2}, a^{2}, a^{3}, \cdots$. Let $S_{n}$ denote the sum of the first $n$ terms of the sequence. Prove: if the number $n$ has the binary representation
$$
n=2^{k_{0}}+2^{k_{1}}+\cdots+2^{k_{r}}\left(k_{0}>k_{1}>\cdots>k_{r} \geqslant 0\right),
$$

then $S_{n}=\sum_{j=0}^{r} a^{j}(1+a)^{k_{j}}$.
