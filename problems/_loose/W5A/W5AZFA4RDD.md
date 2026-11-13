---
tag: W5AZFA4RDD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77691
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=13
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst
    source: hf-mathnet
    label: France Préparation Olympique Française de Mathématiques
---
In the following squares, we are allowed to replace all 0s with 1s and vice versa on any entire row, any entire column, or any entire diagonal. In each case, can we obtain only 0s?

$$
\left(\begin{array}{llll}
0 & 1 & 1 & 0 \\
1 & 1 & 0 & 1 \\
0 & 0 & 1 & 1 \\
0 & 0 & 1 & 1
\end{array}\right) \left(\begin{array}{llll}
0 & 1 & 0 & 0 \\
1 & 1 & 0 & 1 \\
0 & 0 & 0 & 1 \\
1 & 0 & 1 & 1
\end{array}\right) \left(\begin{array}{llll}
0 & 0 & 0 & 0 \\
1 & 1 & 0 & 0 \\
0 & 1 & 0 & 1 \\
1 & 0 & 0 & 1
\end{array}\right)
$$
