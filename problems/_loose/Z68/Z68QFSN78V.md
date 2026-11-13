---
tag: Z68QFSN78V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177288
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathcal{A}$ be the set of all binary sequences of length $n$ and let $0 \in \mathcal{A}$ be the sequence with zero elements. The sequence $c=$ $c_{1}, c_{2}, \ldots, c_{n}$ is called sum of $a=a_{1}, a_{2}, \ldots, a_{n}$ and $b=b_{1}, b_{2}, \ldots, b_{n}$ if $c_{i}=0$ when $a_{i}=b_{i}$ and $c_{i}=1$ when $a_{i} \neq b_{i}$. Let $f: \mathcal{A} \rightarrow \mathcal{A}$ be a function such that $f(\mathbf{0})=\mathbf{0}$ and if the sequences $a$ and $b$ differ in exactly $k$ terms then the sequences $f(a)$ and $f(b)$ differ also exactly in $k$ terms. Prove that if $a, b$ and $c$ are sequences from $\mathcal{A}$ such that $a+b+c=\mathbf{0}$, then $f(a)+f(b)+f(c)=0$.
