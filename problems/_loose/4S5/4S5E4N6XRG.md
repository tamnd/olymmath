---
tag: 4S5E4N6XRG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236283
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence of positive real numbers $a_1, a_2, a_3, ... $ satisfies $a_n = a_{n-1} + a_{n-2}$ for all $n \ge 3$. A sequence $b_1, b_2, b_3, ...$ is defined by equations
$b_1 = a_1$ ,
$b_n = a_n + (b_1 + b_3 + ...+ b_{n-1})$ for even $n > 1$ ,
$b_n = a_n + (b_2 + b_4 + ... +b_{n-1})$ for odd $n > 1$.
Prove that if $n\ge 3$, then $\frac13 < \frac{b_n}{n \cdot a_n} < 1$
