---
tag: 1TN747MKWE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Indonesia MO
    url: https://artofproblemsolving.com/community/c6h3388539
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=43598
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: id-osn/2024
    source: hf-ai-mo-aops
    label: 2024 Indonesia MO
---
The triplet of positive integers $(a,b,c)$ with $a<b<c$ is called a *fatal* triplet if there exist three nonzero integers $p,q,r$ which satisfy the equation $a^p b^q c^r = 1$ .
As an example, $(2,3,12)$ is a fatal triplet since $2^2 \cdot 3^1 \cdot (12)^{-1} = 1$ .
The positive integer $N$ is called *fatal* if there exists a fatal triplet $(a,b,c)$ satisfying $N=a+b+c$ .
(a) Prove that 16 is not *fatal*.
(b) Prove that all integers bigger than 16 which are **not** an integer multiple of 6 are fatal.
