---
tag: 6CVR40QB1N
kind: problem
appearances:
  - at: pumac/2011/na7
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2011 official paper
    url: https://pumac.princeton.edu/s/PUMaC2011_NumberTheoryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1920872
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7056
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209185
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\{g_i\}_{i=0}^{\infty}$ be a sequence of positive integers such that $g_0=g_1=1$ and the following recursions hold for every positive integer $n$ : \begin{align*}
g_{2n+1} &= g_{2n-1}^2+g_{2n-2}^2
g_{2n} &= 2g_{2n-1}g_{2n-2}-g_{2n-2}^2
\end{align*}
Compute the remainder when $g_{2011}$ is divided by $216$ .
