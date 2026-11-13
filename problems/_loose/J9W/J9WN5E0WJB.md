---
tag: J9WN5E0WJB
kind: problem
type: answer
answer: f(x) = \frac{1}{(1 + (\sqrt{2} - 1)x)^2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242162
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$ f(x)$ is a continuous function which takes positive values for $ x\geq 0.$
Find $ f(x)$ such that $ \int_0^x f(t)dt=x\sqrt{f(x)}$ with $ f(1)=\frac{1}{2}$.
