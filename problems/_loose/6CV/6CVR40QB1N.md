---
tag: 6CVR40QB1N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1920872
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7056
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2011
    source: hf-ai-mo-aops
    label: 2011 Princeton University Math Competition
---
Let $\{g_i\}_{i=0}^{\infty}$ be a sequence of positive integers such that $g_0=g_1=1$ and the following recursions hold for every positive integer $n$ : \begin{align*}
g_{2n+1} &= g_{2n-1}^2+g_{2n-2}^2
g_{2n} &= 2g_{2n-1}g_{2n-2}-g_{2n-2}^2
\end{align*}
Compute the remainder when $g_{2011}$ is divided by $216$ .
