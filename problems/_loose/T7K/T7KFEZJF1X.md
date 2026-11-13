---
tag: T7KFEZJF1X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204492
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Japan/train/0000.parquet#row=310
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jp-jmo
    source: hf-mathnet
    label: Japan Japan Mathematical Olympiad
---
For any two positive real numbers $x,y$, we define$x\star y=\frac{x}{xy+1}$. Find the value of
$$(((\ldots(((100\star 99)\star 98)\star 97)\star \ldots)\star 3)\star 2)\star 1.$$
(Do not use the $\star$ operator in your answer.)
