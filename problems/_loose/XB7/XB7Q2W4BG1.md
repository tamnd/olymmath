---
tag: XB7Q2W4BG1
kind: problem
type: answer
answer: "0"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210903
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a constant $c$, a sequence $a_n$ is defined by $a_n=\int_c^1 nx^{n-1}\left(\ln \left(\frac{1}{x}\right)\right)^n dx\ (n=1,\ 2,\ 3,\ \cdots).$

Find $\lim_{n\to\infty} a_n$.
