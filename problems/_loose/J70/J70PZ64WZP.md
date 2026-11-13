---
tag: J70PZ64WZP
kind: problem
type: answer
answer: \text{all positive even integers less than or equal to } 17526
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252852
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Initially, Alice is given a positive integer $a_0$. At time $i$, Alice has two choices,
$$\begin{cases}a_i\mapsto\frac1{a_{i-1}}\\a_i\mapsto2a_{i-1}+1\end{cases}$$
Note that it is dangerous to perform the first operation, so Alice cannot choose this operation in two consecutive turns. However, if $x>8763$, then Alice could only perform the first operation. Determine all $a_0$ so that $\{i\in\mathbb N\mid a_i\in\mathbb N\}$ is an infinite set.
