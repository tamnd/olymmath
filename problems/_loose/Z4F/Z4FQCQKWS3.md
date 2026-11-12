---
tag: Z4FQCQKWS3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34150
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X_{1}, \ldots, X_{n}$ be i.i.d. random variables, $\mathrm{E} X_{1}=0, \mathrm{E} X_{1}^{2}=1$. Suppose also that for some constants $a_{1}, \ldots, a_{n}$, different from 0, the quantities

$$
\sum_{k=1}^{n} X_{k} \text { and } \sum_{k=1}^{n} a_{k} X_{k}
$$

are independent. Prove that $X_{1} \sim \mathscr{N}(0,1)$.
