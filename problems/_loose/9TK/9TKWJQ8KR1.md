---
tag: 9TKWJQ8KR1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75839
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each natural number $k$, let $P(k)$ denote the number of all $4k$-digit numbers that can be formed from the digits 2, 0 and are divisible by 2020. Prove the inequality

$$
P(k) \geqq\left(\begin{array}{c}
2 k-1 \\
k
\end{array}\right)^{2}
$$

and determine all $k$ for which equality holds.

(Jaromír Šimša)
