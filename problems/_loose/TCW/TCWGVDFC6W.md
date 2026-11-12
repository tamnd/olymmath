---
tag: TCWGVDFC6W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1997 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h49767
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=53933
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/1997
    source: hf-ai-mo-aops
    label: 1997 Romania National Olympiad
---
function $f:\mathbb{N}^{\star} \times \mathbb{N}^{\star} \rightarrow \mathbb{N}^{\star}$ ( $\mathbb{N}^{\star}=\mathbb{N}\cup \{0\}$ )with these conditon:

1- $f(0,x)=x+1$
2- $f(x+1,0)=f(x,1)$
3- $f(x+1,y+1)=f(x,f(x+1,y))$ (romania 1997)
find $f(3,1997)$
