---
tag: 3MCP8WGNZQ
kind: problem
type: answer
answer: f(x) = \frac{1}{2} \cos x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206501
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose that $ f(x),\ g(x)$ are differential fuctions and their derivatives are continuous.
Find $ f(x),\ g(x)$ such that $ f(x)=\frac 12-\int_0^x \{f'(t)+g(t)\}\ dt\ \ g(x)=\sin x-\int_0^{\pi} \{f(t)-g'(t)\}\ dt$.
