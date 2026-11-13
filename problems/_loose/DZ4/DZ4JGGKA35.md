---
tag: DZ4JGGKA35
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=354
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
Given integer sequences $\{x_n\}_{n \ge 1}$, $\{y_n\}_{n \ge 1}$. Prove that there exists an integer sequence $\{z_n\}_{n \ge 1}$ such that for any positive integer $n$,
$$
\sum_{k|n} k z_k^{n/k} = \left( \sum_{k|n} k x_k^{n/k} \right) \cdot \left( \sum_{k|n} k y_k^{n/k} \right).
$$
Here all three sums are taken over all positive divisors $k$ of $n$. For example, when $n = 6$:
$$
6z_6 + 3z_3^2 + 2z_2^3 + z_1^6 = (6x_6 + 3x_3^2 + 2x_2^3 + x_1^6) \cdot (6y_6 + 3y_3^2 + 2y_2^3 + y_1^6).
$$
