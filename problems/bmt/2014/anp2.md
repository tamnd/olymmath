---
tag: 54XAGK9NCT
kind: problem
appearances:
  - at: bmt/2014/anp2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: berkeley-mt
    name: Berkeley Math Tournament 2014 official paper
    url: https://berkeley.mt/archives/bmt-2014/AnaS2014.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2014 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2751556
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69824
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define $\eta(f)$ to be the number of roots that are repeated of the complex-valued polynomial $f$ (e.g. $\eta((x-1)^3\cdot(x+1)^4)=5$ ). Prove that for nonconstant, relatively prime $f,g\in\mathbb C[x]$ , $$ \eta(f)+\eta(g)+\eta(f+g)<\deg f+\deg g $$
