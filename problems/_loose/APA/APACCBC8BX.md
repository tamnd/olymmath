---
tag: APACCBC8BX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h55865
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35790
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2002
    source: hf-ai-mo-aops
    label: 2002 China Team Selection Test
---
Let $$ f(x_1,x_2,x_3) = -2 \cdot (x_1^3+x_2^3+x_3^3) + 3 \cdot (x_1^2(x_2+x_3) + x_2^2 \cdot (x_1+x_3) + x_3^2 \cdot ( x_1+x_2 ) - 12x_1x_2x_3. $$ For any reals $r,s,t$ , we denote $$ g(r,s,t)=\max_{t\leq x_3\leq t+2} |f(r,r+2,x_3)+s|. $$ Find the minimum value of $g(r,s,t)$ .
