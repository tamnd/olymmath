---
tag: 9MQRWXJCFE
kind: problem
type: answer
answer: k' = \frac{p-3}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252926
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be a given odd prime. Find the largest integer $k'$ such that it is possible to partition $\{1,2,\cdots,p-1\}$ into two sets $X,Y$ such that for any $k$ with $0 \le k \le k'$,

$$\sum_{a \in X}a^k \equiv \sum_{b \in Y}b^k \pmod p$$

*houkai*
