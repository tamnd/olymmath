---
tag: SJX5H19HER
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213961
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=165
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x,y,z$ be positive real numbers such that $x+y+z \ge x^2+y^2+z^2$. Show that;
$$\dfrac{x^2+3}{x^3+1}+\dfrac{y^2+3}{y^3+1}+\dfrac{z^2+3}{z^3+1}\ge6$$
