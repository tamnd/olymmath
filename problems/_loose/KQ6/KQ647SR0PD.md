---
tag: KQ647SR0PD
kind: problem
type: answer
answer: "13"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=136881
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Austria/train/0000.parquet#row=173
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any positive integers $x, y, z$, if $x \mid y^{3}$, $y \mid z^{3}$, $z \mid x^{3}$, and $x y z \mid (x+y+z)^{n}$, find the smallest positive integer $n$ that satisfies the condition.
