---
tag: NG49AY2Y3T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=356
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2025
    source: hf-mathnet
    label: China 2025 International Mathematical Olympiad China National Team Selection Test
---
Given an odd positive integer $n$, let $m = \frac{n+1}{2}$. Let positive integers $a_1, a_2, \dots, a_m$ be pairwise incongruent modulo $n$, and positive integers $b_1, b_2, \dots, b_m$ be pairwise incongruent modulo $n$. Prove that the set
$$
C = \{a_i + b_j \text{ (least nonnegative residue modulo } n) \mid i, j \in \{1, 2, \dots, m\}, i \neq j\}
$$
has more than $n - \sqrt{n} - \frac{1}{2}$ elements.
