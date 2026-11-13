---
tag: 3WSKR3WJNE
kind: problem
type: answer
answer: \frac{1}{\pi}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178425
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(a) Calculate

$$
\int_{0}^{1} x \sin \left(\pi x^{2}\right) \mathrm{d} x
$$

(b) Calculate

$$
\lim _{n \rightarrow \infty} \frac{1}{n} \sum_{k=0}^{n-1} k \int_{\frac{k}{n}}^{\frac{k+1}{n}} \sin \left(\pi x^{2}\right) \mathrm{d} x
$$
