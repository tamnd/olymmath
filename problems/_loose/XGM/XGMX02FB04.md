---
tag: XGMX02FB04
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3152694
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73344
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2022
    source: hf-ai-mo-aops
    label: 2022 Princeton University Math Competition
---
Let $\alpha, \beta, \gamma \in C$ be the roots of the polynomial $x^3 - 3x2 + 3x + 7$ . For any complex number $z$ , let $f(z)$ be defined as follows: $$ f(z) = |z -\alpha | + |z - \beta|+ |z-\gamma | - 2 \underbrace{\max}_{w \in \{\alpha, \beta, \gamma}\} |z - w|. $$ Let $A$ be the area of the region bounded by the locus of all $z \in C$ at which $f(z)$ attains its global minimum. Find $\lfloor A \rfloor$ .
