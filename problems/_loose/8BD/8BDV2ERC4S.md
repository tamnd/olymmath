---
tag: 8BDV2ERC4S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3414097
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73434
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2023
    source: hf-ai-mo-aops
    label: 2023 Princeton University Math Competition
---
Given a positive integer $m,$ define the polynomial $$ P_m(z) = z^4-\frac{2m^2}{m^2+1} z^3+\frac{3m^2-2}{m^2+1}z^2-\frac{2m^2}{m^2+1}z+1. $$ Let $S$ be the set of roots of the polynomial $P_5(z)\cdot P_7(z)\cdot P_8(z) \cdot P_{18}(z).$ Let $w$ be the point in the complex plane which minimizes $\sum_{z \in S} |z-w|.$ The value of $\sum_{z \in S} |z-w|^2$ equals $\tfrac{a}{b}$ for relatively prime positive integers $a$ and $b.$ Compute $a+b.$
