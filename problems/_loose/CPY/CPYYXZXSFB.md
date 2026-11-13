---
tag: CPYYXZXSFB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204903
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=308
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Initially the equation
$$\star \frac{1}{x-1} \star \frac{1}{x-2} \star \frac{1}{x-4} ... \star \frac{1}{x-2^{2023}}=0$$

is written on the board. In each turn Aslı and Zehra deletes one of the stars in the equation and writes $+$ or $-$ instead. The first move is performed by Aslı and continues in order. What is the maximum number of real solutions Aslı can guarantee after all the stars have been replaced by signs?
