---
tag: S8PWVRRBKA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38734
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $2 n+2$ numbers $a_{-n}, a_{-n+1}, \ldots, a_{n+1}$. Consider $2 n+2$ numbers

$$
b_{q}=\frac{1}{\sqrt{2 n}} \sum_{p=-n}^{n+1} a_{p} \varepsilon^{p q}, q=-n,-n+1, \ldots, n+1
$$

where $\varepsilon=\cos \frac{\pi}{n}+i \sin \frac{\pi}{n}$. Prove that

$$
a_{p}=\frac{1}{\sqrt{2 n}} \sum_{q=-n}^{n+1} b_{q} \varepsilon^{-p q}
$$
