---
tag: BG045WSBR1
kind: problem
type: answer
answer: 2n-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=17144
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n$ coins of pairwise distinct masses and $n$ balance scales, $n>2$. In each weighing, it is allowed to choose some one scale, place one coin on each of its pans, look at the scale's reading, and then remove the coins. Some one of the scales (it is unknown which) is broken and may randomly give either a correct or an incorrect result. What is the minimum number of weighings required to definitely find the heaviest coin?
