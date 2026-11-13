---
tag: ZAMWAKPAJF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h2349595
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44415
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240689
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2020
    source: hf-ai-mo-aops
    label: 2020 Iran MO (3rd Round)
---
We call a polynomial $P(x)$ intresting if there are $1398$ distinct positive integers $n_1,...,n_{1398}$ such that $$ P(x)=\sum_{}{x^{n_i}}+1 $$
Does there exist infinitly many polynomials $P_1(x),P_2(x),...$ such that for each distinct $i,j$ the polynomial $P_i(x)P_j(x)$ is interesting.
