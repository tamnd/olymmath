---
tag: NTHXC3R7Z9
kind: problem
type: answer
answer: "121"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=138882
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The Changchun Carnival $G$ has a total of 101 attractions, and any two attractions can always be connected by some bridges, with each bridge connecting exactly two attractions, and there is at most one bridge between any two attractions. If starting from a certain attraction, one can travel along a series of different bridges through different attractions and return to the starting attraction, then such a series of bridges is called a "loop," and the number of bridges in the loop is defined as the "length" of the loop. If every bridge in the carnival $G$ lies on a loop of length at most $c(G)$, and the total number of bridges is $e(G)$, find the minimum possible value of $c(G)+e(G)$.
