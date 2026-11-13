---
tag: 82B7NQAP3Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2117562
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54919
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230363
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2017
    source: hf-ai-mo-aops
    label: 2017 239 Open Mathematical Olympiad
---
A polynomial $f(x)$ with integer coefficients is given. We define $d(a,k)=|f^k(a)-a|.$ It is known that for each integer $a$ and natural number $k$ , $d(a,k)$ is positive. Prove that for all such $a,k$ , $$ d(a,k) \geq \frac{k}{3}. $$ ( $f^k(x)=f(f^{k-1}(x)), f^0(x)=x.$ )
