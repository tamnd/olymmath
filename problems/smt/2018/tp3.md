---
tag: KCEQ46ZA4V
kind: problem
appearances:
  - at: smt/2018/tp3
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: stanford-smt
    name: Stanford Math Tournament 2018 official paper
    url: https://www.stanfordmathtournament.org/pdfs/smt2018/team-problems.pdf
    page: 3
    origin: H1
    zone: Z2
    kind: official
    extraction: vision/codex@0.167.0 (gpt-6-sol)
    confidence: 0.9
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h2766616
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=74015
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263501
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that if $A$ is a shape in the Cartesian coordinate plane with area greater than $1$, then there are distinct points $(a,b)$, $(c,d)$ in $A$ where $a-c=2x+5y$ and $b-d=x+3y$ where $x,y$ are integers.

<!-- S2 -->
Show that if $ A$ is a shape in the Cartesian coordinate plane with area greater than $ 1$ , then there are distinct points $(a, b)$ , $(c, d)$ in $A$ where $a - c = 2x + 5y$ and $b - d = x + 3y$ where $x, y$ are integers.
