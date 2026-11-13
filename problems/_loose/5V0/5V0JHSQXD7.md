---
tag: 5V0JHSQXD7
kind: problem
type: answer
answer: "54"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203859
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For positive integers $n$, let $f(n)$ denote the number of integers $1 \leq a \leq 130$ for which there exists some integer $b$ such that $a^b-n$ is divisible by $131$, and let $g(n)$ denote the sum of all such $a$. Find the remainder when$$\sum_{n = 1}^{130} [f(n) \cdot g(n)]$$is divided by $131$.

*Proposed by **ApraTrip***
