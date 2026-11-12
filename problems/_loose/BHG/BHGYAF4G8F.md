---
tag: BHGYAF4G8F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2199658
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18975
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/2020
    source: hf-ai-mo-aops
    label: 2020 Irish Math Olympiad
---
We say an integer $n$ is naoish if $n \geq 90$ and the second-to-last digit of $n$ (in decimal notation) is equal to $9$ . For example, $10798$ , $1999$ and $90$ are naoish, whereas $9900$ , $2009$ and $9$ are not. Nino expresses 2020 as a sum:
$$
2020=n_{1}+n_{2}+\ldots+n_{k}
$$
where each of the $n_{j}$ is naoish.

What is the smallest positive number $k$ for which Nino can do this?
