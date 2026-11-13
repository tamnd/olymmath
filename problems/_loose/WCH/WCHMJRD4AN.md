---
tag: WCHMJRD4AN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=176819
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Middle_European_Mathematical_Olympiad_MEMO/train/0000.parquet#row=68
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: memo
    source: hf-mathnet
    label: Middle European Mathematical Olympiad (MEMO) Middle European Mathematical Olympiad
---
A positive integer $n$ is called a Mozartian number if the numbers $1,2, \ldots, n$ together contain an even number of each digit (in base 10).

Prove:

(a) All Mozartian numbers are even.

(b) There are infinitely many Mozartian numbers.
