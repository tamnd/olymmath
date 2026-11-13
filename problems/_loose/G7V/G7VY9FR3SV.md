---
tag: G7VY9FR3SV
kind: problem
type: answer
answer: 2^{2023}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242702
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Sets $A_0, A_1, \dots, A_{2023}$ satisfies the following conditions:

- $A_0 = \{ 3 \}$

- $A_n = \{ x + 2 \mid x \in A_{n - 1} \} \ \cup \{x(x+1) / 2 \mid x \in A_{n - 1} \}$ for each $n = 1, 2, \dots, 2023$.

Find $|A_{2023}|$.
