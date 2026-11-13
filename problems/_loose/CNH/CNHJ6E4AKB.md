---
tag: CNHJ6E4AKB
kind: problem
type: answer
answer: "No"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=376
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 75th NMO
---
Let $n \ge 3$ be an integer and $M = \{z_1, z_2, \dots, z_n\}$ be a given set of complex numbers with the sum of the elements being different from zero. Starting from the set $M$, we repeatedly apply the following transformation: at one step, we replace each of the $n$ elements of the set from the previous step with the sum of the other elements of the set from the previous step. Is it possible that, after a finite number of steps, we will obtain a set of complex numbers $\{w_1, w_2, \dots, w_n\}$ such that $\sum_{1 \le i < j \le n} w_i w_j = \sum_{1 \le i \le n} z_i z_j$ and $\sum_{1 \le i \le n} w_i \ne \pm \sum_{1 \le i \le n} z_i$?

Dorin Andrica and Sorin Monel Budişan
