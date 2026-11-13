---
tag: MYBKYY1CWE
kind: problem
type: answer
answer: n \not\equiv 5 \pmod{6}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203673
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all positive integers $n$ such that the set $S=\{1,2,3, \dots 2n\}$ can be divided into $2$ disjoint subsets $S_1$ and $S_2$, i.e. $S_1 \cap S_2 = \emptyset$ and $S_1 \cup S_2 = S$, such that each one of them has $n$ elements, and the sum of the elements of $S_1$ is divisible by the sum of the elements in $S_2$.

*Proposed by Viktor Simjanoski*
