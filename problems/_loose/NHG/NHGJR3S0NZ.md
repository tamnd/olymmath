---
tag: NHGJR3S0NZ
kind: problem
type: answer
answer: \suma_{i}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187280
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=10875
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1992
    source: hf-numina-olympiads
    label: IberoAmerican_MO
---
Let $f(x)=a_{1} /\left(x+a_{1}\right)+a_{2} /\left(x+a_{2}\right)+\ldots+a_{n} /\left(x+a_{n}\right)$, where $a_{i}$ are unequal positive reals. Find the sum of the lengths of the intervals in which $f(x) \geq 1$.
