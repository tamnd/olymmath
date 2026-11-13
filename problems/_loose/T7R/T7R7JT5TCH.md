---
tag: T7R7JT5TCH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84379
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that the usual algorithms for adding and subtracting two integers $m$ and $n$, studied in primary school, have time complexities of $\mathcal{O}(\log (m) + \log (n))$, and then show that the algorithms for multiplication and Euclidean division have time complexities of $\mathcal{O}(\log (m) \log (n))$.

In fact, more efficient algorithms for multiplication and Euclidean division, i.e., with lower time complexity, such as the Karatsuba algorithm, the Toom-Cook algorithm, or the fast Fourier transform, can be found. However, such algorithms are not the subject of the study below, and we will content ourselves with using the usual algorithms from now on.
