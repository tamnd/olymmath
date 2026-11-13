---
tag: WDKD3AFABR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90415
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=259
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $m$ friends with $n$ cupcakes each weighing 1 ounce. They wish to split the cupcakes equally by dividing each cupcake into some number of parts, and allocating some parts to each person.

a) Assume $m=3$ and $n=5$. Show that they may divide the cupcakes with all pieces being larger than $\frac{1}{3}$ ounces.

b) Assume $m=5$ and $n=3$. Show that they may divide the cupcakes with all pieces being larger than $\frac{1}{5}$ ounces.
