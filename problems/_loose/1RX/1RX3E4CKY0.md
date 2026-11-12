---
tag: 1RX3E4CKY0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Francophone Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3566007
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2609
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: francophone/2025
    source: hf-ai-mo-aops
    label: 2025 Francophone Mathematical Olympiad
---
Determine all sequences of strictly positive integers $a_1, a_2, a_3, \ldots$ satisfying the following two conditions:

- There exists an integer $M > 0$ such that, for all indices $n \geqslant 1$ , $0 < a_n \leqslant M$ .
- For any prime number $p$ and for any index $n \geqslant 1$ , the number
$$
a_n a_{n+1} \cdots a_{n+p-1} - a_{n+p}
$$
is a multiple of $p$ .
