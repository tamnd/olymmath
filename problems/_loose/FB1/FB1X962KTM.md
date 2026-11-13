---
tag: FB1X962KTM
kind: problem
type: answer
answer: \frac{\sqrt{6}}{6}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114775
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The 36th question, the sequence $\left\{a_{n}\right\}: a_{0}=a_{1}=1, a_{n}=\sqrt{\frac{n}{2}+a_{n-1} a_{n-2}}(n \geq 2)$, find all real numbers $t$, such that for any positive integer $\mathrm{n}$, it always holds that $\mathrm{tn}<\mathrm{a}_{\mathrm{n}}<\mathrm{tn}+1$.
