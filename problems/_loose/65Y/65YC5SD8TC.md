---
tag: 65YC5SD8TC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236480
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$, $b$, $c$, and $d$ be positive integers such that the following two inequalities hold: $a < 10^{20} \cdot c$ and $b > 10^{23} \cdot d$.
Determine the minimum possible value of the total number of positive integer pairs $(n, m)$ for which $n \cdot m = 2^{2023}$ and

$$ \frac {ab}{n} + \frac{cd}{m} < \frac{(a + c)(b + d)}{n + m}$$

*Proposed by Stijn Cambie, Belgium*
