---
tag: M8FNH13VGP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1978 All Soviet Union Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1872878
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55297
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248664
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1978
    source: hf-ai-mo-aops
    label: 1978 All Soviet Union Mathematical Olympiad
---
The checker is standing on the corner field of a $n\times n$ chess-board. Each of two players moves it in turn to the neighbour (i.e. that has the common side) field. It is forbidden to move to the field, the checker has already visited. That who cannot make a move losts.

a) Prove that for even $n$ the first can always win, and if $n$ is odd, than the second can always win.

b) Who wins if the checker stands initially on the neighbour to the corner field?
