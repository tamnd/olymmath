---
tag: WYKEXX5FX8
kind: problem
appearances:
  - at: pumac/2020/ga8
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2020 official paper
    url: https://pumac.princeton.edu/s/2020GeometryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2747354
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73222
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$A_1A_2A_3A_4$ is a cyclic quadrilateral inscribed in circle $\Omega$ , with side lengths $A_1A_2 = 28$ , $A_2A_3 =12\sqrt3$ , $A_3A_4 = 28\sqrt3$ , and $A_4A_1 = 8$ . Let $X$ be the intersection of $A_1A_3, A_2A_4$ . Now, for $i = 1, 2, 3, 4$ , let $\omega_i$ be the circle tangent to segments $ A_iX$ , $A_{i+1}X$ , and $\Omega$ , where we take indices cyclically (mod $4$ ). Furthermore, for each $i$ , say $\omega_i$ is tangent to $A_1A_3$ at $X_i $ , $A_2A_4$ at $Y_i$ , and $\Omega$ at $T_i$ . Let $P_1$ be the intersection of $T_1X_1$ and $T_2X_2$ , and $P_3$ the intersection of $T_3X_3$ and $T_4X_4$ . Let $P_2$ be the intersection of $T_2Y_2$ and $T_3Y_3$ , and $P_4$ the intersection of $T_1Y_1$ and $T_4Y_4$ . Find the area of quadrilateral $P_1P_2P_3P_4$ .
