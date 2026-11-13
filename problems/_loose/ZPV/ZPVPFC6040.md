---
tag: ZPVPFC6040
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1993 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h79396
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25247
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226005
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1993
    source: hf-ai-mo-aops
    label: 1993 IMO Shortlist
---
A natural number $n$ is said to have the property $P,$ if, for all $a, n^2$ divides $a^n - 1$ whenever $n$ divides $a^n - 1.$

a.) Show that every prime number $n$ has property $P.$

b.) Show that there are infinitely many composite numbers $n$ that possess property $P.$
