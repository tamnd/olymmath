---
tag: VHG311NV6Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250723
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a school, there are totally $n$ students, with $n \ge 2$. The students take part in $m$ clubs and in each club, there are at least $2$ members (a student may take part in more than $1$ club). Eventually, the Principal notices that: If $2$ clubs share at least $2$ common members then they have different numbers of members. Prove that $$m \le (n - 1)^2$$
