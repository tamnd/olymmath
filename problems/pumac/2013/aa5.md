---
tag: ZEMPD604K9
kind: problem
appearances:
  - at: pumac/2013/aa5
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
    url: https://artofproblemsolving.com/community/c6h563690
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10146
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212141
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose $w,x,y,z$ satisfy \begin{align*}w+x+y+z&=25,wx+wy+wz+xy+xz+yz&=2y+2z+193\end{align*} The largest possible value of $w$ can be expressed in lowest terms as $w_1/w_2$ for some integers $w_1,w_2>0$ . Find $w_1+w_2$ .
