---
tag: T29GKFQDQ6
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186036
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine for all 30-tuples $\left(a_{1}, a_{2}, \ldots, a_{30}\right)$ of (not necessarily distinct) positive integers $a_{i}(i=1, \ldots, 30)$, which satisfy

$$
\sum_{i=1}^{30} a_{i}=1983
$$

the greatest value that the greatest common divisor $d$ of the numbers $a_{i}$ can take.
