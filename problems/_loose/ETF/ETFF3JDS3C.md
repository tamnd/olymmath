---
tag: ETFF3JDS3C
kind: problem
type: answer
answer: "2010"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=146429
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let set $S$ have 2012 elements, satisfying that the ratio of any two elements is not an integer. For any element $x$ in $S$, if there exist distinct elements $y, z$ in $S$ different from $x$, such that $x^{2} \mid y z$, then $x$ is called a "good element". Find the maximum possible number of good elements in $S$.
