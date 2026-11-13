---
tag: 4DAD5Q32JW
kind: problem
type: answer
answer: f(x) = x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242013
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For arbiterary integers $n,$ find the continuous function $f(x)$ which satisfies the following equation. $$\lim_{h\rightarrow 0}\frac{1}{h}\int_{x-nh}^{x+nh}f(t) dt=2f(nx).$$ Note that $x$ can range all real numbers and $f(1)=1.$
