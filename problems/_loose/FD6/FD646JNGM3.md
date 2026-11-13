---
tag: FD646JNGM3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1986 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h1906229
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27993
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228342
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1986 Tournament Of Towns
---
We define $N !!$ to be $N(N - 2)(N -4)...5 \cdot 3 \cdot 1$ if $N$ is odd and $N(N -2)(N -4)... 6\cdot 4\cdot 2$ if $N$ is even .
For example, $8 !! = 8 \cdot 6\cdot 4\cdot 2$ , and $9 !! = 9v 7 \cdot 5\cdot 3 \cdot 1$ .
Prove that $1986 !! + 1985 !!$ i s divisible by $1987$ .

(V.V . Proizvolov , Moscow)
