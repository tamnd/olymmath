---
tag: 5PZDNH9E88
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024-25 IOQM India
    url: https://artofproblemsolving.com/community/c6h3394961
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42394
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-prmo-ioqm/2024
    source: hf-ai-mo-aops
    label: 2024-25 IOQM India
---
Initially, there are $3^{80}$ particles at the origin $(0,0)$ . At each step the particles are moved to points above the $x$ -axis as follows: if there are $n$ particles at any point $(x,y)$ , then $\Bigl \lfloor \frac{n}{3} \Bigr\rfloor$ of them are moves to $(x+1,y+1)$ , $\Bigl \lfloor \frac{n}{3} \Bigr\rfloor$ are moved to $(x,y+1)$ and the remaining to $(x-1,y+1)$ , For example, after the first step, there are $3^{79}$ particles each at $(1,1),(0,1)$ and $(-1,1)$ . After the second step, there are $3^{78}$ particles each at $(-2,2)$ and $(2,2)$ , $2 \times 3^{78}$ particles each at $(-1,2)$ and $(1,2)$ , and $3^{79}$ particles at $(0,2)$ . After $80$ steps, the number of particles at $(79,80)$ is:
