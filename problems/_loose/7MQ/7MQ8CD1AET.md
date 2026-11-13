---
tag: 7MQ8CD1AET
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=78
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way/2013
    source: hf-mathnet
    label: Baltic Way Baltic Way 2013
---
Let $B_n$ be a number of ways to partition a $n$-element set onto non-empty parts. For example, $B_3 = 5$ because we have the following partitions of the 3-element set $\{a, b, c\}$:
$$
\{a, b, c\}; \{a\}, \{b, c\}; \{a, c\}, \{b\}; \{a, b\}, \{c\}; \{a\}, \{b\}, \{c\}.
$$
Prove that for every positive integer $m$ and prime number $p$,
$$
B_{p^m} \equiv m + 1 \pmod{p}.
$$
