---
tag: CMQ0KCFH11
kind: problem
type: answer
answer: allpositiveoddintegers
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154081
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0000.parquet#row=179
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines Tenth Philippine Mathematical Olympiad
---
Sharon has a chandelier containing $n$ identical candles. She lights up the candles for $n$ consecutive Sundays in the following manner: the first Sunday, she lights up one candle for one hour; the second Sunday, she lights up two candles, conveniently chosen, for one hour; and continues in the same fashion, increasing the number of candles lighted each Sunday by one, until in the $n$th Sunday, she lights up all the $n$ candles for one hour. For what values of $n$ is it possible for all the $n$ candles to be of equal lengths right after the $n$th Sunday?
