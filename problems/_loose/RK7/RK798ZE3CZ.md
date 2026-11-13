---
tag: RK798ZE3CZ
kind: problem
type: answer
answer: \frac{2c}{a} + \frac{c}{b} \geq \sqrt{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236227
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0000.parquet#row=66
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a,b,c$ be positive real numbers such that $2a^2 +b^2=9c^2$.Prove that $ \frac{2c}{a}+\frac cb \ge\sqrt 3$.
