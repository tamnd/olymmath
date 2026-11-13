---
tag: GEEMS6TSNF
kind: problem
appearances:
  - at: pumac/2024/aa7
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2024 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2024_Algebra_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3450596
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73463
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $F_1=1, F_2=1,$ and $F_{n+2}=F_{n+1}+F_n.$ Then, $$ S = \sum_{n=1}^{\infty} \arctan\left(\frac{1}{F_n}\right)\arctan\left(\frac{1}{F_{n+1}}\right) $$ Find $\lfloor 80S \rfloor.$ (Hint: it may be useful to note that $\arctan(\tfrac{1}{1}) = \arctan(\tfrac{1}{2})+\arctan(\tfrac{1}{3}).$ )
