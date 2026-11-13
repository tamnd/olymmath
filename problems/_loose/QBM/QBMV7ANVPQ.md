---
tag: QBMV7ANVPQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1935 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1877155
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56502
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249400
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1935
    source: hf-ai-mo-aops
    label: 1935 Moscow Mathematical Olympiad
---
Solve the system $\begin{cases} x^3 - y^3 = 26
x^2y - xy^2 = 6
\end{cases}$ in $C$
