---
tag: CTF0T9VT7K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247359
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=256
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We consider an $n \times n$ ($n \in N, n \ge 2$) square divided into $n^2$ unit squares. Determine all the values of $k \in N$ for which we can write a real number in each of the unit squares such that the sum of the $n^2$ numbers is a positive number, while the sum of the numbers from the unit squares of any $k \times k$ square is a negative number.
