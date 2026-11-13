---
tag: A5XH15WHTN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h426121
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73925
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263412
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2006
    source: hf-ai-mo-aops
    label: 2006 Stanford Mathematics Tournament
---
Polynomial $P(x)=c_{2006}x^{2006}+c_{2005}x^{2005}+\ldots+c_1x+c_0$ has roots $r_1,r_2,\ldots,r_{2006}$ . The coefficients satisfy $2i\tfrac{c_i}{c_{2006}-i}=2j\tfrac{c_j}{c_{2006}-j}$ for all pairs of integers $0\le i,j\le2006$ . Given that $\sum_{i\ne j,i=1,j=1}^{2006} \tfrac{r_i}{r_j}=42$ , determine $\sum_{i=1}^{2006} (r_1+r_2+\ldots+r_{2006})$ .
