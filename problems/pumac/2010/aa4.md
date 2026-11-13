---
tag: HFNNG7AT3J
kind: problem
appearances:
  - at: pumac/2010/aa4
    primary: true
  - at: pumac/2010/ab6
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2010 official paper
    url: https://pumac.princeton.edu/s/PUMaC2010_AlgebraA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h425748
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5442
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define $ {f(x) = x + \sqrt{x + \sqrt{x + \sqrt{x + \sqrt{x + \ldots}}}}}$ . Find the smallest integer $x$ such that $f(x)\ge50\sqrt{x}$ .

(Edit: The official question asked for the "smallest integer"; the intended question was the "smallest positive integer".)
