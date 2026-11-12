---
tag: MMZT4RHJKE
kind: problem
type: answer
answer: '\begin{aligned}&forn=1:3,4,5\\&forn=2:5,12,13\\&forn=3:7,24,25\\&forn=4:9,40,41\\&forn=5:'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=37682
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The Pythagorean rule for calculating the sides of a right-angled triangle is based on the identity:

$$
(2 n+1)^{2}+\left(2 n^{2}+2 n\right)^{2}=\left(2 n^{2}+2 n+1\right)^{2}
$$

Using this identity, calculate the sides of the right-angled triangles for $ n=1,2,3,4,5 $.
