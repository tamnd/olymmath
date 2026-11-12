---
tag: WYRXCFWQF6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=14132
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For which prime numbers $p$ is the value of the expression $22 p^{2}+23$ also a prime number? Consider all remainders when dividing by 3.

1) If $p=3 k$ (divides evenly), then $p=3$, as only one prime number divides evenly by 3. Then $22 p^{2}+23=221.221=17 \cdot 13$, which is composite.
2) If $p=3 k \pm 1$ (gives a remainder of 1 or 2), then

$$
22 p^{2}+23=22(3 k \pm 1)^{2}+23=22 \cdot 9 k^{2} \pm 22 \cdot 6 k+22+23=
$$

$=22 \cdot 9 k^{2} \pm 22 \cdot 6 k+45$. Each term is divisible by 3 and the sum is no less than 23. The value of the expression is composite.
