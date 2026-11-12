---
tag: 32S8H9NTDJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54599
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each non-right triangle $T$, let $T_{1}$ be the triangle whose vertices are the feet of the altitudes of triangle $T$; let $T_{2}$ be the triangle whose vertices are the feet of the altitudes of triangle $T_{1}$; similarly, define triangles $T_{3}, T_{4}$, and so on. What should triangle $T$ be so that

a) triangle $T_{1}$ is acute?

b) in the sequence $T_{1}, T_{2}, T_{3}, \ldots$ there is a right triangle $T_{n}$ (and thus triangle $T_{n+1}$ is not defined)

c) triangle $T_{3}$ is similar to triangle $T$?

d) For each natural number $n$, determine how many non-similar triangles $T$ exist such that triangle $T_{n}$ is similar to triangle $T$.
