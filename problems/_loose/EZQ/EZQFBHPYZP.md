---
tag: EZQFBHPYZP
kind: problem
type: answer
answer: \frac{1}{\sqrt[5]{1-2022^{5}}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=6275
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In-1 There is a function

$$
f(x)=\frac{1}{\sqrt[5]{1-x^{5}}}
$$

Calculate

$$
f(f(f(f(f(\ldots f(2022)))) \ldots))
$$

where the function $f$ is applied 1303 times.
