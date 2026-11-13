---
tag: FD0P5XTX5W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264933
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $k$, define the $k$-*pop* of a positive integer $n$ as the infinite sequence of integers $a_1, a_2, ...$ such that $a_1 = n$ and $$a_{i+1}= \left\lfloor \frac{a_i}{k} \right\rfloor , i = 1, 2, ..$$
where $ \lfloor x\rfloor $ denotes the greatest integer less than or equal to $x$. Furthermore, define a positive integer $m$ to be $k$-*pop avoiding* if $k$ does not divide any nonzero term in the $k$-pop of $m$. For example, $14$ is 3-pop avoiding because $3$ does not divide any nonzero term in the $3$-pop of $14$, which is $14, 4, 1, 0, 0, ....$ Suppose that the number of positive integers less than $13^{2018}$ which are $13$-pop avoiding is equal to N. What is the remainder when $N$ is divided by $1000$?
