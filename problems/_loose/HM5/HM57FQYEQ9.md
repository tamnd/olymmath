---
tag: HM57FQYEQ9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1339716
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14558
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216352
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
Let $X_1X_2X_3$ be a triangle with $X_1X_2 = 4, X_2X_3 = 5, X_3X_1 = 7,$ and centroid $G$ . For all integers $n \ge 3$ , define the set $S_n$ to be the set of $n^2$ ordered pairs $(i,j)$ such that $1\le i\le n$ and $1\le j\le n$ . Then, for each integer $n\ge 3$ , when given the points $X_1, X_2, \ldots , X_{n}$ , randomly choose an element $(i,j)\in S_n$ and define $X_{n+1}$ to be the midpoint of $X_i$ and $X_j$ . The value of

$$ \sum_{i=0}^\infty \left(\mathbb{E}\left[X_{i+4}G^2\right]\left(\dfrac{3}{4}\right)^i\right) $$

can be expressed in the form $p + q \ln 2 + r \ln 3$ for rational numbers $p, q, r$ . Let $|p| + |q| + |r| = \dfrac mn$ for relatively prime positive integers $m$ and $n$ . Compute $100m+n$ .

Note: $\mathbb{E}(x)$ denotes the expected value of $x$ .

*Proposed by Yang Liu*
