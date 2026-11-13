---
tag: WWF00PASBM
kind: problem
appearances:
  - at: bmt/2017/an6
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: berkeley-mt
    name: Berkeley Math Tournament 2017 official paper
    url: https://berkeley.mt/archives/bmt-2017/AnaS2017.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2017 BMT Spring
    url: https://artofproblemsolving.com/community/c6h3274347
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70059
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the function $f(x, y, z) = (x-y +z,y -z +x, z-x+y)$ and denote by $f^{(n)}(x, y,z)$ the function $f$ applied $n$ times to the tuple $(x,y,z)$ . Let $r_1$ , $r_2$ , $r_3$ be the three roots of the equation $x^3- 4x^2 + 12 = 0$ and let $g(x) = x^3 + a_2x^2 + a_1x + a_0$ be the cubic polynomial with the tuple $f^{(3)}(r_1, r_2, r_3)$ as roots. Find the value of $a_1$ .
