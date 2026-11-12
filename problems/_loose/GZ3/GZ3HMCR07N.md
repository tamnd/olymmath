---
tag: GZ3HMCR07N
kind: problem
type: answer
answer: 2021=506^{2}-504^{2}+1^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=2173
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Note that $(n+1)^{2}-(n-1)^{2}=4 n$, i.e., numbers $a=4 n$ that are multiples of four can be represented as the difference of squares of two integers, and therefore, with the condition of zero, can be represented as the sum or difference of four squares. If $a=4 n \pm 1$, then the representation is

$$
a=(n+1)^{2}-(n-1)^{2} \pm 1^{2}
$$

If $a=4 n+2$, then it can be represented as the sum or difference of four squares:

$$
a=(n+1)^{2}-(n-1)^{2}+1^{2}+1^{2}
$$

The number 2021 can be written using representation (1), so, for example, $2021=4 \cdot 505+1, n=505,2021=506^{2}-504^{2}+1^{2}$.
