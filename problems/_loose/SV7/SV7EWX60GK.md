---
tag: SV7EWX60GK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1219315
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14533
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2016
    source: hf-ai-mo-aops
    label: 2016 Online Math Open Problems
---
Kevin is in kindergarten, so his teacher puts a $100 \times 200$ addition table on the board during class. The teacher first randomly generates distinct positive integers $a_1, a_2, \dots, a_{100}$ in the range $[1, 2016]$ corresponding to the rows, and then she randomly generates distinct positive integers $b_1, b_2, \dots, b_{200}$ in the range $[1, 2016]$ corresponding to the columns. She then fills in the addition table by writing the number $a_i+b_j$ in the square $(i, j)$ for each $1\le i\le 100$ , $1\le j\le 200$ .

During recess, Kevin takes the addition table and draws it on the playground using chalk. Now he can play hopscotch on it! He wants to hop from $(1, 1)$ to $(100, 200)$ . At each step, he can jump in one of $8$ directions to a new square bordering the square he stands on a side or at a corner. Let $M$ be the minimum possible sum of the numbers on the squares he jumps on during his path to $(100, 200)$ (including both the starting and ending squares). The expected value of $M$ can be expressed in the form $\frac{p}{q}$ for relatively prime positive integers $p, q$ . Find $p + q.$ *Proposed by Yang Liu*
