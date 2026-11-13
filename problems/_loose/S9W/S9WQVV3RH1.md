---
tag: S9WQVV3RH1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208889
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A_0$, $A_1$, $A_2$, ..., $A_n$ be nonnegative numbers such that
$$
A_0 \le A_1 \le A_2 \le \dots \le A_n.
$$
Prove that
$$
\left| \sum_{i = 0}^{\lfloor n/2 \rfloor} A_{2i}
- \frac{1}{2} \sum_{i = 0}^n A_i \right| \le \frac{A_n}{2} .
$$
(Note: $\lfloor x \rfloor$ means the greatest integer that is less than or equal to $x$.)
