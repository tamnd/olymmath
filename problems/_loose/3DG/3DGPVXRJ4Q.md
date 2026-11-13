---
tag: 3DGPVXRJ4Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h597389
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11239
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213184
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2014
    source: hf-ai-mo-aops
    label: 2014 India IMO Training Camp
---
For integers $a,b$ we define $f((a,b))=(2a,b-a)$ if $a<b$ and $f((a,b))=(a-b,2b)$ if $a\geq b$ .
Given a natural number $n>1$ show that there exist natural numbers $m,k$ with $m<n$ such that $f^{k}((n,m))=(m,n)$ ,where $f^{k}(x)=f(f(f(...f(x))))$ , $f$ being composed with itself $k$ times.
