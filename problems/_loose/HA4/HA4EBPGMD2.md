---
tag: HA4EBPGMD2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1993 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h3337750
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28252
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1993 Tournament Of Towns
---
Construct a set of $k$ integer weights that allows you to get any total integer weight from $1$ up to $55$ grams even if some of the weights of the set are lost. Consider two versions:
(a) $k = 10$ , and any one of the weights may be lost;
(b) $k = 12$ , and any two of the weights may be lost.

(D Zvonkin)

(In both cases prove that the set found has the property required.)
