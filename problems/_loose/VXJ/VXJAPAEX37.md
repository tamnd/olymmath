---
tag: VXJAPAEX37
kind: problem
type: answer
answer: (m, p) = (2, p) or (3, p) for any prime p at least five
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=175
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad
---
Let $m \ge 2$ be a positive integer and $p \ge 5$ be a prime number. Consider the sequence $a_n$ defined by $a_n = (p-2)^n + p^n - m$ for $n \ge 1$, and let $q$ be the smallest prime that divides a member of the sequence. Determine all pairs $(m, p)$ such that $q \ge m$.
(Bayarmagnai Gombodorj)
