---
tag: 3ZHHM91DSK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=163115
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0001.parquet#row=235
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo/2016
    source: hf-mathnet
    label: Slovenia Slovenija 2016
  - at: si-mo
    source: hf-mathnet
    label: Slovenia 60. matematično tekmovanje srednješolcev Slovenije
---
Determine all pairs of real numbers $a$ and $b$ that satisfy the inequality

$$
a^{2}(2 a-b)+b^{2}(2 b-a) \geq 0
$$
