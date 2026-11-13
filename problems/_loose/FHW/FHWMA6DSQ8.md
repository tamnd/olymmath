---
tag: FHWMA6DSQ8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1988 National High School Mathematics League
    url: https://artofproblemsolving.com/community/c6h2015446
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36035
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119761
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/1988
    source: hf-ai-mo-aops
    label: 1988 National High School Mathematics League
---
Given three planes $\alpha,\beta,\gamma$ . Intersection angle between any two planes are all $\theta$ . $\alpha\cap\beta=a,\beta\cap\gamma=b,\gamma\cap\alpha=c$ .
Given two conditions:
A: $\theta>\frac{\pi}{3}$ B: $a,b,c$ share one point. $(\text{A})$ A is sufficient but unnecessary condition of B. $(\text{B})$ A is necessary but insufficient condition of B. $(\text{C})$ A is sufficient and necessary condition of B. $(\text{D})$ None above
