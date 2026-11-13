---
tag: DZ44XYNVJQ
kind: problem
type: answer
answer: a_n = n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216111
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all $\{a_n\}_{n\ge 0}$ that satisfies the following conditions.

(1) $a_n\in \mathbb{Z}$
(2) $a_0=0, a_1=1$
(3) For infinitly many $m$, $a_m=m$
(4) For every $n\ge2$, $\{2a_i-a_{i-1} | i=1, 2, 3, \cdots , n\}\equiv \{0, 1, 2, \cdots , n-1\}$ $\mod n$
