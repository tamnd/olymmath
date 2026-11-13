---
tag: DK3G4T2ABQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250816
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=427
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAUDI ARABIAN MATHEMATICAL COMPETITIONS
---
For integer $n > 1$, consider $n$ cube polynomials $P_1(x), ..., P_n(x)$ such that each polynomial has $3$ distinct real roots. Denote $S$ as the set of roots of following equation $P_1(x)P_2(x)P_3(x)... P_n(x) = 0$.
It is also known that for each $1 \le i < j \le n, P_i(x)P_j(x) = 0$ has $5$ distinct real roots.
1. Prove that if for each $a, b \in S$, there is exactly one $i \in\{1,2, 3,..., n\}$ such that $P_i(a) = P_i(b) = 0$ then $n = 7$.
2. Prove that if $n > 7$ then $|S| = 2n + 1$.
