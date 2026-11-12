---
tag: 9B3YHEBKJ0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3610445
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2621
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2025
    source: hf-ai-mo-aops
    label: 2025 Germany Team Selection Test
---
Let $\mathcal{S}$ be a finite nonempty set of prime numbers. Let $1 = b_1 < b_2 < \dots$ be the sequence of all positive integers whose prime divisors all belong to $\mathcal{S}$ . Prove that, for all but finitely many positive integers $n$ , there exist positive integers $a_1, a_2, \dots, a_n$ such that
$$
\frac{a_1}{b_1} + \frac{a_2}{b_2} + \dots + \frac{a_n}{b_n} = \left\lceil \frac{1}{b_1} + \frac{1}{b_2} + \dots + \frac{1}{b_n} \right\rceil
$$
