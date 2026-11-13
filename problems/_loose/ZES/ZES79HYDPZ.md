---
tag: ZES79HYDPZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253580
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A$ and $B$ be nonempty sets and let $f : A \to B$. Prove that the following statements are equivalent:

$\text{(i) }$ $f$ is surjective.

$\text{(ii)} $ For every set $C$ and and every functions $g, h : B \to C$, if $g\circ f = h \circ f$ then $g = h$.
