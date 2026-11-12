---
tag: NEQ114WTF0
kind: problem
type: answer
answer: 4\frac{2}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=10749
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Short algorithm (from 8th grade, 2 points). There are 4 coins of different weights. In one action, you can weigh two coins on a balance scale without weights and find out which one is heavier. The task is to order the coins by weight. Show that there is a way to order the coins such that the expected number of weighings is less than 4.8.
