---
tag: GQJJH053JW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1995 Grosman Memorial Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2007992
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=45022
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241234
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: il-grossman/1995
    source: hf-ai-mo-aops
    label: 1995 Grosman Memorial Mathematical Olympiad
---
For a given positive integer $n$ , let $A_n$ be the set of all points $(x,y)$ in the coordinate plane with $x,y \in \{0,1,...,n\}$ . A point $(i, j)$ is called internal if $0 < i, j < n$ . A real function $f$ , defined on $A_n$ , is called *good* if it has the following property: For every internal point $x$ , the value of $f(x)$ is the arithmetic mean of its values on the four neighboring points (i.e. the points at the distance $1$ from $x$ ). Prove that if $f$ and $g$ are good functions that coincide at the non-internal points of $A_n$ , then $f \equiv g$ .
