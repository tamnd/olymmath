---
tag: FVY45JBAH7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h1091585
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12871
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214779
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2015
    source: hf-ai-mo-aops
    label: 2015 NIMO Problems
---
Let $a$ , $b$ , $c$ be positive integers and $p$ be a prime number. Assume that $$ a^n(b+c)+b^n(a+c)+c^n(a+b)\equiv 8\pmod{p} $$ for each nonnegative integer $n$ . Let $m$ be the remainder when $a^p+b^p+c^p$ is divided by $p$ , and $k$ the remainder when $m^p$ is divided by $p^4$ . Find the maximum possible value of $k$ .

*Proposed by Justin Stevens and Evan Chen*
