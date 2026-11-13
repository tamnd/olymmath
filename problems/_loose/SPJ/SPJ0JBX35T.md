---
tag: SPJ0JBX35T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1989 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h2928352
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39341
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236641
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1989
    source: hf-ai-mo-aops
    label: 1989 Bundeswettbewerb Mathematik
---
Find all pairs $(a,b)$ of real numbers such that $$ |\sqrt{1-x^2 }-ax-b| \leq \frac{\sqrt{2} -1}{2} $$ holds for all $x\in [0,1]$ .
