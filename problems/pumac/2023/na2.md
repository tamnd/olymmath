---
tag: 4YRK3SS80W
kind: problem
appearances:
  - at: pumac/2023/na2
    primary: true
  - at: pumac/2023/nb4
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2023 official paper
    url: https://pumac.princeton.edu/s/Number_Theory_A_2023.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3435005
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73448
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A number is called *good* if it can be written as the sum of the squares of three consecutive positive integers. A number is called excellent if it can be written as the sum of the squares of four consecutive positive integers. (For instance, $14 = 1^2 + 2^2 + 3^2$ is good and $30 =1^2 +2^2 +3^2+4^2$ is excellent.) A good number $G$ is called *splendid* if there exists an excellent number $E$ such that $3G-E = 2025.$ If the sum of all splendid numbers is $S,$ find the remainder when $S$ is divided by $1000.$
