---
tag: CH8MRFJ7G6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=147053
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Zhautykov_Olympiad/train/0000.parquet#row=28
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A convex hexagon $A B C D E F$ is inscribed in a circle. Prove the inequality

$$
A C \cdot B D \cdot C E \cdot D F \cdot A E \cdot B F \geq 27 A B \cdot B C \cdot C D \cdot D E \cdot E F \cdot F A
$$
