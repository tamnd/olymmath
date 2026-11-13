---
tag: 9EGZ6JNT4N
kind: problem
type: answer
answer: \frac{1}{a_{1}}+\frac{1}{a_{2}}+\cdots+\frac{1}{a_{1009}}<\frac{7}{6}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=124956
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let positive integers
$$
1<a_{1}<a_{2}<\cdots<a_{1009}<2018,
$$

where, for any $i \neq j$, the least common multiple of $a_{i}$ and $a_{j}$ is greater than 2018. Prove:
$$
\frac{1}{a_{1}}+\frac{1}{a_{2}}+\cdots+\frac{1}{a_{1009}}<\frac{7}{6} .
$$
