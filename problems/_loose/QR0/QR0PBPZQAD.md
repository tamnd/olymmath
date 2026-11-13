---
tag: QR0PBPZQAD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187784
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:(0,+\infty) \rightarrow \mathbb{R}$ be a strictly increasing function such that for any $x, y \in(0,+\infty)$ and for any $\lambda \in(0,1)$, the following holds:

$$
f(\lambda x+(1-\lambda) y) \leq \lambda f(x)+(1-\lambda) f(y)
$$

Prove that the sequence $(f(n))_{n \in \mathbb{N}}$ does not contain an infinite arithmetic progression.
