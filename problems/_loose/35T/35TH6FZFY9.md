---
tag: 35TH6FZFY9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h3040320
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=74093
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
Let $f^1(x)=x^3-3x$ . Let $f^n(x)=f(f^{n-1}(x))$ . Let $\mathcal{R}$ be the set of roots of $\tfrac{f^{2022}(x)}{x}$ . If
$$\sum_{r\in\mathcal{R}}\frac{1}{r^2}=\frac{a^b-c}{d}$$
for positive integers $a,b,c,d$ , where $b$ is as large as possible and $c$ and $d$ are relatively prime, find $a+b+c+d$ .
