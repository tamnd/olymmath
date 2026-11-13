---
tag: EKHK4ADY9Z
kind: problem
type: answer
answer: (-1,2^{k}-1)(2^{k}-1,-1)for\geq2k\geq0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90164
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=251
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Art and Ben play a game while sharing an $m \times n$ chocolate bar. They take turns breaking the bar into two rectangular pieces along one of the lines and eating the smaller piece. (If the two pieces are equal, they can choose which piece to eat.) Whoever is left with the last $1 \times 1$ square of chocolate loses. If Art moves first, describe all pairs $(m, n)$ for which Ben has a winning strategy.
