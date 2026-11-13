---
tag: VBWJHJT4WC
kind: problem
type: answer
answer: "2022"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239282
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the set $S$ of permutations of $1, 2, \dots, 2022$ such that for all numbers $k$ in the
permutation, the number of numbers less than $k$ that follow $k$ is even.

For example, for $n=4; S = \{[3,4,1,2]; [3,1,2,4]; [1,2,3,4]; [1,4,2,3]\}$

If $|S| = (a!)^b$ where $a, b \in \mathbb{N}$, then find the product $ab$.
