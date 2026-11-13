---
tag: 7KDPMCDVBF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1219324
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14539
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216333
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
Let $N$ be the number of polynomials $P(x_1, x_2, \dots, x_{2016})$ of degree at most $2015$ with coefficients in the set $\{0, 1, 2 \}$ such that $P(a_1,a_2,\cdots ,a_{2016}) \equiv 1 \pmod{3}$ for all $(a_1,a_2,\cdots ,a_{2016}) \in \{0, 1\}^{2016}.$ Compute the remainder when $v_3(N)$ is divided by $2011$ , where $v_3(N)$ denotes the largest integer $k$ such that $3^k | N.$ *Proposed by Yang Liu*
