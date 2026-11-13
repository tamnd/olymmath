---
tag: AX1QTPWH4S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230495
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0000.parquet#row=144
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2012
    source: hf-mathnet
    label: Belarus Belorusija 2012
---
Define $M_n = \{1,2,...,n\}$, for any $n\in N$. A collection of $3$-element subsets of $M_n$ is said to be *fine * if for any coloring of elements of $M_n$ in two colors there is a subset of the collection all three elements of which are of the same color.
For any $n\ge 5$ find the minimal possible number of the $3$-element subsets of $M_n$ in the fine collection.

(E. Barabanov, S. Mazanik, I. Voronovich)
