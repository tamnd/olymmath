---
tag: RKPHG5TH3C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h418609
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4907
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2010
    source: hf-ai-mo-aops
    label: 2010 Germany Team Selection Test
---
Find all functions $f: \mathbb{R} \to \mathbb{R}$ such that
$$f(x)f(y) = (x+y+1)^2 \cdot f \left( \frac{xy-1}{x+y+1} \right)$$ $\forall x,y \in \mathbb{R}$ with $x+y+1 \neq 0$ and $f(x) > 1$ $\forall x > 0.$
