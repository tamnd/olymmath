---
tag: WQA80DBST3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75938
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$$
a(b+1)+b(c+1)+c(d+1)+d(a+1) \geqq \frac{1}{2}(a+1)(b+1)(c+1)(d+1)
$$

holds for any positive numbers $a, b, c, d$ that satisfy the condition
a) $a b=c d=1 ; $ b) $a c=b d=1$.
