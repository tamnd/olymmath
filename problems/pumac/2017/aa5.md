---
tag: Z2F76NX10X
kind: problem
appearances:
  - at: pumac/2017/aa5
    primary: true
  - at: pumac/2017/ab7
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2017 official paper
    url: https://pumac.princeton.edu/s/PUMaC2017_Algebra_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1549829
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15899
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f_{0}(x)=x$ , and for each $n\geq 0$ , let $f_{n+1}(x)=f_{n}(x^{2}(3-2x))$ . Find the smallest real number that is at least as large as
$$ \sum_{n=0}^{2017} f_{n}(a) + \sum_{n=0}^{2017} f_{n}(1-a)$$
for all $a \in [0,1]$ .
