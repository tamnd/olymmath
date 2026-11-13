---
tag: SBTFMXYNMX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Saint Petersburg Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3058086
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57300
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250090
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-spb/2000
    source: hf-ai-mo-aops
    label: 2000 Saint Petersburg Mathematical Olympiad
---
It is known that for irrational numbers $\alpha$ , $\beta$ , $\gamma$ , $\delta$ and for any positive integer $n$ the following is true: $$ [n\alpha]+[n\beta]=[n\gamma]+[n\delta] $$ Does this mean that sets $\{\alpha,\beta\}$ and $\{\gamma,\delta\}$ are equal? (As usual $[x]$ means the greatest integer not greater than $x$ ).
