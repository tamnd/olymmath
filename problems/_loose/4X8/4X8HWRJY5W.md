---
tag: 4X8HWRJY5W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h563724
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10160
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2013
    source: hf-ai-mo-aops
    label: 2013 Princeton University Math Competition
---
Triangle $A_1B_1C_1$ is an equilateral triangle with sidelength $1$ . For each $n>1$ , we construct triangle $A_nB_nC_n$ from $A_{n-1}B_{n-1}C_{n-1}$ according to the following rule: $A_n,B_n,C_n$ are points on segments $A_{n-1}B_{n-1},B_{n-1}C_{n-1},C_{n-1}A_{n-1}$ respectively, and satisfy the following: $$\dfrac{A_{n-1}A_n}{A_nB_{n-1}}=\dfrac{B_{n-1}B_n}{B_nC_{n-1}}=\dfrac{C_{n-1}C_n}{C_nA_{n-1}}=\dfrac1{n-1}$$ So for example, $A_2B_2C_2$ is formed by taking the midpoints of the sides of $A_1B_1C_1$ . Now, we can write $\tfrac{|A_5B_5C_5|}{|A_1B_1C_1|}=\tfrac mn$ where $m$ and $n$ are relatively prime integers. Find $m+n$ . (For a triangle $\triangle ABC$ , $|ABC|$ denotes its area.)
