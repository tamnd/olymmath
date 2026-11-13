---
tag: RJAYQ0NK2T
kind: problem
type: answer
answer: "503"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220957
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the number of positive integers $n$ between $1$ and $1000$, inclusive, satisfying
$$ \lfloor \sqrt{n - 1} \rfloor + 1 = \left\lfloor \sqrt{n + \sqrt{n} + 1}\right\rfloor$$
where $\lfloor n \rfloor$ denotes the greatest integer not exceeding $n$.
