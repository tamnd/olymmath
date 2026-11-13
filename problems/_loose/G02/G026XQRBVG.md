---
tag: G026XQRBVG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166683
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two people play the following game: they alternately say the divisors of 1000 (positive), with the condition that they cannot say a divisor that is also a divisor of a previously said divisor. The one who is forced to say 1000 loses.

Show that if the first player plays skillfully, they always win.

What is the situation if the game is modified so that they cannot say a divisor that has fewer divisors than any previously said number?
