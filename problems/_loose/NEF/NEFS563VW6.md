---
tag: NEFS563VW6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h3136485
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44457
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240731
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2023
    source: hf-ai-mo-aops
    label: 2023 Iran MO (3rd Round)
---
Find all integers $n > 4$ st for every two subsets $A,B$ of $\{0,1,....,n-1\}$ , there exists a polynomial $f$ with integer coefficients st either $f(A) = B$ or $f(B) = A$ where the equations are considered mod n.
We say two subsets are equal mod n if they produce the same set of reminders mod n. and the set $f(X)$ is the set of reminders of $f(x)$ where $x \in X$ mod n.
