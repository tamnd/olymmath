---
tag: KR9X989TEG
kind: problem
type: answer
answer: m
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268385
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a binary serie $A=a_1a_2...a_k$ is called "symmetry" if $a_i=a_{k+1-i}$ for all $i=1,2,3,...,k$, and $k$ is the length of that binary serie. If $A=11...1$ or $A=00...0$ then it is called "special". Find all positive integers $m$ and $n$ such that there exist non "special" binary series $A$ (length $m$) and $B$ (length $n$) satisfying when we place them next to each other, we receive a "symmetry" binary serie $AB$
