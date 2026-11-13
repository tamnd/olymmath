---
tag: 1H4XBSZ5S2
kind: problem
type: answer
answer: "19"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=138251
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the permutation $\left(a_{1} a_{2} \cdots a_{20}\right)$ of $1,2 \cdots, 20$, and perform the following operation on this permutation: swap the positions of any two numbers, with the goal of transforming this permutation into $(1,2, \cdots, 20)$. Let the minimum number of operations required to achieve the goal for each permutation $a=\left(a_{1}, a_{2}, \cdots, a_{20}\right)$ be denoted as $k_{a}$. Find the maximum value of $k_{a}$.
