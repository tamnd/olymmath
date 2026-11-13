---
tag: H1YDTP7JWE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75722
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In triangle $ABC$, let $S_{a}, S_{b}, S_{c}$ be the midpoints of its sides $BC, CA, AB$ respectively. Prove that for any point $X$ distinct from points $S_{a}, S_{b}, S_{c}$, the following holds:

$$
\min \left\{\frac{|X A|}{\left|X S_{a}\right|}, \frac{|X B|}{\left|X S_{b}\right|}, \frac{|X C|}{\left|X S_{c}\right|}\right\} \leqq 2
$$

(Patrik Bak)
