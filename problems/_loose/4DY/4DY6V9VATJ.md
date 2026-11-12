---
tag: 4DY6V9VATJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=36754
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$a_{1}, a_{2}, \ldots, a_{p}$ - real numbers; $M$ - the largest of them, and $m$ - the smallest. Prove that

$$
(p-1)(M-m) \leqslant \sum_{i, j}\left|a_{i}-a_{j}\right| \leqslant p^{2} \frac{(M-m)}{4}
$$
