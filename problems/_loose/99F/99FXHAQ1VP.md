---
tag: 99FXHAQ1VP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221792
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a certain board, fractions are always written in their lowest form. Pionaj starts with 2 random positive fractions. After every minute,he replaces one of the previous 2 fractions (at random) with a new fraction that is equal to the sum of their numerators divided by the sum of their denominators. Given that he continues this indefinitely, show that eventually all the resulting fractions would be in their lowest forms even before writing them on the board(recall that he has to reduce each fration to their lowest form beore writing it on the board for the next operation). (for example starting with $\frac{15}{7}$ and $\frac{10}{3}$ he may replace it with $\frac{5}{2}$
