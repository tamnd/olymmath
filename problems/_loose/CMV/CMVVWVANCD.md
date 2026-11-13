---
tag: CMVVWVANCD
kind: problem
type: answer
answer: \cot^{2}\frac{\pi}{2n+1},\cot^{2}\frac{2\pi}{2n+1},\cdots,\cot^{2}\frac{n\pi}{2n+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93324
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the equation
$$
\mathrm{C}_{2 n+1}^{1} x^{n}-\mathrm{C}_{2 n+1}^{3} x^{n-1}+\mathrm{C}_{2 n+1}^{5} x^{n-2}-\cdots+(-1)^{n}=0
$$
