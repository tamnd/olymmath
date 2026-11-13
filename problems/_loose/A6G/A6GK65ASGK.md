---
tag: A6GK65ASGK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75029
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/South_Africa/train/0000.parquet#row=60
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: za-samo
    source: hf-mathnet
    label: South Africa South-Afrika 2011-2013
---
Show that for every natural number $n$ the product

$$
\left(4-\frac{2}{1}\right)\left(4-\frac{2}{2}\right)\left(4-\frac{2}{3}\right) \ldots\left(4-\frac{2}{n}\right)
$$

is an integer.
