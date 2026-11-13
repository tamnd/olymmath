---
tag: YDNJC8ZZZW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h473475
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8677
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210732
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2012
    source: hf-ai-mo-aops
    label: 2012 Romania National Olympiad
---
Prove that if $n\ge 2$ is a natural number and $x_1,x_2,\ldots,x_n$ are positive real numbers, then:

$$4\left(\frac {x_1^3-x_2^3}{x_1+x_2}+\frac {x_2^3-x_3^3}{x_2+x_3}+\ldots+\frac {x_{n-1}^3-x_n^3}{x_{n-1}+x_n}+\frac {x_n^3-x_1^3}{x_n+x_1}\right)\le
\le(x_1-x_2)^2+(x_2-x_3)^2+\ldots+(x_{n-1}-x_n)^2+(x_n-x_1)^2 .$$
