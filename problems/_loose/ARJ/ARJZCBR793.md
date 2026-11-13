---
tag: ARJZCBR793
kind: problem
type: answer
answer: x^2 \sqrt{1+2y^2} + y^2 \sqrt{1+2x^2} \geq xy (x+y+\sqrt{2})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249355
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=360
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that for any real $ x $ and $ y $ the inequality $x^2 \sqrt {1+2y^2} + y^2 \sqrt {1+2x^2} \geq xy (x+y+\sqrt{2})$ .
