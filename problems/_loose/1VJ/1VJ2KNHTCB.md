---
tag: 1VJ2KNHTCB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90928
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0006.parquet#row=463
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose that 2002 numbers, each equal to 1 or -1 , are written around a circle. For every two adjacent numbers, their product is taken; it turns out that the sum of all 2002 such products is negative. Prove that the sum of the original numbers has absolute value less than or equal to 1000. (The absolute value of $x$ is usually denoted by $|x|$. It is equal to $x$ if $x \geq 0$, and to $-x$ if $x<0$. For example, $|6|=6,|0|=0$, and $|-7|=7$.)
