---
tag: 3RKC8S8YV1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231824
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $X \subset \mathbb{N}$, define $d(X)$ as the largest $c \in [0, 1]$ such that for any $a < c$ and $n_0\in \mathbb{N}$, there exists $m, r \in \mathbb{N}$ with $r \geq n_0$ and $\frac{\mid X \cap [m, m+r)\mid}{r} \geq a$.

Let $E, F \subset \mathbb{N}$ such that $d(E)d(F) > 1/4$. Prove that for any prime $p$ and $k\in\mathbb{N}$, there exists $m \in E, n \in F$ such that $m\equiv n \pmod{p^k}$
