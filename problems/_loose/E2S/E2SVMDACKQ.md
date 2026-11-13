---
tag: E2SVMDACKQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h455111
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66579
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199573
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ahsme
    source: hf-ai-mo-aops
    label: AHSME
---
For distinct real numbers $x$ and $y$ , let $M(x,y)$ be the larger of $x$ and $y$ and let $m(x,y)$ be the smaller of $x$ and $y$ . If $a<b<c<d<e$ , then
$$ M(M(a,m(b,c)),m(d,m(a,e)))= $$ $ \textbf{(A)}\ a \textbf{(B)}\ b \textbf{(C)}\ c \textbf{(D)}\ d \textbf{(E)}\ e $
