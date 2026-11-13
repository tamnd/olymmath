---
tag: NKC1SGSTC1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2018
    url: https://artofproblemsolving.com/community/c6h3042618
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57210
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250029
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2018
    source: hf-ai-mo-aops
    label: Russian TST 2018
---
Let $f(x) = x^2 + 2018x + 1$ . Let $f_1(x)=f(x)$ and $f_k(x)=f(f_{k-1}(x))$ for all $k\geqslant 2$ . Prove that for any positive integer $n{}$ , the equation $f_n(x)=0$ has at least two distinct real roots.
