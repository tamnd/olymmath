---
tag: PEJFG9328F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269022
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that: $$\det(A)=\frac{1}{n!}\left| \begin{array}{llllll}\text{tr}(A) & 1 & 0 & \ldots & \ldots & 0 \\ \text{tr}(A^{2}) & \text{tr}(A) & 2 & 0 & \ldots & 0 \\ \text{tr}(A^{3}) & \text{tr}(A^{2}) & \text{tr}(A) & 3 & & \vdots \\ \vdots & & & & & n-1 \\ \text{tr}(A^{n}) & \text{tr}(A^{n-1}) & \text{tr}(A^{n-2}) & \ldots & \ldots & \text{tr}(A) \end{array}\right|$$
