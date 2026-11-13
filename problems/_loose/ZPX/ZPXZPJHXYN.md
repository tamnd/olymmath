---
tag: ZPXZPJHXYN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1984 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h2965027
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39307
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236607
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1984
    source: hf-ai-mo-aops
    label: 1984 Bundeswettbewerb Mathematik
---
Determine all bounded closed subsets $F$ of the plane with the following property: $F$ consists of at least two points and always contains two points $A$ and $B$ as well as at least one of the two semicircular arcs over the segment $AB$ .

Definitions: A subset of the $F$ of the plane is said to be closed if: For every point $P$ of the plane that is not an element of $F$ , there is a (non-degenerate) disc with center $P$ that has no elements of $F$ .
