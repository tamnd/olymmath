---
tag: 5QQSHT0VY2
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210928
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x)=\int_0^{x} e^{t} (\cos t+\sin t)\ dt,\ g(x)=\int_0^{x} e^{t} (\cos t-\sin t)\ dt.$

For a real number $a$, find $\sum_{n=1}^{\infty} \frac{e^{2a}}{\{f^{(n)}(a)\}^2+\{g^{(n)}(a)\}^2}.$
