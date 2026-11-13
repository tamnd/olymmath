---
tag: E3FWJRMC85
kind: problem
type: answer
answer: \frac{27}{16}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241969
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find $\lim_{n\to\infty} \left(\frac{_{3n}C_n}{_{2n}C_n}\right)^{\frac{1}{n}}$

where $_iC_j$ is a binominal coefficient which means $\frac{i\cdot (i-1)\cdots(i-j+1)}{j\cdot (j-1)\cdots 2\cdot 1}$.
