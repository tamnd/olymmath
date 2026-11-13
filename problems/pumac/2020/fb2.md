---
tag: 742YPCZRGV
kind: problem
appearances:
  - at: pumac/2020/fb2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2020 official paper
    url: https://pumac.princeton.edu/s/2020_Indiv_Finals_B.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2747876
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73248
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263169
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that there is a positive integer $M$ for which the following statement holds:
For all prime numbers $p$ , there is an integer $n$ for which $\sqrt{p} \le n \le M\sqrt{p}$ and $p \mod n \le \frac{n}{2020}$ .

Note: Here, $p \mod n$ denotes the unique integer $r \in {0, 1, ..., n - 1}$ for which $n|p -r$ . In other words, $p \mod n$ is the residue of $p$ upon division by $n$ .
