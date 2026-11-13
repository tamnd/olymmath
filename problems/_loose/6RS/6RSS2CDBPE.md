---
tag: 6RSS2CDBPE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h5440
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39982
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236985
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2004
    source: hf-ai-mo-aops
    label: 2004 Germany Team Selection Test
---
We attach to the vertices of a regular hexagon the numbers $1$ , $0$ , $0$ , $0$ , $0$ , $0$ . Now, we are allowed to transform the numbers by the following rules:

(a) We can add an arbitrary integer to the numbers at two opposite vertices.
(b) We can add an arbitrary integer to the numbers at three vertices forming an equilateral triangle.
(c) We can subtract an integer $t$ from one of the six numbers and simultaneously add $t$ to the two neighbouring numbers.

Can we, just by acting several times according to these rules, get a cyclic permutation of the initial numbers? (I. e., we started with $1$ , $0$ , $0$ , $0$ , $0$ , $0$ ; can we now get $0$ , $1$ , $0$ , $0$ , $0$ , $0$ , or $0$ , $0$ , $1$ , $0$ , $0$ , $0$ , or $0$ , $0$ , $0$ , $1$ , $0$ , $0$ , or $0$ , $0$ , $0$ , $0$ , $1$ , $0$ , or $0$ , $0$ , $0$ , $0$ , $0$ , $1$ ?)
