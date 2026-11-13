---
tag: 390H0BFVHS
kind: problem
appearances:
  - at: pumac/2013/aa8
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2013 official paper
    url: https://pumac.princeton.edu/s/PUMaC2013_AlgebraA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h563694
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10150
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212145
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathcal{S}$ be the set of permutations of $\{1,2,\ldots,6\}$ , and let $\mathcal{T}$ be the set of permutations of $\mathcal{S}$ that preserve compositions: i.e., if $F\in\mathcal{T}$ then $$F(f_2\circ f_1)=F(f_2)\circ F(f_1)$$ for all $f_1,f_2\in\mathcal{S}$ . Find the number of elements $F\in\mathcal{T}$ such that if $f\in\mathcal{S}$ satisfies $f(1)=2$ and $f(2)=1$ , then $(F(f))(1)=2$ and $(F(f))(2)=1$ .
