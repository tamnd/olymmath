---
tag: HK7XSV1ZVS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239607
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define a sequence $<x_n>$ by $x_0 = 0$ and $$\large x_n = \left\{
\begin{array}{ll}
x_{n-1} + \frac{3^r-1}{2} & if \, n = 3^{r-1}(3k + 1)\\
& \\
x_{n-1} - \frac{3^r+1}{2} & if \, n = 3^{r-1}(3k + 2)\\
\end{array}
\right. $$
where $k, r$ are integers. Prove that every integer occurs exactly once in the sequence.
