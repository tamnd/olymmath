---
tag: SM9RP6PKV5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h1675538
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16590
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218222
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2018
    source: hf-ai-mo-aops
    label: 2018 India IMO Training Camp
---
Let $\Delta ABC$ be an acute triangle. $D,E,F$ are the touch points of incircle with $BC,CA,AB$ respectively. $AD,BE,CF$ intersect incircle at $K,L,M$ respectively. If, $$ \sigma = \frac{AK}{KD} + \frac{BL}{LE} + \frac{CM}{MF} $$ $$ \tau = \frac{AK}{KD}.\frac{BL}{LE}.\frac{CM}{MF} $$ Then prove that $\tau = \frac{R}{16r}$ . Also prove that there exists integers $u,v,w$ such that, $uvw \neq 0$ , $u\sigma + v\tau +w=0$ .
