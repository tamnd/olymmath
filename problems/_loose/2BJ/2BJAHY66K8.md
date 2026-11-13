---
tag: 2BJAHY66K8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=246
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f: \mathbb{R} \to \mathbb{R}$ be a function with the property: $|f(x)-f(y)| \le |\sin x - \sin y|$, for each $x, y \in \mathbb{R}$.

a) Prove that there exists an unique $c \in \mathbb{R}$ such that $f(c) = c$.

b) Consider the sequence $(x_n)_{n \in \mathbb{N}}$ with $x_0 = 0$ and $x_{n+1} = f(x_n)$ for every $n \in \mathbb{N}$. Prove that $\lim_{n \to \infty} x_n = c$.
