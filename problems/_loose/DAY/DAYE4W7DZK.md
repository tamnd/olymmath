---
tag: DAYE4W7DZK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 North Macedonia National Olympiad
    url: https://artofproblemsolving.com/community/c6h2006031
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=49382
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245260
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mk-mo/1998
    source: hf-ai-mo-aops
    label: 1998 North Macedonia National Olympiad
---
The sequence $(a_n)$ is defined by $a_1 =\sqrt2$ and $a_{n+1} =\sqrt{2-\sqrt{4-a_n^2}}$ .
Let $b_n =2^{n+1}a_n$ . Prove that $b_n \le 7$ and $b_n < b_{n+1}$ for all $n$ .
