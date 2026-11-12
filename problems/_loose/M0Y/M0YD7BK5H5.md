---
tag: M0YD7BK5H5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2753711
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70205
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2019
    source: hf-ai-mo-aops
    label: 2019 BMT Spring
---
Let $\phi =\frac{1}{2019}$ . Define $$ g_n =\begin{cases} 0 & \text{ if} \,\,\, round (n\phi) = round \,\,\, ((n - 1)\phi)
1 & \text{ otherwise} .\end{cases}. $$ where round $(x)$ denotes the round function.
Compute the expected value of $g_n$ if $n$ is an integer chosen from interval $[1, 2019^2]$ .
