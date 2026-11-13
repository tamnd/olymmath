---
tag: 6BC0HJJ4WT
kind: problem
type: answer
answer: "999999"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216212
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We say a non-negative integer $n$ "*contains*" another non-negative integer $m$, if the digits of its decimal expansion appear consecutively in the decimal expansion of $n$. For example, $2016$ *contains* $2$, $0$, $1$, $6$, $20$, $16$, $201$, and $2016$. Find the largest integer $n$ that does not *contain* a multiple of $7$.
