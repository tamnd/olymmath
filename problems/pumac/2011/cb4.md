---
tag: 1E23XRPGEX
kind: problem
appearances:
  - at: pumac/2011/cb4
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2011 official paper
    url: https://pumac.princeton.edu/s/PUMaC2011_CombinatoricsB.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1920839
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7037
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A function $f:\{1,2, \ldots, n\} \to \{1, \ldots, m\}$ is *multiplication-preserving* if $f(i)f(j) = f(ij)$ for all $1 \le i \le j \le ij \le n$ , and *injective* if $f(i) = f(j)$ only when $i = j$ . For $n = 9, m = 88$ , the number of injective, multiplication-preserving functions is $N$ . Find the sum of the prime factors of $N$ , including multiplicity. (For example, if $N = 12$ , the answer would be $2 + 2 + 3 = 7$ .)
