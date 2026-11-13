---
tag: DJQBSW0SYN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Serbia National Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2560878
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=20481
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221993
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rs-smo/2021
    source: hf-ai-mo-aops
    label: 2021 Serbia National Math Olympiad
---
A convex quadrilateral $ABCD$ will be called *rude* if there exists a convex quadrilateral $PQRS$ whose points are all in the interior or on the sides of quadrilateral $ABCD$ such that the sum of diagonals of $PQRS$ is larger than the sum of diagonals of $ABCD$ .

Let $r>0$ be a real number. Let us assume that a convex quadrilateral $ABCD$ is not rude, but every quadrilateral $A'BCD$ such that $A'\neq A$ and $A'A\leq r$ is rude. Find all possible values of the largest angle of $ABCD$ .
