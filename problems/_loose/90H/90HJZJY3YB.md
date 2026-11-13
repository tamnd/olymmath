---
tag: 90HJZJY3YB
kind: problem
type: answer
answer: f(x)=x^{2}-11x+17,f(x)=x^{2}-13x+29,f(x)=x^{2}-7x-1,f(x)=x^{2}-9x+7
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177441
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all quadratic functions $f(x)=x^{2}-a x+b$ with integer coefficients such that there exist distinct integer numbers $m$, $n, p$ in the interval $[1,9]$ for which $|f(m)|=|f(n)|=|f(p)|=7$.
