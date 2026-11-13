---
tag: CGZGTJMS00
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0001.parquet#row=409
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil Brazilian Math Olympiad
---
Let $n$ be a positive integer and $A$ a subset of $\mathbb{Z}/(n)$, the set of the integers modulo $n$, define $f(A) = \min_{t \in \mathbb{Z}/(n)} |A \cap (A+t)|$, where $A+t = \{x+t, x \in A\} \subset \mathbb{Z}/(n)$. Define $g(n) = \max\{f(A); A \subset \mathbb{Z}/(n), |A| = \lfloor n/2 \rfloor\}$.

a. Prove that $g(n) \le \lfloor n/4 \rfloor - 1, \forall n \ge 1$.

b. Prove that $g(n) = \lfloor n/4 \rfloor - 1$ for infinite values of $n \ge 1$.
