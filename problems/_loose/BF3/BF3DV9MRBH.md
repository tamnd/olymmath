---
tag: BF3DV9MRBH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Pan-American Girls’ Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3724087
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27367
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pagmo/2025
    source: hf-ai-mo-aops
    label: 2025 Pan-American Girls’ Mathematical Olympiad
---
A strictly increasing sequence of integers $(a_n)_{n \ge 1}$ is called *sertaneja* if, for every $n$ ,
$$
a_{n+1} \le a_n + 3.
$$

Suppose that in some sertaneja sequence there do not exist indices $i, j, k, l$ , pairwise distinct, such that
$$
a_i + a_j + a_k = a_l.
$$

Prove that, when each term of this sequence is divided by $3$ , there is some remainder (0, 1, or 2) that does not appear.
