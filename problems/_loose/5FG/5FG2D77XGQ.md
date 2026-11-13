---
tag: 5FG2D77XGQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Estonia National Olympiad
    url: https://artofproblemsolving.com/community/c6h2028086
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=38672
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236018
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo/2001
    source: hf-ai-mo-aops
    label: 2001 Estonia National Olympiad
---
A student wrote a correct addition operation $A/B+C/D = E/F$ on the blackboard, where both summands are irreducible and $F$ is the least common multiple of $B$ and $D$ . After that, the student reduced the sum $E/F$ correctly by an integer $d$ . Prove that $d$ is a common divisor of $B$ and $D$ .
