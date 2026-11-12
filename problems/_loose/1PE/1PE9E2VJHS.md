---
tag: 1PE9E2VJHS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h3041685
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=74105
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2022
    source: hf-ai-mo-aops
    label: 2022 Stanford Mathematics Tournament
---
Let $f(x,y)=(\cos x+y\sin x)^2$ . We may express $\text{max}_xf(x,y)$ , the maximum value of $f(x,y)$ over all values of $x$ for a given fixed value of $y$ , as a function of $y$ , call it $g(y)$ . Let the smallest positive value $x$ which achieves this maximum value of $f(x,y)$ for a given $y$ be $h(y)$ . Compute
$$\int_1^{2+\sqrt{3}}\frac{h(y)}{g(y)}\text{d}y.$$
