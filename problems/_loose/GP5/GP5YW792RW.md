---
tag: GP5YW792RW
kind: problem
type: answer
answer: k = \frac{1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268421
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the largest constant $k$ such that the inequality
$$a^2+b^2+c^2-ab-bc-ca \ge k \left|\frac{a^3-b^3}{a+b}+\frac{b^3-c^3}{b+c}+\frac{c^3-a^3}{c+a}\right|$$
holds for any for non negative real numbers $a,b,c$ with $(a+b)(b+c)(c+a)>0$.
