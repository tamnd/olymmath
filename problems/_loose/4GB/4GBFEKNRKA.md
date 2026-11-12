---
tag: 4GBFEKNRKA
kind: problem
type: answer
answer: \frac{\operatorname{LCM}(n,p)}{p}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=42105
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Divide a circle into $n$ equal arcs. Then connect the resulting points by $p$ [i.e., the 1st with the ($p+1$)th, the 2nd with the ($p+2$)th, and so on, until you return to the starting point. How many sides will the resulting polygon have?

Remark. It is useful to check the general formula obtained for $n=10$ and $p=2,3$, and 4.
