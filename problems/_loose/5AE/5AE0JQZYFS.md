---
tag: 5AE0JQZYFS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90386
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=105
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alice picks an odd integer $n$ and writes the fraction

$$
\frac{2 n+2}{3 n+2}
$$

Show that this fraction is already in lowest terms. (For example, if $n=5$ this is the fraction $\frac{12}{17}$.)
