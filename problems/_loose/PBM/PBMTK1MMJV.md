---
tag: PBMTK1MMJV
kind: problem
type: answer
answer: \lim_{n \to \infty} x_n = \sqrt{2022} - 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269188
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_1=2021$, $x_n^2-2(x_n+1)x_{n+1}+2021=0$ ($n\geq1$). Prove that the sequence ${x_n}$ converges. Find the limit $\lim_{n \to \infty} x_n$.
