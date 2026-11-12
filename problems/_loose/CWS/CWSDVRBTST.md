---
tag: CWSDVRBTST
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1339727
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14568
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2016
    source: hf-ai-mo-aops
    label: 2016 Online Math Open Problems
---
Let $P(x,y)$ be a polynomial such that $\deg_x(P), \deg_y(P)\le 2020$ and $$P(i,j)=\binom{i+j}{i}$$ over all $2021^2$ ordered pairs $(i,j)$ with $0\leq i,j\leq 2020$ . Find the remainder when $P(4040, 4040)$ is divided by $2017$ .

Note: $\deg_x (P)$ is the highest exponent of $x$ in a nonzero term of $P(x,y)$ . $\deg_y (P)$ is defined similarly.

*Proposed by Michael Ren*
