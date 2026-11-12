---
tag: DZX877WQAB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34026
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi_{1}, \xi_{2}, \ldots$ be orthogonal random variables and $S_{n}=\xi_{1}+\ldots+\xi_{n}$.

(a) Show that if $\sum \mathrm{E} \xi_{n}^{2}<\infty$, then $S_{n} \rightarrow S$ in mean square, where $S=\sum_{n=1}^{\infty} \xi_{n}$.

(b) If $\sum \mathrm{E} \xi_{n}^{2}=\infty$, show that $\mathrm{E} S_{n}^{2} \rightarrow \infty$.

(c) If $\sum \mathrm{E} \xi_{n}^{2}<\infty$, show that $S_{n} \rightarrow S$ almost surely.

(d) If $\sum \mathrm{E} \xi_{n}^{2}=\infty$, show that $S_{n}$ does not converge almost surely.

(e) If $\sum \mathrm{E} \xi_{n}^{2}<\infty$, establish the Rademacher-Menchoff theorem, which states that $S_{n} \rightarrow S$ almost surely if $\sum \mathrm{E} \xi_{n}^{2} \log ^{2} n<\infty$.
