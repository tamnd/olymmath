---
tag: MMXKH1HHKP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h3052468
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1053
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204719
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=82
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2023
    source: hf-ai-mo-aops
    label: 2023 Romania National Olympiad
  - at: ro-nmo
    source: hf-mathnet
    label: Romania THE 73rd ROMANIAN MATHEMATICAL OLYMPIAD - FINAL ROUND
---
For natural number $n$ we define

$$
a_n = \{ \sqrt{n} \} - \{ \sqrt{n + 1} \} + \{ \sqrt{n + 2} \} - \{ \sqrt{n + 3} \}.
$$

a) Show that $a_1 > 0,2$ .

b) Show that $a_n < 0$ for infinity many values of $n$ and $a_n > 0$ for infinity values of natural numbers of $n$ as well. ( We denote by $\{ x \} $ the fractional part of $x.$ )
