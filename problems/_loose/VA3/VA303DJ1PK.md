---
tag: VA303DJ1PK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h50154
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44280
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2005
    source: hf-ai-mo-aops
    label: 2005 Iran MO (3rd Round)
---
$k$ is an integer. We define the sequence $\{a_n\}_{n=0}^{\infty}$ like this:
$$a_0=0,\ \ \ a_1=1,\ \ \ a_n=2ka_{n-1}-(k^2+1)a_{n-2}\ \ (n \geq 2)$$
$p$ is a prime number that $p\equiv 3(\text{mod}\ 4)$
a) Prove that $a_{n+p^2-1}\equiv a_n(\text{mod}\ p)$
b) Prove that $a_{n+p^3-p}\equiv a_n(\text{mod}\ p^2)$
