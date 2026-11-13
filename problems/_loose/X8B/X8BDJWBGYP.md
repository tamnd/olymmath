---
tag: X8BDJWBGYP
kind: problem
type: answer
answer: C_{n-1}^{k-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=139758
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A_{1}, A_{2}, \cdots, A_{n}$ be $r$-element sets. $\bigcup_{i=1}^{n} A_{i}=X$. If for a natural number $k$, the union of any $k$ of these sets is $X$, and the union of any $k-1$ of these sets is a proper subset of $X$. Prove: $|X| \geqslant$ $C_{n}^{k-1}$. When equality holds, it must be that $r=C_{n-1}^{k-1}$.
