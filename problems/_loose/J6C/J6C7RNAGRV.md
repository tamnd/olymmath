---
tag: J6C7RNAGRV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33999
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi_{1}, \xi_{2}, \ldots$ be independent and identically distributed random variables such that $n \mathrm{P}\left(\left|\xi_{1}\right|>\varepsilon f(n)\right)=o(1), n \rightarrow \infty$, for some $f(n) \rightarrow \infty$ and any $\varepsilon>0$. Show that

$$
\frac{\xi_{n: n}}{f(n)} \xrightarrow{p} 0
$$

where $\xi_{n: n}=\max \left\{\xi_{1}, \ldots, \xi_{n}\right\}$.
