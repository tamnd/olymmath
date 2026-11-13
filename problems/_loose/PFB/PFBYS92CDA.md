---
tag: PFBYS92CDA
kind: problem
type: answer
answer: C_{n}^{[\frac{n}{2}]}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123064
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{1}, x_{2}, \cdots, x_{n}$ be $n$ real numbers with absolute values no less than 1, then from the $2^{n}$ sums
$$
x_{A}=\sum_{j \in A} x_{s}, A \subseteq X=\{1,2, \cdots, n\}
$$

at most $C_{n}^{\left[\frac{n}{2}\right]}$ can be selected such that the difference between any two is less than 1.
