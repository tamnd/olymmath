---
tag: 3XMWXM9NAE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h391199
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5948
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208097
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2010 Tournament Of Towns
---
A circle is divided by $2N$ points into $2N$ arcs of length $1$ . These points are joined in pairs to form $N$ chords. Each chord divides the circle into two arcs, the length of each being an even integer. Prove that $N$ is even.
