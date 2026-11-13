---
tag: GPQ72JGHJ6
kind: problem
type: answer
answer: \left( \tan^{-1} \frac{1}{2} \right)^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269069
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The Pell numbers $P_n$ satisfy $P_0 = 0$, $P_1 = 1$, and $P_n=2P_{n-1}+P_{n-2}$ for $n\geq 2$. Find $$\sum \limits_{n=1}^{\infty} \left (\tan^{-1}\frac{1}{P_{2n}}+\tan^{-1}\frac{1}{P_{2n+2}}\right )\tan^{-1}\frac{2}{P_{2n+1}}$$
