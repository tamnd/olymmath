---
tag: WQ36PPRG5P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Croatia National Olympiad
    url: https://artofproblemsolving.com/community/c6h2537197
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37272
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235246
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo/2001
    source: hf-ai-mo-aops
    label: 2001 Croatia National Olympiad
---
Let there be given triples of integers $(r_j,s_j,t_j),~j=1,2,\ldots,N$ , such that for each $j$ , $r_j,t_j,s_j$ are not all even. Show that one can find integers $a,b,c$ such that $ar_j+bs_j+ct_j$ is odd for at least $\frac{4N}7$ of the indices $j$ .
