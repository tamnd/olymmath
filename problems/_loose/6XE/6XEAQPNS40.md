---
tag: 6XEAQPNS40
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=346
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2025
    source: hf-mathnet
    label: China China-TST-2025A
---
Let $k$, $l$, $n$ be positive integers, and let $a_1, a_2, \dots, a_k \in \{1, 2, \dots, n\}$ satisfy the following three conditions:
(1) $n \ge 3$, $l \le n-2$, and $l-k \le \frac{n-3}{2}$;
(2) For each $t \in \{1, 2, \dots, l\}$, there exists a non-empty subset $I \subseteq \{1, 2, \dots, k\}$ such that
$$
\sum_{i \in I} a_i \equiv t \pmod{n};
$$
(3) For each $t \in \{l+1, l+2, \dots, n\}$, there does not exist a non-empty subset $I \subseteq \{1, 2, \dots, k\}$ such that
$$
\sum_{i \in I} a_i \equiv t \pmod{n}.
$$
Prove that $a_1 + a_2 + \dots + a_k = l$.
