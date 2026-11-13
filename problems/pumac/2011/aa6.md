---
tag: VYQQAVEHZA
kind: problem
appearances:
  - at: pumac/2011/aa6
    primary: true
  - at: pumac/2011/ab7
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2011 official paper
    url: https://pumac.princeton.edu/s/PUMaC2011_AlgebraA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1920819
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7021
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209150
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence of real numbers $\{a_n\}_{n = 1}^\infty (n=1,2,...)$ has the following property:
\begin{align*}
6a_n+5a_{n-2}=20+11a_{n-1}\ (\text{for }n\geq3).
\end{align*}
The first two elements are $a_1=0, a_2=1$ . Find the integer closest to $a_{2011}$ .
