---
tag: PNJJ7MWGB6
kind: problem
type: answer
answer: \ln(a) = -\frac{e^2 - 5}{2 (e^2 - 2e + 2)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210923
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$ be a positive constant. Find the value of $\ln a$ such that
$$\frac{\int_1^e \ln (ax)\ dx}{\int_1^e x\ dx}=\int_1^e \frac{\ln (ax)}{x}\ dx.$$
