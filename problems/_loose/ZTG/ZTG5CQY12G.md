---
tag: ZTG5CQY12G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87528
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0000.parquet#row=83
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo/2011
    source: hf-mathnet
    label: Croatia CroatianCompetitions2011
---
Let $n$ be a natural number. Prove that the number of odd numbers among the numbers

$$
\binom{2 n+1}{1},\binom{2 n+1}{2}, \ldots,\binom{2 n+1}{k}, \ldots,\binom{2 n+1}{n}
$$

is odd.
