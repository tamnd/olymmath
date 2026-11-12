---
tag: BH7GRMECVQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Tuymaada Olympiad
    url: https://artofproblemsolving.com/community/c6h357592
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5988
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tuymaada/2010
    source: hf-ai-mo-aops
    label: 2010 Tuymaada Olympiad
---
On a blackboard there are $2010$ natural nonzero numbers. We define a "move" by erasing $x$ and $y$ with $y\neq0$ and replacing them with $2x+1$ and $y-1$ , or we can choose to replace them by $2x+1$ and $\frac{y-1}{4}$ if $y-1$ is divisible by 4.

Knowing that in the beginning the numbers $2006$ and $2008$ have been erased, show that the original set of numbers cannot be attained again by any sequence of moves.
