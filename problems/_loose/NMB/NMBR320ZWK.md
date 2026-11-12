---
tag: NMBR320ZWK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=15004
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Petya chose a natural number $n$ and wrote the following $n$ fractions on the board:

$$
\frac{0}{n}, \frac{1}{n-1}, \frac{2}{n-2}, \frac{3}{n-3}, \ldots, \frac{n-1}{n-(n-1)}
$$

Let the number $n$ be divisible by a natural number $d$. Prove that among the written fractions, there will be a fraction equal to the number $d-1$.

(B. Obuhov)
