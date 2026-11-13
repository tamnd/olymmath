---
tag: Y2YCK90XXG
kind: problem
type: answer
answer: 2^k
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204405
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k$ be a positive integer. A sequence of integers $a_1, a_2, \cdots$ is called $k$-pop if the following holds: for every $n \in \mathbb{N}$, $a_n$ is equal to the number of distinct elements in the set $\{a_1, \cdots , a_{n+k} \}$. Determine, as a function of $k$, how many $k$-pop sequences there are.

*Proposed by Sutanay Bhattacharya*
