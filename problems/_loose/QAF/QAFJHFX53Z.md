---
tag: QAFJHFX53Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1219316
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14534
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
Given a prime $p$ and positive integer $k$ , an integer $n$ with $0 \le n < p$ is called a $(p, k)$ -Hofstadterian residue if there exists an infinite sequence of integers $n_0, n_1, n_2, \ldots$ such that $n_0 \equiv n$ and $n_{i + 1}^k \equiv n_i \pmod{p}$ for all integers $i \ge 0$ . If $f(p, k)$ is the number of $(p, k)$ -Hofstadterian residues, then compute $ \sum_{k = 1}^{2016} f(2017, k)$ .

*Proposed by Ashwin Sah*
