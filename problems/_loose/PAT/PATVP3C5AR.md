---
tag: PATVP3C5AR
kind: problem
type: answer
answer: A=A_{2}+A_{4}+A_{6},\quadB=A_{1}+A_{3}+A_{5},\quadC=A_{3}+A_{6},\quadD=A_{4}+A_{5}+A_{6}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32931
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Experiment - tossing a die. Events: $A_{k}(k=1,2,3,4,5,6)$ - "$k$ points fall", $A$ - "an even number of points falls", $B$ - "an odd number of points falls", $C$ - "a number of points that is a multiple of three falls", $D$ - "a number of points greater than three falls". Express events $A, B, C$ and $D$ in terms of events $A_{k}$.
