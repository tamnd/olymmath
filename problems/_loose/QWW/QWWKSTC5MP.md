---
tag: QWWKSTC5MP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83132
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left(u_{n}\right)_{n \in \mathbb{N}^{*}}$ be a sequence of real numbers. For all $n \in \mathbb{N}^{*}$, we denote: $c_{n}=$ $\frac{1}{n}\left(u_{1}+\ldots+u_{n}\right)=\frac{1}{n} \sum_{k=1}^{n} u_{k}$.

The number $c_{n}$ is the arithmetic mean of the first $n$ terms of the sequence $\left(u_{n}\right)$. The sequence $\left(c_{n}\right)$ is called: "the sequence of Cesaro means" of $\left(u_{n}\right)$.

Show that if the sequence $\left(u_{n}\right)$ converges to a real number $\ell$ then the sequence $\left(c_{n}\right)$ also converges to $\ell$.
