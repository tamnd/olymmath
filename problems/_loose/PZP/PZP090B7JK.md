---
tag: PZP090B7JK
kind: problem
type: answer
answer: C = 3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252911
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be some positive integer and $a_1 , a_2 , \dots , a_n$ be real numbers. Denote
$$S_0 = \sum_{i=1}^{n} a_i^2 , \hspace{1cm} S_1 = \sum_{i=1}^{n} a_ia_{i+1} , \hspace{1cm} S_2 = \sum_{i=1}^{n} a_ia_{i+2},$$
where $a_{n+1} = a_1$ and $a_{n+2} = a_2.$

1. Show that $S_0 - S_1 \geq 0$.
2. Show that $3$ is the minimum value of $C$ such that for any $n$ and $a_1 , a_2 , \dots , a_n,$ there holds $C(S_0 - S_1) \geq S_1 - S_2$.
