---
tag: VNAMS5PG79
kind: problem
type: answer
answer: \frac{n(n-1)}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115820
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n>1$. Let $a_{1}, a_{2}, \cdots, a_{n}$ be a permutation of $1,2, \cdots, n$. If $i<j$ and $a_{i}<a_{j}$, then $(a_{i}, a_{j})$ is called an ordered pair. $X$ is the number of ordered pairs in $a_{1}, a_{2}, \cdots, a_{n}$. Try to find $E(X)$.
(2020, University of Science and Technology of China Innovative Class Preliminary Exam)
