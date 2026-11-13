---
tag: CY3EEXPDWA
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160653
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine
$$
\lim _{n \rightarrow \infty} \sum_{i=0}^{n} \frac{1}{\binom{n}{i}} .
$$
(Note: Here $\binom{n}{i}$ denotes $\frac{n!}{i!(n-i)!}$ for $i=0,1,2,3, \cdots, n$.
