---
tag: NBZ2HCGHNX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1918653
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15950
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2017
    source: hf-ai-mo-aops
    label: 2017 Princeton University Math Competition
---
The set $\{(x, y) \in R^2| \lfloor x + y\rfloor \cdot \lceil x + y\rceil = (\lfloor x\rfloor + \lceil y \rceil ) (\lceil x \rceil + \lfloor y\rfloor), 0 \le x, y \le 100\}$ can be thought of as a collection of line segments in the plane. If the total length of those line segments is $a + b\sqrt{c}$ for $c$ squarefree, find $a + b + c$ .
( $\lfloor z\rfloor$ is the greatest integer less than or equal to $z$ , and $\lceil z \rceil$ is the least integer greater than or equal to $z$ , for $z \in R$ .)
