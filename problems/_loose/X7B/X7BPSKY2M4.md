---
tag: X7BPSKY2M4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3534658
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2564
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2025
    source: hf-ai-mo-aops
    label: 2025 China Team Selection Test
---
Let $ p_1, p_2, \cdots, p_{2025} $ be real numbers. For $ 1 \leq i \leq 2025 $, let
$$\{a_n^{(i)}\}_{n \geq 0}$$
be an infinite real sequence satisfying
$$a_0^{(i)} = 0.$$
It is known that:

(1)
$$a_1^{(1)}, a_1^{(2)}, \cdots, a_1^{(2025)}$$
are not all zero.

(2) For any integer $ n \geq 0 $ and any $ 1 \leq i \leq 2025 $, the following holds:

$$p_i \cdot a_n^{(i+1)} = a_{n-1}^{(i)} + a_n^{(i)} + a_{n+1}^{(i)},$$

where the sequence
$$\{a_n^{(2026)}\}$$
satisfies
$$a_n^{(2026)} = a_n^{(1)}, n = 0, 1, 2, \cdots.$$

Prove that there exists a positive real number $ r $ such that for infinitely many positive integers $ n $,

$$\max \left\{ |a_n^{(1)}|, |a_n^{(2)}|, \cdots, |a_n^{(2025)}|\right\} \geq r.$$
