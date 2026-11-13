---
tag: TXJNM7G3JV
kind: problem
type: answer
answer: (\1,0,\5,\6),(\5,\6,\1,\0),(\2,\1,\4,\1),(\4,\1,\2,\1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177682
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0000.parquet#row=253
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all integers $a, b, c, d$ such that $a c-3 b d=5$ and $a d+b c=6$.

Ivan Tonov
