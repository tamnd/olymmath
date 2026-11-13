---
tag: PZZ5VEMF4B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1982 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h1898802
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27893
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228242
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1982 Tournament Of Towns
---
$60$ symbols, each of which is either $X$ or $O$ , are written consecutively on a strip of paper. This strip must then be cut into pieces with each piece containing symbols symmetric about their centre, e.g. $O, XX, OXXXXX, XOX$ , etc.
(a) Prove that there is a way of cutting the strip so that there are no more than $24$ such pieces.
(b) Give an example of such an arrangement of the signs for which the number of pieces cannot be less than $15$ .
(c) Try to improve the result of (b).
