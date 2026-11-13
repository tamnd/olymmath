---
tag: G1Q4PD7QCM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260203
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ \{X_n\}$ and $ \{Y_n\}$ denote two sequences of integers defined as follows:
\begin{align*} X_0 = 1,\ X_1 = 1,\ X_{n + 1} = X_n + 2X_{n - 1} (n = 1,2,3,\ldots), \\
Y_0 = 1,\ Y_1 = 7,\ Y_{n + 1} = 2Y_n + 3Y_{n - 1} (n = 1,2,3,\ldots).\end{align*}
Prove that, except for the "1", there is no term which occurs in both sequences.
