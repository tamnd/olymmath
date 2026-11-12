---
tag: RJWCNT9YF5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h514294
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55758
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=56421
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2000
    source: hf-ai-mo-aops
    label: 2000 All-Russian Olympiad
---
We are given five equal-looking weights of pairwise distinct masses. For any three weights $A$ , $B$ , $C$ , we can check by a measuring if $m(A) < m(B) < m(C)$ , where $m(X)$ denotes the mass of a weight $X$ (the answer is *yes* or *no*.) Can we always arrange the masses of the weights in the increasing order with at most nine measurings?
