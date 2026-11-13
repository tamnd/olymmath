---
tag: VG9YFW1B7M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1987 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2065942
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28004
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228353
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1987 Tournament Of Towns
---
A certain number of cubes are painted in six colours, each cube having six faces of different colours (the colours in different cubes may be arranged differently) . The cubes are placed on a table so as to form a rectangle. We are allowed to take out any column of cubes, rotate it (as a whole) along its long axis and replace it in the rectangle. A similar operation with rows is also allowed. Can we always make the rectangle monochromatic (i.e. such that the
top faces of all the cubes are the same colour) by means of such operations?

( D. Fomin , Leningrad)
