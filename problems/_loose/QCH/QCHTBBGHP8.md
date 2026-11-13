---
tag: QCHTBBGHP8
kind: problem
type: answer
answer: \in[1,2]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75526
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all positive real numbers $t$ such that for any non-negative real number $x$, the inequality

$$
\frac{t}{x+2}+\frac{x}{t(x+1)} \leqq 1
$$

holds.
