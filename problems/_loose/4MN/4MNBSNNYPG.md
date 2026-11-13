---
tag: 4MNBSNNYPG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1983 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h1898821
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27905
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228254
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1983 Tournament Of Towns
---
$k$ vertices of a regular $n$ -gon $P$ are coloured. A colouring is called almost uniform if for every positive integer $m$ the following condition is satisfied:
If $M_1$ is a set of m consecutive vertices of $P$ and $M_2$ is another such set then the number of coloured vertices of $M_1$ differs from the number of coloured vertices of $M_2$ at most by $1$ .
Prove that for all positive integers $k$ and $n$ ( $k \le n$ ) an almost uniform colouring exists and that it is unique within a rotation.

(M Kontsevich, Moscow)
